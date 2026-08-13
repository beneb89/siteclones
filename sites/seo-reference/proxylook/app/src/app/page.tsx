import DittoWire from "./ditto/DittoWire";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import Navbar2 from "./sections/navbar2";
import TlDrOurSection from "./sections/tl-dr-our-section";
import VerdictSection from "./sections/verdict-section";
import WhatWeThinkSection from "./sections/what-we-think-section";
import EditorialScoreBreakdownSection from "./sections/editorial-score-breakdown-section";
import PricingSection from "./sections/pricing-section";
import FeaturesIntegrationsSection from "./sections/features-integrations-section";
import NetworkInfrastructureSection from "./sections/network-infrastructure-section";
import SdkApiIntegrationsSection from "./sections/sdk-api-integrations-section";
import CodeExamplesSection from "./sections/code-examples-section";
import CompliancePrivacySection from "./sections/compliance-privacy-section";
import SupportAccountSection from "./sections/support-account-section";
import CompanyResourcesSection from "./sections/company-resources-section";
import KeyMarketsCoveredSection from "./sections/key-markets-covered-section";
import DataforseoVsAlternativesSection from "./sections/dataforseo-vs-alternatives-section";
import HowToGetSection from "./sections/how-to-get-section";
import UserReviewsSection from "./sections/user-reviews-section";
import FaqSection from "./sections/faq-section";
import Footer from "./sections/footer";
import Tile14, { type Tile14Data } from "./components/tile14";
import MediaLink, { type MediaLinkData } from "./components/media-link";
import TextLink6, { type TextLink6Data } from "./components/text-link6";
import { MediaLink_styles, TextLink6_styles } from "./_styles";

