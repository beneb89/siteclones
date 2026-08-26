export type TileData = {
  htmlFor: string;
  text: string;
  id: string;
  max: string;
  min: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block">
      <label className="block mb-1.5 text-sm font-semibold leading-5 cursor-default" htmlFor={d.htmlFor}>
        {d.text}
      </label>
      <input className="w-full h-11 min-h-11 border border-solid border-border inline-block py-2 px-3 rounded-lg overflow-clip bg-background cursor-text focus:shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--primary)_0px_0px_0px_2px,var(--clr-1)_0px_0px_0px_0px]" data-component="input" id={d.id} max={d.max} min={d.min} step="1" type="number" />
    </div>
  );
}
