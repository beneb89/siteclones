export type Tile3Data = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="box-content block max-w-180 my-6 text-[1.3125rem] leading-[2.25rem] tracking-[-0.06px] text-pretty max-md:my-[20.7px] max-md:text-lg max-md:leading-[1.875rem] max-md:tracking-[-0.05px] md:max-lg:my-[21.3px] md:max-lg:text-[1.1875rem] md:max-lg:leading-8 2xl:my-[1.55rem] 2xl:leading-[2.3125rem] 2xl:[font-size:inherit] 2xl:tracking-[inherit]">
      {d.description}
      <strong className="box-content inline font-bold">
        {d.description2}
      </strong>
      {d.description3}
    </p>
  );
}
