import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import FeatureCard2, { type FeatureCard2Data } from "../components/feature-card2";
import { FeatureCard2_styles } from "../_styles";
const FeatureCard2_data: FeatureCard2Data[] = [
    { href: "/pricing/dataforseo-labs", icon: <>
            <path d="M14 2V8C13.9998 8.33548 14.0841 8.66561 14.245 8.96L19.755 19.04C19.9216 19.3446 20.0061 19.6874 20.0001 20.0345C19.9941 20.3817 19.8979 20.7213 19.7208 21.02C19.5437 21.3187 19.2919 21.5661 18.9902 21.7379C18.6885 21.9098 18.3472 22.0001 18 22H5.99997C5.65275 22.0001 5.31149 21.9098 5.00976 21.7379C4.70804 21.5661 4.45625 21.3187 4.27916 21.02C4.10208 20.7213 4.0058 20.3817 3.99981 20.0345C3.99382 19.6874 4.07831 19.3446 4.24497 19.04L9.75497 8.96C9.91587 8.66561 10.0001 8.33548 9.99997 8V2" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.45312 15H17.5471" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.5 2H15.5" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>, title: "DataForSEO Labs API", description: "SEO data for keyword research and market analysis." },
    { href: "/pricing/backlinks/backlinks", icon: <>
            <path d="M9 17H7C5.67392 17 4.40215 16.4732 3.46447 15.5355C2.52678 14.5979 2 13.3261 2 12C2 10.6739 2.52678 9.40215 3.46447 8.46447C4.40215 7.52678 5.67392 7 7 7H9" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 7H17C18.3261 7 19.5979 7.52678 20.5355 8.46447C21.4732 9.40215 22 10.6739 22 12C22 13.3261 21.4732 14.5979 20.5355 15.5355C19.5979 16.4732 18.3261 17 17 17H15" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>, title: "Backlinks API", description: "\n\tFetch accurate backlink and relevant domains data from our up-to-date index\n" },
    { href: "/pricing/business-data", icon: <>
            <path d="M2 7L6.41 2.59C6.59606 2.40283 6.81732 2.25434 7.06103 2.15308C7.30474 2.05182 7.56609 1.99979 7.83 2H16.17C16.4339 1.99979 16.6953 2.05182 16.939 2.15308C17.1827 2.25434 17.4039 2.40283 17.59 2.59L22 7" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 22V18C15 17.4696 14.7893 16.9609 14.4142 16.5858C14.0391 16.2107 13.5304 16 13 16H11C10.4696 16 9.96086 16.2107 9.58579 16.5858C9.21071 16.9609 9 17.4696 9 18V22" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 7H22" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 7V10C22 10.5304 21.7893 11.0391 21.4142 11.4142C21.0391 11.7893 20.5304 12 20 12C19.4157 11.9678 18.8577 11.7467 18.41 11.37C18.2907 11.2838 18.1472 11.2374 18 11.2374C17.8528 11.2374 17.7093 11.2838 17.59 11.37C17.1423 11.7467 16.5843 11.9678 16 12C15.4157 11.9678 14.8577 11.7467 14.41 11.37C14.2907 11.2838 14.1472 11.2374 14 11.2374C13.8528 11.2374 13.7093 11.2838 13.59 11.37C13.1423 11.7467 12.5843 11.9678 12 12C11.4157 11.9678 10.8577 11.7467 10.41 11.37C10.2907 11.2838 10.1472 11.2374 10 11.2374C9.85279 11.2374 9.70932 11.2838 9.59 11.37C9.14227 11.7467 8.58426 11.9678 8 12C7.41574 11.9678 6.85773 11.7467 6.41 11.37C6.29068 11.2838 6.14721 11.2374 6 11.2374C5.85279 11.2374 5.70932 11.2838 5.59 11.37C5.14227 11.7467 4.58426 11.9678 4 12C3.46957 12 2.96086 11.7893 2.58579 11.4142C2.21071 11.0391 2 10.5304 2 10V7" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>, title: "Business Data API", description: "\n\tCollect reviews, business listings, and social media data.\n" },
    { href: "/pricing/domain-analytics-api", icon: <>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12H22" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="#B2DD4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>, title: "Domain Analytics API", description: "\n\tAnalyze technologies and Whois records of any website\n" }
];
/** Feature Grid section. */
export default function FeatureGridSection2({ features = FeatureCard2_data } = {}) {
  return (
    <section className="block py-20 bg-color-013 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-md:py-12" style={{ backgroundImage: "radial-gradient(circle at 10% 80%, var(--clr-8) 0%, var(--clr-9) 50%), radial-gradient(circle at 95% 50%, var(--clr-10) 0%, var(--clr-9) 45%)" }}>
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="flex mb-10 flex-col gap-8 text-color-003">
          <h2 className="block text-[2.125rem] font-bold leading-[2.3125rem] max-md:text-2xl max-md:leading-[1.625rem]" data-component="heading">
            {"Connect to DataForSEO "}
            <span className="block">
              APIs with MCP server
            </span>
          </h2>
          {" "}
        </div>
        {" "}
        <div className="w-full grid gap-3 grid-cols-12 max-md:grid-cols-1 md:max-lg:grid-cols-4">
          <a className="border border-solid border-border flex p-5 rounded-xl flex-col gap-3 col-start-1 col-end-4 row-start-1 row-end-3 text-background bg-border cursor-pointer max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-lg:[grid-row-start:initial] max-lg:[grid-row-end:initial] md:max-lg:col-end-3 hover:bg-clr-24 hover:border-clr-25 hover:shadow-[var(--clr-5)_0px_0px_20px_0px] focus:bg-clr-35 focus:border-clr-36" data-component="link" href="/pricing/serp/serp-api" target="_blank">
            {" "}
            <div className="flex justify-between items-start">
              <span className="w-11 h-11 border border-solid border-accent flex rounded-lg justify-center items-center shrink-0 text-primary bg-color-006">
                {" "}
                <Icon2 />
                {" "}
              </span>
              {" "}
              <span className="block shrink-0 text-color-005 leading-4" aria-hidden="true">
                {" "}
                <Icon3 />
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <h3 className="block text-color-003 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
              SERP API
            </h3>
            {" "}
            <p className="block text-color-008 text-lg font-medium leading-[1.8125rem]">
              Get real-time Google, Bing, and Yahoo SERPs for any location and language.
            </p>
            {" "}
          </a>
          {" "}
          <a className="border border-solid border-border flex p-5 rounded-xl flex-col gap-3 col-start-4 col-end-7 row-start-1 row-end-3 text-background bg-border cursor-pointer max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-lg:[grid-row-start:initial] max-lg:[grid-row-end:initial] md:max-lg:col-start-3 md:max-lg:col-end-5 hover:bg-clr-24 hover:border-clr-25 hover:shadow-[var(--clr-5)_0px_0px_20px_0px] focus:bg-clr-35 focus:border-clr-36" data-component="link" href="/pricing/ai-optimization" target="_blank">
            {" "}
            <div className="flex justify-between items-start">
              <span className="w-11 h-11 border border-solid border-accent flex rounded-lg justify-center items-center shrink-0 text-primary bg-color-006">
                {" "}
                <Icon4 />
                {" "}
              </span>
              {" "}
              <span className="block shrink-0 text-color-005 leading-4" aria-hidden="true">
                {" "}
                <Icon3 />
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <h3 className="block text-color-003 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
              AI Optimization API
            </h3>
            {" "}
            <p className="block text-color-008 text-lg font-medium leading-[1.8125rem]">
              Access LLM prompt data and aggregated AI agent responses.
            </p>
            {" "}
          </a>
          {" "}
          <a className="h-[7.775rem] border border-solid border-border flex p-5 rounded-xl flex-col gap-3 col-start-7 col-end-10 row-start-1 text-background bg-border cursor-pointer max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-lg:[grid-row-start:initial] md:max-lg:col-start-1 md:max-lg:col-end-3 hover:bg-clr-24 hover:border-clr-25 hover:shadow-[var(--clr-5)_0px_0px_20px_0px] focus:bg-clr-37 focus:border-clr-38" data-component="link" href="/pricing/keywords-data" target="_blank">
            {" "}
            <div className="flex justify-between items-start">
              <span className="w-11 h-11 border border-solid border-accent flex rounded-lg justify-center items-center shrink-0 text-primary bg-color-006">
                {" "}
                <Icon5 />
                {" "}
              </span>
              {" "}
              <span className="block shrink-0 text-color-005 leading-4" aria-hidden="true">
                {" "}
                <Icon3 />
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <h3 className="block text-color-003 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
              Keyword Data API
            </h3>
            {" "}
          </a>
          {" "}
          <a className="h-[7.775rem] border border-solid border-border flex p-5 rounded-xl flex-col gap-3 col-start-10 col-end-13 row-start-1 text-background bg-border cursor-pointer max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-lg:[grid-row-start:initial] md:max-lg:col-start-3 md:max-lg:col-end-5 hover:bg-clr-24 hover:border-clr-25 hover:shadow-[var(--clr-5)_0px_0px_20px_0px] focus:bg-clr-35 focus:border-clr-36" data-component="link" href="/pricing/on-page" target="_blank">
            {" "}
            <div className="flex justify-between items-start">
              <span className="w-11 h-11 border border-solid border-accent flex rounded-lg justify-center items-center shrink-0 text-primary bg-color-006">
                {" "}
                <Icon6 />
                {" "}
              </span>
              {" "}
              <span className="block shrink-0 text-color-005 leading-4" aria-hidden="true">
                {" "}
                <Icon3 />
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <h3 className="block text-color-003 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
              On-Page API
            </h3>
            {" "}
          </a>
          {features.map((d, i) => <FeatureCard2 key={i} d={d} styles={FeatureCard2_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
