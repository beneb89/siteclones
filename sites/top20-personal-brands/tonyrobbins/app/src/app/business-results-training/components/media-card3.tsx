export type MediaCard3Data = {
  ariacontrols: string;
  id: string;
  title: string;
  arialabelledby: string;
  id2: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d }: { d: MediaCard3Data }) {
  return (
    <div className="border-b border-solid border-b-surface block">
      <h3 className="flex" data-component="heading">
        <button className="flex py-4 justify-between items-center flex-1 text-2xl font-medium leading-7.5 tracking-[-1.2px] text-left cursor-pointer max-md:text-[1.3125rem] max-md:leading-[1.625rem] max-md:tracking-[-1.05px] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-1.15px]" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" id={d.id} type="button">
          {d.title}
          <svg className="block shrink-0 overflow-hidden align-middle h-4 w-4" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div className="hidden overflow-hidden text-sm leading-[1.375rem] [animation-name:accordion-up] [animation-duration:0.2s] [animation-timing-function:ease-out]" aria-labelledby={d.arialabelledby} id={d.id2} role="region" />
    </div>
  );
}
