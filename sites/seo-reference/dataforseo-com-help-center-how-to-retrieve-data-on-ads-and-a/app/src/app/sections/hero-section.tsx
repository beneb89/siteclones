/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <div className="box-content h-50 min-h-50 block relative z-101 pt-12.5 text-left bg-clr-2 [background-position:50%_0px] bg-no-repeat max-md:h-60 max-md:min-h-60 max-lg:pt-0 md:max-lg:h-55 md:max-lg:min-h-55" style={{ backgroundImage: "url(\"/assets/cloned/images/fb7f2f71c6ef.png\")" }}>
      <div className="box-content w-320 h-26.5 table relative inset-0 max-md:w-[23.4375rem] max-md:h-60 max-lg:block max-lg:absolute max-lg:right-auto max-lg:bottom-auto md:max-lg:w-192 md:max-lg:h-55 2xl:w-480">
        <div className="box-content h-full table-row relative z-100 align-middle max-lg:block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
          <div className="box-content w-275 h-full table-cell align-middle max-md:w-75 max-lg:table max-md:mx-[37.5px] md:max-lg:w-167.5 md:max-lg:mx-[3.0625rem]">
            <div className="box-content h-full block relative z-25 text-center max-lg:table-cell max-lg:align-middle">
              <div className="box-content block relative">
                <div className="box-content block text-background [font-family:Raleway] text-5xl font-bold leading-[3.3125rem] uppercase max-md:text-2xl max-md:leading-[1.8125rem]">
                  {" HELP CENTER"}
                </div>
                {" "}
                <div className="box-content block">
                  <div className="box-content block">
                    <div className="box-content block relative">
                      <form className="w-full inline-block relative p-[0.3125rem] rounded-[3px] overflow-hidden align-middle bg-clr-3" id="searchform" role="search">
                        {" "}
                        <div className="box-content block">
                          <label className="box-content w-px h-px hidden absolute -m-px overflow-hidden [clip-path:inset(50%)] cursor-default" htmlFor="s">
                            Search for:
                          </label>
                          {" "}
                          <input className="w-full h-[2.6875rem] block float-left pr-[4.0625rem] pl-7.5 rounded-[3px] overflow-clip text-clr-4 text-base font-normal leading-[1.1875rem] text-start bg-background cursor-text" data-ditto-id="style-s" data-component="input" id="s" name="s" placeholder="Search" type="text" value="" />
                          {" "}
                        </div>
                        {" "}
                      </form>
                      {" "}
                    </div>
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
  );
}
