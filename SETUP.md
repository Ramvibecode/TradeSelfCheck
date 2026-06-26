# TradeSelfCheck Setup Notes

## Purpose

TradeSelfCheck is an open-source workflow for documenting and reviewing market setups.

The project focuses on structured market observation, risk documentation, setup tracking, and post-review notes. It is not designed to provide trading signals, financial advice, or automated trading instructions.

---

## Current Scope

Initial scope:

- BTC
- Gold

Planned scope:

- ETH
- NIFTY
- BANKNIFTY
- Selected Indian stocks
- Indian options

---

## Core Workflow

1. Record the market context
2. Add support and resistance levels
3. Define confirmation and invalidation levels
4. Add target zones
5. Review risk before sharing any setup
6. Generate X/Twitter or Telegram-ready text
7. Track the setup result
8. Review the outcome in the journal

---

## Setup Fields

Each setup should include:

- Symbol
- Market type
- Timeframe
- Bias
- Support levels
- Resistance levels
- Entry or watch zone
- Invalidation level
- Target zones
- Risk note
- Review status
- Journal note

---

## Review Status

Suggested setup statuses:

- Active
- Target reached
- Invalidated
- Avoided
- Closed

---

## Safety Principles

Use wording that keeps the project educational and process-focused.

Avoid:

- Buy now
- Sure shot
- Guaranteed profit
- Profit confirmed
- High accuracy calls
- Premium signals

Use:

- Market watch
- Setup tracking
- Risk-defined setup
- Watch levels
- Educational view
- Not financial advice
- If price confirms
- Invalidation level
- Target zones

---

## Data Rules

The MVP should work without paid market data.

- Manual input should always be supported
- Data fetch should be optional
- Users should be able to override fetched values
- No broker login should be required
- No auto-trading should be added

---

## Storage

Current MVP storage:

- Browser localStorage

Future options:

- Markdown archive
- JSON export
- GitHub Actions report archive
- Lightweight database for hosted version

---

## Output Formats

Supported or planned outputs:

- X/Twitter text
- Telegram text
- PNG setup card
- Markdown daily snapshot
- Journal history

---

## Roadmap

### V1 — Foundation

- Project documentation
- Static web interface
- BTC and Gold setup builder
- Market watch generator
- X/Twitter text export
- Telegram text export
- Local browser storage
- Risk and disclaimer templates

### V2 — Setup Review

- Setup summary cards
- Support and resistance visualization
- Image export (PNG)
- Setup history
- Example scenarios

### V3 — Data Support

- Optional BTC price retrieval
- Optional Gold price retrieval
- Manual price and level overrides
- Daily Markdown snapshots
- GitHub Actions for report generation

### V4 — Project Maintenance

- Example gallery
- Contributor guide
- Issue templates
- Documentation improvements
- GitHub Pages updates

### V5 — Market Expansion

- ETH
- NIFTY
- BANKNIFTY
- Selected Indian stocks
- Indian options
- Watchlists

---

## Disclaimer

TradeSelfCheck is for educational market-watch, journaling, and setup-review workflows only. It is not financial advice, trading advice, or a recommendation to buy or sell any financial instrument.
