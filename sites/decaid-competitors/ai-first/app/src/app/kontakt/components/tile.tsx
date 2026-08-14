export type TileData = {
  htmlFor: string;
  text: string;
  ariainvalid?: string;
  ariarequired?: string;
  id: string;
  name: string;
  type: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block mb-6">
      <label className="block mb-2 text-sm font-medium leading-5 cursor-default" htmlFor={d.htmlFor}>
        {d.text}
      </label>
      <input className="w-full h-9.5 border-b-2 border-solid border-b-surface inline-block pb-2 overflow-clip [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg italic leading-7 [font-feature-settings:'calt',_'liga',_'onum'] cursor-text" data-component="input" aria-invalid={d.ariainvalid} aria-required={d.ariarequired} id={d.id} name={d.name} type={d.type} />
    </div>
  );
}
