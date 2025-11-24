"use client";
import { Button } from "@repo/ui";
import styles from "./page.module.scss";

// --- Configuration: Define your projects here ---
const projects = [
  {
    id: "readboot",
    name: "ReadBoot",
    description: "The core educational reading application.",
    port: 3002,
    // TODO: Update this URL once you deploy ReadBoot to Vercel
    prodUrl: "turborepo-next-basic-readboot.vercel.app",
  },
  {
    id: "scrambled",
    name: "Scrambled Sounds",
    description: "Audio processing and decoding game.",
    port: 3001,
    // TODO: Update this URL once you deploy Scrambled Sounds to Vercel
    prodUrl: "https://turborepo-next-basic-scrambled-soun.vercel.app/",
  },
];

export default function PatternLab() {
  // Helper: Detects if we are on localhost or production to give the right link
  const getLink = (project: typeof projects[0]) => {
    // Check if window exists (client-side) and if hostname includes 'localhost'
    if (typeof window !== "undefined" && window.location.hostname.includes("localhost")) {
      return `http://localhost:${project.port}`;
    }
    return project.prodUrl;
  };

  return (
    <main className={styles.lab}>
      <header className={styles.header}>
        <h1>🧩 Lumina Pattern Lab</h1>
        <p>The single source of truth for UI Components and Design Tokens.</p>
      </header>

      {/* --- NEW SECTION: Monorepo Ecosystem --- */}
      <section className={styles.section}>
        <h2>Monorepo Ecosystem</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className={styles.actions}>
                <a href={getLink(project)} target="_blank" rel="noopener noreferrer">
                  {/* Using your existing Button component */}
                  <Button>Launch App &rarr;</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* --- Existing Atomic Components Section --- */}
      <section className={styles.section}>
        <h2>Atomic Components: 3D Button</h2>
        <div className={styles.showcase}>
          {/* Interactive State */}
          <div className={styles.card}>
            <span>Standard Click</span>
            <Button onClick={() => alert('Clicked!')} topText="Click" bottomText="Me">
              Action
            </Button>
          </div>

          {/* Link State (Visual Test) */}
          <div className={styles.card}>
            <span>Navigation</span>
            <Button topText="Go" bottomText="Home">
              Link
            </Button>
          </div>
        </div>
      </section>

      {/* --- Existing Design Tokens Section --- */}
      <section className={styles.section}>
        <h2>Design Tokens: Brand Colors</h2>
        <div className={styles.palette}>
          <div className={styles.swatch} style={{ backgroundColor: 'var(--color-primary)' }}>
            <span>--color-primary</span>
          </div>
        </div>
      </section>
    </main>
  );
}
