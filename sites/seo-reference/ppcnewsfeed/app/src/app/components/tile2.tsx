export type Tile2Data = {
  id: string;
  value: string;
  htmlFor: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block ml-1 leading-3.5">
      <input className="w-[0.8125rem] h-[0.8125rem] inline-block mr-2.5 text-color-001 text-[0.875rem] text-start bg-surface cursor-default" data-component="input" id={d.id} name="radio-4-11" type="radio" value={d.value} />
      {" "}
      <label className="inline-block relative top-[0.1875rem] -bottom-[0.1875rem] mb-2 text-[0.9375rem] font-semibold cursor-default" htmlFor={d.htmlFor}>
        {"  "}
        <span className="inline relative">
          {d.text}
        </span>
        {" "}
      </label>
    </div>
  );
}
