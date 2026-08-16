export type CardLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  title: string;
};
/** A linked card. */
export default function CardLink({ d }: { d: CardLinkData }) {
  return (
    <a className="flex rounded-[10px] flex-col overflow-hidden bg-surface cursor-pointer h-full" data-component="link" href={d.href}>
      <div className="block overflow-hidden aspect-video">
        <picture className="inline">
          <img className="w-full block max-w-full overflow-clip object-cover align-bottom h-full" data-component="image" alt={d.alt} src={d.imgSrc} />
        </picture>
      </div>
      <div className="flex p-5 flex-col flex-1 gap-3 max-md:p-[16.3px] md:max-lg:p-[1.125rem]">
        <span className="border border-solid border-border flex py-2 px-4 rounded-full text-color-001 text-xs leading-[1.0625rem] bg-background max-md:text-[0.6875rem] max-md:leading-4">
          {d.label}
        </span>
        <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
          {d.title}
        </h3>
      </div>
    </a>
  );
}
