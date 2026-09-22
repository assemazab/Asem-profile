/* =============================================================
   Portfolio — rendering, i18n (EN/AR), theme, interactions
   ============================================================= */
(function () {
  "use strict";

  /* ---------------- language ---------------- */
  var LANG = (function () {
    try { return localStorage.getItem("portfolio-lang") === "ar" ? "ar" : "en"; }
    catch (e) { return "en"; }
  })();

  /** Resolve a {en, ar} object (or plain value) to the current language. */
  function t(v) {
    if (v === null || v === undefined) return "";
    if (typeof v === "string" || typeof v === "number") return v;
    if (typeof v === "object" && ("en" in v || "ar" in v)) return v[LANG] != null ? v[LANG] : v.en;
    return v;
  }
  function tArr(v) {
    var r = t(v);
    return Array.isArray(r) ? r : [];
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function path(obj, p) {
    return p.split(".").reduce(function (o, k) { return o && o[k]; }, obj);
  }
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  /* ---------------- icons ---------------- */
  var ICONS = {
    cloud: '<path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 9.2 4 4 0 0 1 17.5 19Z"/>',
    container: '<path d="M12 3 4 7v10l8 4 8-4V7Z"/><path d="M4 7l8 4 8-4M12 11v10"/>',
    pipeline: '<circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M7.2 6H14a4 4 0 0 1 0 8H10a4 4 0 0 0 0 8h.2" transform="translate(0,-2)"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>',
    monitor: '<path d="M3 15l4-6 3 4 3-7 4 9"/><rect x="2.5" y="4" width="19" height="16" rx="2"/>',
    network: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
    phone: '<path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z"/>',
    whatsapp: '<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"/><path d="M8.6 8.9c.2 2 1.9 4.5 4.6 5.5.9.3 1.5.1 1.9-.4l.5-.8-2-1-.6.8c-1-.4-1.9-1.3-2.4-2.4l.8-.6-1-2-.8.5c-.5.3-.7.9-.5 1.4Z"/>',
    pin: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7.2v.1M11.5 17v-4a2.4 2.4 0 0 1 4.8 0v4"/>',
    github: '<path d="M9 19c-4 1.4-4-2.2-6-2.8m12 5v-3.6a3.1 3.1 0 0 0-.9-2.4c2.9-.3 6-1.4 6-6.5a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.4 0C6.1 1.4 5 1.7 5 1.7a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 3.5 8.7c0 5 3.1 6.2 6 6.5a3.1 3.1 0 0 0-.9 2.4V21" transform="translate(0,1)"/>',
    upwork: '<circle cx="12" cy="12" r="9"/><path d="M7 10v3.5a2.5 2.5 0 0 0 5 0V10m0 2c.6 2.2 1.7 3.5 3 3.5a2.5 2.5 0 0 0 0-5c-1.6 0-2.6 1.6-3 3.5Z"/>',
    mostaql: '<circle cx="12" cy="12" r="9"/><path d="M8 14V9.5L12 13l4-3.5V14"/>',
    khamsat: '<circle cx="12" cy="12" r="9"/><path d="m12 7 1.5 3.2 3.5.5-2.5 2.4.6 3.4L12 15l-3.1 1.5.6-3.4L7 10.7l3.5-.5Z"/>',
    link: '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 1 0-5.7-5.7l-1.3 1.3"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 1 0 5.7 5.7l1.3-1.3"/>',
  };
  function svg(name, size) {
    var d = ICONS[name];
    if (!d) return "";
    return '<svg width="' + (size || 18) + '" height="' + (size || 18) + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + d + "</svg>";
  }

  /* =============================================================
     RENDER
     ============================================================= */

  function renderStatic() {
    $$("[data-ui]").forEach(function (el) {
      var v = UI[el.getAttribute("data-ui")];
      if (v) el.textContent = t(v);
    });
    $$("[data-sec]").forEach(function (el) {
      var v = path(SECTIONS, el.getAttribute("data-sec"));
      if (v) el.textContent = t(v);
    });
    $$("[data-profile]").forEach(function (el) {
      var v = PROFILE[el.getAttribute("data-profile")];
      if (v) el.textContent = t(v);
    });
    $$("[data-about]").forEach(function (el) {
      var v = ABOUT[el.getAttribute("data-about")];
      if (v) el.innerHTML = t(v);
    });
    $$("[data-ph]").forEach(function (el) {
      var v = UI[el.getAttribute("data-ph")];
      if (v) el.setAttribute("placeholder", t(v));
    });
    $("#modalNoImage").textContent = t(UI.noImage);
    $("#footerConnect").textContent = t(FOOTER.connect);
    $("#footerWho").innerHTML = t(FOOTER.whoAmI);
    $("#footerTagline").innerHTML = t(FOOTER.tagline);
    $("#pricingNote").textContent = t(PRICING_NOTE);
    $("#year").textContent = new Date().getFullYear();
    $("#brandBadge").textContent = PROFILE.initials;
    $("#langLabel").textContent = LANG === "en" ? "AR" : "EN";
    document.title = t(PROFILE.name) + " — " + t(PROFILE.title);
  }

  function renderNav() {
    $("#navLinks").innerHTML = NAV_SECTIONS.map(function (s) {
      return '<a href="#' + s[0] + '" class="nav-link">' + esc(t(s[1])) + "</a>";
    }).join("");
  }

  function renderHero() {
    $("#heroStats").innerHTML = [
      { dt: { en: "GPA", ar: "المعدل" }, dd: "3.63", sm: " / 4.0" },
      { dt: { en: "Certifications", ar: "شهادات" }, dd: "6", sm: "+" },
      { dt: { en: "Currently", ar: "حاليًا" }, dd: "DEPI", sm: { en: " intern", ar: " متدرب" } },
    ].map(function (s) {
      return '<div class="stat"><dt>' + esc(t(s.dt)) + "</dt><dd>" + esc(t(s.dd)) +
        "<span>" + esc(t(s.sm)) + "</span></dd></div>";
    }).join("");

    var body = $("#terminalBody");
    body.innerHTML = "";
    TERMINAL_LINES.forEach(function (l, i) {
      var d = document.createElement("div");
      d.className = "term-line";
      d.style.animationDelay = (i * 0.14) + "s";
      d.innerHTML = '<div dir="ltr"><span class="term-prompt">$</span> <span class="term-cmd">' +
        esc(l.cmd) + '</span></div><div class="term-out" dir="ltr">' + esc(t(l.out)) + "</div>";
      body.appendChild(d);
    });
  }

  function renderAbout() {
    $("#aboutAvatar").textContent = PROFILE.initials;
    $("#aboutTags").innerHTML = ABOUT.tags.map(function (x) {
      return '<span class="tag">' + esc(x) + "</span>";
    }).join("");
    $("#aboutFacts").innerHTML = ABOUT.facts.map(function (f) {
      return "<li><span>" + esc(t(f.k)) + "</span><strong>" + esc(t(f.v)) + "</strong></li>";
    }).join("");
  }

  function renderEducation() {
    $("#eduCard").innerHTML =
      '<div class="edu-main">' +
        "<h3>" + esc(t(EDUCATION.degree)) + "</h3>" +
        '<p class="edu-org">' + esc(t(EDUCATION.org)) + "</p>" +
        '<p class="edu-meta">' + esc(t(EDUCATION.meta)) + "</p>" +
      "</div>" +
      '<div class="edu-gpa"><span class="gpa-num">' + esc(EDUCATION.gpa) + "</span>" +
      '<span class="gpa-label">' + esc(t(EDUCATION.gpaLabel)) + "</span></div>";

    $("#certGrid").innerHTML = CERTIFICATIONS.map(function (c, i) {
      return '<button class="cert-card" data-cert="' + i + '" type="button">' +
        '<span class="cert-thumb-wrap"><img class="cert-thumb" src="' + esc(c.image) +
        '" alt="" loading="lazy"></span>' +
        '<span class="cert-card-body">' +
          "<span class='cert-name'>" + esc(t(c.title)) + "</span>" +
          '<span class="cert-issuer">' + esc(t(c.issuer)) + "</span>" +
          '<span class="cert-date" dir="ltr">' + esc(t(c.date)) + "</span>" +
        "</span></button>";
    }).join("");
  }

  function renderSkills() {
    $("#skillsGrid").innerHTML = SKILLS.map(function (g) {
      return '<article class="skill-group' + (g.learning ? " is-learning" : "") + '">' +
        "<h3>" + esc(t(g.group)) + "</h3>" +
        '<p class="skill-desc">' + esc(t(g.desc)) + "</p>" +
        '<div class="skill-badges">' + g.items.map(function (x) {
          return '<span class="badge" dir="ltr">' + esc(x) + "</span>";
        }).join("") + "</div></article>";
    }).join("");
  }

  function renderExperience() {
    $("#expList").innerHTML = EXPERIENCE.map(function (e) {
      return '<article class="exp-card' + (e.current ? " current" : "") + '">' +
        '<header class="exp-head">' +
          '<span class="exp-date" dir="ltr">' + esc(t(e.date)) + "</span>" +
          '<span class="exp-type">' + esc(t(e.type)) + "</span>" +
        "</header>" +
        '<h3 class="exp-role">' + esc(t(e.role)) + "</h3>" +
        '<p class="exp-org">' + esc(t(e.org)) + "</p>" +

        '<div class="car car-challenge"><h4>' + esc(t(UI.challenge)) + "</h4><p>" + esc(t(e.challenge)) + "</p></div>" +

        '<div class="car car-action"><h4>' + esc(t(UI.action)) + "</h4><ul>" +
          tArr(e.actions).map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") +
        "</ul></div>" +

        '<div class="car car-result"><h4>' + esc(t(UI.result)) + "</h4><p>" + esc(t(e.result)) + "</p></div>" +

        '<div class="tag-row">' + e.tech.map(function (x) {
          return '<span class="tag" dir="ltr">' + esc(x) + "</span>";
        }).join("") + "</div></article>";
    }).join("");
  }

  function renderServices() {
    $("#servicesGrid").innerHTML = SERVICES.map(function (s) {
      return '<article class="card">' +
        '<span class="card-icon">' + svg(s.icon, 20) + "</span>" +
        "<h3>" + esc(t(s.title)) + "</h3>" +
        '<p class="card-desc">' + esc(t(s.what)) + "</p>" +
        '<div class="svc-block"><h4>' + esc(t(UI.solves)) + "</h4><p>" + esc(t(s.problem)) + "</p></div>" +
        '<div class="svc-block svc-get"><h4>' + esc(t(UI.youGet)) + "</h4><p>" + esc(t(s.youGet)) + "</p></div>" +
        '<div class="tag-row">' + s.tech.map(function (x) {
          return '<span class="tag" dir="ltr">' + esc(x) + "</span>";
        }).join("") + "</div></article>";
    }).join("");
  }

  function renderProjects() {
    $("#projectsGrid").innerHTML = PROJECTS.map(function (p) {
      var links = "";
      if (p.links && p.links.repo && p.links.repo !== "#") {
        links = '<a class="proj-link" href="' + esc(p.links.repo) + '" target="_blank" rel="noopener noreferrer">' +
          svg("link", 15) + "<span>" + (LANG === "ar" ? "افتح المشروع" : "View Project") + "</span></a>";
      }
      var cover = p.cover
        ? '<div class="project-cover"><img src="' + esc(p.cover) + '" alt="" loading="lazy"></div>'
        : "";
      return '<article class="project-card">' + cover +
        '<div class="project-body">' +
        '<div class="project-top">' +
          '<span class="project-category">' + esc(t(p.category)) + "</span>" +
          (p.badge ? '<span class="project-badge">' + esc(t(UI.concept)) + "</span>" : "") +
        "</div>" +
        "<h3>" + esc(t(p.title)) + "</h3>" +

        '<div class="project-block pb-problem"><h4>' + esc(t(UI.problem)) + "</h4><p>" + esc(t(p.problem)) + "</p></div>" +
        '<div class="project-block pb-role"><h4>' + esc(t(UI.role)) + "</h4><p>" + esc(t(p.role)) + "</p></div>" +
        '<div class="project-block pb-solution"><h4>' + esc(t(UI.solution)) + "</h4><ul class=\"project-steps\">" +
          tArr(p.solution).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
        "</ul></div>" +
        '<div class="project-block pb-result"><h4>' + esc(t(UI.result)) + "</h4><p>" + esc(t(p.result)) + "</p></div>" +

        '<div class="tag-row">' + p.tech.map(function (x) {
          return '<span class="tag" dir="ltr">' + esc(x) + "</span>";
        }).join("") + "</div>" + links + "</div></article>";
    }).join("");
  }

  /* ---- pricing ---- */
  function renderPricing() {
    $("#pricingGrid").innerHTML = PRICING.map(function (pl) {
      var feats = tArr(pl.features).map(function (f) {
        return '<li class="yes"><span class="tick">✓</span>' + esc(f) + "</li>";
      }).join("");
      var exc = pl.excluded ? tArr(pl.excluded).map(function (f) {
        return '<li class="no"><span class="tick">✕</span>' + esc(f) + "</li>";
      }).join("") : "";
      return '<article class="price-card' + (pl.popular ? " popular" : "") + '">' +
        (pl.popular ? '<span class="price-flag">★ ' + esc(t(UI.popular)) + "</span>" : "") +
        '<h3 class="price-tier">' + esc(t(pl.tier)) + "</h3>" +
        '<div class="price-figures" dir="ltr">' +
          '<span class="fig"><em>' + esc(t(UI.min)) + "</em><b>$" + pl.min + "</b></span>" +
          '<span class="fig-sep"></span>' +
          '<span class="fig"><em>' + esc(t(UI.max)) + "</em><b>$" + pl.max + "</b></span>" +
        "</div>" +
        '<p class="price-tagline">' + esc(t(pl.tagline)) + "</p>" +
        '<p class="price-desc">' + esc(t(pl.desc)) + "</p>" +
        '<ul class="price-features">' + feats + exc + "</ul>" +
        '<a href="#contact" class="price-btn' + (pl.popular ? " is-primary" : "") + '">' +
          esc(t(pl.popular ? UI.hireMe : UI.getStarted)) + (pl.popular ? " →" : "") +
        "</a></article>";
    }).join("");
  }

  function renderAchievements() {
    $("#achieveGrid").innerHTML = ACHIEVEMENTS.map(function (a) {
      return '<article class="achieve-card">' +
        '<span class="achieve-mark">' + svg("cloud", 18) + "</span>" +
        '<h3 class="achieve-name">' + esc(t(a.name)) + "</h3>" +
        '<p class="achieve-org">' + esc(t(a.org)) + "</p>" +
        '<p class="achieve-desc">' + esc(t(a.desc)) + "</p>" +
      "</article>";
    }).join("");
  }

  function renderContact() {
    var items = [];
    if (PROFILE.email && PROFILE.email.indexOf("PLACEHOLDER") !== 0) {
      items.push({ icon: "mail", label: PROFILE.email, href: "mailto:" + PROFILE.email });
    }
    items.push({ icon: "phone", label: PROFILE.phone, href: "tel:" + PROFILE.phone.replace(/\s/g, "") });
    items.push({ icon: "whatsapp", label: "WhatsApp " + PROFILE.phone, href: "https://wa.me/" + PROFILE.whatsapp.replace(/\D/g, "") });
    items.push({ icon: "pin", label: t(PROFILE.location), href: null });

    var html = items.map(function (i) {
      var inner = '<span class="c-icon">' + svg(i.icon, 17) + "</span>" +
        (i.href ? '<a href="' + esc(i.href) + '" dir="ltr">' + esc(i.label) + "</a>"
                : '<span dir="auto">' + esc(i.label) + "</span>");
      return "<li>" + inner + "</li>";
    }).join("");
    $("#contactList").innerHTML = html;
    $("#footerContact").innerHTML = html;

    $("#footerSocials").innerHTML = FOOTER_DIRECT
      .filter(function (s) { return s.url && s.url !== "#"; })
      .map(function (s) {
        return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' +
          esc(s.label) + '" title="' + esc(s.label) + '">' + svg(s.key, 18) + "</a></li>";
      }).join("");

    $("#footerPlatforms").innerHTML = PLATFORMS
      .filter(function (s) { return s.url && s.url !== "#"; })
      .map(function (s) {
        return '<li><a class="plat-tile" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" title="' +
          esc(t(s.label)) + '"><span>' + esc(s.short) + "</span></a></li>";
      }).join("");
  }

  function renderAll() {
    renderStatic();
    renderNav();
    renderHero();
    renderAbout();
    renderEducation();
    renderSkills();
    renderExperience();
    renderServices();
    renderProjects();
    renderPricing();
    renderAchievements();
    renderContact();
    bindCerts();
    observeReveal();
    setActiveLink();
  }

  /* =============================================================
     INTERACTIONS
     ============================================================= */

  /* ---- language toggle ---- */
  $("#langToggle").addEventListener("click", function () {
    LANG = LANG === "en" ? "ar" : "en";
    try { localStorage.setItem("portfolio-lang", LANG); } catch (e) {}
    document.documentElement.lang = LANG;
    document.documentElement.dir = LANG === "ar" ? "rtl" : "ltr";
    renderAll();
  });

  /* ---- theme toggle ---- */
  $("#themeToggle").addEventListener("click", function () {
    var light = document.documentElement.getAttribute("data-theme") === "light";
    if (light) document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "light");
    try { localStorage.setItem("portfolio-theme", light ? "dark" : "light"); } catch (e) {}
  });

  /* ---- mobile menu ---- */
  var navToggle = $("#navToggle");
  navToggle.addEventListener("click", function () {
    var open = $("#navLinks").classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-link")) {
      $("#navLinks").classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---- scroll progress + nav state + active link ---- */
  var sectionIds = NAV_SECTIONS.map(function (s) { return s[0]; });
  function setActiveLink() {
    var pos = window.scrollY + window.innerHeight * 0.32;
    var current = sectionIds[0];
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= pos) current = id;
    });
    $$(".nav-link").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  function onScroll() {
    var h = document.documentElement;
    var pct = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1);
    $("#scrollProgress").style.width = (pct * 100) + "%";
    $("#nav").classList.toggle("scrolled", h.scrollTop > 8);
    setActiveLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- reveal on scroll ---- */
  var io = null;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
    $$(".section-head, .about-card, .card, .project-card, .exp-card, .skill-group, .achieve-card, .cert-card, .edu-card, .price-card")
      .forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  /* ---- certificate modal ---- */
  var modal = $("#certModal");
  function bindCerts() {
    $$("[data-cert]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openCert(CERTIFICATIONS[+btn.getAttribute("data-cert")]);
      });
    });
  }
  function openCert(c) {
    var img = $("#modalImage"), no = $("#modalNoImage");
    if (c.image) { img.src = c.image; img.classList.remove("hidden"); no.classList.remove("show"); }
    else { img.classList.add("hidden"); no.classList.add("show"); }
    $("#modalTitle").textContent = t(c.title);
    $("#modalIssuer").textContent = t(c.issuer) + " · " + t(c.date);
    $("#modalMeta").innerHTML = (c.meta || []).map(function (m) {
      return "<dt>" + esc(t(m[0])) + "</dt><dd dir='ltr'>" + esc(m[1]) + "</dd>";
    }).join("");
    var v = $("#modalVerify");
    if (c.verifyUrl) { v.href = c.verifyUrl; v.classList.remove("hidden"); }
    else v.classList.add("hidden");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeCert() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  $("#modalClose").addEventListener("click", closeCert);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeCert(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCert(); });

  /* ---- contact form ---- */
  var MSG = {
    required: { en: "This field is required.", ar: "الخانة دي مطلوبة." },
    email:    { en: "Enter a valid email address.", ar: "اكتب إيميل صحيح." },
  };
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    ["cf-name", "cf-email", "cf-subject", "cf-message"].forEach(function (id) {
      var el = document.getElementById(id);
      var err = document.querySelector('[data-for="' + id + '"]');
      var row = el.closest(".form-row");
      var msg = "";
      if (!el.value.trim()) msg = t(MSG.required);
      else if (id === "cf-email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) msg = t(MSG.email);
      err.textContent = msg;
      row.classList.toggle("invalid", !!msg);
      if (msg) ok = false;
    });
    if (!ok) return;
    var to = PROFILE.email.indexOf("PLACEHOLDER") === 0 ? "" : PROFILE.email;
    var body = encodeURIComponent(
      $("#cf-message").value + "\n\n— " + $("#cf-name").value + " (" + $("#cf-email").value + ")"
    );
    window.location.href = "mailto:" + to +
      "?subject=" + encodeURIComponent($("#cf-subject").value) + "&body=" + body;
  });

  /* ---- go ---- */
  renderAll();
  onScroll();
})();
