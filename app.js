const STORAGE_KEY = "tradeselfcheck:v2";

const fields = {
  symbol: document.querySelector("#symbol"),
  bias: document.querySelector("#bias"),
  support: document.querySelector("#support"),
  resistance: document.querySelector("#resistance"),
  invalid: document.querySelector("#invalid"),
  target: document.querySelector("#target"),
  review: document.querySelector("#review"),
  reviewDate: document.querySelector("#reviewDate"),
  risk: document.querySelector("#risk"),
  journal: document.querySelector("#journal"),
  output: document.querySelector("#output"),
};

const preview = {
  symbol: document.querySelector("#preview-symbol"),
  bias: document.querySelector("#preview-bias"),
  support: document.querySelector("#preview-support"),
  resistance: document.querySelector("#preview-resistance"),
  invalid: document.querySelector("#preview-invalid"),
  target: document.querySelector("#preview-target"),
  status: document.querySelector("#preview-status"),
  review: document.querySelector("#preview-review"),
};

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function getSetup() {
  return {
    symbol: fields.symbol.value.trim(),
    bias: fields.bias.value.trim(),
    support: fields.support.value.trim(),
    resistance: fields.resistance.value.trim(),
    invalid: fields.invalid.value.trim(),
    target: fields.target.value.trim(),
    review: fields.review.value.trim(),
    reviewDate: fields.reviewDate.value || todayIsoDate(),
    risk: fields.risk.value.trim(),
    journal: fields.journal.value.trim(),
    updatedAt: new Date().toISOString(),
  };
}

function firstLevel(value) {
  return value.split("/")[0].split("→")[0].trim() || "—";
}

function statusLabel(review) {
  if (review.includes("Target")) return "Target Reached";
  if (review.includes("Invalidation")) return "Invalidated";
  if (review.includes("No trade")) return "No Trade";
  if (review.includes("Closed")) return "Closed";
  return "Active Watch";
}

function updatePreview(setup) {
  preview.symbol.textContent = setup.symbol;
  preview.bias.textContent = setup.bias;
  preview.support.textContent = firstLevel(setup.support);
  preview.resistance.textContent = firstLevel(setup.resistance);
  preview.invalid.textContent = setup.invalid || "—";
  preview.target.textContent = firstLevel(setup.target);
  preview.status.textContent = statusLabel(setup.review);
  preview.review.textContent = `Review: ${setup.review}`;

  preview.bias.classList.remove("bullish", "bearish", "neutral-bias");
  const biasText = setup.bias.toLowerCase();
  if (biasText.includes("bearish")) {
    preview.bias.classList.add("bearish");
  } else if (biasText.includes("neutral") || biasText.includes("range")) {
    preview.bias.classList.add("neutral-bias");
  } else {
    preview.bias.classList.add("bullish");
  }
}

function buildPost(setup) {
  const title = setup.symbol === "BTC" ? "BTC Market Watch" : "Gold Market Watch";
  return `${title} — Educational View\n\n` +
    `Bias: ${setup.bias}\n` +
    `Support: ${setup.support}\n` +
    `Resistance: ${setup.resistance}\n` +
    `Invalidation: ${setup.invalid}\n` +
    `Target Zones: ${setup.target}\n` +
    `Review: ${setup.review}\n` +
    `Review Date: ${setup.reviewDate}\n\n` +
    `Plan: ${setup.risk}\n\n` +
    `Checklist:\n` +
    `- Wait for confirmation before action\n` +
    `- Avoid chasing candles\n` +
    `- Respect invalidation\n` +
    `- Keep risk small and defined\n\n` +
    `#TradeSelfCheck #MarketWatch #BTC #Gold #RiskManagement\n\n` +
    `Not financial advice. Educational market-watch only.`;
}

function saveSetup(setup) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(setup));
}

