export type MediaTileData = {
  imgSrc: string;
  dateTime: string;
  date: string;
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="w-[26.4375rem] h-[25.3125rem] min-h-px flex float-left px-[1.0625rem] max-md:w-[22.4375rem] max-md:h-[426.3px] md:max-lg:w-94 md:max-lg:h-[410.3px] 2xl:w-[423.7px] 2xl:h-[25.3375rem]">
      <article className="box-content block relative max-w-105 mb-10.5 pb-12.5 rounded-xl bg-surface-2">
        <div className="box-content h-[12.8125rem] min-h-5.5 block rounded-tl-xl rounded-tr-xl overflow-hidden max-md:h-[171.3px] md:max-lg:h-[180.3px] 2xl:h-[12.8375rem]">
          <img className="box-content w-[24.3125rem] h-[12.8125rem] block relative overflow-clip aspect-[auto_351/185] max-md:w-[20.3125rem] max-md:h-[10.6875rem] md:max-lg:w-85.5 md:max-lg:h-45 2xl:w-97.5" data-component="image" alt="" height="185" src={d.imgSrc} width="351" />
          {" "}
        </div>
        {" "}
        <div className="box-content block px-7.5 max-md:pb-[1.5625rem]">
          <div className="box-content block relative mt-[1.5625rem] mb-[0.3125rem] bg-surface-2">
            <time className="box-content block text-color-001 text-xs leading-4.5" dateTime={d.dateTime}>
              {d.date}
            </time>
            {" "}
            <span className="box-content hidden float-right mr-3.5 whitespace-nowrap text-nowrap">
              {"\n                                        0"}
            </span>
            {" "}
          </div>
          {" "}
          <a className="box-content block mt-0.5 text-color-001 text-xl font-medium leading-7.5 cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-[24.3125rem] after:h-[22.6875rem] after:rounded-tl-xl max-md:after:w-[20.3125rem] max-md:after:h-[384.3px] md:max-lg:after:w-85.5 md:max-lg:after:h-[368.3px] 2xl:after:w-[389.7px] 2xl:after:h-[22.7125rem]" data-component="link" href={d.href}>
            {d.label}
          </a>
          {" "}
          <svg className="box-content w-auto h-[0.9375rem] block absolute right-7.5 bottom-6.5 overflow-hidden text-primary" data-component="icon" fill="none" height="15" viewBox="0 0 13 12" width="16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.03033 0.469727L12.5607 6.00006L7.03033 11.5304L5.96967 10.4697L9.68934 6.75006H0V5.25006H9.68934L5.96967 1.53039L7.03033 0.469727Z" fill="#6F01F5" />
          </svg>
          {" "}
        </div>
        {" "}
      </article>
      {" "}
    </li>
  );
}
