import Illustration from "../svgs/svg-illustration";
import Icon6 from "../svgs/svg-icon6";
import ListRow from "../components/list-row";
import Icon7 from "../svgs/svg-icon7";
import { ListRow_styles } from "../_styles";
import { listRowData as listRowDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ listRowData = listRowDataContent } = {}) {
  return (
    <div className="block relative mb-12 h-auto w-full">
      <header className="block py-7 max-md:py-4">
        <div className="grid z-20 max-w-360 px-7 mx-auto w-full grid-cols-8 max-md:px-4">
          <div className="flex justify-start items-center gap-10 col-start-2 col-end-[span_12] h-10 max-lg:justify-between max-md:col-span-full max-lg:gap-[initial] md:max-lg:col-end-[span_6]">
            <a className="block cursor-pointer" data-component="link" href="https://copyfol.io/">
              <Illustration />
            </a>
            <div className="flex items-center gap-8 [list-style-type:none] list-outside max-lg:hidden">
              <div className="block relative">
                <button className="h-9 flex relative py-2 rounded-sm justify-between items-center leading-5 tracking-[-0.2px] text-center cursor-pointer" data-component="button" type="button">
                  <span className="block">
                    Features
                  </span>
                  <Icon6 />
                </button>
              </div>
              {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
              <li className="list-item">
                <a className="inline cursor-pointer" data-component="link" href="/">
                  <div className="h-9 inline-block relative py-2 rounded-sm leading-5 tracking-[-0.2px] text-center" data-component="button" type="button">
                    Blog
                    <div className="w-8 block absolute bottom-0 bg-color-001 h-px" />
                  </div>
                </a>
              </li>
            </div>
            <div className="flex ml-[60.9px] items-center gap-8 max-lg:hidden 2xl:ml-[12.375rem]">
              <a className="h-9 block cursor-pointer" data-component="link" href="https://copyfol.io/auth/log-in">
                <div className="inline-block relative py-2 rounded-sm leading-5 tracking-[-0.2px] text-center whitespace-nowrap" data-component="button" type="button">
                  Log In
                </div>
              </a>
              <a className="h-14 block cursor-pointer" data-component="link" href="https://copyfol.io/auth/sign-up">
                <div className="inline-block py-3 px-4 rounded-2xl text-color-004 text-center bg-color-002 shadow-[var(--color-004)_0px_0px_0px_0px_inset,var(--color-001)_0px_0px_0px_1px_inset,var(--clr-0)_0px_0px_0px_0px] h-14 w-[12.375rem] hover:shadow-[var(--color-004)_0px_0px_0px_0px_inset,var(--color-001)_0px_0px_0px_1.99608px_inset,var(--clr-0)_0px_0px_0px_0px] focus:shadow-[var(--color-004)_0px_0px_0px_0px_inset,var(--color-001)_0px_0px_0px_1.01671px_inset,var(--clr-0)_0px_0px_0px_0px]" data-component="button" type="button">
                  Get Started For Free
                </div>
              </a>
            </div>
            <div className="hidden min-w-0 justify-start items-start max-lg:flex">
              <button className="inline-block text-center cursor-pointer max-lg:h-6 max-lg:block" aria-label="Mobile menu toggle" id="mobileNavToggleButton" type="button">
                <Icon7 />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
