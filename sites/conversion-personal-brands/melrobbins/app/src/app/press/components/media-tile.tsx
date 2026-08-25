export type MediaTileData = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="list-item py-[5.3px] text-muted 2xl:py-1.5">
      <div className="block">
        <label className="flex items-center gap-2 cursor-pointer">
          {" "}
          <span className="border border-solid border-border block relative rounded-md shrink-0 aspect-square w-6 h-6 max-md:w-5 max-md:h-5">
            {"  "}
            <span className="flex absolute top-[0.6875rem] left-[0.6875rem] justify-center items-center text-foreground transform-[matrix(1,0,0,1,-12,-12)] aspect-square w-6 h-6 max-md:w-5 max-md:h-5">
              {" "}
              <svg className="block opacity-0 shrink-0 overflow-hidden align-middle w-3 h-3 max-md:w-2 max-md:h-2" aria-hidden="true" fill="currentColor">
                <use xlinkHref="#icon-checkmark" />
              </svg>
              {" "}
            </span>
            {" "}
          </span>
          {" "}
          <span className="block text-[0.9375rem] leading-[1.1875rem] transform-[matrix(1,0,0,1,0,0.8)] 2xl:leading-[1.25rem]">
            {d.text}
            <span className="inline">
              {d.text2}
            </span>
            {" "}
          </span>
          {" "}
        </label>
        {" "}
      </div>
      {" "}
    </li>
  );
}
