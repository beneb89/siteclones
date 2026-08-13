import ListRow8 from "../components/list-row8";
import Logo3, { type Logo3Data } from "../components/logo3";
import { ListRow8_styles, Logo3_styles } from "../_styles";
import { listRow8Data as listRow8DataContent } from "../content";
const Logo3_data: Logo3Data[] = [
    { ariaLabel: "Facebook", href: "https://www.facebook.com/NextGrowthWithAI/", height: "32", viewBox: "0 0 32 32", width: "32", icon: <>
          <title>
            {"Facebook"}
          </title>
          <path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z" />
          </> },
    { ariaLabel: "YouTube", href: "https://www.youtube.com/@nextgrowth-ai", height: "28", viewBox: "0 0 28 28", width: "28", icon: <>
          <title>
            {"YouTube"}
          </title>
          <path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z" />
          </> },
    { ariaLabel: "GitHub", href: "https://github.com/thenguyenvn90", height: "28", viewBox: "0 0 24 28", width: "24", icon: <>
          <title>
            {"Github"}
          </title>
          <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z" />
          </> },
    { ariaLabel: "Linkedin", href: "https://www.linkedin.com/in/the-nguyen-minh-nextgrowth-ai/", height: "28", viewBox: "0 0 24 28", width: "24", icon: <>
          <title>
            {"Linkedin"}
          </title>
          <path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z" />
          </> },
    { ariaLabel: "Reddit", href: "https://www.reddit.com/user/TheMinhNguyen/", height: "28", viewBox: "0 0 24 28", width: "24", icon: <>
          <title>
            {"Reddit"}
          </title>
          <path d="M14.672 17.641c0.109 0.109 0.109 0.297 0 0.406-0.766 0.766-2.234 0.828-2.672 0.828s-1.906-0.063-2.672-0.828c-0.109-0.109-0.109-0.297 0-0.406 0.109-0.125 0.297-0.125 0.406 0 0.484 0.484 1.531 0.656 2.266 0.656s1.781-0.172 2.266-0.656c0.109-0.125 0.297-0.125 0.406 0zM10.563 15.203c0 0.656-0.547 1.203-1.203 1.203s-1.203-0.547-1.203-1.203c0-0.672 0.547-1.203 1.203-1.203s1.203 0.531 1.203 1.203zM15.844 15.203c0 0.656-0.547 1.203-1.203 1.203s-1.203-0.547-1.203-1.203c0-0.672 0.547-1.203 1.203-1.203s1.203 0.531 1.203 1.203zM19.203 13.594c0-0.875-0.719-1.594-1.609-1.594-0.438 0-0.844 0.187-1.141 0.484-1.094-0.75-2.562-1.234-4.172-1.281l0.844-3.797 2.672 0.609c0.016 0.656 0.547 1.188 1.203 1.188s1.203-0.547 1.203-1.203-0.547-1.203-1.203-1.203c-0.469 0-0.875 0.266-1.078 0.672l-2.953-0.656c-0.156-0.047-0.297 0.063-0.328 0.203l-0.938 4.188c-1.609 0.063-3.063 0.547-4.141 1.297-0.297-0.313-0.703-0.5-1.156-0.5-0.891 0-1.609 0.719-1.609 1.594 0 0.641 0.375 1.188 0.906 1.453-0.047 0.234-0.078 0.5-0.078 0.75 0 2.547 2.859 4.609 6.391 4.609s6.406-2.063 6.406-4.609c0-0.266-0.031-0.516-0.094-0.766 0.516-0.266 0.875-0.812 0.875-1.437zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z" />
          </> }
];
/** Site footer. */
export default function Footer({ listRow8Data = listRow8DataContent, logos = Logo3_data } = {}) {
  return (
    <footer className="block bg-background" id="colophon" role="contentinfo">
      <div className="block">
        <div className="block">
          <div className="block">
            <div className="block max-w-322.5 px-6 mx-auto">
              <div className="grid py-7.5 gap-7.5 grid-cols-[400.656px_801.344px] max-lg:grid-cols-1 2xl:grid-cols-[404px_808px]">
                <div className="flex relative after:content-[''] after:block after:absolute after:inset-y-0 after:-right-[0.9375rem] after:left-[415.7px] after:w-0 after:h-[78.5px] after: after:origin-[0px_39.2656px] max-md:after:left-85.5 md:max-lg:after:left-[45.9375rem] 2xl:after:left-[26.1875rem]">
                  <div className="flex min-w-0 flex-1 max-lg:text-center">
                    <div className="block min-w-0 flex-1">
                      <section className="block" id="block-20">
                        <figure className="block mt-[8.5px]">
                          <img className="w-[13.6875rem] h-17.5 block max-w-full overflow-clip aspect-[3.127/1] align-bottom max-lg:mx-auto" data-component="image" alt="NextGrowth.ai logo" height="253" sizes="(max-width: 791px) 100vw, 791px" src="/assets/cloned/images/a1e0114e509f.webp" srcSet="/assets/cloned/images/a1e0114e509f.webp 791w, /assets/cloned/images/c4a56630c49b.webp 300w, /assets/cloned/images/9581a1abd2ac.webp 768w" width="791" />
                        </figure>
                        {" "}
                      </section>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="flex relative">
                  <div className="flex min-w-0 flex-1 text-right max-lg:text-center">
                    <div className="block min-w-0 flex-1">
                      <nav className="flex justify-end max-lg:justify-center" data-component="nav" aria-label="Footer Navigation" id="footer-navigation" role="navigation">
                        <div className="flex">
                          <ul className="flex flex-wrap justify-end [list-style-type:none] list-outside max-lg:justify-center" id="footer-menu">
                            {listRow8Data.map((d, i) => <ListRow8 key={i} d={d} styles={ListRow8_styles[i]} />)}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                      </nav>
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
        </div>
        {" "}
        <div className="block">
          <div className="border-t border-solid border-t-foreground block">
            <div className="block max-w-322.5 px-6 mx-auto">
              <div className="grid py-5 gap-x-7.5 grid-cols-2 max-lg:grid-cols-1">
                <div className="flex relative after:content-[''] after:block after:absolute after:inset-y-0 after:-right-[0.9375rem] after:left-154 after:w-0 after:h-[3.825rem] after: after:origin-[0px_30.5938px] max-md:after:left-85.5 md:max-lg:after:left-[45.9375rem] 2xl:after:left-[38.8125rem]">
                  <div className="flex min-w-0 items-center flex-1 text-left max-lg:text-center">
                    <div className="block min-w-0 flex-1">
                      <div className="block my-[1.0625rem] text-color-001">
                        <div className="block">
                          <p className="block">
                            © 2026 NextGrowth.ai
                          </p>
                          {" "}
                        </div>
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="flex relative">
                  <div className="flex min-w-0 items-center flex-1 text-right max-lg:text-center">
                    <div className="block min-w-0 flex-1">
                      <div className="block">
                        <div className="flex flex-wrap justify-end items-center gap-[0.5875rem] text-[1.1875rem] leading-[1.875rem] max-lg:justify-center">
                          {logos.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
                        </div>
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
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
