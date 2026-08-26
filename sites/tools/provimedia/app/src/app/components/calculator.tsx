"use client";
import { useMemo, useState } from "react";
import TextLink from "./text-link";
import Tile from "./tile";
import Logo from "./logo";
import Tile2 from "./tile2";
import Tile3 from "./tile3";
import { TextLink_styles, Logo_styles, Tile2_styles } from "../_styles";
import {
  MODELS,
  PRESETS,
  DEFAULTS,
  REQUESTS_MAX,
  REQUESTS_MIN,
  TOKENS_MAX,
  TOKENS_MIN,
  calculate,
  formatEur,
  formatRatio,
  formatUsd,
} from "../llm-pricing";

/**
 * The calculator, working.
 *
 * The capture froze one workload — 10,000 requests at 800 input and 300 output
 * tokens — into markup; this restores the control over it. Layout and classes
 * are the captured ones, so the page still looks like the page: the selected
 * and unselected variants of each control come from `_styles.ts`, which holds
 * both because the capture happened to contain both states.
 *
 * The numbers come from `../llm-pricing`, read out of the site's own chunk.
 */
export default function Calculator() {
  const [requests, setRequests] = useState<number | null>(DEFAULTS.requests);
  const [inputTokens, setInputTokens] = useState<number | null>(DEFAULTS.inputTokens);
  const [outputTokens, setOutputTokens] = useState<number | null>(DEFAULTS.outputTokens);
  const [presetId, setPresetId] = useState<string | null>(DEFAULTS.presetId);
  const [modelIds, setModelIds] = useState<string[]>(MODELS.map((m) => m.id));

  const results = useMemo(
    () =>
      calculate({
        requests: requests ?? DEFAULTS.requests,
        inputTokens: inputTokens ?? DEFAULTS.inputTokens,
        outputTokens: outputTokens ?? DEFAULTS.outputTokens,
        modelIds,
      }),
    [requests, inputTokens, outputTokens, modelIds],
  );
  const cheapest = results[0]?.usd ?? 0;

  // Typing a token count by hand leaves the preset behind, as in the original.
  const editTokens = (set: (n: number | null) => void) => (n: number | null) => {
    set(n);
    setPresetId(null);
  };

  const fields: Array<{ id: string; text: string; min: number; max: number; value: number | null; onChange: (n: number | null) => void }> = [
    { id: "llm-requests", text: " Anfragen pro Monat ", min: REQUESTS_MIN, max: REQUESTS_MAX, value: requests, onChange: setRequests },
    { id: "llm-input-tokens", text: " Ø Input-Tokens / Anfrage ", min: TOKENS_MIN, max: TOKENS_MAX, value: inputTokens, onChange: editTokens(setInputTokens) },
    { id: "llm-output-tokens", text: " Ø Output-Tokens / Anfrage ", min: TOKENS_MIN, max: TOKENS_MAX, value: outputTokens, onChange: editTokens(setOutputTokens) },
  ];

  return (
    <div className="block">
      <div className="block mb-8">
        <p className="block mb-3 text-sm font-semibold leading-5 text-pretty">
          Anwendungsfall
        </p>
        <div className="grid gap-3 grid-cols-4 max-md:grid-cols-2">
          {PRESETS.map((preset) => {
            const active = preset.id === presetId;
            return (
              <TextLink
                key={preset.id}
                d={{ ariapressed: String(active), label: preset.label }}
                styles={TextLink_styles[active ? 0 : 1]}
                onSelect={() => {
                  setInputTokens(preset.inputTokens);
                  setOutputTokens(preset.outputTokens);
                  setPresetId(preset.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="grid mb-8 gap-5 grid-cols-3 max-md:grid-cols-1">
        {fields.map((f) => (
          <Tile
            key={f.id}
            d={{ htmlFor: f.id, text: f.text, id: f.id, max: String(f.max), min: String(f.min) }}
            value={f.value ?? undefined}
            onChange={f.onChange}
          />
        ))}
      </div>
      <div className="block mb-8">
        <p className="block mb-3 text-sm font-semibold leading-5 text-pretty">
          Modelle vergleichen
        </p>
        <div className="flex flex-wrap gap-2.5">
          {MODELS.map((m, i) => (
            <Logo
              key={m.id}
              d={{ value: m.id, text: m.label, text2: m.vendor }}
              styles={Logo_styles[i]}
              checked={modelIds.includes(m.id)}
              onToggle={() =>
                setModelIds((ids) => (ids.includes(m.id) ? ids.filter((x) => x !== m.id) : [...ids, m.id]))
              }
            />
          ))}
        </div>
      </div>
      <div className="block">
        {results.length === 0 ? (
          <p className="block text-muted-foreground leading-[1.6875rem] text-pretty">
            Kein Modell ausgewählt.
          </p>
        ) : (
          <>
            <div className="hidden max-md:block">
              {results.map((r, i) => (
                <Tile2
                  key={r.id}
                  d={{
                    description: r.label,
                    description2: r.vendor,
                    text: i === 0 ? " Günstigstes Modell " : (formatRatio(r.usd, cheapest) ?? ""),
                    text2: formatUsd(r.usd),
                    text3: formatEur(r.eur),
                  }}
                  styles={Tile2_styles[i === 0 ? 0 : i === results.length - 1 ? 6 : 1]}
                />
              ))}
            </div>
            <div className="block overflow-auto max-md:hidden">
              <table className="table text-left [border-collapse:collapse] [border-spacing:2px] w-full">
                <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                  <tr className="border-b border-solid border-b-border table-row align-middle text-muted-foreground text-xs leading-4 tracking-[0.6px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                    <th className="table-cell py-3 pr-4 align-middle font-semibold [border-collapse:collapse] [border-spacing:2px]">
                      Modell
                    </th>
                    <th className="table-cell py-3 pr-4 align-middle font-semibold [border-collapse:collapse] [border-spacing:2px]">
                      Anbieter
                    </th>
                    <th className="table-cell py-3 pr-4 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                      USD / Monat
                    </th>
                    <th className="table-cell py-3 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                      EUR / Monat
                    </th>
                  </tr>
                </thead>
                <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                  {results.map((r, i) =>
                    i === 0 ? (
                      <tr key={r.id} className="border-b border-solid border-b-surface-3 table-row align-middle bg-clr-3 [border-collapse:collapse] [border-spacing:2px]">
                        <td className="table-cell py-3 pr-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
                          <span className="inline text-primary font-semibold [border-collapse:collapse] [border-spacing:2px]">
                            {r.label}
                          </span>
                          <span className="inline ml-2 py-0.5 px-2 rounded-full align-middle text-primary text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[0.55px] uppercase bg-surface [border-collapse:collapse] [border-spacing:2px]">
                            {" Günstigstes Modell "}
                          </span>
                        </td>
                        <td className="table-cell py-3 pr-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                          {r.vendor}
                        </td>
                        <td className="table-cell py-3 pr-4 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                          {formatUsd(r.usd)}
                        </td>
                        <td className="table-cell py-3 align-middle text-muted-foreground text-right [border-collapse:collapse] [border-spacing:2px]">
                          {`${formatEur(r.eur)} `}
                        </td>
                      </tr>
                    ) : (
                      <Tile3
                        key={r.id}
                        d={{
                          text: r.label,
                          text2: r.vendor,
                          text3: formatUsd(r.usd),
                          text4: `${formatEur(r.eur)} `,
                          text5: formatRatio(r.usd, cheapest) ?? "",
                        }}
                      />
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
        <p className="block mt-4 text-muted-foreground text-xs leading-[1.25rem] text-pretty">
          Listenpreise der Anbieter, Stand: 14. Juli 2026 · EUR-Umrechnung ≈ Kurs 0,88 (Stand: 14. Juli 2026) · ohne Rabatte durch Caching oder Batch-Verarbeitung · alle Angaben ohne Gewähr.
        </p>
      </div>
    </div>
  );
}
