import DittoWire from "./ditto/DittoWire";
import DittoMotion from "./ditto/DittoMotion";
import DropdownMenu from "./ditto/DropdownMenu";
import LogoCloudSection from "./sections/logo-cloud-section";
import CtaSection from "./sections/cta-section";
import HeroSection from "./sections/hero-section";
import LogoCloudSection2 from "./sections/logo-cloud-section2";
import CtaSection2 from "./sections/cta-section2";
import LogoCloudSection3 from "./sections/logo-cloud-section3";
import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import Icon8 from "./svgs/svg-icon8";
import Icon11 from "./svgs/svg-icon11";
import Icon12 from "./svgs/svg-icon12";
import Icon13 from "./svgs/svg-icon13";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import ListRow4, { type ListRow4Data } from "./components/list-row4";
import Icon14 from "./svgs/svg-icon14";
import ListRow5, { type ListRow5Data } from "./components/list-row5";
import Icon15 from "./svgs/svg-icon15";
import Icon16 from "./svgs/svg-icon16";
import Icon17 from "./svgs/svg-icon17";
import Icon18 from "./svgs/svg-icon18";
import Icon19 from "./svgs/svg-icon19";
import Icon20 from "./svgs/svg-icon20";
import Icon21 from "./svgs/svg-icon21";
import Icon22 from "./svgs/svg-icon22";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Icon23 from "./svgs/svg-icon23";
import Icon24 from "./svgs/svg-icon24";
import MediaTile3, { type MediaTile3Data } from "./components/media-tile3";
import ListRow6, { type ListRow6Data } from "./components/list-row6";
import ListRow7, { type ListRow7Data } from "./components/list-row7";
import Icon26 from "./svgs/svg-icon26";
import ListRow8, { type ListRow8Data } from "./components/list-row8";
import ListRow9, { type ListRow9Data } from "./components/list-row9";
import Logo2, { type Logo2Data } from "./components/logo2";
import Icon27 from "./svgs/svg-icon27";
import Tile, { type TileData } from "./components/tile";
import MediaTile5, { type MediaTile5Data } from "./components/media-tile5";
import Icon28 from "./svgs/svg-icon28";
import Icon29 from "./svgs/svg-icon29";
import Icon30 from "./svgs/svg-icon30";
import Illustration from "./svgs/svg-illustration";
import ListRow10, { type ListRow10Data } from "./components/list-row10";
import ListRow11, { type ListRow11Data } from "./components/list-row11";
import ListRow12, { type ListRow12Data } from "./components/list-row12";
import Icon31 from "./svgs/svg-icon31";
import Icon32 from "./svgs/svg-icon32";
import ListRow13, { type ListRow13Data } from "./components/list-row13";
import Icon33 from "./svgs/svg-icon33";
import ListRow14, { type ListRow14Data } from "./components/list-row14";
import Icon34 from "./svgs/svg-icon34";
import Icon35 from "./svgs/svg-icon35";
import Icon36 from "./svgs/svg-icon36";
import { ListRow4_styles, ListRow6_styles, ListRow8_styles, MediaTile5_styles, ListRow11_styles, ListRow12_styles } from "./_styles";

