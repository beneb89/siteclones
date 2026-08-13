export type MediaCard2Data = {
  href: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d }: { d: MediaCard2Data }) {
  return (
    <li className="list-item w-full">
      <a className="flex py-1 justify-start items-center gap-6 cursor-pointer w-full max-md:justify-center" data-component="link" href={d.href}>
        <h3 className="block text-[3.625rem] font-medium leading-[3.25rem] tracking-[-2.88px] max-md:text-[2.5rem] max-md:leading-[2.25rem] max-md:tracking-[-1.97px] md:max-lg:text-[2.9375rem] md:max-lg:leading-[2.6875rem] md:max-lg:tracking-[-2.37px] 2xl:text-[4.375rem] 2xl:leading-[3.9375rem] 2xl:tracking-[-3.52px]" data-component="heading">
          {d.title}
        </h3>
        <div className="h-12 flex opacity-0 py-3 px-6 rounded-full items-center gap-1 font-medium bg-border max-md:hidden">
          <span className="block">
            Explore
          </span>
          <svg className="block overflow-hidden align-middle h-5 w-5" data-component="icon" viewBox="0 0 20 20" fill="currentColor">
            <title>
              {"Carat"}
            </title>
            <path d="M10.9724 10.0006L6.84766 5.87577L8.02616 4.69727L13.3295 10.0006L8.02616 15.3038L6.84766 14.1253L10.9724 10.0006Z" />
          </svg>
        </div>
      </a>
    </li>
  );
}
