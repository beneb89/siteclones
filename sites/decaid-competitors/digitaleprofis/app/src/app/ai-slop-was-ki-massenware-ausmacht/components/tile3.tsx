export type Tile3Data = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block mt-[1.4rem]">
      {d.description}
      <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.description2}
      </a>
      {d.description3}
    </p>
  );
}
