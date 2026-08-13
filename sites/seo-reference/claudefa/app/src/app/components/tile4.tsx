export type Tile4Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
      <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
        {d.text}
      </span>
      <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
        {d.text2}
      </span>
      <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
        {d.text3}
      </span>
      <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
        {d.text4}
      </span>
    </div>
  );
}
