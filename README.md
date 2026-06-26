# TradeSelfCheck

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-V2-blue)
![Market Watch](https://img.shields.io/badge/focus-BTC%20%2B%20Gold-orange)

**Open-source market setup workflow for documenting, reviewing, and sharing structured market analysis.**

TradeSelfCheck helps users document BTC and Gold market observations using structured levels, invalidation zones, risk notes, review status, journal history, and shareable text/image outputs.

> Educational market-watch only. This project does **not** provide financial advice, guaranteed signals, or automated trading instructions.

---

## Why this exists

Most trading content online shows only the result. TradeSelfCheck focuses on the process:

- What is the current market context?
- What levels matter?
- What confirms or invalidates the setup?
- What is the risk before any idea is shared?
- What happened after the setup?

The goal is to make market observations easier to document, review, and learn from.

---

## MVP Features

- BTC and Gold setup builder
- Manual market input workflow
- Trend, bias, support, resistance, invalidation, and target zones
- Setup review status: active, target reached, invalidated, avoided, or closed
- Risk-first checklist
- X/Twitter text export
- Telegram text export
- PNG image export
- Local browser storage
- No broker connection
- No auto-trading
- No paid data dependency for MVP

---

## Live Demo

Open `index.html` in your browser, or deploy the repository with GitHub Pages / Cloudflare Pages.

---

## Interface Overview

TradeSelfCheck currently includes a dark dashboard with:

- Market cards for BTC and Gold
- Setup builder
- Risk checklist
- Setup review status
- Generated market-watch text
- PNG export
- Journal notes
- Educational disclaimer

---

## Example Output

```text
BTC Market Watch — Educational View

Bias: Bullish above confirmation
Support: 63,800 / 62,900
Resistance: 65,400 / 66,200
Invalidation: Below 62,500
Target Zones: 65,400 → 66,200 → 67,000
Review: Setup still active
Review Date: 2026-06-27

Plan: Wait for confirmation. Avoid chasing candles. Invalidate quickly if price closes below the key level.

Checklist:
- Wait for confirmation before action
- Avoid chasing candles
- Respect invalidation
- Keep risk small and defined

Not financial advice. Educational market-watch only.
```

---

## Roadmap

### V1 — Foundation

- [x] Project documentation
- [x] Static web interface
- [x] BTC and Gold setup builder
- [x] Market watch generator
- [x] X/Twitter text export
- [x] Telegram text export
- [x] Local browser storage
- [x] Risk and disclaimer templates

### V2 — Setup Review

- [x] Setup summary cards
- [x] Support and resistance visualization
- [x] Image export (PNG)
- [x] Setup history
- [x] Example scenarios

### V3 — Data Support

- [ ] Optional BTC price retrieval
- [ ] Optional Gold price retrieval
- [ ] Manual price and level overrides
- [ ] Daily Markdown snapshots
- [ ] GitHub Actions for report generation

### V4 — Project Maintenance

- [ ] Example gallery
- [ ] Contributor guide
- [ ] Issue templates
- [ ] Documentation improvements
- [ ] GitHub Pages updates

### V5 — Market Expansion

- [ ] ETH
- [ ] NIFTY
- [ ] BANKNIFTY
- [ ] Selected Indian stocks
- [ ] Indian options
- [ ] Watchlists

---

## Safety Rules

This repository intentionally avoids:

- Guaranteed profit claims
- Buy/sell signal language
- Auto-trading execution
- Broker account access
- Fake P&L screenshots
- Misleading win-rate claims

Preferred wording:

- Market watch
- Setup tracking
- Risk-defined setup
- Watch levels
- Confirmation
- Invalidation
- Educational view
- Not financial advice

---

## Project Improvements

Useful ways to improve the project:

- Report bugs or confusing workflows
- Suggest practical features
- Add safe educational examples
- Improve documentation
- Contribute changes through pull requests

---

## Tech Stack

Current MVP:

- HTML
- CSS
- JavaScript
- LocalStorage

Planned:

- React / Vite
- Lightweight API layer
- GitHub Actions
- Telegram draft workflow
- Optional AI-assisted text generation

---

## Local Usage

Clone the repo:

```bash
git clone https://github.com/Ramvibecode/TradeSelfCheck.git
cd TradeSelfCheck
```

Open:

```bash
index.html
```

No API key is required for the MVP.

---

## Disclaimer

TradeSelfCheck is for learning, journaling, and educational market-watch content only. It is not investment advice, trading advice, or a financial recommendation system. Markets are risky. Always do your own research and manage risk responsibly.

---

## License

MIT License.
