export type Tile8Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile8({ d }: { d: Tile8Data }) {
  return (
    <div className="flex py-2 px-2.5 rounded-md items-center gap-2 text-[0.8125rem] leading-[1.3125rem] bg-surface-2">
      <span className="w-5.5 h-4 flex rounded-[3px] justify-center items-center text-color-002 text-[0.5625rem] font-bold leading-[0.9375rem] bg-color-005">
        {d.text}
      </span>
      {" "}
      <span className="block">
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
