// The calculator's data and arithmetic, taken from the page's own bundle.
//
// The captured DOM carries the rendered result of one workload, not the rule
// that produced it. This is that rule, read out of
// `sites/tools/provimedia/source/provimedia.de/build/assets/LlmKostenRechner-PULna0r3.js`
// — the chunk the page loads on demand — so the clone computes what the
// original computes rather than an approximation of it.

export type Model = {
  id: string;
  label: string;
  vendor: string;
  inputPerMTok: number;
  outputPerMTok: number;
};

/** List prices per million tokens, in USD. */
export const MODELS: Model[] = [
  { id: "claude-opus", label: "Claude Opus 4.8", vendor: "Anthropic", inputPerMTok: 5, outputPerMTok: 25 },
  { id: "claude-sonnet", label: "Claude Sonnet 5", vendor: "Anthropic", inputPerMTok: 3, outputPerMTok: 15 },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", vendor: "Anthropic", inputPerMTok: 1, outputPerMTok: 5 },
  { id: "gpt-5", label: "GPT-5", vendor: "OpenAI", inputPerMTok: 1.25, outputPerMTok: 10 },
  { id: "gpt-5-mini", label: "GPT-5 mini", vendor: "OpenAI", inputPerMTok: 0.25, outputPerMTok: 2 },
  { id: "gemini-2-5-pro", label: "Gemini 2.5 Pro", vendor: "Google", inputPerMTok: 1.25, outputPerMTok: 10 },
  { id: "mistral-large", label: "Mistral Large", vendor: "Mistral", inputPerMTok: 2, outputPerMTok: 6 },
];

export type Preset = { id: string; label: string; inputTokens: number; outputTokens: number };

/** The four workloads behind the "Anwendungsfall" buttons. */
export const PRESETS: Preset[] = [
  { id: "chatbot", label: "Chatbot-Antwort", inputTokens: 800, outputTokens: 300 },
  { id: "summary", label: "Dokument-Zusammenfassung", inputTokens: 4000, outputTokens: 500 },
  { id: "rag", label: "RAG-Suche mit Kontext", inputTokens: 2500, outputTokens: 400 },
  { id: "code", label: "Code-Assistent", inputTokens: 3000, outputTokens: 1200 },
];

/** Hard-coded in the original, alongside the prices, and shown in its footnote. */
export const USD_TO_EUR = 0.88;
export const PRICE_DATE = "2026-07-14";

export const REQUESTS_MIN = 1;
export const REQUESTS_MAX = 10_000_000;
export const TOKENS_MIN = 0;
export const TOKENS_MAX = 1_000_000;

export const DEFAULTS = { requests: 10_000, inputTokens: 800, outputTokens: 300, presetId: "chatbot" };

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Whole numbers only, held inside the field's own min/max, falling back when
 *  the field is empty or unparseable. */
export function clamp(value: number | null, min: number, max: number, fallback: number): number {
  const n = typeof value === "number" && Number.isFinite(value) ? value : fallback;
  return Math.min(max, Math.max(min, Math.round(n)));
}

export type Result = { id: string; label: string; vendor: string; usd: number; eur: number };

/** Monthly cost per selected model, cheapest first. */
export function calculate({
  requests,
  inputTokens,
  outputTokens,
  modelIds,
}: {
  requests: number;
  inputTokens: number;
  outputTokens: number;
  modelIds: string[];
}): Result[] {
  const r = clamp(requests, REQUESTS_MIN, REQUESTS_MAX, DEFAULTS.requests);
  const inTok = clamp(inputTokens, TOKENS_MIN, TOKENS_MAX, DEFAULTS.inputTokens);
  const outTok = clamp(outputTokens, TOKENS_MIN, TOKENS_MAX, DEFAULTS.outputTokens);
  if (!modelIds.length) return [];

  const wanted = new Set(modelIds);
  return MODELS.filter((m) => wanted.has(m.id))
    .map((m) => {
      const usd = r * ((inTok / 1e6) * m.inputPerMTok + (outTok / 1e6) * m.outputPerMTok);
      return { id: m.id, label: m.label, vendor: m.vendor, usd: round2(usd), eur: round2(usd * USD_TO_EUR), raw: usd };
    })
    .sort((a, b) => a.raw - b.raw)
    .map(({ raw: _raw, ...rest }) => rest);
}

const money = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const ratio = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export const formatUsd = (n: number) => `${money.format(n)} $`;
export const formatEur = (n: number) => `${money.format(n)} €`;

/** "× 2,9" against the cheapest result — null for the cheapest row itself. */
export function formatRatio(usd: number, cheapest: number): string | null {
  if (!cheapest || usd === cheapest) return null;
  return `× ${ratio.format(usd / cheapest)}`;
}
