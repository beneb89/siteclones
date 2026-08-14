export type TileData = {
  id: string;
  id2: string;
  name: string;
  placeholder: string;
  type: string;
  htmlFor: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block relative clear-both mb-8 max-md:mb-4" id={d.id}>
      <div className="block before:content-[''] before:table before:w-0 before:h-0 after:content-[''] after:table after:w-0 after:h-0">
        <input className="w-full h-16.5 border border-solid border-clr-0 inline-block max-w-full px-6 overflow-clip align-middle font-normal text-start shadow-[var(--clr-2)_0px_3px_6px_0px] cursor-text" data-component="input" id={d.id2} name={d.name} placeholder={d.placeholder} type={d.type} />
        <label className="hidden pb-1 text-border font-normal cursor-pointer" htmlFor={d.htmlFor}>
          {d.text}
        </label>
      </div>
    </div>
  );
}
