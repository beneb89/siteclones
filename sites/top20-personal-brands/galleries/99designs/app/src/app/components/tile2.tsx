export type Tile2Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="w-[416.7px] block relative float-left px-[0.9375rem] max-md:w-90 max-md:px-[7.5px] md:max-lg:w-[23.0625rem] 2xl:w-[317.5px]">
      <a className="h-12.5 flex mb-[0.9375rem] rounded-[999px] align-middle leading-[1.3125rem] text-center bg-background shadow-[var(--clr-0)_0px_3px_9px_0px] cursor-pointer hover:shadow-[var(--clr-0)_0px_7px_21px_0px] focus:text-primary focus:outline-primary focus:[outline-style:dotted] focus:outline-1 focus:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        {" "}
        <span className="min-h-10.5 flex py-[0.5625rem] pr-5 pl-[0.9375rem] [justify-content:left] items-center text-left">
          {" "}
          <span className="block whitespace-nowrap">
            {d.label}
          </span>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
