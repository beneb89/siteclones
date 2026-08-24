export type Logo3Data = {
  href: string;
  srcSet: string;
  alt: string;
  imgSrc: string;
  href2: string;
  srcSet2: string;
  alt2: string;
  imgSrc2: string;
};
/** A logo. */
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <div className="w-63 flex flex-col gap-1.5">
      <a className="w-63 h-[8.8625rem] block relative rounded-sm overflow-hidden aspect-[1.77778/1] cursor-pointer" data-component="link" href={d.href}>
        <picture className="w-63 h-35.5 block">
          <source className="inline" srcSet={d.srcSet} type="image/webp" />
          <img className="w-63 h-35.5 block max-w-full overflow-clip align-middle" data-component="image" alt={d.alt} height="100%" src={d.imgSrc} width="100%" />
        </picture>
      </a>
      <a className="w-63 h-[8.8625rem] block relative rounded-sm overflow-hidden aspect-[1.77778/1] cursor-pointer" data-component="link" href={d.href2}>
        <picture className="w-63 h-35.5 block">
          <source className="inline" srcSet={d.srcSet2} type="image/webp" />
          <img className="w-63 h-35.5 block max-w-full overflow-clip align-middle" data-component="image" alt={d.alt2} height="100%" src={d.imgSrc2} width="100%" />
        </picture>
      </a>
    </div>
  );
}
