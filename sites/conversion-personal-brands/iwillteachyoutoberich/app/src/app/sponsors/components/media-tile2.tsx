export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  href: string;
  label: string;
  description: string;
  target?: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="border-b border-solid border-b-color-002 block py-[13.3px] max-lg:hidden 2xl:py-5">
      <div className="h-full min-h-full flex relative justify-between items-start overflow-hidden">
        <div className="w-full h-full min-h-[143.1px] flex relative max-w-[199.7px] rounded-[6.7px] shrink-0 order-[1] overflow-hidden shadow-[var(--color-002)_0px_0px_0px_1px_inset] 2xl:min-h-[13.4375rem] 2xl:max-w-75 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[8.9375rem] before:pt-[8.7375rem] max-lg:before:pt-[70%] max-lg:before:h-auto 2xl:before:h-[13.4375rem] 2xl:before:pt-52.5">
          <div className="w-0 block">
            <img className="w-50 h-[8.9375rem] block absolute max-w-full overflow-clip object-cover pointer-events-none 2xl:w-75 2xl:h-[13.4375rem]" data-component="image" alt={d.alt} src={d.imgSrc} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-[19.1375rem] mr-[33.3px] 2xl:max-w-115 2xl:mr-12.5">
          <div className="block font-bold leading-[1.0625rem] 2xl:leading-6">
            <a className="inline cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[37.5rem] after:h-[8.9375rem] max-lg:after:w-auto max-lg:after:h-auto 2xl:after:w-225 2xl:after:h-[13.4375rem]" data-component="link" href={d.href} target={d.target}>
              {d.label}
            </a>
            {" "}
          </div>
          {" "}
          <div className="block opacity-50 mt-[6.7px] leading-[1.25rem] 2xl:mt-2.5 2xl:text-lg 2xl:leading-[1.5625rem]">
            <p className="block">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
