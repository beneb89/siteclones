export type TileData = {
  id: string;
  htmlFor: string;
  id2: string;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="w-[471.5px] block shrink-0 basis-full max-md:w-[18.8125rem] md:max-lg:w-151.5 2xl:w-184.5" id={d.id}>
      <label className="h-full block align-middle text-foreground cursor-pointer max-lg:text-sm max-lg:leading-[1.125rem] 2xl:text-sm 2xl:leading-[1.125rem]" htmlFor={d.htmlFor}>
        {" "}
        <input className="w-4 h-4 block absolute min-w-4 -m-px rounded-[50%] shrink-0 overflow-hidden align-middle text-color-006 bg-background shadow-[var(--clr-11)_0px_1px_2px_0px] [clip-path:inset(50%)] cursor-default" data-component="input" id={d.id2} name="item_meta[84]" type="radio" value={d.value} />
        {" "}
        <div className="h-full border border-solid border-color-006 flex py-5 px-3 items-center gap-4 overflow-hidden bg-background">
          {d.text}
        </div>
      </label>
    </div>
  );
}
