export type MediaLink2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink2({ d }: { d: MediaLink2Data }) {
  return (
    <a className="block overflow-hidden bg-surface-2 cursor-pointer 2xl:hidden" data-component="link" download="" href={d.href}>
      {" "}
      <img className="w-full h-55 block max-w-full overflow-clip object-cover align-middle aspect-[3/2] max-md:h-[12.3125rem] md:max-lg:h-[12.4375rem] 2xl:hidden" data-component="image" alt={d.alt} height="800" src={d.imgSrc} width="1200" />
      {" "}
      <div className="flex p-3 justify-between items-center text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        <span className="block 2xl:hidden">
          {d.label}
        </span>
        <span className="block text-primary font-semibold 2xl:hidden">
          ↓
        </span>
      </div>
      {" "}
    </a>
  );
}
