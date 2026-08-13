export type ProductCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  description2: string;
};
/** A product card. */
export default function ProductCard({ d }: { d: ProductCardData }) {
  return (
    <a className="border border-solid border-border flex p-6 rounded-[14px] flex-col overflow-hidden cursor-pointer hover:bg-clr-11 hover:border-clr-12" data-component="link" href={d.href}>
      <div className="block relative mb-4 rounded-[10px] overflow-hidden aspect-video w-full">
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-2" data-component="image" alt={d.alt} sizes="(max-width: 768px) 100vw, 50vw" src={d.imgSrc} srcSet={d.srcSet} />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="block flex-1">
          <h3 className="block [font-family:editorialNew,_'editorialNew_Fallback'] text-lg font-medium leading-7" data-component="heading">
            {d.title}
          </h3>
          <p className="mt-2 overflow-hidden text-muted-foreground text-sm leading-5 line-clamp-2">
            {d.description}
          </p>
        </div>
      </div>
      <p className="block mt-4 text-muted-foreground text-xs leading-4">
        {d.description2}
      </p>
    </a>
  );
}
