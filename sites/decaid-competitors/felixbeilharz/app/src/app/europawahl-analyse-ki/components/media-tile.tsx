export type MediaTileData = {
  id: string;
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="hidden 2xl:w-[14.175rem] 2xl:block 2xl:max-w-[calc(25%_-_30px)] 2xl:mt-2.5 2xl:ml-7.5 2xl:flex-col 2xl:justify-start 2xl:basis-full before:content-[''] before:hidden max-lg:before:hidden" id={d.id}>
      <a className="hidden 2xl:border-t 2xl:border-solid 2xl:border-t-color-028 2xl:flex 2xl:relative 2xl:z-2 2xl:py-2 2xl:px-[0.3125rem] 2xl:items-center 2xl:overflow-hidden 2xl:text-[0.9375rem] 2xl:font-bold 2xl:leading-4.5 2xl:cursor-pointer" href={d.href}>
        <span className="hidden 2xl:w-[0.9375rem] 2xl:flex 2xl:mr-2 2xl:mb-0.5 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:basis-[15px]">
          <svg className="hidden 2xl:w-[0.9375rem] 2xl:h-[0.9375rem] 2xl:block 2xl:overflow-hidden 2xl:leading-[0.9375rem]" fill="currentColor">
            <use xlinkHref="#kjhvnkw1" />
          </svg>
        </span>
        <span className="hidden 2xl:block 2xl:max-w-full 2xl:grow 2xl:overflow-hidden 2xl:whitespace-nowrap 2xl:text-nowrap">
          {d.label}
        </span>
      </a>
    </li>
  );
}
