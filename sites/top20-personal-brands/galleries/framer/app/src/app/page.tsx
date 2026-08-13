import DittoMotion from "./ditto/DittoMotion";
import Logo, { type LogoData } from "./components/logo";
import Icon from "./svgs/svg-icon";
import FeatureCard, { type FeatureCardData } from "./components/feature-card";
import Icon2 from "./svgs/svg-icon2";
import ListRow, { type ListRowData } from "./components/list-row";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import Tile, { type TileData } from "./components/tile";
import ListRow4, { type ListRow4Data } from "./components/list-row4";
import ListRow5, { type ListRow5Data } from "./components/list-row5";
import ListRow6, { type ListRow6Data } from "./components/list-row6";
import ListRow7, { type ListRow7Data } from "./components/list-row7";
import ListRow8, { type ListRow8Data } from "./components/list-row8";
import Tile2, { type Tile2Data } from "./components/tile2";
import ListRow9, { type ListRow9Data } from "./components/list-row9";
import Tile3, { type Tile3Data } from "./components/tile3";
import ListRow10, { type ListRow10Data } from "./components/list-row10";
import Tile4, { type Tile4Data } from "./components/tile4";
import Icon3 from "./svgs/svg-icon3";
import { Logo_styles, FeatureCard_styles, ListRow_styles, ListRow2_styles, ListRow3_styles, Tile_styles, Tile_styles2, ListRow4_styles, ListRow5_styles, ListRow2_styles2, ListRow6_styles, ListRow7_styles, ListRow8_styles, Tile2_styles, ListRow9_styles, Tile3_styles, ListRow10_styles, Tile4_styles, Tile4_styles2 } from "./_styles";

const Logo_data: LogoData[] = [
    { name: "Platform", name2: "Platform", description: "Platform" },
    { name: "Solutions", name2: "Solutions", description: "Solutions" },
    { name: "Resources", name2: "Resources", description: "Resources" }
];
const FeatureCard_data: FeatureCardData[] = [
    { href: "/blog/framer-creators-nandi-the-23yo-dropout-behind-framer-university/", alt: "Framer Creators: Nandi, the 23yo dropout behind Framer University — cover image", height: "2026", imgSrc: "/assets/cloned/images/01cef41e906b.png", srcSet: "/assets/cloned/images/c55965a20e4a.png 512w, /assets/cloned/images/b4b594945e13.png 1024w, /assets/cloned/images/803144c83796.png 2048w, /assets/cloned/images/01cef41e906b.png 3616w", width: "3616", title: "Framer Creators: Nandi, the 23yo dropout behind Framer University", label: "2 min read" },
    { href: "/blog/framer-creators-lee-black-from-print-to-best-framer-designer/", alt: "Framer Creators: Lee Black, from print to Best Framer Designer — cover image", height: "720", imgSrc: "/assets/cloned/images/7088b650a350.png", srcSet: "/assets/cloned/images/4ba89cfd64f4.png 512w, /assets/cloned/images/38a2d4e314d4.png 1024w, /assets/cloned/images/7088b650a350.png 1280w", width: "1280", title: "Framer Creators: Lee Black, from print to Best Framer Designer", label: "2 min read" },
    { href: "/blog/koen-jorn-framer-reloaded-first-of-kind/", alt: "Koen & Jorn: Framer Reloaded — First of Kind", height: "2034", imgSrc: "/assets/cloned/images/aadcae501a10.png", srcSet: "/assets/cloned/images/96eac019b4cf.png 512w, /assets/cloned/images/93939220a926.png 1024w, /assets/cloned/images/0db805fa6d79.png 2048w, /assets/cloned/images/aadcae501a10.png 3658w", width: "3658", title: "Koen & Jorn: Framer Reloaded — First of Kind", label: "1 min read" },
    { href: "/blog/why-designers-should-become-founders/", alt: "Jorn van Dijk on why designers should become founders — cover image", height: "3072", imgSrc: "/assets/cloned/images/6b04ac0b7eaa.png", srcSet: "/assets/cloned/images/bbd488f49d61.png 512w, /assets/cloned/images/0fbfeb3a19c2.png 1024w, /assets/cloned/images/89ba5fa1d5ed.png 2048w, /assets/cloned/images/b3b328aab5f9.png 4096w, /assets/cloned/images/6b04ac0b7eaa.png 5568w", width: "5568", title: "Jorn van Dijk on why designers should become founders", label: "5 min read" },
    { href: "/blog/restaurant-website-design-examples/", alt: "20 best restaurant website examples + design tips — cover image", height: "2160", imgSrc: "/assets/cloned/images/5966c46392b7.jpg", srcSet: "/assets/cloned/images/0b2f81edc43b.jpg 512w, /assets/cloned/images/075cfe7c9221.jpg 1024w, /assets/cloned/images/22aee845590d.jpg 2048w, /assets/cloned/images/5966c46392b7.jpg 3236w", width: "3236", title: "20 best restaurant website examples + design tips", label: "11 min read" },
    { href: "/blog/homepage-design-examples/", alt: "11 homepage design examples and best practices — cover image", height: "3240", imgSrc: "/assets/cloned/images/ff1c9360739d.jpg", srcSet: "/assets/cloned/images/36c96a479286.jpg 512w, /assets/cloned/images/f380fd911247.jpg 1024w, /assets/cloned/images/49158e0a4359.jpg 2048w, /assets/cloned/images/42f458b48f00.jpg 4096w, /assets/cloned/images/ff1c9360739d.jpg 4854w", width: "4854", title: "11 homepage design examples and best practices", label: "9 min read" }
];
const ListRow_data: ListRowData[] = [
    { href: "/ai/", description: "AI" },
    { href: "/agents/", description: "Agents" },
    { href: "/agents/external/", description: "External Agents" }
];
const ListRow2_data: ListRow2Data[] = [
    { href: "/cms/", description: "CMS" },
    { href: "/hosting/", description: "Hosting" },
    { href: "/performance/", description: "Performance" },
    { href: "/seo/", description: "SEO" },
    { href: "/convert/", description: "Convert" },
    { href: "/publish/", description: "Publish" }
];
const ListRow3_data: ListRow3Data[] = [
    { description: "Resources" },
    { kind: "link", href: "/academy/", description: "Academy" },
    { kind: "link", href: "/guides", description: "Guides" },
    { kind: "link", href: "/downloads/", description: "Desktop app" },
    { kind: "link", href: "/blog/", description: "Blog" },
    { kind: "link", href: "/newsletter", description: "Newsletter" },
    { kind: "link", href: "/stories/", description: "Stories" },
    { kind: "link", href: "/developers/", description: "Developers" },
    { kind: "link", href: "/creators", description: "Creators" },
    { kind: "link", href: "/expert/apply/", description: "Experts" },
    { kind: "link", href: "/education/students/", description: "Students" },
    { kind: "link", href: "/education/ambassadors/", description: "Ambassadors" },
    { kind: "link", href: "/state-of-sites-2026/", target: "_blank", description: "State of Sites" },
    { kind: "link", href: "/help/", description: "Help Articles" },
    { kind: "link", href: "/contact/", description: "Contact" }
];
const Tile_data: TileData[] = [
    { description: "Business" },
    { kind: "link", href: "/pricing", description: "Pricing" },
    { kind: "link", href: "/enterprise/", description: "Enterprise" },
    { kind: "link", href: "/startups/", description: "Startups" },
    { kind: "link", href: "/agencies/", description: "Agencies" },
    { kind: "link", href: "/switch/", description: "Switch" }
];
const Tile_data2: TileData[] = [
    { description: "Company" },
    { kind: "link", href: "/careers/", description: "Careers" },
    { kind: "link", href: "/brand", description: "Brand" },
    { kind: "link", href: "/store", description: "Store" },
    { kind: "link", href: "/legal/security", description: "Security" },
    { kind: "link", href: "mailto:abuse@framer.com", description: "Abuse" },
    { kind: "link", href: "/legal/community-terms", description: "Legal" },
    { kind: "link", href: "https://app.eu.vanta.com/framer.com/trust/ow67ujg7iav0t6qtd1o6r2", description: "Trust" }
];
const ListRow4_data: ListRow4Data[] = [
    { href: "/solutions/designers/", description: "Designers" },
    { href: "/solutions/agencies/", description: "Agencies" },
    { href: "/solutions/marketers/", description: "Marketers" }
];
const ListRow5_data: ListRow5Data[] = [
    { name: "AI Website Builder Link Container", href: "/solutions/engineers/", name2: "AI Website Builder Link Container", description: "Engineers" },
    { name: "AI Website Builder Link Container", href: "/solutions/site-teams/", name2: "AI Website Builder Link Container", description: "Site Teams" },
    { name: "AI Website Builder Link Container", href: "/solutions/founders/", name2: "AI Website Builder Link Container", description: "Founders" },
    { name: "AI Website Builder Link Container", href: "/solutions/ai-website-builder/", name2: "AI Website Builder Link Container", description: "AI website builder" },
    { name: "AI Designer Link Container", href: "/solutions/ai-designer/", name2: "AI Designer Link Container", description: "AI design agent" },
    { href: "/solutions/website-builder/", description: "Website builder" }
];
const ListRow2_data2: ListRow2Data[] = [
    { href: "/solutions/portfolio-website/", description: "Portfolio maker" },
    { href: "/solutions/ui-ux-design/", description: "UI/UX design" },
    { href: "/solutions/no-code-website-builder/", description: "No-code" }
];
const ListRow6_data: ListRow6Data[] = [
    { description: "Solutions" },
    { name: "AI Website Builder Link Container", href: "/solutions/designers/", name2: "AI Website Builder Link Container", description: "Designers" },
    { name: "AI Website Builder Link Container", href: "/solutions/agencies/", name2: "AI Website Builder Link Container", description: "Agencies" },
    { name: "AI Website Builder Link Container", href: "/solutions/marketers/", name2: "AI Website Builder Link Container", description: "Marketers" },
    { name: "AI Website Builder Link Container", href: "/solutions/growth/", name2: "AI Website Builder Link Container", description: "Growth" },
    { name: "AI Website Builder Link Container", href: "/solutions/builders/", name2: "AI Website Builder Link Container", description: "Builders" },
    { name: "AI Website Builder Link Container", href: "/solutions/engineers/", name2: "AI Website Builder Link Container", description: "Engineers" },
    { name: "AI Website Builder Link Container", href: "/solutions/site-teams/", name2: "AI Website Builder Link Container", description: "Site Teams" },
    { name: "AI Website Builder Link Container", href: "/solutions/founders/", name2: "AI Website Builder Link Container", description: "Founders" },
    { name: "AI Website Builder Link Container", href: "/solutions/ai-website-builder/", name2: "AI Website Builder Link Container", description: "AI website builder" },
    { name: "AI Designer Link Container", href: "/solutions/ai-designer/", name2: "AI Designer Link Container", description: "AI design agent" },
    { href: "/solutions/website-builder/", description: "Website builder" },
    { href: "/solutions/landing-pages/", description: "Landing pages" },
    { href: "/solutions/portfolio-website/", description: "Portfolio maker" },
    { href: "/solutions/ui-ux-design/", description: "UI/UX design" },
    { href: "/solutions/no-code-website-builder/", description: "No-code" }
];
const ListRow7_data: ListRow7Data[] = [
    { description: "Community" },
    { href: "/community/marketplace/", description: "Marketplace" },
    { href: "/community/marketplace/templates/", description: "Templates" },
    { href: "/community/marketplace/components/", description: "Components" },
    { href: "/community/marketplace/plugins/", description: "Plugins" },
    { href: "/community/marketplace/vectors/", description: "Vectors" },
    { href: "/community/feed/", description: "Feed" },
    { href: "/community/hype/", description: "Hype" },
    { href: "/community/gallery/", description: "Gallery" },
    { href: "/community/contests/", description: "Contests" },
    { href: "/community/members/", description: "Members" },
    { href: "/meetups/", description: "Meetups" },
    { href: "/updates/community/", description: "Updates" }
];
const ListRow8_data: ListRow8Data[] = [
    { description: "Tools" },
    { href: "/solutions/figma-to-html/", description: "Figma to HTML" },
    { href: "/aeo", description: "AEO scanner" },
    { href: "https://www.linkpreview.app/", target: "_blank", description: "Link previewer" },
    { href: "/domains/", description: "Free domains" },
    { href: "/canvasbench/", description: "CanvasBench" },
    { href: "/shortcuts", description: "Shortcuts" }
];
const Tile2_data: Tile2Data[] = [
    { href: "/compare", description: "Overview" },
    { href: "/compare/framer-vs-webflow", description: "Webflow" },
    { href: "/compare/framer-vs-figma", description: "Figma" },
    { href: "/compare/framer-vs-wix", description: "Wix" },
    { href: "/compare/framer-vs-squarespace", description: "Squarespace" },
    { href: "/compare/framer-vs-wordpress", description: "WordPress" },
    { href: "/compare/framer-vs-readymag", description: "Readymag" },
    { href: "/compare/framer-vs-ceros", description: "Ceros" },
    { href: "/compare/framer-vs-unbounce", description: "Unbounce" },
    { href: "/compare/framer-vs-lovable", description: "Lovable" },
    { href: "/compare/framer-vs-claude-code", description: "Claude Code" },
    { href: "/compare/framer-vs-chatgpt", description: "ChatGPT" },
    { href: "/compare/framer-vs-codex", description: "Codex" },
    { href: "/compare/framer-vs-contentful", description: "Contentful" },
    { href: "/compare/framer-vs-sanity", description: "Sanity" },
    { href: "/compare/framer-vs-adobe-experience-manager", description: "AEM" },
    { href: "/compare/framer-vs-replit", description: "Replit" }
];
const ListRow9_data: ListRow9Data[] = [
    { description: "Community" },
    { kind: "link", href: "/community/marketplace/", description: "Marketplace" },
    { kind: "link", href: "/community/marketplace/templates/", description: "Templates" },
    { kind: "link", href: "/community/marketplace/components/", description: "Components" },
    { kind: "link", href: "/community/marketplace/plugins/", description: "Plugins" },
    { kind: "link", href: "/community/marketplace/vectors/", description: "Vectors" },
    { kind: "link", href: "/community/feed/", description: "Feed" },
    { kind: "link", href: "/community/hype/", description: "Hype" },
    { kind: "link", href: "/community/gallery/", description: "Gallery" },
    { kind: "link", href: "/community/contests/", description: "Contests" },
    { kind: "link", href: "/community/members/", description: "Members" },
    { kind: "link", href: "/meetups/", description: "Meetups" },
    { kind: "link", href: "/updates/community/", description: "Updates" },
    { href: "/help/", description: "Help Articles" },
    { href: "/contact/", description: "Contact" }
];
const Tile3_data: Tile3Data[] = [
    { href: "/compare", description: "Overview" },
    { href: "/compare/framer-vs-webflow", description: "Webflow" },
    { href: "/compare/framer-vs-figma", description: "Figma" },
    { href: "/compare/framer-vs-wix", description: "Wix" },
    { href: "/compare/framer-vs-squarespace", description: "Squarespace" },
    { href: "/compare/framer-vs-wordpress", description: "WordPress" },
    { href: "/compare/framer-vs-readymag", description: "Readymag" },
    { href: "/compare/framer-vs-ceros", description: "Ceros" },
    { href: "/compare/framer-vs-unbounce", description: "Unbounce" },
    { href: "/compare/framer-vs-lovable", description: "Lovable" },
    { href: "/compare/framer-vs-claude-code", description: "Claude Code" },
    { href: "/compare/framer-vs-chatgpt", description: "ChatGPT" },
    { href: "/compare/framer-vs-codex", description: "Codex" },
    { href: "/compare/framer-vs-contentful", description: "Contentful" },
    { href: "/compare/framer-vs-sanity", description: "Sanity" },
    { href: "/compare/framer-vs-adobe-experience-manager", description: "AEM" },
    { href: "/compare/framer-vs-replit", description: "Replit" }
];
const ListRow10_data: ListRow10Data[] = [
    { href: "/aeo", description: "AEO scanner" },
    { href: "https://www.linkpreview.app/", target: "_blank", description: "Meta Tags" },
    { href: "/domains/", description: "Free domains" },
    { href: "/canvasbench/", description: "CanvasBench" },
    { href: "/shortcuts", description: "Shortcuts" }
];
const Tile4_data: Tile4Data[] = [
    { description: "Business" },
    { href: "/pricing", description: "Pricing" },
    { href: "/enterprise/", description: "Enterprise" },
    { href: "/startups/", description: "Startups" },
    { href: "/agencies/", description: "Agencies" },
    { href: "/switch/", description: "Switch" }
];
const Tile4_data2: Tile4Data[] = [
    { description: "Company" },
    { href: "/careers/", description: "Careers" },
    { href: "/brand", description: "Brand" },
    { href: "/store", description: "Store" },
    { href: "/legal/security", description: "Security" },
    { href: "mailto:abuse@framer.com", description: "Abuse" },
    { href: "/legal/community-terms", description: "Legal" },
    { href: "https://app.eu.vanta.com/framer.com/trust/ow67ujg7iav0t6qtd1o6r2", description: "Trust" }
];

