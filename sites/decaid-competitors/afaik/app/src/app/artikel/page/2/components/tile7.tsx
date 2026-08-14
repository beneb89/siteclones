export type Tile7Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile7({ d }: { d: Tile7Data }) {
  return (
    <p className="box-content block max-w-180 mt-5 mx-65 leading-[1.875rem] text-pretty max-md:leading-[1.75rem] max-md:mx-0 md:max-lg:mx-1 md:max-lg:leading-[1.8125rem] 2xl:mx-145">
      {d.description}
      <strong className="box-content inline font-bold">
        {d.description2}
      </strong>
    </p>
  );
}
