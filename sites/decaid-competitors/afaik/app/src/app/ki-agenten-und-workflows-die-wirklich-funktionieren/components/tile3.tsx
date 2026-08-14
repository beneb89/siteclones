export type Tile3Data = {
  id: string;
  htmlFor: string;
  ariarequired?: string;
  id2: string;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="box-content block mb-2.5" id={d.id}>
      <label className="box-content block align-middle text-muted text-base leading-[1.3125rem] cursor-pointer" htmlFor={d.htmlFor}>
        {" "}
        <input className="w-4 h-4 border border-solid border-border inline-block min-w-4 mr-1 rounded-xs shrink-0 align-middle text-border [font-family:Arial] leading-4.5 tracking-[normal] text-start bg-background shadow-[var(--clr-4)_0px_1px_2px_0px] cursor-default" data-component="input" aria-required={d.ariarequired} id={d.id2} name="item_meta[50][]" type="checkbox" value={d.value} />
        {d.text}
      </label>
    </div>
  );
}
