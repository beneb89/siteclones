export type MediaTile3Data = {
  description: string;
  description2: string;
  description3: string;
  alt: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="border border-solid border-border flex p-6 rounded-[20px] flex-col justify-between gap-5.5 bg-background">
      <p className="block text-color-027 text-[1.375rem] leading-[1.8125rem]">
        {d.description}
        <span className="inline text-border font-semibold">
          {d.description2}
        </span>
        {d.description3}
      </p>
      {" "}
      <div className="flex items-center gap-2.5">
        <img className="w-auto h-[2.8125rem] block rounded-[50%] shrink-0 overflow-clip object-cover aspect-[auto_45/45] align-middle" data-component="avatar" alt={d.alt} height="45" src={d.imgSrc} width="45" />
        {" "}
        <div className="block">
          <div className="block text-color-027 font-semibold leading-[1.3125rem] uppercase">
            {d.text}
          </div>
          {" "}
          <div className="block text-color-027 text-sm leading-[1.0625rem]">
            {d.text2}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
