import type { CardGridItemStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type CardGridItemData = {
  variant: string;
  title: string;
  description: string;
  label: string;
};
/** card grid item component. */
export default function CardGridItem({ d, styles }: { d: CardGridItemData; styles: CardGridItemStyles }) {
  return (
    <div className={cn("w-[35.3125rem] min-h-px block relative float-left max-md:w-75 max-md:[float:initial] md:max-lg:w-157.5", styles.className)}>
      <div className={cn("block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center", styles.className2)}>
        <CardGridItemSlot1 d={d} />
      </div>
    </div>
  );
}

function CardGridItemSlot1({ d }: { d: CardGridItemData }) {
  switch (d.variant) {
    case "rank-tracking-app-dev-guide":
      return (
        <div className="box-content border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border block rounded-md bg-background">
          <div className="box-content block mb-2.5 py-5">
            <figure className="box-content inline-block max-w-full align-top">
              {" "}
              <a className="box-content inline-block max-w-full align-top text-primary cursor-pointer" data-component="link" href="/solutions/rank-tracking-app" target="_self">
                <img className="box-content w-[23.4375rem] h-55 inline max-w-full rounded-tl-[3px] rounded-tr-[3px] overflow-clip aspect-[auto_375/220] align-top max-md:w-67 max-md:h-[9.8125rem]" data-component="image" alt="general-img-Rank-Tracking-Dashboard" height="220" src="/assets/cloned/images/f75dd1476ea1.webp" title="general-img-Rank-Tracking-Dashboard" width="375" />
              </a>
              {" "}
            </figure>
            {" "}
          </div>
          {" "}
          <div className="box-content w-full h-44 min-h-[7.8125rem] table [table-layout:fixed] max-md:h-58.5 md:max-lg:h-37">
            <div className="box-content h-full table-cell align-top text-left bg-cover">
              <div className="box-content h-full block">
                <div className="box-content h-full block pt-4 pb-5 px-[0.9375rem] max-md:pt-7.5 max-md:pb-2.5 max-md:px-2.5">
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
                  <div className="box-content h-2 block" />
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
                  <div className="box-content h-2 block" />
                  <a className="box-content h-[2.9375rem] inline-block relative px-7 rounded-[3px] text-background text-[0.8125rem] font-extrabold leading-[2.9375rem] tracking-[1px] uppercase bg-primary cursor-pointer hover:bg-clr-16 hover:border-clr-16 focus:bg-clr-31 focus:border-clr-31" data-component="link" href="/solutions/rank-tracking-app" target="_blank">
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
          <div className="box-content w-full h-45 min-h-[7.8125rem] table [table-layout:fixed] md:max-lg:h-[10.9375rem]">
            <div className="box-content h-full table-cell align-top text-left bg-cover">
              <div className="box-content h-full block">
                <div className="box-content h-full block py-5 px-[0.9375rem] max-md:pt-7.5 max-md:pb-2.5 max-md:px-2.5">
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
                  <div className="box-content h-2 block" />
                  {" "}
                  <div className="box-content block -mr-22.5 max-md:mr-0">
                    <div className="box-content block">
                      <p className="box-content block">
                        {d.description}
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content h-2 block" />
                  <a className="box-content h-[2.9375rem] inline-block relative px-7 rounded-[3px] text-background text-[0.8125rem] font-extrabold leading-[2.9375rem] tracking-[1px] uppercase bg-primary cursor-pointer hover:bg-clr-16 hover:border-clr-16 focus:bg-clr-31 focus:border-clr-31" data-component="link" href="/help-center/category/serp-api" target="_blank">
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
                        <img className="box-content w-37.5 h-37.5 inline max-w-full rounded-md overflow-clip aspect-[auto_150/150] align-top md:max-lg:w-20 md:max-lg:h-20 md:max-lg:max-w-20" data-component="image" alt="SERP API Help Center img" height="150" src="/assets/cloned/images/74526f894c71.webp" title="SERP-API-Help-Center-img" width="150" />
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
    case "how-dataforseo-ensures-api-reliability-and":
      return (
        <div className="box-content h-full border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border block rounded-md bg-background">
          <div className="box-content h-full min-h-[7.8125rem] table [table-layout:fixed]">
            <div className="box-content h-full table-cell align-top text-left bg-cover">
              <div className="box-content h-full block">
                <div className="box-content h-full block py-5 px-[0.9375rem] max-md:pt-7.5 max-md:pb-2.5 max-md:px-2.5">
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
                  <div className="box-content h-2 block" />
                  {" "}
                  <div className="box-content block -mr-22.5 max-md:mr-0">
                    <div className="box-content block">
                      <p className="box-content block">
                        {d.description}
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="box-content h-2 block" />
                  <a className="box-content h-[2.9375rem] inline-block relative px-7 rounded-[3px] text-background text-[0.8125rem] font-extrabold leading-[2.9375rem] tracking-[1px] uppercase bg-primary cursor-pointer hover:bg-clr-16 hover:border-clr-16 focus:bg-clr-31 focus:border-clr-31" data-component="link" href="/blog/seo-api-reliability-and-uptime" target="_blank">
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
                      <a className="box-content inline-block max-w-full align-top text-primary cursor-pointer" data-component="link" href="/blog/seo-api-reliability-and-uptime" target="_self">
                        <img className="box-content w-37.5 h-37.5 inline max-w-full rounded-md overflow-clip aspect-[auto_150/150] align-top md:max-lg:w-20 md:max-lg:h-20 md:max-lg:max-w-20" data-component="image" alt="dataforseo api uptime and reliability 1" height="150" sizes="(max-width: 150px) 100vw, 150px" src="/assets/cloned/images/fdbcddeb451d.png" srcSet="/assets/cloned/images/fdbcddeb451d.png 150w, /assets/cloned/images/775aa29935b3.png 550w" title="dataforseo-api-uptime-and-reliability" width="150" />
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
