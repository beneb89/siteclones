export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <li className="flex">
      <div className="block relative mr-4 rounded-xl shrink-0 bg-border h-14 w-14">
        <div className="w-14 h-full flex absolute top-0 left-0 justify-center items-center">
          <img className="block max-w-full overflow-clip aspect-[auto_24/24] align-middle text-clr-0 h-6 w-6" data-component="image" alt={d.alt} height="24" src={d.imgSrc} srcSet={d.srcSet} width="24" />
        </div>
      </div>
      <div className="block">
        <h3 className="block mb-2 text-[1.5rem] font-medium tracking-[-1.2px] max-md:text-[1.3125rem] max-md:leading-[1.3125rem] max-md:tracking-[-1.05px] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.4375rem] md:max-lg:tracking-[-1.15px]" data-component="heading">
          {d.title}
        </h3>
        <div className="block text-balance">
          <div className="block text-clr-9 leading-7">
            <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
              {d.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
