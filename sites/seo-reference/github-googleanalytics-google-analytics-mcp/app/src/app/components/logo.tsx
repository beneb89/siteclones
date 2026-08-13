export type LogoData = {
  href: string;
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <li className="list-item mr-2 mb-2">
      <a className="inline text-primary cursor-pointer hover:underline" data-component="link" aria-keyshortcuts="Alt+ArrowUp" href={d.href}>
        <img className="w-8 h-8 inline-block max-w-full rounded-[50%] overflow-hidden aspect-[auto_32/32] align-middle leading-3.5 shadow-[var(--color-007)_0px_0px_0px_1px]" data-component="avatar" alt={d.alt} height="32" src={d.imgSrc} width="32" />
      </a>
    </li>
  );
}
