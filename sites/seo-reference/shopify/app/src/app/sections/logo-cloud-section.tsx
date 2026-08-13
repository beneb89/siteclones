import Icon2 from "../svgs/svg-icon2";
import Logo, { type LogoData } from "../components/logo";
import Icon9 from "../svgs/svg-icon9";
import Icon7 from "../svgs/svg-icon7";
import Icon10 from "../svgs/svg-icon10";
import MediaTile, { type MediaTileData } from "../components/media-tile";
import ListRow from "../components/list-row";
import { ListRow_styles } from "../_styles";
import { listRowData as listRowDataContent } from "../content";
const Logo_data: LogoData[] = [
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
const Logo_data2: LogoData[] = [
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
const Logo_data3: LogoData[] = [
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
const Logo_data4: LogoData[] = [
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
const MediaTile_data: MediaTileData[] = [
    { href: "/in/ucp", description: "Commerce for Agents", description2: "Build with our agent tools" },
    { href: "https://apps.shopify.com/", description: "Shopify App Store", description2: "Largest commerce ecosystem" },
    { href: "https://shopify.dev/", description: "Shopify.dev", description2: "Dev docs, CLI, and more" }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ logos = Logo_data, logos2 = Logo_data2, logos3 = Logo_data3, logos4 = Logo_data4, mediaTileData = MediaTile_data, listRowData = listRowDataContent } = {}) {
  return (
    <div className="h-162 block absolute inset-x-0 max-h-162 pb-9 overflow-x-hidden overflow-y-auto pointer-events-none max-lg:hidden 2xl:h-[40.675rem] 2xl:max-h-225 before:content-[''] before:block before:absolute before:top-144 before:bottom-9 before:inset-x-0 before:h-9 before:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-1)_0px_20px_25px_-5px,var(--clr-1)_0px_8px_10px_-6px] before:opacity-0 max-lg:before:hidden 2xl:before:top-[36.175rem]">
      <div className="grid relative pt-10 px-22.5 items-start gap-y-8 gap-x-10 grid-cols-[764px_296px] [grid-template-areas:'items_aside'_'belt_belt'] text-color-002 text-sm leading-5 bg-background [translate:0px_calc(-100%_-_1px)] pointer-events-none max-lg:hidden 2xl:px-62.5 2xl:grid-cols-[1035px_345px]">
        <ul className="h-[28.55rem] flex opacity-0 max-h-136.5 flex-col flex-wrap gap-10 [grid-column-start:items] [grid-column-end:items] [grid-row-start:items] [grid-row-end:items] [list-style-type:none] list-outside [translate:0px_-24px] pointer-events-none w-full max-lg:hidden">
          <li className="h-[14.275rem] list-item order-[1] pointer-events-none max-lg:hidden">
            <label className="hidden absolute top-10 left-22.5 z-20 items-center cursor-pointer pointer-events-none before:content-[''] before:block before:absolute before:-inset-5 max-lg:before:hidden" htmlFor="bk-nav-Products">
              <Icon2 />
              Back
            </label>
            <p className="block mb-3.5 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty pointer-events-none max-lg:hidden">
              Build your website
            </p>
            <ul className="block [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
              {logos.map((d, i) => <Logo key={i} d={d} />)}
            </ul>
          </li>
          <li className="w-[30%] h-[21.775rem] list-item mb-10 order-[3] pointer-events-none max-lg:hidden 2xl:w-[31%]">
            <p className="block mb-3.5 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty pointer-events-none max-lg:hidden">
              Sell anywhere
            </p>
            <ul className="block [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
              {logos2.map((d, i) => <Logo key={i} d={d} />)}
            </ul>
          </li>
          <li className="h-[11.775rem] list-item order-[4] pointer-events-none max-lg:hidden">
            <p className="block mb-3.5 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty pointer-events-none max-lg:hidden">
              {"Marketing & analytics"}
            </p>
            <ul className="block [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
              {logos3.map((d, i) => <Logo key={i} d={d} />)}
            </ul>
          </li>
          <li className="h-[11.775rem] list-item order-[2] pointer-events-none max-lg:hidden">
            <p className="block mb-3.5 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty pointer-events-none max-lg:hidden">
              Run your business
            </p>
            <ul className="block [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
              {logos4.map((d, i) => <Logo key={i} d={d} />)}
            </ul>
          </li>
          <li className="h-[6.775rem] list-item order-[5] pointer-events-none max-lg:hidden">
            <p className="block mb-3.5 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty pointer-events-none max-lg:hidden">
              Get paid
            </p>
            <ul className="block [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
              <li className="list-item pointer-events-none max-lg:hidden">
                <a className="h-10 flex py-2.5 items-start gap-x-4 cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/in/checkout">
                  <Icon9 />
                  <span className="flex items-center pointer-events-none max-lg:hidden">
                    Checkout
                    <Icon7 />
                  </span>
                </a>
              </li>
              <li className="list-item pointer-events-none max-lg:hidden">
                <a className="h-10 flex py-2.5 items-start gap-x-4 cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/in/payments">
                  <Icon10 />
                  <span className="flex items-center pointer-events-none max-lg:hidden">
                    Payments
                    <Icon7 />
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="w-275 h-21.5 grid sticky -bottom-9 z-20 py-6 gap-y-8 gap-x-10 grid-cols-[227.984px_227.984px_227.984px_296px] [grid-column-start:belt] [grid-column-end:belt] [grid-row-start:belt] [grid-row-end:belt] [list-style-type:none] list-outside pointer-events-none max-lg:hidden 2xl:w-355 2xl:grid-cols-[318.328px_318.328px_318.328px_345px] after:content-[''] after:block after:absolute after:inset-y-0 after:-right-502.5 after:left-137.5 after:h-21.5 after:bg-background after:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_1px_inset,var(--clr-0)_0px_0px_0px_0px] max-lg:after:hidden 2xl:after:-right-782.5 2xl:after:left-177.5" data-ditto-id="style-ul">
          <li className="h-9.5 list-item z-10 opacity-0 text-accent text-xs font-semibold leading-[1.375rem] tracking-[0.72px] uppercase text-pretty pointer-events-none max-lg:hidden">
            {"Customize & extend Shopify"}
          </li>
          {mediaTileData.map((d, i) => <MediaTile key={i} d={d} />)}
        </ul>
        <div className="w-74 block relative pl-10 self-stretch [grid-column-start:aside] [grid-column-end:aside] [grid-row-start:aside] [grid-row-end:aside] pointer-events-none max-lg:hidden 2xl:w-[21.5625rem] before:content-[''] before:block before:absolute before:-top-26 before:-right-22.5 before:-bottom-8 before:left-0 before:z-0 before:h-[37.05rem] before:bg-clr-2 max-lg:before:hidden 2xl:before:-right-[38.4375rem] after:content-[''] after:block after:absolute after:-top-10 after:right-[18.4375rem] after:-bottom-8 after:left-0 after:z-10 after:w-px after:h-[33.05rem] after:bg-clr-3 after:bg-no-repeat max-lg:after:hidden 2xl:after:right-86">
          <p className="w-64 block relative opacity-0 mb-6 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty [translate:0px_-24px] pointer-events-none max-lg:hidden">
            Non-stop innovation
          </p>
          <ul className="w-64 h-[14.15rem] flex relative opacity-0 flex-col gap-y-10 [list-style-type:none] list-outside [translate:0px_-24px] pointer-events-none max-lg:hidden">
            <li className="list-item pointer-events-none max-lg:hidden">
              <a className="inline cursor-pointer pointer-events-none max-lg:hidden" data-component="link" href="/editions/spring2026">
                <p className="flex mb-0.5 items-center pointer-events-none max-lg:hidden">
                  Shopify Editions
                  <Icon7 />
                </p>
                <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
                  150+ updates to Shopify, twice a year.
                </p>
              </a>
            </li>
            <li className="list-item pointer-events-none max-lg:hidden">
              <p className="block relative opacity-0 mb-6 text-accent text-xs font-semibold leading-[0.875rem] tracking-[0.72px] uppercase text-pretty [translate:0px_-24px] pointer-events-none max-lg:hidden">
                Latest updates
              </p>
              <ul className="flex flex-col [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
                {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
