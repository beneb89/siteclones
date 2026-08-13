export type Tile2Data = {
  text: string;
  href: string;
  label: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="box-content block">
      <span className="box-content block pt-2.5 font-bold">
        {d.text}
      </span>
      {" "}
      <span className="box-content inline">
        <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
          {d.label}
        </a>
        {" "}
      </span>
      {" "}
      <span className="box-content inline">
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
