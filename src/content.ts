import type { Profile } from "./data/profile";

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderApp(profile: Profile): string {
  const links = profile.links
    .map(
      (l) =>
        `<a class="btn" href="${escapeHtml(l.href)}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`
    )
    .join("");

  const skills = profile.skills
    .map(
      (g) => `
      <div class="item">
        <h3>${escapeHtml(g.group)}</h3>
        <div class="pillrow" style="margin-top:10px">
          ${g.items.map((x) => `<span class="pill">${escapeHtml(x)}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");

  const experience = profile.experience
    .map(
      (e) => `
      <div class="item">
        <h3>${escapeHtml(e.title)} · ${escapeHtml(e.company)}</h3>
        <div class="meta">${escapeHtml(e.location)} · ${escapeHtml(e.dates)}</div>
        <ul>
          ${e.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");

  const projects = profile.projects
    .map(
      (p) => `
      <div class="item">
        <h3>${escapeHtml(p.name)}</h3>
        <div class="meta">${escapeHtml(p.tech)}${p.link ? ` · <a href="${escapeHtml(p.link)}" target="_blank" rel="noreferrer">Link</a>` : ""}</div>
        <ul>
          ${p.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");

  const email = profile.contact.email
    ? `<a class="btn primary" href="mailto:${escapeHtml(profile.contact.email)}">Email me</a>`
    : `<a class="btn primary" href="#contact">Contact</a>`;

  return `
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="#top">
          <span class="brand-badge" aria-hidden="true"></span>
          <span>${escapeHtml(profile.name)}</span>
        </a>
        <nav aria-label="Primary">
          <a class="navlink" href="#about">About</a>
          <a class="navlink" href="#experience">Experience</a>
          <a class="navlink" href="#projects">Projects</a>
          <a class="navlink" href="#skills">Skills</a>
          <a class="navlink" href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main id="top" class="container">
      <div class="hero">
        <div class="card hero-card">
          <div class="kicker"><span class="kicker-dot" aria-hidden="true"></span>${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}</div>
          <h1>${escapeHtml(profile.name)}<br/>builds reliable, scalable products.</h1>
          <p class="subtitle">${escapeHtml(profile.summary)}</p>
          <div class="cta">
            ${email}
            <a class="btn" href="#projects">View projects</a>
            ${links}
          </div>
        </div>

        <div class="card hero-side">
          <div class="stat">
            <div class="label">Focus</div>
            <div class="value">Backend · System Design · Performance</div>
          </div>
          <div class="stat">
            <div class="label">Now learning</div>
            <div class="value">Three.js · WebGL visuals for portfolio</div>
          </div>
          <div class="stat">
            <div class="label">Strengths</div>
            <div class="value">Ownership · OOP · DSA · Shipping</div>
          </div>
        </div>
      </div>

      <section id="about" class="card">
        <div class="section-title">
          <h2>About</h2>
          <p>Quick intro</p>
        </div>
        <div class="section-body">
          <div class="item">
            <h3>Summary</h3>
            <div class="meta">${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}</div>
            <p class="subtitle" style="margin-top:10px">${escapeHtml(profile.summary)}</p>
          </div>
        </div>
      </section>

      <section id="experience" class="card">
        <div class="section-title">
          <h2>Experience</h2>
          <p>Impact & ownership</p>
        </div>
        <div class="section-body">
          <div class="grid">${experience}</div>
        </div>
      </section>

      <section id="projects" class="card">
        <div class="section-title">
          <h2>Projects</h2>
          <p>Selected work</p>
        </div>
        <div class="section-body">
          <div class="grid two">${projects}</div>
        </div>
      </section>

      <section id="skills" class="card">
        <div class="section-title">
          <h2>Skills</h2>
          <p>Tools & tech</p>
        </div>
        <div class="section-body">
          <div class="grid two">${skills}</div>
        </div>
      </section>

      <section id="contact" class="card">
        <div class="section-title">
          <h2>Contact</h2>
          <p>Let’s connect</p>
        </div>
        <div class="section-body">
          <div class="item">
            <h3>Reach out</h3>
            <p class="subtitle" style="margin-top:10px">
              ${profile.contact.email ? `Email: <a href="mailto:${escapeHtml(profile.contact.email)}">${escapeHtml(profile.contact.email)}</a>` : "Add your email in src/data/profile.ts to show it here."}
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <span>© <span id="year"></span> ${escapeHtml(profile.name)}.</span>
      <span style="margin-left:10px">Built with Three.js.</span>
    </footer>
  `;
}


