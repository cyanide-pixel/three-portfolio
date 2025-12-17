import "./styles.css";
import { profile } from "./data/profile";
import { renderApp } from "./content";
import { mountScene } from "./three/scene";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("Missing #app");

app.innerHTML = renderApp(profile);

const yearEl = document.querySelector<HTMLSpanElement>("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const canvas = document.querySelector<HTMLCanvasElement>("#bg");
if (!canvas) throw new Error("Missing #bg canvas");
const cleanup = mountScene(canvas);

// Smooth scroll for in-page anchors
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.getAttribute("href");
  if (!href || href === "#") return;
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Clean up on hot reload / navigation (best-effort)
window.addEventListener("beforeunload", () => cleanup(), { once: true });


