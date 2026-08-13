import Accordion from "./ditto/Accordion";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import Section3 from "./sections/section3";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon28 from "./svgs/svg-icon28";
import Icon29 from "./svgs/svg-icon29";
import ListRow, { type ListRowData } from "./components/list-row";
import Icon30 from "./svgs/svg-icon30";
import Tile, { type TileData } from "./components/tile";
import Tile2, { type Tile2Data } from "./components/tile2";
import Icon31 from "./svgs/svg-icon31";
import Tile3, { type Tile3Data } from "./components/tile3";
import MediaCard, { type MediaCardData } from "./components/media-card";
import Icon32 from "./svgs/svg-icon32";
import Icon33 from "./svgs/svg-icon33";
import Tile4, { type Tile4Data } from "./components/tile4";
import Icon34 from "./svgs/svg-icon34";
import Icon35 from "./svgs/svg-icon35";
import Icon36 from "./svgs/svg-icon36";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import Icon37 from "./svgs/svg-icon37";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Logo, { type LogoData } from "./components/logo";
import { Tile_meta } from "./ditto-meta";
import { Tile_styles, Tile2_styles, MediaTile2_styles } from "./_styles";

const ListRow_data: ListRowData[] = [
    { ariaLabel: "Open Features from header", href: "#everything", label: "Features" },
    { ariaLabel: "Open Team from header", href: "/team", label: "Team" },
    { ariaLabel: "Open Pricing from header", href: "#pricing", label: "Pricing" },
    { ariaLabel: "Open Blog from header", href: "/blog", label: "Blog" }
];
const Tile_data: TileData[] = [
    { ariaLabel: "Open Code Kit checkout (Shopify header)", label: "Code Kit", label2: "10% OFF", label3: "AI Development Framework", label4: "$99", label5: "$89" },
    { ariaLabel: "Open Growth Kit checkout (Shopify header)", label: "Growth Kit", label2: "10% OFF", label3: "Sales, Marketing & Research", label4: "$99", label5: "$89" },
    { ariaLabel: "Open Complete Kit checkout (Shopify header)", label: "Complete Kit", label2: "25% OFF", label3: "Code + Growth Kits", label4: "$198", label5: "$149" },
    { ariaLabel: "Open Shopify Kit checkout (Shopify header)", label: "Shopify Kit", label2: "33% OFF", label3: "Ecom Consulting for Claude", label4: "$299", label5: "$199" },
    { ariaLabel: "Open Ultimate Kit checkout (Shopify header)", label: "Ultimate Kit", label2: "40% OFF", label3: "Complete + Shopify Kits", label4: "$497", label5: "$299" }
];
const Tile2_data: Tile2Data[] = [
    { text: "180", text2: "+", text3: "Skill files" },
    { text: "110K", text2: "+", text3: "Lines of frameworks" },
    { text: "1.5M", text2: "+", text3: "Tokens loaded" },
    { text: "20", text2: "×", text3: "Specialist roles" }
];
const Tile3_data: Tile3Data[] = [
    { ariaLabel: "Switch tab: Paid Ads (Shopify features section)", label: "Paid Ads" },
    { ariaLabel: "Switch tab: Retention (Shopify features section)", label: "Retention" },
    { ariaLabel: "Switch tab: SEO (Shopify features section)", label: "SEO" },
    { ariaLabel: "Switch tab: Operations (Shopify features section)", label: "Operations" },
    { ariaLabel: "Switch tab: Foundations (Shopify features section)", label: "Foundations" }
];
const MediaCard_data: MediaCardData[] = [
    { icon: <>
            <path d="m12 14 4-4" />
            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </>, text: "Right lever first", title: "Revenue Lever Scorecard", description: "Find which lever (customers, AOV, frequency) has the most headroom before any CRO work. Every fix ranked by revenue impact." },
    { icon: <>
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
            <path d="m9 18-1.5-1.5" />
            <circle cx="5" cy="14" r="3" />
            </>, text: "PDP playbook", title: "Product Page Wins", description: "Hero shots, gallery, variants, reviews, sticky add-to-cart. The page where 70% of conversion lift actually lives." },
    { icon: <>
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
            </>, text: "Shop Pay first", title: "Cart and Checkout", description: "Shop Pay, BNPL, express pay, free-shipping bar, post-purchase upsell. Shop Pay alone lifts mobile conversion 91%." },
    { icon: <>
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </>, text: "Ship in 2 weeks", title: "Quick Wins Sprint", description: "15 fixes that ship without testing: sticky add-to-cart, cart-recovery emails, thank-you page upsell. 2-week revenue lift." },
    { icon: <>
            <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
            <path d="M8.5 2h7" />
            <path d="M14.5 16h-5" />
            </>, text: "Tests that matter", title: "Test Prioritization", description: "Score every test by potential, importance, and ease. Set real sample sizes. Stop running tests that tell you nothing." },
    { icon: <>
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            </>, text: "Full diagnostic", title: "Full Site Audit", description: "Pages, navigation, cart, checkout, speed, mobile, trust. Every finding ranked by revenue impact, not vibes." },
    { icon: <>
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
            </>, text: "Mobile-first", title: "Mobile UX", description: "70% of Shopify traffic is mobile. Thumb-zone analysis, tap targets, one-thumb checkout. Lift mobile without touching desktop." },
    { icon: <>
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
            </>, text: "Smart triggers", title: "Popup Playbook", description: "Timing, exit intent vs scroll, discount vs curiosity, list-build vs cart recovery. Popups that add revenue, not bounce rate." },
    { icon: <>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </>, text: "Stop the waste", title: "Anti-Patterns", description: "Tests that drain hours and tell you nothing: button colors, hero rotations, badge swaps. The banned list so you stop running them." }
];
const Tile4_data: Tile4Data[] = [
    { text: "Lead Performance Media Buyer (Meta)", text2: "240h", text3: "$200/h", text4: "$48,000" },
    { text: "Google Ads & PMax Specialist", text2: "120h", text3: "$200/h", text4: "$24,000" },
    { text: "TikTok Creative & UGC Director", text2: "100h", text3: "$175/h", text4: "$17,500" }
];
const Tile4_data2: Tile4Data[] = [
    { text: "Klaviyo Retention Strategist", text2: "160h", text3: "$175/h", text4: "$28,000" },
    { text: "SMS Lifecycle Specialist", text2: "80h", text3: "$150/h", text4: "$12,000" },
    { text: "Subscription & Churn Lead", text2: "80h", text3: "$200/h", text4: "$16,000" }
];
const MediaTile_data: MediaTileData[] = [
    { icon: <>
          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
          <path d="m2.3 2.3 7.286 7.286" />
          <circle cx="11" cy="11" r="2" />
          </>, text: "Brand & Content", text2: "$42,000", text3: "Brand Voice & Direct Response Copywriter", text4: "120h", text5: "$150/h", text6: "$18,000", text7: "Product Photography & Lifestyle Director", text8: "80h", text9: "$150/h", text10: "$12,000", text11: "Short-Form Video Producer", text12: "80h", text13: "$150/h", text14: "$12,000" },
    { icon: <>
          <rect width="8" height="8" x="3" y="3" rx="2" />
          <path d="M7 11v4a2 2 0 0 0 2 2h4" />
          <rect width="8" height="8" x="13" y="13" rx="2" />
          </>, text: "Operations", text2: "$42,500", text3: "Operations Engineer (Scripts & Catalog)", text4: "200h", text5: "$125/h", text6: "$25,000", text7: "Customer Support Workflow Designer", text8: "80h", text9: "$125/h", text10: "$10,000", text11: "Returns & Logistics Analyst", text12: "60h", text13: "$125/h", text14: "$7,500" },
    { icon: <>
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
          </>, text: "Analytics & Strategy", text2: "$44,000", text3: "Pricing & Bundle Strategist", text4: "60h", text5: "$175/h", text6: "$10,500", text7: "Email Lifecycle Architect", text8: "100h", text9: "$175/h", text10: "$17,500", text11: "Analytics & Attribution Specialist", text12: "80h", text13: "$200/h", text14: "$16,000" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { text: "10 conversion-rate frameworks" },
    { text: "9 paid media playbooks" },
    { text: "4 Shopify-specific consulting plays" },
    { text: "Blog MCP access for your AI" },
    { text: "Growth Kit fundamentals tuned for ecom" },
    { text: "Pre-loaded for 2026 Shopify platform shifts" },
    { text: "No subscription — lifetime updates on v1" }
];
const Logo_data: LogoData[] = [
    { ariaLabel: "Visit x.com", href: "https://x.com/AbdoMobayad", rel: "nofollow noopener noreferrer", target: "_blank", viewBox: "4 5 20 18", icon: <>
        <path fill="currentColor" d="M19.751 5h3.067l-6.7 7.625L24 23h-6.172l-4.833-6.293L7.464 23h-3.07l7.167-8.155L4 5h6.328l4.37 5.752zm-1.076 16.172h1.7L9.404 6.732H7.58z" />
        </> },
    { ariaLabel: "Visit seoboo.st", href: "https://seoboo.st/", rel: "nofollow noopener noreferrer", target: "_blank", viewBox: "0 0 24 24", height: "24", stroke: "currentColor", width: "24", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", icon: <>
        <path d="m8 11 2 2 4-4" />
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        </> },
    { ariaLabel: "Open README", href: "/readme", viewBox: "0 0 24 24", height: "24", stroke: "currentColor", width: "24", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", icon: <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        </> }
];

export default function Page() {
  return (
    <>
      <Navbar />
      <header className="border-b border-solid border-b-color-002 hidden sticky top-0 z-30 px-4 items-center [backdrop-filter:blur(16px)] h-14 max-md:w-[23.4375rem] max-md:flex" id="nd-subnav">
        <a className="inline-flex items-center gap-2.5 font-semibold cursor-pointer max-md:flex 2xl:hidden" href="/">
          <div className="flex min-w-0 items-center gap-2 2xl:hidden">
            <img className="block min-w-0 max-w-full overflow-clip aspect-[auto_32/32] align-middle text-clr-0 w-8 h-7 2xl:hidden" alt="Claude Fast" height="32" src="/assets/cloned/svg/179df17cd24b.svg" width="32" />
            <span className="block min-w-0 text-xl font-medium leading-7 tracking-[-0.5px] whitespace-nowrap text-nowrap 2xl:hidden">
              Claude Fast
            </span>
          </div>
        </a>
        <div className="flex items-center flex-1 gap-1 2xl:hidden" />
        <button className="inline-flex p-1.5 rounded-md justify-center items-center text-sm font-medium leading-5 text-center cursor-pointer max-md:flex 2xl:hidden" aria-label="Open Search" type="button">
          <Icon2 />
        </button>
        <button className="hidden -mr-2 p-1.5 rounded-md justify-center items-center text-sm font-medium leading-5 text-center cursor-pointer max-md:flex" aria-label="Toggle Sidebar">
          <Icon3 />
        </button>
      </header>
      <HeroSection />
      <div className="w-88 h-[166.7px] block fixed top-[553.3px] left-224 z-30 max-md:w-[21.9375rem] max-md:top-[565.3px] max-md:left-0 md:max-lg:top-[777.3px] md:max-lg:left-96 2xl:w-480 2xl:h-[388.85rem] 2xl:min-h-screen 2xl:relative 2xl:inset-0 2xl:overflow-x-hidden 2xl:overflow-y-auto 2xl:text-clr-9 2xl:[font-family:sans,_'sans_Fallback'] 2xl:bg-clr-10 2xl:[background-size:auto,_auto,_auto] 2xl:[background-position:0%_0%,_0%_0%,_0%_0%] 2xl:[background-repeat:repeat,_repeat,_repeat] 2xl:[background-clip:border-box,_border-box,_border-box] 2xl:[background-origin:padding-box,_padding-box,_padding-box] 2xl:[background-attachment:scroll,_scroll,_scroll] 2xl:[background-blend-mode:normal,_normal,_normal] 2xl:[-webkit-background-clip:border-box,_border-box,_border-box] 2xl:z-[initial]" data-ditto-id="style-div">
        <div className="w-88 h-[166.7px] flex max-w-88 rounded-xl items-stretch overflow-hidden bg-clr-11 shadow-[var(--clr-5)_0px_0px_0px_0px,var(--clr-12)_0px_0px_0px_1px,var(--clr-13)_0px_10px_15px_-3px,var(--clr-13)_0px_4px_6px_-4px] [backdrop-filter:blur(12px)] cursor-pointer max-md:w-[21.9375rem] 2xl:w-480 2xl:h-[388.85rem] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:[background-size:24px_24px] 2xl:pointer-events-none 2xl:max-w-none 2xl:rounded-[initial] 2xl:[align-items:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:bg-[initial] 2xl:shadow-[initial] 2xl:[backdrop-filter:initial] 2xl:[cursor:inherit] hover:shadow-[var(--clr-5)_0px_0px_0px_0px,var(--clr-69)_0px_0px_0px_1px,var(--clr-70)_0px_19.8339px_24.8339px_-4.96678px,var(--clr-70)_0px_7.93357px_9.93357px_-5.96678px] hover:transform-[matrix(1.01967,0,0,1.01967,0,0)] focus:shadow-[var(--clr-5)_0px_0px_0px_0px,var(--clr-72)_0px_0px_0px_1px,var(--clr-13)_0px_10.1586px_15.1586px_-3.03173px,var(--clr-13)_0px_4.06346px_6.06346px_-4.03173px] focus:transform-[matrix(1.00032,0,0,1.00032,0,0)] grid-cols-2" data-ditto-id="style-open-shopify-kit-announcement" aria-label="Open Shopify Kit announcement">
          <div className="border-r border-solid border-r-clr-12 block relative shrink-0 overflow-hidden bg-clr-14 h-36 w-36 2xl:hidden">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-0 2xl:hidden" data-component="image" alt="Claude Fast Shopify Kit" sizes="144px" src="/assets/cloned/images/68f97d2287a6.png" srcSet="/assets/cloned/images/ef2e95151ba5.png 16w, /assets/cloned/images/c752558ade87.png 32w, /assets/cloned/images/ab677b35e9f7.png 48w, /assets/cloned/images/479d4e7d9785.png 64w, /assets/cloned/images/b4b5922d07c5.png 96w, /assets/cloned/images/6fa3b0b5997b.png 128w, /assets/cloned/images/9bc692c36bf6.avif 256w, /assets/cloned/images/c2c91c35402f.png 384w, /assets/cloned/images/dabb1a448632.png 640w, /assets/cloned/images/0efd46a194c1.png 750w, /assets/cloned/images/f042d4c0231b.png 828w, /assets/cloned/images/e964e37488b3.png 1080w, /assets/cloned/images/2aebcb315e4f.png 1200w, /assets/cloned/images/000a8cd51e1c.png 1920w, /assets/cloned/images/fc93997b508c.png 2048w, /assets/cloned/images/68f97d2287a6.png 3840w" />
            <div className="w-[8.9375rem] h-full block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(to right, var(--clr-0), var(--clr-15))" }} />
          </div>
          <div className="flex p-3 flex-col justify-between flex-1 2xl:hidden">
            <div className="flex mb-1 justify-between items-center gap-2 2xl:hidden">
              <span className="block text-accent text-[0.625rem] font-semibold leading-[1rem] tracking-[1.04px] uppercase 2xl:hidden">
                New
              </span>
              <button className="block p-0.5 rounded-md text-clr-16 text-center 2xl:hidden hover:bg-surface hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Dismiss Shopify Kit popup">
                <Icon28 />
              </button>
            </div>
            <div className="block flex-1 2xl:hidden">
              <p className="block mb-1 text-sm font-bold leading-[1.1875rem] 2xl:hidden">
                Shopify Kit just dropped
              </p>
              <p className="block text-muted-foreground text-[0.6875rem] leading-[1.125rem] 2xl:hidden">
                Your in-house Shopify x Claude team for Growth, CRO, Paid ads, retention, SEO, ops and Media gen.
              </p>
            </div>
            <div className="flex mt-2 items-center gap-1 text-accent text-[0.625rem] font-medium leading-[1rem] 2xl:hidden">
              <span className="block 2xl:hidden">
                Learn more
              </span>
              <Icon29 />
            </div>
          </div>
        </div>
        <header className="hidden 2xl:w-480 2xl:h-27 2xl:block 2xl:sticky 2xl:top-0 2xl:left-0 2xl:z-40 2xl:bg-clr-17 2xl:[backdrop-filter:blur(16px)]">
          <div className="hidden w-full grid-cols-[1fr_auto_1fr] 2xl:grid 2xl:max-w-332 2xl:mx-auto 2xl:p-8 2xl:items-center 2xl:gap-3">
            <a className="hidden 2xl:flex 2xl:items-center 2xl:gap-3 2xl:cursor-pointer" aria-label="Go to homepage (Shopify page)" href="/">
              <img className="hidden h-11 2xl:w-11 2xl:block 2xl:max-w-full 2xl:rounded-sm 2xl:overflow-clip 2xl:aspect-[auto_48/48] 2xl:align-middle 2xl:text-clr-0" alt="Claude Fast" height="48" src="/assets/cloned/svg/ed3a998cc65a.svg" width="48" />
              <span className="hidden 2xl:block 2xl:text-clr-18 2xl:[font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] 2xl:text-[1.5rem]" aria-hidden="true">
                ×
              </span>
              <img className="hidden h-11 2xl:w-9.5 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:aspect-[auto_48/48] 2xl:align-middle 2xl:text-clr-0" alt="Shopify" height="48" src="/assets/cloned/images/b8f6f62e7103.png" srcSet="/assets/cloned/images/9742cb6283ed.avif 1x, /assets/cloned/images/b8f6f62e7103.png 2x" width="48" />
            </a>
            <div className="hidden 2xl:flex 2xl:justify-center 2xl:items-center">
              <nav className="hidden 2xl:block">
                <ul className="hidden 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-3 2xl:[list-style-type:none] 2xl:list-outside">
                  {ListRow_data.map((d, i) => <ListRow key={i} d={d} />)}
                </ul>
              </nav>
            </div>
            <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-2 2xl:col-start-3">
              <div className="hidden 2xl:block 2xl:relative">
                <button className="hidden h-10 2xl:inline-flex 2xl:px-5 2xl:rounded-2xl 2xl:justify-center 2xl:items-center 2xl:gap-1.5 2xl:text-clr-5 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:text-center 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-19 2xl:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-20)_0px_8px_24px_-8px] 2xl:cursor-pointer" aria-expanded="false" aria-haspopup="true" aria-label="Open purchase menu (Shopify header)" type="button">
                  Get ClaudeFast
                  <Icon30 />
                </button>
                <div className="hidden">
                  <div className="hidden 2xl:flex 2xl:flex-col 2xl:gap-2 2xl:pointer-events-none">
                    {Tile_data.map((d, i) => <Tile key={i} d={d} meta={Tile_meta[i]} styles={Tile_styles[i]} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="hidden 2xl:block 2xl:relative 2xl:z-2 2xl:pt-20 2xl:pb-30 2xl:px-10" id="hero">
          <div className="hidden 2xl:block 2xl:max-w-332 2xl:mx-64">
            <div className="hidden 2xl:flex 2xl:relative 2xl:mb-12 2xl:justify-center 2xl:items-center 2xl:gap-12">
              <img className="hidden 2xl:w-40 2xl:h-40 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:aspect-[auto_160/160] 2xl:align-middle 2xl:text-clr-0 2xl:[filter:drop-shadow(var(--accent)_4px_4px_0px)] 2xl:transform-[matrix(0.997564,-0.0697565,0.0697565,0.997564,0,0)] 2xl:origin-[80px_80px]" alt="Claude" height="160" src="/assets/cloned/images/3c31845966cf.png" srcSet="/assets/cloned/images/2756c8283431.avif 1x, /assets/cloned/images/3c31845966cf.png 2x" width="160" />
              <span className="hidden 2xl:block 2xl:[font-family:'DM_Mono',_'DM_Mono_Fallback'] 2xl:text-[8.75rem] 2xl:font-semibold 2xl:leading-35 2xl:tracking-[-5.6px]">
                ×
              </span>
              <img className="hidden 2xl:w-36 2xl:h-41 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:aspect-[auto_144/144] 2xl:align-middle 2xl:text-clr-0 2xl:[filter:drop-shadow(var(--clr-25)_6px_6px_0px)] 2xl:transform-[matrix(0.997564,0.0697565,-0.0697565,0.997564,0,0)] 2xl:origin-[72px_81.8438px]" alt="Shopify" height="144" src="/assets/cloned/images/ccf5cecb1e7d.png" srcSet="/assets/cloned/images/e5a3351cffef.avif 1x, /assets/cloned/images/ccf5cecb1e7d.png 2x" width="144" />
              <div className="hidden 2xl:w-[4.5375rem] 2xl:h-8 2xl:block 2xl:absolute 2xl:-top-7 2xl:left-[14.9375rem] 2xl:min-w-0">
                <span className="hidden 2xl:border-2 2xl:border-solid 2xl:border-clr-26 2xl:inline-flex 2xl:py-2 2xl:px-3.5 2xl:rounded-full 2xl:items-center 2xl:gap-2 2xl:text-clr-5 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px] 2xl:uppercase 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-accent 2xl:shadow-[var(--clr-26)_3px_3px_0px_0px] 2xl:transform-[matrix(0.990268,-0.139173,0.139173,0.990268,0,0)] 2xl:origin-[36.3203px_16px]">
                  ★ v1.0
                </span>
              </div>
              <div className="hidden 2xl:w-[16.0875rem] 2xl:h-8 2xl:block 2xl:absolute 2xl:-top-7 2xl:right-[14.9375rem] 2xl:min-w-0">
                <span className="hidden 2xl:border-2 2xl:border-solid 2xl:border-clr-25 2xl:inline-flex 2xl:py-2 2xl:px-3.5 2xl:rounded-full 2xl:items-center 2xl:gap-2 2xl:text-clr-5 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px] 2xl:uppercase 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-19 2xl:shadow-[var(--clr-25)_3px_3px_0px_0px] 2xl:transform-[matrix(0.990268,0.139173,-0.139173,0.990268,0,0)] 2xl:origin-[128.703px_16px]">
                  Built for Shopify's AI Toolkit
                </span>
              </div>
            </div>
            <div className="hidden 2xl:block 2xl:max-w-275 2xl:mb-5 2xl:mx-28.5 2xl:text-8xl 2xl:font-semibold 2xl:leading-[6.125rem] 2xl:tracking-[-1.92px] 2xl:text-center 2xl:text-balance">
              {"The "}
              <span className="hidden 2xl:inline-block 2xl:relative 2xl:isolate 2xl:py-0.5 2xl:px-3.5 2xl:text-clr-5 before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[23.225rem] before:h-[6.375rem] before:bg-clr-19 before:transform-[matrix(0.999657,-0.0261769,0.0261769,0.999657,0,0)] before:origin-[185.781px_50.9531px] before:rounded-tl-sm max-lg:before:hidden">
                <span className="hidden 2xl:inline 2xl:relative">
                  Shopify
                </span>
              </span>
              {" kit"}
              <br className="hidden 2xl:inline" />
              <span className="hidden 2xl:inline 2xl:whitespace-nowrap 2xl:[text-wrap:nowrap_balance]">
                {"for Claude "}
                <span className="hidden 2xl:inline-flex 2xl:relative 2xl:isolate 2xl:py-0.5 2xl:px-3.5 2xl:text-clr-5">
                  <span className="hidden 2xl:w-[23.925rem] 2xl:h-[6.375rem] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:-z-1 2xl:min-w-0 2xl:rounded-sm 2xl:bg-accent 2xl:transform-[matrix(0.999657,-0.0261769,0.0261769,0.999657,0,0)] 2xl:origin-[191.398px_50.9531px]" aria-hidden="true" />
                  <span className="hidden 2xl:w-[22.175rem] 2xl:h-[6.125rem] 2xl:block 2xl:relative 2xl:overflow-hidden">
                    <span className="hidden 2xl:inline-block 2xl:relative 2xl:-z-2 2xl:px-1 2xl:text-clr-0 2xl:pointer-events-none" aria-hidden="true">
                      Cowork
                    </span>
                    <div className="hidden 2xl:w-[358.5px] 2xl:h-[293.7px] 2xl:flex 2xl:absolute 2xl:top-0 2xl:flex-col 2xl:items-start 2xl:transform-[matrix(1,0,0,1,0,-95.5225)]" aria-hidden="true">
                      <span className="hidden 2xl:block 2xl:px-1 2xl:text-left 2xl:pointer-events-none">
                        Web
                      </span>
                      <span className="hidden 2xl:block 2xl:px-1 2xl:text-left">
                        Cowork
                      </span>
                      <span className="hidden 2xl:block 2xl:px-1 2xl:text-left 2xl:pointer-events-none">
                        Code
                      </span>
                    </div>
                  </span>
                </span>
              </span>
            </div>
            <p className="hidden 2xl:block 2xl:max-w-190 2xl:mb-9 2xl:mx-71 2xl:text-clr-18 2xl:text-xl 2xl:leading-[1.9375rem] 2xl:text-center 2xl:text-pretty">
              {"Transform your Claude subscription into a "}
              <strong className="hidden 2xl:inline 2xl:text-clr-9 2xl:font-medium">
                20-person Shopify consultancy
              </strong>
              .
              <br className="hidden 2xl:inline" />
              CRO leads. Media buyers. SEOs. Strategists. Architects.
              <br className="hidden 2xl:inline" />
              For less than one hour of any of them.
            </p>
            <div className="hidden 2xl:flex 2xl:flex-wrap 2xl:justify-center 2xl:items-center 2xl:gap-3">
              <a className="hidden 2xl:h-13 2xl:flex 2xl:px-7 2xl:rounded-2xl 2xl:justify-center 2xl:items-center 2xl:gap-2 2xl:text-clr-5 2xl:text-[0.9375rem] 2xl:font-medium 2xl:leading-[0.9375rem] 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-19 2xl:shadow-[var(--clr-20)_0px_8px_24px_-8px] 2xl:cursor-pointer" aria-label="Jump to Shopify Kit pricing (hero)" href="#pricing">
                Get the kit
              </a>
              <a className="hidden 2xl:h-13 2xl:border 2xl:border-solid 2xl:border-clr-27 2xl:flex 2xl:px-5 2xl:rounded-2xl 2xl:justify-center 2xl:items-center 2xl:gap-1.5 2xl:text-sm 2xl:font-medium 2xl:leading-3.5 2xl:cursor-pointer" aria-label="Jump to Shopify Kit features" href="#everything">
                See what's inside ↗
              </a>
            </div>
            <div className="hidden 2xl:flex 2xl:mt-18 2xl:flex-wrap 2xl:justify-center 2xl:gap-12">
              {Tile2_data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
            </div>
            <div className="hidden 2xl:block 2xl:mt-14">
              <div className="hidden 2xl:border 2xl:border-dashed 2xl:border-clr-28 2xl:flex 2xl:max-w-225 2xl:mx-53.5 2xl:py-5 2xl:px-6 2xl:rounded-[14px] 2xl:flex-wrap 2xl:justify-center 2xl:items-center 2xl:gap-3.5 2xl:text-clr-18 2xl:text-sm 2xl:leading-[1.3125rem] 2xl:text-center 2xl:bg-clr-29">
                <span className="hidden 2xl:w-1.5 2xl:h-1.5 2xl:block 2xl:rounded-[50%] 2xl:bg-clr-19 2xl:shadow-[var(--clr-30)_0px_0px_0px_3px]" />
                <span className="hidden 2xl:block">
                  <strong className="hidden 2xl:inline 2xl:text-clr-9 2xl:font-medium">
                    Built for the official Shopify AI Toolkit.
                  </strong>
                  {" The only outside tool you'll ever need to install."}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden 2xl:border-t 2xl:border-dashed 2xl:border-t-clr-27 2xl:block 2xl:relative 2xl:z-2 2xl:py-20 2xl:px-10" id="everything">
          <div className="hidden 2xl:block 2xl:max-w-332 2xl:mx-64">
            <section className="hidden grid-cols-1 2xl:grid 2xl:py-28 2xl:gap-y-16 2xl:justify-items-center 2xl:col-start-2" id="shopify-everything">
              <div className="hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-8">
                <span className="hidden 2xl:border 2xl:border-solid 2xl:border-clr-24 2xl:flex 2xl:mb-5 2xl:py-1.5 2xl:px-3 2xl:rounded-full 2xl:items-center 2xl:gap-2 2xl:text-clr-19 2xl:text-xs 2xl:font-medium 2xl:leading-3 2xl:tracking-[0.96px] 2xl:uppercase 2xl:bg-clr-31 before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-clr-19 before:shadow-[var(--clr-30)_0px_0px_0px_3px] before:rounded-tl-[50%] max-lg:before:hidden">
                  Everything You Get
                </span>
                <div className="hidden 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-6">
                  <h2 className="hidden max-w-4xl 2xl:block 2xl:text-6xl 2xl:font-medium 2xl:leading-15 2xl:tracking-[-1.5px] 2xl:text-center 2xl:text-pretty">
                    {"Load your "}
                    <span className="hidden 2xl:inline-block 2xl:relative 2xl:isolate 2xl:py-0.5 2xl:px-3.5 2xl:text-clr-5 before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[232.5px] before:h-16 before:bg-clr-19 before:transform-[matrix(0.999657,-0.0261769,0.0261769,0.999657,0,0)] before:origin-[116.25px_32px] before:rounded-tl-sm max-lg:before:hidden">
                      <span className="hidden 2xl:inline 2xl:relative">
                        Shopify
                      </span>
                    </span>
                    {" Kit"}
                    <br className="hidden 2xl:inline" />
                    <span className="hidden 2xl:inline-flex 2xl:items-center 2xl:gap-2 2xl:text-clr-19">
                      {"& Just Prompt It!"}
                      <button className="hidden 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-full 2xl:justify-center 2xl:items-center 2xl:text-clr-20 2xl:cursor-pointer" aria-label="View Shopify Kit README">
                        <Icon31 />
                      </button>
                    </span>
                  </h2>
                </div>
                <div className="hidden w-full 2xl:flex 2xl:justify-center">
                  <div className="hidden 2xl:border 2xl:border-solid 2xl:border-border 2xl:flex 2xl:p-2 2xl:rounded-2xl 2xl:flex-wrap 2xl:justify-center 2xl:items-center 2xl:gap-1.5 2xl:bg-clr-32 2xl:[backdrop-filter:blur(4px)]">
                    <button className="hidden 2xl:block 2xl:relative 2xl:py-2.5 2xl:px-6 2xl:rounded-xl 2xl:text-clr-5 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:text-center 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:cursor-pointer" aria-label="Switch tab: CRO (Shopify features section)">
                      <div className="hidden 2xl:w-20 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:rounded-xl 2xl:bg-clr-19 2xl:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-33)_0px_4px_6px_-1px,var(--clr-33)_0px_2px_4px_-2px]" />
                      <span className="hidden 2xl:inline 2xl:relative 2xl:z-10">
                        CRO
                      </span>
                    </button>
                    {Tile3_data.map((d, i) => <Tile3 key={i} d={d} />)}
                  </div>
                </div>
                <p className="hidden max-w-2xl 2xl:block 2xl:text-clr-18 2xl:text-lg 2xl:leading-7 2xl:text-center">
                  Find the highest-impact lifts across PDPs, cart, and checkout. Test what matters, ship what works, skip what wastes hours.
                </p>
                <div className="hidden w-full max-w-6xl 2xl:block">
                  <div className="hidden 2xl:grid 2xl:gap-6 2xl:grid-cols-[368px_368px_368px]">
                    {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} />)}
                  </div>
                </div>
                <a className="hidden 2xl:h-11 2xl:flex 2xl:mt-6 2xl:px-5.5 2xl:rounded-2xl 2xl:justify-center 2xl:items-center 2xl:gap-2 2xl:text-clr-5 2xl:text-sm 2xl:font-medium 2xl:leading-3.5 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-19 2xl:shadow-[var(--clr-20)_0px_8px_24px_-8px] 2xl:cursor-pointer" aria-label="Jump to Shopify Kit pricing (mobile)" href="#pricing">
                  Get the Shopify Kit
                </a>
              </div>
            </section>
          </div>
        </section>
        <section className="hidden 2xl:border-t 2xl:border-dashed 2xl:border-t-clr-27 2xl:block 2xl:relative 2xl:z-2 2xl:py-20 2xl:px-10" id="receipt">
          <div className="hidden 2xl:block 2xl:max-w-332 2xl:mx-64">
            <div className="hidden 2xl:block 2xl:mb-12 2xl:text-center">
              <span className="hidden 2xl:border 2xl:border-solid 2xl:border-clr-24 2xl:inline-flex 2xl:mb-5 2xl:py-1.5 2xl:px-3 2xl:rounded-full 2xl:items-center 2xl:gap-2 2xl:text-clr-19 2xl:text-xs 2xl:font-medium 2xl:leading-3 2xl:tracking-[0.96px] 2xl:uppercase 2xl:bg-clr-31 before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-clr-19 before:shadow-[var(--clr-30)_0px_0px_0px_3px] before:rounded-tl-[50%] max-lg:before:hidden">
                Itemized comparison
              </span>
              <h2 className="hidden 2xl:block 2xl:max-w-224 2xl:mt-2 2xl:mb-8 2xl:mx-54 2xl:text-[4rem] 2xl:font-medium 2xl:leading-[4.0625rem] 2xl:tracking-[-1.6px] 2xl:text-balance">
                Hire 20 specialists.
                <br className="hidden 2xl:inline" />
                Or print this receipt.
              </h2>
            </div>
            <div className="hidden 2xl:block 2xl:relative 2xl:max-w-195 2xl:mx-68.5">
              <div className="hidden 2xl:block 2xl:relative 2xl:isolate 2xl:py-10 2xl:px-13 2xl:rounded-sm 2xl:overflow-hidden 2xl:text-clr-38 2xl:[font-family:'DM_Mono',_'DM_Mono_Fallback'] 2xl:text-[0.8125rem] 2xl:leading-[1.25rem] 2xl:shadow-[var(--clr-39)_0px_40px_80px_-20px,var(--clr-40)_0px_18px_32px_-12px,var(--clr-23)_0px_0px_0px_1px]" data-ditto-id="style-div-2">
                <div className="hidden 2xl:w-27 2xl:h-27 2xl:border-[3px] 2xl:border-double 2xl:border-clr-41 2xl:flex 2xl:absolute 2xl:top-6.5 2xl:right-7 2xl:z-5 2xl:opacity-95 2xl:rounded-[50%] 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-1 2xl:text-clr-19 2xl:text-center 2xl:uppercase 2xl:bg-clr-42 2xl:shadow-[var(--clr-43)_0px_0px_0px_2px,var(--clr-44)_0px_0px_24px_0px] 2xl:transform-[matrix(0.970296,-0.241922,0.241922,0.970296,0,0)] 2xl:origin-[54px_54px]" aria-hidden="true">
                  <span className="hidden 2xl:block 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[1.0625rem] 2xl:font-bold 2xl:leading-[1.0625rem] 2xl:tracking-[1.7px]">
                    Shipped
                  </span>
                  <span className="hidden 2xl:block 2xl:text-clr-41 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.625rem] 2xl:font-semibold 2xl:leading-2.5 2xl:tracking-[1.8px]">
                    Lifetime
                  </span>
                </div>
                <div className="hidden 2xl:flex 2xl:relative 2xl:z-1 2xl:mb-5.5 2xl:pr-32.5 2xl:flex-wrap 2xl:justify-between 2xl:items-start 2xl:gap-3.5">
                  <div className="hidden 2xl:flex 2xl:flex-col 2xl:gap-3">
                    <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-2.5">
                      <img className="hidden 2xl:w-7 2xl:h-7 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:aspect-[auto_32/32] 2xl:align-middle 2xl:text-clr-0 2xl:[filter:drop-shadow(var(--clr-45)_0px_2px_4px)]" alt="Claude" height="32" src="/assets/cloned/images/04b99b742b1e.png" srcSet="/assets/cloned/images/157ca1927c27.avif 1x, /assets/cloned/images/04b99b742b1e.png 2x" width="32" />
                      <span className="hidden 2xl:block 2xl:text-clr-46 2xl:text-lg 2xl:font-semibold 2xl:leading-4.5 2xl:tracking-[-0.72px]">
                        ×
                      </span>
                      <img className="hidden 2xl:w-[1.3125rem] 2xl:h-6 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:aspect-[auto_28/28] 2xl:align-middle 2xl:text-clr-0 2xl:[filter:drop-shadow(var(--clr-45)_0px_2px_4px)]" alt="Shopify" height="28" src="/assets/cloned/images/f718436815a3.png" srcSet="/assets/cloned/images/260d147ff181.avif 1x, /assets/cloned/images/f718436815a3.png 2x" width="28" />
                    </div>
                    <div className="hidden 2xl:flex 2xl:flex-col 2xl:gap-1">
                      <span className="hidden 2xl:block 2xl:text-clr-9 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[1.0625rem] 2xl:font-bold 2xl:leading-[1.1875rem] 2xl:tracking-[-0.17px]">
                        ClaudeFast Shopify Kit
                      </span>
                      <span className="hidden 2xl:block 2xl:text-clr-41 2xl:text-[0.625rem] 2xl:font-medium 2xl:leading-[0.8125rem] 2xl:tracking-[1.2px] 2xl:uppercase 2xl:whitespace-nowrap">
                        INVOICE · ORDER #SHK-2026/A · ANNUAL RETAINER
                      </span>
                    </div>
                  </div>
                  <div className="hidden 2xl:flex 2xl:flex-col 2xl:items-end 2xl:gap-1 2xl:text-clr-46 2xl:text-[0.6875rem] 2xl:font-medium 2xl:leading-[0.8125rem]">
                    <span className="hidden 2xl:flex 2xl:items-center 2xl:gap-1.5 2xl:text-clr-19 2xl:font-bold 2xl:tracking-[1.1px]">
                      <span className="hidden 2xl:w-[0.4375rem] 2xl:h-[0.4375rem] 2xl:block 2xl:rounded-[50%] 2xl:bg-clr-19 2xl:shadow-[var(--clr-35)_0px_0px_0px_3px,var(--clr-47)_0px_0px_8px_0px]" />
                      {" SHIPPED"}
                    </span>
                    <span className="hidden 2xl:block 2xl:whitespace-nowrap">
                      Aug 12, 2026
                    </span>
                  </div>
                </div>
                <div className="hidden 2xl:h-px 2xl:block 2xl:relative 2xl:z-1 2xl:my-4" data-ditto-id="style-div-3" aria-hidden="true" />
                <div className="hidden 2xl:flex 2xl:relative 2xl:z-1 2xl:mb-3.5 2xl:flex-wrap 2xl:justify-between 2xl:items-baseline 2xl:gap-2 2xl:text-clr-48 2xl:text-[0.625rem] 2xl:font-semibold 2xl:leading-3 2xl:tracking-[1.2px] 2xl:uppercase">
                  <span className="hidden 2xl:block">
                    Annual Engagement · 20 Specialists · 2,220h
                  </span>
                  <span className="hidden 2xl:block">
                    What you'd hire
                  </span>
                </div>
                <div className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-clr-49 2xl:grid 2xl:relative 2xl:z-1 2xl:mb-2 2xl:pb-2 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px] 2xl:text-clr-50 2xl:text-[0.625rem] 2xl:font-semibold 2xl:leading-2.5 2xl:tracking-[1.2px] 2xl:uppercase">
                  <span className="hidden 2xl:block">
                    Role
                  </span>
                  <span className="hidden 2xl:block 2xl:text-right">
                    Hrs/yr
                  </span>
                  <span className="hidden 2xl:block 2xl:text-right">
                    Rate
                  </span>
                  <span className="hidden 2xl:block 2xl:text-right">
                    Annual
                  </span>
                </div>
                <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mb-4.5">
                  <div className="hidden 2xl:border-l-[3px] 2xl:border-solid 2xl:border-l-clr-47 2xl:flex 2xl:mb-1 2xl:py-2.5 2xl:px-3 2xl:rounded-xs 2xl:items-center 2xl:gap-2.5 2xl:bg-clr-23">
                    <Icon32 />
                    <span className="hidden 2xl:block 2xl:text-clr-51 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.6875rem] 2xl:font-bold 2xl:leading-[0.6875rem] 2xl:tracking-[1.54px] 2xl:uppercase">
                      CRO Team
                    </span>
                    <span className="hidden 2xl:block 2xl:flex-1" />
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px]">
                      $61,000
                    </span>
                  </div>
                  <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
                    <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
                      Senior Shopify CRO Consultant
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      160h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      $250/h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
                      $40,000
                    </span>
                  </div>
                  <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
                    <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
                      Conversion Designer (PDP, Cart, Checkout)
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      120h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      $175/h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
                      $21,000
                    </span>
                  </div>
                </div>
                <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mb-4.5">
                  <div className="hidden 2xl:border-l-[3px] 2xl:border-solid 2xl:border-l-clr-47 2xl:flex 2xl:mb-1 2xl:py-2.5 2xl:px-3 2xl:rounded-xs 2xl:items-center 2xl:gap-2.5 2xl:bg-clr-23">
                    <Icon33 />
                    <span className="hidden 2xl:block 2xl:text-clr-51 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.6875rem] 2xl:font-bold 2xl:leading-[0.6875rem] 2xl:tracking-[1.54px] 2xl:uppercase">
                      Paid Ads Team
                    </span>
                    <span className="hidden 2xl:block 2xl:flex-1" />
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px]">
                      $89,500
                    </span>
                  </div>
                  {Tile4_data.map((d, i) => <Tile4 key={i} d={d} />)}
                </div>
                <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mb-4.5">
                  <div className="hidden 2xl:border-l-[3px] 2xl:border-solid 2xl:border-l-clr-47 2xl:flex 2xl:mb-1 2xl:py-2.5 2xl:px-3 2xl:rounded-xs 2xl:items-center 2xl:gap-2.5 2xl:bg-clr-23">
                    <Icon34 />
                    <span className="hidden 2xl:block 2xl:text-clr-51 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.6875rem] 2xl:font-bold 2xl:leading-[0.6875rem] 2xl:tracking-[1.54px] 2xl:uppercase">
                      Retention Team
                    </span>
                    <span className="hidden 2xl:block 2xl:flex-1" />
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px]">
                      $56,000
                    </span>
                  </div>
                  {Tile4_data2.map((d, i) => <Tile4 key={i} d={d} />)}
                </div>
                <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mb-4.5">
                  <div className="hidden 2xl:border-l-[3px] 2xl:border-solid 2xl:border-l-clr-47 2xl:flex 2xl:mb-1 2xl:py-2.5 2xl:px-3 2xl:rounded-xs 2xl:items-center 2xl:gap-2.5 2xl:bg-clr-23">
                    <Icon35 />
                    <span className="hidden 2xl:block 2xl:text-clr-51 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.6875rem] 2xl:font-bold 2xl:leading-[0.6875rem] 2xl:tracking-[1.54px] 2xl:uppercase">
                      SEO Team
                    </span>
                    <span className="hidden 2xl:block 2xl:flex-1" />
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px]">
                      $38,000
                    </span>
                  </div>
                  <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
                    <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
                      Performance SEO Specialist
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      120h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      $200/h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
                      $24,000
                    </span>
                  </div>
                  <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
                    <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
                      {"Schema & Technical SEO Engineer"}
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      80h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      $175/h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
                      $14,000
                    </span>
                  </div>
                </div>
                <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mb-4.5">
                  <div className="hidden 2xl:border-l-[3px] 2xl:border-solid 2xl:border-l-clr-47 2xl:flex 2xl:mb-1 2xl:py-2.5 2xl:px-3 2xl:rounded-xs 2xl:items-center 2xl:gap-2.5 2xl:bg-clr-23">
                    <Icon36 />
                    <span className="hidden 2xl:block 2xl:text-clr-51 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.6875rem] 2xl:font-bold 2xl:leading-[0.6875rem] 2xl:tracking-[1.54px] 2xl:uppercase">
                      Architecture
                    </span>
                    <span className="hidden 2xl:block 2xl:flex-1" />
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px]">
                      $30,000
                    </span>
                  </div>
                  <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
                    <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
                      {"Shopify Architecture & Migration Lead"}
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      100h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
                      $300/h
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
                      $30,000
                    </span>
                  </div>
                </div>
                {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} />)}
                <div className="hidden 2xl:h-px 2xl:block 2xl:relative 2xl:z-1 2xl:my-4" data-ditto-id="style-div-4" aria-hidden="true" />
                <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mt-2">
                  <div className="hidden 2xl:flex 2xl:py-[0.3125rem] 2xl:px-3 2xl:justify-between 2xl:items-baseline 2xl:gap-3 2xl:text-clr-52">
                    <span className="hidden 2xl:block">
                      Subtotal · 20 specialists · 2,220 hours
                    </span>
                    <span className="hidden 2xl:block">
                      $403,000
                    </span>
                  </div>
                  <div className="hidden 2xl:flex 2xl:py-[0.3125rem] 2xl:px-3 2xl:justify-between 2xl:items-baseline 2xl:gap-3 2xl:text-clr-54">
                    <span className="hidden 2xl:block">
                      Agency markup (typical 20%)
                    </span>
                    <span className="hidden 2xl:block">
                      $80,600
                    </span>
                  </div>
                  <div className="hidden 2xl:h-px 2xl:block 2xl:my-3" data-ditto-id="style-div-5" aria-hidden="true" />
                  <div className="hidden 2xl:flex 2xl:py-[0.3125rem] 2xl:px-3 2xl:justify-between 2xl:items-baseline 2xl:gap-3 2xl:text-clr-52">
                    <span className="hidden 2xl:block">
                      <strong className="hidden 2xl:inline 2xl:font-bold">
                        Annual consultancy retainer
                      </strong>
                    </span>
                    <span className="hidden 2xl:block">
                      <s className="hidden 2xl:inline 2xl:text-clr-54 2xl:font-semibold 2xl:line-through">
                        $483,600
                      </s>
                    </span>
                  </div>
                  <div className="hidden 2xl:flex 2xl:mt-1.5 2xl:py-2 2xl:px-3 2xl:rounded-[3px] 2xl:justify-between 2xl:items-baseline 2xl:gap-3 2xl:text-clr-19 2xl:font-semibold 2xl:bg-clr-29">
                    <span className="hidden 2xl:block">
                      <strong className="hidden 2xl:inline 2xl:font-black">
                        ClaudeFast Shopify Kit
                      </strong>
                      <span className="hidden 2xl:block 2xl:mt-0.5 2xl:text-clr-54 2xl:text-[0.625rem] 2xl:font-medium 2xl:leading-3.5 2xl:tracking-[0.8px] 2xl:uppercase 2xl:whitespace-nowrap">
                        Lifetime · Instant ship · v1.0
                      </span>
                    </span>
                    <span className="hidden 2xl:block">
                      $199
                    </span>
                  </div>
                  <div className="hidden 2xl:flex 2xl:py-[0.3125rem] 2xl:px-3 2xl:justify-between 2xl:items-baseline 2xl:gap-3 2xl:text-clr-19 2xl:font-semibold">
                    <span className="hidden 2xl:block">
                      Savings applied
                    </span>
                    <span className="hidden 2xl:block">
                      -$483,401
                    </span>
                  </div>
                  <div className="hidden 2xl:h-px 2xl:block 2xl:my-3" data-ditto-id="style-div-6" aria-hidden="true" />
                  <div className="hidden 2xl:border-2 2xl:border-dashed 2xl:border-clr-47 2xl:flex 2xl:mt-2 2xl:py-4.5 2xl:px-5 2xl:rounded-md 2xl:justify-between 2xl:items-center 2xl:gap-3 2xl:shadow-[var(--clr-23)_0px_0px_30px_0px_inset,var(--clr-55)_0px_0px_0px_1px]" data-ditto-id="style-div-7">
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:[font-family:sans,_'sans_Fallback'] 2xl:font-bold 2xl:leading-[0.8125rem] 2xl:tracking-[1.82px]">
                      YOUR TOTAL
                    </span>
                    <span className="hidden 2xl:block 2xl:text-clr-19 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[2.625rem] 2xl:font-bold 2xl:leading-10.5 2xl:tracking-[-0.84px] 2xl:[text-shadow:var(--clr-28)_0px_0px_24px]">
                      $199
                    </span>
                  </div>
                </div>
                <div className="hidden 2xl:flex 2xl:relative 2xl:z-1 2xl:mt-7 2xl:flex-col 2xl:items-center 2xl:gap-3.5">
                  <div className="hidden 2xl:h-9.5 2xl:flex 2xl:opacity-85 2xl:items-stretch 2xl:gap-px" aria-hidden="true">
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block" />
                    <span className="hidden 2xl:w-px 2xl:h-9.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-0.5 2xl:block 2xl:bg-clr-56" />
                    <span className="hidden 2xl:w-[0.1875rem] 2xl:block 2xl:bg-clr-56" />
                  </div>
                  <div className="hidden 2xl:block 2xl:max-w-115 2xl:text-clr-48 2xl:text-xs 2xl:leading-4.5 2xl:text-center">
                    <strong className="hidden 2xl:inline 2xl:text-clr-51 2xl:font-bold">
                      Same coverage. Same depth. Same deliverables.
                    </strong>
                    <br className="hidden 2xl:inline" />
                    Shipped instantly. Lifetime license. No retainer, no subscription, no catch.
                  </div>
                  <div className="hidden 2xl:border-t 2xl:border-dashed 2xl:border-t-clr-57 2xl:flex 2xl:mt-1 2xl:py-1.5 2xl:px-3 2xl:items-center 2xl:gap-2 2xl:text-clr-58 2xl:text-[0.625rem] 2xl:font-medium 2xl:leading-2.5 2xl:tracking-[1px] 2xl:uppercase">
                    <img className="hidden 2xl:w-5.5 2xl:h-5.5 2xl:block 2xl:opacity-85 2xl:max-w-full 2xl:rounded-sm 2xl:overflow-clip 2xl:aspect-[auto_22/22] 2xl:align-middle 2xl:text-clr-0" alt="" aria-hidden="true" height="22" src="/assets/cloned/svg/ed3a998cc65a.svg" width="22" />
                    <span className="hidden 2xl:block">
                      ClaudeFast · 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden 2xl:block 2xl:relative 2xl:z-2 2xl:py-20 2xl:px-10" id="pricing">
          <div className="hidden 2xl:block 2xl:max-w-332 2xl:mx-64">
            <div className="hidden 2xl:block 2xl:mb-12 2xl:text-center">
              <span className="hidden 2xl:border 2xl:border-solid 2xl:border-clr-24 2xl:inline-flex 2xl:mb-5 2xl:py-1.5 2xl:px-3 2xl:rounded-full 2xl:items-center 2xl:gap-2 2xl:text-clr-19 2xl:text-xs 2xl:font-medium 2xl:leading-3 2xl:tracking-[0.96px] 2xl:uppercase 2xl:bg-clr-31 before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-clr-19 before:shadow-[var(--clr-30)_0px_0px_0px_3px] before:rounded-tl-[50%] max-lg:before:hidden">
                One kit. One price.
              </span>
              <h2 className="hidden 2xl:block 2xl:mt-2 2xl:mb-3 2xl:text-[2.75rem] 2xl:font-medium 2xl:leading-[2.875rem] 2xl:tracking-[-0.88px] 2xl:text-balance">
                No subscriptions. Yours forever.
              </h2>
              <p className="hidden 2xl:block 2xl:max-w-160 2xl:mx-86 2xl:text-clr-18 2xl:text-[1.0625rem] 2xl:leading-[1.625rem] 2xl:text-pretty">
                Launch pricing while it's version 1. Use it on a single client and it's already paid for itself — twice.
              </p>
            </div>
            <div className="hidden 2xl:flex 2xl:justify-center">
              <div className="hidden max-w-lg 2xl:block 2xl:relative">
                <div className="hidden h-full 2xl:border-2 2xl:border-solid 2xl:border-clr-19 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:overflow-hidden 2xl:bg-clr-34 2xl:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-59)_0px_1px_2px_0px]">
                  <div className="hidden 2xl:block 2xl:py-6 2xl:pr-8 2xl:pl-6">
                    <div className="hidden 2xl:block 2xl:relative">
                      <button className="hidden 2xl:flex 2xl:-ml-2 2xl:py-1.5 2xl:px-3 2xl:rounded-lg 2xl:items-center 2xl:gap-2 2xl:text-center 2xl:bg-clr-60 2xl:shadow-[var(--clr-5)_0px_0px_0px_0px,var(--clr-27)_0px_0px_0px_1px,var(--clr-0)_0px_0px_0px_0px] 2xl:cursor-pointer" aria-expanded="false" aria-haspopup="true" aria-label="Switch Shopify pricing plan from Shopify Kit">
                        <h3 className="hidden 2xl:block 2xl:text-2xl 2xl:font-bold 2xl:leading-8">
                          Shopify Kit
                        </h3>
                        <Icon37 />
                      </button>
                    </div>
                    <div className="hidden 2xl:flex 2xl:mt-4 2xl:items-baseline 2xl:gap-2">
                      <span className="hidden 2xl:block 2xl:text-clr-22 2xl:text-4xl 2xl:font-bold 2xl:leading-10">
                        $199
                      </span>
                      <span className="hidden 2xl:block 2xl:text-clr-18 2xl:text-sm 2xl:leading-5 2xl:line-through">
                        $299
                      </span>
                      <span className="hidden 2xl:block 2xl:py-0.5 2xl:px-2 2xl:rounded-full 2xl:text-accent 2xl:text-xs 2xl:font-semibold 2xl:leading-4 2xl:bg-clr-21">
                        33% OFF
                      </span>
                    </div>
                    <p className="hidden 2xl:block 2xl:mt-4 2xl:text-clr-18 2xl:text-sm 2xl:leading-5">
                      The kit that turns Claude into your ecom consultant. 30+ playbooks from operators who've scaled Shopify brands. Priced like a paperback, not a retainer.
                    </p>
                    <ul className="hidden 2xl:block 2xl:my-6 2xl:[list-style-type:none] 2xl:list-outside">
                      {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} styles={MediaTile2_styles[i]} />)}
                    </ul>
                    <div className="hidden 2xl:block">
                      <button className="hidden h-11 w-full 2xl:inline-flex 2xl:px-8 2xl:rounded-2xl 2xl:justify-center 2xl:items-center 2xl:text-clr-5 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:text-center 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-19 2xl:cursor-pointer" aria-label="Open Shopify Kit checkout (Shopify pricing section)">
                        Get Shopify Kit
                      </button>
                    </div>
                    <div className="hidden 2xl:block 2xl:mt-3 2xl:text-center">
                      <span className="hidden 2xl:inline 2xl:text-clr-18 2xl:text-xs 2xl:leading-4">
                        {"Made for Claude Code · No installation · Just Drop & Prompt"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden 2xl:w-24 2xl:h-24 2xl:border-[3px] 2xl:border-solid 2xl:border-clr-26 2xl:grid 2xl:absolute 2xl:-top-5 2xl:-right-5.5 2xl:z-10 2xl:rounded-[50%] 2xl:items-center 2xl:grid-cols-[90px] 2xl:justify-items-center 2xl:text-clr-5 2xl:text-[0.8125rem] 2xl:font-bold 2xl:leading-[0.9375rem] 2xl:tracking-[0.52px] 2xl:text-center 2xl:uppercase 2xl:bg-accent 2xl:shadow-[var(--clr-26)_4px_4px_0px_0px,var(--clr-61)_0px_12px_28px_-8px] 2xl:transform-[matrix(0.978148,0.207912,-0.207912,0.978148,0,0)] 2xl:origin-[48px_48px] 2xl:pointer-events-none" aria-hidden="true">
                  LAUNCH
                  <br className="hidden 2xl:block 2xl:pointer-events-none" />
                  DROP
                  <br className="hidden 2xl:block 2xl:pointer-events-none" />
                  $199
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden 2xl:border-t 2xl:border-solid 2xl:border-t-clr-27 2xl:block">
          <footer className="hidden w-full 2xl:flex 2xl:max-w-332 2xl:mx-auto 2xl:py-20 2xl:px-6 2xl:flex-col 2xl:items-start 2xl:gap-16">
            <div className="hidden w-full 2xl:flex 2xl:justify-between 2xl:items-end 2xl:gap-32">
              <div className="hidden w-auto 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-3 max-lg:w-full">
                <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-3">
                  <a className="hidden 2xl:block 2xl:cursor-pointer" aria-label="Go to homepage" href="/">
                    <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-2">
                      <img className="hidden h-9 2xl:w-9 2xl:block 2xl:max-w-full 2xl:rounded-sm 2xl:overflow-clip 2xl:aspect-[auto_32/32] 2xl:align-middle 2xl:text-clr-0" alt="Claude Fast" height="32" src="/assets/cloned/svg/ed3a998cc65a.svg" width="32" />
                      <span className="hidden 2xl:block 2xl:text-xl 2xl:font-medium 2xl:leading-7 2xl:tracking-[-0.5px] 2xl:whitespace-nowrap 2xl:text-nowrap">
                        Claude Fast
                      </span>
                    </div>
                  </a>
                </div>
                <p className="hidden 2xl:block 2xl:ml-1 2xl:text-clr-18 2xl:text-pretty">
                  Claude Fast: AI Led Development + Growth Marketing Kits
                </p>
                <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-3">
                  <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-3">
                    {Logo_data.map((d, i) => <Logo key={i} d={d} />)}
                  </div>
                  <a className="hidden h-10 2xl:border 2xl:border-solid 2xl:border-border 2xl:flex 2xl:px-5 2xl:rounded-lg 2xl:justify-center 2xl:items-center 2xl:[font-family:sans,_'sans_Fallback',_ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-10 2xl:cursor-pointer" href="/" target="_blank">
                    {"Built with "}
                    <div className="hidden 2xl:flex 2xl:ml-1.5 2xl:items-center 2xl:gap-1.5">
                      <img className="hidden h-[1.35rem] w-[1.35rem] 2xl:block 2xl:max-w-full 2xl:shrink-0 2xl:overflow-clip 2xl:aspect-[auto_22/22] 2xl:align-middle 2xl:h-[21.59px] 2xl:w-[21.59px]" alt="Claude Fast" height="22" src="/assets/cloned/svg/179df17cd24b.svg" width="22" />
                      <span className="hidden 2xl:block">
                        ClaudeFast
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <p className="hidden w-auto 2xl:block 2xl:self-end 2xl:text-clr-18 2xl:text-right max-lg:w-full">
                © 2026 Mobayad. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
      <section className="block" aria-atomic="false" aria-label="Notifications alt+T" aria-live="polite" aria-relevant="additions text" />
      {" "}
      <div className="h-200 flex fixed top-0 inset-x-0 z-50 opacity-0 p-4 justify-center items-center bg-clr-45 pointer-events-none" aria-hidden="true">
        <Section3 />
      </div>
      <Accordion specs={[{"kind":"accordion","items":[{"trigger":"interaction-button","region":"interaction-radix-r-99laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"364px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-2","region":"interaction-radix-r-b9laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"108px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-3","region":"interaction-radix-r-d9laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"76px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-4","region":"interaction-radix-r-f9laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"44px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-5","region":"interaction-radix-r-h9laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"76px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-6","region":"interaction-radix-r-j9laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"44px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-7","region":"interaction-radix-r-l9laiulkdb","expanded":true,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"684px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}},{"trigger":"interaction-button-8","region":"interaction-radix-r-n9laiulkdb","expanded":false,"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"32px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"6px","paddingBottom":"6px","marginTop":"0px","marginBottom":"0px","color":"rgb(130, 129, 125)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"140px","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"315px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"regionHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"hidden","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(61, 57, 41)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(217, 216, 211)","borderRightColor":"rgb(217, 216, 211)","borderBottomColor":"rgb(217, 216, 211)","borderLeftColor":"rgb(217, 216, 211)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"}}]}]} />
    </>
  );
}
