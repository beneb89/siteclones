export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="h-5 border border-solid border-surface flex px-1.5 rounded-xs items-center [font-family:'IBM_Plex_Mono',_SFMono-Regular,_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-2.5 tracking-[1px] uppercase bg-border cursor-pointer hover:bg-surface" data-component="button" href={d.href} rel="external noreferrer" target="_blank">
      {d.label}
    </a>
  );
}
