export type Logo3Data = {
  href: string;
  label: string;
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <a className="w-6 h-6 flex text-center cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank" title={d.label}>
      <img className="w-6 h-6 block max-w-6 max-h-6 overflow-clip align-middle" data-component="image" alt={d.alt} src={d.imgSrc} />
    </a>
  );
}
