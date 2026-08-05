/* ==========================================================================
   Portfolio engine — renders the page from content.js and drives the motion.
   You should never need to edit this file. All your content lives in
   assets/js/content.js
   ========================================================================== */
(function () {
  "use strict";

  var C = window.PORTFOLIO;
  if (!C) {
    console.error("content.js did not load — check assets/js/content.js for a typo (a missing comma or quote).");
    return;
  }

  /* ------------------------------ helpers -------------------------------- */

  // Create an element safely. Text is always set with textContent (never HTML),
  // so characters like & < > can never break the page.
  function h(tag, opts, children) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.class) node.className = opts.class;
    if (opts.text != null) node.textContent = opts.text;
    if (opts.attrs) {
      Object.keys(opts.attrs).forEach(function (k) {
        var v = opts.attrs[k];
        if (v != null && v !== false) node.setAttribute(k, v === true ? "" : v);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function q(sel) { return document.querySelector(sel); }
  function qa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function has(v) { return typeof v === "string" ? v.trim() !== "" : !!v; }
  function list(v) { return Array.isArray(v) ? v : []; }
  function setText(sel, value) { var n = q(sel); if (n) n.textContent = value || ""; }

  var basics   = C.basics   || {};
  var settings = C.settings || {};

  // Declared up here because the chart renderer below needs it too.
  var reduceMotion = !!(window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ------------------------------ theme ---------------------------------- */

  var THEME_KEY = "sy-portfolio-theme";

  function resolveTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* private mode */ }
    if (saved === "light" || saved === "dark") return saved;

    var pref = settings.defaultTheme || "system";
    if (pref === "light" || pref === "dark") return pref;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var toggle = q("#themeToggle");
    if (toggle) {
      var label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
    }
  }

  applyTheme(resolveTheme());

  var themeToggle = q("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ------------------------------ accent --------------------------------- */

  if (has(settings.accent)) {
    document.documentElement.style.setProperty("--accent", settings.accent);

    // Derive a lighter version of the accent for text on dark backgrounds,
    // so dark mode always stays readable whatever accent colour is chosen.
    var lift = lighten(settings.accent, 0.38);
    if (lift) document.documentElement.style.setProperty("--accent-lift", lift);
  }

  // Mixes a hex colour with white. amount 0 = unchanged, 1 = white.
  function lighten(hex, amount) {
    var m = String(hex).trim().replace(/^#/, "");
    if (m.length === 3) m = m[0] + m[0] + m[1] + m[1] + m[2] + m[2];
    if (!/^[0-9a-fA-F]{6}$/.test(m)) return null;
    var num = parseInt(m, 16);
    var r = (num >> 16) & 255, g = (num >> 8) & 255, b = num & 255;
    function up(v) { return Math.round(v + (255 - v) * amount); }
    function hx(v) { return ("0" + v.toString(16)).slice(-2); }
    return "#" + hx(up(r)) + hx(up(g)) + hx(up(b));
  }

  /* ------------------------------ head / meta ---------------------------- */

  if (has(basics.pageTitle)) document.title = basics.pageTitle;

  if (has(basics.metaDesc)) {
    var md = q('meta[name="description"]');
    if (md) md.setAttribute("content", basics.metaDesc);
  }
  if (has(basics.siteUrl)) {
    var og = q('meta[property="og:url"]');
    if (og) og.setAttribute("content", basics.siteUrl);
    var canon = q('link[rel="canonical"]');
    if (canon) canon.setAttribute("href", basics.siteUrl);
  }

  /* ------------------------------ hero ----------------------------------- */

  setText("[data-logo]", basics.shortName || basics.fullName);
  setText("[data-hero-name]", basics.fullName);
  setText("[data-hero-headline]", basics.headline);
  setText("[data-hero-intro]", basics.intro);
  setText("[data-hero-location]", basics.location);

  if (!has(basics.location)) {
    var eyebrow = q(".hero__eyebrow");
    if (eyebrow) eyebrow.hidden = true;
  }

  // CV buttons
  [q("#navCv"), q("#heroCv")].filter(Boolean).forEach(function (a) {
    if (has(basics.cvUrl)) {
      a.setAttribute("href", basics.cvUrl);
      if (has(basics.cvLabel)) a.textContent = basics.cvLabel;
    } else {
      a.remove();
    }
  });

  // LinkedIn buttons
  [q("#heroLinkedin"), q("#contactLinkedin")].filter(Boolean).forEach(function (a) {
    if (has(basics.linkedin)) a.setAttribute("href", basics.linkedin);
    else a.remove();
  });

  // Email buttons
  [q("#heroEmail"), q("#contactEmail")].filter(Boolean).forEach(function (a) {
    if (has(basics.email)) a.setAttribute("href", "mailto:" + basics.email);
    else a.remove();
  });

  // Portrait: photo if provided, otherwise initials. Falls back to initials
  // automatically if the image file is missing.
  (function renderPortrait() {
    var wrap = q("[data-portrait]");
    if (!wrap) return;

    function initials() {
      var name = (basics.fullName || "").trim();
      var parts = name.split(/\s+/).filter(Boolean);
      var txt = parts.length >= 2
        ? (parts[0].charAt(0) + parts[parts.length - 1].charAt(0))
        : (name.slice(0, 2) || "SY");
      wrap.appendChild(h("span", { class: "portrait__initials", text: txt.toUpperCase() }));
    }

    if (!has(basics.photo)) { initials(); return; }

    var img = h("img", {
      attrs: {
        src: basics.photo,
        alt: (basics.fullName || "Profile") + " — portrait",
        decoding: "async"
      }
    });
    img.addEventListener("error", function () {
      img.remove();
      if (!wrap.querySelector(".portrait__initials")) initials();
    });
    wrap.appendChild(img);
  })();

  // Target-role pills
  (function renderRoles() {
    var ul = q("[data-target-roles]");
    if (!ul) return;
    var roles = list(C.targetRoles).filter(has);
    if (!roles.length) { ul.remove(); return; }
    roles.forEach(function (r) { ul.appendChild(h("li", { text: r })); });
  })();

  // Metrics proof strip
  (function renderMetrics() {
    var ul = q("[data-metrics]");
    if (!ul) return;
    var items = list(C.metrics);
    if (!items.length) { ul.remove(); return; }

    items.forEach(function (m) {
      ul.appendChild(h("li", { class: "metric" }, [
        h("div", { class: "metric__value" }, [
          h("span", { class: "metric__num", text: m.value || "" }),
          has(m.suffix) ? h("span", { class: "metric__suffix", text: m.suffix }) : null
        ]),
        h("div", { class: "metric__label", text: m.label || "" })
      ]));
    });
  })();

  /* --------------------------- impact gauges ------------------------------
     Each dial is a METER: one value against 100%, with a same-ramp track.
     One hue for all four on purpose - four distinct hues cannot clear the
     colourblind all-pairs floor in dark mode. Every value also appears as a
     visible number, a caption and a table row, so colour never carries
     meaning on its own.                                                     */
  (function renderGauges() {
    var section = q("[data-impact]");
    if (!section) return;

    var cfg = C.impact || {};
    var items = list(cfg.items).filter(function (i) {
      return i && has(i.label) && Number(i.value) > 0;
    });
    if (!items.length) { section.remove(); return; }

    setText("[data-impact-kicker]", cfg.kicker);
    setText("[data-impact-heading]", cfg.heading);
    setText("[data-impact-note]", cfg.note);

    var grid    = q("[data-impact-rows]");
    var readout = q("[data-impact-readout]");
    var tbody   = q("[data-impact-tbody]");
    var toggle  = q("[data-impact-table-toggle]");
    var wrap    = q("#impactTable");

    var defaultNote = has(cfg.baseline) ? cfg.baseline : "";
    if (readout) readout.textContent = defaultNote;

    var R = 42;                          // ring radius in the 0 0 100 100 viewBox
    var CIRC = 2 * Math.PI * R;          // 263.894...

    if (grid) {
      grid.setAttribute("aria-label", "Improvement delivered by the automation tool: " +
        items.map(function (i) { return i.label + " " + Number(i.value) + " percent"; }).join(", ") + ".");
    }

    items.forEach(function (item, idx) {
      var val = Math.max(0, Math.min(100, Number(item.value)));
      var detail = item.label + " · " + val + "%" + (has(item.note) ? " — " + item.note : "");

      // ---- the dial (SVG). Rotated -90deg in CSS so it starts at 12 o'clock.
      var svgNS = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");

      var disc = document.createElementNS(svgNS, "circle");
      disc.setAttribute("class", "gauge__disc");
      disc.setAttribute("cx", "50"); disc.setAttribute("cy", "50"); disc.setAttribute("r", "31");

      var track = document.createElementNS(svgNS, "circle");
      track.setAttribute("class", "gauge__track");
      track.setAttribute("cx", "50"); track.setAttribute("cy", "50"); track.setAttribute("r", String(R));

      var fill = document.createElementNS(svgNS, "circle");
      fill.setAttribute("class", "gauge__fill");
      fill.setAttribute("cx", "50"); fill.setAttribute("cy", "50"); fill.setAttribute("r", String(R));
      fill.setAttribute("stroke-dasharray", CIRC.toFixed(2));
      fill.setAttribute("stroke-dashoffset", CIRC.toFixed(2));   // starts empty

      svg.appendChild(disc); svg.appendChild(track); svg.appendChild(fill);

      var dial = h("span", { class: "gauge__dial" });
      dial.appendChild(svg);
      dial.appendChild(h("span", { class: "gauge__pct", text: val + "%" }));

      var card = h("button", {
        class: "gauge",
        attrs: { type: "button", "aria-label": detail }
      }, [
        dial,
        h("span", { class: "gauge__label", text: item.label }),
        has(item.note) ? h("span", { class: "gauge__note", text: item.note }) : null
      ]);

      function activate()   { if (readout) readout.textContent = detail; }
      function deactivate() { if (readout) readout.textContent = defaultNote; }
      card.addEventListener("mouseenter", activate);
      card.addEventListener("mouseleave", deactivate);
      card.addEventListener("focus", activate);
      card.addEventListener("blur", deactivate);

      if (grid) grid.appendChild(card);

      // ---- sweep the ring in when it scrolls into view. Never leave it empty:
      //      reduced motion, a hidden tab or no observer all draw it instantly.
      var offset = CIRC * (1 - val / 100);
      function draw() { fill.setAttribute("stroke-dashoffset", offset.toFixed(2)); }

      if (reduceMotion || document.hidden || !("IntersectionObserver" in window)) {
        draw();
      } else {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              setTimeout(draw, idx * 110);   // slight stagger across the row
              io.disconnect();
            }
          });
        }, { threshold: 0.35 });
        io.observe(card);
        setTimeout(function () {
          if (fill.getAttribute("stroke-dashoffset") === CIRC.toFixed(2)) draw();
        }, 2000);
      }

      if (tbody) {
        tbody.appendChild(h("tr", {}, [
          h("td", { text: item.label }),
          h("td", { text: val + "%" })
        ]));
      }
    });

    if (toggle && wrap) {
      toggle.addEventListener("click", function () {
        var open = wrap.hidden;
        wrap.hidden = !open;
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.textContent = open ? "Hide table" : "View as table";
      });
    }

    section.hidden = false;
  })();

  /* ------------------------------ about ---------------------------------- */

  setText("[data-about-kicker]", (C.about || {}).kicker);
  setText("[data-about-heading]", (C.about || {}).heading);

  (function renderAbout() {
    var about = C.about || {};
    var body = q("[data-about-body]");
    if (body) {
      list(about.paragraphs).forEach(function (p) {
        if (has(p)) body.appendChild(h("p", { text: p }));
      });
    }
    var ul = q("[data-principles]");
    if (!ul) return;
    var items = list(about.principles);
    if (!items.length) { ul.remove(); return; }
    items.forEach(function (p, i) {
      ul.appendChild(h("li", {
        attrs: { "data-reveal": true, "data-reveal-delay": String(Math.min(i + 1, 6)) }
      }, [
        h("h3", { text: p.title || "" }),
        h("p", { text: p.text || "" })
      ]));
    });
  })();

  /* ------------------------------ case studies --------------------------- */

  setText("[data-work-kicker]", C.caseStudiesKicker);
  setText("[data-work-heading]", C.caseStudiesHeading);

  (function renderCases() {
    var wrap = q("[data-cases]");
    if (!wrap) return;
    var items = list(C.caseStudies);
    if (!items.length) {
      var section = q("#work");
      if (section) section.remove();
      return;
    }

    items.forEach(function (cs, i) {
      var panelId = "case-panel-" + i;
      var headId  = "case-head-" + i;

      var eyebrow = h("span", { class: "case__eyebrow" });
      var bits = [
        has(cs.org)    ? h("span", { class: "org", text: cs.org }) : null,
        has(cs.client) ? h("span", { text: cs.client }) : null,
        has(cs.period) ? h("span", { text: cs.period }) : null
      ].filter(Boolean);
      bits.forEach(function (b, idx) {
        if (idx) eyebrow.appendChild(h("span", { class: "sep", text: "·" }));
        eyebrow.appendChild(b);
      });

      var plus = h("span", { class: "case__toggle", attrs: { "aria-hidden": "true" } });
      plus.innerHTML = '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';

      var titleEl   = h("span", { class: "case__title", text: cs.title || "" });
      var summaryEl = has(cs.summary) ? h("span", { class: "case__summary", text: cs.summary }) : null;
      var headText  = h("span", { class: "case__headtext" }, [eyebrow, titleEl, summaryEl]);

      var head = h("button", {
        class: "case__head",
        attrs: { type: "button", id: headId, "aria-expanded": "false", "aria-controls": panelId }
      }, [headText, plus]);

      // ---- body: situation + what I did
      var left = h("div", {});
      if (has(cs.context)) {
        left.appendChild(h("p", { class: "case__label", text: "The situation" }));
        left.appendChild(h("p", { class: "case__context", text: cs.context }));
      }
      var actions = list(cs.actions).filter(has);
      if (actions.length) {
        left.appendChild(h("p", { class: "case__label case__label--spaced", text: "What I did" }));
        var aUl = h("ul", { class: "case__actions" });
        actions.forEach(function (a) { aUl.appendChild(h("li", { text: a })); });
        left.appendChild(aUl);
      }

      // ---- body: results
      var right = null;
      var results = list(cs.results);
      if (results.length) {
        right = h("div", {}, [h("p", { class: "case__label", text: "Result" })]);
        var rWrap = h("div", { class: "case__results" });
        results.forEach(function (r) {
          rWrap.appendChild(h("div", { class: "result" }, [
            h("div", { class: "result__value", text: r.value || "" }),
            h("div", { class: "result__label", text: r.label || "" })
          ]));
        });
        right.appendChild(rWrap);
      }

      var body = h("div", { class: "case__body" }, [
        h("div", { class: "case__grid" }, [left, right].filter(Boolean))
      ]);

      var tags = list(cs.tags).filter(has);
      if (tags.length) {
        var tUl = h("ul", { class: "tags" });
        tags.forEach(function (t) { tUl.appendChild(h("li", { text: t })); });
        body.appendChild(tUl);
      }

      var panel = h("div", {
        class: "case__panel",
        attrs: { id: panelId, role: "region", "aria-labelledby": headId }
      }, [h("div", {}, [body])]);

      var card = h("article", {
        class: "case",
        attrs: { "data-reveal": true, "data-reveal-delay": String(Math.min(i + 1, 6)) }
      }, [head, panel]);

      head.addEventListener("click", function () {
        var open = card.classList.toggle("is-open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });

      wrap.appendChild(card);
    });
  })();

  /* ------------------------------ experience ----------------------------- */

  setText("[data-exp-kicker]", C.experienceKicker);
  setText("[data-exp-heading]", C.experienceHeading);

  (function renderTimeline() {
    var ol = q("[data-timeline]");
    if (!ol) return;
    var items = list(C.experience);
    if (!items.length) {
      var section = q("#experience");
      if (section) section.remove();
      return;
    }
    items.forEach(function (job) {
      var li = h("li", { class: "tl", attrs: { "data-reveal": true } }, [
        h("span", { class: "tl__node", attrs: { "aria-hidden": "true" } }),
        has(job.period)  ? h("p", { class: "tl__period", text: job.period }) : null,
        h("h3", { class: "tl__role", text: job.role || "" }),
        has(job.company) ? h("p", { class: "tl__company", text: job.company }) : null,
        has(job.meta)    ? h("p", { class: "tl__meta", text: job.meta }) : null
      ]);
      var pts = list(job.points).filter(has);
      if (pts.length) {
        var ul = h("ul", { class: "tl__points" });
        pts.forEach(function (p) { ul.appendChild(h("li", { text: p })); });
        li.appendChild(ul);
      }
      ol.appendChild(li);
    });
  })();

  /* ------------------------------ skills --------------------------------- */

  setText("[data-skills-kicker]", C.skillsKicker);
  setText("[data-skills-heading]", C.skillsHeading);

  (function renderSkills() {
    var wrap = q("[data-skills]");
    if (!wrap) return;
    var groups = list(C.skills);
    if (!groups.length) {
      var section = q("#skills");
      if (section) section.remove();
      return;
    }
    groups.forEach(function (g, i) {
      var ul = h("ul");
      list(g.items).filter(has).forEach(function (it) { ul.appendChild(h("li", { text: it })); });
      wrap.appendChild(h("div", {
        class: "skillset",
        attrs: { "data-reveal": true, "data-reveal-delay": String(Math.min(i + 1, 6)) }
      }, [h("h3", { text: g.group || "" }), ul]));
    });
  })();

  /* ------------------------------ credentials ---------------------------- */

  setText("[data-edu-kicker]", C.educationKicker);
  setText("[data-edu-heading]", C.educationHeading);

  (function renderCredentials() {
    var ol = q("[data-education]");
    if (ol) {
      var items = list(C.education);
      if (!items.length) {
        ol.remove();
      } else {
        items.forEach(function (e, i) {
          ol.appendChild(h("li", {
            class: e.highlight ? "is-highlight" : "",
            attrs: { "data-reveal": true, "data-reveal-delay": String(Math.min(i + 1, 6)) }
          }, [
            e.highlight     ? h("span", { class: "edu__badge", text: has(e.badge) ? e.badge : "Current" }) : null,
            has(e.period)   ? h("p", { class: "edu__period", text: e.period }) : null,
            h("h3", { class: "edu__degree", text: e.degree || "" }),
            has(e.school)   ? h("p", { class: "edu__school", text: e.school }) : null,
            has(e.detail)   ? h("p", { class: "edu__detail", text: e.detail }) : null
          ]));
        });
      }
    }

    var certsUl = q("[data-certs]");
    var certs = list(C.certifications).filter(has);
    if (certsUl) {
      if (!certs.length) {
        var cw = q("[data-certs-wrap]");
        if (cw) cw.remove();
      } else {
        certs.forEach(function (c) { certsUl.appendChild(h("li", { text: c })); });
      }
    }

    var awardsUl = q("[data-awards]");
    var awards = list(C.awards);
    if (awardsUl) {
      if (!awards.length) {
        var aw = q("[data-awards-wrap]");
        if (aw) aw.remove();
      } else {
        awards.forEach(function (a) {
          awardsUl.appendChild(h("li", {}, [
            h("strong", { text: a.title || "" }),
            has(a.detail) ? h("span", { text: a.detail }) : null
          ]));
        });
      }
    }
  })();

  /* ------------------------------ beyond --------------------------------- */

  setText("[data-beyond-kicker]", C.beyondKicker);
  setText("[data-beyond-heading]", C.beyondHeading);

  (function renderBeyond() {
    var wrap = q("[data-beyond]");
    if (!wrap) return;
    var items = list(C.beyond);
    if (!items.length) {
      var section = q("[data-beyond-section]");
      if (section) section.remove();
      var mobileLink = q('.nav__mobile a[href="#beyond"]');
      if (mobileLink) mobileLink.remove();
      return;
    }
    items.forEach(function (b, i) {
      wrap.appendChild(h("article", {
        attrs: { "data-reveal": true, "data-reveal-delay": String(Math.min(i + 1, 6)) }
      }, [
        h("h3", { text: b.title || "" }),
        h("p", { text: b.text || "" })
      ]));
    });
  })();

  /* ------------------------------ contact -------------------------------- */

  (function renderContact() {
    var ct = C.contact || {};
    setText("[data-contact-kicker]", ct.kicker);
    setText("[data-contact-heading]", ct.heading);
    setText("[data-contact-text]", ct.text);

    var badge = q("[data-availability]");
    if (badge) {
      if (has(ct.availability)) { badge.textContent = ct.availability; badge.hidden = false; }
      else badge.remove();
    }

    var note = q("[data-availability-note]");
    if (note) {
      if (has(ct.availabilityNote)) { note.textContent = ct.availabilityNote; note.hidden = false; }
      else note.remove();
    }

    var meta = q("[data-contact-meta]");
    if (!meta) return;
    var rows = [];
    if (has(basics.email))    rows.push({ label: basics.email, href: "mailto:" + basics.email });
    if (has(basics.phone))    rows.push({ label: basics.phone, href: "tel:" + basics.phone.replace(/[^\d+]/g, "") });
    if (has(basics.github))   rows.push({ label: "GitHub", href: basics.github });
    if (has(basics.location)) rows.push({ label: basics.location, href: "" });

    if (!rows.length) { meta.remove(); return; }
    rows.forEach(function (r) {
      var inner = r.href
        ? h("a", { text: r.label, attrs: { href: r.href, rel: "noopener noreferrer" } })
        : h("span", { text: r.label });
      meta.appendChild(h("li", {}, [inner]));
    });
  })();

  /* ------------------------------ footer --------------------------------- */

  setText("[data-footer-note]", settings.footerNote);
  setText("[data-year]", String(new Date().getFullYear()));

  /* ======================================================================
     MOTION
     ====================================================================== */

  /* ---- reveal on scroll ----
     Built defensively: content must NEVER stay invisible. IntersectionObserver
     does not report anything while a tab is hidden/backgrounded, so we also
     (a) reveal whatever is already on screen straight away, (b) re-check when
     the tab becomes visible, and (c) keep a failsafe that reveals everything
     if the observer never reported at all.                                   */
  (function reveals() {
    var targets = qa("[data-reveal]");
    if (!targets.length) return;

    function show(el) {
      // A hidden/background tab freezes CSS transitions, which would leave the
      // element stuck at opacity:0. In that case skip the animation entirely.
      if (document.hidden) el.classList.add("no-anim");
      el.classList.add("is-visible");
    }
    function showAll() { targets.forEach(show); }

    if (reduceMotion || !("IntersectionObserver" in window)) { showAll(); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    targets.forEach(function (t) { io.observe(t); });

    // (a) anything already within the viewport shows immediately
    function sweep() {
      var vh = window.innerHeight || document.documentElement.clientHeight || 0;
      targets.forEach(function (t) {
        if (t.classList.contains("is-visible")) return;
        var r = t.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) { show(t); io.unobserve(t); }
      });
    }
    sweep();

    // (b) tab restored from the background
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) return;
      sweep();
      // re-enable animation for anything revealed while hidden
      requestAnimationFrame(function () {
        qa("[data-reveal].no-anim").forEach(function (el) { el.classList.remove("no-anim"); });
      });
    });

    // (c) failsafe — only fires if the observer produced nothing at all,
    //     so it never spoils the scroll effect when things are working.
    setTimeout(function () {
      if (!document.querySelector("[data-reveal].is-visible")) showAll();
    }, 1500);
  })();

  /* ---- count up the plain-number metrics ---- */
  (function countUp() {
    var nums = qa(".metric__num");
    if (!nums.length || reduceMotion || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);

        var raw = (el.textContent || "").trim();
        // Only animate plain whole numbers ("4", "15"). Ranges like "20–25"
        // are left exactly as written.
        if (!/^\d+$/.test(raw)) return;

        var target = parseInt(raw, 10);
        if (!isFinite(target) || target === 0) return;

        var duration = 900;
        var start = null;
        el.textContent = "0";

        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = raw;
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    nums.forEach(function (n) { io.observe(n); });
  })();

  /* ---- sticky nav shadow + scroll progress ---- */
  (function scrollFx() {
    var nav = q("#nav");
    var bar = q("#scrollProgress");

    if (bar && settings.showScrollProgress === false) { bar.remove(); bar = null; }
    var fill = bar ? bar.querySelector("span") : null;

    var ticking = false;
    function update() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (nav) nav.classList.toggle("is-stuck", y > 8);
      if (fill) {
        var docH = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docH > 0 ? (y / docH) * 100 : 0;
        fill.style.width = Math.max(0, Math.min(100, pct)) + "%";
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  })();

  /* ---- active nav link ---- */
  (function activeLink() {
    if (!("IntersectionObserver" in window)) return;
    var links = qa('.nav__links a[href^="#"]');
    if (!links.length) return;

    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      if (document.getElementById(id)) map[id] = a;
    });

    var ids = Object.keys(map);
    if (!ids.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove("is-active"); });
        var active = map[entry.target.id];
        if (active) active.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    ids.forEach(function (id) { io.observe(document.getElementById(id)); });
  })();

  /* ---- mobile menu ---- */
  (function mobileMenu() {
    var burger = q("#navBurger");
    var menu = q("#mobileMenu");
    if (!burger || !menu) return;

    function close() {
      menu.classList.remove("is-open");
      menu.hidden = true;
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Open menu");
    }
    function open() {
      menu.hidden = false;
      menu.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Close menu");
    }

    burger.addEventListener("click", function () {
      if (burger.getAttribute("aria-expanded") === "true") close(); else open();
    });

    menu.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
        close();
        burger.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && burger.getAttribute("aria-expanded") === "true") close();
    });
  })();
})();
