export type MediaTile4Data = {
  label: string;
  label2: string;
};
/** A media tile. */
export default function MediaTile4({ d }: { d: MediaTile4Data }) {
  return (
    <div className="border-t border-solid border-t-color-047 block">
      <button className="flex py-3 justify-between items-center text-left cursor-default w-full" data-component="button" type="button">
        <div className="flex items-baseline gap-2">
          <span className="block text-color-001 [font-family:Soehne,_system-ui,_sans-serif] font-bold leading-[1.4375rem] max-md:leading-[1.3125rem]">
            {d.label}
          </span>
          <span className="block text-lg italic leading-[1.3125rem] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.25rem]">
            {d.label2}
          </span>
        </div>
        <svg className="w-5 h-5 block shrink-0 overflow-hidden align-middle text-color-043" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
