export type Tile2Data = {
  htmlFor: string;
  id: string;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block">
      <label className="w-full flex py-2 px-3 text-sm leading-5 cursor-default" htmlFor={d.htmlFor}>
        {" "}
        <input className="w-6 h-6 border border-solid border-muted-foreground block min-w-0 -mt-0.5 mr-3 rounded-sm shrink-0 align-top text-color-004 text-start bg-background bg-contain [background-position:50%_50%] bg-no-repeat" id={d.id} name="typeOfLearnings[]" type="checkbox" value={d.value} />
        {d.text}
      </label>
      {" "}
    </div>
  );
}
