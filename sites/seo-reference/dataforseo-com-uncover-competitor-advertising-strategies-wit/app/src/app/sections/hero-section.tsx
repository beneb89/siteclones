import ListRow3 from "../components/list-row3";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import { ListRow3_styles } from "../_styles";
import { listRow3Data as listRow3DataContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ listRow3Data = listRow3DataContent } = {}) {
  return (
    <section className="block relative isolate py-14 text-color-004 [background-size:auto,_auto,_auto] [background-position:0%_0%,_0%_0%,_0%_0%] [background-repeat:repeat,_repeat,_repeat] [background-clip:border-box,_border-box,_border-box] [background-origin:padding-box,_padding-box,_padding-box] [background-attachment:scroll,_scroll,_scroll] [background-blend-mode:normal,_normal,_normal] [-webkit-background-clip:border-box,_border-box,_border-box] max-md:py-8 md:max-lg:py-[2.4rem]" style={{ backgroundImage: "radial-gradient(circle at 100% 100%, var(--clr-2), var(--clr-3) 55%), radial-gradient(circle at 0px 0px, var(--clr-4), var(--clr-3) 55%), linear-gradient(120deg, var(--clr-5), var(--surface-4) 55%, var(--clr-6))" }}>
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <nav className="block mb-5 text-sm font-medium leading-[1.375rem]" data-component="nav" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-[0.4rem] [list-style-type:none] list-outside">
            {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
          </ol>
          {" "}
        </nav>
        {" "}
        <h1 className="w-full max-w-240 block text-color-001 text-[2.75rem] font-bold leading-[3.1875rem] tracking-[-1.11px] max-md:text-[1.75rem] max-md:leading-[2rem] max-md:tracking-[-0.71px] md:max-lg:text-[2.1875rem] md:max-lg:leading-[2.5625rem] md:max-lg:tracking-[-0.89px]" data-component="heading" id="post-title-101649">
          Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs
        </h1>
        {" "}
        <div className="flex mt-5 flex-wrap items-center gap-y-1.5 gap-x-3 text-sm leading-[1.375rem]">
          <a className="flex items-center gap-1.5 underline cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/blog/category/use-cases">
            Use Cases
          </a>
          {" "}
          <span className="flex items-center gap-1.5 before:content-['·'] before:block before:w-[0.1875rem] before:h-[1.4rem] before:text-clr-7 before:text-sm before:leading-[1.375rem]">
            {" "}
            <Icon />
            {" By Anatolii "}
          </span>
          {" "}
          <time className="flex items-center gap-1.5 before:content-['·'] before:block before:w-[0.1875rem] before:h-[1.4rem] before:text-clr-7 before:text-sm before:leading-[1.375rem]" dateTime="2024-12-23T21:00:00+03:00">
            {" "}
            <Icon2 />
            {" 23.12.2024 "}
          </time>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
