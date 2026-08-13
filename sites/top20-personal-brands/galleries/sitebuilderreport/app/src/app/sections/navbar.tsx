import Icon from "../svgs/svg-icon";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <div className="box-content block relative z-150000 mb-0.5 pt-5 bg-background max-lg:pb-5 max-lg:mb-0">
      <div className="box-content w-288 flex max-w-400 mx-16 justify-between items-center text-left max-md:w-[337.5px] max-lg:block max-lg:relative max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
        <a className="box-content w-47.5 block mt-0.5 text-primary cursor-pointer max-lg:w-[10.9375rem] max-lg:inline-block max-lg:mt-2" data-component="link" href="/" id="logo">
          {" "}
          <img className="box-content w-47.5 h-[1.4375rem] inline overflow-clip max-lg:w-[10.9375rem] max-lg:h-[1.3125rem]" data-component="image" alt="Site Builder Report logo" src="/assets/cloned/images/c21ba3b40c71.png" />
          {" "}
        </a>
        {" "}
        <nav className="box-content block text-right max-lg:hidden" data-component="nav">
          <ul className="box-content block font-light leading-[1.6875rem] [list-style-type:none] list-outside">
            <li className="box-content inline-block ml-5 text-[0.9375rem] font-normal">
              <a className="box-content h-[1.7rem] flex items-center gap-1 cursor-pointer whitespace-nowrap" data-component="link" href="#">
                {"Website Builders "}
                <Icon />
              </a>
              {" "}
            </li>
            <li className="box-content inline-block ml-5 text-[0.9375rem] font-normal">
              <a className="box-content h-[1.7rem] flex items-center gap-1 cursor-pointer whitespace-nowrap" data-component="link" href="#">
                {"Templates & Examples "}
                <Icon />
              </a>
              {" "}
            </li>
            <li className="box-content inline-block ml-5 text-[0.9375rem] font-normal">
              <a className="box-content block cursor-pointer" data-component="link" href="/blog">
                Blog
              </a>
            </li>
            <li className="box-content inline-block ml-5 text-[0.9375rem] font-normal">
              <a className="box-content block cursor-pointer" data-component="link" href="/about">
                About
              </a>
            </li>
          </ul>
          {" "}
        </nav>
        {" "}
        <a className="box-content hidden min-w-0 text-primary cursor-pointer max-lg:w-6 max-lg:h-6 max-lg:block max-lg:absolute max-lg:-top-1 max-lg:right-0 max-lg:py-2.5 max-lg:pl-2.5 max-lg:indent-[-169983px] max-lg:[background-size:24px_24px] max-lg:[background-position:50%_50%] max-lg:bg-no-repeat" style={{ backgroundImage: "url(\"/assets/cloned/images/cbab070fdf71.png\")" }} href="#" id="toggle-mobile-menu">
          Menu
        </a>
        {" "}
      </div>
      {" "}
    </div>
  );
}
