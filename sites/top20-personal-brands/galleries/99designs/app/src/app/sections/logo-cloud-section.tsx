import Logo from "../components/logo";
import { Logo_styles } from "../_styles";
import { logos as logosContent } from "../content";
/** Logo Cloud section. */
export default function LogoCloudSection({ logos = logosContent } = {}) {
  return (
    <div className="h-full flex max-w-225 justify-between overflow-scroll max-lg:max-w-none" role="list">
      {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
    </div>
  );
}
