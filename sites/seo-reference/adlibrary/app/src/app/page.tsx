import DropdownMenu from "./ditto/DropdownMenu";
import Navbar from "./sections/navbar";
import Navbar2 from "./sections/navbar2";
import HeroSection from "./sections/hero-section";
import MetaAdsMcpSection from "./sections/meta-ads-mcp-section";
import TlDrTheSection from "./sections/tl-dr-the-section";
import WhatMetaAdsSection from "./sections/what-meta-ads-section";
import Step0FindSection from "./sections/step0-find-section";
import Install4CommandsSection from "./sections/install4-commands-section";
import FirstReadVerifySection from "./sections/first-read-verify-section";
import FirstWriteDraftingSection from "./sections/first-write-drafting-section";
import PipeboardVsMetaSection from "./sections/pipeboard-vs-meta-section";
import PermissionsAuditTrailsSection from "./sections/permissions-audit-trails-section";
import FrequentlyAskedQuestionsSection from "./sections/frequently-asked-questions-section";
import FurtherReadingSection from "./sections/further-reading-section";
import ProductGridSection from "./sections/product-grid-section";
import RelatedFeaturesSection from "./sections/related-features-section";
import RelatedUseCasesSection from "./sections/related-use-cases-section";
import Footer from "./sections/footer";
import Icon from "./svgs/svg-icon";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import ListRow4, { type ListRow4Data } from "./components/list-row4";
import Icon9 from "./svgs/svg-icon9";
import { ListRow2_styles, ListRow4_styles } from "./_styles";

const ListRow2_data: ListRow2Data[] = [
    { href: "#step-1-add-the-mcp-server-to-your-claude-code-config", label: "Step 1 — Add the MCP server to your Claude Code config" },
    { href: "#step-2-start-claude-code-and-trigger-the-oauth-flow", label: "Step 2 — Start Claude Code and trigger the OAuth flow" },
    { href: "#step-3-pick-your-oauth-scopes-deliberately", label: "Step 3 — Pick your OAuth scopes deliberately" },
    { href: "#step-4-verify-the-connection", label: "Step 4 — Verify the connection" }
];
const ListRow3_data: ListRow3Data[] = [
    { href: "#first-read-verify-the-connection-without-touching-live-spend", label: "First read: verify the connection without touching live spend" },
    { href: "#first-write-drafting-a-paused-campaign-endtoend", label: "First write: drafting a paused campaign end-to-end" },
    { href: "#pipeboard-vs-metas-official-server-when-to-pick-which", label: "Pipeboard vs Meta's official server: when to pick which" },
    { href: "#permissions-audit-trails-and-the-readonly-safety-pattern", label: "Permissions, audit trails, and the read-only safety pattern" }
];
const ListRow4_data: ListRow4Data[] = [
    { href: "#what-is-meta-ads-mcp-and-how-does-it-work", label: "What is Meta Ads MCP and how does it work?" },
    { href: "#is-meta-ads-mcp-safe-to-connect-with-write-permissions", label: "Is Meta Ads MCP safe to connect with write permissions?" },
    { href: "#what-is-the-difference-between-metas-official-mcp-server-and-pipeboard", label: "What is the difference between Meta's official MCP server and Pipeboard?" },
    { href: "#how-many-tools-does-meta-ads-mcp-expose", label: "How many tools does Meta Ads MCP expose?" },
    { href: "#do-i-need-a-meta-developer-app-to-use-meta-ads-mcp", label: "Do I need a Meta developer app to use Meta Ads MCP?" }
];

