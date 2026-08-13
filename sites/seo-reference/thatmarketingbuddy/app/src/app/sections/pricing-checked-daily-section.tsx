/** Pricing Checked Daily section. */
export default function PricingCheckedDailySection() {
  return (
    <div className="block pb-8">
      <div className="flex mb-3 items-center gap-4 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4">
        <span className="flex items-center gap-1.5">
          <span className="block rounded-full bg-color-007 w-1.5 h-1.5 max-md:w-1" />
          Pricing checked daily
        </span>
        <span className="block">
          11 tools in database
        </span>
        <span className="block">
          Research-based review
        </span>
      </div>
      <p className="block text-color-003 text-xs leading-4">
        This page may contain affiliate links. I earn a commission at no extra cost to you. This never influences ratings.
      </p>
    </div>
  );
}
