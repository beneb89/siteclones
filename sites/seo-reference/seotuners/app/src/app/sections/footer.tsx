import Logo2 from "../components/logo2";
import Logo3 from "../components/logo3";
import { Logo2_styles, Logo3_styles } from "../_styles";
import { logo2Data as logo2DataContent, logos as logosContent } from "../content";
/** Site footer. */
export default function Footer({ logo2Data = logo2DataContent, logos = logosContent } = {}) {
  return (
    <footer className="block before:content-[''] before:table before:w-0 before:h-0">
      <div className="block relative max-w-full pr-2.5 flex-col gap-5 max-md:flex-wrap" id="backtoblog">
        <div className="w-317.5 h-[3.4375rem] block fixed bottom-2.5 z-99 max-w-full gap-5 text-right max-md:w-[22.8125rem] max-md:h-[2.8875rem] md:max-lg:w-189.5 2xl:w-477.5">
          <div className="h-full block [overflow-wrap:break-word]">
            <div className="h-full block">
              <a className="h-full inline-block pt-3.5 pb-4 px-7.5 rounded-4xl text-background font-bold leading-[1.5625rem] text-center bg-primary cursor-pointer max-md:py-3 max-md:px-3.5 max-md:text-base max-md:leading-[1.375rem] hover:bg-clr-6 focus:bg-color-002" data-ditto-id="motion-link-2" data-component="link" href="/blog/">
                {" "}
                <span className="flex justify-center gap-[0.3125rem]">
                  {" "}
                  <span className="block whitespace-nowrap">
                    Back to Blog
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        <div className="h-[3.4375rem] block relative invisible max-w-full gap-5 text-right max-md:h-[2.8875rem]">
          <div className="h-[3.4375rem] block [overflow-wrap:break-word] max-md:h-[2.8875rem]">
            <div className="h-[3.4375rem] block max-md:h-[2.8875rem]">
              <a className="h-[3.4375rem] inline-block pt-3.5 pb-4 px-7.5 rounded-4xl text-background font-bold leading-[1.5625rem] text-center bg-primary cursor-pointer max-md:h-[2.8875rem] max-md:py-3 max-md:px-3.5 max-md:text-base max-md:leading-[1.375rem]" href="/blog/">
                {" "}
                <span className="h-[1.5625rem] flex justify-center gap-[0.3125rem] max-md:h-[1.3875rem]">
                  {" "}
                  <span className="block">
                    Back to Blog
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="flex relative max-w-full py-17.5 px-7.5 flex-col gap-5 max-md:py-12.5 max-md:px-[0.9375rem] max-md:flex-wrap md:max-lg:py-15 md:max-lg:px-5 2xl:pt-22.5 2xl:px-17.5" id="footer-cta">
        <div className="w-full flex relative min-w-0 rounded-[20px] flex-col bg-clr-4 [background-position:50%_50%] bg-no-repeat max-md:px-[0.9375rem] max-md:rounded-[10px] max-md:bg-contain md:max-lg:rounded-[15px] 2xl:rounded-[25px]" style={{ backgroundImage: "url(\"/assets/cloned/svg/79c9b70bea08.svg\")" }}>
          <div className="w-full flex max-w-[min(100%,_1200px)] mx-2.5 pt-25 pb-17.5 flex-col items-center grow gap-[1.5625rem] max-md:max-w-[min(100%,_767px)] max-md:py-10 max-md:flex-wrap max-md:gap-[0.9375rem] max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] md:max-lg:pt-17.5 md:max-lg:pb-12.5 md:max-lg:gap-5 2xl:mx-72.5 2xl:gap-7.5">
            {logo2Data.map((d, i) => <Logo2 key={i} d={d} styles={Logo2_styles[i]} />)}
            {" "}
            <div className="w-full max-w-152.5 block relative min-w-0 gap-[1.5625rem] text-center max-md:gap-[0.9375rem] md:max-lg:gap-5 2xl:gap-7.5">
              <div className="block [overflow-wrap:break-word]">
                <h2 className="block pb-4.5 text-color-002 text-[4rem] font-medium leading-18 max-md:text-[2.875rem] max-md:leading-[3.25rem] md:max-lg:text-[3.375rem] md:max-lg:leading-[3.8125rem] 2xl:text-7xl 2xl:leading-[5.0625rem]" data-component="heading">
                  Supercharge Your Internet Marketing
                </h2>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="block relative min-w-0 max-w-full gap-[1.5625rem] text-color-002 text-[1.5rem] uppercase max-md:gap-[0.9375rem] max-md:text-[1.25rem] max-md:text-center md:max-lg:gap-5 md:max-lg:text-[1.375rem] 2xl:gap-7.5">
              <div className="block [overflow-wrap:break-word]">
                <p className="block">
                  Speak With An SEO Expert Today
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="w-full max-w-99 block relative min-w-0 gap-[1.5625rem] max-md:gap-[0.9375rem] md:max-lg:gap-5 2xl:gap-7.5">
              <div className="block mt-[0.9375rem] [overflow-wrap:break-word] max-md:mt-2.5">
                <div className="block">
                  <a className="inline-block pt-5 pb-[1.4375rem] px-15 rounded-4xl text-background font-bold leading-[1.5625rem] text-center bg-primary [background-size:200%] cursor-pointer hover:bg-clr-7 hover:[background-position:25.7199%_12.86%] focus:bg-clr-10 focus:[background-position:4.13691%_2.06846%]" style={{ backgroundImage: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)" }} data-component="link" href="/contact-us/">
                    {" "}
                    <span className="flex justify-center gap-[0.3125rem]">
                      {" "}
                      <span className="block">
                        Click Here for a Free Consultation
                      </span>
                      {" "}
                    </span>
                    {" "}
                  </a>
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
      </div>
      {" "}
      <div className="flex relative max-w-full px-7.5 flex-col overflow-hidden bg-clr-4 max-md:px-[0.9375rem] md:max-lg:px-5 2xl:px-0">
        <div className="w-full flex max-w-[min(100%,_1200px)] mx-2.5 pt-17.5 pb-30 flex-col grow gap-15 max-md:max-w-[min(100%,_767px)] max-md:pt-10 max-md:pb-15 max-md:flex-wrap max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] md:max-lg:pt-15 md:max-lg:pb-25 2xl:mx-90 2xl:pb-32.5">
          <div className="flex relative z-3 min-w-0 justify-between items-center gap-5 max-lg:flex-wrap max-lg:justify-center">
            {logos.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
            {" "}
          </div>
          {" "}
          <div className="h-[213.7px] block absolute bottom-0 inset-x-0 z-1 min-w-0 max-w-full gap-15 text-center max-md:h-[3.8rem] max-lg:-right-px max-lg:left-px md:max-lg:h-[7.8375rem] 2xl:h-[318.9px] 2xl:-bottom-px">
            <div className="h-full block -mx-2.5 [overflow-wrap:break-word] max-lg:-mr-0.5 max-lg:-mb-0.5 max-lg:-ml-[0.3125rem]">
              <img className="w-325 h-53.5 inline-block max-w-full overflow-clip aspect-[auto_1920/315] align-middle max-md:w-95.5 max-md:h-[3.9375rem] md:max-lg:w-[48.4375rem] md:max-lg:h-[7.9375rem] 2xl:w-485 2xl:h-[19.9375rem]" data-component="image" alt="Zigzag Border Graphic (Black)" height="315" src="/assets/cloned/svg/a4c8f7fae1e3.svg" width="1920" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="flex relative max-w-full px-7.5 flex-col bg-color-002 max-md:px-[0.9375rem] md:max-lg:px-5 2xl:px-0">
        <div className="w-full flex max-w-[min(100%,_1200px)] mx-2.5 pt-7.5 pb-17.5 flex-col grow gap-5 max-md:max-w-[min(100%,_767px)] max-md:py-10 max-md:flex-wrap max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] md:max-lg:py-12.5 2xl:mx-90 2xl:pb-22.5">
          <div className="flex relative min-w-0 gap-[1.5625rem] max-lg:flex-wrap max-lg:gap-10 2xl:gap-[2.1875rem]">
            <div className="w-[17.9125rem] flex relative min-w-0 pt-7.5 flex-col gap-2.5 max-md:w-[21.5625rem] max-md:border-t-2 max-lg:border-solid max-md:border-t-primary max-md:border-b-2 max-md:border-b-primary max-md:py-10 max-md:flex-wrap max-lg:grow max-lg:shrink-0 max-lg:gap-[0.3125rem] md:max-lg:w-86 md:max-lg:border-r-2 md:max-lg:border-r-primary md:max-lg:pr-5 md:max-lg:pt-0 2xl:w-[280.5px] 2xl:gap-[0.9375rem]">
              <div className="block relative min-w-0 max-w-full gap-2.5 text-background text-[1.25rem] max-lg:gap-[0.3125rem] max-md:[font-size:inherit] 2xl:gap-[0.9375rem]">
                <div className="block [overflow-wrap:break-word]">
                  <p className="block">
                    seoTuners
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block relative min-w-0 max-w-full gap-2.5 max-lg:gap-[0.3125rem] 2xl:gap-[0.9375rem]">
                <div className="h-full block -mb-2.5 [overflow-wrap:break-word]">
                  <ul className="block mb-6 [list-style-type:none] list-outside">
                    <li className="flex relative items-start">
                      <span className="flex relative top-2 -bottom-2 text-center">
                        {" "}
                        <i className="w-[1.175rem] block text-color-005 [font-family:'Font_Awesome_6_Free'] text-[0.9375rem] font-black leading-[0.9375rem] before:content-[''] before:text-color-005 before:text-[0.9375rem] before:font-black before:leading-[0.9375rem] before:text-center" aria-hidden="true" />
                        {" "}
                      </span>
                      {" "}
                      <span className="block pl-[0.3125rem] self-center text-background">
                        {"275 E. Hillcrest Drive, "}
                        <span className="block">
                          {"STE 160-254 "}
                        </span>
                        <span className="block whitespace-nowrap">
                          Thousand Oaks, CA 91360
                        </span>
                      </span>
                      {" "}
                    </li>
                  </ul>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block relative min-w-0 max-w-full gap-2.5 text-accent max-lg:gap-[0.3125rem] 2xl:gap-[0.9375rem]">
                <div className="block [overflow-wrap:break-word]">
                  <a className="inline text-background cursor-pointer" data-component="link" href="tel:1-877-736-1112">
                    <span className="inline-block mr-2.5 text-color-005 [font-family:'Font_Awesome_6_Free'] font-black leading-4.5 before:content-[''] before:text-color-005 before:text-lg before:font-black before:leading-4.5" aria-hidden="true" />
                    {" (877) 736-1112"}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="w-[576.9px] border-r-2 border-solid border-r-primary border-l-2 border-l-primary flex relative min-w-0 px-10 flex-col justify-center gap-[0.9375rem] max-md:w-[21.5625rem] max-lg:mb-2.5 max-md:flex-wrap max-lg:grow max-lg:shrink-0 max-lg:order-[-99999] max-lg:border-r-[0] max-lg:border-initial max-lg:border-r-[initial] max-lg:border-l-[0] max-lg:border-l-[initial] max-lg:px-0 md:max-lg:w-182 md:max-lg:border-b-2 md:max-lg:border-b-primary md:max-lg:pb-10 2xl:w-[35.5625rem] 2xl:px-15">
              <div className="block relative min-w-0 max-w-full gap-[0.9375rem] text-center">
                <div className="block [overflow-wrap:break-word]">
                  <a className="inline-block text-accent cursor-pointer hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="/">
                    {" "}
                    <img className="w-[27.6875rem] h-27 inline-block max-w-full overflow-clip aspect-[auto_800/800] align-middle max-md:w-75 max-md:h-[4.5625rem]" data-component="image" alt="seoTuners Logo (Color)" height="800" src="/assets/cloned/svg/f9cb1c5aaca4.svg" width="800" />
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block relative min-w-0 max-w-full gap-[0.9375rem] text-background text-[1.25rem] text-center max-md:[font-size:inherit]">
                <div className="h-full block mt-5 [overflow-wrap:break-word] max-md:mt-2.5">
                  <p className="block">
                    Find Us On Social Media
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block relative min-w-0 max-w-full gap-[0.9375rem]">
                <div className="block text-[0rem] leading-0 text-center [overflow-wrap:break-word]">
                  <div className="w-full inline-block justify-center gap-x-2.5 justify-items-center [word-spacing:10px]" role="list">
                    {" "}
                    <span className="inline-block [word-break:break-word]" role="listitem">
                      {" "}
                      <a className="w-[3.4375rem] h-[3.4375rem] border-2 border-solid border-primary inline-flex rounded-[50px] justify-center items-center text-accent text-[2.1875rem] leading-[2.1875rem] bg-color-002 cursor-pointer max-lg:w-[2.8125rem] max-lg:h-[2.8125rem] max-lg:text-[1.5625rem] max-lg:leading-[1.5625rem] hover:bg-foreground hover:border-background hover:text-muted-foreground hover:opacity-90 hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] hover:transform-[matrix(1.08024,0,0,1.08024,0,0)] focus:transform-[matrix(1.1,0,0,1.1,0,0)]" data-component="link" href="https://www.facebook.com/seo.tuners" target="_blank">
                        {" "}
                        <span className="w-px h-px block absolute -top-87500 min-w-0 -m-px overflow-hidden max-lg:-top-62500">
                          Facebook
                        </span>
                        {" "}
                        <i className="w-[68.5%] h-[2.1875rem] block relative [font-family:'Font_Awesome_6_Brands'] max-lg:w-[61%] max-lg:h-[1.5625rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[-17.5px] before:left-[17.5px] before:text-accent before:text-[2.1875rem] before:leading-[2.1875rem] before:text-center before:transform-[matrix(1,0,0,1,-17.5,0)] before:origin-[17.5px_17.5px] max-lg:before:right-[-12.5px] max-lg:before:left-[12.5px] max-lg:before:text-[1.5625rem] max-lg:before:leading-[1.5625rem] max-lg:before:transform-[matrix(1,0,0,1,-12.5,0)] max-lg:before:origin-[12.5px_12.5px]" aria-hidden="true" />
                        {" "}
                      </a>
                      {" "}
                    </span>
                    {" "}
                    <span className="inline-block [word-break:break-word]" role="listitem">
                      {" "}
                      <a className="w-[3.4375rem] h-[3.4375rem] border-2 border-solid border-primary inline-flex rounded-[50px] justify-center items-center text-accent text-[2.1875rem] leading-[2.1875rem] bg-color-002 cursor-pointer max-lg:w-[2.8125rem] max-lg:h-[2.8125rem] max-lg:text-[1.5625rem] max-lg:leading-[1.5625rem] hover:bg-foreground hover:border-background hover:text-muted-foreground hover:opacity-90 hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] hover:transform-[matrix(1.08926,0,0,1.08926,0,0)] focus:transform-[matrix(1.1,0,0,1.1,0,0)]" data-component="link" href="https://x.com/seotuner" target="_blank">
                        {" "}
                        <span className="w-px h-px block absolute -top-87500 min-w-0 -m-px overflow-hidden max-lg:-top-62500">
                          X-twitter
                        </span>
                        {" "}
                        <i className="w-[68.5%] h-[2.1875rem] block relative [font-family:'Font_Awesome_6_Brands'] max-lg:w-[61%] max-lg:h-[1.5625rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[-17.5px] before:left-[17.5px] before:text-accent before:text-[2.1875rem] before:leading-[2.1875rem] before:text-center before:transform-[matrix(1,0,0,1,-17.5,0)] before:origin-[17.5px_17.5px] max-lg:before:right-[-12.5px] max-lg:before:left-[12.5px] max-lg:before:text-[1.5625rem] max-lg:before:leading-[1.5625rem] max-lg:before:transform-[matrix(1,0,0,1,-12.5,0)] max-lg:before:origin-[12.5px_12.5px]" aria-hidden="true" />
                        {" "}
                      </a>
                      {" "}
                    </span>
                    {" "}
                    <span className="inline-block [word-break:break-word]" role="listitem">
                      {" "}
                      <a className="w-[3.4375rem] h-[3.4375rem] border-2 border-solid border-primary inline-flex rounded-[50px] justify-center items-center text-accent text-[2.1875rem] leading-[2.1875rem] bg-color-002 cursor-pointer max-lg:w-[2.8125rem] max-lg:h-[2.8125rem] max-lg:text-[1.5625rem] max-lg:leading-[1.5625rem] hover:bg-foreground hover:border-background hover:text-muted-foreground hover:opacity-90 hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] hover:transform-[matrix(1.08925,0,0,1.08925,0,0)] focus:transform-[matrix(1.1,0,0,1.1,0,0)]" data-component="link" href="https://www.linkedin.com/company/seotuners/" target="_blank">
                        {" "}
                        <span className="w-px h-px block absolute -top-87500 min-w-0 -m-px overflow-hidden max-lg:-top-62500">
                          Linkedin
                        </span>
                        {" "}
                        <i className="w-[68.5%] h-[2.1875rem] block relative [font-family:'Font_Awesome_6_Brands'] max-lg:w-[61%] max-lg:h-[1.5625rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[-13.5px] before:left-[17.5px] before:text-accent before:text-[2.1875rem] before:leading-[2.1875rem] before:text-center before:transform-[matrix(1,0,0,1,-15.5,0)] before:origin-[15.5px_17.5px] max-lg:before:right-[-9.5px] max-lg:before:left-[12.5px] max-lg:before:text-[1.5625rem] max-lg:before:leading-[1.5625rem] max-lg:before:transform-[matrix(1,0,0,1,-11,0)] max-lg:before:origin-[11px_12.5px]" aria-hidden="true" />
                        {" "}
                      </a>
                      {" "}
                    </span>
                    {" "}
                    <span className="inline-block [word-break:break-word]" role="listitem">
                      {" "}
                      <a className="w-[3.4375rem] h-[3.4375rem] border-2 border-solid border-primary inline-flex rounded-[50px] justify-center items-center text-accent text-[2.1875rem] leading-[2.1875rem] bg-color-002 cursor-pointer max-lg:w-[2.8125rem] max-lg:h-[2.8125rem] max-lg:text-[1.5625rem] max-lg:leading-[1.5625rem] hover:bg-foreground hover:border-background hover:text-muted-foreground hover:opacity-90 hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] hover:transform-[matrix(1.08523,0,0,1.08523,0,0)] focus:transform-[matrix(1.1,0,0,1.1,0,0)]" data-component="link" href="https://www.instagram.com/seotuners/" target="_blank">
                        {" "}
                        <span className="w-px h-px block absolute -top-87500 min-w-0 -m-px overflow-hidden max-lg:-top-62500">
                          Instagram
                        </span>
                        {" "}
                        <i className="w-[68.5%] h-[2.1875rem] block relative [font-family:'Font_Awesome_6_Brands'] max-lg:w-[61%] max-lg:h-[1.5625rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[-13.5px] before:left-[17.5px] before:text-accent before:text-[2.1875rem] before:leading-[2.1875rem] before:text-center before:transform-[matrix(1,0,0,1,-15.5,0)] before:origin-[15.5px_17.5px] max-lg:before:right-[-9.5px] max-lg:before:left-[12.5px] max-lg:before:text-[1.5625rem] max-lg:before:leading-[1.5625rem] max-lg:before:transform-[matrix(1,0,0,1,-11,0)] max-lg:before:origin-[11px_12.5px]" aria-hidden="true" />
                        {" "}
                      </a>
                      {" "}
                    </span>
                    {" "}
                    <span className="inline-block [word-break:break-word]" role="listitem">
                      {" "}
                      <a className="w-[3.4375rem] h-[3.4375rem] border-2 border-solid border-primary inline-flex rounded-[50px] justify-center items-center text-accent text-[2.1875rem] leading-[2.1875rem] bg-color-002 cursor-pointer max-lg:w-[2.8125rem] max-lg:h-[2.8125rem] max-lg:text-[1.5625rem] max-lg:leading-[1.5625rem] hover:bg-foreground hover:border-background hover:text-muted-foreground hover:opacity-90 hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] hover:transform-[matrix(1.08521,0,0,1.08521,0,0)] focus:transform-[matrix(1.1,0,0,1.1,0,0)]" data-component="link" href="https://www.yelp.com/biz/seotuners-thousand-oaks-3" target="_blank">
                        {" "}
                        <span className="w-px h-px block absolute -top-87500 min-w-0 -m-px overflow-hidden max-lg:-top-62500">
                          Yelp
                        </span>
                        {" "}
                        <i className="w-[68.5%] h-[2.1875rem] block relative [font-family:'Font_Awesome_6_Brands'] max-lg:w-[61%] max-lg:h-[1.5625rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[-8.5px] before:left-[17.5px] before:w-6.5 before:text-accent before:text-[2.1875rem] before:leading-[2.1875rem] before:text-center before:transform-[matrix(1,0,0,1,-13,0)] before:origin-[13px_17.5px] max-lg:before:right-[-6.5px] max-lg:before:left-[12.5px] max-lg:before:w-[1.1875rem] max-lg:before:text-[1.5625rem] max-lg:before:leading-[1.5625rem] max-lg:before:transform-[matrix(1,0,0,1,-9.5,0)] max-lg:before:origin-[9.5px_12.5px]" aria-hidden="true" />
                        {" "}
                      </a>
                      {" "}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="w-[17.9125rem] flex relative min-w-0 pt-7.5 flex-col gap-2.5 max-md:w-[21.5625rem] max-md:pb-10 max-md:flex-wrap max-lg:grow max-lg:shrink-0 max-lg:gap-[0.3125rem] max-lg:pt-0 md:max-lg:w-86 md:max-lg:pr-5 2xl:w-[280.5px] 2xl:gap-[0.9375rem]">
              <div className="block relative min-w-0 max-w-full gap-2.5 text-background text-[1.25rem] max-lg:gap-[0.3125rem] max-md:[font-size:inherit] 2xl:gap-[0.9375rem]">
                <div className="block [overflow-wrap:break-word]">
                  <p className="block">
                    Corporate Headquarters
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block relative min-w-0 max-w-full gap-2.5 max-lg:gap-[0.3125rem] 2xl:gap-[0.9375rem]">
                <div className="h-full block -mb-2.5 [overflow-wrap:break-word]">
                  <ul className="block mb-6 [list-style-type:none] list-outside">
                    <li className="flex relative items-start">
                      <span className="flex relative top-2 -bottom-2 text-center">
                        {" "}
                        <i className="w-[1.175rem] block text-color-005 [font-family:'Font_Awesome_6_Free'] text-[0.9375rem] font-black leading-[0.9375rem] before:content-[''] before:text-color-005 before:text-[0.9375rem] before:font-black before:leading-[0.9375rem] before:text-center" aria-hidden="true" />
                        {" "}
                      </span>
                      {" "}
                      <span className="block pl-[0.3125rem] self-center text-background">
                        {"10161 W Park Run Drive, #150 "}
                        <span className="block">
                          Las Vegas, NV 89145
                        </span>
                      </span>
                      {" "}
                    </li>
                  </ul>
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
      </div>
      {" "}
      <div className="flex relative max-w-full px-7.5 flex-col bg-accent max-md:px-[0.9375rem] md:max-lg:px-5 2xl:px-0">
        <div className="w-full flex max-w-[min(100%,_1200px)] mx-2.5 py-5 flex-col grow gap-5 max-md:max-w-[min(100%,_767px)] max-md:py-[0.9375rem] max-md:flex-wrap max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] 2xl:mx-90">
          <div className="block relative min-w-0 max-w-full gap-5 text-background text-[1.25rem] text-center max-md:text-[1rem] md:max-lg:[font-size:inherit]">
            <div className="block [overflow-wrap:break-word]">
              {" Copyright © 2026 seoTuners | All Right Reserved "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="flex relative max-w-full px-7.5 flex-col bg-primary max-md:px-[0.9375rem] md:max-lg:px-5 2xl:px-0">
        <div className="flex max-w-[min(100%,_1200px)] mx-2.5 py-5 flex-col grow gap-5 max-md:max-w-[min(100%,_767px)] max-md:py-[0.9375rem] max-md:flex-wrap max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] 2xl:mx-90">
          <div className="block relative min-w-0 max-w-full gap-5 text-background text-[1.25rem] text-center max-md:text-[1rem] md:max-lg:[font-size:inherit]">
            <div className="block [overflow-wrap:break-word]">
              <a className="inline cursor-pointer" data-component="link" href="/#faq">
                FAQs
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/blog/">
                Blog
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/privacy-policy/">
                Privacy/Refund Policy
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/terms-conditions/">
                {"Terms & Conditions"}
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/accessibility-policy/">
                Accessibility Policy
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/sitemap/">
                Sitemap
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/affordable-seo/">
                Affordable SEO
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/treatment-center-seo/">
                Treatment Center SEO
              </a>
              {" | "}
              <a className="inline cursor-pointer" data-component="link" href="/contact-us/">
                Contact Us
              </a>
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
