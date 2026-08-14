export type Tile5Data = {
  id: string;
  id2: string;
  name: string;
  htmlFor: string;
  text: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <div className="block" id={d.id}>
      <div className="min-h-6 block mt-4 mb-0.5 pl-1">
        <input className="w-9 h-6 border border-solid border-muted-foreground block float-left mr-2 rounded-[48px] shrink-0 align-top text-color-004 text-[1.5rem] text-start bg-background bg-contain [background-position:0%_50%] bg-no-repeat cursor-default" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\")" }} id={d.id2} name={d.name} role="switch" type="checkbox" value="true" />
        {" "}
        <label className="inline-block leading-4 cursor-default" htmlFor={d.htmlFor}>
          {d.text}
        </label>
        {" "}
      </div>
      {" "}
    </div>
  );
}
