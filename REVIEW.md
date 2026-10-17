# Code Review Guidelines (REVIEW.md)

> Project-specific code review criteria for `straiko-portfolio` (`straiko-me`).
> Follows the Anthropic Review Stack ("How the Claude Code team does code review").

---

## 1. What Failure Looks Like

Reviewers must prioritize detecting project-critical failure modes over stylistic preferences:

- **For Routing & Localization**: Infinite redirect loops, broken language switching, hardcoded paths missing `base` or `withBase()` prefix, missing reciprocal `hreflang` tags.
- **For Assets & Metadata**: 404 image references in Open Graph (`og:image`) / Twitter meta tags, missing favicon assets, broken resume downloads.
- **For Styling & Rendering**: Flash of Unstyled Content (FOUC) on theme toggle, unstyled Markdown or blog article components, undefined CSS variables (`var(--...)`).
- **For Content Collections**: Conflicting or legacy content configuration (`src/content/config.ts` vs `src/content.config.ts`), unhandled frontmatter types.
- **For Build & CI/CD**: Failing `npm run build`, broken static asset paths on GitHub Pages deployment.

---

## 2. Reviewer Guardrails & Evidence Requirements

1. **Concrete Evidence Required**:
   - Every finding MUST cite an exact file and line number (`path/to/file:line`) and quote the code hunk.
   - Never speculate based on function or variable names alone.
2. **Cap on Nits**:
   - Maximum **3 minor nits** per review pass. Focus only on the most impactful improvements.
   - Do NOT report formatting or whitespace issues handled by automated linters.
3. **Paths to Skip**:
   - `dist/`, `.astro/`, `node_modules/`
   - `package-lock.json`
4. **Summary Format**:
   - Reviews MUST begin with an explicit count of issues by severity: `[Critical: N, Important: N, Nit: N, Pre-existing: N]`.
   - If clean, state plainly: `✅ 0 blocking issues found. Ready for review.`

---

## 3. Severity Classification

- **`[Critical]` / `[Important]`**: Real bugs, security vulnerabilities, regression risks, broken navigation, missing validation. **Blocks PR merge.**
- **`[Nit]`**: Non-blocking minor improvements (naming clarity, minor simplification). Capped to ≤ 3.
- **`[Pre-existing]`**: Technical debt or issues in untouched code adjacent to the diff. Documented for visibility; does not block merge.

---

## 4. Risk Tiers for Human Approval

| Tier | Change Type | Approval Requirement |
| :--- | :--- | :--- |
| **Low** | Docs, copy, metadata, static assets | Automated checks + AI review passing (0 human approvals required for trusted author) |
| **Medium** | Portfolio UI components, theme logic, blog rendering, styling architecture | **1 human approval** |
| **High** | Deployment pipelines, domain configuration, build tooling changes | **2 human approvals** |

---

## 5. Convergence & Rollback

- Re-reviews are strictly **diff-only**.
- Review cycles are capped at **3 rounds maximum**.
- Rollback plan: 1-step `git revert <commit-sha>`.
