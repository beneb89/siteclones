export type Tile5Data = {
  id: string;
  text: string;
  id2: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <div className="flex relative pb-3 items-start text-color-003 text-sm font-medium leading-5">
      <i className="block mr-2 [font-family:'Font_Awesome_Pro'] text-[1.0625rem] font-normal leading-[1.25rem] text-center" />
      <div className="hidden 2xl:block" id={d.id}>
        {d.text}
      </div>
      {" "}
      <div className="block 2xl:hidden" id={d.id2}>
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
