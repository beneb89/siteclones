import MediaTile, { type MediaTileData } from "../components/media-tile";
import ListRow3 from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import LogoCloudItem from "../components/logo-cloud-item";
import { ListRow3_styles, ListRow3_styles2, ListRow3_styles3, ListRow3_styles4, LogoCloudItem_styles } from "../_styles";
import { listRow3Data as listRow3DataContent, listRow3Data2 as listRow3Data2Content, listRow3Data3 as listRow3Data3Content, listRow3Data4 as listRow3Data4Content, listRow4Data as listRow4DataContent, logos as logosContent } from "../content";
const MediaTile_data: MediaTileData[] = [
    { href: "https://www.linkedin.com/company/dataforseo/", icon: <>
          <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
          </>, label: "LinkedIn" },
    { href: "https://www.facebook.com/dataforseo", icon: <>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
          </>, label: "Facebook" },
    { href: "https://x.com/dataforseo", icon: <>
          <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z" />
          </>, label: "X" },
    { href: "https://www.youtube.com/@DataForSEO", icon: <>
          <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z" />
          </>, label: "YouTube" }
];
/** Site footer. */
export default function Footer({ mediaTileData = MediaTile_data, listRow3Data = listRow3DataContent, listRow3Data2 = listRow3Data2Content, listRow3Data3 = listRow3Data3Content, listRow3Data4 = listRow3Data4Content, listRow4Data = listRow4DataContent, logos = logosContent } = {}) {
  return (
    <footer className="block pt-20 pb-12 text-muted-foreground bg-clr-17">
      <div className="block px-[2.4rem] max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1fr] max-md:grid-cols-1 md:max-lg:grid-cols-3">
          <div className="border-r border-solid border-r-border flex pr-6 flex-col gap-6 max-md:border-b max-md:border-b-border max-md:pb-8 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] max-md:pr-0">
            <div className="block mb-5" id="text-3">
              <div className="block">
                <div className="h-6 block" />
                {" "}
                <a className="h-[1.8375rem] inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href="/">
                  {" "}
                  <img className="w-50 h-[1.8125rem] block max-w-full overflow-clip align-middle hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="image" alt="logo" src="/assets/cloned/images/7a01214383b2.png" />
                  {" "}
                </a>
                {" "}
                <div className="h-6 block" />
                {" "}
                <div className="flex">
                  <img className="w-7.5 h-7.5 min-h-[0.9375rem] block max-w-full max-h-7.5 -mt-1.5 mr-[0.3125rem] overflow-clip align-middle" data-component="image" alt="ukraine-heart" src="/assets/cloned/images/79549809a691.png" />
                  <span className="block">
                    {" Built with love in Ukraine"}
                  </span>
                </div>
                {" "}
                <div className="h-2.5 block" />
                {" "}
                <p className="block">
                  Vesivärava tn 50-201, Kesklinna linnaosa, Tallinn, Harju maakond, Republic of Estonia, 10152
                </p>
                {" "}
                <div className="h-2.5 block" />
                {" "}
                <p className="block">
                  63 Profesora Otamanovskoho St , Kharkiv, Ukraine, 61166
                </p>
                {" "}
                <p className="block">
                  Email: info@dataforseo.com
                </p>
                {" "}
                <div className="h-7 block" />
                {" "}
              </div>
              {" "}
            </div>
            <div className="block mb-5" id="block-5">
              <ul className="flex flex-wrap items-center gap-3 text-2xl leading-[2.375rem] [list-style-type:none] list-outside">
                {mediaTileData.map((d, i) => <MediaTile key={i} d={d} />)}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="border-r border-solid border-r-border block px-6 max-md:border-b max-md:border-b-border max-md:py-8 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] max-md:px-0">
            <div className="block mb-5" id="text-4">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                APIs
              </h4>
              {" "}
              <div className="block">
                <ul className="block [list-style-type:none] list-outside">
                  {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                </ul>
              </div>
              {" "}
            </div>
            <div className="block mb-5" id="text-31">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                Databases
              </h4>
              {" "}
              <div className="block">
                <ul className="block [list-style-type:none] list-outside">
                  {listRow3Data2.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles2[i]} />)}
                </ul>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="border-r border-solid border-r-border block px-6 max-md:border-b max-md:border-b-border max-md:py-8 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] max-md:px-0">
            <div className="block mb-5" id="custom_html-2">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                Solutions
              </h4>
              <div className="block">
                <ul className="block [list-style-type:none] list-outside">
                  {listRow3Data3.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles3[i]} />)}
                </ul>
              </div>
            </div>
            {" "}
          </div>
          {" "}
          <div className="border-r border-solid border-r-border block px-6 max-md:border-b max-md:border-b-border max-md:py-8 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] max-md:px-0">
            <div className="block mb-5" id="text-6">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                Knowledge Base
              </h4>
              {" "}
              <div className="block">
                <ul className="block [list-style-type:none] list-outside">
                  {listRow3Data4.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles4[i]} />)}
                </ul>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="border-r border-solid border-r-border block px-6 max-md:border-b max-md:border-b-border max-md:py-8 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] max-md:px-0">
            <div className="block mb-5" id="text-32">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                Resources
              </h4>
              {" "}
              <div className="block">
                <ul className="block [list-style-type:none] list-outside">
                  {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
                </ul>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block pl-6 max-md:pt-8 max-md:pl-0">
            <div className="block mb-5" id="text-34">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                Legal information
              </h4>
              {" "}
              <div className="block">
                <ul className="block [list-style-type:none] list-outside">
                  <li className="list-item">
                    <a className="inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href="/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href="/terms-of-service/">
                      Terms of Services
                    </a>
                  </li>
                </ul>
              </div>
              {" "}
            </div>
            <div className="block mb-5" id="text-37">
              <div className="block">
                <p className="block">
                  <a className="h-17.5 inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href="/wp-content/uploads/2021/12/27001_DATAFORSEO-.pdf" rel="noopener" target="_blank">
                    <img className="w-17.5 h-17.5 block max-w-17.5 overflow-clip align-middle hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="image" src="/assets/cloned/images/5ef9023b5f0a.png" />
                  </a>
                </p>
                {" "}
              </div>
              {" "}
            </div>
            <div className="block mb-5" id="text-33">
              <h4 className="block mb-[1.5625rem] text-background text-[1.375rem] font-bold leading-[1.8125rem]" data-component="heading">
                Payment Methods:
              </h4>
              {" "}
              <div className="block">
                <div className="inline-block">
                  {logos.map((d, i) => <LogoCloudItem key={i} d={d} styles={LogoCloudItem_styles[i]} />)}
                  {" "}
                </div>
              </div>
              {" "}
            </div>
            <div className="block mb-5" id="block-2">
              <p className="block" />
              {" "}
            </div>
            <div className="block mb-5" id="block-3">
              <p className="block" />
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
