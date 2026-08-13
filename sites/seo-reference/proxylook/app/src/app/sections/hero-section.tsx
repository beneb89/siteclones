import Tile, { type TileData } from "../components/tile";
import Tile2, { type Tile2Data } from "../components/tile2";
import Tile3, { type Tile3Data } from "../components/tile3";
import { Tile_styles, Tile2_styles } from "../_styles";
const Tile_data: TileData[] = [
    { text: "Pricing", text2: "C+" },
    { text: "Performance", text2: "B" },
    { text: "Pool quality", text2: "B" },
    { text: "Support", text2: "B+" },
    { text: "Ethics", text2: "B" }
];
const Tile2_data: Tile2Data[] = [
    { text: "IP pool", text2: "1.98T live backlinks, 8B+ Google keywords, 577M Google SERPs", text3: "proxy network" },
    { text: "Locations", text2: "—", text3: "countries" },
    { text: "Trial", text2: "No", text3: "no free trial" },
    { text: "Refund", text2: "No", text3: "no refund window" },
    { text: "Protocols", text2: "HTTP", text3: "HTTP / HTTPS" },
    { text: "Success", text2: "—", text3: "benchmarked" }
];
const Tile3_data: Tile3Data[] = [
    { text: "Free trial", text2: "No" },
    { text: "Money-back", text2: "No" },
    { text: "SOCKS5", text2: "No" },
    { text: "Crypto", text2: "No" },
    { text: "Founded", text2: "2016" },
    { text: "HQ", text2: "Tallinn, Estonia" }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ tileData = Tile_data, tile2Data = Tile2_data, tile3Data = Tile3_data } = {}) {
  return (
    <section className="border-b border-solid border-b-border block pt-8 max-md:pt-5" style={{ backgroundImage: "linear-gradient(var(--surface-4) 0%, var(--background) 100%)" }}>
      <div className="block max-w-330 px-6 mx-auto max-md:px-3.5 md:max-lg:px-4">
        <nav className="flex mb-4 flex-wrap items-center gap-1.5 text-muted-foreground text-[0.8125rem] leading-[1.375rem]" data-component="nav" aria-label="Breadcrumb">
          <a className="block cursor-pointer hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/all-providers">
            Directory
          </a>
          <span className="block text-muted">
            ›
          </span>
          {" "}
          <a className="block cursor-pointer hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/all-providers?proxy_type=residential">
            Residential
          </a>
          <span className="block text-muted">
            ›
          </span>
          {" "}
          <strong className="block text-foreground font-semibold">
            DataForSEO
          </strong>
          {" "}
        </nav>
        {" "}
        <div className="w-full grid pb-7 items-start gap-7 grid-cols-[1fr_360px] max-md:pb-4 max-lg:grid-cols-1">
          <div className="block min-w-0">
            <div className="flex items-center gap-4.5 max-md:items-start max-md:gap-3">
              <img className="w-auto h-18 border border-solid border-border flex max-w-full p-2 rounded-xl justify-center items-center shrink-0 overflow-clip object-contain aspect-[auto_72/72] align-middle text-surface text-[1.625rem] font-extrabold leading-[2.6875rem] bg-surface shadow-[var(--clr-2)_0px_1px_3px_0px,var(--clr-2)_0px_4px_12px_0px] max-md:h-13.5 max-md:min-w-13.5 max-md:rounded-[10px] max-md:text-xl max-md:leading-[2.0625rem]" data-component="image" alt="DataForSEO logo" height="72" src="/assets/cloned/images/0b894f2d035f.png" width="72" />
              {" "}
              <div className="block">
                <h1 className="flex flex-wrap items-center gap-2.5 text-[2.5rem] font-bold leading-10.5 tracking-[-0.8px] max-md:text-2xl max-md:leading-[1.5625rem] max-md:tracking-[-0.48px] md:max-lg:text-[1.9375rem] md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.61px]" data-component="heading">
                  DataForSEO Review 2026
                </h1>
                {" "}
                <div className="block mt-1 text-muted-foreground text-[0.9375rem] leading-[1.5625rem] max-md:text-[0.8125rem] max-md:leading-[1.375rem]">
                  API / managed scraping · founded 2016 · Tallinn, Estonia
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="flex mt-3.5 flex-wrap items-center gap-3 text-accent text-[0.8125rem] leading-[1.375rem] max-md:gap-2 max-md:text-xs max-md:leading-[1.25rem]">
              <span className="flex items-center gap-1.5 max-md:text-[0.8125rem] max-md:leading-[1.375rem]">
                <span className="block text-clr-3 tracking-[1px]">
                  ★★★★★
                </span>
                <b className="block text-foreground [font-family:'JetBrains_Mono',_ui-monospace,_monospace] font-bold">
                  4.6
                </b>
                <span className="block text-muted-foreground italic">
                  · editorial rating
                </span>
              </span>
              {" "}
              <span className="flex py-[0.1875rem] px-2 rounded-[999px] items-center gap-1 text-color-003 text-[0.6875rem] font-semibold leading-[1.125rem] whitespace-nowrap text-nowrap bg-clr-4">
                Trust 8.5/10
              </span>
              {" "}
              <span className="flex py-[0.1875rem] px-2 rounded-[999px] items-center gap-1 text-primary text-[0.6875rem] font-semibold leading-[1.125rem] whitespace-nowrap text-nowrap bg-surface-4">
                Verified
              </span>
              {" "}
              <span className="block text-muted-foreground text-xs leading-[1.25rem] max-md:[font-size:inherit] max-md:leading-[inherit]">
                · Last updated May 19, 2026
              </span>
              {" "}
            </div>
            {" "}
            <div className="flex mt-2 flex-wrap items-center gap-2 text-muted-foreground text-xs leading-[1.25rem]">
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 flex rounded-[50%] justify-center items-center overflow-hidden text-primary text-[0.625rem] font-bold leading-[1.0625rem] bg-surface-4">
                  <img className="w-full h-5 block max-w-full overflow-clip object-cover aspect-[auto_20/20] align-middle" data-component="image" alt="Maya Cortez" height="20" src="/assets/cloned/images/e69114333981.webp" width="20" />
                </span>
                {"Reviewed by "}
                <a className="block text-primary cursor-pointer" data-component="link" href="/authors/maya-cortez">
                  Maya Cortez
                </a>
              </span>
              {" "}
              <span className="block text-muted">
                ·
              </span>
              {" "}
              <a className="block text-primary cursor-pointer" data-component="link" href="/methodology">
                How we test →
              </a>
              {" "}
            </div>
            {" "}
            <p className="block max-w-160 mt-4.5 mb-3.5 text-accent text-base leading-[1.625rem] max-md:mt-3 max-md:leading-[1.375rem] max-md:max-w-none max-md:[font-size:inherit]">
              Pay-as-you-go API stack and databases delivering SERP, keyword, backlink and on-page data for SEO and marketing tools.
            </p>
            {" "}
            <div className="flex mt-1.5 flex-wrap gap-3">
              <button className="w-[8.4375rem] h-9 border border-solid border-border flex py-2 px-[0.9375rem] rounded-lg justify-center items-center gap-1.5 text-[0.8125rem] font-semibold leading-[1.125rem] text-center whitespace-nowrap text-nowrap bg-surface cursor-pointer max-md:w-[174.5px] max-md:h-11 max-md:min-h-11 max-md:min-w-35 max-md:grow hover:bg-surface-2 hover:border-clr-18 hover:shadow-[var(--clr-5)_0px_0.999938px_1.99988px_0px,var(--clr-2)_0px_0.999938px_1.99988px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999938)] focus:shadow-[var(--clr-21)_0px_0.000810857px_0.00162171px_0px,var(--clr-21)_0px_0.000810857px_0.00162171px_0px] focus:transform-[matrix(1,0,0,1,0,-0.000810857)]" data-component="button" aria-label="Pin to compare" type="button">
                ☆ Pin to compare
              </button>
              {" "}
              <a className="w-[7.5625rem] h-9 border border-solid border-border flex py-2 px-[0.9375rem] rounded-lg justify-center items-center gap-1.5 text-[0.8125rem] font-semibold leading-[1.125rem] whitespace-nowrap text-nowrap bg-surface cursor-pointer max-md:w-[160.5px] max-md:h-11 max-md:min-h-11 max-md:min-w-35 max-md:grow hover:bg-surface-2 hover:border-clr-18 hover:shadow-[var(--clr-5)_0px_0.999181px_1.99836px_0px,var(--clr-2)_0px_0.999181px_1.99836px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999181)] focus:shadow-[var(--clr-21)_0px_6.23941e-05px_0.000124788px_0px,var(--clr-21)_0px_6.23941e-05px_0.000124788px_0px] focus:transform-[matrix(1,0,0,1,0,-6.23941e-05)]" data-component="button" href="#performance">
                Read teardown
              </a>
              {" "}
              <a className="w-[7.8125rem] h-9 border border-solid border-border flex py-2 px-[0.9375rem] rounded-lg justify-center items-center gap-1.5 text-[0.8125rem] font-semibold leading-[1.125rem] whitespace-nowrap text-nowrap bg-surface cursor-pointer max-md:w-[21.6875rem] max-md:h-11 max-md:min-h-11 max-md:min-w-35 max-md:grow hover:bg-surface-2 hover:border-clr-18 hover:shadow-[var(--clr-5)_0px_0.999179px_1.99836px_0px,var(--clr-2)_0px_0.999179px_1.99836px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999179)] focus:shadow-[var(--clr-21)_0px_6.23934e-05px_0.000124787px_0px,var(--clr-21)_0px_6.23934e-05px_0.000124787px_0px] focus:transform-[matrix(1,0,0,1,0,-6.23934e-05)]" data-component="button" href="#pricing">
                Jump to pricing
              </a>
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border grid mt-5.5 rounded-xl overflow-hidden bg-surface shadow-[var(--clr-5)_0px_1px_2px_0px] grid-cols-[1fr_1fr_1fr_1fr_1fr] max-md:grid-cols-[60.3906px_93.75px_65.3906px_68.3906px_57.0781px]" aria-label="Sub-scores">
              {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border grid mt-4.5 mb-6 rounded-xl flex-wrap overflow-hidden bg-surface shadow-[var(--clr-5)_0px_1px_2px_0px,var(--clr-2)_0px_1px_2px_0px] grid-cols-6 max-md:grid-cols-2">
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <aside className="h-[31.9375rem] border-t-[3px] border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border flex sticky top-22.5 p-5.5 rounded-2xl flex-col [align-self:start] gap-3.5 bg-surface shadow-[var(--clr-5)_0px_1px_2px_0px,var(--clr-2)_0px_1px_2px_0px] max-md:h-[31.1125rem] max-lg:static md:max-lg:h-[491.3px]" aria-label="Buy DataForSEO">
            <div className="block text-primary text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.88px] uppercase">
              Plans start at
            </div>
            {" "}
            <div className="flex items-baseline gap-1.5 [font-feature-settings:'ss01',_'tnum']">
              <b className="block text-4xl font-extrabold leading-[3.6875rem] tracking-[-0.72px] max-md:text-[1.75rem] max-md:leading-[2.875rem] max-md:tracking-[-0.56px]">
                $50.00
              </b>
              <small className="block text-muted-foreground text-[0.8125rem] leading-[1.375rem]">
                /mo entry plan
              </small>
            </div>
            {" "}
            <a className="border border-solid border-clr-1 block py-3 px-5 rounded-lg justify-center items-center gap-1.5 text-surface font-semibold leading-[1.25rem] text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer max-md:min-h-11 hover:bg-color-002 hover:shadow-[var(--clr-19)_0px_3.99675px_13.9886px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999187)] focus:shadow-[var(--clr-22)_0px_0.000249571px_0.000873499px_0px] focus:transform-[matrix(1,0,0,1,0,-6.23928e-05)]" data-component="link" href="https://dataforseo.com/" rel="noopener sponsored" target="_blank">
              Visit DataForSEO
            </a>
            {" "}
            <div className="border-t border-solid border-t-surface-3 grid grid-cols-[minmax(0,_1fr)]">
              {tile3Data.map((d, i) => <Tile3 key={i} d={d} />)}
              {" "}
            </div>
            {" "}
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs leading-[1.25rem]">
              ✓ Pricing verified Aug 13, 2026 · affiliate link, same price for you
            </div>
            {" "}
          </aside>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
