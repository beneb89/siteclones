export type MediaTile2Data = {
  imgSrc: string;
  text: string;
  text2: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="w-142.5 block max-w-full mb-12 px-3 shrink-0 max-md:w-[23.4375rem] md:max-lg:w-180 2xl:w-165">
      <div className="h-full border border-solid border-border block p-6.5 rounded-[18px] text-left bg-background">
        <div className="w-14 h-14 border-2 border-solid border-border block mb-3.5 rounded-[50%] overflow-hidden">
          <img className="w-full h-13 inline overflow-clip object-cover aspect-[auto_56/56] align-middle" data-component="image" height="56" src={d.imgSrc} width="56" />
          {" "}
        </div>
        {" "}
        <div className="block mb-4 text-color-027 text-[1.0625rem] leading-[1.625rem]">
          {d.text}
        </div>
        {" "}
        <div className="block [font-family:'League_Spartan',_sans-serif] font-bold uppercase">
          {d.text2}
        </div>
        {" "}
        <div className="block text-color-013 text-sm leading-[1.3125rem]">
          {d.text3}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
