export type Tile2Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="hidden 2xl:w-[298.5px] 2xl:block 2xl:max-w-full 2xl:px-3 2xl:shrink-0">
      <div className="hidden 2xl:block 2xl:mb-6">
        <a className="hidden 2xl:h-19 2xl:block 2xl:relative 2xl:py-4 2xl:pr-4 2xl:pl-12 2xl:rounded-xl 2xl:font-medium 2xl:cursor-pointer" href={d.href}>
          <i className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:absolute 2xl:left-4 2xl:mr-3 2xl:py-1 2xl:rounded-full 2xl:text-primary 2xl:[font-family:'Font_Awesome_Pro'] 2xl:font-black 2xl:leading-4 2xl:text-center 2xl:bg-surface" />
          {d.label}
        </a>
      </div>
    </div>
  );
}
