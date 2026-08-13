import Tile7, { type Tile7Data } from "../components/tile7";
import TextLink4 from "../components/text-link4";
import { Tile7_styles, TextLink4_styles } from "../_styles";
import { textLink4Data as textLink4DataContent } from "../content";
const Tile7_data: Tile7Data[] = [
    { text: "Founded", text2: "2016" },
    { text: "Headquarters", text2: "Tallinn, Estonia" },
    { text: "Parent company", text2: "—" },
    { text: "Funding status", text2: "—" },
    { text: "Funding amount", text2: "—" },
    { text: "Employees", text2: "—" }
];
/** Company Resources section. */
export default function CompanyResourcesSection({ tile7Data = Tile7_data, textLink4Data = textLink4DataContent } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-company" id="company">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        {"Company & resources"}
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        Who builds and operates this product.
      </p>
      {" "}
      <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,_minmax(292px,_1fr))] grid-rows-4 max-md:gap-2 max-md:grid-rows-8">
        {tile7Data.map((d, i) => <Tile7 key={i} d={d} styles={Tile7_styles[i]} />)}
        {" "}
        <div className="grid py-2.5 px-3.5 rounded-lg items-center gap-3.5 text-[0.8125rem] leading-[1.1875rem] bg-surface-2 grid-cols-[110px_1fr] max-md:gap-1 max-md:grid-cols-1">
          <b className="block font-semibold [overflow-wrap:break-word]">
            Website
          </b>
          <a className="flex min-w-0 items-center gap-1 text-primary font-semibold text-right [word-break:break-word] cursor-pointer max-md:text-left hover:text-color-002 hover:outline-color-002 hover:underline" data-component="link" href="https://dataforseo.com/" rel="noopener" target="_blank">
            Visit →
          </a>
        </div>
        {" "}
        <div className="grid py-2.5 px-3.5 rounded-lg items-center gap-3.5 text-[0.8125rem] leading-[1.1875rem] bg-surface-2 grid-cols-[110px_1fr] max-md:gap-1 max-md:grid-cols-1">
          <b className="block font-semibold [overflow-wrap:break-word]">
            Documentation
          </b>
          <span className="block min-w-0 text-muted font-medium text-right [word-break:break-word] max-md:text-left">
            —
          </span>
        </div>
        {" "}
      </div>
      {" "}
      <div className="block mt-4">
        <div className="block mb-2 text-muted-foreground text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.66px] uppercase">
          Social
        </div>
        {" "}
        <div className="flex flex-wrap gap-2">
          {textLink4Data.map((d, i) => <TextLink4 key={i} d={d} styles={TextLink4_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
