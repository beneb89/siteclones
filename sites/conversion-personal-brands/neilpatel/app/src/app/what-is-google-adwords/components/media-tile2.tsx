export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="flex items-center gap-2">
      <img className="w-10 h-10 block max-w-full rounded-[50%] shrink-0 overflow-clip object-cover aspect-[auto_48/48]" data-component="avatar" alt={d.alt} height="48" src={d.imgSrc} width="48" />
      {" "}
      <div className="flex flex-col">
        <span className="block text-color-001 text-[0.8125rem] font-semibold leading-[1.0625rem]">
          {d.text}
        </span>
        {" "}
        <span className="block text-color-005 text-[0.6875rem] leading-[0.875rem] whitespace-nowrap">
          {d.text2}
        </span>
        {" "}
      </div>
      {" "}
    </div>
  );
}
