export type Tile4Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <p className="box-content block max-w-180 mt-5 mx-65 leading-[1.875rem] text-pretty max-md:leading-[1.75rem] max-md:mx-0 md:max-lg:mx-1 md:max-lg:leading-[1.8125rem] 2xl:mx-145">
      <strong className="box-content inline font-bold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
