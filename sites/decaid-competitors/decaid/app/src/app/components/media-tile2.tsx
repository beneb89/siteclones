export type MediaTile2Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="flex mb-4 justify-start items-center">
      <img className="w-auto h-7 block max-w-full overflow-clip align-middle max-md:h-5 md:max-lg:h-6" data-component="image" alt="" src="/assets/cloned/images/c20013000f1e.png" />
      <div className="block ml-1.5 text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[1.25rem] font-medium max-lg:text-[1rem]">
        {d.text}
      </div>
    </div>
  );
}
