// ---------- Config: edit these before publishing ----------
const PROFILE = {
  email: "", // e.g. "asem@example.com" — leave blank to fall back to a placeholder
  linkedin: "", // full LinkedIn URL
  github: "", // full GitHub URL
};

// ---------- Mobile menu ----------
const navToggle = document.getElementById("nav-toggle");
const navMobile = document.getElementById("nav-mobile");

navToggle.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// ---------- Smooth scroll for every [data-scroll] trigger ----------
document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("data-scroll");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    navMobile.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Scroll-spy (active nav link) ----------
const sectionIds = [
  "home", "about", "services", "skills", "projects",
  "certifications", "experience", "education", "learning", "contact",
];
const navAnchors = document.querySelectorAll('[data-scroll]:is(a)');

const spy = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) {
      const id = visible[0].target.id;
      navAnchors.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("data-scroll") === id);
      });
    }
  },
  { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
);
sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) spy.observe(el);
});

// ---------- Scroll progress bar ----------
const progressBar = document.getElementById("progress-bar");
function updateProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const height = h.scrollHeight - h.clientHeight;
  progressBar.style.width = `${height > 0 ? (scrolled / height) * 100 : 0}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// ---------- Reveal-on-scroll (respects reduced motion) ----------
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
}

// ---------- Terminal typing effect ----------
const terminalLines = [
  { cmd: "whoami", out: "asem_gamal — cloud & devops engineer" },
  { cmd: "status", out: "open to internships & training opportunities" },
  { cmd: "stack", out: "linux | docker | kubernetes | aws | ansible | terraform" },
  { cmd: "learning", out: "azure · jenkins · service mesh" },
];
const terminalBody = document.getElementById("terminal-body");

function typeTerminal() {
  let lineIndex = 0;

  function renderDoneLines() {
    return terminalLines
      .slice(0, lineIndex)
      .map(
        (l) =>
          `<div class="terminal-line"><span class="prompt">$</span> ${l.cmd}<div class="terminal-out">&gt; ${l.out}</div></div>`
      )
      .join("");
  }

  function typeLine() {
    if (lineIndex >= terminalLines.length) return;
    const cmd = terminalLines[lineIndex].cmd;
    let charIndex = 0;

    const interval = setInterval(() => {
      charIndex++;
      terminalBody.innerHTML =
        renderDoneLines() +
        `<div class="terminal-line"><span class="prompt">$</span> ${cmd.slice(0, charIndex)}<span class="caret">▍</span></div>`;

      if (charIndex >= cmd.length) {
        clearInterval(interval);
        setTimeout(() => {
          lineIndex++;
          terminalBody.innerHTML = renderDoneLines();
          typeLine();
        }, 550);
      }
    }, 35);
  }

  typeLine();
}

if (prefersReducedMotion) {
  terminalBody.innerHTML = terminalLines
    .map(
      (l) =>
        `<div class="terminal-line"><span class="prompt">$</span> ${l.cmd}<div class="terminal-out">&gt; ${l.out}</div></div>`
    )
    .join("");
} else {
  typeTerminal();
}

// ---------- Contact form: client-side validation + mailto ----------
const form = document.getElementById("contact-form");
const errorEls = {
  name: document.getElementById("name-error"),
  email: document.getElementById("email-error"),
  message: document.getElementById("message-error"),
};

function setError(field, message) {
  const el = errorEls[field];
  if (!el) return;
  if (message) {
    el.textContent = message;
    el.hidden = false;
  } else {
    el.hidden = true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let valid = true;
  if (!name) { setError("name", "Name is required."); valid = false; } else setError("name", null);
  if (!email) { setError("email", "Email is required."); valid = false; }
  else if (!/^\S+@\S+\.\S+$/.test(email)) { setError("email", "Enter a valid email."); valid = false; }
  else setError("email", null);
  if (!message) { setError("message", "Message is required."); valid = false; } else setError("message", null);

  if (!valid) return;

  const to = PROFILE.email || "your-email@example.com";
  const mailSubject = encodeURIComponent(subject || `Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${to}?subject=${mailSubject}&body=${body}`;
});

// ---------- Footer copyright + optional social links ----------
document.getElementById("footer-bottom").textContent =
  `© ${new Date().getFullYear()} Asem Mohamed Gamal — Cloud & DevOps Engineer`;

const footerSocial = document.getElementById("footer-social");
if (PROFILE.email) {
  const a = document.createElement("a");
  a.href = `mailto:${PROFILE.email}`;
  a.setAttribute("aria-label", "Email");
  a.innerHTML = '<svg class="icon" viewBox="0 0 24 24" width="16" height="16"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  footerSocial.prepend(a);
}
if (PROFILE.linkedin) {
  const a = document.createElement("a");
  a.href = PROFILE.linkedin;
  a.setAttribute("aria-label", "LinkedIn");
  a.innerHTML = '<svg class="icon" viewBox="0 0 24 24" width="16" height="16"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9v12"/><path d="M10 13a4 4 0 0 1 8 0v8"/></svg>';
  footerSocial.appendChild(a);
}
if (PROFILE.github) {
  const a = document.createElement("a");
  a.href = PROFILE.github;
  a.setAttribute("aria-label", "GitHub");
  a.innerHTML = '<svg class="icon" viewBox="0 0 24 24" width="16" height="16"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.5 3.5 0 0 0-1-2.5c.1-.2.5-1.5-.1-3.2 0 0-1-.3-3.4 1.3a11.5 11.5 0 0 0-6 0C6.1 4.5 5.1 4.8 5.1 4.8c-.6 1.7-.2 3-.1 3.2A3.5 3.5 0 0 0 4 10.5C4 14 6.5 14.8 8.5 15c-.4.4-.6 1-.5 1.5V19"/></svg>';
  footerSocial.appendChild(a);
}

// ---------- Contact section links (email / linkedin / github, if provided) ----------
const contactLinks = document.getElementById("contact-links");
if (PROFILE.email) {
  const a = document.createElement("a");
  a.className = "card contact-link";
  a.href = `mailto:${PROFILE.email}`;
  a.innerHTML = `<span class="ico"><svg class="icon" viewBox="0 0 24 24" width="16" height="16"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span><span class="txt">${PROFILE.email}</span>`;
  contactLinks.prepend(a);
}
if (PROFILE.linkedin) {
  const a = document.createElement("a");
  a.className = "card contact-link";
  a.href = PROFILE.linkedin;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.innerHTML = `<span class="ico"><svg class="icon" viewBox="0 0 24 24" width="16" height="16"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9v12"/><path d="M10 13a4 4 0 0 1 8 0v8"/></svg></span><span class="txt">LinkedIn</span>`;
  contactLinks.appendChild(a);
}
if (PROFILE.github) {
  const a = document.createElement("a");
  a.className = "card contact-link";
  a.href = PROFILE.github;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.innerHTML = `<span class="ico"><svg class="icon" viewBox="0 0 24 24" width="16" height="16"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.5 3.5 0 0 0-1-2.5c.1-.2.5-1.5-.1-3.2 0 0-1-.3-3.4 1.3a11.5 11.5 0 0 0-6 0C6.1 4.5 5.1 4.8 5.1 4.8c-.6 1.7-.2 3-.1 3.2A3.5 3.5 0 0 0 4 10.5C4 14 6.5 14.8 8.5 15c-.4.4-.6 1-.5 1.5V19"/></svg></span><span class="txt">GitHub</span>`;
  contactLinks.appendChild(a);
}
