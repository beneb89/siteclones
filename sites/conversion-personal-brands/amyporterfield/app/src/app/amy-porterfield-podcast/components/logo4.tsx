export type Logo4Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  kind?: string;
  kind2?: string;
};
/** A logo. */
export default function Logo4({ d }: { d: Logo4Data }) {
  return (
    <a className="box-content h-71 block cursor-pointer max-md:h-[10.5625rem]" href={d.href} rel="external" target="_blank" data-component={d.kind}>
      <img className="box-content w-full h-71 inline max-h-full overflow-clip object-cover max-md:h-[10.5625rem]" alt={d.alt} src={d.imgSrc} title={d.label} data-component={d.kind2} />
    </a>
  );
}
