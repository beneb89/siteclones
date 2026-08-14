export type TileData = {
  ariacontrols: string;
  id: string;
  label: string;
  label2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <button className="w-full border-2 border-solid border-clr-1 flex clear-both min-w-0 p-4 rounded-lg flex-col justify-between items-start text-sm font-medium leading-5 bg-clr-1 cursor-pointer" aria-controls={d.ariacontrols} aria-selected="false" id={d.id} role="tab" type="button">
      <div className="flex min-w-0 justify-between items-center w-100">
        <div className="block min-w-0">
          {d.label}
        </div>
        {" "}
        <i className="block min-w-0 text-clr-1 [font-family:'Font_Awesome_Pro'] text-base font-black leading-4 text-center" />
        {" "}
      </div>
      {" "}
      <div className="block min-w-0 mt-1 text-color-003 font-normal">
        {d.label2}
      </div>
      {" "}
    </button>
  );
}
