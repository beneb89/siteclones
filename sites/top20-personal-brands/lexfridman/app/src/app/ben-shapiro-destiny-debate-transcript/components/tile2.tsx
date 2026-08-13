export type Tile2Data = {
  href: string;
  label: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="box-content block">
      <span className="box-content block pt-2.5 font-bold" />
      {" "}
      <span className="box-content inline">
        <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
          {d.label}
        </a>
        {" "}
      </span>
      {" "}
      <span className="box-content inline">
        {d.text}
      </span>
      {" "}
    </div>
  );
}
