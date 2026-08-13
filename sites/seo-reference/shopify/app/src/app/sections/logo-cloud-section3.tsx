import Logo3, { type Logo3Data } from "../components/logo3";
const Logo3_data: Logo3Data[] = [
    { ariaLabel: "External source: Facebook (Opens in a new window)", href: "https://www.facebook.com/shopify", icon: <>
          <use href="#icon-facebook" />
          </> },
    { ariaLabel: "External source: Twitter (Opens in a new window)", href: "https://twitter.com/shopify", icon: <>
          <use href="#icon-twitter" />
          </> },
    { ariaLabel: "External source: YouTube (Opens in a new window)", href: "https://www.youtube.com/user/shopify", icon: <>
          <use href="#icon-youtube" />
          </> },
    { ariaLabel: "External source: Instagram (Opens in a new window)", href: "https://www.instagram.com/shopify/", icon: <>
          <use href="#icon-instagram" />
          </> },
    { ariaLabel: "External source: TikTok (Opens in a new window)", href: "https://www.tiktok.com/@shopify", icon: <>
          <use href="#icon-tiktok" />
          </> },
    { ariaLabel: "External source: LinkedIn (Opens in a new window)", href: "https://www.linkedin.com/company/shopify", icon: <>
          <use href="#icon-linkedin" />
          </> },
    { ariaLabel: "External source: Pinterest (Opens in a new window)", href: "https://www.pinterest.com/shopify/", icon: <>
          <use href="#icon-pinterest" />
          </> }
];
/** Logo Cloud section. */
export default function LogoCloudSection3({ logos = Logo3_data } = {}) {
  return (
    <ul className="w-[282.5px] flex flex-wrap gap-4 [list-style-type:none] list-outside max-md:w-[19.4375rem] md:max-lg:w-177 2xl:w-80">
      {logos.map((d, i) => <Logo3 key={i} d={d} />)}
    </ul>
  );
}
