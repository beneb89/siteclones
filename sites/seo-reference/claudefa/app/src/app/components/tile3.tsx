export type Tile3Data = {
  ariaLabel: string;
  label: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <button className="hidden 2xl:block 2xl:relative 2xl:py-2.5 2xl:px-6 2xl:rounded-xl 2xl:text-clr-18 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:text-center 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:cursor-pointer" aria-label={d.ariaLabel}>
      <span className="hidden 2xl:inline 2xl:relative 2xl:z-10">
        {d.label}
      </span>
    </button>
  );
}