function loadSetup() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) {
      fields.reviewDate.value = todayIsoDate();
      return;
    }
    Object.entries(saved).forEach(([key, value]) => {
      if (fields[key] && typeof value === "string") fields[key].value = value;
    });
    if (!fields.reviewDate.value) fields.reviewDate.value = todayIsoDate();
  } catch (error) {
    console.warn("Unable to load saved setup", error);
    fields.reviewDate.value = todayIsoDate();
  }
}

function render() {
  const setup = getSetup();
  updatePreview(setup);
  fields.output.value = buildPost(setup);
  saveSetup(setup);
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawLevelBox(ctx, label, value, x, y) {
  roundedRect(ctx, x, y, 470, 92, 22);
  ctx.fillStyle = "rgba(8, 11, 18, 0.72)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.stroke();
  ctx.fillStyle = "#93a4b8";
  ctx.font = "700 20px Arial";
  ctx.fillText(label, x + 24, y + 34);
  ctx.fillStyle = "#f7fafc";
  ctx.font = "800 26px Arial";
  ctx.fillText(value.slice(0, 32), x + 24, y + 68);
}

function exportProofCard() {
  const setup = getSetup();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 675;

  const bg = ctx.createLinearGradient(0, 0, 1200, 675);
  bg.addColorStop(0, "#080b12");
  bg.addColorStop(0.5, "#101725");
  bg.addColorStop(1, "#071019");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1200, 675);

  ctx.fillStyle = "rgba(245,158,11,0.18)";
  ctx.beginPath();
  ctx.arc(160, 80, 220, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(45,212,191,0.15)";
  ctx.beginPath();
  ctx.arc(1060, 95, 260, 0, Math.PI * 2);
  ctx.fill();

  roundedRect(ctx, 70, 60, 1060, 555, 36);
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.14)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#93a4b8";
  ctx.font = "800 24px Arial";
  ctx.fillText("TRADESELFCHECK", 110, 120);
  ctx.fillStyle = "#2dd4bf";
  ctx.fillText(statusLabel(setup.review).toUpperCase(), 825, 120);

  ctx.fillStyle = "#f7fafc";
  ctx.font = "900 102px Arial";
  ctx.fillText(setup.symbol, 110, 235);

  ctx.fillStyle = setup.bias.toLowerCase().includes("bearish") ? "#fb7185" : "#34d399";
  ctx.font = "800 34px Arial";
  ctx.fillText(setup.bias.slice(0, 42), 110, 295);

  drawLevelBox(ctx, "Support", setup.support, 110, 345);
  drawLevelBox(ctx, "Resistance", setup.resistance, 620, 345);
  drawLevelBox(ctx, "Invalidation", setup.invalid, 110, 460);
  drawLevelBox(ctx, "Target Zone", setup.target, 620, 460);

  ctx.fillStyle = "#93a4b8";
  ctx.font = "700 22px Arial";
  ctx.fillText(`Review: ${setup.review} • ${setup.reviewDate}`, 110, 585);
  ctx.fillText("Educational market-watch only. Not financial advice.", 600, 585);

  const link = document.createElement("a");
  link.download = `TradeSelfCheck-${setup.symbol.replace("/", "-")}-${setup.reviewDate}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

document.querySelector("#setup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  render();
  fields.output.scrollIntoView({ behavior: "smooth", block: "center" });
});

Object.values(fields).forEach((field) => {
  if (!field || field === fields.output) return;
  field.addEventListener("input", render);
});

document.querySelector("#copy-output").addEventListener("click", async () => {
  await navigator.clipboard.writeText(fields.output.value);
  const button = document.querySelector("#copy-output");
  const original = button.textContent;
  button.textContent = "Copied";
  setTimeout(() => { button.textContent = original; }, 1200);
});

document.querySelector("#export-card").addEventListener("click", () => {
  render();
  exportProofCard();
});

document.querySelector("#save-journal").addEventListener("click", () => {
  render();
  const button = document.querySelector("#save-journal");
  const original = button.textContent;
  button.textContent = "Saved Locally";
  setTimeout(() => { button.textContent = original; }, 1200);
});

document.querySelector("#clear-storage").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
});

loadSetup();
render();
