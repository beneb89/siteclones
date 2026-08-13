export type MediaLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink({ d }: { d: MediaLinkData }) {
  return (
    <a className="h-6 flex py-1 px-2.5 rounded-full items-center gap-1.5 text-muted-foreground text-xs leading-4 bg-surface-3 cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="button" href={d.href}>
      <img className="block max-w-full rounded-sm overflow-clip align-middle w-3.5 h-3.5" data-component="image" alt={d.alt} src={d.imgSrc} />
      {d.label}
    </a>
  );
}
