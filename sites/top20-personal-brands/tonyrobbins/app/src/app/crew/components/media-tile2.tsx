export type MediaTile2Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="flex my-2 pl-[0.4375rem] gap-4 text-[1.1875rem] leading-[1.75rem] max-md:pl-1.5 max-md:leading-6 max-md:[font-size:inherit] md:max-lg:pl-[0.4rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:pl-[7.5px] 2xl:text-xl 2xl:leading-7.5">
      <span className="block mt-0.5 shrink-0 text-foreground">
        <svg className="w-auto h-6.5 block overflow-hidden align-middle" data-component="icon" fill="none" height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8328 16.4355L20.7912 6.47705L22.3232 8.00911L10.8328 19.4996L3.93848 12.6053L5.47055 11.0733L10.8328 16.4355Z" />
        </svg>
      </span>
      <span className="block">
        {d.text}
      </span>
    </li>
  );
}
