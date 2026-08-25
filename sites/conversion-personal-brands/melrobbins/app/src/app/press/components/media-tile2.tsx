export type MediaTile2Data = {
  alt: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  href: string;
  description: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="list-item text-muted">
      <figure className="h-full block relative rounded-[10px] overflow-hidden aspect-[193/290]">
        <img className="w-49 h-[18.4375rem] block max-w-full overflow-clip object-cover align-middle max-md:w-[10.1875rem] max-md:h-61 md:max-lg:w-75.5 md:max-lg:h-113.5" data-component="image" alt={d.alt} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
        {" "}
        <div className="w-49 h-[294.5px] flex absolute top-0 left-0 opacity-0 justify-center items-end bg-clr-6">
          <div className="flex pb-5 px-2 flex-col gap-1">
            <a className="block mb-2 mx-auto underline cursor-pointer" data-component="link" download="" href={d.href}>
              {"\n                          Download\n                        "}
            </a>
            {" "}
            <p className="block text-muted-foreground whitespace-nowrap">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </figure>
      {" "}
    </li>
  );
}
