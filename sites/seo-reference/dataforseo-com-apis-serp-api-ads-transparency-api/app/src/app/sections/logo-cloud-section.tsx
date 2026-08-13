import Logo from "../components/logo";
import { Logo_styles } from "../_styles";
import { logos as logosContent } from "../content";
/** Logo Cloud section. */
export default function LogoCloudSection({ logos = logosContent } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] text-center bg-no-repeat before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
      <div className="box-content w-275 block relative z-20 mx-[6.5625rem] max-md:w-75 max-md:mx-[52.5px] md:max-lg:w-150 md:max-lg:mx-[6.1875rem] 2xl:mx-[26.5625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
        <div className="box-content block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
          <div className="w-full h-41.5 min-h-px block relative float-left mt-[1.5625rem] py-7.5 rounded-md bg-background shadow-[var(--clr-3)_0px_17px_40px_0px] max-md:h-169.5 max-md:[float:initial] md:max-lg:h-68">
            <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
              <div className="box-content h-full block">
                <div className="box-content h-full block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
                  {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
