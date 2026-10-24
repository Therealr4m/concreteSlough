# Slough Concrete — Blue Logo & Favicon Update

Source: Aaron's `concreteSlough` repository archive, supplied for branch `slough-abid`.

## Scope
- 31 HTML pages: updated favicon references and header branding.
- 27 pages: existing `site-brand` link now contains the supplied blue logo without replacing its brand text or href.
- 4 blog articles: added a compact linked logo strip because they did not have an existing site header.
- `styles.css`: appended scoped responsive logo styles; all original declarations and rules were retained.
- Added `/branding-assets/slough-logo.webp`, `/favicon.ico`, `/favicon-32.png`, and `/apple-touch-icon.png`.

## QA
- All 31 pages preserved their existing H1/H2/H3 headings, visible text, navigation links and canonicals (automated DOM comparison).
- Existing `styles.css` rules left untouched, with only appended branded styles.
- Original `nav.js`, robots.txt, sitemap.xml, and all photographs unchanged.
- Browser test: still needs live preview on your local VS Code or a staging site before merging. In particular verify header spacing and the blog header in desktop/mobile views.

## Git installation
1. Open the local `concreteSlough` repository and switch to the `slough-abid` branch.
2. `git fetch origin && git pull --ff-only origin slough-abid`; ensure `git status` reports clean.
3. Create a branch `branding/slough-logo-favicon` from `slough-abid`.
4. Back up and **review differences** before copying ZIP contents into the repo; if Aaron has made newer changes since the archive, reconcile those rather than overwriting them.
5. Copy the ZIP's folders/files into repository root, preserving folder structure.
6. `git diff --check`, visually test all page types, then commit and push branding branch. Create PR targeting `slough-abid`.

### Example HTML added
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

Image assets are root-relative URLs, appropriate when the static website is hosted from the domain root.
