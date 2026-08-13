import FeatureCard2, { type FeatureCard2Data } from "../components/feature-card2";
import FeatureCard3, { type FeatureCard3Data } from "../components/feature-card3";
import Tile3, { type Tile3Data } from "../components/tile3";
import Icon2 from "../svgs/svg-icon2";
import ListRow, { type ListRowData } from "../components/list-row";
import { FeatureCard2_styles, FeatureCard3_styles, ListRow_styles } from "../_styles";
const FeatureCard2_data: FeatureCard2Data[] = [
    { title: "What's new", href: "https://www.microsoft.com/surface/devices/surface-pro?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label: "Surface Pro", href2: "https://www.microsoft.com/surface/devices/surface-laptop?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label2: "Surface Laptop", href3: "https://www.microsoft.com/en-us/surface/devices/surface-laptop-ultra?icid=DSM_Footer_WhatsNew_SurfaceLaptopUltra&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label3: "Surface Laptop Ultra", href4: "https://www.microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box?icid=DSM_Footer_WhatsNew_SurfaceRTXSparkDevBox&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label4: "Surface RTX Spark Dev Box", href5: "https://www.microsoft.com/en-us/microsoft-copilot/organizations?icid=DSM_Footer_CopilotOrganizations&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label5: "Copilot for organizations", href6: "https://www.microsoft.com/en-us/microsoft-copilot/for-individuals?form=MY02PT&OCID=GE_web_Copilot_Free_868g3t5nj&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label6: "Copilot for personal use", href7: "https://www.microsoft.com/en-us/microsoft-products-and-apps?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label7: "Explore Microsoft products", href8: "https://www.microsoft.com/en-us/windows/apps-for-windows?icid=DSM_Footer_WhatsNew_Windows11apps&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label8: "Windows 11 apps" },
    { title: "Microsoft Store", href: "https://account.microsoft.com/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label: "Account profile", href2: "https://www.microsoft.com/en-us/download?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label2: "Download Center", href3: "https://go.microsoft.com/fwlink/?linkid=2139749&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label3: "Microsoft Store support", href4: "https://www.microsoft.com/en-us/store/b/returns?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label4: "Returns", href5: "https://www.microsoft.com/en-us/store/b/order-tracking?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label5: "Order tracking", href6: "https://www.microsoft.com/en-us/store/b/certified-refurbished-products?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label6: "Certified Refurbished", href7: "https://www.microsoft.com/en-us/store/b/why-microsoft-store?icid=footer_why-msft-store_7102020&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label7: "Microsoft Store Promise", href8: "https://www.microsoft.com/en-us/store/b/payment-financing-options?icid=footer_financing_vcc&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label8: "Flexible Payments" },
    { title: "Education", href: "https://www.microsoft.com/en-us/education?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label: "Microsoft in education", href2: "https://www.microsoft.com/en-us/education/devices/overview?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label2: "Devices for education", href3: "https://www.microsoft.com/en-us/education/products/teams?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label3: "Microsoft Teams for Education", href4: "https://www.microsoft.com/en-us/education/products/microsoft-365?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label4: "Microsoft 365 Education", href5: "https://www.microsoft.com/education/how-to-buy?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label5: "How to buy for your school", href6: "https://education.microsoft.com/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label6: "Educator training and development", href7: "https://www.microsoft.com/en-us/store/b/education?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label7: "Deals for students and parents", href8: "https://www.microsoft.com/en-us/education/ai-in-education?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label8: "AI for education" }
];
const FeatureCard3_data: FeatureCard3Data[] = [
    { title: "Business", href: "https://www.microsoft.com/en-us/ai?icid=DSM_Footer_AI&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label: "Microsoft AI", href2: "https://www.microsoft.com/en-us/security?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label2: "Microsoft Security", href3: "https://www.microsoft.com/en-us/dynamics-365?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label3: "Dynamics 365", href4: "https://www.microsoft.com/en-us/microsoft-365/business?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label4: "Microsoft 365", href5: "https://www.microsoft.com/en-us/power-platform?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label5: "Microsoft Power Platform", href6: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label6: "Microsoft Teams", href7: "https://www.microsoft.com/en-us/microsoft-365-copilot?icid=DSM_Footer_Microsoft365Copilot&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label7: "Microsoft 365 Copilot", href8: "https://www.microsoft.com/en-us/store/b/business?icid=CNavBusinessStore&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", id: "Small-Business", label8: "Small Business" },
    { title: "Developer & IT", href: "https://azure.microsoft.com/en-us/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label: "Azure", href2: "https://developer.microsoft.com/en-us/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label2: "Microsoft Developer", href3: "https://learn.microsoft.com/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label3: "Microsoft Learn", href4: "https://www.microsoft.com/software-development-companies/offers-benefits/isv-success?icid=DSM_Footer_SupportAIMarketplace&ocid=cmm3atxvn98&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label4: "Support for AI marketplace apps", href5: "https://techcommunity.microsoft.com/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label5: "Microsoft Tech Community", href6: "https://marketplace.microsoft.com/?icid=DSM_Footer_Marketplace&ocid=cmm3atxvn98&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label6: "Microsoft Marketplace", href7: "https://www.microsoft.com/software-development-companies?icid=DSM_Footer_SoftwareCompanies&ocid=cmm3atxvn98&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label7: "Software companies", href8: "https://visualstudio.microsoft.com/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label8: "Visual Studio" },
    { title: "Company", href: "https://careers.microsoft.com/?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label: "Careers", href2: "https://www.microsoft.com/about?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label2: "About Microsoft", href3: "https://news.microsoft.com/source/?icid=DSM_Footer_Company_CompanyNews&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label3: "Company news", href4: "https://www.microsoft.com/en-us/privacy?icid=DSM_Footer_Company_Privacy&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label4: "Privacy at Microsoft", href5: "https://www.microsoft.com/investor/default.aspx?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label5: "Investors", href6: "https://www.microsoft.com/en-us/diversity/default?icid=DSM_Footer_Company_Diversity&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label6: "Diversity and inclusion", href7: "https://www.microsoft.com/en-us/accessibility?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label7: "Accessibility", href8: "https://www.microsoft.com/en-us/corporate-responsibility/sustainability?icid=DSM_Footer_Sustainability&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", label8: "Sustainability" }
];
const Tile3_data: Tile3Data[] = [
    { text: "English" },
    { text: "Japanese" },
    { text: "French" },
    { text: "Spanish" },
    { text: "German" }
];
const ListRow_data: ListRowData[] = [
    { href: "/en/sitemap", id: "uhf-Footer_Sitemap", label: "Sitemap" },
    { href: "https://privacy.microsoft.com/en-us/privacystatement?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", id: "uhf-Privacy & Cookies", label: "Privacy & Cookies" },
    { href: "https://www.microsoft.com/en-us/legal/terms-of-use?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", id: "uhf-Footer_TermsofUse", label: "Terms of use" },
    { href: "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", id: "uhf-Footer_Trademarks", label: "Trademarks" },
    { href: "https://www.microsoft.com/en-us/legal/compliance/devices-safety-and-eco?t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", id: "uhf-Footer_SafetyAndEco", label: "Safety & eco" },
    { href: "https://account.microsoft.com/privacy/ad-settings/signedout?ru=https%3A%2F%2Faccount.microsoft.com%2Fprivacy%2Fad-settings&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1", id: "uhf-Footer_AboutOurAds", label: "About our ads" }
];
/** Site footer. */
export default function Footer({ featureCard2Data = FeatureCard2_data, featureCard3Data = FeatureCard3_data, tile3Data = Tile3_data, listRowData = ListRow_data } = {}) {
  return (
    <footer className="w-full block float-left">
      <div className="block" id="experiencefragment-5e0cc6f7e7">
        <div className="flex max-w-full flex-col bg-background" id="container-c9bf67ee02">
          <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-color-001 before:text-base before:leading-[1.3125rem] max-lg:before:text-sm max-lg:before:leading-[1.125rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-001 after:text-base after:leading-[1.3125rem] max-lg:after:text-sm max-lg:after:leading-[1.125rem]">
            <div className="w-full block float-left">
              <div className="block bg-background">
                <uhf-footer class="inline">
                  {" "}
                  <footer className="block text-muted-foreground [font-family:'Segoe_UI',_SegoeUI,_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif] text-[0.6875rem] bg-surface" id="uhf-footer">
                    <uhf-footer-nav class="contents text-color-001">
                      <nav className="flex max-w-400 px-20 flex-wrap bg-surface max-md:px-4.5 max-lg:flex-col md:max-lg:px-[0.8125rem] 2xl:mx-40" data-component="nav" aria-label="Footer Resource links">
                        <div className="flex max-w-[50%] grow basis-full max-lg:max-w-full max-md:flex-col">
                          {featureCard2Data.map((d, i) => <FeatureCard2 key={i} d={d} styles={FeatureCard2_styles[i]} />)}
                          {" "}
                        </div>
                        <div className="flex max-w-[50%] grow basis-full max-lg:max-w-full max-md:flex-col">
                          {featureCard3Data.map((d, i) => <FeatureCard3 key={i} d={d} styles={FeatureCard3_styles[i]} />)}
                          {" "}
                        </div>
                        {" "}
                      </nav>
                      {" "}
                    </uhf-footer-nav>
                    {" "}
                    <div className="flex max-w-400 pt-[2.9375rem] pb-12 px-20 items-end text-color-001 mx-auto max-lg:pt-12 max-lg:pb-6 max-md:px-7.5 max-lg:flex-col max-lg:flex-wrap max-lg:items-start md:max-lg:px-6">
                      <div className="w-full h-15 grid relative clear-both max-w-[11.6875rem] mr-6 grid-cols-[minmax(0,_1fr)] max-md:mr-32 max-lg:mb-3 max-lg:text-[0.875rem] md:max-lg:mr-[33.3125rem]">
                        <label className="block mb-1 text-foreground text-[1rem] cursor-default" htmlFor="msa-language-navigation-select">
                          Change language
                        </label>
                        {" "}
                        <nav className="h-9 block max-w-[11.6875rem] text-[1rem]" data-component="nav" id="languagenavigation-1f1bb65690">
                          <select className="w-full h-9 border border-solid border-foreground inline-block max-w-[11.6875rem] items-center leading-4.5 whitespace-pre text-nowrap bg-background cursor-pointer focus:outline-foreground focus:[outline-style:dotted] focus:outline-[3px]" data-component="select" id="msa-language-navigation-select">
                            {tile3Data.map((d, i) => <Tile3 key={i} d={d} />)}
                          </select>
                          {" "}
                        </nav>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex items-center gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-4">
                        <div className="block">
                          <a className="flex items-center leading-4 cursor-pointer hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] hover:underline focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="https://aka.ms/yourcaliforniaprivacychoices" rel="nofollow">
                            {" "}
                            <Icon2 />
                            {" "}
                            <span className="flex items-center">
                              Your Privacy Choices
                            </span>
                          </a>
                          {" "}
                        </div>
                        {" "}
                        <a className="flex items-center leading-4 cursor-pointer hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] hover:underline focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href={"https://go.microsoft.com/fwlink/?linkid=2259814&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1"}>
                          Consumer Health Privacy
                        </a>
                        {" "}
                      </div>
                      {" "}
                      <uhf-footer-menu class="block pl-4 max-lg:pl-0 2xl:ml-[17.875rem]">
                        <nav className="block pl-4 max-lg:pl-0" data-component="nav" aria-label="Microsoft corporate links">
                          <ul className="flex mt-1.5 flex-wrap justify-start gap-x-6 leading-[1.5625rem] [list-style-type:none] list-outside">
                            {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                            <li className="list-item">
                              © Microsoft 2026
                            </li>
                          </ul>
                          {" "}
                        </nav>
                        {" "}
                      </uhf-footer-menu>
                      {" "}
                    </div>
                    {" "}
                  </footer>
                  {" "}
                </uhf-footer>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
