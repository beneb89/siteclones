export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block">
      <a className="w-full h-full border border-solid border-primary inline-flex max-w-full px-[13.3px] rounded-[2.7px] justify-center items-center overflow-hidden [background-size:0%_100%] [background-position:0%_50%] bg-no-repeat [background-clip:padding-box] [-webkit-background-clip:padding-box] cursor-pointer max-lg:px-2.5 max-lg:rounded-sm 2xl:px-5 2xl:rounded-sm" style={{ backgroundImage: "linear-gradient(var(--primary), var(--primary))" }} data-component="link" href={d.href} target="_blank">
        {" "}
        <span className="block relative z-2 min-w-0 pt-0.5 overflow-hidden text-center capitalize whitespace-nowrap text-nowrap max-lg:pt-[0.15rem] 2xl:pt-[0.1875rem]">
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
