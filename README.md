# 🌍 Planets Tablist — Accessibility-Focused Tabs (Vanilla)

![HTML](https://img.shields.io/badge/HTML-semantic-orange)
![CSS](https://img.shields.io/badge/CSS-focus--visible-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-yellow)
![A11y](https://img.shields.io/badge/a11y-WAI--ARIA-success)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A small, framework-free **tabbed interface** that demonstrates practical accessibility fundamentals: **semantic structure, ARIA relationships, and state-driven UI**. Built as a clean repo for learning, reviewing, and showcas
ing a11y skills. ♿✨

🔗 **Live Demo:** [live-demo](https://karianjahi.github.io/planets-tablist/)

---

## ✅ What’s Included

- 🧱 **Semantic HTML**: real `<button>` elements for tabs (built-in keyboard & focus behavior)
- ♿ **ARIA tab pattern wiring**:
  - `role="tablist"`, `role="tab"`, `role="tabpanel"`
  - `aria-controls` ↔ `id` pairing
  - `aria-labelledby` on panels to announce the active tab label
  - `aria-selected` state updates
- 👀 **Visibility management**:
  - Non-active panels use the `hidden` attribute (removes content from the accessibility tree)
- 🎯 **Clear separation of concerns**:
  - markup = structure & relationships
  - CSS = layout + focus styling
  - JS = state toggling (selected tab + visible panel)

---

## ♿ Accessibility Notes (How It Works)

### 1) Tabs are real buttons
Using `<button role="tab">…</button>` gives:
- Tab/Shift+Tab focus navigation out of the box
- Enter/Space activation behavior consistent with platform expectations

### 2) Correct labeling and relationships
- Each tab *controls* a panel via `aria-controls`
- Each panel is *labeled by* its tab via `aria-labelledby`

This is the core of making screen readers announce:
- “Tab, selected / not selected”
- “Panel content” with the right label context

### 3) Hidden panels are truly hidden
The `hidden` attribute ensures non-active panels:
- are not read by screen readers
- are not reachable via keyboard focus

---

## ⌨️ Keyboard Behavior (Current)

Because the tabs are buttons, users can:
- **Tab** through each tab button
- **Enter/Space** to activate a tab (click handler toggles panel)

> Note: The *full* WAI-ARIA Tabs pattern commonly adds arrow-key navigation + roving `tabindex`.  
> This repo is intentionally minimal and can be extended (see “Enhancements” below).

---

## 🧪 Quick Testing Checklist

Try these before shipping any tab UI:

- ⌨️ Navigate with **keyboard only**
- 🗣️ Test with a screen reader (e.g., NVDA / VoiceOver)
- 🧰 Run automated scans:
  - Lighthouse (Accessibility)
  - axe DevTools
- 🎨 Verify focus is visible (don’t remove outlines without replacements)

---

## 🗂 Repo Layout

```
.
├── index.html
├── styles.css
├── script.js
└── implementation-without-aria/   # alternative/non-ARIA version for comparison
```

The `implementation-without-aria` folder exists to highlight **why ARIA wiring matters**.

---

## 🔧 Suggested Enhancements (Optional)

If you want to evolve this into a “full-pattern” tabs widget:

- Add **ArrowLeft/ArrowRight** navigation between tabs
- Implement **roving tabindex** so only the active tab is in the Tab order
- Support **Home/End** to jump to first/last tab
- Add visible focus styles using `:focus-visible`

These are great next steps for an accessibility portfolio.

---

## 🚀 Run Locally

```bash
git clone https://github.com/karianjahi/planets-tablist.git
cd planets-tablist
```

Open `index.html` in a browser — no build tools needed.

---

## 📄 License

MIT — use it freely for learning and portfolios. 🙌