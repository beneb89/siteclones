import type { FeatureGridItemStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureGridItemData = {
  variant: string;
  title: string;
  description: string;
  label: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d, styles }: { d: FeatureGridItemData; styles: FeatureGridItemStyles }) {
  return (
    <div className={cn("w-[35.3125rem] min-h-px block relative float-left max-md:w-75 max-md:[float:initial] md:max-lg:w-[19.6875rem]", styles.className)}>
      <div className={cn("block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center", styles.className2)}>
        <FeatureGridItemSlot1 d={d} />
      </div>
    </div>
  );
}

function FeatureGridItemSlot1({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "meet-youtube-serp-api":
      return (
        <div className="box-content border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border block rounded-md bg-background">
          <div className="box-content block">
            <figure className="box-content inline-block max-w-full align-top">
              {" "}
              <a className="box-content inline-block max-w-full align-top text-primary cursor-pointer" data-component="link" href="/blog/meet-youtube-serp-api-3-ways-to-collect-data-for-competitor-research-on-youtube" target="_self">
                <img className="box-content w-[33.3125rem] h-[15.1875rem] inline max-w-full rounded-tl-[3px] rounded-tr-[3px] overflow-clip aspect-[auto_560/255] align-top max-md:w-67 max-md:h-30.5 md:max-lg:w-[17.6875rem] md:max-lg:h-[8.0625rem]" data-component="image" alt="YouTube API Article" height="255" src="/assets/cloned/images/af81d78a9ec5.png" title="YouTube API Article" width="560" />
              </a>
              {" "}
            </figure>
            {" "}
          </div>
          {" "}
          <div className="box-content h-50 min-h-[7.8125rem] table [table-layout:fixed] max-md:h-[14.5625rem] md:max-lg:h-54.5">
            <div className="box-content h-full table-cell align-top text-left bg-cover">
              <div className="box-content h-full block">
                <div className="box-content h-full block pt-2.5 pb-5 px-2.5 max-md:pt-7.5 max-md:pb-2.5">
                  <div className="box-content h-2.5 block" />
                  {" "}
                  <div className="box-content block">
                    <div className="box-content block">
                      <h3 className="box-content block text-color-001 text-[1.3125rem] font-bold leading-[1.9375rem] md:max-lg:text-base md:max-lg:leading-6.5" data-component="heading">
                        {d.title}
                      </h3>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content h-4 block" />
                  {" "}
                  <div className="box-content block">
                    <div className="box-content block">
                      <p className="box-content block">
                        {d.description}
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content h-5 block" />
                  <a className="box-content h-[2.9375rem] inline-block relative px-7 rounded-[3px] text-background text-[0.8125rem] font-extrabold leading-[2.9375rem] tracking-[1px] uppercase bg-primary cursor-pointer hover:bg-clr-20 hover:border-clr-20 focus:bg-clr-37 focus:border-clr-37" data-component="link" href="/blog/meet-youtube-serp-api-3-ways-to-collect-data-for-competitor-research-on-youtube" target="_blank">
                    {" "}
                    <span className="box-content inline">
                      {d.label}
                    </span>
                    {" "}
                    <span className="box-content inline" />
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
          </div>
        </div>
      );
    case "serp-api-help-center":
      return (
        <div className="box-content border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border block rounded-md bg-background">
          <div className="box-content h-[12.8125rem] min-h-[7.8125rem] table [table-layout:fixed] max-md:h-[12.5625rem] md:max-lg:h-[19.1875rem]">
            <div className="box-content h-full table-cell align-top text-left bg-cover">
              <div className="box-content h-full block">
                <div className="box-content h-full block pt-6 pb-5 px-2.5 max-md:pt-7.5 max-md:pb-2.5">
                  <div className="box-content block">
                    <div className="box-content block">
                      <h3 className="box-content block text-color-001 text-[1.3125rem] font-bold leading-[1.9375rem] md:max-lg:text-base md:max-lg:leading-6.5" data-component="heading">
                        {d.title}
                      </h3>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content block">
                    <div className="box-content block">
                      <p className="box-content block">
                        {d.description}
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content h-3.5 block" />
                  <a className="box-content h-[2.9375rem] inline-block relative px-7 rounded-[3px] text-background text-[0.8125rem] font-extrabold leading-[2.9375rem] tracking-[1px] uppercase bg-primary cursor-pointer hover:bg-clr-20 hover:border-clr-20 focus:bg-clr-37 focus:border-clr-37" data-component="link" href="/help-center/category/serp-api" target="_blank">
                    {" "}
                    <span className="box-content inline">
                      {d.label}
                    </span>
                    {" "}
                    <span className="box-content inline" />
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            <div className="box-content h-full table-cell align-middle text-right bg-cover max-md:hidden">
              <div className="box-content block">
                <div className="box-content block px-5">
                  <div className="box-content block">
                    <figure className="box-content inline-block max-w-full align-top">
                      {" "}
                      <a className="box-content inline-block max-w-full align-top text-primary cursor-pointer" data-component="link" href="/help-center/category/serp-api" target="_self">
                        <img className="box-content w-37.5 h-37.5 inline max-w-full overflow-clip aspect-[auto_150/150] align-top md:max-lg:w-20 md:max-lg:h-20 md:max-lg:max-w-20" data-component="image" alt="SERP API Help Center img" height="150" src="/assets/cloned/images/74526f894c71.webp" title="SERP-API-Help-Center-img" width="150" />
                      </a>
                      {" "}
                    </figure>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
          </div>
        </div>
      );
    case "seo-software-trends-rank-tracking-tools":
      return (
        <div className="box-content h-full border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border block rounded-md bg-background">
          <div className="box-content h-full min-h-[7.8125rem] table [table-layout:fixed]">
            <div className="box-content h-full table-cell align-top text-left bg-cover">
              <div className="box-content h-full block">
                <div className="box-content h-full block pt-6 pb-5 px-2.5 max-md:pt-7.5 max-md:pb-2.5">
                  <div className="box-content block">
                    <div className="box-content block">
                      <h3 className="box-content block text-color-001 text-[1.3125rem] font-bold leading-[1.9375rem] md:max-lg:text-base md:max-lg:leading-6.5" data-component="heading">
                        {d.title}
                      </h3>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content block">
                    <div className="box-content block">
                      <p className="box-content block">
                        {d.description}
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content h-3.5 block" />
                  <a className="box-content h-[2.9375rem] inline-block relative px-7 rounded-[3px] text-background text-[0.8125rem] font-extrabold leading-[2.9375rem] tracking-[1px] uppercase bg-primary cursor-pointer hover:bg-clr-23 hover:border-clr-23 focus:border-primary" data-component="link" href="/whitepapers/rank-tracking-tools" target="_blank">
                    {" "}
                    <span className="box-content inline">
                      {d.label}
                    </span>
                    {" "}
                    <span className="box-content inline" />
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            <div className="box-content h-full table-cell align-middle text-right bg-cover max-md:hidden">
              <div className="box-content block">
                <div className="box-content block px-5">
                  <div className="box-content block">
                    <figure className="box-content inline-block max-w-full align-top">
                      {" "}
                      <a className="box-content inline-block max-w-full align-top text-primary cursor-pointer" data-component="link" href="/whitepapers/rank-tracking-tools" target="_self">
                        <img className="box-content w-37.5 h-37.5 inline max-w-full overflow-clip aspect-[auto_150/150] align-top md:max-lg:w-20 md:max-lg:h-20 md:max-lg:max-w-20" data-component="image" alt="SEO Software Trends img" height="150" src="/assets/cloned/images/338857883b31.webp" title="SEO-Software-Trends-img" width="150" />
                      </a>
                      {" "}
                    </figure>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
