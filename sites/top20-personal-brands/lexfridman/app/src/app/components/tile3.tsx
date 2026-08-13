export type Tile3Data = {
  text: string;
  href: string;
  rel?: string;
  target?: string;
  id: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="box-content block pb-[0.9375rem] max-md:pb-7.5">
      <div className="box-content block">
        <div className="box-content block font-bold">
          {d.text}
        </div>
        {" "}
        <div className="box-content block">
          <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
            Paper
          </a>
          {" "}
          <span className="box-content inline pl-[0.3125rem] text-sm leading-6">
            {"(Cite: "}
            <a className="box-content inline pl-[0.1875rem] text-primary underline cursor-pointer" data-component="link" href="#" id={d.id}>
              BibTeX
            </a>
            )
          </span>
        </div>
        {" "}
        <div className="box-content block text-muted-foreground">
          <span className="box-content inline text-color-005 italic">
            {"Summary: "}
          </span>
          {d.text2}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
