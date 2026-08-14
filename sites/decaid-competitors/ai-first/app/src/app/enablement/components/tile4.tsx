export type Tile4Data = {
  label: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <button className="border border-solid border-surface-4 block py-1.5 px-3 rounded-full text-color-032 text-[0.8125rem] leading-[1.25rem] text-center cursor-default max-md:text-xs max-md:leading-[1.125rem] md:max-lg:leading-[1.1875rem] 2xl:text-sm 2xl:leading-[1.3125rem]" data-component="button" aria-pressed="false" type="button">
      {d.label}
    </button>
  );
}
