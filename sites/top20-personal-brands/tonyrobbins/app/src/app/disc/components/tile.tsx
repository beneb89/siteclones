export type TileData = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block text-center">
      <p className="block mb-2.5 text-[3.625rem] font-medium leading-[3.25rem] tracking-[-2.88px] max-md:text-[2.5rem] max-md:leading-[2.25rem] max-md:tracking-[-1.97px] md:max-lg:text-[2.9375rem] md:max-lg:leading-[2.6875rem] md:max-lg:tracking-[-2.37px] 2xl:text-[4.375rem] 2xl:leading-[3.9375rem] 2xl:tracking-[-3.52px]">
        {d.description}
      </p>
      <p className="block mb-2.5 text-lg font-medium leading-[1.6875rem]" />
      <div className="block">
        <div className="block text-clr-9 leading-7">
          <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
            {d.description2}
            <br className="inline" />
            {d.description3}
          </p>
        </div>
      </div>
    </div>
  );
}
