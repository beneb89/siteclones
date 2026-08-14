export type Tile6Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <details className="border-b border-solid border-b-border block py-4.5 2xl:hidden">
      <summary className="flex justify-between gap-5 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-semibold leading-[1.9375rem] list-inside cursor-pointer max-md:leading-[1.8125rem] 2xl:hidden">
        {d.text}
        <span className="block shrink-0 text-accent text-[1.625rem] font-light leading-[0.8125rem] 2xl:hidden">
          +
        </span>
        {" "}
        <span className="hidden min-w-0 shrink-0 text-accent text-[1.625rem] font-light leading-[0.8125rem]">
          −
        </span>
        {" "}
      </summary>
      {" "}
      <div className="w-full max-w-180 block mt-[14.9px] text-muted-foreground text-base leading-[1.625rem] max-md:mt-3.5 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </details>
  );
}
