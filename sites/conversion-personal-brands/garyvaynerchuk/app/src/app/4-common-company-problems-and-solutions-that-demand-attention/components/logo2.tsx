export type Logo2Data = {
  ariaLabel: string;
  href: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="h-[2.6rem] block cursor-pointer max-md:h-[43.3px]" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noreferrer" target="_blank">
      <img className="w-10.5 h-10.5 block max-w-full overflow-clip aspect-[auto_55/55] align-middle text-clr-1 max-md:w-[2.6875rem] max-md:h-[2.6875rem]" data-component="image" alt="" height="55" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="55" />
    </a>
  );
}
