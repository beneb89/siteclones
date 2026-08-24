export type Tile2Data = {
  description: string;
  href: string;
  rel: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block mb-[33.3px] max-md:mb-[26.7px]">
      <span className="inline">
        {d.description}
      </span>
      <a className="inline text-primary cursor-pointer" data-component="link" href={d.href} rel={d.rel} target="_blank">
        <span className="inline">
          {d.description2}
        </span>
      </a>
      <span className="inline">
        {d.description3}
      </span>
    </p>
  );
}
