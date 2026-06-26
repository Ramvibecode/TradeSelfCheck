const STORAGE_KEY = "tradeselfcheck:v1";

const fields = {
  symbol: document.querySelector("#symbol"),
  bias: document.querySelector("#bias"),
  support: document.querySelector("#support"),
  resistance: document.querySelector("#resistance"),
  invalid: document.querySelector("#invalid"),
  target: document.querySelector("#target"),
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
};

function getSetup() {
  return {
    symbol: fields.symbol.value.trim(),
    bias: fields.bias.value.trim(),
    support: fields.support.value.trim(),
    resistance: fields.resistance.value.trim(),
    invalid: fields.invalid.value.trim(),
    target: fields.target.value.trim(),
    risk: fields.risk.value.trim(),
    journal: fields.journal.value.trim(),
    updatedAt: new Date().toISOString(),
  };
}

function firstLevel(value) {
  return value.split("/")[0].split("→")[0].trim() || "—";
}

function updatePreview(setup) {
  preview.symbol.textContent = setup.symbol;
  preview.bias.textContent = setup.bias;
  preview.support.textContent = firstLevel(setup.support);
  preview.resistance.textContent = firstLevel(setup.resistance);
  preview.invalid.textContent = setup.invalid || "—";
  preview.target.textContent = firstLevel(setup.target);

  preview.bias.classList.remove("bullish", "bearish");
  const biasText = setup.bias.toLowerCase();
  if (biasText.includes("bearish")) {
    preview.bias.classList.add("bearish");
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
    `Target Zones: ${setup.target}\n\n` +
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
    if (!saved) return;

    Object.entries(saved).forEach(([key, value]) => {
      if (fields[key] && typeof value === "string") {
        fields[key].value = value;
      }
    });
  } catch (error) {
    console.warn("Unable to load saved setup", error);
  }
}

function render() {
  const setup = getSetup();
  updatePreview(setup);
  fields.output.value = buildPost(setup);
  saveSetup(setup);
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
  setTimeout(() => {
    button.textContent = original;
  }, 1200);
});

document.querySelector("#save-journal").addEventListener("click", () => {
  render();
  const button = document.querySelector("#save-journal");
  const original = button.textContent;
  button.textContent = "Saved Locally";
  setTimeout(() => {
    button.textContent = original;
  }, 1200);
});

document.querySelector("#clear-storage").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
});

loadSetup();
render();