const Tile14_data: Tile14Data[] = [
    { text: "Trust score", text2: "8.5/10" },
    { text: "Editorial rating", text2: "4.6 ★" },
    { text: "IP pool", text2: "1.98T live backlinks, 8B+ Google keywords, 577M Google SERPs" },
    { text: "Countries", text2: "—" },
    { text: "From", text2: "$50.00" },
    { text: "Founded", text2: "2016" },
    { text: "HQ", text2: "Tallinn, Estonia" },
    { text: "SOCKS5", text2: "No" }
];
const MediaLink_data: MediaLinkData[] = [
    { href: "/providers/bright-data", alt: "Bright Data logo", imgSrc: "/assets/cloned/svg/cdc968421bcd.svg", label: "Bright Data", label2: "$5.04/GB · 150M+ IPs" },
    { href: "/providers/scrapingbee", alt: "ScrapingBee logo", imgSrc: "/assets/cloned/images/61c0fee53456.png", label: "ScrapingBee", label2: "$49.00/GB · Rotating pool" },
    { href: "/providers/octoparse", alt: "Octoparse logo", imgSrc: "/assets/cloned/svg/2372f36cbb4d.svg", label: "Octoparse", label2: "$69.00/GB · 500+ pre-built scraping templates" },
    { href: "/providers/outscraper", alt: "Outscraper logo", imgSrc: "/assets/cloned/images/7631952641b9.png", label: "Outscraper", label2: "Free / custom · 500+ ready-made scrapers" }
];
const TextLink6_data: TextLink6Data[] = [
    { href: "/compare?providers=dataforseo,bright-data", label: "DataForSEO vs Bright Data" },
    { href: "/compare?providers=dataforseo,scrapingbee", label: "DataForSEO vs ScrapingBee" },
    { href: "/compare?providers=dataforseo,octoparse", label: "DataForSEO vs Octoparse" },
    { href: "/compare?providers=dataforseo,outscraper", label: "DataForSEO vs Outscraper" }
];

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Navbar2 />
      {" "}
      <div className="block max-w-330 px-6 mx-auto max-md:px-3.5 md:max-lg:px-4">
        <div className="w-full grid pt-7 pb-16 gap-7 grid-cols-[1fr_320px] max-lg:pt-5 max-lg:pb-10 max-lg:grid-cols-1">
          <main className="block min-w-0">
            <TlDrOurSection />
            <VerdictSection />
            <WhatWeThinkSection />
            <EditorialScoreBreakdownSection />
            <PricingSection />
            <FeaturesIntegrationsSection />
            <NetworkInfrastructureSection />
            <SdkApiIntegrationsSection />
            <CodeExamplesSection />
            <CompliancePrivacySection />
            <SupportAccountSection />
            <CompanyResourcesSection />
            <KeyMarketsCoveredSection />
            <DataforseoVsAlternativesSection />
            <HowToGetSection />
            <UserReviewsSection />
            <FaqSection />
            {" "}
          </main>
          {" "}
          <aside className="w-80 h-[65.6875rem] flex sticky top-29.5 flex-col [align-self:start] gap-3.5 max-lg:hidden">
            <div className="border border-solid border-color-007 flex p-4.5 rounded-xl flex-col gap-3 bg-surface">
              <div className="block text-muted-foreground text-[0.8125rem] leading-[1.375rem] [font-feature-settings:'ss01',_'tnum']">
                {"From "}
                <b className="inline mx-0.5 text-foreground text-[1.625rem] font-extrabold leading-[2.6875rem] tracking-[-0.52px]">
                  $50.00
                </b>
                <small className="inline text-xs leading-[1.25rem]">
                  /mo
                </small>
              </div>
              {" "}
              <div className="block text-muted-foreground text-[0.6875rem] leading-[1.125rem] text-center">
                affiliate link · same price for you
              </div>
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border block p-4.5 rounded-xl bg-surface">
              <div className="block mb-3 text-muted-foreground text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.88px] uppercase">
                At a glance
              </div>
              {" "}
              <div className="grid gap-2 text-[0.8125rem] leading-[1.375rem] grid-cols-1">
                {Tile14_data.map((d, i) => <Tile14 key={i} d={d} />)}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border block p-4.5 rounded-xl bg-surface">
              <div className="block mb-3 text-muted-foreground text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.88px] uppercase">
                Alternatives
              </div>
              {MediaLink_data.map((d, i) => <MediaLink key={i} d={d} styles={MediaLink_styles[i]} />)}
              {" "}
            </div>
            {" "}
            <div className="border border-solid border-border block p-4.5 rounded-xl bg-surface">
              <div className="block mb-3 text-muted-foreground text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.88px] uppercase">
                Compare
              </div>
              {" "}
              <p className="block mb-3 text-muted-foreground text-[0.8125rem] leading-[1.375rem]">
                Common head-to-heads from search.
              </p>
              {" "}
              <div className="grid gap-1.5 grid-cols-1">
                {TextLink6_data.map((d, i) => <TextLink6 key={i} d={d} styles={TextLink6_styles[i]} />)}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </aside>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="h-[162.9px] border border-solid border-border block fixed bottom-4 inset-x-4 z-9999 max-w-130 ml-182 py-4 px-4.5 rounded-lg text-accent text-[0.8125rem] leading-[1.25rem] bg-surface shadow-[var(--clr-17)_0px_12px_36px_0px] max-md:h-[12.1875rem] max-md:bottom-19 max-md:inset-x-3 max-md:max-w-none max-md:ml-0 md:max-lg:ml-54 2xl:ml-342" id="pl-cmp">
        <strong className="block mb-1.5 text-foreground text-sm font-bold leading-[1.3125rem]">
          🍪 Cookies
        </strong>
        {" "}
        <p className="block mb-3">
          {"We use functional cookies to remember your theme and a single analytics cookie to count anonymous page views. Affiliate links may also drop a 3rd-party cookie on click. "}
          <a className="inline text-primary cursor-pointer" data-component="link" href="/privacy">
            Learn more
          </a>
          .
        </p>
        {" "}
        <div className="flex flex-wrap gap-2">
          <button className="h-[1.9625rem] border border-solid border-clr-1 flex py-1.5 px-2.5 rounded-lg justify-center items-center gap-1.5 text-surface text-xs font-semibold leading-[1.0625rem] text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer max-md:h-11 max-md:min-h-11 max-md:py-2.5 hover:bg-color-002 hover:shadow-[var(--clr-19)_0px_3.99975px_13.9991px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999938)] focus:shadow-[var(--clr-22)_0px_0.00326942px_0.011443px_0px] focus:transform-[matrix(1,0,0,1,0,-0.000817354)]" data-component="button" id="pl-cmp-accept" type="button">
            Accept all
          </button>
          {" "}
          <button className="h-[1.9625rem] border border-solid border-border flex py-1.5 px-2.5 rounded-lg justify-center items-center gap-1.5 text-foreground text-xs font-semibold leading-[1.0625rem] text-center whitespace-nowrap text-nowrap bg-surface cursor-pointer max-md:h-11 max-md:min-h-11 max-md:py-2.5 hover:bg-surface-2 hover:border-clr-18 hover:shadow-[var(--clr-5)_0px_0.999183px_1.99837px_0px,var(--clr-2)_0px_0.999183px_1.99837px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999183)] focus:shadow-[var(--clr-21)_0px_6.2395e-05px_0.00012479px_0px,var(--clr-21)_0px_6.2395e-05px_0.00012479px_0px] focus:transform-[matrix(1,0,0,1,0,-6.2395e-05)]" data-component="button" id="pl-cmp-reject" type="button">
            Reject non-essential
          </button>
          {" "}
        </div>
        {" "}
      </div>
      <Footer />
      {" "}
      <DittoWire spec={{"kind":"disclosure","items":[{"trigger":"interaction-1","panel":"interaction-2","isDialog":false,"hoverOpen":false,"backdropClose":false,"closes":[],"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"23.0938px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(12, 22, 40)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"23.0938px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(12, 22, 40)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"44.5312px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"12px","marginBottom":"0px","color":"rgb(28, 38, 56)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"12px","marginBottom":"0px","color":"rgb(28, 38, 56)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"shownBox":{"dx":0,"dy":35,"w":822,"h":45}},{"trigger":"interaction-3","panel":"interaction-4","isDialog":false,"hoverOpen":false,"backdropClose":false,"closes":[],"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"23.0938px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(12, 22, 40)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"23.0938px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(12, 22, 40)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"44.5312px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"12px","marginBottom":"0px","color":"rgb(28, 38, 56)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"12px","marginBottom":"0px","color":"rgb(28, 38, 56)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"shownBox":{"dx":0,"dy":35,"w":822,"h":45}},{"trigger":"interaction-5","panel":"interaction-6","isDialog":false,"hoverOpen":false,"backdropClose":false,"closes":[],"triggerOn":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"23.0938px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(12, 22, 40)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"triggerOff":{"display":"flex","visibility":"visible","opacity":"1","position":"static","height":"23.0938px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"0px","marginBottom":"0px","color":"rgb(12, 22, 40)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"600","textDecorationLine":"none"},"panelShown":{"display":"block","visibility":"visible","opacity":"1","position":"static","height":"44.5312px","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"822px","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"12px","marginBottom":"0px","color":"rgb(28, 38, 56)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"panelHidden":{"display":"none","visibility":"visible","opacity":"1","position":"static","height":"auto","maxHeight":"none","minHeight":"0px","overflow":"visible","top":"auto","right":"auto","bottom":"auto","left":"auto","width":"auto","zIndex":"auto","paddingTop":"0px","paddingBottom":"0px","marginTop":"12px","marginBottom":"0px","color":"rgb(28, 38, 56)","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","borderTopColor":"rgb(229, 231, 235)","borderRightColor":"rgb(229, 231, 235)","borderBottomColor":"rgb(229, 231, 235)","borderLeftColor":"rgb(229, 231, 235)","borderTopWidth":"0px","borderRightWidth":"0px","borderBottomWidth":"0px","borderLeftWidth":"0px","boxShadow":"none","transform":"none","fontWeight":"400","textDecorationLine":"none"},"shownBox":{"dx":0,"dy":35,"w":822,"h":45}}]}} />
    </>
  );
}