export default function Page() {
  return (
    <>
      <div className="block relative z-60 text-surface bg-primary w-full">
        <div className="flex max-w-320 py-2 px-4 justify-center items-center gap-3 text-sm leading-5 mx-auto max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-344">
          <span className="block text-center">
            Sign up for our special Launch offer
          </span>
          <a className="block py-1 px-3 rounded-full shrink-0 font-medium bg-clr-1 cursor-pointer hover:bg-clr-5" data-component="link" href="/signup">
            Click here
          </a>
        </div>
        <button className="w-6 h-6 block absolute top-5.5 right-3 p-1 rounded-full text-clr-2 text-center transform-[matrix(1,0,0,1,0,-12)] cursor-pointer hover:text-surface hover:outline-surface hover:[text-decoration-color:var(--surface)]" data-component="button" aria-label="Dismiss announcement">
          <Icon />
        </button>
      </div>
      <Navbar />
      <article className="block pb-16">
        <Navbar2 />
        <HeroSection />
        <div className="block px-6 mx-auto max-w-7xl max-md:px-4">
          <div className="hidden max-md:block">
            <div className="hidden mb-6 max-md:block">
              <button className="flex py-3 px-4 rounded-[3.2px] justify-between items-center text-left bg-background cursor-pointer w-full">
                <span className="block min-w-0 [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5">
                  Sections
                </span>
                <Icon6 />
              </button>
              <div className="block mt-2 mb-auto w-full max-md:mb-0">
                <button className="border border-solid border-border flex py-4 rounded-2xl justify-center items-center gap-2 text-sm font-bold leading-5 text-center bg-surface-2 cursor-pointer w-full" aria-label="Summarize this page with AI">
                  <Icon7 />
                  <span className="block min-w-0">
                    Summarize with AI
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-16 max-md:flex-col max-lg:gap-8 grid-cols-1 md:grid-cols-2">
            <div className="w-224 block max-md:w-[21.4375rem] md:max-lg:w-135">
              <div className="block text-lg font-light leading-[1.8125rem] max-w-4xl">
                <div className="block leading-8 max-lg:leading-[2rem]">
                  <MetaAdsMcpSection />
                  <TlDrTheSection />
                  <WhatMetaAdsSection />
                  <Step0FindSection />
                  <Install4CommandsSection />
                  <FirstReadVerifySection />
                  <FirstWriteDraftingSection />
                  <PipeboardVsMetaSection />
                  <PermissionsAuditTrailsSection />
                  <FrequentlyAskedQuestionsSection />
                </div>
              </div>
            </div>
            <aside className="w-68 block max-md:hidden md:max-lg:w-45">
              <div className="h-176 flex sticky top-20 mb-8 pl-5 flex-col max-h-[calc(100vh-6rem)] max-md:hidden md:max-lg:h-232 2xl:h-246">
                <h3 className="block mb-4 shrink-0 text-color-001 [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.7px] uppercase" data-component="heading">
                  Sections
                </h3>
                <nav className="h-149.5 block overflow-auto md:max-lg:h-205.5 2xl:h-219.5" data-component="nav">
                  <ul className="border-l-2 border-solid border-l-background block pl-4 [list-style-type:none] list-outside">
                    <li className="list-item">
                      <a className="border-l-2 border-solid border-l-primary block -ml-0.5 py-1 pl-4 text-primary [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 cursor-pointer 2xl:text-muted-foreground 2xl:border-l-[0] 2xl:border-initial 2xl:border-l-[initial] 2xl:ml-0 2xl:pl-0" data-component="link" href="#what-meta-ads-mcp-actually-is-and-why-beta-status-matters">
                        What Meta Ads MCP actually is — and why beta status matters
                      </a>
                    </li>
                    <li className="list-item mt-2">
                      <a className="block py-1 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 cursor-pointer hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="#step-0-find-the-angle-on-adlibrary-before-you-wire-mcp">
                        Step 0: find the angle on adlibrary before you wire MCP
                      </a>
                    </li>
                    <li className="list-item mt-2">
                      <a className="block py-1 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 cursor-pointer 2xl:border-l-2 2xl:border-solid 2xl:border-l-primary 2xl:-ml-0.5 2xl:pl-4 2xl:text-primary hover:text-clr-6 hover:outline-clr-6 hover:[text-decoration-color:var(--clr-6)]" data-component="link" href="#install-4-commands-to-connect-claude-code-to-mcpfacebookcomads">
                        Install: 4 commands to connect Claude Code to mcp.facebook.com/ads
                      </a>
                      <ul className="block mt-2 [list-style-type:none] list-outside">
                        {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                      </ul>
                    </li>
                    {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} />)}
                    <li className="list-item mt-2">
                      <a className="block py-1 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 cursor-pointer hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="#frequently-asked-questions">
                        Frequently asked questions
                      </a>
                      <ul className="block mt-2 [list-style-type:none] list-outside">
                        {ListRow4_data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                      </ul>
                    </li>
                    <li className="list-item mt-2">
                      <a className="block py-1 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 cursor-pointer hover:text-clr-6 hover:outline-clr-6 hover:[text-decoration-color:var(--clr-6)] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="#bottom-line">
                        Bottom line
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="w-63 block pt-2 shrink-0 md:max-lg:w-40">
                  <div className="block mt-2 w-full">
                    <button className="h-13.5 border border-solid border-border flex py-4 rounded-2xl justify-center items-center gap-2 text-sm font-bold leading-5 text-center bg-surface-2 cursor-pointer w-full hover:[filter:brightness(0.950832)] focus:[filter:brightness(0.999207)]" data-component="button" aria-label="Summarize this page with AI">
                      <Icon9 />
                      <span className="block">
                        Summarize with AI
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <FurtherReadingSection />
          <ProductGridSection />
          <RelatedFeaturesSection />
          <RelatedUseCasesSection />
        </div>
      </article>
      <Footer />
      {" "}
      <DropdownMenu menus={[{"trigger":"menu-trigger-select-a-theme","hoverOpen":false,"gap":4,"align":"right","html":"<div style=\"position:absolute;margin:0;display:flex;box-sizing:border-box;width:128px;height:106px;min-width:128px;max-width:none;min-height:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:rgb(244, 244, 245);color:rgb(2, 8, 23);box-shadow:rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:24px;font-weight:400;font-style:normal;line-height:32px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:hidden\"><div style=\"display:block;position:relative;box-sizing:border-box;width:126px;height:104px;min-width:83px;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:4px;padding-right:4px;padding-bottom:4px;padding-left:4px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:24px;font-weight:400;font-style:normal;line-height:32px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:hidden auto\"><div style=\"display:flex;position:relative;box-sizing:border-box;width:118px;height:32px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:6px;padding-right:8px;padding-bottom:6px;padding-left:32px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:rgb(241, 245, 249);color:rgb(15, 23, 42);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"><span style=\"display:flex;position:absolute;box-sizing:border-box;width:14px;height:14px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(15, 23, 42);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"><span style=\"display:block;position:static;box-sizing:border-box;width:16px;height:16px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(15, 23, 42);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-check h-4 w-4\"><path d=\"M20 6 9 17l-5-5\"></path></svg></span></span><span style=\"display:block;position:static;box-sizing:border-box;width:30px;height:20px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(15, 23, 42);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\">Auto</span></div><div style=\"display:flex;position:relative;box-sizing:border-box;width:118px;height:32px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:6px;padding-right:8px;padding-bottom:6px;padding-left:32px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"><span style=\"display:flex;position:absolute;box-sizing:border-box;width:14px;height:14px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"></span><span style=\"display:block;position:static;box-sizing:border-box;width:30px;height:20px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\">Light</span></div><div style=\"display:flex;position:relative;box-sizing:border-box;width:118px;height:32px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:6px;padding-right:8px;padding-bottom:6px;padding-left:32px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"><span style=\"display:flex;position:absolute;box-sizing:border-box;width:14px;height:14px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\"></span><span style=\"display:block;position:static;box-sizing:border-box;width:31px;height:20px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(201, 201, 207);border-right-color:rgb(201, 201, 207);border-bottom-color:rgb(201, 201, 207);border-left-color:rgb(201, 201, 207);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(2, 8, 23);box-shadow:none;opacity:1;font-family:GeistSans, &quot;GeistSans Fallback&quot;;font-size:14px;font-weight:400;font-style:normal;line-height:20px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\">Dark</span></div></div></div>"}]} />
    </>
  );
}
