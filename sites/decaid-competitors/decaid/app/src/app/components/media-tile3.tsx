export type MediaTile3Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="flex mb-4 ml-2.5 justify-start items-center">
      <img className="w-auto h-7 block max-w-full overflow-clip align-middle max-md:h-5 md:max-lg:h-6" data-component="image" alt="" src="/assets/cloned/images/573c9b29441e.png" />
      <div className="block ml-1.5 text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[1.125rem] max-md:text-[1rem]">
        {d.text}
      </div>
    </div>
  );
}
