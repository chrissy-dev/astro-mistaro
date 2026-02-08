# AGENTS.md

## Purpose

This repository is the canonical baseline for long-lived, content-driven Astro sites
used across personal and Mistaro projects.

It is intentionally small, stable, and slow to change.

## Architectural principles

- Static-first output suitable for any static host, usually Cloudflare Pages
- Minimal client-side JavaScript
- Accessibility and semantic HTML by default
- Centralised, typed configuration
- Single source of truth for SEO and metadata
- Content managed via Astro content collections
- Clear, readable structure over abstraction

## Change rules

Changes must improve one of:

- long-term stability
- accessibility
- performance
- clarity of structure
- real-world production usefulness

Changes that **must be rejected**:

- trend-driven tooling
- unnecessary dependencies
- visual/theming systems
- CMS or platform coupling
- complexity without any long term benefit

## Scope

This is a **foundational boilerplate**, not a full website or framework.

Features such as search, analytics, auth, CMS integration, or UI systems belong in downstream projects, not here.

## Maintenance model

- Updated infrequently and intentionally
- Backwards compatibility preferred
- Breaking changes require strong justification