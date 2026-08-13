import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  title: string;
  href2: string;
  label: string;
  href3: string;
  alt: string;
  imgSrc: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="box-content block relative pt-10 max-lg:pt-2.5">
      <div className="box-content block z-1000 py-[0.1875rem] bg-surface [backdrop-filter:blur(12px)]">
        <div className="box-content block relative max-w-190 mx-65 text-left max-md:px-[1.175rem] max-lg:mx-0 md:max-lg:px-[2.4rem] 2xl:mx-145">
          <h2 className="box-content block relative my-1.5 text-[1.3125rem] font-medium leading-[1.6875rem] max-lg:text-center" data-component="heading">
            <a className="box-content inline cursor-pointer" data-component="link" href={d.href} rel="nofollow" target="_blank">
              {d.title}
            </a>
            {" "}
          </h2>
          {" "}
          <span className="box-content block mt-1.5 mb-3 max-lg:text-[0.9375rem] max-lg:leading-4.5 max-lg:text-center">
            {" "}
            <a className="box-content border-b-2 border-solid border-b-primary inline pb-0.5 text-primary text-[1.1875rem] font-medium leading-[1.4375rem] text-center cursor-pointer max-lg:text-base max-lg:leading-[1.1875rem] max-lg:[font-weight:inherit] max-lg:[text-align:inherit]" data-component="link" href={d.href2} rel="sponsored" target="_blank">
              {"\n\t\n\t\n\t Made With \n\t"}
              <span className="box-content inline">
                {d.label}
              </span>
              {" "}
            </a>
            {"  "}
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="box-content block max-w-225 mb-5 mx-47.5 max-lg:mx-0 2xl:max-w-262.5 2xl:mx-[27.1875rem]">
        <a className="box-content inline text-primary cursor-pointer" data-component="link" href={d.href3} rel="nofollow" target="_blank">
          {" "}
          <img className={cn("box-content w-225 inline max-w-225 mt-[0.3125rem] mb-2.5 rounded-[3px] overflow-clip shadow-[var(--clr-5)_0px_0px_0px_4px] max-md:w-84.5 md:max-lg:w-[43.1875rem] 2xl:w-262.5 2xl:max-w-262.5", styles.className)} data-component="image" alt={d.alt} src={d.imgSrc} />
          {" "}
        </a>
        <br className="box-content inline clear-both" />
        {" "}
      </div>
      {" "}
      <div className="box-content w-288 block max-w-400 mx-16 max-md:w-[337.5px] max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
        <p className="box-content block max-w-190 my-5 mx-49 font-light leading-[1.6875rem] text-left max-lg:mx-0 2xl:mx-105" />
        <p className="box-content block max-w-190 my-5 mx-49 font-light leading-[1.6875rem] text-left max-lg:mx-0 2xl:mx-105">
          {d.description}
        </p>
        {" "}
        <p className="box-content block max-w-190 my-5 mx-49 font-light leading-[1.6875rem] text-left max-lg:mx-0 2xl:mx-105" />
        {" "}
      </div>
      {" "}
      <br className="box-content inline clear-both" />
      {" "}
    </div>
  );
}
