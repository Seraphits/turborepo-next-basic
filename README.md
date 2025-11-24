Architecture Overview: The "Steel Thread" Monorepo
1. System Architecture
This project utilizes a high-performance Turborepo monorepo architecture managed by pnpm workspaces. It is designed to support multiple consumer applications (apps/) sharing a unified, versioned logic and design system (packages/).

2. Shared Styling Architecture (The "Pure SCSS" Engine)
The design system implements a robust Pure SCSS Architecture that prioritizes strict compile-time safety and modularity over runtime complexity.

Abstract Layer: A centralized SCSS library (packages/ui/src/styles) following the 7-1 Pattern, housing the design tokens as static Sass variables, mixins, and functions.

Static Compilation: The system relies on the Sass compiler to resolve all theming and logic at build time. This ensures zero runtime overhead for styling calculations and guarantees that all design tokens (colors, spacing, typography) are strictly typed and validated during the build process.

Compiler Integration: Custom Next.js Compiler Configuration (sassOptions.includePaths) is injected into every application. This enables clean, alias-based imports (e.g., @use "abstracts" as *;) anywhere in the monorepo, eliminating fragile relative paths (e.g., ../../../../styles).

3. The "Steel Thread" CI/CD Pipeline
The infrastructure implements a stratified verification strategy to ensure zero-regression delivery. Every commit traverses a "Steel Thread"—an unbroken line of automated quality gates:

A. Structural Defense (Static Analysis)

Tools: ESLint, TypeScript (Strict Mode).

Function: Analyzes code at rest for syntax hygiene, type safety, and architectural violations before execution begins.

B. Logic Defense (Micro-Testing)

Tools: Vitest, JSDOM, React Testing Library.

Function: Executes unit tests within the packages/ui library using a simulated browser environment. This ensures individual atomic components (the "Lego blocks") function correctly in isolation.

C. Systemic Defense (Macro-Testing)

Tools: Playwright E2E.

Architecture: Implements an Isolated Testing Strategy. The pipeline dynamically builds and spins up only the application under test (e.g., ReadBoot on Port 3002) to verify server reachability and critical user flows in a real browser engine.

D. Continuous Delivery

Tools: Vercel.

Function: Automated, parallel deployments of three distinct projects (ReadBoot, Scrambled Sounds, Pattern Lab) from a single git repository, utilizing command overrides to map monorepo paths to production outputs.
