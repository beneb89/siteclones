export type TileData = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
      {d.description}
      <a className="inline text-border font-medium underline cursor-pointer" data-component="link" href={d.href}>
        {d.description2}
      </a>
      {d.description3}
    </p>
  );
}