export default function Page() {
  return (
    <>
      <div className="block" id="main">
        <div className="h-[18205.3px] min-h-screen flex relative flex-col justify-start items-center content-center bg-foreground max-md:h-[17284.7px] md:max-lg:h-[1336.55rem]">
          <div className="h-16 block fixed inset-x-0 z-10 min-w-0 shrink-0 order-[-999]">
            <div className="contents">
              <nav className="h-16 flex relative px-5 flex-col justify-center items-center content-center cursor-default max-lg:justify-start max-lg:px-0" data-component="nav">
                <div className="w-full max-w-300 flex relative z-10 justify-between items-center content-center shrink-0 max-lg:justify-start">
                  <div className="basis-0 shrink-0 h-8.5 flex relative justify-start items-center content-center grow gap-[0.3125rem] max-lg:h-16 max-lg:pl-5">
                    <div className="basis-0 shrink-0 flex relative justify-start items-center content-center grow gap-[0.9375rem]">
                      <div className="w-[4.8125rem] h-6.5 block relative shrink-0 cursor-pointer max-lg:w-4 max-lg:h-6 max-lg:aspect-[0.666667/1]">
                        <a className="h-6.5 flex relative justify-start items-center content-center gap-2.5 text-primary max-lg:h-6" data-component="link" href="/">
                          <div className="w-4 h-6 block relative shrink-0 [background-size:100%_100%]" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 16 24%22 overflow=%22visible%22><path d=%22M 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 8 16 L 8 24 L 0 16 Z%22 fill=%22var(--color-002)%22></path></svg>\")" }} aria-hidden="true" />
                          <div className="w-[3.1875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.01px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07']" dir="auto">
                              Framer
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="flex relative z-1 justify-center items-center content-center shrink-0 max-lg:hidden">
                        {Logo_data.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                        <div className="block relative shrink-0 max-lg:hidden" name="Enterprise">
                          <a className="w-[5.4375rem] h-8.5 flex relative opacity-60 justify-start items-start content-start gap-2.5 text-primary cursor-pointer max-lg:hidden" data-component="link" href="/enterprise/" name="Enterprise">
                            <div className="w-[5.4375rem] flex relative flex-col justify-start items-start content-start self-stretch shrink-0 gap-[0.3125rem] max-lg:hidden">
                              <div className="w-[5.4375rem] flex relative py-2.5 px-3 justify-start items-center content-center shrink-0 gap-1 max-lg:hidden">
                                <div className="w-[3.9375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.2px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07'] max-lg:hidden" dir="auto">
                                    Enterprise
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="block relative shrink-0 max-lg:hidden" name="Pricing">
                          <a className="w-[4.225rem] h-8.5 flex relative opacity-60 justify-start items-start content-start gap-2.5 text-primary cursor-pointer max-lg:hidden" data-component="link" href="/pricing" name="Pricing">
                            <div className="w-[4.225rem] flex relative flex-col justify-start items-start content-start self-stretch shrink-0 gap-[0.3125rem] max-lg:hidden">
                              <div className="w-[4.225rem] flex relative py-2.5 px-3 justify-start items-center content-center shrink-0 gap-1 max-lg:hidden">
                                <div className="w-[2.725rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.2px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07'] max-lg:hidden" dir="auto">
                                    Pricing
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="w-[40.475rem] h-7.5 block relative inset-0 grow shrink-0 basis-0 max-lg:w-30 max-lg:absolute max-lg:-top-0.5 max-md:left-[10.6875rem] max-lg:z-1 max-lg:min-w-0 max-lg:right-auto max-lg:bottom-auto max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:left-141" name="Login">
                        <div className="h-7.5 flex relative justify-end items-center content-center" name="Login">
                          <div className="w-[123.3px] block relative shrink-0">
                            <div className="h-7.5 flex relative justify-end items-start content-start gap-y-2.5 gap-x-[0.9375rem]">
                              <div className="w-[2.45rem] h-7.5 block relative shrink-0" data-ditto-id="motion-div" name="Login">
                                <div className="h-full flex relative justify-center items-center content-center gap-2 cursor-pointer" name="Login">
                                  <div className="w-[2.45rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                                    <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
                                      <a className="inline text-color-001 hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://framer.com/r/login" target="_blank">
                                        Log in
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[4.3125rem] block relative shrink-0" data-ditto-id="motion-div-2" name="Signup">
                                <div className="flex relative justify-center items-center content-center gap-2 cursor-pointer" name="Signup">
                                  <a className="w-[4.3125rem] h-7.5 flex relative py-2 px-2.5 rounded-lg justify-center items-center content-center shrink-0 gap-2.5 overflow-clip text-primary bg-color-002" data-component="link" href="/r/signup/">
                                    <div className="w-[3.0625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                                      <p className="block text-foreground [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.56px] text-left [font-feature-settings:'cv06',_'cv11',_'dlig',_'ss03']" dir="auto">
                                        Sign up
                                      </p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-0 h-full block absolute top-0 z-1 min-w-0 shrink-0">
                            <div className="w-0 h-7.5 flex relative justify-end items-center content-center" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-27 block absolute top-10 right-256.5 left-0 z-0 min-w-0 transform-[none] pointer-events-none max-lg:h-16 max-lg:top-8 max-lg:right-0 max-md:left-[19.4375rem] max-lg:z-1 max-lg:shrink-0 max-lg:transform-[matrix(1,0,0,1,0,-32)] max-lg:[pointer-events:initial] md:max-lg:left-176">
                      <div className="w-43.5 h-27 flex relative z-10 opacity-0 p-2.5 rounded-xl flex-col justify-center items-center content-center shrink-0 overflow-hidden bg-foreground shadow-[var(--surface-2)_0px_0px_0px_1px] pointer-events-none max-lg:w-16 max-lg:h-16 max-lg:block max-lg:cursor-pointer max-lg:z-[initial] max-lg:opacity-[initial] max-lg:p-0 max-lg:rounded-[initial] max-lg:[flex-direction:initial] max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:shrink-[initial] max-lg:bg-[initial] max-lg:shadow-[initial] max-lg:[pointer-events:initial]">
                        <div className="w-38.5 h-11 block relative inset-0 shrink-0 cursor-pointer pointer-events-none max-lg:w-5 max-lg:h-0.5 max-lg:absolute max-lg:top-[2.225rem] max-lg:left-5.5 max-lg:rounded-[10px] max-lg:overflow-hidden max-lg:bg-color-002 max-lg:right-auto max-lg:bottom-auto max-lg:[cursor:inherit] max-lg:[pointer-events:initial]">
                          <a className="w-38.5 h-11 flex relative p-[0.9375rem] rounded-lg justify-start items-start content-start gap-2.5 bg-clr-0 pointer-events-none max-lg:hidden">
                            <div className="basis-0 shrink-0 flex relative flex-col justify-start items-start content-start self-stretch grow gap-[0.3125rem] pointer-events-none max-lg:hidden">
                              <div className="w-[6.275rem] flex relative justify-start items-center content-center shrink-0 gap-1 pointer-events-none max-lg:hidden">
                                <div className="w-[6.275rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap pointer-events-none max-lg:hidden">
                                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.2px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07'] pointer-events-none max-lg:hidden" dir="auto">
                                    Copy logo SVG
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="w-38.5 h-11 block relative inset-0 shrink-0 cursor-pointer pointer-events-none max-lg:w-5 max-lg:h-0.5 max-lg:absolute max-lg:top-[1.65rem] max-lg:left-5.5 max-lg:rounded-[10px] max-lg:overflow-hidden max-lg:bg-color-002 max-lg:right-auto max-lg:bottom-auto max-lg:[cursor:inherit] max-lg:[pointer-events:initial]">
                          <a className="w-38.5 h-11 flex relative p-[0.9375rem] rounded-lg justify-start items-start content-start gap-2.5 text-primary bg-clr-0 pointer-events-none max-lg:hidden" data-component="link" href="/brand">
                            <div className="basis-0 shrink-0 flex relative flex-col justify-start items-start content-start self-stretch grow gap-[0.3125rem] pointer-events-none max-lg:hidden">
                              <div className="w-[6.6125rem] flex relative justify-start items-center content-center shrink-0 gap-1 pointer-events-none max-lg:hidden">
                                <div className="w-[6.6125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap pointer-events-none max-lg:hidden">
                                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.2px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07'] pointer-events-none max-lg:hidden" dir="auto">
                                    Brand guidelines
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 shrink-0 overflow-clip bg-foreground" />
              </nav>
            </div>
          </div>
          <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center bg-foreground">
            <div className="w-full flex relative flex-col justify-start items-center content-center shrink-0 gap-2.5">
              <div className="w-full max-w-[78.0625rem] flex relative z-1 pt-30 pb-15 flex-col justify-start items-center content-center shrink-0 overflow-clip max-lg:pt-25 max-lg:pb-2.5">
                <div className="w-170 flex relative z-0 max-w-full pt-[1.5625rem] pb-10 flex-col justify-start items-center content-center shrink-0 gap-5 max-lg:w-97.5 max-lg:max-w-97.5" id="content">
                  <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-[0.3125rem]">
                    <div className="w-[1.975rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[1.25rem] tracking-[-0.1px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03']" dir="auto">
                        <a className="inline text-surface cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="/blog/">
                          Blog
                        </a>
                      </p>
                    </div>
                    <div className="w-[0.3125rem] flex relative opacity-50 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[1.25rem] tracking-[-0.1px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03']" dir="auto">
                        /
                      </p>
                    </div>
                    <div className="w-[4.375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[1.25rem] tracking-[-0.1px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03']" dir="auto">
                        <a className="inline cursor-pointer hover:border-clr-5 hover:text-clr-5 hover:outline-clr-5 hover:[text-decoration-color:var(--clr-5)] focus:border-color-002 focus:text-color-002 focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="link" href="/blog/inspiration">
                          Inspiration
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="w-170 flex relative flex-col justify-start shrink-0 max-lg:w-85 max-lg:order-[1]">
                    <h1 className="block text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[3.375rem] font-medium leading-13.5 tracking-[-2.16px] text-center text-balance [font-feature-settings:'ss02'] max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-component="heading" dir="auto">
                      13 best consulting website design examples
                    </h1>
                  </div>
                </div>
                <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5">
                  <div className="w-[73.5%] flex relative rounded-[20px] flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-[1.50082/1] max-lg:w-full max-lg:rounded-[initial] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-[20px] max-lg:after:rounded-tl-[initial]">
                    <div className="contents min-w-0">
                      <div className="w-full block relative z-0 rounded-[25px] shrink-0 overflow-hidden aspect-[1.49959/1] max-lg:aspect-[1.45522/1] max-lg:rounded-[initial]">
                        <div className="h-full block absolute top-0 inset-x-0 rounded-[25px] max-lg:rounded-[initial]">
                          <img className="w-full h-153.5 block rounded-[25px] overflow-clip object-cover aspect-[auto_4854/3240] max-md:h-64.5 max-lg:rounded-[initial] md:max-lg:h-132" data-component="image" alt="13 best consulting website design examples — cover image" height="3240" sizes="920px" src="/assets/cloned/images/f6a5b611d6b6.jpg" srcSet="/assets/cloned/images/3cb7b2475f2d.jpg 512w, /assets/cloned/images/e94b5f35ae3b.jpg 1024w, /assets/cloned/images/c811d4a4b8b9.jpg 2048w, /assets/cloned/images/3206e92e2ed5.jpg 4096w, /assets/cloned/images/f6a5b611d6b6.jpg 4854w" width="4854" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip max-lg:gap-2.5 max-lg:[overflow-x:initial] max-lg:[overflow-y:initial]">
              <div className="w-full max-w-162.5 flex relative py-5 justify-between items-center content-center shrink-0 overflow-clip max-lg:pt-[1.5625rem] max-lg:px-5">
                <div className="basis-0 shrink-0 flex relative justify-between items-center content-center grow max-lg:items-start max-lg:content-start">
                  <div className="w-[7.8rem] flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip max-lg:w-[7.925rem] max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:gap-12">
                    <div className="w-[7.8rem] flex relative justify-start items-start content-start shrink-0 gap-[0.9375rem] max-lg:w-[7.925rem] max-lg:flex-col max-lg:gap-2.5">
                      <a className="flex relative justify-start items-center content-center shrink-0 gap-1.5 text-primary cursor-pointer" data-component="link" href="https://x.com/jamespastan" target="_blank">
                        <div className="contents min-w-0">
                          <div className="w-5 h-5 block relative rounded-[28px] shrink-0 max-lg:w-5.5 max-lg:h-5.5 max-lg:rounded-[31px] after:content-[''] after:block after:absolute after:inset-0 after:w-5 after:h-5 after:rounded-tl-[28px] max-lg:after:w-5.5 max-lg:after:h-5.5 max-lg:after:rounded-tl-[31px]">
                            <div className="w-5 h-full block absolute top-0 rounded-[28px] max-lg:w-5.5 max-lg:rounded-[31px]">
                              <img className="w-full h-5 block rounded-[28px] overflow-clip object-cover aspect-[auto_1774/1645] max-lg:h-5.5 max-lg:rounded-[31px]" data-component="avatar" alt="James Pastan — author avatar" height="1645" sizes="20px" src="/assets/cloned/images/3afa5bc4c67b.jpg" srcSet="/assets/cloned/images/f2f396cb7ecc.jpg 512w, /assets/cloned/images/161a309f2fed.jpg 1024w, /assets/cloned/images/3afa5bc4c67b.jpg 1774w" width="1774" />
                            </div>
                          </div>
                        </div>
                        <div className="contents min-w-0">
                          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[1.25rem] tracking-[-0.1px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03']" dir="auto">
                              James Pastan
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="flex relative opacity-60 justify-end items-center content-center shrink-0 gap-2 max-lg:flex-col max-lg:items-end max-lg:content-end max-lg:gap-[0.3125rem]">
                    <div className="contents min-w-0">
                      <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-sm leading-[1.125rem] text-left [font-feature-settings:'cv11',_'ss03'] max-lg:leading-[1.0625rem] max-lg:[font-feature-settings:'cv06',_'cv11',_'ss03']" dir="auto">
                          <span className="w-16.5 h-[1.1375rem] block absolute top-0 left-0 transform-[matrix(0,0,0,0,0,0)] origin-[33px_9.10156px]">
                            {"Published "}
                          </span>
                          <time className="inline" dateTime="2025-11-20T00:00:00.000Z">
                            Nov 20, 2025
                          </time>
                        </p>
                      </div>
                    </div>
                    <div className="w-[0.1875rem] block relative rounded-[10px] shrink-0 overflow-clip aspect-square bg-color-001 max-lg:hidden" />
                    <div className="w-[4.1875rem] block relative min-w-[4.1875rem] shrink-0">
                      <div className="flex [justify-content:left] text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.42px] [font-feature-settings:'cv11'] whitespace-nowrap">
                        7 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[51%] h-px block relative shrink-0 overflow-clip max-lg:w-full max-lg:order-[1] 2xl:w-[34%] after:content-[''] after:block after:absolute after:top-0 after:-bottom-px after:inset-x-0 after:h-0.5" />
              <main className="w-full flex relative z-1 pt-10 pb-15 px-10 flex-col justify-start items-center content-center shrink-0 gap-40 max-lg:pb-10 max-lg:px-5 max-lg:order-[3] max-lg:gap-10">
                <div className="w-full max-w-162.5 flex relative pb-[2.9375rem] justify-start items-start content-start shrink-0 gap-20 max-lg:pb-12.5 max-lg:flex-col max-lg:gap-15">
                  <div className="w-162.5 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-10 max-md:w-[20.9375rem] max-lg:grow-[initial] max-lg:basis-[initial]">
                    <div className="w-162.5 flex relative flex-col justify-start shrink-0 max-md:w-[20.9375rem]">
                      <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.2px] text-left text-balance [font-feature-settings:'cv11',_'ss03'] max-lg:text-lg max-lg:leading-[1.5625rem] max-lg:tracking-[inherit]" dir="auto">
                        No matter the specifics of your service offering, any independent consultant or consulting firm needs a well-designed professional website to attract new clients. Successful consulting websites combine strong website design, clear messaging, sharp copywriting, and seamless functionality to showcase expertise and build trust. Here’s a look at some of the best consulting websites to inspire a site of your own.
                      </p>
                    </div>
                    <div className="flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]" id="article">
                      <h3 className="block pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        13 best consulting website design examples
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"Here are 13 of the best consulting website examples, chosen for how effectively they combine visual design, positioning, and storytelling to communicate expertise, build credibility, and clearly articulate the value of their services. Each example offers concrete ideas and patterns worth emulating when designing a consulting website of your own. "}
                      </p>
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Strange Pixels
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://strangepixels.co/" target="_blank">
                          Strange Pixels
                        </a>
                        {", an studio collective, consults with brands on crafting unique digital experiences. Its site, which is packed with "}
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/dictionary/motion">
                          motion
                        </a>
                        {" graphics and video, begins with an overview of the company, its values, and its expertise."}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/fa079d53e3e1.jpg" srcSet="/assets/cloned/images/2eed5bcbbbc8.jpg 512w, /assets/cloned/images/eba7df904f05.jpg 1024w, /assets/cloned/images/1ba7c4b03bfa.jpg 2048w, /assets/cloned/images/0b903a24c723.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        From there, it delves into specific services, organized into the broad categories of digital strategy, digital design, and development. Each offering is clearly outlined and presented in a way that makes the list easy to scan, helping visitors quickly understand the scope of the studio’s capabilities and how those services might apply to their own projects.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/522a620308a4.jpg" srcSet="/assets/cloned/images/160c8d3546a0.jpg 512w, /assets/cloned/images/51144c84569d.jpg 1024w, /assets/cloned/images/003710097a58.jpg 2048w, /assets/cloned/images/d23ac0ea5d46.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Video appears throughout the Framer-powered site, but it is always contained within a refined black-and-white core aesthetic. This shows that Strange Pixels can balance visual flair with restraint while advancing its clients’ brands.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/92f0f24f1360.jpg" srcSet="/assets/cloned/images/b75abf67db2f.jpg 512w, /assets/cloned/images/193d7122f92f.jpg 1024w, /assets/cloned/images/276fca1fdde1.jpg 2048w, /assets/cloned/images/af07ac68b0d1.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Cypher
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://cypher.build/" target="_blank">
                          Cypher
                        </a>
                        {" specializes in building analytics solutions for direct-to-consumer businesses. Leaning into their expertise with data, the site’s case study card design highlights hard metrics from successful projects. "}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/87bdb2fc4c5f.jpg" srcSet="/assets/cloned/images/1d8324978dca.jpg 512w, /assets/cloned/images/db95d03992ed.jpg 1024w, /assets/cloned/images/c26c64dcfb38.jpg 2048w, /assets/cloned/images/ab70c9a270f0.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Even Cypher’s FAQ page is designed using a pixelated font, subtly sending the message that computers and data are at the core of its services.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/e594e090418b.jpg" srcSet="/assets/cloned/images/a38ecf651d15.jpg 512w, /assets/cloned/images/522e8510ea65.jpg 1024w, /assets/cloned/images/07af08f224a4.jpg 2048w, /assets/cloned/images/7ba0939c4478.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        {"Haptic Studio "}
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://haptic.studio/" target="_blank">
                          Haptic Studio
                        </a>
                        {" is a design consultancy that specializes in user interface and user experience design, product strategy, and brand identity, among other disciplines, helping clients shape cohesive and thoughtful digital products."}
                      </p>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"The agency shows their point of view through their site design, with the bright orange hero punctuated by a unique animated button to book a call. "}
                      </p>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        They give ample space to client testimonials, using a looping video block that lets site visitors hear directly from clients as they share their experiences working with Haptic and reflect on the value of the collaboration.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/91c4ee2e7aa1.jpg" srcSet="/assets/cloned/images/df69b3743fb1.jpg 512w, /assets/cloned/images/7a527b32934b.jpg 1024w, /assets/cloned/images/e2cb3056562b.jpg 2048w, /assets/cloned/images/9bb9e54cdfcc.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Trifecta
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://www.trifecta.xyz/" target="_blank">
                          Trifecta
                        </a>
                        {" is a New York-based boutique growth studio that differentiates itself through a “taste-led” approach. Its site brings that editorial sensibility to life with an elegant serif typeface and navigation styling that resembles a magazine’s table of contents, reinforcing the studio’s refined point of view."}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/95cabad76991.jpg" srcSet="/assets/cloned/images/c6539e9e694c.jpg 512w, /assets/cloned/images/0a89b68748e9.jpg 1024w, /assets/cloned/images/03100409527a.jpg 2048w, /assets/cloned/images/94ee7202f36d.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Datalands
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"As an independent design and branding studio, "}
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://datalands.co/">
                          Datalands
                        </a>
                        {" specializes in taking complex concepts and fashioning them into compelling narratives and intuitive designs. Their highly interactive website serves as a showcase for what the studio can do. For instance, hovering over a menu item labeled “Data Visualization” triggers a data graphic to pop up."}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/64bdec191b6e.jpg" srcSet="/assets/cloned/images/7086ae428ed6.jpg 512w, /assets/cloned/images/d53a4fed9397.jpg 1024w, /assets/cloned/images/c1a1c68d6db8.jpg 2048w, /assets/cloned/images/49968539a03a.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        In another part of the site, interactive HTML5 elements let you see graphic-rich success stories from past clients, showing how Datalands addressed pain points and improved operations.
                      </p>
                      <img className="w-162.5 h-93.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1990] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="995" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/97ca6ec86bac.jpg" srcSet="/assets/cloned/images/175af67069fa.jpg 512w, /assets/cloned/images/6792d0051411.jpg 1024w, /assets/cloned/images/c493844007d8.jpg 2048w, /assets/cloned/images/275d78677024.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Ebb
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://ebbscandinavia.com/" target="_blank">
                          Ebb
                        </a>
                        {" is a Scandinavian agency that brands itself as a transformation studio, uniting business goals with creative endeavors to help clients navigate change and achieve lasting success. Its homepage introduces ten distinct “journeys” the studio offers, ranging from “expansion” and “pivot” to “turnaround,” with each path brought to life through its own animated graphic."}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/e764044f5171.jpg" srcSet="/assets/cloned/images/8f28c317829b.jpg 512w, /assets/cloned/images/920fb2a3d0d4.jpg 1024w, /assets/cloned/images/28b7bd2495db.jpg 2048w, /assets/cloned/images/db6d79726c3b.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        There’s also a page dedicated to Ebb’s organizational values, which they illustrate with custom posters, underscoring their commitment to each of them.
                      </p>
                      <img className="w-162.5 h-93.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3454/1990] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="995" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/ace783c3774f.jpg" srcSet="/assets/cloned/images/a85612ddff9f.jpg 512w, /assets/cloned/images/c4ca6089ab87.jpg 1024w, /assets/cloned/images/72cce4ca1022.jpg 2048w, /assets/cloned/images/e1ebd5da06d2.jpg 3454w" width="1727" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        FLOC*
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://wearefloc.com/" target="_blank">
                          FLOC*
                        </a>
                        {" is a digital brand strategy collective. Its site establishes a four-color palette—green, blue, red, and white—against a stark black background. Visually, it parallels the four core services they offer: strategy, branding, digital product, and motion design."}
                      </p>
                      <img className="w-162.5 h-93.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1988] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="994" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/c35451694e23.jpg" srcSet="/assets/cloned/images/f899163bbadc.jpg 512w, /assets/cloned/images/17abde45743f.jpg 1024w, /assets/cloned/images/09d02c711017.jpg 2048w, /assets/cloned/images/9a3c48e659b7.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Click on the “Work” tab, and the color scheme changes to reflect the branding of FLOC* clients, making the work samples jump off the page.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/e9d0a83516f2.jpg" srcSet="/assets/cloned/images/54079574a436.jpg 512w, /assets/cloned/images/37b2d1322030.jpg 1024w, /assets/cloned/images/95cb0bc94eaf.jpg 2048w, /assets/cloned/images/5a55d4a6dfb4.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Strange Wolf
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"The website for "}
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://strangewolfstudios.com/" target="_blank">
                          Strange Wolf
                        </a>
                        {", designer and illustrator Danielle McCray’s personal consulting brand, puts the focus on work samples. The homepage dedicates most of its real estate to case study cards. At the bottom, a scrolling ticker of logos shows the brands that McCray has worked with, bolstering the proof of her experience. "}
                      </p>
                      <img className="w-162.5 h-93.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3452/1986] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="993" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/afea7ff47d84.jpg" srcSet="/assets/cloned/images/9f5206924e3e.jpg 512w, /assets/cloned/images/4ddaec767a0b.jpg 1024w, /assets/cloned/images/e0bd6113a697.jpg 2048w, /assets/cloned/images/e55b7388d32e.jpg 3452w" width="1726" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Primary Studio
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://www.primary.studio/" target="_blank">
                          Primary Studio
                        </a>
                        {" describes itself as a “brand sprint agency” focused on guiding small business startups toward rapid growth. Beyond its elegant website design, the studio stands out for its transparency around pricing, clearly presenting a $75,000 flat fee and contrasting it with traditional agency pricing in a straightforward two-column table."}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/139b84eebe6d.jpg" srcSet="/assets/cloned/images/d6d177242b58.jpg 512w, /assets/cloned/images/626ef9f9908d.jpg 1024w, /assets/cloned/images/fd104d686e10.jpg 2048w, /assets/cloned/images/b05277e3bb9b.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Primary Studio also uses a personalized intake form so that new clients feel heard from the outset. This sends a message to potential customers that Primary Studio is ready to get to work on bespoke brand-centric content.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/7a3f146f6a11.jpg" srcSet="/assets/cloned/images/a8eff866371f.jpg 512w, /assets/cloned/images/2e99892872ff.jpg 1024w, /assets/cloned/images/a751140cdb62.jpg 2048w, /assets/cloned/images/9e32391178ce.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Strange Family
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://strangefamily.co/" target="_blank">
                          Strange Family
                        </a>
                        {" serves clients looking for an all-in-one branding, advertising, and digital experience consulting agency. Its website grabs visitors with an arresting digital animation of a milk carton with a “missing” notice on it. The surrealist imagery begs you to click, in an effort to decipher it, which then takes you to the “Work” page. This tactic shows that Strange Family knows how to capture visitor attention and create engagement."}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/cfc32baf744a.jpg" srcSet="/assets/cloned/images/30fccb7bae66.jpg 512w, /assets/cloned/images/5164129f8caa.jpg 1024w, /assets/cloned/images/6139be42a6de.jpg 2048w, /assets/cloned/images/c36e76a937ce.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"From the “Work” page, the site follows a more conventional flow, with detailed case studies available on various projects. "}
                      </p>
                      <img className="w-162.5 h-93.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1990] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="995" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/af7acf21a810.jpg" srcSet="/assets/cloned/images/79eb9cdc29dd.jpg 512w, /assets/cloned/images/0d36b48c1198.jpg 1024w, /assets/cloned/images/ec4fc485f518.jpg 2048w, /assets/cloned/images/b41b76aaca24.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Oakline Studio
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://oakline.studio/" target="_blank">
                          Oakline Studio
                        </a>
                        , a design and technology studio, uses a minimal, design-first homepage that focuses on strong sticker-focused visual identity and clear positioning. The page opens with a bold logo, a short tagline, and a small set of calls to action, setting the tone without heavy explanation.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3454/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/33dd77e50d03.jpg" srcSet="/assets/cloned/images/a4b2afda5135.jpg 512w, /assets/cloned/images/c9608817cc1a.jpg 1024w, /assets/cloned/images/ad3cb57ed90e.jpg 2048w, /assets/cloned/images/6e025d1e923d.jpg 3454w" width="1727" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Oakline Studio lets the work speak for itself, presenting projects with minimal context and little more than a title. The site avoids long descriptions, instead relying on strong visuals to communicate quality and craft.
                      </p>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        This stripped-back approach keeps the focus on the work and encourages exploration, while the restrained layout and typography reinforce a clear, confident studio identity.
                      </p>
                      <img className="w-162.5 h-93.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1990] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="995" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/dbdf52aa8756.jpg" srcSet="/assets/cloned/images/af8b85f5f6b2.jpg 512w, /assets/cloned/images/1b2afc82e596.jpg 1024w, /assets/cloned/images/3503bf9453dd.jpg 2048w, /assets/cloned/images/d1dcc0ee58ee.jpg 3456w" width="1728" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        Claudio Guglieri
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"As a solo practitioner, "}
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://guglieri.com/" target="_blank">
                          Claudio Guglieri
                        </a>
                        {" uses his website to articulate his philosophy as a consultant and team leader. The site offers past work as templates for future success. Claudio uses headings and text blocks to introduce himself, explain his approach, and highlight his successes."}
                      </p>
                      <img className="w-162.5 h-91.5 block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[2880/1622] max-md:w-[20.9375rem] max-md:h-[11.8125rem]" data-component="image" alt="" height="811" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/759e118ca59d.png" srcSet="/assets/cloned/images/1fe5bfed2dc0.png 512w, /assets/cloned/images/78c28f3d2459.png 1024w, /assets/cloned/images/df78387a7297.png 2048w, /assets/cloned/images/7c8c5aeb05a9.png 2880w" width="1440" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Elsewhere on the site, he establishes himself among the thought leaders in his industry, highlighting his experience giving talks—many of which are available as webinars in video podcast form.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3450/1988] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="994" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/f7f246535bea.jpg" srcSet="/assets/cloned/images/6b5947efa258.jpg 512w, /assets/cloned/images/a31a96d81d4c.jpg 1024w, /assets/cloned/images/4d4552218d0a.jpg 2048w, /assets/cloned/images/6535768ec790.jpg 3450w" width="1725" />
                      <h3 className="block mt-10 pb-[0.3125rem] text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-1.04px] text-balance" data-component="heading" dir="auto">
                        A Present Force
                      </h3>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="https://apresentforce.com/" target="_blank">
                          A Present Force
                        </a>
                        {" distinguishes itself as a female-founded studio and further uses a bright color scheme to stand out. "}
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3456/1994] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="997" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/5c5003eecfa5.jpg" srcSet="/assets/cloned/images/d45c077c3fbc.jpg 512w, /assets/cloned/images/6c7e94203dc8.jpg 1024w, /assets/cloned/images/dd7816da2b94.jpg 2048w, /assets/cloned/images/33f99f331603.jpg 3456w" width="1728" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        The color scheme changes when a user clicks the “About” tab, becoming bronze-tinted amid text describing founder Meredith Hattam, who now leads A Present Force from Berlin.
                      </p>
                      <img className="w-162.5 h-[23.4375rem] block max-w-full mt-5 rounded-[15px] overflow-clip aspect-[3452/1992] max-md:w-[20.9375rem] max-md:h-[12.0625rem]" data-component="image" alt="" height="996" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/b744156479c3.jpg" srcSet="/assets/cloned/images/752b4a174bc9.jpg 512w, /assets/cloned/images/53a9566e5681.jpg 1024w, /assets/cloned/images/804293e5fd86.jpg 2048w, /assets/cloned/images/359eb5f3ee95.jpg 3452w" width="1726" />
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        {"The site contains a combination of fonts to break up the mix of hard data and narrative storytelling, keeping the text-heavy pages skimmable and engaging. "}
                      </p>
                      <h2 className="block mt-15 text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-4xl font-medium leading-[2.5rem] tracking-[-0.8px] text-balance" data-component="heading" dir="auto">
                        Build your consulting website with Framer
                      </h2>
                      <p className="block mt-5 text-color-003 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.8125rem] tracking-[-0.2px] text-left [font-feature-settings:'cv01',_'cv11',_'ss03'] max-lg:text-base max-lg:leading-[1.625rem]" dir="auto">
                        Want more inspiration for your consulting business’s website? Browse Framer’s
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/">
                          {" "}
                        </a>
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/marketplace/templates/category/consulting/">
                          Marketplace of consulting templates
                        </a>
                        {" to see what’s possible. Build for yourself or your firm with no need for engineering support. Plus, Framer optimizes sites for "}
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/help/articles/guide-to-seo-features-and-tools/">
                          excellent SEO
                        </a>
                        {" by default, offering full control over "}
                        <a className="inline text-color-002 underline cursor-pointer hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/dictionary/seo">
                          SEO
                        </a>
                        {" markup, indexing rules, redirects, and more."}
                      </p>
                    </div>
                    <div className="contents min-w-0">
                      <div className="w-full block relative shrink-0" name="Blog - CTA">
                        <div className="flex relative py-[0.9375rem] justify-center items-center content-center gap-2.5 overflow-clip max-lg:py-10" name="Blog - CTA">
                          <div className="basis-0 shrink-0 flex relative rounded-[10px] justify-center items-center content-center grow gap-2.5 overflow-clip bg-foreground max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:gap-[initial] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-[10px]">
                            <div className="w-[18.5%] block relative self-stretch shrink-0 max-lg:w-full max-lg:aspect-[2.01149/1] max-lg:[align-self:initial]" data-ditto-id="style-div">
                              <div className="h-full block absolute top-0 inset-x-0">
                                <img className="w-full h-[5.9375rem] block overflow-clip object-cover aspect-[auto_1525/1194] max-md:h-[10.4375rem] max-lg:object-[50%_0%] md:max-lg:h-[20.1875rem]" data-component="image" alt="" height="1194" sizes="121px" src="/assets/cloned/images/b8a323cc1c67.png" srcSet="/assets/cloned/images/78762ff6b8c5.png 512w, /assets/cloned/images/e07cd11517e9.png 1024w, /assets/cloned/images/b8a323cc1c67.png 1525w" width="1525" />
                              </div>
                            </div>
                            <div className="w-4/5 flex relative py-5 pr-5 justify-between items-center content-center grow shrink-0 basis-0 max-lg:w-full max-lg:pl-5 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:gap-5 max-lg:grow-[initial] max-lg:basis-[initial]">
                              <div className="w-[22.1875rem] h-[3.4375rem] min-h-[3.4375rem] flex relative flex-col justify-center self-stretch grow shrink-0 basis-0 max-md:w-[18.4375rem] max-md:h-[3.0375rem] max-lg:min-h-0 max-lg:[align-self:initial] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-152.5 md:max-lg:h-[24.3px]">
                                <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.5rem] tracking-[-0.2px] text-left text-balance [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'ss03']" dir="auto">
                                  <span className="inline-block [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-1)]" style={{ backgroundImage: "linear-gradient(270deg, var(--color-002) 0%, var(--color-002) 100%)" }}>
                                    Sign up for Framer for free and get 500 free Agent credits
                                  </span>
                                </p>
                              </div>
                              <div className="w-7.5 h-[1.3125rem] block relative shrink-0 overflow-clip max-lg:hidden" />
                              <div className="w-[7.125rem] block relative shrink-0">
                                <a className="h-8.5 flex relative py-2.5 px-3.5 rounded-[10px] justify-center items-center content-center gap-1.5 overflow-hidden text-primary bg-color-002 cursor-pointer" data-component="link" href="/signup/">
                                  <div className="w-[5.375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                                    <p className="block text-foreground [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.28px] text-center [font-feature-settings:'cv01',_'cv09',_'cv11']" dir="auto">
                                      Start for free
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-300 flex relative flex-col justify-center items-start content-start shrink-0 gap-7.5 overflow-hidden max-lg:order-[1]">
                  <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-hidden">
                    <div className="w-[11.05rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[8.925rem]">
                      <h2 className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-2xl leading-[1.9375rem] tracking-[-0.2px] [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'ss03'] max-lg:text-xl max-lg:leading-6" data-component="heading" dir="auto">
                        Related articles
                      </h2>
                    </div>
                    <div className="contents min-w-0">
                      <div className="block relative shrink-0">
                        <a className="h-[24.3px] flex relative justify-start items-center content-center gap-1.5 overflow-hidden text-primary [filter:invert(0)] cursor-pointer" data-component="link" href="/blog/">
                          <div className="w-[5.25rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <h3 className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.5rem] tracking-[-0.2px] [font-feature-settings:'cv11']" data-component="heading" dir="auto">
                              Browse all
                            </h3>
                          </div>
                          <div className="flex relative pt-px justify-start items-center content-center self-stretch shrink-0">
                            <Icon />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <section className="w-300 grid relative justify-center shrink-0 gap-5 [grid-auto-rows:minmax(0px,_1fr)] max-md:w-[20.9375rem] md:max-lg:w-182 grid-cols-1 lg:grid-cols-3">
                    {FeatureCard_data.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
                  </section>
                </div>
              </main>
            </div>
          </div>
          <div className="w-full flex relative pt-30 pb-37.5 flex-col justify-center items-center content-center shrink-0 order-[1006] gap-10 overflow-clip bg-foreground max-lg:py-20 max-lg:gap-[initial]">
            <div className="h-50 block absolute bottom-0 inset-x-0 z-2 min-w-0 shrink-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--foreground) 100%)" }} />
            <header className="w-full max-w-300 flex relative z-2 px-10 flex-col justify-center items-center content-center shrink-0 gap-[0.9375rem]">
              <div className="w-170.5 flex relative max-w-full flex-col justify-start shrink-0 max-lg:w-54">
                <h2 className="block text-color-002 [font-family:'GT_Walsheim_Medium',_'GT_Walsheim_Medium_Placeholder',_sans-serif] text-[3.375rem] font-medium leading-13.5 tracking-[-2.16px] text-center text-balance [font-feature-settings:'ss02'] max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-component="heading" dir="auto">
                  Your next idea starts here
                </h2>
              </div>
              <div className="hidden max-lg:w-[10.0875rem] max-lg:flex max-lg:relative max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5">
                <div className="hidden max-lg:w-[10.0875rem] max-lg:block max-lg:relative max-lg:shrink-0" name="Button">
                  <a className="hidden max-lg:h-8.5 max-lg:flex max-lg:relative max-lg:max-h-[2.1875rem] max-lg:py-2.5 max-lg:px-3.5 max-lg:rounded-lg max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-[0.4375rem] max-lg:text-primary max-lg:bg-color-002 max-lg:cursor-pointer" href="https://framer.com/r/signup" name="Button">
                    <div className="hidden max-lg:w-[8.3375rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                      <p className="hidden max-lg:block max-lg:text-foreground max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-[0.875rem] max-lg:tracking-[-0.28px] max-lg:text-center max-lg:[font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11']" dir="auto">
                        Get started for free
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </header>
            <div className="w-[45.5%] block relative shrink-0 max-lg:w-full max-lg:max-w-375 max-lg:aspect-[1.59184/1] 2xl:w-[30.5%]">
              <div className="w-145.5 h-[13.8125rem] flex relative inset-0 flex-col justify-center items-center content-center gap-2.5 cursor-default max-md:w-[23.4375rem] max-md:h-[16.05rem] max-lg:block max-lg:absolute max-md:-top-[1.325rem] max-lg:shrink-0 max-lg:pointer-events-none max-lg:right-auto max-lg:bottom-auto max-lg:[flex-direction:initial] max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:gap-[initial] max-lg:[cursor:inherit] md:max-lg:w-192 md:max-lg:h-[525.9px] md:max-lg:-top-[2.7125rem]" data-ditto-id="style-div-2">
                <form className="w-145.5 h-46.5 flex relative rounded-[15px] flex-col justify-start items-end content-end shrink-0 gap-2.5 overflow-hidden bg-clr-2 max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-145.5 after:h-46.5 after:rounded-tl-[15px] max-lg:after:hidden">
                  <div className="w-145.5 h-46.5 flex relative z-1 p-2.5 flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-2.5 max-lg:hidden">
                    <div className="contents relative min-w-0 max-lg:hidden">
                      <div className="w-full h-[7.8125rem] min-h-12.5 flex relative items-center grow shrink-0 basis-0 overflow-hidden max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-140.5 after:h-[7.8125rem] max-lg:after:hidden">
                        <textarea className="w-full h-[7.8125rem] min-h-12.5 flex min-w-0 flex-1 overflow-x-hidden overflow-y-auto text-color-002 [font-family:Inter] font-medium leading-[1.0625rem] whitespace-break-spaces [overflow-wrap:break-word] [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11'] cursor-text max-lg:hidden" data-ditto-id="style-textarea" data-component="textarea" name="Prompt" placeholder="Make a refined personal portfolio for a senior web engineer…" />
                      </div>
                    </div>
                    <div className="w-full h-px block relative shrink-0 overflow-clip bg-surface-2 max-lg:hidden" />
                    <div className="w-full flex relative justify-between items-center content-center shrink-0 max-lg:hidden">
                      <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5 cursor-pointer max-lg:hidden" id="undefined-ag3rkn">
                        <div className="w-[5.1875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                          <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-[1.0625rem] text-left [font-feature-settings:'cv01',_'cv09',_'tnum'] max-lg:hidden" dir="auto">
                            GPT 5.6 Terra
                          </p>
                        </div>
                        <div className="w-2 h-2 block relative shrink-0 [background-size:100%_100%] max-lg:hidden" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 8 8%22><path d=%22M 0 6 L 2.293 3.707 C 2.683 3.317 2.683 2.683 2.293 2.293 L 0 0%22 transform=%22translate(2.5 1) rotate(90 1.5 3)%22 fill=%22transparent%22 stroke-width=%221.5%22 stroke=%22var(--muted-foreground)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22></path></svg>\")" }} aria-hidden="true" />
                      </div>
                      <div className="flex relative justify-center items-center content-center shrink-0 gap-[0.3125rem] max-lg:hidden">
                        <div className="basis-full shrink-0 h-5 block relative z-1 max-lg:hidden">
                          <button className="w-5 h-5 flex relative pr-[0.5px] rounded-[5px] justify-center items-center content-center gap-2 text-center bg-clr-3 cursor-pointer max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-5 after:h-5 after:rounded-tl-[5px] max-lg:after:hidden" data-component="button">
                            <div className="basis-full shrink-0 h-5 block relative [background-size:100%_100%] max-lg:hidden" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 19.5 19.5%22><path d=%22M 4.75 9.5 L 9.043 5.207 C 9.433 4.817 10.067 4.817 10.457 5.207 L 14.75 9.5%22 fill=%22transparent%22 stroke-width=%221.5%22 stroke=%22var(--color-002)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22></path><path d=%22M 9.75 6.253 L 9.75 14.753%22 fill=%22transparent%22 stroke-width=%221.5%22 stroke=%22var(--color-002)%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22></path></svg>\")" }} aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="w-[38.0625rem] h-[1.5625rem] flex relative inset-0 z-2 justify-center items-center content-center shrink-0 gap-2.5 max-md:w-[23.4375rem] max-md:h-[16.05rem] max-lg:block max-lg:absolute max-lg:pointer-events-none max-lg:right-auto max-lg:bottom-auto max-lg:z-[initial] max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:shrink-[initial] max-lg:gap-[initial] md:max-lg:w-192 md:max-lg:h-[525.9px]">
                  <img className="hidden max-lg:w-full max-md:h-[16.0625rem] max-lg:block max-lg:overflow-clip max-lg:object-cover max-lg:object-[50%_0%] max-lg:aspect-[auto_3840/2160] max-lg:pointer-events-none md:max-lg:h-131.5" alt="Framer UI showing Pages, Layers and Assets panels titles" height="2160" sizes="min(100vw - 0px, 1500px)" src="/assets/cloned/images/527900465715.png" srcSet="/assets/cloned/images/09d363e985bb.png 512w, /assets/cloned/images/7b7a60f80d8e.png 1024w, /assets/cloned/images/e6197769b765.png 2048w, /assets/cloned/images/527900465715.png 3840w" width="3840" />
                  <div className="w-43.5 h-[1.5625rem] flex relative px-2.5 rounded-lg flex-col justify-center items-center content-center shrink-0 gap-2.5 bg-surface-2 cursor-pointer max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-43.5 after:h-[1.5625rem] after:rounded-tl-lg max-lg:after:hidden">
                    <div className="w-38.5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-[1.0625rem] text-left [font-feature-settings:'cv01',_'cv09',_'tnum'] max-lg:hidden" dir="auto">
                        Create personal portfolio
                      </p>
                    </div>
                  </div>
                  <div className="w-31 h-[1.5625rem] flex relative px-2.5 rounded-lg flex-col justify-center items-center content-center shrink-0 gap-2.5 bg-surface-2 cursor-pointer max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-31 after:h-[1.5625rem] after:rounded-tl-lg max-lg:after:hidden">
                    <div className="w-26 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-[1.0625rem] text-left [font-feature-settings:'cv01',_'cv09',_'tnum'] max-lg:hidden" dir="auto">
                        Build startup site
                      </p>
                    </div>
                  </div>
                  <div className="w-[8.8125rem] h-[1.5625rem] flex relative px-2.5 rounded-lg flex-col justify-center items-center content-center shrink-0 gap-2.5 bg-surface-2 cursor-pointer max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[8.8125rem] after:h-[1.5625rem] after:rounded-tl-lg max-lg:after:hidden">
                    <div className="w-[7.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-[1.0625rem] text-left [font-feature-settings:'cv01',_'cv09',_'tnum'] max-lg:hidden" dir="auto">
                        <code className="inline max-lg:hidden">
                          Launch landing page
                        </code>
                      </p>
                    </div>
                  </div>
                  <div className="w-35 h-[1.5625rem] flex relative px-2.5 rounded-lg flex-col justify-center items-center content-center shrink-0 gap-2.5 bg-surface-2 cursor-pointer max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-35 after:h-[1.5625rem] after:rounded-tl-lg max-lg:after:hidden">
                    <div className="w-30 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-[1.0625rem] text-left [font-feature-settings:'cv01',_'cv09',_'tnum'] max-lg:hidden" dir="auto">
                        Start company blog
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden max-lg:w-[4.1875rem] max-lg:h-full max-lg:block max-lg:absolute max-lg:top-0 max-lg:shrink-0 max-lg:pointer-events-none" data-ditto-id="style-div-3" />
                <div className="hidden max-lg:w-[3.9375rem] max-lg:h-full max-lg:block max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:shrink-0 max-lg:pointer-events-none" data-ditto-id="style-div-4" />
              </div>
            </div>
            <div className="w-[6.2375rem] block relative z-2 opacity-70 shrink-0 max-lg:hidden">
              <a className="flex relative justify-start items-center content-center gap-[0.1875rem] overflow-hidden text-primary [filter:invert(0)] cursor-pointer max-lg:hidden" data-component="link" href="https://framer.com/signup">
                <div className="w-[5.425rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] leading-[1rem] tracking-[-0.2px] text-left [font-feature-settings:'cv11'] max-lg:hidden" dir="auto">
                    Start without AI
                  </p>
                </div>
                <div className="flex relative justify-start items-center content-center self-stretch shrink-0 max-lg:hidden">
                  <Icon2 />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 order-[1008]">
            <div className="w-full max-w-310 block relative shrink-0">
              <div className="contents">
                <footer className="w-310 flex relative max-w-full p-5 flex-col justify-start items-start content-start overflow-hidden bg-foreground max-md:w-[23.4375rem] max-lg:gap-y-5.5 max-lg:pb-0 md:max-lg:w-192">
                  <div className="w-full flex relative pt-5 pb-10 justify-center items-start content-start shrink-0 gap-25 max-lg:flex-col max-lg:order-[1] max-lg:gap-10">
                    <div className="w-[4.8125rem] flex relative justify-center items-center content-center shrink-0 gap-2.5">
                      <div className="w-[4.8125rem] h-6.5 block relative shrink-0">
                        <a className="h-6.5 flex relative justify-start items-center content-center gap-2.5 text-primary cursor-pointer" data-component="link" href="/">
                          <div className="w-4 h-6 block relative shrink-0 [background-size:100%_100%]" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 16 24%22 overflow=%22visible%22><path d=%22M 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 8 16 L 8 24 L 0 16 Z%22 fill=%22var(--color-002)%22></path></svg>\")" }} aria-hidden="true" />
                          <div className="w-[3.1875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                            <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.01px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07']" dir="auto">
                              Framer
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="w-[85.5%] flex relative max-w-300 justify-start items-start content-start grow shrink-0 basis-0 max-lg:w-full max-lg:flex-col max-lg:gap-6 max-lg:grow-[initial] max-lg:basis-[initial]">
                      <div className="w-full grid relative justify-start grow shrink-0 basis-0 gap-x-10 [grid-auto-rows:minmax(0px,_1fr)] grid-cols-6 max-lg:gap-5 max-lg:grid-cols-2 max-lg:[justify-content:initial] max-lg:grow-[initial] max-lg:basis-[initial]">
                        <ul className="w-full flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-[0.3125rem] [list-style-type:none] list-outside max-lg:hidden">
                          <li className="w-14 h-5.5 list-item relative shrink-0 max-lg:hidden">
                            <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] bg-foreground cursor-default max-lg:hidden">
                              <div className="w-14 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden" lang="zxx">
                                <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[0.9375rem] tracking-[-0.15px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
                                  Product
                                </p>
                              </div>
                            </a>
                          </li>
                          {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                          <li className="w-[2.7rem] list-item relative shrink-0 max-lg:hidden">
                            <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="/design/">
                              <div className="w-[2.7rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden" lang="zxx">
                                <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
                                  Design
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="w-[105.1px] list-item relative shrink-0 max-lg:hidden">
                            <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="/collaborate/">
                              <div className="w-[76.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden" lang="zxx">
                                <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
                                  Collaborate
                                </p>
                              </div>
                              <div className="w-[1.475rem] flex relative pt-px flex-col justify-center items-center content-center shrink-0 gap-2.5 max-lg:hidden">
                                <div className="w-[1.475rem] block relative z-1 shrink-0 max-lg:hidden">
                                  <div className="flex relative p-[0.1875rem] rounded-[3px] justify-center items-center content-center gap-2.5 overflow-hidden max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[1.475rem] after:h-[0.8125rem] after:rounded-tl-[3px] max-lg:after:hidden">
                                    <div className="w-[1.1rem] flex relative z-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                      <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.4375rem] leading-[0.4375rem] tracking-[0.21px] uppercase max-lg:hidden" dir="auto">
                                        New
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                          <li className="w-[81.7px] list-item relative shrink-0 max-lg:hidden">
                            <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="/updates">
                              <div className="w-[3.3125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden" lang="zxx">
                                <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
                                  Updates
                                </p>
                              </div>
                              <div className="w-[1.475rem] flex relative pt-px flex-col justify-center items-center content-center shrink-0 gap-2.5 max-lg:hidden">
                                <div className="w-[1.475rem] block relative z-1 shrink-0 max-lg:hidden">
                                  <div className="flex relative p-[0.1875rem] rounded-[3px] justify-center items-center content-center gap-2.5 overflow-hidden max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[1.475rem] after:h-[0.8125rem] after:rounded-tl-[3px] max-lg:after:hidden">
                                    <div className="w-[1.1rem] flex relative z-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                                      <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.4375rem] leading-[0.4375rem] tracking-[0.21px] uppercase max-lg:hidden" dir="auto">
                                        New
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <ul className="w-full flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-[0.3125rem] [list-style-type:none] list-outside max-lg:hidden">
                          {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                        </ul>
                        <ul className="w-full flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-10 [list-style-type:none] list-outside max-lg:hidden">
                          <li className="flex relative flex-col justify-start items-start content-start shrink-0 gap-[0.3125rem] overflow-hidden max-lg:hidden">
                            {Tile_data.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                          </li>
                          <li className="flex relative flex-col justify-start items-start content-start shrink-0 gap-[0.3125rem] overflow-hidden max-lg:hidden">
                            {Tile_data2.map((d, i) => <Tile key={i} d={d} styles={Tile_styles2[i]} />)}
                          </li>
                        </ul>
                        <div className="w-full flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-10 max-lg:gap-y-5 max-lg:static max-lg:inset-auto max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:[align-self:initial] max-lg:shrink-[initial] max-lg:gap-x-[initial]">
                          <ul className="w-[81.5%] flex relative flex-col justify-start items-start content-start shrink-0 gap-[0.3125rem] overflow-hidden [list-style-type:none] list-outside max-lg:w-full max-lg:[align-self:start] max-lg:[overflow-x:initial] max-lg:[overflow-y:initial]">
                            <li className="w-[65.7px] h-5.5 list-item relative shrink-0 max-lg:w-14">
                              <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] bg-foreground cursor-default">
                                <div className="w-[65.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-14" lang="zxx">
                                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[0.9375rem] tracking-[-0.15px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
                                    Solutions
                                  </p>
                                </div>
                              </a>
                            </li>
                            {ListRow4_data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                            <li className="w-[2.8875rem] list-item relative shrink-0 max-lg:w-[2.7rem]" name="AI Website Builder Link Container">
                              <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer" data-component="link" href="/solutions/growth/" name="AI Website Builder Link Container">
                                <div className="w-[2.8875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[2.7rem]" lang="zxx">
                                  <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
                                    Growth
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li className="w-[50.9px] list-item relative shrink-0 max-lg:w-[105.1px]" name="AI Website Builder Link Container">
                              <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer" data-component="link" href="/solutions/builders/" name="AI Website Builder Link Container">
                                <div className="w-[50.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[76.5px]" lang="zxx">
                                  <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
                                    Builders
                                  </p>
                                </div>
                                <div className="hidden max-lg:w-[1.475rem] max-lg:flex max-lg:relative max-lg:pt-px max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5">
                                  <div className="hidden max-lg:w-[1.475rem] max-lg:block max-lg:relative max-lg:z-1 max-lg:shrink-0">
                                    <div className="hidden max-lg:flex max-lg:relative max-lg:p-[0.1875rem] max-lg:rounded-[3px] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[1.475rem] after:h-[0.8125rem] after:rounded-tl-[3px] 2xl:after:hidden">
                                      <div className="hidden max-lg:w-[1.1rem] max-lg:flex max-lg:relative max-lg:z-2 max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                                        <p className="hidden max-lg:block max-lg:text-color-002 max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-[0.4375rem] max-lg:leading-[0.4375rem] max-lg:tracking-[0.21px] max-lg:uppercase" dir="auto">
                                          New
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            {ListRow5_data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
                            <li className="w-[5.7rem] list-item relative shrink-0 max-lg:w-[81.7px]">
                              <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer" data-component="link" href="/solutions/landing-pages/">
                                <div className="w-[5.7rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[3.3125rem]" lang="zxx">
                                  <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
                                    Landing pages
                                  </p>
                                </div>
                                <div className="hidden max-lg:w-[1.475rem] max-lg:flex max-lg:relative max-lg:pt-px max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5">
                                  <div className="hidden max-lg:w-[1.475rem] max-lg:block max-lg:relative max-lg:z-1 max-lg:shrink-0">
                                    <div className="hidden max-lg:flex max-lg:relative max-lg:p-[0.1875rem] max-lg:rounded-[3px] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[1.475rem] after:h-[0.8125rem] after:rounded-tl-[3px] 2xl:after:hidden">
                                      <div className="hidden max-lg:w-[1.1rem] max-lg:flex max-lg:relative max-lg:z-2 max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                                        <p className="hidden max-lg:block max-lg:text-color-002 max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-[0.4375rem] max-lg:leading-[0.4375rem] max-lg:tracking-[0.21px] max-lg:uppercase" dir="auto">
                                          New
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            {ListRow2_data2.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles2[i]} />)}
                          </ul>
                          <div className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:[align-self:start] max-lg:shrink-0 max-lg:gap-5">
                            <ul className="hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:overflow-hidden max-lg:[list-style-type:none] max-lg:list-outside">
                              {ListRow6_data.map((d, i) => <ListRow6 key={i} d={d} styles={ListRow6_styles[i]} />)}
                            </ul>
                          </div>
                          <div className="hidden max-lg:w-[6.075rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:[align-self:start] max-lg:shrink-0 max-lg:gap-5">
                            <ul className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:[list-style-type:none] max-lg:list-outside">
                              {ListRow7_data.map((d, i) => <ListRow7 key={i} d={d} styles={ListRow7_styles[i]} />)}
                            </ul>
                            <ul className="hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:overflow-hidden max-lg:[list-style-type:none] max-lg:list-outside">
                              {ListRow8_data.map((d, i) => <ListRow8 key={i} d={d} styles={ListRow8_styles[i]} />)}
                            </ul>
                          </div>
                        </div>
                        <ul className="w-full flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-1 [list-style-type:none] list-outside max-lg:hidden">
                          <li className="w-[4.1875rem] h-5.5 list-item relative shrink-0 max-lg:hidden">
                            <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] bg-foreground cursor-default max-lg:hidden">
                              <div className="w-[4.1875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden" lang="zxx">
                                <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[0.9375rem] tracking-[-0.15px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
                                  Compare
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="flex relative flex-col justify-center items-start content-start shrink-0 gap-[0.3125rem] max-lg:hidden">
                            {Tile2_data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
                          </li>
                        </ul>
                        <div className="flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-10 max-lg:gap-y-5 max-lg:static max-lg:inset-auto max-lg:[justify-content:initial] max-lg:[align-items:initial] max-lg:[align-content:initial] max-lg:[align-self:initial] max-lg:shrink-[initial] max-lg:gap-x-[initial]">
                          <ul className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-[0.3125rem] [list-style-type:none] list-outside max-lg:[align-self:start]">
                            {ListRow9_data.map((d, i) => <ListRow9 key={i} d={d} styles={ListRow9_styles[i]} />)}
                          </ul>
                          <ul className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-[0.3125rem] overflow-hidden [list-style-type:none] list-outside max-lg:[align-self:start] max-lg:gap-1 max-lg:[overflow-x:initial] max-lg:[overflow-y:initial]">
                            <li className="w-[38.3px] h-5.5 list-item relative shrink-0 max-lg:w-[4.1875rem]">
                              <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] bg-foreground cursor-default">
                                <div className="w-[38.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[4.1875rem]" lang="zxx">
                                  <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[0.9375rem] tracking-[-0.15px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
                                    Tools
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li className="list-item relative shrink-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:content-start max-lg:gap-[0.3125rem]">
                              {Tile3_data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
                              <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="/solutions/figma-to-html/">
                                <div className="w-[6.075rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden" lang="zxx">
                                  <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
                                    Figma to HTML
                                  </p>
                                </div>
                              </a>
                            </li>
                            {ListRow10_data.map((d, i) => <ListRow10 key={i} d={d} styles={ListRow10_styles[i]} />)}
                          </ul>
                          <ul className="hidden max-lg:w-full max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:[align-self:start] max-lg:shrink-0 max-lg:gap-5 max-lg:[list-style-type:none] max-lg:list-outside">
                            <li className="hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:overflow-hidden">
                              {Tile4_data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
                            </li>
                            <li className="hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:overflow-hidden">
                              {Tile4_data2.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles2[i]} />)}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex relative py-5 justify-between items-center content-center shrink-0 max-lg:pt-4.5 max-lg:pb-5.5 max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:content-start max-lg:order-[2] max-lg:gap-3.5 after:content-[''] after:block after:absolute after:inset-0">
                    <div className="flex relative justify-start items-center content-center shrink-0 gap-[0.9375rem]">
                      <div className="w-14 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] leading-[0.9375rem] text-left [font-feature-settings:'blwf',_'cv01',_'cv03',_'cv04',_'cv06',_'cv09',_'cv11',_'ss03']" dir="auto">
                          Follow us
                        </p>
                      </div>
                      <div className="flex relative justify-start items-center content-center shrink-0 gap-2.5">
                        <a className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer" data-component="link" aria-label="Twitter / X" href="https://x.com/framer" target="_blank">
                          <div className="basis-full shrink-0 block relative aspect-square bg-color-002" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"3377373585\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 12.6 0 L 15.054 0 L 9.694 5.93 L 16 14 L 11.062 14 L 7.195 9.106 L 2.77 14 L 0.315 14 L 6.049 7.657 L 0 0 L 5.062 0 L 8.558 4.474 Z\\\" fill=\\\"var(--1f2cor3, var(--color-002))\\\" height=\\\"14px\\\" id=\\\"NiNVGZAXZ\\\" transform=\\\"translate(2 3)\\\" width=\\\"16px\\\"/></svg>\"), none" }} />
                        </a>
                        <a className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer" data-component="link" aria-label="YouTube" href="https://www.youtube.com/@Framer" target="_blank">
                          <div className="basis-full shrink-0 block relative aspect-square bg-color-002" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"2923049180\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 18 6.136 C 18 6.136 18 8.99 17.624 10.356 C 17.415 11.112 16.808 11.703 16.032 11.906 C 14.629 12.273 9 12.273 9 12.273 C 9 12.273 3.371 12.273 1.968 11.906 C 1.191 11.703 0.585 11.112 0.376 10.356 C 0 8.99 0 6.136 0 6.136 C 0 6.136 0 3.283 0.376 1.917 C 0.585 1.161 1.191 0.57 1.968 0.367 C 3.371 0 9 0 9 0 C 9 0 14.629 0 16.032 0.367 C 16.809 0.57 17.415 1.16 17.624 1.917 C 17.998 3.283 18 6.136 18 6.136 Z M 7.198 8.766 L 11.875 6.137 L 7.198 3.507 Z\\\" fill=\\\"var(--1f2cor3, var(--color-002))\\\" height=\\\"12.27272727272728px\\\" id=\\\"RwczEt8PL\\\" transform=\\\"translate(1 4)\\\" width=\\\"18px\\\"/></svg>\"), none" }} />
                        </a>
                        <a className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer" data-component="link" aria-label="Instagram" href="https://www.instagram.com/framer/" target="_blank">
                          <div className="basis-full shrink-0 block relative aspect-square bg-color-002" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"2488959386\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 4.667 C 0 2.089 2.089 0 4.667 0 L 11.333 0 C 13.911 0 16 2.089 16 4.667 L 16 11.333 C 16 13.911 13.911 16 11.333 16 L 4.667 16 C 2.089 16 0 13.911 0 11.333 Z M 11.333 3.333 C 11.322 3.817 11.574 4.268 11.991 4.513 C 12.408 4.758 12.924 4.758 13.341 4.513 C 13.758 4.269 14.01 3.817 13.999 3.334 C 13.983 2.609 13.391 2.03 12.667 2.03 C 11.942 2.03 11.35 2.609 11.333 3.333 Z M 4.667 8 C 4.667 9.841 6.16 11.334 8.001 11.333 C 9.842 11.333 11.334 9.84 11.334 7.999 C 11.334 6.158 9.841 4.666 8 4.666 C 6.159 4.666 4.666 6.159 4.667 8 Z\\\" fill=\\\"var(--1f2cor3, var(--color-002))\\\" height=\\\"16px\\\" id=\\\"xrIMYa2_6\\\" transform=\\\"translate(2 2)\\\" width=\\\"16px\\\"/></svg>\"), none" }} />
                        </a>
                        <a className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer" data-component="link" aria-label="LinkedIn" href="https://www.linkedin.com/company/framer/" target="_blank">
                          <div className="basis-full shrink-0 block relative aspect-square bg-color-002" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"3365066164\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 4 C 0 1.791 1.791 0 4 0 L 12 0 C 14.209 0 16 1.791 16 4 L 16 12 C 16 14.209 14.209 16 12 16 L 4 16 C 1.791 16 0 14.209 0 12 Z M 5.334 12.686 L 5.334 6.613 L 3.405 6.613 L 3.405 12.686 Z M 4.369 5.784 C 5.042 5.784 5.461 5.318 5.461 4.735 C 5.448 4.139 5.042 3.686 4.382 3.686 C 3.722 3.686 3.291 4.139 3.291 4.735 C 3.291 5.318 3.709 5.784 4.357 5.784 Z M 6.401 12.686 C 6.401 12.686 6.401 12.686 6.401 12.686 L 6.401 12.686 Z M 8.331 12.686 L 8.331 9.295 C 8.331 9.113 8.343 8.932 8.394 8.802 C 8.534 8.44 8.851 8.064 9.384 8.064 C 10.082 8.064 10.361 8.621 10.361 9.437 L 10.361 12.686 L 12.291 12.686 L 12.291 9.204 C 12.291 7.339 11.339 6.471 10.069 6.471 C 9.046 6.471 8.587 7.059 8.331 7.473 L 8.331 6.613 L 6.401 6.613 C 6.427 7.181 6.402 12.65 6.401 12.686 Z\\\" fill=\\\"var(--1f2cor3, var(--color-002))\\\" height=\\\"16px\\\" id=\\\"tECp9_fFZ\\\" transform=\\\"translate(2 2)\\\" width=\\\"16px\\\"/></svg>\"), none" }} />
                        </a>
                        <a className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer" data-component="link" aria-label="Threads" href="https://www.threads.com/@framer" target="_blank">
                          <div className="basis-full shrink-0 block relative aspect-square bg-color-002" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" id=\\\"2039329823\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 10.894 7.416 C 10.824 7.382 10.752 7.351 10.681 7.32 C 10.555 5.045 9.29 3.742 7.167 3.729 L 7.138 3.729 C 5.868 3.729 4.812 4.262 4.162 5.232 L 5.329 6.019 C 5.815 5.295 6.577 5.14 7.139 5.14 L 7.158 5.14 C 7.857 5.145 8.385 5.345 8.726 5.734 C 8.975 6.018 9.141 6.41 9.223 6.905 C 8.603 6.802 7.933 6.77 7.216 6.81 C 5.198 6.925 3.9 8.082 3.987 9.691 C 4.031 10.507 4.444 11.209 5.151 11.668 C 5.748 12.055 6.517 12.245 7.317 12.202 C 8.373 12.145 9.201 11.749 9.779 11.025 C 10.218 10.475 10.495 9.762 10.618 8.864 C 11.121 9.162 11.494 9.555 11.7 10.028 C 12.05 10.831 12.071 12.15 10.976 13.226 C 10.016 14.168 8.863 14.576 7.12 14.588 C 5.187 14.574 3.725 13.965 2.775 12.776 C 1.885 11.664 1.425 10.057 1.407 8 C 1.425 5.943 1.885 4.336 2.775 3.224 C 3.725 2.035 5.187 1.426 7.12 1.412 C 9.068 1.426 10.555 2.038 11.542 3.232 C 12.026 3.818 12.391 4.554 12.631 5.412 L 14 5.053 C 13.708 3.997 13.25 3.086 12.625 2.331 C 11.36 0.801 9.51 0.016 7.125 0 L 7.116 0 C 4.736 0.016 2.906 0.803 1.677 2.34 C 0.583 3.707 0.019 5.61 0 7.994 L 0 8 L 0 8.006 C 0.019 10.39 0.583 12.293 1.677 13.66 C 2.906 15.197 4.736 15.984 7.116 16 L 7.125 16 C 9.241 15.986 10.732 15.441 11.96 14.234 C 13.568 12.656 13.519 10.677 12.989 9.462 C 12.609 8.591 11.885 7.883 10.894 7.416 Z M 7.241 10.792 C 6.357 10.841 5.437 10.451 5.392 9.614 C 5.358 8.994 5.841 8.302 7.296 8.22 C 7.459 8.21 7.623 8.206 7.786 8.206 C 8.315 8.206 8.809 8.256 9.259 8.353 C 9.091 10.411 8.108 10.745 7.241 10.792 Z\\\" fill=\\\"var(--1f2cor3, var(--color-002))\\\" height=\\\"16px\\\" id=\\\"dU5p6LfRs\\\" transform=\\\"translate(3 2)\\\" width=\\\"14px\\\"/></svg>\"), none" }} />
                        </a>
                      </div>
                    </div>
                    <div className="flex relative justify-start items-center content-center shrink-0 gap-[0.9375rem] max-lg:order-[2]">
                      <div className="w-16 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] leading-[0.9375rem] [font-feature-settings:'blwf',_'cv01',_'cv03',_'cv04',_'cv06',_'cv09',_'cv11',_'ss03']" dir="auto">
                          Trusted by
                        </p>
                      </div>
                      <a className="flex relative justify-start items-center content-center shrink-0 gap-3 text-primary cursor-pointer" data-component="link" href="https://app.eu.vanta.com/framer.com/trust/ow67ujg7iav0t6qtd1o6r2" target="_blank">
                        <div className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0">
                          <div className="basis-full shrink-0 h-4.5 block relative [background-size:100%_100%]" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 18.385 18%22 overflow=%22visible%22><path d=%22M 18.385 9.009 C 18.38 13.979 14.261 18.005 9.183 18 C 4.113 17.996 0.004 13.972 0 9.007 C -0.005 4.037 4.105 0.005 9.181 0 L 9.201 0 C 14.278 0.005 18.389 4.037 18.385 9.009 Z M 12.275 13.62 L 12.561 12.564 L 12.68 12.564 C 12.765 12.563 12.851 12.563 12.937 12.565 C 13.063 12.555 13.189 12.562 13.313 12.587 C 13.226 13.025 13.118 13.458 12.986 13.885 C 13.092 13.942 13.198 13.998 13.304 14.054 C 13.535 14.175 13.763 14.295 13.984 14.427 C 14.207 14.565 14.427 14.708 14.642 14.857 C 14.734 14.92 14.826 14.982 14.918 15.043 C 18.645 11.7 18.413 6.012 14.904 2.948 C 14.311 3.404 13.666 3.79 12.981 4.098 C 13.111 4.55 13.236 4.982 13.317 5.428 L 12.554 5.428 L 12.51 5.254 C 12.48 5.136 12.45 5.021 12.419 4.906 C 12.379 4.728 12.326 4.554 12.259 4.383 C 10.27 5.073 8.099 5.072 6.111 4.38 L 5.824 5.438 L 5.447 5.438 C 5.354 5.438 5.261 5.436 5.158 5.435 L 5.051 5.433 L 5.398 4.095 C 4.714 3.788 4.071 3.402 3.481 2.945 C -0.222 6.252 -0.066 11.939 3.481 15.05 C 4.075 14.594 4.721 14.207 5.407 13.898 C 5.27 13.461 5.156 13.018 5.066 12.569 L 5.827 12.569 L 6.111 13.621 C 8.104 12.927 10.281 12.927 12.274 13.62 Z M 11.041 1.867 C 10.786 1.519 10.463 1.224 10.092 0.997 C 9.575 0.668 8.913 0.65 8.378 0.95 C 8.033 1.139 7.73 1.392 7.484 1.695 C 7.089 2.173 6.766 2.705 6.527 3.274 C 6.49 3.36 6.454 3.447 6.416 3.538 L 6.416 3.539 L 6.36 3.675 C 8.186 4.316 10.183 4.318 12.01 3.681 C 12.006 3.651 12 3.622 11.992 3.594 C 11.758 2.978 11.438 2.397 11.041 1.867 Z M 6.381 14.361 C 6.385 14.378 6.39 14.394 6.396 14.41 C 6.614 14.982 6.905 15.524 7.263 16.023 C 7.497 16.353 7.784 16.644 8.112 16.885 C 8.801 17.378 9.549 17.384 10.245 16.904 C 10.483 16.738 10.698 16.541 10.885 16.32 C 11.361 15.744 11.736 15.094 11.995 14.398 C 12.002 14.371 12.007 14.344 12.009 14.317 C 10.185 13.682 8.193 13.682 6.369 14.319 C 6.373 14.333 6.377 14.347 6.381 14.36 Z M 12.752 14.617 L 12.561 15.004 C 12.42 15.291 12.281 15.572 12.132 15.849 C 11.909 16.247 11.645 16.622 11.343 16.967 C 12.423 16.701 13.435 16.218 14.316 15.551 C 13.832 15.183 13.307 14.869 12.752 14.617 Z M 5.825 15.006 C 5.762 14.877 5.699 14.747 5.634 14.617 C 5.078 14.869 4.553 15.183 4.069 15.551 C 4.953 16.219 5.968 16.703 7.051 16.97 C 6.745 16.629 6.479 16.256 6.257 15.857 C 6.106 15.579 5.966 15.294 5.825 15.006 Z M 14.292 2.429 C 14.292 2.429 14.292 2.429 14.292 2.429 C 14.292 2.429 14.292 2.429 14.292 2.43 Z M 14.292 2.429 C 13.415 1.769 12.409 1.292 11.336 1.029 C 11.956 1.723 12.381 2.523 12.724 3.379 C 13.131 3.245 14.149 2.627 14.292 2.429 Z M 4.078 2.442 C 4.393 2.728 5.368 3.301 5.665 3.373 C 5.984 2.524 6.448 1.733 7.036 1.035 C 5.961 1.299 4.954 1.778 4.077 2.442 Z M 14.911 11.224 C 14.555 11.363 14.176 11.44 13.793 11.454 C 13.347 11.488 12.897 11.441 12.469 11.314 C 11.542 11.023 10.987 10.411 10.845 9.458 C 10.775 9.024 10.803 8.58 10.928 8.158 C 11.116 7.514 11.605 6.997 12.246 6.763 C 12.796 6.558 13.388 6.487 13.971 6.556 C 14.307 6.578 14.635 6.655 14.944 6.786 C 15.675 7.081 16.185 7.741 16.276 8.51 C 16.292 8.624 16.303 8.738 16.31 8.852 L 16.323 9.008 C 16.327 9.427 16.232 9.841 16.045 10.218 C 15.805 10.678 15.402 11.036 14.911 11.224 Z M 14.454 8.339 C 14.436 8.089 14.367 7.846 14.251 7.622 C 14.123 7.373 13.859 7.22 13.574 7.229 C 13.284 7.215 13.012 7.368 12.878 7.62 C 12.784 7.795 12.723 7.986 12.697 8.183 C 12.622 8.667 12.613 9.159 12.671 9.645 C 12.688 9.869 12.743 10.088 12.832 10.294 C 12.955 10.575 13.234 10.759 13.546 10.766 C 13.858 10.772 14.145 10.6 14.28 10.324 C 14.329 10.221 14.367 10.113 14.394 10.001 C 14.466 9.674 14.502 9.342 14.502 9.008 L 14.49 8.808 C 14.481 8.652 14.472 8.495 14.454 8.339 Z M 9.331 8.147 L 9.288 8.029 C 9.113 7.57 8.761 7.336 8.277 7.286 C 8.092 7.258 7.903 7.268 7.722 7.315 C 7.604 7.349 7.497 7.412 7.413 7.501 C 7.241 7.688 7.259 7.899 7.479 8.03 C 7.607 8.104 7.745 8.16 7.888 8.196 C 8.045 8.239 8.204 8.275 8.363 8.311 C 8.51 8.344 8.657 8.378 8.802 8.416 C 9.155 8.5 9.491 8.637 9.8 8.824 C 10.131 9.025 10.343 9.371 10.37 9.752 C 10.427 10.139 10.316 10.531 10.064 10.835 C 9.873 11.054 9.624 11.219 9.345 11.311 C 8.971 11.434 8.575 11.483 8.182 11.456 C 7.718 11.431 7.265 11.316 6.847 11.118 C 6.833 11.112 6.819 11.107 6.805 11.102 C 6.796 11.099 6.787 11.096 6.778 11.093 L 6.6 11.339 L 5.972 11.339 L 5.972 9.639 C 6.081 9.623 6.191 9.618 6.3 9.626 C 6.373 9.624 6.445 9.625 6.522 9.625 L 6.632 9.625 L 6.65 9.673 C 6.665 9.712 6.679 9.749 6.695 9.785 C 6.913 10.295 7.28 10.636 7.846 10.742 C 8.034 10.785 8.229 10.781 8.415 10.73 C 8.517 10.701 8.612 10.654 8.696 10.591 C 8.791 10.524 8.847 10.417 8.847 10.302 C 8.847 10.188 8.791 10.08 8.695 10.014 C 8.559 9.915 8.407 9.838 8.247 9.784 C 8.065 9.724 7.882 9.669 7.698 9.619 C 7.565 9.582 7.433 9.543 7.301 9.503 C 7.082 9.438 6.867 9.362 6.656 9.275 C 6.256 9.101 5.963 8.818 5.875 8.388 C 5.732 7.7 6.028 7.102 6.671 6.77 C 6.947 6.633 7.25 6.555 7.56 6.543 C 8.146 6.501 8.734 6.605 9.268 6.846 C 9.281 6.852 9.294 6.857 9.311 6.863 L 9.343 6.874 L 9.473 6.662 L 10.133 6.662 L 10.133 8.248 L 9.988 8.249 L 9.761 8.251 L 9.369 8.251 L 9.331 8.146 Z M 2.62 11.311 L 2.62 10.672 L 2.697 10.673 C 2.757 10.673 2.815 10.673 2.873 10.672 C 2.932 10.672 2.99 10.667 3.048 10.657 C 3.136 10.649 3.207 10.581 3.217 10.494 C 3.23 10.428 3.238 10.361 3.241 10.294 C 3.243 9.428 3.243 8.563 3.241 7.698 C 3.241 7.392 3.166 7.322 2.854 7.317 L 2.704 7.317 L 2.62 7.317 L 2.62 6.681 L 5.392 6.681 C 5.429 6.887 5.432 7.099 5.401 7.306 L 5.368 7.31 L 5.281 7.317 C 5.256 7.319 5.232 7.318 5.206 7.318 L 5.153 7.318 C 4.868 7.328 4.8 7.388 4.8 7.663 C 4.798 8.549 4.798 9.435 4.8 10.321 C 4.801 10.606 4.869 10.667 5.161 10.672 C 5.213 10.673 5.265 10.673 5.32 10.672 L 5.411 10.672 L 5.411 11.311 Z%22 fill=%22var(--color-002)%22></path></svg>\")" }} aria-hidden="true" />
                        </div>
                        <div className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0">
                          <div className="w-5.5 h-[1.3125rem] block relative shrink-0 [background-size:100%_100%]" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 21.449 21%22 overflow=%22visible%22><g><path d=%22M 0 10.5 C 0 4.701 4.802 0 10.725 0 C 16.648 0 21.449 4.701 21.449 10.5 C 21.449 16.299 16.648 21 10.725 21 C 4.802 21 0 16.299 0 10.5 Z%22 fill=%22var(--clr-4)%22></path><path d=%22M 6.75 12.937 L 6.197 12.937 L 6.15 12.343 C 5.936 12.762 5.454 13.03 4.871 13.03 C 3.676 13.03 2.891 12.105 2.891 10.876 C 2.891 9.648 3.676 8.711 4.925 8.711 C 5.882 8.711 6.536 9.264 6.738 10.16 L 5.799 10.201 C 5.686 9.73 5.383 9.456 4.907 9.456 C 4.164 9.456 3.819 10.067 3.819 10.876 C 3.819 11.68 4.17 12.285 4.907 12.285 C 5.454 12.285 5.763 11.942 5.835 11.435 L 4.901 11.435 L 4.901 10.783 L 6.75 10.783 Z M 8.684 8.804 C 10.052 8.804 10.819 9.549 10.819 10.876 C 10.819 12.198 10.064 12.937 8.72 12.937 L 7.228 12.937 L 7.228 8.804 Z M 8.131 12.192 L 8.684 12.192 C 9.505 12.192 9.897 11.767 9.897 10.87 C 9.897 9.974 9.505 9.549 8.684 9.549 L 8.131 9.549 Z M 12.865 8.804 C 13.876 8.804 14.488 9.316 14.488 10.154 C 14.488 10.993 13.876 11.511 12.865 11.511 L 12.08 11.511 L 12.08 12.937 L 11.176 12.937 L 11.176 8.804 Z M 12.08 10.766 L 12.811 10.766 C 13.287 10.766 13.561 10.556 13.561 10.154 C 13.561 9.753 13.287 9.549 12.811 9.549 L 12.08 9.549 Z M 16.777 8.804 C 17.651 8.804 18.293 9.246 18.293 10.044 C 18.293 10.568 17.984 10.923 17.526 11.039 C 17.978 11.092 18.192 11.301 18.228 11.749 L 18.335 12.937 L 17.425 12.937 L 17.342 11.901 C 17.312 11.54 17.116 11.423 16.623 11.423 L 15.832 11.423 L 15.832 12.937 L 14.928 12.937 L 14.928 8.804 Z M 15.832 10.684 L 16.646 10.684 C 17.11 10.684 17.366 10.48 17.366 10.12 C 17.366 9.753 17.116 9.549 16.646 9.549 L 15.832 9.549 Z%22 fill=%22var(--color-002)%22></path><path d=%22M 10.801 1.05 L 11.115 1.583 L 11.759 1.695 L 11.309 2.136 L 11.393 2.737 L 10.801 2.477 L 10.209 2.737 L 10.294 2.136 L 9.844 1.695 L 10.488 1.583 Z M 6.971 2.175 L 7.285 2.708 L 7.928 2.819 L 7.479 3.26 L 7.563 3.862 L 6.971 3.602 L 6.38 3.862 L 6.464 3.261 L 6.013 2.82 L 6.657 2.708 Z M 3.907 4.613 L 4.221 5.146 L 4.864 5.257 L 4.414 5.698 L 4.499 6.3 L 3.907 6.04 L 3.315 6.3 L 3.399 5.698 L 2.949 5.257 L 3.593 5.146 Z M 17.696 4.613 L 18.009 5.146 L 18.653 5.257 L 18.204 5.698 L 18.288 6.3 L 17.696 6.04 L 17.104 6.3 L 17.188 5.698 L 16.738 5.257 L 17.382 5.146 Z M 14.632 2.175 L 14.945 2.708 L 15.589 2.819 L 15.139 3.26 L 15.224 3.862 L 14.632 3.602 L 14.04 3.862 L 14.124 3.261 L 13.674 2.82 L 14.318 2.708 Z M 10.801 18.112 L 11.115 18.645 L 11.759 18.757 L 11.309 19.198 L 11.393 19.8 L 10.801 19.539 L 10.209 19.8 L 10.294 19.198 L 9.844 18.757 L 10.488 18.645 Z M 6.971 16.987 L 7.285 17.52 L 7.928 17.632 L 7.479 18.073 L 7.563 18.675 L 6.971 18.415 L 6.38 18.675 L 6.464 18.073 L 6.013 17.632 L 6.657 17.52 Z M 3.907 14.55 L 4.221 15.083 L 4.864 15.195 L 4.414 15.636 L 4.499 16.237 L 3.907 15.977 L 3.315 16.237 L 3.399 15.636 L 2.949 15.195 L 3.593 15.083 Z M 17.696 14.55 L 18.009 15.083 L 18.653 15.195 L 18.204 15.636 L 18.288 16.237 L 17.696 15.977 L 17.104 16.237 L 17.188 15.636 L 16.738 15.195 L 17.382 15.083 Z M 14.632 16.987 L 14.945 17.52 L 15.589 17.632 L 15.139 18.073 L 15.224 18.675 L 14.632 18.415 L 14.04 18.675 L 14.124 18.073 L 13.674 17.632 L 14.318 17.52 Z%22 fill=%22var(--color-002)%22></path></g></svg>\")" }} aria-hidden="true" />
                        </div>
                        <div className="w-[1.6875rem] h-4.5 flex relative justify-center items-center content-center shrink-0">
                          <div className="w-[1.5625rem] h-3.5 block relative shrink-0 [background-size:100%_100%]" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 24.375 13.965%22 overflow=%22visible%22><path d=%22M 0 5.658 L 2.171 0.125 L 3.697 0.125 L 5.868 5.658 L 4.528 5.658 L 4.087 4.48 L 1.773 4.48 L 1.331 5.658 Z M 2.137 3.507 L 3.731 3.507 L 2.934 1.371 Z M 6.369 0.125 L 7.658 0.125 L 7.658 5.658 L 6.369 5.658 Z M 13.746 3.662 C 13.5 5.003 12.568 5.782 11.125 5.782 C 9.345 5.782 8.227 4.543 8.227 2.898 C 8.227 1.255 9.345 0 11.125 0 C 12.508 0 13.458 0.748 13.72 2.026 L 12.381 2.08 C 12.228 1.387 11.761 0.997 11.101 0.997 C 10.04 0.997 9.549 1.816 9.549 2.898 C 9.549 3.974 10.049 4.785 11.101 4.785 C 11.804 4.785 12.262 4.364 12.397 3.616 Z M 16.686 0.125 C 18.127 0.125 19 0.81 19 1.933 C 19 3.055 18.127 3.748 16.686 3.748 L 15.566 3.748 L 15.566 5.658 L 14.278 5.658 L 14.278 0.125 Z M 15.566 2.751 L 16.609 2.751 C 17.287 2.751 17.678 2.47 17.678 1.933 C 17.678 1.395 17.287 1.122 16.609 1.122 L 15.566 1.122 Z M 18.508 5.658 L 20.678 0.125 L 22.204 0.125 L 24.375 5.658 L 23.035 5.658 L 22.594 4.48 L 20.279 4.48 L 19.839 5.658 Z M 20.644 3.507 L 22.238 3.507 L 21.442 1.371 Z M 2.424 11.962 C 2.535 12.554 2.993 12.944 3.748 12.944 C 4.324 12.944 4.714 12.734 4.706 12.328 C 4.698 11.923 4.324 11.689 3.383 11.479 C 2.077 11.19 1.237 10.707 1.237 9.819 C 1.237 8.813 2.153 8.183 3.527 8.183 C 4.867 8.183 5.783 8.938 5.926 10.053 L 4.637 10.115 C 4.57 9.531 4.129 9.164 3.493 9.164 C 2.934 9.164 2.535 9.429 2.561 9.834 C 2.578 10.302 3.171 10.458 3.815 10.606 C 5.164 10.879 6.02 11.408 6.02 12.289 C 6.02 13.341 5.011 13.934 3.713 13.934 C 2.246 13.934 1.213 13.186 1.128 12.016 Z M 9.383 13.965 C 7.552 13.965 6.458 12.858 6.458 11.081 C 6.458 9.289 7.552 8.183 9.383 8.183 C 11.214 8.183 12.317 9.289 12.317 11.081 C 12.317 12.858 11.214 13.965 9.383 13.965 Z M 7.79 11.081 C 7.79 12.266 8.383 12.967 9.383 12.967 C 10.401 12.967 10.986 12.266 10.986 11.081 C 10.986 9.889 10.401 9.18 9.383 9.18 C 8.383 9.18 7.79 9.889 7.79 11.081 Z M 18.188 11.845 C 17.943 13.186 17.01 13.965 15.568 13.965 C 13.787 13.965 12.669 12.726 12.669 11.081 C 12.669 9.437 13.787 8.183 15.568 8.183 C 16.951 8.183 17.9 8.931 18.162 10.208 L 16.823 10.263 C 16.671 9.57 16.204 9.18 15.543 9.18 C 14.483 9.18 13.991 9.998 13.991 11.081 C 13.991 12.156 14.492 12.967 15.543 12.967 C 16.246 12.967 16.704 12.547 16.84 11.798 Z M 18.676 10.068 C 18.778 8.977 19.677 8.183 21.008 8.183 C 22.272 8.183 23.179 8.892 23.179 9.865 C 23.179 10.715 22.441 11.206 21.619 11.643 C 21.287 11.814 20.237 12.39 20.202 12.843 L 23.195 12.843 L 23.195 13.84 L 18.634 13.84 C 18.634 12.219 19.626 11.479 20.855 10.84 C 21.465 10.497 21.856 10.208 21.856 9.85 C 21.856 9.461 21.508 9.18 21.008 9.18 C 20.465 9.18 20.109 9.523 19.999 10.138 Z%22 fill=%22var(--color-002)%22></path></svg>\")" }} aria-hidden="true" />
                        </div>
                        <div className="w-4.5 h-4.5 flex relative justify-center items-center content-center shrink-0">
                          <div className="w-3.5 h-3.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-y-[0.1rem] gap-x-[0.3px]">
                            <div className="w-[0.4375rem] h-[0.6875rem] block relative shrink-0 [background-size:100%_100%]" style={{ backgroundImage: "url(data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 7.028 10.543%22 overflow=%22visible%22><path d=%22M 5.711 4.288 L 5.711 2.196 C 5.711 0.983 4.727 0 3.514 0 C 2.301 0 1.318 0.983 1.318 2.196 L 1.318 4.288 C 0.485 4.953 0 5.962 0 7.028 C 0 8.969 1.573 10.543 3.514 10.543 C 5.455 10.543 7.028 8.969 7.028 7.028 C 7.029 5.962 6.544 4.953 5.711 4.288 Z M 2.196 2.196 C 2.196 1.47 2.788 0.879 3.514 0.879 C 4.241 0.879 4.832 1.47 4.832 2.196 L 4.832 3.772 C 3.987 3.428 3.041 3.428 2.196 3.772 Z M 3.514 9.664 C 2.061 9.664 0.879 8.482 0.879 7.028 C 0.879 5.575 2.061 4.393 3.514 4.393 C 4.968 4.393 6.15 5.575 6.15 7.028 C 6.15 8.482 4.968 9.664 3.514 9.664 Z M 4.393 7.028 C 4.393 7.514 3.999 7.907 3.514 7.907 C 3.028 7.907 2.635 7.513 2.635 7.028 C 2.635 6.543 3.029 6.149 3.514 6.149 C 4 6.15 4.393 6.543 4.393 7.028 Z%22 fill=%22%23ffffff%22></path></svg>)" }} aria-hidden="true" />
                            <div className="w-[0.9375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                              <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.375rem] leading-1.5 text-left" dir="auto">
                                CCPA
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="w-30 block relative shrink-0 max-lg:order-[4]">
                      <div className="flex relative flex-col justify-start items-start content-start gap-2.5 cursor-pointer">
                        <div className="w-30 block relative shrink-0">
                          <a className="flex relative justify-start items-center content-center gap-[0.3125rem] text-primary" data-component="link" href="https://www.framerstatus.com/" target="_blank">
                            <div className="w-2 block relative rounded-[100%] shrink-0 overflow-clip aspect-square bg-accent" />
                            <div className="w-[6.6875rem] flex relative justify-center items-center content-center shrink-0 gap-1">
                              <div className="w-[6.6875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                                <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] leading-[0.9375rem] [font-feature-settings:'blwf',_'cv01',_'cv03',_'cv04',_'cv06',_'cv09',_'cv11',_'ss03']" dir="auto">
                                  All services online
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a className="flex relative justify-end items-center content-center shrink-0 gap-[0.3125rem] overflow-clip text-primary cursor-pointer max-lg:order-[3]" data-component="link" href="https://openrouter.ai/apps/framer" target="_blank">
                      <div className="w-[31.5px] block relative shrink-0">
                        <div className="flex relative flex-col justify-center items-end gap-1">
                          <div className="block min-w-[max-content] text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-4.5 tracking-[-0.12px] text-right whitespace-nowrap text-nowrap [font-feature-settings:'tnum']">
                            765B
                          </div>
                        </div>
                      </div>
                      <div className="w-[10.4375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] leading-[0.9375rem] text-left [font-feature-settings:'blwf',_'cv01',_'cv03',_'cv04',_'cv06',_'cv09',_'cv11',_'ss03']" dir="auto">
                          tokens processed this week
                        </p>
                      </div>
                    </a>
                    <div className="w-[5.7rem] block relative shrink-0 max-lg:order-[5]">
                      <div className="flex relative justify-start items-center content-center gap-[0.3125rem]">
                        <Icon3 />
                        <div className="w-[1.7rem] block relative shrink-0">
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] font-medium leading-[0.9375rem] tracking-[-0.7px] whitespace-nowrap text-nowrap [font-feature-settings:'cv01',_'cv03',_'cv04',_'cv06',_'cv09',_'cv11',_'ss03',_'ss07',_'tnum']">
                            2026
                          </p>
                        </div>
                        <div className="w-10.5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] leading-[0.9375rem] text-left [font-feature-settings:'blwf',_'cv01',_'cv03',_'cv04',_'cv06',_'cv09',_'cv11',_'ss03']" dir="auto">
                            Framer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <div className="block" id="template-overlay" />
      </div>
      {" "}
      <div className="block" id="g_id_onload" />
      {" "}
      <div className="h-0 flex fixed top-16 inset-x-0 z-99 px-5 justify-center items-center pointer-events-none" id="__framer-flap-wrapper">
        <div className="w-full max-w-350 flex justify-end items-center pointer-events-none" id="__framer-flap-container">
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <DittoMotion spec={{"waapi":[{"anchor":"motion-div","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"0.001","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.0233881","computedOffset":0.025},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.0803091","computedOffset":0.05},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.158921","computedOffset":0.075},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.249346","computedOffset":0.1},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.34419","computedOffset":0.125},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.438108","computedOffset":0.15},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.527408","computedOffset":0.175},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.609709","computedOffset":0.2},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.683645","computedOffset":0.225},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.748619","computedOffset":0.25},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.804589","computedOffset":0.275},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.851911","computedOffset":0.3},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.891196","computedOffset":0.325},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.923211","computedOffset":0.35},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.9488","computedOffset":0.375},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.968822","computedOffset":0.4},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.984112","computedOffset":0.425},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.995454","computedOffset":0.45},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00356","computedOffset":0.475},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00907","computedOffset":0.5},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01253","computedOffset":0.525},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01441","computedOffset":0.55},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01512","computedOffset":0.575},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01497","computedOffset":0.6},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01423","computedOffset":0.625},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01312","computedOffset":0.65},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01179","computedOffset":0.675},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01036","computedOffset":0.7},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00892","computedOffset":0.725},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00754","computedOffset":0.75},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00626","computedOffset":0.775},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.0051","computedOffset":0.8},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00408","computedOffset":0.825},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00319","computedOffset":0.85},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00244","computedOffset":0.875},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00181","computedOffset":0.9},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00129","computedOffset":0.925},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00088","computedOffset":0.95},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00055","computedOffset":0.975},{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":1}],"duration":400,"delay":0,"easing":"linear","iterations":1,"direction":"normal","fill":"both"},{"anchor":"motion-div-2","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"0.001","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.0233881","computedOffset":0.025},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.0803091","computedOffset":0.05},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.158921","computedOffset":0.075},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.249346","computedOffset":0.1},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.34419","computedOffset":0.125},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.438108","computedOffset":0.15},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.527408","computedOffset":0.175},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.609709","computedOffset":0.2},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.683645","computedOffset":0.225},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.748619","computedOffset":0.25},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.804589","computedOffset":0.275},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.851911","computedOffset":0.3},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.891196","computedOffset":0.325},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.923211","computedOffset":0.35},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.9488","computedOffset":0.375},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.968822","computedOffset":0.4},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.984112","computedOffset":0.425},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.995454","computedOffset":0.45},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00356","computedOffset":0.475},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00907","computedOffset":0.5},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01253","computedOffset":0.525},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01441","computedOffset":0.55},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01512","computedOffset":0.575},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01497","computedOffset":0.6},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01423","computedOffset":0.625},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01312","computedOffset":0.65},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01179","computedOffset":0.675},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.01036","computedOffset":0.7},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00892","computedOffset":0.725},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00754","computedOffset":0.75},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00626","computedOffset":0.775},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.0051","computedOffset":0.8},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00408","computedOffset":0.825},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00319","computedOffset":0.85},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00244","computedOffset":0.875},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00181","computedOffset":0.9},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00129","computedOffset":0.925},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00088","computedOffset":0.95},{"offset":null,"easing":"linear","composite":"auto","opacity":"1.00055","computedOffset":0.975},{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":1}],"duration":400,"delay":0,"easing":"linear","iterations":1,"direction":"normal","fill":"both"}],"rotators":[],"reveals":[],"marquees":[]}} />
    </>
  );
}
