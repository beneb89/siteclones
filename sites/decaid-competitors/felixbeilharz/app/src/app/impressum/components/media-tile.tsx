export type MediaTileData = {
  id: string;
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="w-[14.175rem] block max-w-[calc(25%_-_30px)] mt-2.5 ml-7.5 flex-col justify-start basis-full before:content-[''] before:hidden" id={d.id}>
      <a className="border-t border-solid border-t-color-028 flex relative z-2 py-2 px-[0.3125rem] items-center overflow-hidden text-[0.9375rem] font-bold leading-4.5 cursor-pointer" data-component="link" href={d.href}>
        <span className="w-[0.9375rem] flex mr-2 mb-0.5 justify-center items-center shrink-0 basis-[15px]">
          <svg className="w-[0.9375rem] h-[0.9375rem] block overflow-hidden leading-[0.9375rem]" data-component="icon" fill="currentColor">
            <use xlinkHref="#kjhvnkw1" />
          </svg>
        </span>
        <span className="block max-w-full grow overflow-hidden whitespace-nowrap text-nowrap">
          {d.label}
        </span>
      </a>
    </li>
  );
}
