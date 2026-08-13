export type LogoData = {
  text: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <li className="flex items-center gap-2 text-muted-foreground text-sm leading-[1.1875rem]">
      <svg className="w-auto h-3.5 block shrink-0 overflow-hidden text-accent" data-component="icon" aria-hidden="true" fill="none" height="14" stroke="currentColor" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {"!--[-->"}
        {"!---->"}
        <path d="M20 6 9 17l-5-5">
          {"!---->"}
        </path>
        {"!---->"}
        {"!--]-->"}
        {"!--[-->"}
        {"!--[-->"}
        {"!--]-->"}
        {"!--]-->"}
      </svg>
      {d.text}
    </li>
  );
}
