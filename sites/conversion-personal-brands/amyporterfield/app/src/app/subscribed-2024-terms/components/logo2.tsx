export type Logo2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="box-content h-45.5 block cursor-pointer max-md:h-36" data-component="link" href={d.href} rel="external" target="_blank">
      <img className="box-content w-full h-45.5 inline max-h-full overflow-clip object-cover max-md:h-36" data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
    </a>
  );
}
