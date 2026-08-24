export type Tile2Data = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block mb-[33.3px] max-md:mb-[26.7px]">
      {d.description}
      <a className="inline text-primary cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.description2}
      </a>
      {d.description3}
    </p>
  );
}
