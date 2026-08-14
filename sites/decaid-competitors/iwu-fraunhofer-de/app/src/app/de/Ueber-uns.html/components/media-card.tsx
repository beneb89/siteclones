import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaCardData = {
  srcSet: string;
  srcSet2: string;
  srcSet3: string;
  srcSet4: string;
  srcSet5: string;
  imgSrc: string;
  title: string;
  description: string;
  href: string;
  label: string;
  label2: string;
  href2: string;
  label3: string;
  label4: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="block">
      <div className="border-t border-solid border-t-border border-r border-r-border border-l border-l-border block">
        <div className="inline-block align-top">
          {" "}
          <section className="block">
            <div className="block">
              <div className="block pb-[1.5625rem] 2xl:pb-7.5">
                <article className="block">
                  <div className="block">
                    <div className="inline-block mt-[1.5625rem] align-top 2xl:mt-7.5">
                      {" "}
                      <figure className="block relative px-[1.5625rem] overflow-hidden leading-0 2xl:px-7.5">
                        <picture className="inline">
                          {"  "}
                          <source className="inline" media="(min-width: 2560px)" srcSet={d.srcSet} />
                          {" "}
                          <source className="inline" media="(min-width: 1440px)" srcSet={d.srcSet2} />
                          {" "}
                          <source className="inline" media="(min-width: 769px)" srcSet={d.srcSet3} />
                          {" "}
                          <source className="inline" media="(min-width: 480px)" srcSet={d.srcSet4} />
                          {" "}
                          <source className="inline" media="(min-width: 320px)" srcSet={d.srcSet5} />
                          {"  "}
                          <img className={cn("w-[14.3125rem] inline max-w-full overflow-clip max-md:w-[17.0625rem] md:max-lg:w-160 2xl:w-[20.1875rem]", styles.className)} data-component="image" src={d.imgSrc} />
                          {" "}
                        </picture>
                        {" "}
                        <figcaption className="block pt-3 2xl:pt-[0.9rem]">
                          <div className="block text-xs leading-[0.9375rem] tracking-[0.3px] 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]" />
                        </figcaption>
                        {" "}
                      </figure>
                    </div>
                    {" "}
                    <div className="inline-block mt-[1.5625rem] align-top 2xl:mt-7.5">
                      {" "}
                      <div className="block px-[1.5625rem] text-sm leading-5.5 2xl:px-7.5 2xl:text-[1.0625rem] 2xl:leading-[1.625rem]">
                        <h4 className="block mt-[0.5625rem] mb-[4.5px] text-primary text-[1.125rem] [word-break:break-word] [overflow-wrap:break-word] 2xl:mt-[0.675rem] 2xl:mb-[0.3375rem] 2xl:text-[1.375rem]" data-component="heading">
                          {d.title}
                        </h4>
                        {" "}
                        <p className="block">
                          {d.description}
                        </p>
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </div>
        {" "}
        <div className="border-b border-solid border-b-border inline-block -mb-px align-top max-lg:-ml-px">
          {" "}
          <div className="w-1/4 block max-md:w-full md:max-lg:w-1/2" />
          {" "}
          <aside className="block">
            <div className="block">
              <div className="block">
                <div className="h-64 border border-solid border-border inline-block relative align-top bg-color-002 2xl:h-[19.2rem]">
                  {" "}
                  <div className="h-full block relative overflow-hidden">
                    <div className="h-full block relative p-[1.5625rem] text-background [word-break:break-word] [overflow-wrap:break-word] bg-color-002 2xl:p-7.5">
                      <div className="block relative">
                        <h3 className="block mb-[0.525rem] text-2xl leading-7 tracking-[0.6px] 2xl:mb-2.5 2xl:text-[1.8125rem] 2xl:leading-[2.125rem] 2xl:tracking-[0.72px]" data-component="heading">
                          Projekte
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <div className={cn("w-[275.5px] block absolute bottom-0 left-px pt-[0.9375rem] pb-[1.5625rem] px-[1.5625rem] bg-color-002 max-md:w-79.5 max-md:mr-px md:max-lg:w-88.5 2xl:w-[379.5px] 2xl:pt-4.5 2xl:pb-7.5 2xl:px-7.5", styles.className2)}>
                        <ul className="block -mt-[0.1875rem] [list-style-type:none] list-outside 2xl:-mt-[0.225rem]">
                          <li className="list-item relative pt-[0.3125rem] pl-[0.9375rem] align-top text-[0.875rem] 2xl:pt-1.5 2xl:pl-4.5 2xl:text-[1.0625rem] before:content-[''] before:inline-block before:w-[0.9375rem] before:h-3 before:-ml-[0.9375rem] before:text-background before:text-xs before:leading-3 2xl:before:w-4.5 2xl:before:h-[0.9rem] 2xl:before:-ml-4.5 2xl:before:text-sm 2xl:before:leading-[0.875rem]">
                            <a className="inline text-[0.75rem] font-normal tracking-[0.3px] underline cursor-pointer 2xl:text-[0.875rem] 2xl:tracking-[0.36px]" data-component="link" href={d.href} title={d.label}>
                              {d.label2}
                            </a>
                          </li>
                          <li className="list-item relative pt-[0.3125rem] pl-[0.9375rem] align-top text-[0.875rem] 2xl:pt-1.5 2xl:pl-4.5 2xl:text-[1.0625rem] before:content-[''] before:inline-block before:w-[0.9375rem] before:h-3 before:-ml-[0.9375rem] before:text-background before:text-xs before:leading-3 2xl:before:w-4.5 2xl:before:h-[0.9rem] 2xl:before:-ml-4.5 2xl:before:text-sm 2xl:before:leading-[0.875rem]">
                            <a className="inline text-[0.75rem] font-normal tracking-[0.3px] underline cursor-pointer 2xl:text-[0.875rem] 2xl:tracking-[0.36px]" data-component="link" href={d.href2} title={d.label3}>
                              {d.label4}
                            </a>
                          </li>
                        </ul>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </aside>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