const ListRow2_data: ListRow2Data[] = [
    { href: "/in/blog/topics/find-an-idea", label: "Find an Idea" },
    { href: "/in/blog/topics/starting-up", label: "Starting Up" },
    { href: "/in/blog/topics/marketing", label: "Marketing" },
    { href: "/in/blog/latest", label: "Latest" }
];
const ListRow3_data: ListRow3Data[] = [
    { href: "/in/blog/topics/guides", label: "Guides" },
    { href: "/in/blog/topics/podcasts", label: "The Shopify Podcast" },
    { href: "/in/blog/topics/founder-stories", label: "Founder Stories" },
    { href: "/in/blog/topics/sell-online", label: "Ecommerce Business Tips" },
    { href: "/in/blog/topics", label: "See All topics" },
    { href: "/in/enterprise/blog", label: "Enterprise Blog" }
];
const ListRow4_data: ListRow4Data[] = [
    { href: "/in/blog/", label: "Blog" },
    { href: "/in/blog/topics/find-an-idea", label: "Find an Idea" },
    { href: "/in/blog/topics/starting-up", label: "Starting Up" },
    { href: "/in/blog/topics/marketing", label: "Marketing" },
    { href: "/in/blog/latest", label: "Latest" }
];
const ListRow5_data: ListRow5Data[] = [
    { href: "/in/blog/topics/guides", label: "Guides" },
    { href: "/in/blog/topics/podcasts", label: "The Shopify Podcast" },
    { href: "/in/blog/topics/founder-stories", label: "Founder Stories" },
    { href: "/in/blog/topics/sell-online", label: "Ecommerce Business Tips" },
    { href: "/in/blog/topics", label: "See All topics" },
    { href: "/in/enterprise/blog", label: "Enterprise Blog" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { href: "/in/website/builder", icon: <>
          <use href="#icon-drag-and-drop" />
          </>, label: "Website Builder" },
    { href: "https://themes.shopify.com/", icon: <>
          <use href="#icon-design" />
          </>, label: "Themes" },
    { href: "/in/domains", icon: <>
          <use href="#icon-domain" />
          </>, label: "Domains" },
    { href: "/in/customer-accounts", icon: <>
          <use href="#icon-user-profile" />
          </>, label: "Customer Accounts" },
    { href: "/in/sidekick", icon: <>
          <use href="#icon-ai" />
          </>, label: "Sidekick" }
];
const MediaTile2_data2: MediaTile2Data[] = [
    { href: "/in/online", icon: <>
          <use href="#icon-online" />
          </>, label: "Online" },
    { href: "/in/agentic-storefronts", icon: <>
          <use href="#icon-ai-chats" />
          </>, label: "AI Chats" },
    { href: "/in/pos", icon: <>
          <use href="#icon-pos-tick" />
          </>, label: "Point of Sale" },
    { href: "/in/shop", icon: <>
          <use href="#icon-shop-app" />
          </>, label: "Shop App" },
    { href: "/in/channels", icon: <>
          <use href="#icon-social" />
          </>, label: "Social & Marketplaces" },
    { href: "/in/international", icon: <>
          <use href="#icon-global" />
          </>, label: "Global" },
    { href: "/in/plus/solutions/b2b-ecommerce", icon: <>
          <use href="#icon-sales-up" />
          </>, label: "B2B" },
    { href: "/in/markets", icon: <>
          <use href="#icon-global-markets" />
          </>, label: "Across Markets" }
];
const MediaTile2_data3: MediaTile2Data[] = [
    { href: "/in/marketing", icon: <>
          <use href="#icon-marketing" />
          </>, label: "Advertising & Campaigns" },
    { href: "/in/marketing-automation-tools", icon: <>
          <use href="#icon-users" />
          </>, label: "Email & Customer Chat" },
    { href: "/in/discounts", icon: <>
          <use href="#icon-discount" />
          </>, label: "Discounts" },
    { href: "/in/analytics", icon: <>
          <use href="#icon-analytics" />
          </>, label: "Analytics" }
];
const MediaTile2_data4: MediaTile2Data[] = [
    { href: "/in/orders", icon: <>
          <use href="#icon-inventory-synced" />
          </>, label: "Orders & Inventory" },
    { href: "/in/shipping", icon: <>
          <use href="#icon-shipping" />
          </>, label: "Shipping" },
    { href: "/in/flow", icon: <>
          <use href="#icon-save-time" />
          </>, label: "Workflow Automation" },
    { href: "/in/mobile", icon: <>
          <use href="#icon-mobile" />
          </>, label: "Mobile" }
];
const MediaTile3_data: MediaTile3Data[] = [
    { href: "/in/ucp", description: "Commerce for Agents", description2: "Build with our agent tools" },
    { href: "https://apps.shopify.com/", description: "Shopify App Store", description2: "Largest commerce ecosystem" },
    { href: "https://shopify.dev/", description: "Shopify.dev", description2: "Dev docs, CLI, and more" }
];
const ListRow6_data: ListRow6Data[] = [
    { href: "/editions/spring2026?utm_source=homepage&utm_medium=content&utm_campaign=spring26edition-launch_Q226SETPNZ&utm_content=dotcom-nav-agentic-storefronts-insights-v1#agentic-storefronts-insights", label: "Agentic Storefronts" },
    { href: "/editions/spring2026?utm_source=homepage&utm_medium=content&utm_campaign=spring26edition-launch_Q226SETPNZ&utm_content=dotcom-nav-campaign-autopilot-v1#introducing-campaign-autopilot", label: "Campaign Autopilot" },
    { href: "/editions/spring2026?utm_source=homepage&utm_medium=content&utm_campaign=spring26edition-launch_Q226SETPNZ&utm_content=dotcom-nav-shopify-ai-toolkit-for-devs-v1#shopify-ai-toolkit-for-developers", label: "Shopify AI Toolkit for devs" }
];
const ListRow7_data: ListRow7Data[] = [
    { href: "/in/pricing", label: "Pricing" },
    { href: "/in/enterprise", label: "Enterprise" },
    { href: "/editions/spring2026", label: "Spring '26 Edition" }
];
const ListRow8_data: ListRow8Data[] = [
    { href: "#11", label: "View more ads from the same advertiser" },
    { href: "#22", label: "Search keywords related to your business" },
    { href: "#33", label: "Check out your competitors" },
    { href: "#44", label: "Filter ads by country" },
    { href: "#55", label: "See how long ads have run" },
    { href: "#66", label: "See where ads appear" },
    { href: "#77", label: "View ads by media type" },
    { href: "#88", label: "Analyze brand partnerships" },
    { href: "#99", label: "Find creative inspiration" }
];
const ListRow9_data: ListRow9Data[] = [
    { href: "/in/blog/how-to-start-dropshipping", label: "How to Start a Dropshipping Business- A Complete Playbook for 2024" },
    { href: "/in/blog/dropshipping-websites", label: "The 9 Best Dropshipping Websites for Your Online Store" },
    { href: "/in/blog/69774085-10-free-business-card-makers-with-customizable-templates", label: "10 Best Paid and Free Business Card Makers (+ Templates)" },
    { href: "/in/blog/dropshipping-niches", label: "How To Find the Best Dropshipping Niches" },
    { href: "/in/blog/sell-on-amazon", label: "How to Sell on Amazon- A 7 Step Beginner's Guide" },
    { href: "/in/blog/8-facebook-ad-templates-for-building-campaigns-in-2022", label: "8 Facebook Ad Templates for Building Campaigns in 2022" },
    { href: "/in/blog/why-we-built-shop", label: "Why We Built Shop" },
    { href: "/in/blog/75307013-snapchat-marketing-the-key-to-discovering-and-engaging-your-most-loyal-fans", label: "Snapchat Marketing- The Key to Discovering and Engaging Your Most Loyal Fans" },
    { href: "/in/blog/best-time-to-post-on-tikok", label: "What Is The Best Time To Post on Tiktok in 2024?" },
    { href: "/in/blog/5-black-friday-cyber-monday-social-media-campaigns", label: "5 Awesome Black Friday Cyber Monday Social Media Campaigns You Can Steal" }
];
const Logo2_data: Logo2Data[] = [
    { ariaLabel: "Share on Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook", viewBox: "0 0 30 30", icon: <>
          <path d="M15.6 30V19.4h5V15h-5v-3.1c0-1 .6-1.9 1.3-1.9h3.8V5.6h-3.8c-3.1 0-5.6 2.8-5.6 6.3V15H7.5v4.4h3.8v10.1C4.8 27.9 0 22 0 15 0 6.7 6.7 0 15 0s15 6.7 15 15c0 8.1-6.4 14.7-14.4 15z" />
          </>, label: "Share on Facebook" },
    { ariaLabel: "Share on X", href: "https://twitter.com/intent/tweet?text=Meta+Ads+Library:+9+Ways+To+Use+It+in+2026&url=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&via=Shopify", viewBox: "0 0 19 19", icon: <>
          <path fillRule="evenodd" clipRule="evenodd" d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM8.18721 10.0675L3.64633 3.99603H7.14609L10.123 7.97639L13.8073 3.99603H14.8358L10.5825 8.59099L15.379 15.0039H11.8792L8.64689 10.6819L4.6462 15.0039H3.61771L8.18721 10.0675ZM6.76655 4.75353H5.15877L12.2586 14.2464H13.8663L6.76655 4.75353Z" />
          </>, label: "Share on X" },
    { ariaLabel: "Share on LinkedIn", href: "https://www.linkedin.com/shareArticle?mini=true&source=Shopify&title=Meta+Ads+Library:+9+Ways+To+Use+It+in+2026&url=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook", viewBox: "0 0 30 30", icon: <>
          <path d="M30 15c0 8.3-6.7 15-15 15S0 23.3 0 15 6.7 0 15 0s15 6.7 15 15zM11.3 7.8c0-1.2-1-2.2-2.5-2.2s-2.5.9-2.5 2.2c0 1.2 1 2.2 2.5 2.2s2.5-1 2.5-2.2zm-.7 4.1H6.9v10.6h3.8V11.9zm13.8 5c0-3.4-1.7-5.6-4.4-5.6-1.5 0-2.6.9-3.1 2.3l-.1-1.6H13c0 .4.1 2.5.1 2.5v8.1h3.8V17c0-1.5.7-2.5 1.8-2.5s1.9.6 1.9 2.5v5.6h3.8v-5.7z" />
          </>, label: "Share on LinkedIn" }
];
const Tile_data: TileData[] = [
    { description: "Social Media Optimization", href: "/in/blog/make-money-on-instagram", description2: "How To Make Money on Instagram in 2025 (9 Actionable Ideas)" },
    { description: "Starting Up", href: "/in/blog/ecommerce-business-blueprint", description2: "How To Start an Ecommerce Business: Guide for 2025" },
    { description: "Guides", href: "/in/blog/what-is-dropshipping", description2: "What Is Dropshipping and How Does It Work? (2025)" },
    { description: "Find an Idea", href: "/in/blog/print-on-demand", description2: "What Is Print on Demand & How To Start a Business (2025)" }
];
const Tile_data2: TileData[] = [
    { description: "Sell Online", href: "/in/blog/build-a-website", description2: "How To Create a Website in 9 Steps (2025)" },
    { description: "Starting Up", href: "/in/blog/start-online-store", description2: "How To Start an Online Store in 2025 (Step-by-Step Guide)" },
    { description: "Find an Idea", href: "/in/blog/make-sell-merch", description2: "How To Make and Sell Merch Your Fans Will Love (2025)" },
    { description: "Sell Online", href: "/in/blog/best-ecommerce-website-builder", description2: "10 Best Ecommerce Website Builders for Your Online Store (2025)" }
];
const MediaTile5_data: MediaTile5Data[] = [
    { ariacurrent: "true", ariaLabel: "Slide 1", alt: "Graphic of a mobile phone with heart shapes bubbles floating around it", imgSrc: "/assets/cloned/images/133f37cf4aa5.png", href: "/in/blog/topics/social-media-optimization", label: "Social Media Optimization", href2: "/in/blog/make-money-on-instagram", label2: "How To Make Money on Instagram in 2025 (9 Actionable Ideas)", text: "2023-11-08" },
    { ariaLabel: "Slide 2", alt: "3D models of a shopping cart and a smartphone on a turquoise background.", imgSrc: "/assets/cloned/images/d40ef07ef876.png", href: "/in/blog/topics/starting-up", label: "Starting Up", href2: "/in/blog/ecommerce-business-blueprint", label2: "How To Start an Ecommerce Business: Guide for 2025", text: "2023-09-01" },
    { ariaLabel: "Slide 3", alt: "", imgSrc: "/assets/cloned/images/fcf8024a50b5.jpg", href: "/in/blog/topics/guides", label: "Guides", href2: "/in/blog/what-is-dropshipping", label2: "What Is Dropshipping and How Does It Work? (2025)", text: "2023-12-05" },
    { ariaLabel: "Slide 7", alt: "sweatshirt and socks from MrBeast merch line", imgSrc: "/assets/cloned/images/d831a481b9ee.jpg", href: "/in/blog/topics/find-an-idea", label: "Find an Idea", href2: "/in/blog/make-sell-merch", label2: "How To Make and Sell Merch Your Fans Will Love (2025)", text: "2023-12-02" },
    { ariaLabel: "Slide 8", alt: "Illustration of a basket made out of bricks and mortar, showcasing how an ecommerce website builder can help you construct an online store", imgSrc: "/assets/cloned/images/ba079f771177.jpg", href: "/in/blog/topics/sell-online", label: "Sell Online", href2: "/in/blog/best-ecommerce-website-builder", label2: "10 Best Ecommerce Website Builders for Your Online Store (2025)", text: "2023-11-06" }
];
const ListRow10_data: ListRow10Data[] = [
    { href: "/in/blog/what-is-shopify", label: "What is Shopify?" },
    { href: "/editions", label: "Shopify Editions" },
    { href: "https://www.shopify.com/careers", label: "Careers" },
    { href: "https://www.shopify.com/investors", label: "Investors" },
    { href: "https://www.shopify.com/news", label: "Newsroom" },
    { href: "/in/climate", label: "Sustainability" }
];
const ListRow11_data: ListRow11Data[] = [
    { href: "https://shopify.dev/docs", label: "Developer Docs" },
    { href: "https://themes.shopify.com/", label: "Theme Store" },
    { href: "https://apps.shopify.com/", label: "App Store" },
    { href: "/in/partners", label: "Partners" },
    { href: "/in/affiliates", label: "Affiliates" }
];
const ListRow12_data: ListRow12Data[] = [
    { href: "/in/blog", label: "Blog" },
    { href: "/in/compare", label: "Compare Shopify" },
    { href: "/in/blog/topics/guides", label: "Guides" },
    { href: "https://www.shopifyacademy.com/", label: "Courses" },
    { href: "/in/tools", label: "Free Tools" },
    { href: "https://changelog.shopify.com/", label: "Changelog" }
];
const ListRow10_data2: ListRow10Data[] = [
    { href: "https://help.shopify.com/en", label: "Shopify Help Center" },
    { href: "https://community.shopify.com/", label: "Community Forum" },
    { href: "/in/partners/directory", label: "Hire a Partner" },
    { href: "https://shopifystatus.com/", label: "Service Status" }
];
const ListRow13_data: ListRow13Data[] = [
    { text: "Australia", href: "/au/blog/ad-library-facebook?country=au&lang=en", lang: "en", label: "English" },
    { text: "Canada", href: "/ca/blog/ad-library-facebook?country=ca&lang=en", lang: "en", label: "English" },
    { text: "Germany", href: "/de/blog/facebook-werbebibliothek?country=de&lang=de", lang: "de", label: "Deutsch" },
    { text: "Hong Kong SAR", href: "/hk/blog/ad-library-facebook?country=hk&lang=zh", lang: "en", label: "English" }
];
const ListRow14_data: ListRow14Data[] = [
    { text: "Indonesia", href: "/id/blog/ad-library-facebook?country=id&lang=en" },
    { text: "Ireland", href: "/ie/blog/ad-library-facebook?country=ie&lang=en" },
    { text: "Malaysia", href: "/my/blog/ad-library-facebook?country=my&lang=en" },
    { text: "New Zealand", href: "/nz/blog/ad-library-facebook?country=nz&lang=en" },
    { text: "Nigeria", href: "/ng/blog/ad-library-facebook?country=ng&lang=en" },
    { text: "Philippines", href: "/ph/blog/ad-library-facebook?country=ph&lang=en" },
    { text: "Singapore", href: "/sg/blog/ad-library-facebook?country=sg&lang=en" },
    { text: "South Africa", href: "/za/blog/ad-library-facebook?country=za&lang=en" },
    { text: "UK", href: "/uk/blog/ad-library-facebook?country=gb&lang=en" },
    { text: "USA", href: "/blog/ad-library-facebook?country=us&lang=en" }
];
const ListRow10_data3: ListRow10Data[] = [
    { href: "/in/legal/terms", label: "Terms of Service" },
    { href: "/in/legal", label: "Legal" },
    { href: "/in/legal/privacy", label: "Privacy Policy" },
    { href: "/in/sitemap", label: "Sitemap" }
];

export default function Page() {
  return (
    <>
      <div className="w-[10.3125rem] h-12.5 block absolute top-2 left-2 z-100 pointer-events-none">
        <a className="h-11 border-2 border-solid border-clr-0 inline-block py-2 px-5 rounded-full self-center overflow-hidden [font-weight:550] bg-background [translate:0px_-200%] cursor-pointer pointer-events-none whitespace-nowrap max-w-full" data-component="button" href="#main">
          Skip to Content
        </a>
      </div>
      <div className="block relative">
        <header className="block absolute top-0 inset-x-0 z-50 pointer-events-none h-full">
          <div className="h-18 block fixed -top-18 inset-x-0 z-50 [translate:0px_72px] max-lg:sticky max-lg:inset-x-auto max-lg:[translate:initial] 2xl:sticky 2xl:inset-x-auto 2xl:[translate:initial] after:content-[''] after:block after:absolute after:inset-0 after:z-10 after:h-18 after:bg-background" data-ditto-id="style-div">
            <div className="h-18 flex relative z-20 px-22.5 items-center max-md:px-4 md:max-lg:px-7.5 2xl:px-62.5">
              <div className="w-[7.875rem] flex relative mr-8 items-center shrink-0">
                <a className="basis-full shrink-0 h-9 block relative z-20 cursor-pointer" data-component="link" href="/in">
                  <img className="w-31.5 block max-w-full overflow-clip align-middle h-9" data-component="image" alt="Shopify" src="/assets/cloned/svg/5bcde0e95f2b.svg" />
                </a>
              </div>
              <nav className="flex grow h-full max-lg:hidden" data-component="nav" aria-label="Main">
                <ul className="flex [list-style-type:none] list-outside h-full max-lg:hidden">
                  <li className="w-[7.1875rem] h-18 list-item z-30 mr-7 shrink-0 max-lg:hidden 2xl:mr-8 before:content-[''] before:block before:absolute before:top-12 before:bottom-0 before:inset-x-0 before:w-320 before:h-6 max-lg:before:hidden 2xl:before:w-480">
                    <div className="flex relative items-center gap-x-0.5 h-full max-lg:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:-right-16 before:left-0 before:w-[11.1875rem] before:h-18 max-lg:before:hidden">
                      <span className="block [font-weight:420] whitespace-nowrap text-nowrap max-lg:hidden">
                        Why Shopify
                      </span>
                      <Icon />
                    </div>
                    <div className="h-[17.775rem] block absolute inset-x-0 max-h-162 pb-9 overflow-x-hidden overflow-y-auto pointer-events-none max-lg:hidden 2xl:max-h-225 before:content-[''] before:block before:absolute before:top-[13.275rem] before:bottom-9 before:inset-x-0 before:h-9 before:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-1)_0px_20px_25px_-5px,var(--clr-1)_0px_8px_10px_-6px] before:opacity-0 max-lg:before:hidden">
                      <div className="flex relative pt-10 px-22.5 items-start gap-y-17 gap-x-10 overflow-hidden text-color-002 text-sm leading-5 bg-background [translate:0px_calc(-100%_-_1px)] pointer-events-none max-lg:hidden 2xl:px-62.5">
                        <ul className="h-15.5 grid opacity-0 mb-10 gap-x-6 [grid-column-start:items] [grid-column-end:items] [grid-row-start:items] [grid-row-end:items] [list-style-type:none] list-outside [translate:0px_-24px] pointer-events-none grid-cols-3 max-lg:hidden">
                          <li className="list-item pointer-events-none max-lg:hidden">
                            <label className="hidden absolute top-10 left-22.5 z-20 items-center cursor-pointer pointer-events-none before:content-[''] before:block before:absolute before:-inset-5 max-lg:before:hidden" htmlFor="bk-nav-Why Shopify">
                              <Icon2 />
                              Back
                            </label>
                            <a className="inline cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/in/start">
                              <Icon3 />
                              <p className="flex mb-0.5 items-center text-base leading-6 pointer-events-none max-lg:hidden">
                                Get started fast
                                <Icon4 />
                              </p>
                              <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
                                You could be selling by tomorrow.
                              </p>
                            </a>
                          </li>
                          <li className="list-item pointer-events-none max-lg:hidden">
                            <a className="h-full inline cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/in/sell">
                              <Icon5 />
                              <p className="flex mb-0.5 items-center text-base leading-6 pointer-events-none max-lg:hidden">
                                Switch to Shopify
                                <Icon4 />
                              </p>
                              <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
                                Get more customers. Make more sales.
                              </p>
                            </a>
                          </li>
                          <li className="list-item pointer-events-none max-lg:hidden">
                            <a className="h-full inline cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/in/enterprise">
                              <Icon6 />
                              <p className="flex mb-0.5 items-center text-base leading-6 pointer-events-none max-lg:hidden">
                                Trusted by enterprise brands
                                <Icon4 />
                              </p>
                              <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
                                No matter your size, complexity, or ambition.
                              </p>
                            </a>
                          </li>
                        </ul>
                        <div className="block relative pb-10 pl-10 [grid-column-start:aside] [grid-column-end:aside] [grid-row-start:aside] [grid-row-end:aside] pointer-events-none max-lg:hidden before:content-[''] before:block before:absolute before:-top-10 before:-right-22.5 before:-bottom-5 before:left-0 before:z-0 before:h-[16.775rem] before:bg-clr-2 max-lg:before:hidden 2xl:before:-right-166 after:content-[''] after:bg-clr-3 max-lg:after:hidden">
                          <p className="w-64 block relative opacity-0 mb-6 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty [translate:0px_-24px] pointer-events-none max-lg:hidden">
                            Built into every store
                          </p>
                          <ul className="h-32.5 flex relative opacity-0 flex-col gap-y-6 [list-style-type:none] list-outside [translate:0px_-24px] pointer-events-none max-lg:hidden">
                            <li className="list-item pointer-events-none max-lg:hidden">
                              <a className="w-47.5 h-11 flex flex-col gap-y-1 cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/in/checkout">
                                <p className="flex mb-0.5 items-center text-pretty pointer-events-none max-lg:hidden">
                                  World's best checkout
                                  <Icon7 />
                                </p>
                                <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
                                  Proven to convert better.
                                </p>
                              </a>
                            </li>
                            <li className="list-item pointer-events-none max-lg:hidden">
                              <a className="w-47.5 h-15.5 flex flex-col gap-y-1 cursor-pointer pointer-events-none max-lg:hidden group" data-component="link" href="/in/sidekick">
                                <p className="flex mb-0.5 items-center text-pretty pointer-events-none max-lg:hidden">
                                  Sidekick
                                  <Icon8 />
                                </p>
                                <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
                                  Your commerce-obsessed AI assistant.
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-[5.3125rem] h-18 list-item z-30 mr-7 shrink-0 max-lg:hidden 2xl:mr-8 before:content-[''] before:block before:absolute before:top-12 before:bottom-0 before:inset-x-0 before:w-320 before:h-6 max-lg:before:hidden 2xl:before:w-480">
                    <div className="flex relative items-center gap-x-0.5 h-full max-lg:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:-right-16 before:left-0 before:w-[9.3125rem] before:h-18 max-lg:before:hidden">
                      <span className="block [font-weight:420] whitespace-nowrap text-nowrap max-lg:hidden">
                        Products
                      </span>
                      <Icon />
                    </div>
                    <LogoCloudSection />
                  </li>
                  <li className="w-[3.0625rem] list-item z-20 mr-7 shrink-0 max-lg:hidden 2xl:mr-8">
                    <div className="flex items-center h-full max-lg:hidden">
                      <a className="h-6 flex items-center cursor-pointer max-lg:hidden" data-component="link" href="/in/pricing">
                        Pricing
                      </a>
                    </div>
                  </li>
                  <li className="w-18 list-item z-20 mr-7 shrink-0 max-lg:hidden 2xl:mr-8">
                    <div className="flex items-center h-full max-lg:hidden">
                      <a className="h-6 flex items-center cursor-pointer max-lg:hidden" data-component="link" href="/in/enterprise">
                        Enterprise
                      </a>
                    </div>
                  </li>
                  <li className="w-[11.9375rem] list-item z-20 mr-7 shrink-0 max-lg:hidden 2xl:mr-8">
                    <div className="flex items-center h-full max-lg:hidden">
                      <a className="h-11 border-2 border-solid border-border flex py-2 px-[0.8125rem] rounded-full items-center self-center gap-x-1 overflow-hidden [font-weight:550] shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--foreground)_0px_0px_0px_0px_inset,var(--clr-0)_0px_0px_0px_0px] cursor-pointer max-w-full max-lg:hidden hover:border-foreground hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-23)_0px_0px_0px_0px_inset,var(--clr-0)_0px_0px_0px_0px] focus:border-foreground" data-component="link" href="/editions/spring2026">
                        <picture className="w-4.5 h-4.5 block max-lg:hidden">
                          <img className="block max-w-full shrink-0 overflow-clip aspect-[auto_18/18] align-middle [translate:0px_-0.5px] pointer-events-none w-[1.125rem] h-[1.125rem] max-lg:hidden" data-component="image" alt="" height="18" src="/assets/cloned/images/95e977f9400c.png" srcSet="/assets/cloned/images/860768380bdc.png 1x, /assets/cloned/images/2642e88a85a9.png 2x" width="18" />
                        </picture>
                        <span className="block pointer-events-none max-lg:hidden">
                          Spring '26 Edition
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="block max-md:ml-11 md:max-lg:ml-[25.5625rem]">
                <ul className="flex items-center [list-style-type:none] list-outside max-lg:hidden">
                  <li className="list-item mr-8">
                    <a className="inline whitespace-nowrap text-nowrap cursor-pointer hover:underline" data-component="link" href="/login?ui_locales=en-IN">
                      Log in
                    </a>
                  </li>
                  <li className="list-item leading-0">
                    <a className="w-[9.1875rem] h-11 border-2 border-solid border-clr-0 inline-block py-2 px-5 rounded-full self-center overflow-hidden text-background [font-weight:550] leading-6 whitespace-nowrap text-nowrap bg-foreground cursor-pointer max-w-full hover:bg-clr-23" data-component="button" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
                      Start for free
                    </a>
                  </li>
                </ul>
                <ul className="hidden -mr-[0.9375rem] items-center [list-style-type:none] list-outside max-lg:flex">
                  <li className="list-item">
                    <a className="inline mr-4 underline cursor-pointer" aria-label="External source: Start for free" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
                      Start for free
                    </a>
                  </li>
                  <li className="list-item">
                    <button className="flex flex-col justify-center items-center gap-1 text-center cursor-pointer h-12 w-12" aria-expanded="false" aria-haspopup="true" aria-label="Menu" type="button">
                      <div className="block min-w-0 bg-foreground h-0.5 w-[1.125rem]" />
                      <div className="block min-w-0 bg-foreground h-0.5 w-[1.125rem] max-lg:h-[1.53px]" />
                      <div className="block min-w-0 bg-foreground h-0.5 w-[1.125rem] max-lg:h-[0.81px]" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-18 block fixed top-0 inset-x-0 z-20 [translate:0px_72px] max-lg:sticky max-lg:inset-x-auto max-lg:[translate:initial] 2xl:sticky 2xl:inset-x-auto 2xl:[translate:initial] before:content-[''] before:block before:absolute before:top-0 before:-bottom-px before:inset-x-0 before:z-20 before:h-[4.5625rem] after:content-[''] after:block after:absolute after:inset-0 after:z-10 after:h-18 after:bg-background">
            <div className="h-18 flex relative z-20 mx-22.5 items-center max-md:mx-4 md:max-lg:mx-7.5 2xl:max-w-355 2xl:mx-62.5">
              <div className="flex items-center gap-x-8 w-full h-[4.5rem] max-md:h-14">
                <a className="h-9 block absolute top-9 left-0 z-20 opacity-0 min-w-0 shrink-0 [translate:0px_-50%] cursor-pointer pointer-events-none w-9" href="/in">
                  <img className="w-8 block max-w-full overflow-clip align-middle pointer-events-none h-9" data-component="image" alt="Shopify" src="/assets/cloned/svg/a34a22db1313.svg" />
                </a>
                <nav className="w-1/2 h-18 block max-lg:w-full max-lg:h-10 max-lg:relative max-lg:z-10 max-lg:[translate:initial] 2xl:w-[38.5%]" data-component="nav" aria-label="Secondary">
                  <button className="hidden w-full max-lg:h-10 max-lg:flex max-lg:items-center max-lg:overflow-hidden max-lg:[font-weight:420] max-lg:leading-11 max-lg:tracking-[-0.1px] max-lg:text-left max-lg:cursor-pointer" aria-expanded="false" aria-haspopup="true" type="button">
                    <span className="hidden w-full max-lg:flex max-lg:flex-col max-lg:gap-y-1 max-lg:overflow-hidden max-lg:whitespace-nowrap max-lg:text-nowrap">
                      <span className="hidden max-lg:block max-lg:opacity-60 max-lg:text-sm max-lg:[font-weight:550] max-lg:leading-4 max-lg:tracking-[normal] max-lg:uppercase">
                        Blog
                      </span>
                      <span className="hidden max-lg:block max-lg:text-lg max-lg:[font-weight:550] max-lg:leading-5">
                        Menu
                      </span>
                    </span>
                    <Icon11 />
                  </button>
                  <div className="hidden max-h-[calc(100dvh-14rem)]" id="id_mobile_secondary_nav">
                    <button className="hidden" aria-expanded="false" aria-label="Search" type="button">
                      Search
                      <Icon12 />
                    </button>
                    <div className="hidden w-full max-lg:block max-lg:z-50 max-lg:mb-6 max-lg:bg-background max-lg:pointer-events-none">
                      <div className="hidden max-lg:h-[3.0625rem] max-lg:flex max-lg:items-center max-lg:pointer-events-none">
                        <div className="hidden w-full max-lg:border-b max-lg:border-solid max-lg:border-b-clr-4 max-lg:flex max-lg:relative max-lg:items-center max-lg:pointer-events-none">
                          <form className="hidden w-full max-lg:flex max-lg:-mt-4 max-lg:pointer-events-none" aria-label="Search" role="search">
                            <input className="hidden max-lg:w-full max-lg:h-16 max-lg:block max-lg:relative max-lg:z-20 max-lg:py-2 max-lg:overflow-clip max-lg:cursor-text max-lg:pointer-events-none" data-ditto-id="style-search-input" aria-describedby="search-instructions" aria-label="Search input" name="header-search" placeholder="Search" type="text" value="" />
                            <button className="hidden max-lg:h-16 max-lg:block max-lg:-mr-6 max-lg:p-6 max-lg:text-center max-lg:cursor-pointer max-lg:pointer-events-none" aria-label="Submit search" type="submit">
                              <Icon13 />
                            </button>
                          </form>
                          <div className="hidden" aria-hidden="true" id="search-instructions">
                            Type something you're looking for
                            <Icon12 />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="hidden max-lg:flex max-lg:flex-col max-lg:gap-y-6 max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                      <li className="hidden max-lg:border-b max-lg:border-solid max-lg:border-b-border max-lg:list-item max-lg:pb-6 max-lg:text-lg max-lg:[font-weight:550] max-lg:leading-4 max-lg:pointer-events-none">
                        <a className="hidden max-lg:inline max-lg:cursor-pointer max-lg:pointer-events-none" href="/in/blog/">
                          Overview
                        </a>
                      </li>
                      {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} />)}
                      <li className="hidden max-lg:flex max-lg:flex-col max-lg:gap-y-6 max-lg:pointer-events-none">
                        <span className="hidden max-lg:block max-lg:text-clr-5 max-lg:text-sm max-lg:[font-weight:550] max-lg:leading-4 max-lg:uppercase max-lg:pointer-events-none">
                          More
                        </span>
                        <ul className="hidden grid-cols-2 max-lg:grid max-lg:gap-6 max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none max-md:grid-rows-6 max-md:grid-cols-1 md:max-lg:grid-rows-3">
                          {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} />)}
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex items-center gap-x-8 [list-style-type:none] list-outside h-full max-lg:hidden">
                    {ListRow4_data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                    <li className="flex relative flex-col items-center h-full max-lg:hidden after:content-[''] after:hidden after:absolute after:bottom-0 after:w-full after:h-[0.1875rem] after:bg-foreground max-lg:after:hidden">
                      <button className="block text-center cursor-pointer h-full max-lg:hidden" data-ditto-id="menu-trigger-button" data-component="button" aria-expanded="false" aria-haspopup="true" type="button">
                        <span className="flex items-center max-lg:hidden">
                          More
                          <Icon14 />
                        </span>
                      </button>
                      <div className="box-content h-80 block absolute top-20 left-0 opacity-0 min-w-0 rounded-lg bg-background shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-6)_0px_8px_48px_0px,var(--clr-7)_0px_4px_8px_0px,var(--clr-8)_0px_0px_2px_0px] [translate:0px_-24px] pointer-events-none w-64 max-lg:hidden" id="id_More_4">
                        <ul className="box-content block p-4 [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
                          {ListRow5_data.map((d, i) => <ListRow5 key={i} d={d} />)}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className="block ml-111.5 max-lg:hidden 2xl:ml-191.5">
                  <button className="h-6 flex items-center text-center cursor-pointer max-lg:hidden" data-component="button" aria-expanded="false" aria-label="Search" type="button">
                    Search
                    <Icon15 />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full" id="MobileDrawer">
            <div className="hidden max-lg:block max-lg:relative max-lg:pointer-events-none before:content-[''] before:block before:absolute before:inset-0 before:z-100 before:w-[23.4375rem] before:h-18 before:opacity-0 md:max-lg:before:w-192 2xl:before:hidden">
              <div className="hidden max-lg:h-18 max-lg:flex max-md:mx-4 max-lg:items-center max-lg:pointer-events-none md:max-lg:mx-7.5">
                <div className="hidden max-lg:w-[7.875rem] max-lg:flex max-lg:relative max-lg:mr-8 max-lg:items-center max-lg:shrink-0 max-lg:pointer-events-none">
                  <a className="hidden max-lg:basis-full max-lg:shrink-0 max-lg:h-9 max-lg:block max-lg:relative max-lg:z-20 max-lg:cursor-pointer max-lg:pointer-events-none" href="/in">
                    <img className="hidden h-9 max-lg:w-31.5 max-lg:block max-lg:max-w-full max-lg:overflow-clip max-lg:align-middle max-lg:pointer-events-none" alt="Shopify" src="/assets/cloned/svg/5bcde0e95f2b.svg" />
                  </a>
                </div>
                <ul className="hidden max-lg:flex max-lg:-mr-[0.9375rem] max-md:ml-11 max-lg:items-center max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none md:max-lg:ml-[25.5625rem]">
                  <li className="hidden max-lg:list-item max-lg:pointer-events-none">
                    <a className="hidden max-lg:inline max-lg:mr-4 max-lg:text-foreground max-lg:underline max-lg:cursor-pointer max-lg:pointer-events-none" aria-label="External source: Start for free" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
                      Start for free
                    </a>
                  </li>
                  <li className="hidden max-lg:list-item max-lg:pointer-events-none">
                    <button className="hidden h-12 w-12 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-1 max-lg:text-center max-lg:cursor-pointer max-lg:pointer-events-none" aria-expanded="false" aria-haspopup="true" aria-label="Menu" type="button">
                      <div className="hidden h-0.5 w-[1.125rem] max-lg:block max-lg:bg-foreground max-lg:pointer-events-none" />
                      <div className="hidden h-0.5 w-[1.125rem] max-lg:block max-lg:bg-foreground max-lg:pointer-events-none max-lg:h-[1.53px]" />
                      <div className="hidden h-0.5 w-[1.125rem] max-lg:block max-lg:bg-foreground max-lg:pointer-events-none max-lg:h-[0.81px]" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="hidden h-full max-lg:block max-lg:relative max-lg:pt-6 max-lg:overflow-auto max-lg:pointer-events-none" aria-label="Main" id="MobileNavigation">
              <ul className="hidden max-lg:block max-md:mb-8 max-md:mx-4 max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none md:max-lg:mb-10 md:max-lg:mx-7.5">
                <li className="hidden max-lg:border-b max-lg:border-solid max-lg:border-b-clr-9 max-lg:list-item max-lg:pointer-events-none">
                  <div className="hidden max-lg:block max-lg:pointer-events-none">
                    <label className="hidden max-lg:flex max-lg:py-4 max-lg:justify-between max-lg:items-center max-lg:cursor-default max-lg:pointer-events-none" htmlFor="bk-nav-Why Shopify">
                      <span className="hidden max-lg:block max-lg:text-2xl max-lg:[font-weight:330] max-lg:leading-8 max-lg:pointer-events-none">
                        Why Shopify
                      </span>
                      <Icon16 />
                    </label>
                  </div>
                  <div className="hidden max-md:h-[37.1875rem] max-lg:block max-lg:absolute max-lg:top-0 max-lg:inset-x-0 max-lg:overflow-hidden max-lg:pointer-events-none md:max-lg:h-[53.5625rem]">
                    <div className="hidden">
                      <ul className="hidden max-lg:flex max-lg:flex-col max-lg:gap-y-1.5 max-lg:grid-cols-3 max-lg:grid-rows-[1fr] max-lg:[grid-column-start:items] max-lg:[grid-column-end:items] max-lg:[grid-row-start:items] max-lg:[grid-row-end:items] max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                        <li className="hidden max-lg:list-item max-lg:relative max-lg:pointer-events-none">
                          <label className="hidden max-lg:w-[3.3125rem] max-lg:h-5 max-lg:flex max-lg:absolute max-md:-top-8 max-lg:z-20 max-lg:items-center max-lg:[translate:0px_-100%] max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:-top-10 before:content-[''] before:block before:absolute before:-inset-5 before:w-[5.8125rem] before:h-15 2xl:before:hidden" htmlFor="bk-nav-Why Shopify">
                            <Icon17 />
                            Back
                          </label>
                          <a className="hidden max-lg:border max-lg:border-solid max-lg:border-clr-3 max-lg:grid max-lg:py-6 max-md:px-4 max-lg:rounded-2xl max-lg:gap-x-3 max-lg:bg-clr-2 max-lg:cursor-pointer max-lg:pointer-events-none max-lg:grid-cols-[28px_1fr] md:max-lg:pr-12 md:max-lg:pl-4" href="/in/start">
                            <Icon18 />
                            <p className="hidden max-lg:flex max-lg:z-20 max-lg:mb-0.5 max-lg:items-center max-lg:self-end max-lg:text-base max-lg:leading-6 max-lg:pointer-events-none">
                              Get started fast
                              <Icon19 />
                            </p>
                            <p className="hidden max-lg:block max-lg:z-20 max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none">
                              You could be selling by tomorrow.
                            </p>
                          </a>
                        </li>
                        <li className="hidden max-lg:list-item max-lg:relative max-lg:pointer-events-none">
                          <a className="hidden max-lg:border max-lg:border-solid max-lg:border-clr-3 max-lg:grid max-lg:py-6 max-md:px-4 max-lg:rounded-2xl max-lg:gap-x-3 max-lg:bg-clr-2 max-lg:cursor-pointer max-lg:pointer-events-none max-lg:grid-cols-[28px_1fr] md:max-lg:pr-12 md:max-lg:pl-4" href="/in/sell">
                            <Icon20 />
                            <p className="hidden max-lg:flex max-lg:z-20 max-lg:mb-0.5 max-lg:items-center max-lg:self-end max-lg:text-base max-lg:leading-6 max-lg:pointer-events-none">
                              Switch to Shopify
                              <Icon19 />
                            </p>
                            <p className="hidden max-lg:block max-lg:z-20 max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none">
                              Get more customers. Make more sales.
                            </p>
                          </a>
                        </li>
                        <li className="hidden max-lg:list-item max-lg:relative max-lg:pointer-events-none">
                          <a className="hidden max-lg:border max-lg:border-solid max-lg:border-clr-3 max-lg:grid max-lg:py-6 max-md:px-4 max-lg:rounded-2xl max-lg:gap-x-3 max-lg:bg-clr-2 max-lg:cursor-pointer max-lg:pointer-events-none max-lg:grid-cols-[28px_1fr] md:max-lg:pr-12 md:max-lg:pl-4" href="/in/enterprise">
                            <Icon21 />
                            <p className="hidden max-lg:flex max-lg:z-20 max-lg:mb-0.5 max-lg:items-center max-lg:self-end max-lg:text-base max-lg:leading-6 max-lg:pointer-events-none">
                              Trusted by enterprise brands
                              <Icon19 />
                            </p>
                            <p className="hidden max-lg:block max-lg:z-20 max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none">
                              No matter your size, complexity, or ambition.
                            </p>
                          </a>
                        </li>
                      </ul>
                      <div className="hidden max-lg:block max-lg:relative max-md:mt-2 max-lg:[grid-column-start:aside] max-lg:[grid-column-end:aside] max-lg:[grid-row-start:aside] max-lg:[grid-row-end:aside] max-lg:pointer-events-none after:content-[''] after:bg-clr-3 2xl:after:hidden">
                        <p className="hidden max-md:w-[21.4375rem] max-lg:block max-lg:relative max-lg:mb-6 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none md:max-lg:w-88.5">
                          Built into every store
                        </p>
                        <ul className="hidden max-lg:flex max-lg:relative max-lg:gap-x-2 max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                          <li className="hidden max-lg:flex-1 max-lg:list-item max-lg:pointer-events-none">
                            <a className="hidden max-md:w-[167.5px] max-md:h-51.5 max-md:min-h-44 max-lg:border max-lg:border-solid max-lg:border-clr-3 max-md:flex max-lg:p-6 max-lg:rounded-2xl max-md:flex-col max-lg:gap-y-1 max-lg:bg-clr-2 max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:w-87.5 md:max-lg:h-32.5 md:max-lg:min-h-[8.0625rem] md:max-lg:grid md:max-lg:gap-x-3 md:max-lg:grid-cols-[172.797px_115.188px]" href="/in/checkout">
                              <p className="hidden max-lg:flex max-lg:relative max-lg:z-10 max-lg:mb-0.5 max-lg:items-center max-lg:text-pretty max-lg:pointer-events-none md:max-lg:self-end">
                                World's best checkout
                                <Icon22 />
                              </p>
                              <p className="hidden max-lg:block max-lg:relative max-lg:z-10 max-md:mb-3 max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none md:max-lg:row-start-2">
                                Proven to convert better.
                              </p>
                              <img className="hidden w-[8.3125rem] max-md:h-[2.1875rem] max-lg:block max-lg:relative max-lg:z-10 max-lg:max-w-full max-md:mt-[1.425rem] max-lg:rounded-sm max-lg:overflow-clip max-lg:aspect-[3.333/1] max-lg:align-middle max-lg:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-10)_0px_8px_48px_0px,var(--clr-11)_0px_4px_8px_0px] max-lg:pointer-events-none max-md:w-[117.5px] md:max-lg:h-7.5 md:max-lg:self-center md:max-lg:row-start-[span_2] md:max-lg:w-[6.25rem]" alt="World's best checkout" src="/assets/cloned/svg/e8c633e69195.svg" />
                            </a>
                          </li>
                          <li className="hidden max-lg:flex-1 max-lg:list-item max-lg:pointer-events-none">
                            <a className="hidden max-md:w-[167.5px] max-md:h-51.5 max-md:min-h-44 max-lg:border max-lg:border-solid max-lg:border-clr-3 max-md:flex max-lg:p-6 max-lg:rounded-2xl max-md:flex-col max-lg:gap-y-1 max-lg:bg-clr-2 max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:w-87.5 md:max-lg:h-32.5 md:max-lg:min-h-[8.0625rem] md:max-lg:grid md:max-lg:gap-x-3 md:max-lg:grid-cols-[172.797px_115.188px]" href="/in/sidekick">
                              <p className="hidden max-lg:flex max-lg:relative max-lg:z-10 max-lg:mb-0.5 max-lg:items-center max-lg:text-pretty max-lg:pointer-events-none md:max-lg:self-end">
                                Sidekick
                                <Icon22 />
                              </p>
                              <p className="hidden max-lg:block max-lg:relative max-lg:z-10 max-md:mb-3 max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none md:max-lg:row-start-2">
                                Your commerce-obsessed AI assistant.
                              </p>
                              <img className="hidden w-20 aspect-square max-md:h-17.5 max-lg:block max-lg:relative max-lg:z-10 max-lg:max-w-full max-md:-mt-2.5 max-lg:overflow-clip max-lg:align-middle max-md:[translate:0px_10px] max-lg:pointer-events-none max-md:w-[4.375rem] md:max-lg:h-20 md:max-lg:self-center md:max-lg:row-start-[span_2]" alt="Sidekick" src="/assets/cloned/images/f11e237d0e10.png" srcSet="/assets/cloned/images/9b0faf418553.png 2x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="hidden max-lg:border-b max-lg:border-solid max-lg:border-b-clr-9 max-lg:list-item max-lg:pointer-events-none">
                  <div className="hidden max-lg:block max-lg:pointer-events-none">
                    <label className="hidden max-lg:flex max-lg:py-4 max-lg:justify-between max-lg:items-center max-lg:cursor-default max-lg:pointer-events-none" htmlFor="bk-nav-Products">
                      <span className="hidden max-lg:block max-lg:text-2xl max-lg:[font-weight:330] max-lg:leading-8 max-lg:pointer-events-none">
                        Products
                      </span>
                      <Icon16 />
                    </label>
                  </div>
                  <div className="hidden max-md:h-[37.1875rem] max-lg:block max-lg:absolute max-lg:top-0 max-lg:inset-x-0 max-lg:overflow-hidden max-lg:pointer-events-none md:max-lg:h-[53.5625rem]">
                    <div className="hidden">
                      <ul className="hidden w-full max-lg:flex max-lg:flex-col max-lg:gap-y-17 max-lg:[grid-column-start:items] max-lg:[grid-column-end:items] max-lg:[grid-row-start:items] max-lg:[grid-row-end:items] max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                        <li className="hidden max-md:h-[15.525rem] max-lg:list-item max-lg:relative max-lg:pointer-events-none md:max-lg:h-[14.275rem] before:content-[''] before:block before:absolute before:top-[17.025rem] before:-bottom-[1.5625rem] before:inset-x-0 before:w-[21.4375rem] before:h-px before:bg-clr-3 md:max-lg:before:top-[15.775rem] md:max-lg:before:w-83.5 2xl:before:hidden">
                          <label className="hidden max-lg:w-[3.3125rem] max-lg:h-5 max-lg:flex max-lg:absolute max-md:-top-8 max-lg:z-20 max-lg:items-center max-lg:[translate:0px_-100%] max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:-top-10 before:content-[''] before:block before:absolute before:-inset-5 before:w-[5.8125rem] before:h-15 2xl:before:hidden" htmlFor="bk-nav-Products">
                            <Icon17 />
                            Back
                          </label>
                          <p className="hidden max-lg:block max-lg:mb-3.5 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none">
                            Build your website
                          </p>
                          <ul className="hidden max-lg:block max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                            {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} />)}
                          </ul>
                        </li>
                        <li className="hidden max-md:h-[23.775rem] max-lg:list-item max-lg:relative max-lg:pointer-events-none md:max-lg:h-[21.775rem] before:content-[''] before:block before:absolute before:top-[25.275rem] before:-bottom-[1.5625rem] before:inset-x-0 before:w-[21.4375rem] before:h-px before:bg-clr-3 md:max-lg:before:top-[23.275rem] md:max-lg:before:w-83.5 2xl:before:hidden">
                          <p className="hidden max-lg:block max-lg:mb-3.5 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none">
                            Sell anywhere
                          </p>
                          <ul className="hidden max-lg:block max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                            {MediaTile2_data2.map((d, i) => <MediaTile2 key={i} d={d} />)}
                          </ul>
                        </li>
                        <li className="hidden max-md:h-[12.775rem] max-lg:list-item max-lg:relative max-lg:pointer-events-none md:max-lg:h-[11.775rem] before:content-[''] before:block before:absolute before:top-[14.275rem] before:-bottom-[1.5625rem] before:inset-x-0 before:w-[21.4375rem] before:h-px before:bg-clr-3 md:max-lg:before:top-[13.275rem] md:max-lg:before:w-83.5 2xl:before:hidden">
                          <p className="hidden max-lg:block max-lg:mb-3.5 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none">
                            {"Marketing & analytics"}
                          </p>
                          <ul className="hidden max-lg:block max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                            {MediaTile2_data3.map((d, i) => <MediaTile2 key={i} d={d} />)}
                          </ul>
                        </li>
                        <li className="hidden max-md:h-[12.775rem] max-lg:list-item max-lg:relative max-lg:pointer-events-none md:max-lg:h-[11.775rem] before:content-[''] before:block before:absolute before:top-[14.275rem] before:-bottom-[1.5625rem] before:inset-x-0 before:w-[21.4375rem] before:h-px before:bg-clr-3 md:max-lg:before:top-[13.275rem] md:max-lg:before:w-83.5 2xl:before:hidden">
                          <p className="hidden max-lg:block max-lg:mb-3.5 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none">
                            Run your business
                          </p>
                          <ul className="hidden max-lg:block max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                            {MediaTile2_data4.map((d, i) => <MediaTile2 key={i} d={d} />)}
                          </ul>
                        </li>
                        <li className="hidden max-md:h-[7.275rem] max-lg:list-item max-lg:relative max-lg:pointer-events-none md:max-lg:h-[6.775rem] before:content-[''] before:block before:absolute before:top-[8.775rem] before:-bottom-[1.5625rem] before:inset-x-0 before:w-[21.4375rem] before:h-px before:bg-clr-3 md:max-lg:before:top-[8.275rem] md:max-lg:before:w-83.5 2xl:before:hidden">
                          <p className="hidden max-lg:block max-lg:mb-3.5 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none">
                            Get paid
                          </p>
                          <ul className="hidden max-lg:block max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                            <li className="hidden max-lg:list-item max-lg:pointer-events-none">
                              <a className="hidden max-lg:flex max-lg:py-2.5 max-md:items-center max-lg:gap-x-4 max-md:text-base max-md:leading-6 max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:items-start" href="/in/checkout">
                                <Icon23 />
                                <span className="hidden max-lg:flex max-lg:items-center max-lg:pointer-events-none">
                                  Checkout
                                  <Icon22 />
                                </span>
                              </a>
                            </li>
                            <li className="hidden max-lg:list-item max-lg:pointer-events-none">
                              <a className="hidden max-lg:flex max-lg:py-2.5 max-md:items-center max-lg:gap-x-4 max-md:text-base max-md:leading-6 max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:items-start" href="/in/payments">
                                <Icon24 />
                                <span className="hidden max-lg:flex max-lg:items-center max-lg:pointer-events-none">
                                  Payments
                                  <Icon22 />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="hidden max-lg:h-[14.025rem] max-lg:flex max-lg:flex-col max-lg:gap-y-8 max-lg:[grid-column-start:belt] max-lg:[grid-column-end:belt] max-lg:[grid-row-start:belt] max-lg:[grid-row-end:belt] max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                        <li className="hidden max-lg:list-item max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none">
                          {"Customize & extend Shopify"}
                        </li>
                        {MediaTile3_data.map((d, i) => <MediaTile3 key={i} d={d} />)}
                      </ul>
                      <div className="hidden max-md:w-[21.4375rem] max-lg:block max-lg:relative max-md:mt-2 max-md:pb-10 max-md:px-4 max-lg:[grid-column-start:aside] max-lg:[grid-column-end:aside] max-lg:[grid-row-start:aside] max-lg:[grid-row-end:aside] max-lg:pointer-events-none md:max-lg:w-83.5 md:max-lg:pl-10 md:max-lg:self-stretch before:content-[''] before:block before:absolute before:-top-10 before:bottom-0 before:inset-x-0 before:z-0 before:w-[21.4375rem] before:h-[33.6875rem] before:bg-clr-2 before:rounded-tl-lg md:max-lg:before:-top-26 md:max-lg:before:-right-7.5 md:max-lg:before:-bottom-10 md:max-lg:before:w-91 md:max-lg:before:h-[1770.3px] md:max-lg:before:rounded-tl-[initial] 2xl:before:hidden after:content-[''] after:bg-clr-3 md:max-lg:after:block md:max-lg:after:absolute md:max-lg:after:-top-10 md:max-lg:after:right-[20.8125rem] md:max-lg:after:bottom-0 md:max-lg:after:left-0 md:max-lg:after:z-10 md:max-lg:after:w-px md:max-lg:after:h-[1666.3px] md:max-lg:after:bg-no-repeat 2xl:after:hidden">
                        <p className="hidden max-md:w-[19.4375rem] max-lg:block max-lg:relative max-lg:mb-6 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none md:max-lg:w-64">
                          Non-stop innovation
                        </p>
                        <ul className="hidden max-md:w-[19.4375rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:gap-y-10 max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none md:max-lg:w-64">
                          <li className="hidden max-lg:list-item max-lg:pointer-events-none">
                            <a className="hidden max-lg:inline max-lg:cursor-pointer max-lg:pointer-events-none" href="/editions/spring2026">
                              <video className="hidden max-lg:w-full max-md:h-45.5 max-lg:block max-lg:max-w-full max-lg:mb-3 max-lg:rounded-lg max-lg:overflow-clip max-lg:object-contain max-lg:aspect-[1.706/1] max-lg:align-middle max-lg:bg-clr-12 max-lg:pointer-events-none md:max-lg:h-37.5" playsInline poster="/assets/cloned/images/6c1377744fb2.png" preload="none">
                                <source className="hidden" src="/assets/cloned/videos/963449fe2789.webm" type="video/webm; codecs=av01.0.08M.08" />
                                <source className="hidden" src="/assets/cloned/videos/ae454ccc540e.mp4" type="video/mp4" />
                              </video>
                              <p className="hidden max-lg:flex max-lg:mb-0.5 max-lg:items-center max-lg:pointer-events-none">
                                Shopify Editions
                                <Icon22 />
                              </p>
                              <p className="hidden max-lg:block max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none">
                                150+ updates to Shopify, twice a year.
                              </p>
                            </a>
                          </li>
                          <li className="hidden max-lg:list-item max-lg:pointer-events-none">
                            <p className="hidden max-md:w-[19.4375rem] max-lg:block max-lg:relative max-lg:mb-6 max-lg:text-accent max-lg:text-xs max-lg:font-semibold max-lg:leading-[0.875rem] max-lg:tracking-[0.72px] max-lg:uppercase max-lg:text-pretty max-lg:pointer-events-none md:max-lg:w-64">
                              Latest updates
                            </p>
                            <ul className="hidden max-lg:flex max-lg:flex-col max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none">
                              {ListRow6_data.map((d, i) => <ListRow6 key={i} d={d} styles={ListRow6_styles[i]} />)}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {ListRow7_data.map((d, i) => <ListRow7 key={i} d={d} />)}
              </ul>
            </nav>
            <ul className="hidden max-md:h-[9.0625rem] max-lg:border-t max-lg:border-solid max-lg:border-t-clr-9 max-lg:flex max-lg:relative max-md:py-3.5 max-md:px-4 max-md:flex-col max-lg:text-center max-lg:[list-style-type:none] max-lg:list-outside max-lg:pointer-events-none md:max-lg:h-[5.9375rem] md:max-lg:p-4 md:max-lg:gap-5" data-ditto-id="style-ul-2">
              <li className="hidden max-lg:list-item max-md:py-1 max-lg:pointer-events-none md:max-lg:pt-2 md:max-lg:pb-1 md:max-lg:grow">
                <a className="hidden max-w-full w-full max-lg:h-11 max-lg:border-2 max-lg:border-solid max-lg:border-foreground max-lg:inline-block max-lg:py-2 max-lg:px-5 max-lg:rounded-full max-lg:self-center max-lg:overflow-hidden max-lg:text-foreground max-lg:[font-weight:550] max-lg:cursor-pointer max-lg:pointer-events-none" href="/login?ui_locales=en-IN">
                  Log in
                </a>
              </li>
              <li className="hidden max-lg:list-item max-md:py-1 max-lg:pointer-events-none md:max-lg:pt-2 md:max-lg:pb-1 md:max-lg:grow">
                <a className="hidden max-w-full w-full max-lg:h-11 max-lg:border-2 max-lg:border-solid max-lg:border-clr-0 max-lg:inline-block max-lg:py-2 max-lg:px-5 max-lg:rounded-full max-lg:self-center max-lg:overflow-hidden max-lg:text-background max-lg:[font-weight:550] max-lg:bg-foreground max-lg:cursor-pointer max-lg:pointer-events-none" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
                  Start for free
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main className="block" id="main" role="main">
          <div className="block">
            <div className="w-[8.5625rem] block fixed top-0 z-50 bg-color-003 h-1.5" />
            <section className="grid relative z-1 -my-px pt-36 bg-background grid-cols-[minmax(0,_1fr)]">
              <CtaSection />
              <article className="block bg-background" id="article">
                <div className="block relative">
                  <div className="block py-10 text-center max-lg:py-8 max-lg:[text-align:inherit]">
                    <div className="grid mx-22.5 gap-y-16 gap-x-6 grid-cols-12 max-md:mx-4 max-lg:gap-y-10 max-lg:gap-x-4 max-md:grid-cols-4 md:max-lg:mx-7.5 2xl:max-w-355 2xl:mx-62.5">
                      <div className="block max-w-192 col-start-[span_12] col-end-[span_12] max-md:col-start-[span_4] max-md:col-end-[span_4] max-lg:max-w-none md:max-lg:col-start-[span_8] md:max-lg:col-end-[span_8]">
                        <nav className="block pb-2 text-sm [font-weight:550] leading-3.5 uppercase max-lg:pb-1" data-component="nav">
                          <a className="inline text-base leading-6 cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-clr-26" data-component="link" href="/in/blog/">
                            <span className="inline">
                              blog
                            </span>
                          </a>
                          <span className="inline px-2 max-lg:px-1">
                            •
                          </span>
                          <a className="inline text-base leading-6 cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-clr-26" data-component="link" href="/in/blog/topics/social-media-optimization">
                            <span className="inline">
                              Social Media Optimization
                            </span>
                          </a>
                        </nav>
                        <h1 className="block text-[3.5rem] [font-weight:330] leading-[3.8125rem] tracking-[-0.56px] max-lg:text-4xl max-lg:leading-[2.5rem] max-lg:tracking-[inherit]" data-component="heading">
                          <span className="inline" itemProp="headline">
                            Meta Ads Library: 9 Ways To Use It in 2026
                          </span>
                        </h1>
                        <p className="block opacity-60 mt-4 text-xl leading-7 max-lg:mt-2 max-lg:text-lg max-lg:leading-[1.5625rem]">
                          Use the Meta Ad Library to conduct audience research, check up on your competition, and get ideas for your own ad strategies.
                        </p>
                        <div className="hidden mt-6 justify-center items-center gap-6 w-full max-lg:flex max-lg:mt-4 max-lg:gap-4 max-lg:[justify-content:initial]" itemProp="author">
                          <div className="w-14 h-14 flex rounded-full justify-center items-center shrink-0 overflow-hidden text-background text-xl [font-weight:650] leading-7 bg-clr-13 max-lg:w-12 max-lg:h-12">
                            <div className="block min-w-0">
                              AS
                            </div>
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="block min-w-0 text-xl [font-weight:450] leading-6.5 max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px] max-lg:[font-size:inherit]">
                              <a className="inline text-base [font-weight:550] leading-6 cursor-pointer max-lg:tracking-[normal] max-lg:[font-size:inherit]" href="/in/blog/authors/alexandra-sheehan">
                                <span className="inline">
                                  <span className="inline" itemProp="name">
                                    by Alexandra Sheehan
                                  </span>
                                </span>
                              </a>
                            </span>
                            <span className="block min-w-0 text-color-001 text-sm [font-weight:420] leading-[1.125rem]">
                              21 May 2026 • 11 min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid mx-22.5 gap-y-16 gap-x-6 grid-cols-12 max-md:mx-4 max-lg:gap-y-10 max-lg:gap-x-4 max-md:grid-cols-4 md:max-lg:mx-7.5 2xl:max-w-355 2xl:mx-62.5">
                    <div className="block col-start-[span_12] col-end-[span_12] max-md:col-start-[span_4] max-md:col-end-[span_4] md:max-lg:col-start-[span_8] md:max-lg:col-end-[span_8]">
                      <div className="h-full flex justify-center overflow-hidden max-md:-mx-4 md:max-lg:-mx-7.5">
                        <img className="w-auto h-[38.6875rem] block max-w-full overflow-clip aspect-[auto_1848/782] align-middle max-md:h-[13.1875rem] md:max-lg:h-108 2xl:h-200" data-component="image" alt="3D magnifying glass hovering over a frosted square in glowing neon light" height="782" src="/assets/cloned/images/982940f06167.jpg" srcSet="/assets/cloned/images/1c4a3ab6ae20.jpg 200w, /assets/cloned/images/1674816fbdfe.jpg 400w, /assets/cloned/images/2c99e20b93c8.jpg 600w, /assets/cloned/images/beeeed946256.jpg 800w, /assets/cloned/images/cf88085de5f1.jpg 1000w, /assets/cloned/images/38fb90005a1c.jpg 1200w, /assets/cloned/images/eb1321806009.jpg 1400w, /assets/cloned/images/fbd8adfd9acf.jpg 1600w, /assets/cloned/images/d427977e634d.jpg 1800w" width="1848" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid my-10 mx-22.5 gap-y-16 gap-x-10 grid-cols-12 max-lg:my-8 max-md:mx-4 max-lg:gap-y-10 max-lg:gap-x-8 max-md:grid-cols-4 md:max-lg:mx-7.5 2xl:max-w-355 2xl:mx-62.5">
                  <div className="block col-start-[span_3] col-end-[span_3] max-md:col-start-[span_4] max-md:col-end-[span_4] md:max-lg:col-start-[span_8] md:max-lg:col-end-[span_8]">
                    <nav className="h-[31.2rem] block sticky top-36 max-h-182 overflow-auto max-lg:p-4 max-lg:rounded-lg max-lg:bg-clr-12 max-lg:h-auto max-lg:static max-lg:top-auto max-lg:max-h-none max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] 2xl:h-[30.0625rem] 2xl:max-h-252" data-component="nav" aria-label="On this page">
                      <div className="block mb-16 max-lg:mb-10">
                        <p className="block mb-6 text-xl [font-weight:450] leading-6.5 max-lg:mb-4 max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px] max-lg:[font-size:inherit]">
                          On this page
                        </p>
                        <LogoCloudSection2 />
                      </div>
                      <div className="block p-6 bg-primary max-lg:p-4">
                        <p className="block text-[1.75rem] [font-weight:360] leading-[2.125rem] tracking-[-0.28px] max-lg:text-[1.375rem] max-lg:leading-6.5 max-lg:tracking-[-0.11px] max-lg:[font-weight:inherit]">
                          Start your online business today.
                        </p>
                        <p className="block text-[1.75rem] [font-weight:550] leading-[2.125rem] tracking-[-0.28px] max-lg:text-[1.375rem] max-lg:leading-6.5 max-lg:tracking-[-0.11px]">
                          For free.
                        </p>
                        <a className="border-b border-solid border-b-foreground flex mt-4 justify-between items-center text-lg [font-weight:550] leading-7 cursor-pointer max-lg:mt-2 max-lg:[font-size:inherit] max-lg:leading-[inherit] hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-clr-26" data-component="link" aria-label="External source: Start for free " href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"} rel="noopener noreferrer">
                          <span className="w-full flex justify-between items-center">
                            Start for free
                            <Icon26 />
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="block col-start-[span_6] col-end-[span_6] max-md:col-start-[span_4] max-md:col-end-[span_4] md:max-lg:col-start-[span_8] md:max-lg:col-end-[span_8]">
                    <div className="h-3575.5 block text-color-001 text-lg leading-[1.5625rem] max-md:h-[826.3875rem] max-lg:[font-weight:420] max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-size:inherit] md:max-lg:h-[11753.5px] 2xl:h-[13871.1px]" id="article-content" itemProp="articleBody">
                      <div className="h-full block">
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Advertising on Facebook, WhatsApp, and Instagram offers huge potential to reach customers because each platform has about three billion monthly users, according to "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.statista.com/statistics/272014/global-social-networks-ranked-by-number-of-users/" rel="nofollow noopener noreferrer" target="_blank">
                            Statista
                          </a>
                          {". "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"But competition for user attention is fierce, with 70% of companies overall and 77% to 78% of small to medium-sized businesses using Facebook and Instagram for marketing, according to Hubspot’s 2026 "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://hubspot-state-of-marketing-2026.replit.app/" rel="nofollow noopener noreferrer" target="_blank">
                            <em className="inline italic">
                              State of Marketing
                            </em>
                            {" report"}
                          </a>
                          {". "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/ads/library/" rel="nofollow noopener noreferrer" target="_blank">
                            Meta Ad Library
                          </a>
                          {" is a free research tool that lets you search all the active ads running across Meta technologies. Read on for nine different ways to use the Meta Ad Library to develop your "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/paid-advertising" target="_blank">
                            paid advertising
                          </a>
                          {" strategy."}
                        </p>
                        <div className="block" id="text-cta">
                          <div className="block">
                            <div className="block mb-6 p-8 rounded-3xl bg-surface max-lg:p-6" data-ditto-id="motion-div">
                              <div className="block">
                                <p className="block mb-6 text-foreground text-2xl leading-[1.9375rem] [overflow-wrap:anywhere] max-lg:mb-4 max-lg:text-lg max-lg:font-normal max-lg:leading-[1.4375rem] max-lg:tracking-[normal]">
                                  {"Start selling with "}
                                  <span className="inline-block -mb-1 overflow-hidden">
                                    <img className="w-[1.8125rem] h-[1.8125rem] inline-block max-w-full overflow-clip align-middle max-lg:w-5.5 max-lg:h-5.5" data-component="image" alt="" aria-hidden="true" src="/assets/cloned/svg/f9f1e51ad4a2.svg" />
                                  </span>
                                  {" Shopify"}
                                </p>
                                <div className="flex justify-center">
                                  <form className="flex flex-col justify-center w-full">
                                    <div className="h-full flex flex-col">
                                      <div className="flex relative rounded-full justify-between items-start text-foreground bg-background shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--border)_0px_0px_0px_1px_inset,var(--clr-0)_0px_0px_0px_0px] w-full">
                                        <input className="w-auto h-[3.5625rem] block pt-6 pb-2 px-6 overflow-clip cursor-text max-lg:h-13.5" data-component="input" aria-describedby="email-form-:r0:-description" id="email-form-:r0:" name="email-form-:r0:" placeholder=" " type="email" />
                                        <label className="w-29 h-6 block absolute top-[2.2rem] left-6 z-10 min-w-0 text-base leading-6 [translate:0px_-16px] cursor-default pointer-events-none max-lg:w-[119.5px] max-md:[translate:0px_-19px] max-lg:[font-size:inherit] hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" htmlFor="email-form-:r0:">
                                          Enter your email
                                        </label>
                                        <div className="block max-lg:hidden">
                                          <button className="w-[9.1875rem] h-13 border-2 border-solid border-clr-0 inline-block my-1 mr-1 py-3 px-5 rounded-full self-center overflow-hidden text-background text-base [font-weight:550] leading-6 text-center whitespace-nowrap text-nowrap bg-foreground cursor-pointer max-w-full hover:bg-clr-23" data-component="button" role="link" type="submit">
                                            Start for free
                                          </button>
                                        </div>
                                      </div>
                                      <p className="flex pt-4 text-sm [font-weight:420] leading-4 [overflow-wrap:anywhere] max-lg:pt-2 max-lg:tracking-[normal] max-lg:[font-weight:inherit]" id="email-form-:r0:-description">
                                        <span className="block text-clr-5 leading-[1.125rem]">
                                          You agree to receive Shopify marketing emails.
                                        </span>
                                      </p>
                                      <div className="hidden min-w-0 pt-2 w-full max-lg:block">
                                        <button className="border-2 border-solid border-clr-0 inline-block my-1 mr-1 py-4 px-5 rounded-full self-center overflow-hidden text-background text-base [font-weight:550] leading-6 text-center whitespace-nowrap text-nowrap bg-foreground cursor-pointer max-w-full w-full max-lg:h-15 max-lg:tracking-[normal] max-lg:[font-size:inherit]" role="link" type="submit">
                                          Start for free
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {" "}
                        <h2 className="block mt-10 mb-6 text-foreground text-[2.75rem] [font-weight:330] leading-[3rem] tracking-[-0.44px] max-lg:mt-8 max-lg:mb-4 max-lg:text-3xl max-lg:leading-[2.125rem] max-lg:tracking-[normal]" data-component="heading" id="1">
                          What is the Meta Ad Library?
                        </h2>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"The "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/ads/library/" rel="nofollow noopener noreferrer" target="_blank">
                            Meta Ad Library
                          </a>
                          {" is a digital database containing information about ads currently running across Facebook, Instagram, WhatsApp, Threads, Messenger, and websites partnering with Meta via its Audience Network. All currently active ads are searchable there. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          Businesses can also use the Meta Ad Library to research other company’s ads and apply learnings to their own advertising strategies.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Meta launched what was then known as the Facebook Ad Library in 2018 as the company "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.nytimes.com/2019/07/25/technology/facebook-ad-library.html" rel="nofollow noopener noreferrer" target="_blank">
                            faced criticism
                          </a>
                          {" over transparency about political advertising on its platform. While the Meta Ad Library only displays non-political ads that are currently active, it stores details on ads about social issues, elections, and politics for seven years. Those details include information on spend, reach, and funders. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Another tool, the "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/ads/library/report/" rel="nofollow noopener noreferrer" target="_blank">
                            Meta Ad Library Report
                          </a>
                          , shows spending breakdowns for political ads over the past seven years.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"If ads target users in the European Union (EU) or its associated territories, Meta displays additional information on who paid for the ad, which could be different from the advertiser. These ads stay in the Meta Ad Library for one year after their last impression (US-targeted ads disappear as soon as they stop running). "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Meta also has an "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/ads/library/api/" rel="nofollow noopener noreferrer" target="_blank">
                            Ad Library API
                          </a>
                          {" available for users with programming knowledge who want to go deeper on political ads or ads delivered in the EU or United Kingdom (UK)."}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4" />
                        <div className="block relative mb-8 aspect-video">
                          <div className="block absolute top-0 inset-x-0 h-full" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                            <iframe className="w-full block max-w-full mb-8 overflow-clip align-middle [background-size:100%_100%] bg-no-repeat h-full aspect-video max-lg:mb-6 max-lg:[background-size:initial] max-lg:[background-repeat:initial]" style={{ backgroundImage: "url(\"/assets/cloned/images/7caf73cab86a.jpg\")" }} title="YouTube video" />
                          </div>
                        </div>
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4" />
                        {" "}
                        <h2 className="block mt-10 mb-6 text-foreground text-[2.75rem] [font-weight:330] leading-[3rem] tracking-[-0.44px] max-lg:mt-8 max-lg:mb-4 max-lg:text-3xl max-lg:leading-[2.125rem] max-lg:tracking-[normal]" data-component="heading" id="2">
                          How to access the Meta Ad Library
                        </h2>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Head to "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library" target="_blank">
                            facebook.com/ads/library
                          </a>
                          {" or search Meta Ad Library in your browser. You don’t need to be logged into a Facebook account to use the basic search functions, and the Meta Ad Library is free."}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          Here’s how to start searching for an ad:
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          1. Pick a country from the dropdown.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          2. Choose an Ad category. To search for ads for most consumer goods, select All ads.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"3. Enter a "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/what-are-keywords" target="_blank">
                            keyword
                          </a>
                          {" or advertiser name in the search bar."}
                        </p>
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4" />
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          4. Refine your search by filtering for language, advertiser, platform, media type, active status, and impressions by date.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"After you find an ad to analyze, select See Ad Details to learn more. Here, you can read the full ad copy, watch the video creative, and click through to the ad’s "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/landing-page-design" target="_blank">
                            landing pages
                          </a>
                          {". You can also use the Meta Ad Library’s "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/ads/library/branded_content/?source=fb-logo" rel="nofollow noopener noreferrer" target="_blank">
                            Branded Content
                          </a>
                          {" search page to see "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/sponsored-content" target="_blank">
                            sponsored content
                          </a>
                          {" from creators."}
                        </p>
                        {" "}
                        <h2 className="block mt-10 mb-6 text-foreground text-[2.75rem] [font-weight:330] leading-[3rem] tracking-[-0.44px] max-lg:mt-8 max-lg:mb-4 max-lg:text-3xl max-lg:leading-[2.125rem] max-lg:tracking-[normal]" data-component="heading" id="3">
                          When to use the Meta Ad Library for ad research
                        </h2>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"The Meta Ad Library helps marketers analyze "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/digital-marketing-trends" target="_blank">
                            advertising trends
                          </a>
                          {" and competitor ads on Meta platforms. Use the Meta Ad Library to:"}
                        </p>
                        {" "}
                        <ul className="block mb-2 pl-4 [list-style-type:disc] list-outside max-lg:mb-1">
                          <li className="list-item pl-1">
                            {"Find real-world inspiration for your own "}
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/instagram-ads" target="_blank">
                              Instagram ad
                            </a>
                            {" and "}
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/facebook-ad-strategies" target="_blank">
                              Facebook ad strategies
                            </a>
                            {" "}
                          </li>
                          <li className="list-item mt-2 pl-1 max-lg:mt-1">
                            Analyze competitors’ Meta ad campaigns
                          </li>
                          <li className="list-item mt-2 pl-1 max-lg:mt-1">
                            Validate new ideas by checking if similar ads exist, then plan how to improve them
                          </li>
                          <li className="list-item mt-2 pl-1 max-lg:mt-1">
                            {"Discover popular messaging on different "}
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/most-popular-social-media-platforms" target="_blank">
                              social platforms
                            </a>
                            {" "}
                          </li>
                          <li className="list-item mt-2 pl-1 max-lg:mt-1">
                            {"Conduct an ad search for keywords and "}
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/keyword-phrase" target="_blank">
                              keyword phrases
                            </a>
                            {" relevant to your brand"}
                          </li>
                          <li className="list-item mt-2 pl-1 max-lg:mt-1">
                            {"Search for "}
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/branded-content" target="_blank">
                              branded content
                            </a>
                            {" to understand how brands leverage "}
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/partner-marketing" target="_blank">
                              paid partnerships
                            </a>
                            {" "}
                          </li>
                        </ul>
                        {" "}
                        <p className="block my-6 [overflow-wrap:anywhere] max-lg:my-4">
                          {"If you "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/sell-on-facebook" target="_blank">
                            sell on Facebook
                          </a>
                          {" or Instagram, reviewing other brands’ ads can reveal the tactics those companies use to drive "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/brand-awareness" target="_blank">
                            brand awareness
                          </a>
                          {" and website traffic. Then, replicate those strategies in your own Meta ads. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"If you’re on Shopify, you can quickly start creating your own ads on Meta by installing the "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://apps.shopify.com/facebook" target="_blank">
                            {"Facebook & Instagram app"}
                          </a>
                          {" to your online store."}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"You’ll create your Meta ads through Meta Ads Manager, which you’ll automatically gain access to when you "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/create-facebook-business-page" target="_blank">
                            create a Facebook business page
                          </a>
                          {". "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"One way to apply what you learn is to create "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/retargeting-previous-customers" target="_blank">
                            retargeting ads
                          </a>
                          {", which you can make by adding the "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel" target="_blank">
                            Meta pixel
                          </a>
                          {" to your Shopify site. This line of code lets you show individual customers the products they browsed but didn’t buy."}
                        </p>
                        {" "}
                        <div className="border-t-2 border-solid border-t-color-003 flex my-12 p-8 flex-col gap-6 bg-surface max-lg:p-6 max-lg:gap-4">
                          <p className="block text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] tracking-[-0.68px] [overflow-wrap:anywhere] max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.52px]">
                            Start selling your products on Facebook
                          </p>
                          <p className="block -mt-4 [overflow-wrap:anywhere] max-lg:-mt-2">
                            Shopify comes with powerful tools that help you list, promote and sell products on Facebook. Create product collections, showcase your brand and products, and make sales on Facebook from one place.
                          </p>
                          <a className="block py-2.5 px-[1.375rem] rounded-full self-start text-background [font-weight:550] bg-foreground cursor-pointer hover:bg-clr-23" data-component="link" href={"https://www.shopify.com/facebook-instagram?itcat=coreblog&itterm=shopify-facebook-instagram-sales-channel-cta"} rel="noopener noreferrer" target="_blank">
                            Start selling on Facebook
                          </a>
                        </div>
                        {" "}
                        <h2 className="block mt-10 mb-6 text-foreground text-[2.75rem] [font-weight:330] leading-[3rem] tracking-[-0.44px] max-lg:mt-8 max-lg:mb-4 max-lg:text-3xl max-lg:leading-[2.125rem] max-lg:tracking-[normal]" data-component="heading" id="4">
                          9 ways to use the Meta Ad Library
                        </h2>
                        {" "}
                        <ol className="block mb-2 pl-4 [list-style-type:decimal] list-outside max-lg:mb-1">
                          {ListRow8_data.map((d, i) => <ListRow8 key={i} d={d} styles={ListRow8_styles[i]} />)}
                        </ol>
                        {" "}
                        <p className="block my-6 [overflow-wrap:anywhere] max-lg:my-4">
                          Here are nine ways your business can use the Ad Library to gain strategic insights and find creative inspiration.
                        </p>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="11">
                          1. View more ads from the same advertiser
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          If you’re scrolling through Facebook or Instagram and see an ad that catches your eye, use the Meta Ad Library to see other ads run by the same advertiser. This helps you find inspiration from brands with strong creative assets.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"To view multiple ads by the same brand, navigate to the Meta Ad Library, select your country (or select All to see global ads from the brand), then select “All ads.” Next, enter the brand’s name in the search bar. A dropdown will appear with profiles containing that name. Select the one you’re looking for to see their ads. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Here’s the Meta Ad Library page for cosmetics brand "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.rarebeauty.com/" rel="nofollow noopener noreferrer" target="_blank">
                            Rare Beauty
                          </a>
                          :
                        </p>
                        {" "}
                        <figure className="block mb-8 text-left max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Four Meta Ad Library search results for Rare Beauty." src="/assets/cloned/images/fc1fc62d155c.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="22">
                          2. Search keywords related to your business
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          If you want to see Meta ads relevant to your business, search keywords related to your industry or products in the Meta Ad Library. This will give you an idea of current creative and messaging, so that you can spot trends.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          For example, a vegan food brand might search “vegan condiments” and other keywords related to specific products it sells, such as “vegan tzatziki” or “vegan mozzarella.”
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/how-to-do-keyword-research" target="_blank">
                            Keyword research
                          </a>
                          , which is a part of search engine optimization (
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/free-seo-tools" target="_blank">
                            SEO
                          </a>
                          ), can help you find the most relevant phrases to search in the Meta Ad Library.
                        </p>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="33">
                          3. Check out your competitors
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Use the Meta Ad Library to run a "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/competitive-analysis" target="_blank">
                            competitive analysis
                          </a>
                          {" on rival brands’ advertising strategies. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"When you research another company’s ads, look for patterns and infer what’s performing well. If a company uses similar imagery and copy across its ads, it could indicate these creative assets perform well. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"You might also look for patterns in the types of ads (e.g., video, infographic) and try a similar mix for your own business. For example, "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://chamberlaincoffee.com/" rel="nofollow noopener noreferrer" target="_blank">
                            Chamberlain Coffee
                          </a>
                          {" primarily uses shoppable ads in a video format, although it also runs a handful of single image (as opposed to carousel) ads."}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          To see a competitor’s Meta ads, type their name in the Meta Ad Library search bar, then select their profile from the dropdown. You’ll then see all the brand’s current Meta ads.
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Chamberlain Coffee search results on Meta Ad Library showing four ads." src="/assets/cloned/images/09b2dad8249f.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"You can also access a brand’s Meta Ad Library page through Facebook by looking at Page Transparency, which includes historical information about the page. This includes information such as when it was created and any history of name changes. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Meta added the Page Transparency feature in an effort to increase the accountability for page owners and visibility into the history of pages on its platform. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"To see it on Facebook, navigate to the brand’s profile, then select the page name. Choose Transparency and Privacy Policy from the "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/website-pop-up-examples" target="_blank">
                            pop-up
                          </a>
                          .
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Gymshark Facebook page with pop-up showing Transparency and privacy policy option." src="/assets/cloned/images/38dc8e6f6957.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/Gymshark" rel="nofollow noopener noreferrer" target="_blank">
                              <em className="inline italic">
                                Facebook
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Gymshark’s page transparency on Facebook." src="/assets/cloned/images/b31febc73bc3.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.facebook.com/Gymshark" rel="nofollow noopener noreferrer" target="_blank">
                              <em className="inline italic">
                                Facebook
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="44">
                          4. Filter ads by country
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"If you "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/international-ecommerce" target="_blank">
                            sell internationally
                          </a>
                          , you might run different ad campaigns for customers in different locations. Seeing the ads running in those locations can give you an idea of what competitors are doing to target specific countries.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          To see ads in a certain country, go to the dropdown menu to pull up a list of countries. You can either scroll to find the country of your choice or start typing its name in the search box.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          If you’re looking up a specific competitor, you can search for the company, then filter the results by country.
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Meta Ad Library search function showing country options." src="/assets/cloned/images/43c547698ecf.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="55">
                          5. See how long ads have run
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          Examining ads’ runtime can help you estimate the success of different ads. For example, if a brand has run a particular ad for a long time, it may indicate this ad has proven particularly effective.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          To filter by date, conduct a search for a brand’s name in the Meta Ad Library, select Filters, scroll to the bottom of the pop-up window. Under “Impressions by Date,” fill in the single day or date range you want to see ads from. You can go back seven years.
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Meta Ad Library filtering options showing Impressions by date." src="/assets/cloned/images/0a6e61498f8e.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="66">
                          6. See where ads appear
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          You can filter searches by platform to see where ads appear (on Facebook, Instagram, Messenger, WhatsApp, Threads, or Audience Network). If you conduct a general search, you can see where ads are being run by looking at the icons next to Platforms, in the ad details section of each search result.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Use this information to plan where you should place your ads. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          For example, maybe you notice that a rival brand has ads on WhatsApp and decide to use this platform to remain competitive. Or maybe you notice that none of your competitors are running Messenger ads, so you try experimenting with that ad placement to reach a new potential audience.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Here you can see that bag brand "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://baboontothemoon.com/" rel="nofollow noopener noreferrer" target="_blank">
                            Baboon to the Moon
                          </a>
                          {" is running ads on Facebook, Instagram, Audience Network, and Messenger. "}
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Three Baboon To The Moon ads in the Meta Ad Library." src="/assets/cloned/images/ee8bbac50e25.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="77">
                          7. View ads by media type
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"You can publish a number of different types of ads to Facebook and Instagram, like video ads, "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/instagram-carousel" target="_blank">
                            carousels
                          </a>
                          , and static images. If you want to see how a particular brand uses a certain type of ad—or how brands use different media types for specific keywords—you can filter by media type.
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          Enter your search term, click the Filters button, then select your desired ad type from the Media Type dropdown menu.
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Meta Ad Library filter options showing options for media type." src="/assets/cloned/images/eceaaa54b556.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Use this feature to find inspiration on how to present products in different formats. For example, you might look at image ads to see how other brands showcase single products or series of products. "}
                        </p>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="88">
                          8. Analyze brand partnerships
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"You can use the Meta Ad Library to search for sponsored content from social media "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/what-is-a-content-creator" target="_blank">
                            content creators
                          </a>
                          {". This can give you an idea of competitors’ "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/influencer-marketing" target="_blank">
                            influencer marketing
                          </a>
                          {" strategies and help identify the types of creators you might want to work with."}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"From the Meta Ad Library homepage, select Branded Content, which is in the upper right corner. Search by company or creator and choose between branded Facebook posts or branded Instagram posts. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"The results you’ll see have Meta’s paid partnership tag. Meta requires influencers and "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/affiliate-marketing" target="_blank">
                            affiliates
                          </a>
                          {" to add this label to their sponsored posts."}
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Search results for Instagram branded content from Rare Beauty." src="/assets/cloned/images/b4e193d21a59.png" />
                          {" "}
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                          {" "}
                        </figure>
                        {" "}
                        <h3 className="block mt-10 mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mt-8 max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem] max-lg:tracking-[normal]" data-component="heading" id="99">
                          9. Find creative inspiration
                        </h3>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"You can search competitor brands to see the imagery and "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/what-is-copywriting" target="_blank">
                            copywriting
                          </a>
                          {" other industry players are using, or look to brands with advertising and "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/brand-strategy" target="_blank">
                            branding strategies
                          </a>
                          {" you admire, even if they’re outside of your industry. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"Here’s an example of an ad from olive oil brand "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="https://www.graza.co/" rel="nofollow noopener noreferrer" target="_blank">
                            Graza
                          </a>
                          {". The company uses a straightforward tagline, “Mayo made with only the good stuff,” and a simple product photo of three squeeze bottles to showcase its line of olive oil mayonnaise. Bright yellow and green make the ad visually pop. "}
                        </p>
                        {" "}
                        <p className="block mb-6 [overflow-wrap:anywhere] max-lg:mb-4">
                          {"The ad’s caption uses colloquial speech (“Mayo’s about 65% oil, which is why you gotta use the good stuff!”) to convey Graza’s approachable "}
                          <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/brand-personality" target="_blank">
                            brand personality
                          </a>
                          .
                        </p>
                        {" "}
                        <figure className="block mb-8 max-lg:mb-6">
                          <img className="w-132.5 h-74.5 inline-block max-w-full mt-8 overflow-clip align-middle max-md:w-[21.4375rem] max-md:h-[12.0625rem] max-lg:mt-6 md:max-lg:w-177 md:max-lg:h-99.5 2xl:w-172.5 2xl:h-97" data-component="image" alt="Graza ad for mayonnaise and aioli in the Meta Ad Library." src="/assets/cloned/images/1648906b6f68.png" />
                          <figcaption className="block mt-2 mb-8 text-sm [font-weight:420] leading-[1.125rem] max-lg:mb-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]">
                            <em className="inline italic">
                              {"Source: "}
                            </em>
                            <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library">
                              <em className="inline italic">
                                Meta Ad Library
                              </em>
                            </a>
                          </figcaption>
                        </figure>
                        {" "}
                        <div className="border-t-2 border-solid border-t-color-003 block my-8 p-8 text-sm [font-weight:420] leading-[1.125rem] text-left bg-surface max-lg:my-6 max-lg:p-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]" id=":R0:">
                          <h2 className="block mb-6 text-foreground text-[2.125rem] [font-weight:330] leading-[2.4375rem] max-lg:mb-4 max-lg:text-[1.625rem] max-lg:leading-[1.875rem]" data-component="heading">
                            Read more
                          </h2>
                          <ul className="block pl-4 [list-style-type:disc] list-outside">
                            {ListRow9_data.map((d, i) => <ListRow9 key={i} d={d} />)}
                          </ul>
                        </div>
                        <div className="border-t-2 border-solid border-t-color-003 block my-10 p-8 text-sm [font-weight:420] leading-[1.125rem] bg-surface max-lg:my-8 max-lg:p-6 max-lg:tracking-[normal] max-lg:[font-weight:inherit]" id="faq-section">
                          <div className="block">
                            <h2 className="block mb-6 text-foreground text-[1.75rem] [font-weight:360] leading-[2.125rem] tracking-[-0.28px] max-lg:mb-4 max-lg:text-[1.375rem] max-lg:font-normal max-lg:leading-6.5 max-lg:tracking-[-0.11px]" data-component="heading" id="5">
                              Meta Ad Library FAQ
                            </h2>
                            {" "}
                            <div className="block mb-6" itemProp="mainEntity">
                              <h3 className="block mb-6 text-foreground text-xl [font-weight:450] leading-6.5 max-lg:mb-4 max-lg:text-base max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px]" data-component="heading" itemProp="name">
                                How do I access the Meta Ad Library?
                              </h3>
                              {" "}
                              <div className="block" itemProp="acceptedAnswer">
                                <p className="block mb-6 text-lg font-normal leading-[1.5625rem] [overflow-wrap:anywhere] max-lg:mb-4 max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-weight:inherit]" itemProp="text">
                                  Access the Meta Ad Library in one of two ways:
                                </p>
                                {" "}
                                <ul className="block pl-4 [list-style-type:disc] list-outside">
                                  <li className="list-item pl-1">
                                    {"Visit "}
                                    <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="http://facebook.com/ads/library" target="_blank">
                                      facebook.com/ads/library
                                    </a>
                                    {" "}
                                  </li>
                                  <li className="list-item mt-2 pl-1 max-lg:mt-1">
                                    {"Scroll to the Page Transparency section of any Facebook page, then select See All > Go to Ads Library"}
                                  </li>
                                </ul>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <div className="block mb-6" itemProp="mainEntity">
                              <h3 className="block mb-6 text-foreground text-xl [font-weight:450] leading-6.5 max-lg:mb-4 max-lg:text-base max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px]" data-component="heading" itemProp="name">
                                Does the Meta Ad Library show all ads?
                              </h3>
                              {" "}
                              <div className="block" itemProp="acceptedAnswer">
                                <p className="block text-lg font-normal leading-[1.5625rem] [overflow-wrap:anywhere] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-weight:inherit]" itemProp="text">
                                  {"No, the Meta Ad Library does not show all ads. It only shows ads running on Meta Ads. It does not include inactive ads and ads from other platforms, like "}
                                  <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/google-ads-campaign" target="_blank">
                                    Google Ads
                                  </a>
                                  . Ads related to socio-political issues, elections, or politics remain visible in the Meta Ad Library for seven years, even if they’re no longer active. Non-political ads are displayed only while they’re running.
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <div className="block mb-6" itemProp="mainEntity">
                              <h3 className="block mb-6 text-foreground text-xl [font-weight:450] leading-6.5 max-lg:mb-4 max-lg:text-base max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px]" data-component="heading" itemProp="name">
                                Is the Meta Ad library accurate?
                              </h3>
                              {" "}
                              <div className="block" itemProp="acceptedAnswer">
                                <p className="block text-lg font-normal leading-[1.5625rem] [overflow-wrap:anywhere] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-weight:inherit]" itemProp="text">
                                  Yes. According to Meta, the Ad Library contains “all the ads currently running across Meta technologies,” including Facebook, Instagram, Messenger, Threads, and Audience Network. This makes it a reliable tool to find competitor ads and study trends in real time.
                                </p>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <div className="block" itemProp="mainEntity">
                              <h3 className="block mb-6 text-foreground text-xl [font-weight:450] leading-6.5 max-lg:mb-4 max-lg:text-base max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px]" data-component="heading" itemProp="name">
                                Is $20 a day enough for Facebook ads?
                              </h3>
                              {" "}
                              <div className="block" itemProp="acceptedAnswer">
                                <p className="block text-lg font-normal leading-[1.5625rem] [overflow-wrap:anywhere] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-weight:inherit]" itemProp="text">
                                  {"Yes, $20 a day can be enough for Facebook Ads. Users bid on their ads, and the Meta Ads platform lets you cap spending to stay within a set budget. The average "}
                                  <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/blog/facebook-ads-cost" target="_blank">
                                    Facebook Ads cost
                                  </a>
                                  {" is 87¢ per click and $16.06 per thousand impressions."}
                                </p>
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
                    <div className="border-t border-solid border-t-clr-14 flex my-10 py-6 justify-between items-center gap-6 max-lg:my-8 max-lg:py-4 max-md:flex-col max-lg:gap-4 max-md:[justify-content:initial] max-md:[align-items:initial]">
                      <div className="flex items-center gap-6 max-lg:gap-4">
                        <div className="w-16 h-16 flex rounded-full justify-center items-center shrink-0 overflow-hidden text-background text-xl [font-weight:650] leading-7 bg-clr-13 max-md:w-14 max-md:h-14">
                          <div className="block">
                            AS
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 max-lg:gap-1">
                          <span className="block text-lg leading-[1.5625rem] max-lg:[font-weight:420] max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-size:inherit]">
                            <span className="inline" itemProp="author">
                              {"by "}
                              <a className="inline cursor-pointer" data-component="link" href="/in/blog/authors/alexandra-sheehan" itemProp="url">
                                <span className="inline" itemProp="name">
                                  Alexandra Sheehan
                                </span>
                              </a>
                            </span>
                          </span>
                          <span className="block text-color-001 text-sm [font-weight:420] leading-[1.125rem]">
                            {"Updated on "}
                            <time className="inline" dateTime="2026-05-21">
                              21 May 2026
                            </time>
                          </span>
                        </div>
                      </div>
                      <div className="block">
                        <p className="block text-sm [font-weight:550] leading-[1.125rem] text-right uppercase max-md:[text-align:inherit]">
                          Share article
                        </p>
                        <ul className="flex mt-4 gap-4 [list-style-type:none] list-outside max-lg:mt-2 max-lg:gap-2">
                          {Logo2_data.map((d, i) => <Logo2 key={i} d={d} />)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="block col-start-[span_3] col-end-[span_3] max-md:col-start-[span_4] max-md:col-end-[span_4] md:max-lg:col-start-[span_8] md:max-lg:col-end-[span_8]">
                    <aside className="flex flex-col gap-160 max-lg:hidden">
                      <div className="flex items-center gap-6" itemProp="author">
                        <div className="w-14 h-14 flex rounded-full justify-center items-center shrink-0 overflow-hidden text-background text-xl [font-weight:650] leading-7 bg-clr-13">
                          <div className="block">
                            AS
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <span className="block text-xl [font-weight:450] leading-6.5">
                            <a className="inline text-base [font-weight:550] leading-6 cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-clr-26" data-component="link" href="/in/blog/authors/alexandra-sheehan">
                              <span className="inline">
                                <span className="inline" itemProp="name">
                                  by Alexandra Sheehan
                                </span>
                              </span>
                            </a>
                          </span>
                          <span className="block text-color-001 text-sm [font-weight:420] leading-[1.125rem]">
                            21 May 2026 • 11 min read
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-solid border-t-border block pt-6">
                        <div className="flex flex-col">
                          <div className="block">
                            <h3 className="block text-2xl leading-[1.9375rem] tracking-[-0.24px] text-balance" data-component="heading">
                              The newsletter for entrepreneurs
                            </h3>
                            <div className="block pt-2 text-color-001 text-lg leading-[1.5625rem]">
                              Join millions of self-starters in getting business resources, tips, and inspiring stories in your inbox.
                            </div>
                          </div>
                          <div className="block max-w-128 pt-6">
                            <form className="block" id=":Rit95n5H1:">
                              <div className="flex flex-col">
                                <div className="flex relative rounded-full justify-between items-start bg-background shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-15)_0px_0px_0px_1px_inset,var(--clr-0)_0px_0px_0px_0px] w-full">
                                  <input className="w-full h-14 block min-w-0 pt-6 pb-2 px-6 flex-1 overflow-clip cursor-text" data-component="input" id=":Rit95n5:" name="email" placeholder=" " type="email" />
                                  <label className="w-[4.9375rem] h-6 absolute top-8 left-6 z-10 min-w-0 overflow-hidden [translate:0px_-16px] cursor-default pointer-events-none line-clamp-1 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" htmlFor=":Rit95n5:">
                                    Enter email
                                  </label>
                                  <div className="contents min-w-0 max-lg:hidden">
                                    <button className="border-2 border-solid border-clr-0 flex my-1 mr-1 py-2.5 rounded-full justify-center items-center self-center shrink-0 gap-2 overflow-hidden text-background [font-weight:550] text-center whitespace-nowrap text-nowrap bg-foreground cursor-pointer max-w-full w-11 h-11 hover:bg-clr-23" data-component="button" aria-disabled="false" aria-label="Subscribe" type="submit">
                                      <Icon27 />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <input className="w-px h-px block absolute -m-px overflow-clip whitespace-nowrap text-nowrap [clip-path:inset(50%)] cursor-text" data-component="input" aria-hidden="true" id=":Rfit95n5:" name="address" />
                              <p className="block max-w-128 pt-4 text-color-001 text-sm [font-weight:420] leading-[1.125rem]">
                                {"Unsubscribe anytime. By entering your email, you agree to receive marketing emails from Shopify. By proceeding, you agree to the "}
                                <a className="inline [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/in/legal/terms" target="_blank">
                                  Terms and Conditions
                                </a>
                                {" and "}
                                <a className="inline [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href="/in/legal/privacy" target="_blank">
                                  Privacy Policy
                                </a>
                                .
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-solid border-t-border flex pt-6 flex-col gap-6">
                        <p className="block text-2xl leading-[1.9375rem] tracking-[-0.24px] capitalize">
                          popular posts
                        </p>
                        {Tile_data.map((d, i) => <Tile key={i} d={d} />)}
                      </div>
                      <div className="flex p-8 rounded-lg flex-col items-start gap-6 bg-clr-16">
                        <img className="w-full h-25.5 block max-w-full rounded-sm overflow-clip align-middle 2xl:h-[9.1875rem]" data-component="image" alt="Start for free" src="/assets/cloned/images/474919b37751.png" />
                        <p className="block text-[1.75rem] [font-weight:360] leading-[2.125rem] tracking-[-0.28px]">
                          The point of sale for every sale.
                        </p>
                        <a className="h-11 border-2 border-solid border-clr-0 block py-2 px-5 rounded-full self-start overflow-hidden text-background [font-weight:550] bg-foreground cursor-pointer max-w-full hover:bg-clr-23" data-component="link" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
                          Start for free
                        </a>
                      </div>
                      <div className="border-t border-solid border-t-border flex pt-6 flex-col gap-6">
                        <p className="block text-2xl leading-[1.9375rem] tracking-[-0.24px] capitalize">
                          popular posts
                        </p>
                        {Tile_data2.map((d, i) => <Tile key={i} d={d} />)}
                      </div>
                      <div className="border-t border-solid border-t-border block pt-6">
                        <div className="flex flex-col">
                          <div className="block">
                            <h3 className="block text-2xl leading-[1.9375rem] tracking-[-0.24px] text-balance" data-component="heading">
                              Make Shopify a preferred source
                            </h3>
                            <div className="block pt-2 text-color-001 text-lg leading-[1.5625rem]">
                              Our latest articles will show up more often in Google Top Stories.
                            </div>
                          </div>
                          <div className="block max-w-128 pt-6">
                            <a className="h-11 border-2 border-solid border-clr-0 inline-block py-2 px-5 rounded-full self-center overflow-hidden text-background [font-weight:550] bg-foreground cursor-pointer max-w-full hover:bg-clr-23" data-component="button" aria-label="External source: Add Shopify as a preferred source on Google (Opens in a new window)" href="https://www.google.com/preferences/source?q=shopify.com" rel="noopener noreferrer" target="_blank">
                              Add Shopify
                            </a>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
                <div className="block" itemProp="publisher">
                  <div className="block" itemProp="logo" />
                </div>
                <div className="block" itemProp="author" />
              </article>
              <section className="flex relative z-1 -my-px py-10 flex-col gap-6 grid-cols-[100%] bg-background max-lg:py-8 max-lg:gap-4">
                <h2 className="block mx-22.5 text-[2.75rem] [font-weight:330] leading-[3rem] tracking-[-0.44px] capitalize max-md:mx-4 max-lg:text-3xl max-lg:leading-[2.125rem] max-lg:tracking-[inherit] md:max-lg:mx-7.5" data-component="heading">
                  popular posts
                </h2>
                <div className="flex relative flex-col gap-4 overflow-x-clip w-full" aria-roledescription="Carousel" role="region">
                  <div className="flex justify-center items-start gap-x-6 w-full" role="list">
                    {MediaTile5_data.map((d, i) => <MediaTile5 key={i} d={d} styles={MediaTile5_styles[i]} />)}
                  </div>
                  <div className="flex justify-center items-center gap-3" aria-label="Carousel controls" role="group">
                    <button className="block rounded-full text-background text-center bg-foreground cursor-pointer w-11 h-11 hover:bg-clr-23" data-component="button" aria-disabled="false" aria-label="Previous slide">
                      <Icon28 />
                    </button>
                    <button className="block rounded-full text-background text-center bg-foreground cursor-pointer w-11 h-11 hover:bg-clr-23" data-component="button" aria-disabled="false" aria-label="Pause carousel">
                      <div className="block relative mx-auto w-6 h-6">
                        <div className="w-6 h-full block absolute top-0 left-0">
                          <Icon29 />
                        </div>
                      </div>
                    </button>
                    <button className="block rounded-full text-background text-center bg-foreground cursor-pointer w-11 h-11 hover:bg-clr-23" data-component="button" aria-disabled="false" aria-label="Next slide">
                      <Icon30 />
                    </button>
                  </div>
                </div>
              </section>
              <CtaSection2 />
            </section>
            <section className="grid relative z-1 -my-px py-20 gap-y-16 bg-primary grid-cols-1 max-lg:py-16 max-lg:gap-y-10">
              <div className="grid mx-22.5 gap-y-16 gap-x-6 grid-cols-12 max-md:mx-4 max-lg:gap-y-10 max-lg:gap-x-4 max-md:grid-cols-4 md:max-lg:mx-7.5 2xl:max-w-355 2xl:mx-0">
                <div className="block col-start-3 col-end-[span_8] max-lg:col-start-1 max-md:col-end-[span_4]">
                  <div className="h-full flex flex-col">
                    <div className="block text-center">
                      <h2 className="block text-[3.5rem] [font-weight:330] leading-[3.8125rem] tracking-[-0.56px] text-balance max-lg:text-4xl max-lg:leading-[2.5rem] max-lg:tracking-[inherit]" data-component="heading">
                        Sell anywhere with Shopify
                      </h2>
                      <div className="block pt-4 text-color-001 text-xl leading-7 max-lg:pt-2 max-lg:text-lg max-lg:leading-[1.5625rem]">
                        Learn on the go. Try Shopify for free, and explore all the tools you need to start, run, and grow your business.
                      </div>
                    </div>
                    <div className="block max-w-128 mx-auto pt-6 max-lg:pt-4">
                      <div className="block">
                        <div className="flex flex-wrap justify-start gap-4 max-lg:gap-2">
                          <a className="border-2 border-solid border-clr-0 block py-3 px-6 rounded-full self-center overflow-hidden text-background text-lg [font-weight:550] leading-7 bg-foreground cursor-pointer whitespace-nowrap max-w-full max-lg:py-2 max-lg:px-5 max-lg:[font-size:inherit] max-lg:leading-[inherit] hover:bg-clr-23" data-component="link" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
                            Start for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="block max-w-128 mx-auto pt-4 text-color-001 text-sm [font-weight:420] leading-[1.125rem] text-center max-lg:pt-2">
                      Start free then enjoy 3 months for ₹20/month
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="grid relative py-20 px-22.5 gap-y-14 gap-x-6 text-muted-foreground bg-foreground grid-cols-5 max-md:flex max-md:px-8 max-md:flex-col max-md:gap-x-[initial] max-md:grid-cols-[initial] md:max-lg:px-7.5 md:max-lg:gap-x-4 md:max-lg:grid-cols-3 2xl:px-62.5">
          <a className="block text-background cursor-pointer w-11 h-[3.125rem]" data-component="link" aria-label="Back to the top" href="#main">
            <Illustration />
          </a>
          <ul className="grid gap-y-14 gap-x-6 col-start-[span_4] col-end-[span_4] [list-style-type:none] list-outside grid-cols-4 max-md:flex max-md:pb-2 max-md:flex-col max-md:gap-x-[initial] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-md:grid-cols-[initial] md:max-lg:gap-x-4 md:max-lg:col-start-[span_2] md:max-lg:col-end-[span_2] md:max-lg:grid-cols-2">
            <li className="list-item">
              <h3 className="block mb-6 text-background text-xl [font-weight:450] leading-5" data-component="heading">
                Shopify
              </h3>
              <ul className="flex flex-col gap-y-4 [list-style-type:none] list-outside">
                {ListRow10_data.map((d, i) => <ListRow10 key={i} d={d} />)}
              </ul>
            </li>
            <li className="list-item">
              <h3 className="block mb-6 text-background text-xl [font-weight:450] leading-5" data-component="heading">
                Ecosystem
              </h3>
              <ul className="flex flex-col gap-y-4 [list-style-type:none] list-outside">
                {ListRow11_data.map((d, i) => <ListRow11 key={i} d={d} styles={ListRow11_styles[i]} />)}
              </ul>
            </li>
            <li className="list-item">
              <h3 className="block mb-6 text-background text-xl [font-weight:450] leading-5" data-component="heading">
                Resources
              </h3>
              <ul className="flex flex-col gap-y-4 [list-style-type:none] list-outside">
                {ListRow12_data.map((d, i) => <ListRow12 key={i} d={d} styles={ListRow12_styles[i]} />)}
              </ul>
            </li>
            <li className="list-item">
              <h3 className="block mb-6 text-background text-xl [font-weight:450] leading-5" data-component="heading">
                Support
              </h3>
              <ul className="flex flex-col gap-y-4 [list-style-type:none] list-outside">
                {ListRow10_data2.map((d, i) => <ListRow10 key={i} d={d} />)}
              </ul>
            </li>
          </ul>
          <div className="border-t border-solid border-t-clr-19 flex pt-10 items-center gap-y-7 gap-x-10 col-start-[span_5] col-end-[span_5] w-full max-md:flex-col max-md:[align-items:initial] max-md:gap-x-[initial] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:flex-wrap md:max-lg:col-start-[span_3] md:max-lg:col-end-[span_3]">
            <div className="block relative max-md:hidden">
              <button className="h-6.5 inline-block text-color-004 text-center cursor-pointer mx-auto hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-ditto-id="interaction-region-navigation-current-india" data-component="button" aria-controls="regionSelector" aria-expanded="false" aria-haspopup="true" aria-label="Region Navigation. Current: India" type="button">
                <span className="inline-flex items-center gap-x-1 whitespace-nowrap text-nowrap">
                  <Icon31 />
                  <span className="block overflow-hidden">
                    India | English
                  </span>
                  <Icon32 />
                </span>
              </button>
              <div className="w-264 hidden absolute bottom-[calc(100%_+_80px)] left-0 z-50 rounded-lg text-background leading-8 bg-color-002 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-20)_0px_8px_48px_0px,var(--clr-21)_0px_4px_8px_0px,var(--clr-22)_0px_0px_1px_0px] max-w-[calc(100vw-(var(--margin,var(--spacing-margin))*2))]" data-ditto-id="interaction-regionselector" aria-hidden="true" id="regionSelector">
                <ul className="block py-10 px-14 gap-7 [list-style-type:none] list-outside" id="region-nav">
                  {ListRow13_data.map((d, i) => <ListRow13 key={i} d={d} />)}
                  <li className="flex mb-7 flex-col">
                    <div className="flex min-w-0 items-center leading-6">
                      <span className="block min-w-0">
                        India
                      </span>
                      <Icon33 />
                    </div>
                    <div className="flex min-w-0 mt-1 flex-wrap">
                      <span className="flex min-w-0 items-center">
                        <a className="block min-w-0 text-muted-foreground text-sm leading-5 cursor-pointer" href={"/in/blog/ad-library-facebook?country=in&lang=en"} lang="en">
                          English
                        </a>
                      </span>
                    </div>
                  </li>
                  {ListRow14_data.map((d, i) => <ListRow14 key={i} d={d} />)}
                </ul>
              </div>
            </div>
            <div className="hidden relative min-w-0 max-md:block">
              <button className="inline-block text-color-004 text-center cursor-pointer mx-auto" aria-label="Region Navigation. Current: India" type="button">
                <span className="inline-flex items-center gap-x-1 whitespace-nowrap text-nowrap">
                  <Icon34 />
                  <span className="block min-w-0 overflow-hidden">
                    India | English
                  </span>
                  <Icon35 />
                </span>
              </button>
            </div>
            <ul className="w-[598.5px] flex gap-x-10 [list-style-type:none] list-outside max-md:w-[19.4375rem] max-md:flex-col max-md:gap-y-4 md:max-lg:w-177 2xl:w-169.5 2xl:mr-[12.6875rem]">
              {ListRow10_data3.map((d, i) => <ListRow10 key={i} d={d} />)}
              <li className="list-item">
                <a className="inline cursor-pointer hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="https://privacy.shopify.com/en">
                  <span className="flex items-center gap-1.5 hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]">
                    Your Privacy Choices
                    <img className="block max-w-full shrink-0 overflow-clip aspect-[auto_30/14] align-middle h-3.5 w-[1.875rem]" data-component="image" alt="California Consumer Privacy Act (CCPA) Opt-Out Icon" height="14" src="/assets/cloned/svg/b732dd841b61.svg" width="30" />
                  </span>
                </a>
              </li>
            </ul>
            <LogoCloudSection3 />
          </div>
        </footer>
      </div>
      <Icon36 />
      {" "}
      <DittoWire spec={{"kind":"disclosure","items":[{"trigger":"interaction-region-navigation-current-india","panel":"interaction-regionselector","isDialog":false,"hoverOpen":false,"backdropClose":false,"closes":[],"triggerOn":{"display":"inline-block","visibility":"visible","opacity":"1","position":"static","height":"26px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"139px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(224, 224, 224)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"triggerOff":{"display":"inline-block","visibility":"visible","opacity":"1","position":"static","height":"26px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"139px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(224, 224, 224)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"1","position":"absolute","height":"366.5px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"-446.5px","right":"-917px","bottom":"106px","left":"0px","width":"1056px","zIndex":"50","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(255, 255, 255)","backgroundColor":"oklch(0.21 0.006 285.885)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(15, 18, 20) 0px 8px 48px 0px, rgba(66, 71, 76, 0.06) 0px 4px 8px 0px, rgba(0, 0, 0, 0.9) 0px 0px 1px 0px","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"absolute","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"calc(100% + 80px)","left":"0px","width":"1056px","zIndex":"50","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(255, 255, 255)","backgroundColor":"oklch(0.21 0.006 285.885)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(15, 18, 20) 0px 8px 48px 0px, rgba(66, 71, 76, 0.06) 0px 4px 8px 0px, rgba(0, 0, 0, 0.9) 0px 0px 1px 0px","transform":"none","fontWeight":"400","textDecorationLine":"none"},"shownBox":{"dx":0,"dy":-446,"w":1056,"h":367}}]}} />
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"anchor":"motion-div","opacity":"0","transform":"none","transition":"opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)"}],"marquees":[]}} />
      <DropdownMenu menus={[{"trigger":"menu-trigger-button","hoverOpen":false,"gap":4,"align":"left","html":"<div style=\"position:absolute;margin:0;display:block;box-sizing:content-box;width:256px;height:320px;min-width:0px;max-width:none;min-height:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);box-shadow:rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(6, 6, 8, 0.08) 0px 8px 48px 0px, rgba(24, 24, 27, 0.04) 0px 4px 8px 0px, rgba(24, 24, 27, 0.25) 0px 0px 2px 0px;opacity:0.847693;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><ul style=\"display:block;position:static;box-sizing:content-box;width:224px;height:288px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:16px;padding-right:16px;padding-bottom:16px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><li style=\"display:list-item;position:static;box-sizing:border-box;width:224px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"/in/blog/topics/guides\">Guides</a></li><li style=\"display:list-item;position:static;box-sizing:border-box;width:224px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"/in/blog/topics/podcasts\">The Shopify Podcast</a></li><li style=\"display:list-item;position:static;box-sizing:border-box;width:224px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"/in/blog/topics/founder-stories\">Founder Stories</a></li><li style=\"display:list-item;position:static;box-sizing:border-box;width:224px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"/in/blog/topics/sell-online\">Ecommerce Business Tips</a></li><li style=\"display:list-item;position:static;box-sizing:border-box;width:224px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"/in/blog/topics\">See All topics</a></li><li style=\"display:list-item;position:static;box-sizing:border-box;width:224px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(229, 231, 235);border-right-color:rgb(229, 231, 235);border-bottom-color:rgb(229, 231, 235);border-left-color:rgb(229, 231, 235);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:Inter-Variable, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:none;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"/in/enterprise/blog\">Enterprise Blog</a></li></ul></div>"}]} />
    </>
  );
}
