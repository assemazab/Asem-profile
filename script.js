(() => {
  "use strict";

  /* ---------- tiny icon set (inline SVG, no external deps) ---------- */
  const ICONS = {
    cloud: '<path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a4 4 0 0 1-1 7.9H7Z"/>',
    container: '<rect x="3" y="7" width="18" height="13" rx="1"/><path d="M3 11h18M9 7V4h6v3"/>',
    pipeline: '<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="12" r="2.2"/><path d="M6 8.2V15.8M8.2 12H15.8M8 6h6a4 4 0 0 1 4 4"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4M7 12l2.5-3L12 11l3-4 2 2.5"/>',
    network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12 6.5 17.5M12 12l5.5 5.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6 8 7 8-7"/>',
    phone: '<path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1.2.4 2.6.6 4 .6a1.2 1.2 0 0 1 1.2 1.2V20a1.2 1.2 0 0 1-1.2 1.2C11 21.2 2.8 13 2.8 3.6A1.2 1.2 0 0 1 4 2.4h3.2A1.2 1.2 0 0 1 8.4 3.6c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2L6.6 10.8Z"/>',
    pin: '<path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"/><circle cx="12" cy="10" r="2.4"/>',
    badge: '<path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z"/><path d="m9 12 2 2 4-4"/>',
    external: '<path d="M14 4h6v6M20 4 10 14M9 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3"/>',
  };
  function icon(name, size = 18) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- render: services ---------- */
  const servicesGrid = document.getElementById("servicesGrid");
  servicesGrid.innerHTML = SERVICES.map(s => `
    <div class="card">
      <div class="card-icon">${icon(s.icon, 20)}</div>
      <h3>${s.title}</h3>
      <span class="card-level">${s.level}</span>
      <p class="card-desc">${s.desc}</p>
      <div class="tag-row">${s.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");

  /* ---------- render: skills ---------- */
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = SKILLS.map(g => `
    <div class="skill-group">
      <h3>${g.group}</h3>
      <div class="skill-badges">${g.items.map(i => `<span class="badge">${i}</span>`).join("")}</div>
    </div>
  `).join("");

  /* ---------- render: labs ---------- */
  const labsGrid = document.getElementById("labsGrid");
  labsGrid.innerHTML = LABS.map(l => `
    <div class="lab-card">
      <h3>${l.title}</h3>
      <p>${l.desc}</p>
      <div class="tag-row" style="margin-bottom:14px">${l.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <p class="lab-output">${l.output}</p>
    </div>
  `).join("");

  /* ---------- render: certifications ---------- */
  const certGrid = document.getElementById("certGrid");
  certGrid.innerHTML = CERTIFICATIONS.map((c, i) => `
    <button class="cert-card" data-cert="${i}" type="button">
      <div class="cert-card-top">
        <div class="cert-icon">${icon("badge", 22)}</div>
      </div>
      <h3>${c.title}</h3>
      <p class="cert-issuer">${c.issuer}</p>
      <p class="cert-date">${c.date}</p>
      <p class="cert-view">${c.image ? "View certificate →" : "View details →"}</p>
    </button>
  `).join("");

  /* ---------- render: timeline ---------- */
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item ${e.current ? "current" : ""}">
      <span class="tl-dot"></span>
      <p class="tl-date">${e.date}${e.current ? " · Current" : ""}</p>
      <h3 class="tl-role">${e.role}</h3>
      <p class="tl-org">${e.org}</p>
      <ul class="tl-points">${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
      <div class="tag-row">${e.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");

  /* ---------- render: learning ---------- */
  document.getElementById("learningList").innerHTML =
    LEARNING.map(l => `<li>${l}</li>`).join("");

  /* ---------- render: achievements ---------- */
  document.getElementById("achieveGrid").innerHTML = ACHIEVEMENTS.map(a => `
    <div class="achieve-card">
      <span class="achieve-value">${a.value}</span>
      <span class="achieve-label">${a.label}</span>
    </div>
  `).join("");

  /* ---------- render: contact list ---------- */
  const contactList = document.getElementById("contactList");
  const contactItems = [
    { icon: "pin", label: PROFILE.location, href: null },
    { icon: "phone", label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, "")}` },
  ];
  if (PROFILE.email && !PROFILE.email.includes("PLACEHOLDER")) {
    contactItems.push({ icon: "mail", label: PROFILE.email, href: `mailto:${PROFILE.email}` });
  }
  contactList.innerHTML = contactItems.map(c => `
    <li>
      <span class="c-icon">${icon(c.icon, 18)}</span>
      ${c.href ? `<a href="${c.href}">${c.label}</a>` : `<span>${c.label}</span>`}
    </li>
  `).join("");

  /* ---------- render: footer nav ---------- */
  document.getElementById("footerNav").innerHTML =
    NAV_SECTIONS.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- terminal typing animation ---------- */
  const terminalBody = document.getElementById("terminalBody");
  function renderTerminalInstant() {
    terminalBody.innerHTML = TERMINAL_LINES.map(l => `
      <div class="term-line">
        <span class="term-prompt">$</span> <span class="term-cmd">${l.cmd}</span>
        <div class="term-out">${l.out}</div>
      </div>
    `).join("");
  }
  async function typeTerminal() {
    for (const line of TERMINAL_LINES) {
      const lineEl = document.createElement("div");
      lineEl.className = "term-line";
      const cmdEl = document.createElement("span");
      cmdEl.className = "term-cmd";
      lineEl.innerHTML = `<span class="term-prompt">$</span> `;
      lineEl.appendChild(cmdEl);
      terminalBody.appendChild(lineEl);
      for (const ch of line.cmd) {
        cmdEl.textContent += ch;
        await new Promise(r => setTimeout(r, 22));
      }
      await new Promise(r => setTimeout(r, 150));
      const outEl = document.createElement("div");
      outEl.className = "term-out";
      outEl.textContent = line.out;
      lineEl.appendChild(outEl);
      await new Promise(r => setTimeout(r, 220));
    }
  }
  if (reducedMotion) { renderTerminalInstant(); } else { typeTerminal(); }

  /* ---------- nav: scroll state + active link ---------- */
  const nav = document.getElementById("nav");
  const scrollProgress = document.getElementById("scrollProgress");
  const navLinkEls = Array.from(document.querySelectorAll(".nav-link"));
  const sections = NAV_SECTIONS.map(([id]) => document.getElementById(id)).filter(Boolean);

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);

    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const height = doc.scrollHeight - doc.clientHeight;
    scrollProgress.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : "0%";

    let activeId = null;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) { activeId = sec.id; break; }
    }
    navLinkEls.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`);
    });
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinksEl = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinksEl.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinksEl.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinksEl.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- certification modal ---------- */
  const certModal = document.getElementById("certModal");
  const modalImage = document.getElementById("modalImage");
  const modalNoImage = document.getElementById("modalNoImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalIssuer = document.getElementById("modalIssuer");
  const modalMeta = document.getElementById("modalMeta");
  const modalVerify = document.getElementById("modalVerify");
  const modalClose = document.getElementById("modalClose");
  let lastFocused = null;

  function openCertModal(cert) {
    lastFocused = document.activeElement;
    modalTitle.textContent = cert.title;
    modalIssuer.textContent = cert.issuer + " · " + cert.date;
    modalMeta.innerHTML = cert.meta.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");

    if (cert.image) {
      modalImage.src = cert.image;
      modalImage.alt = `${cert.title} certificate`;
      modalImage.classList.remove("hidden");
      modalNoImage.classList.remove("show");
    } else {
      modalImage.classList.add("hidden");
      modalNoImage.classList.add("show");
    }

    if (cert.verifyUrl) {
      modalVerify.href = cert.verifyUrl;
      modalVerify.textContent = cert.verifyLabel || "Verify credential";
      modalVerify.classList.remove("hidden");
    } else {
      modalVerify.classList.add("hidden");
    }

    certModal.classList.add("open");
    certModal.setAttribute("aria-hidden", "false");
    modalClose.focus();
    document.body.style.overflow = "hidden";
  }
  function closeCertModal() {
    certModal.classList.remove("open");
    certModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }
  certGrid.addEventListener("click", e => {
    const btn = e.target.closest(".cert-card");
    if (!btn) return;
    const cert = CERTIFICATIONS[Number(btn.dataset.cert)];
    if (cert) openCertModal(cert);
  });
  modalClose.addEventListener("click", closeCertModal);
  certModal.addEventListener("click", e => { if (e.target === certModal) closeCertModal(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && certModal.classList.contains("open")) closeCertModal();
  });

  /* ---------- contact form (mailto, no backend) ---------- */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;
    const fields = ["name", "email", "subject", "message"];
    fields.forEach(name => {
      const input = form.elements[name];
      const row = input.closest(".form-row");
      const errorEl = form.querySelector(`.form-error[data-for="cf-${name}"]`);
      let msg = "";
      if (!input.value.trim()) msg = "This field is required.";
      else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) msg = "Enter a valid email address.";
      row.classList.toggle("invalid", !!msg);
      errorEl.textContent = msg;
      if (msg) valid = false;
    });
    if (!valid) return;

    const { name, email, subject, message } = form.elements;
    const to = (PROFILE.email && !PROFILE.email.includes("PLACEHOLDER")) ? PROFILE.email : "";
    const body = `From: ${name.value} (${email.value})\n\n${message.value}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    formNote.textContent = "Your email client should now open with this message.";
  });

})();
