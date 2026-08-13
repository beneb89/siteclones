export type MediaLinkData = {
  href: string;
  description: string;
  description2: string;
};
/** A linked media tile. */
export default function MediaLink({ d }: { d: MediaLinkData }) {
  return (
    <a className="h-19.5 border border-solid border-border flex p-4 rounded-[14px] justify-between items-center bg-color-004 cursor-pointer hover:bg-color-008 hover:border-clr-29" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <div className="w-207.5 block min-w-0 flex-1 max-md:w-[31.4375rem] md:max-lg:w-167.5">
        <p className="block overflow-hidden font-medium whitespace-nowrap text-nowrap">
          {d.description}
        </p>
        <p className="block text-muted-foreground text-sm leading-5">
          {d.description2}
        </p>
      </div>
      <svg className="block ml-4 shrink-0 overflow-hidden align-middle text-muted-foreground w-4 h-4 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    </a>
  );
}
