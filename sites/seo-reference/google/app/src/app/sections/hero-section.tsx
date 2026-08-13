import ListRow2 from "../components/list-row2";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import { listRow2Data as listRow2DataContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ listRow2Data = listRow2DataContent } = {}) {
  return (
    <div className="grid mb-4 gap-x-4 [grid-template-areas:'breadcrumbs_ratings'] grid-cols-[1fr_auto] max-md:block max-md:mb-3" data-component="nav" role="navigation">
      <ul className="flex flex-wrap items-center flex-1 [grid-column-start:breadcrumbs] [grid-column-end:breadcrumbs] [grid-row-start:breadcrumbs] [grid-row-end:breadcrumbs] text-[0.8125rem] whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:inline-flex" aria-label="Breadcrumb">
        <li className="flex items-center">
          <a className="block text-muted-foreground [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="/">
            {" Home "}
          </a>
          {" "}
        </li>
        {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
      </ul>
      {" "}
      <devsite-thumb-rating class="block [grid-column-start:ratings] [grid-column-end:ratings] [grid-row-start:ratings] [grid-row-end:ratings]">
        <div className="grid rounded-sm gap-x-2 [grid-template-areas:'label_thumbs'] grid-cols-[auto_1fr] max-md:mt-4 max-md:mb-2" aria-labelledby="devsite-thumb-label-header" role="form">
          <div className="block [grid-column-start:label] [grid-column-end:label] [grid-row-start:label] [grid-row-end:label] text-[0.8125rem]" id="devsite-thumb-label-header">
            Was this helpful?
          </div>
          <div className="block -my-[0.1875rem] [grid-column-start:thumbs] [grid-column-end:thumbs] [grid-row-start:thumbs] [grid-row-end:thumbs]">
            <button className="w-7.5 h-7.5 inline-flex min-w-7.5 rounded-[50%] justify-center items-center overflow-hidden align-middle text-primary [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 text-center whitespace-nowrap text-nowrap [background-position:0px_50%] cursor-pointer hover:bg-clr-11 hover:[background-position:0%_0%] focus:bg-surface-2 focus:[background-position:0%_0%]" data-component="button" aria-label="Helpful">
              <Icon4 />
            </button>
            <button className="w-7.5 h-7.5 inline-flex min-w-7.5 rounded-[50%] justify-center items-center overflow-hidden align-middle text-primary [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 text-center whitespace-nowrap text-nowrap [background-position:0px_50%] cursor-pointer hover:bg-surface-2 hover:[background-position:0%_0%] focus:bg-surface-2 focus:[background-position:0%_0%]" data-component="button" aria-label="Not helpful">
              <Icon5 />
            </button>
          </div>
        </div>
      </devsite-thumb-rating>
      {" "}
    </div>
  );
}
