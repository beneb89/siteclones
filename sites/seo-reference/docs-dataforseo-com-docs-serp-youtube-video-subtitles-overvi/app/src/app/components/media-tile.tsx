export type MediaTileData = {
  id: string;
  id2: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <ul className="block [list-style-type:none] list-outside" id={d.id}>
      <li className="list-item" id={d.id2}>
        <button className="w-full flex ml-[0.3rem] py-[0.5625rem] px-4 items-center gap-x-2 text-muted-foreground leading-[1.0625rem] text-left cursor-pointer max-md:leading-[1rem] 2xl:py-[0.45rem] 2xl:px-[0.8rem] 2xl:gap-x-[0.4rem] 2xl:leading-[0.9375rem]">
          {d.label}
          <svg className="w-5 h-5 block overflow-hidden 2xl:w-4 2xl:h-4" height="8" viewBox="0 0 4 8" width="4" fill="currentColor">
            <use href="https://docs.dataforseo.com/v3/wp-content/themes/dataforseo/assets/img/icons/sprite.svg#chevron-bottom" />
          </svg>
        </button>
        {"  "}
      </li>
    </ul>
  );
}
