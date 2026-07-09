// ============================================================
// Theme (persisted; falls back to system preference)
// ============================================================
const root = document.documentElement;
const stored = localStorage.getItem("theme");
if (stored) {
  root.dataset.theme = stored;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.dataset.theme = "dark";
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// ============================================================
// Footer year
// ============================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
// Header state + reading progress
// ============================================================
const header = document.querySelector(".site-header");
const progress = document.querySelector(".progress-bar");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 8);
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ============================================================
// Mobile nav
// ============================================================
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ============================================================
// Scroll-reveal animations
// ============================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ============================================================
// Scrollspy — highlight the section currently in view
// ============================================================
const spyLinks = [...document.querySelectorAll("[data-spy]")];
const sections = spyLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const spyObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      spyLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`)
      );
    }
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => spyObserver.observe(s));

// ============================================================
// BibTeX toggles
// ============================================================
document.querySelectorAll("[data-bib]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const bib = btn.closest(".pub-body").querySelector(".pub-bib");
    const open = bib.hidden;
    bib.hidden = !open;
    btn.classList.toggle("open", open);
  });
});
