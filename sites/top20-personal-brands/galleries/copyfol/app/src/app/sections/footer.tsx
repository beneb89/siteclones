import ListRow4 from "../components/list-row4";
import ListRow5 from "../components/list-row5";
import Illustration4 from "../svgs/svg-illustration4";
import Logo, { type LogoData } from "../components/logo";
import { ListRow4_styles, ListRow5_styles, ListRow5_styles2, ListRow4_styles2 } from "../_styles";
import { listRow4Data as listRow4DataContent, listRow5Data as listRow5DataContent, listRow5Data2 as listRow5Data2Content, listRow4Data2 as listRow4Data2Content } from "../content";
const Logo_data: LogoData[] = [
    { ariaLabel: "Copyfolio on TikTok", href: "https://www.tiktok.com/@copyfolioapp", icon: <>
          <path d="M18.883 6.277a5 5 0 0 1-.386-.229 5.5 5.5 0 0 1-.992-.859 4.8 4.8 0 0 1-1.117-2.351h.004c-.085-.509-.05-.838-.045-.838h-3.369v13.282q.002.267-.007.529l-.003.065q0 .015-.002.03v.007a2.96 2.96 0 0 1-.436 1.34 2.9 2.9 0 0 1-1.003.974 2.77 2.77 0 0 1-1.394.375c-1.57 0-2.842-1.304-2.842-2.916s1.272-2.916 2.842-2.916c.297 0 .592.047.875.14l.004-3.497a6.1 6.1 0 0 0-2.559.204 6.2 6.2 0 0 0-2.263 1.235 6.7 6.7 0 0 0-1.442 1.813c-.142.25-.679 1.255-.744 2.885-.04.925.232 1.884.362 2.28v.009c.081.233.398 1.03.914 1.7a6.9 6.9 0 0 0 1.46 1.404v-.008l.008.008C8.378 22.073 10.187 22 10.187 22c.313-.013 1.361 0 2.552-.575a6.4 6.4 0 0 0 2.072-1.589 6.6 6.6 0 0 0 1.13-1.913 7.3 7.3 0 0 0 .406-2.189V8.687c.041.025.585.392.585.392s.784.512 2.008.846c.877.237 2.06.287 2.06.287v-3.41c-.414.047-1.256-.087-2.117-.525" />
          </> },
    { ariaLabel: "Copyfolio on Pinterest", href: "https://www.pinterest.com/copyfolio", icon: <>
          <path fillRule="evenodd" d="M12 22c5.522 0 10-4.478 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10M6.005 10.573c.112-3.073 2.878-5.22 5.655-5.519 3.508-.378 6.803 1.232 7.264 4.395.511 3.57-1.586 7.433-5.341 7.156-.763-.055-1.194-.341-1.697-.676-.17-.112-.346-.23-.546-.346C10.9 17.786 10.367 19.9 8.776 21c-.36-2.451.201-4.454.746-6.401.195-.696.388-1.384.536-2.083-.956-1.542.118-4.654 2.136-3.886 1.19.452.747 1.787.303 3.121-.482 1.453-.964 2.904.659 3.216 3.25.627 4.576-5.4 2.563-7.36-2.917-2.824-8.478-.062-7.792 3.983.085.502.905 1.293.905 1.293s-.039.48-.252 1.367c-1.867-.395-2.648-1.802-2.575-3.677" clipRule="evenodd" />
          </> },
    { ariaLabel: "Copyfolio on LinkedIn", href: "https://www.linkedin.com/company/copyfolio/", icon: <>
          <g clipPath="url(#linkedin_svg__a)">
            <path fillRule="evenodd" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1.494 5.903a1.72 1.72 0 1 0 1.91-2.86 1.72 1.72 0 0 0-1.91 2.86m10.583 11.138h2.964l.001-5.235c0-2.57-.554-4.546-3.557-4.546a3.12 3.12 0 0 0-2.807 1.542h-.04V9.497H9.793v9.544h2.964V14.32c0-1.245.236-2.45 1.78-2.45 1.52 0 1.54 1.424 1.54 2.53zm-8.146 0H4.965V9.497H7.93z" clipRule="evenodd" />
          </g>
          <defs>
            <clipPath id="linkedin_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
          </> },
    { ariaLabel: "Copyfolio on Instagram", href: "https://www.instagram.com/copyfolioapp/", icon: <>
          <g clipPath="url(#instagram_svg__a)">
            <g clipPath="url(#instagram_svg__b)">
              <path d="M5.754 2.906a4.7 4.7 0 0 0-1.703 1.11 4.7 4.7 0 0 0-1.11 1.699c-.238.61-.398 1.308-.445 2.332s-.058 1.351-.058 3.96.011 2.938.058 3.962c.047 1.023.211 1.722.445 2.332a4.7 4.7 0 0 0 1.11 1.703c.535.535 1.07.863 1.703 1.11.61.238 1.309.398 2.332.445s1.351.058 3.96.058 2.938-.012 3.962-.058c1.023-.047 1.723-.211 2.332-.446a4.7 4.7 0 0 0 1.703-1.11 4.7 4.7 0 0 0 1.11-1.702c.238-.61.398-1.309.445-2.332.047-1.024.058-1.352.058-3.961s-.011-2.938-.058-3.961c-.047-1.024-.211-1.723-.446-2.332a4.7 4.7 0 0 0-1.105-1.7 4.7 4.7 0 0 0-1.703-1.109c-.61-.238-1.309-.398-2.332-.445-1.024-.047-1.352-.059-3.961-.059s-2.938.012-3.961.059c-1.027.043-1.727.207-2.336.445M15.93 4.187c.937.043 1.445.2 1.785.333.45.175.77.382 1.105.718.336.336.543.657.72 1.106.132.34.288.847.331 1.785.047 1.012.055 1.316.055 3.883 0 2.566-.012 2.87-.055 3.883-.043.937-.2 1.445-.332 1.785-.176.449-.383.77-.719 1.105a3 3 0 0 1-1.105.719c-.34.133-.848.289-1.785.332-1.012.047-1.317.055-3.883.055-2.567 0-2.871-.012-3.883-.055-.937-.043-1.445-.2-1.785-.332a3 3 0 0 1-1.106-.719 3 3 0 0 1-.718-1.105c-.133-.34-.29-.848-.332-1.785-.047-1.012-.055-1.317-.055-3.883 0-2.567.012-2.871.055-3.883.043-.938.199-1.445.332-1.785.175-.45.383-.77.718-1.106A3 3 0 0 1 6.38 4.52c.34-.133.848-.29 1.785-.332 1.012-.047 1.316-.055 3.883-.055 2.566 0 2.871.008 3.883.054" />
              <path d="M7.113 12.012a4.934 4.934 0 1 0 9.868 0 4.934 4.934 0 0 0-9.868 0m8.137 0a3.202 3.202 0 1 1-6.405 0 3.202 3.202 0 0 1 6.405 0M17.18 8.035a1.152 1.152 0 1 0 0-2.304 1.152 1.152 0 0 0 0 2.304" />
            </g>
          </g>
          <defs>
            <clipPath id="instagram_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
            <clipPath id="instagram_svg__b">
              <path fill="#fff" d="M2 2h20v20H2z" />
            </clipPath>
          </defs>
          </> }
];
/** Site footer. */
export default function Footer({ listRow4Data = listRow4DataContent, listRow5Data = listRow5DataContent, listRow5Data2 = listRow5Data2Content, listRow4Data2 = listRow4Data2Content, logos = Logo_data } = {}) {
  return (
    <footer className="border-t border-solid border-t-border block relative z-20 py-16 bg-background max-md:py-12 max-md:px-3 md:max-lg:py-14">
      <div className="grid max-w-360 mx-auto grid-rows-1 aspect-[2.789] w-full grid-cols-8 max-md:px-1 max-md:aspect-[0.27] md:max-lg:aspect-[0.954] 2xl:aspect-[3.137]">
        <div className="flex px-6 flex-col col-start-2 col-end-[span_12] max-md:col-span-full max-md:px-0 md:max-lg:col-end-[span_6]">
          <nav className="grid gap-y-10 gap-x-6 text-sm leading-[1.3125rem] grid-cols-1 max-md:gap-8 md:max-lg:gap-x-8" data-component="nav">
            <div className="block">
              <h3 className="block mb-2.5 text-color-001 text-base font-bold leading-5 max-md:leading-6" data-component="heading">
                Meet Copyfolio
              </h3>
              <ul className="block mt-4 [list-style-type:none] list-outside">
                {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
              </ul>
            </div>
            <div className="block">
              <h3 className="block mb-2.5 text-color-001 text-base font-bold leading-5 max-md:leading-6" data-component="heading">
                Product
              </h3>
              <ul className="block mt-4 [list-style-type:none] list-outside">
                {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
              </ul>
            </div>
            <div className="block">
              <h3 className="block mb-2.5 text-color-001 text-base font-bold leading-5 max-md:leading-6" data-component="heading">
                Legal
              </h3>
              <ul className="block mt-4 [list-style-type:none] list-outside">
                {listRow5Data2.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles2[i]} />)}
              </ul>
            </div>
            <div className="block">
              <h3 className="block mb-2.5 text-color-001 text-base font-bold leading-5 max-md:leading-6" data-component="heading">
                Resources
              </h3>
              <ul className="block mt-4 [list-style-type:none] list-outside">
                {listRow4Data2.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles2[i]} />)}
              </ul>
            </div>
          </nav>
          <div className="flex mt-18 justify-between items-center max-md:flex-col max-md:[align-items:initial]">
            <a className="block cursor-pointer" data-component="link" aria-label="Copyfolio Logo" href="https://copyfol.io/">
              <Illustration4 />
            </a>
            <p className="block text-clr-3 text-sm leading-[1.3125rem] max-md:mt-4">
              © 2013 - 2026 UXfolio LLC
            </p>
            <div className="flex items-center gap-x-3 max-md:mt-4 md:max-lg:gap-x-1">
              {logos.map((d, i) => <Logo key={i} d={d} />)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
