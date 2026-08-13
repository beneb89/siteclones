export type MediaLinkData = {
  ariaLabel: string;
  href: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink({ d }: { d: MediaLinkData }) {
  return (
    <a className="border border-solid border-border flex min-w-0 py-1 px-2.5 rounded-full items-center gap-1.5 text-xs font-medium leading-4 cursor-pointer pointer-events-none" aria-label={d.ariaLabel} href={d.href}>
      <img className="w-3.5 h-3.5 block min-w-0 max-w-full overflow-clip align-middle pointer-events-none" alt="" src={d.imgSrc} />
      {d.label}
    </a>
  );
}
