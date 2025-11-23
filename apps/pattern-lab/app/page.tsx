"use client";
import { Button } from "@repo/ui";
import styles from "./page.module.scss"; // We will create this next

export default function PatternLab() {
  return (
    <main className={styles.lab}>
      <header className={styles.header}>
        <h1>🧩 Lumina Pattern Lab</h1>
        <p>The single source of truth for UI Components and Design Tokens.</p>
      </header>

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
