export type TileData = {
  id: string;
  htmlFor: string;
  text: string;
  id2: string;
  name: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="flex -mx-2.5 justify-between max-md:flex-col">
      <div className="w-full block px-2.5 [word-break:break-word] max-md:pr-0">
        <div className="block clear-both py-2.5 max-md:px-px max-md:overflow-x-hidden max-md:overflow-y-auto" id={d.id}>
          <label className="block mb-1 align-middle text-base font-bold leading-[1.3125rem] [overflow-wrap:break-word] cursor-default max-md:max-w-full max-lg:[font-size:inherit] max-lg:leading-[inherit]" htmlFor={d.htmlFor}>
            {d.text}
          </label>
          <input className="w-full h-[3.4375rem] min-h-[3.4375rem] block py-[13.3px] px-5 rounded-[2.7px] overflow-clip align-middle text-foreground leading-3.5 bg-background shadow-[var(--color-002)_0px_0px_0px_1px_inset] cursor-text max-lg:h-15 max-lg:min-h-15 max-lg:py-5 max-lg:px-7.5 max-lg:rounded-sm max-lg:leading-4 2xl:h-15 2xl:min-h-15 2xl:py-5 2xl:px-7.5 2xl:rounded-sm 2xl:text-base 2xl:leading-4" data-component="input" id={d.id2} name={d.name} type="text" />
        </div>
      </div>
    </div>
  );
}
