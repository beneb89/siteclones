export type TileData = {
  htmlFor: string;
  text: string;
  id: string;
  name: string;
  placeholder: string;
  type: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="flex relative flex-col">
      <label className="block mb-2 text-muted-foreground text-[0.8125rem] font-medium leading-[1.3125rem] tracking-[0.13px] cursor-default" htmlFor={d.htmlFor}>
        {d.text}
        <span className="inline ml-0.5 text-primary">
          *
        </span>
      </label>
      {" "}
      <input className="w-full h-[3.5625rem] border border-solid border-surface block py-4 px-4.5 rounded-xl overflow-clip text-[0.9375rem] leading-[1.4375rem] bg-color-010 cursor-text max-lg:h-14.5 max-lg:leading-6 max-lg:[font-size:inherit]" data-component="input" id={d.id} name={d.name} placeholder={d.placeholder} type={d.type} />
      {"  "}
    </div>
  );
}
