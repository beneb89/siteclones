import MediaCard, { type MediaCardData } from "../components/media-card";
import { MediaCard_meta } from "../ditto-meta";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { href: "/ppc-news/2026-08/political-content-policy-new-zealand/", title: "Update to Political Content Policy for New Zealand", text: "In August 2026, Google will update the Political Content policy for New Zealand to include details about…", alt: "Update to Political Content Policy for New Zealand", imgSrc: "/assets/cloned/images/c707fccfcb90.jpg", srcSet: "/assets/cloned/images/c707fccfcb90.jpg 380w, /assets/cloned/images/b1408e71c124.jpg 260w", href2: "/ppc-news/2026-08/political-content-policy-new-zealand/", href3: "/ppc-news/2026-08/political-content-policy-new-zealand/" },
    { href: "/ppc-news/2026-08/google-ads-ai-tools-marketing/", title: "Google Ads Introduces AI Tools for Marketing", text: "Google Ads is rolling out several new AI tools designed to enhance marketing strategies and simplify workflows.…", alt: "Two computer screens display Google Ads and Google Analytics dashboards with charts, graphs, and data summaries, representing digital marketing and web analytics tools in use.", imgSrc: "/assets/cloned/images/c482cb123ea2.jpg", srcSet: "/assets/cloned/images/c482cb123ea2.jpg 380w, /assets/cloned/images/2049d5ab9461.jpg 230w, /assets/cloned/images/dc85edba761b.jpg 260w", href2: "/ppc-news/2026-08/google-ads-ai-tools-marketing/", href3: "/ppc-news/2026-08/google-ads-ai-tools-marketing/" },
    { href: "/ppc-news/2026-08/google-merchant-center-new-deal-ends-annotation/", title: "“Deal Ends” Annotation Spotted for Shopping Ads", text: "Google Merchant Center has introduced a new experimental annotation named Deal Ends, which displays urgency…", alt: "Screenshot of a web page titled “About Deal Ends experimental annotation.” It explains how Deal Ends annotations show time-sensitive discounts on product ads, with sections on how it works, eligibility, and related links.", imgSrc: "/assets/cloned/images/108d278f6fd2.jpg", srcSet: "/assets/cloned/images/108d278f6fd2.jpg 380w, /assets/cloned/images/22cc36bc3bf5.jpg 230w, /assets/cloned/images/92ee812999f1.jpg 260w", href2: "/ppc-news/2026-08/google-merchant-center-new-deal-ends-annotation/", href3: "/ppc-news/2026-08/google-merchant-center-new-deal-ends-annotation/" },
    { href: "/ppc-news/2026-08/microsoft-introduces-bulk-edit-disapproved-assets/", title: "Microsoft Introduces Bulk Edit for Disapproved Assets", text: "Microsoft Advertising has launched a new Bulk edit tool that simplifies adjusting and appealing disapproved…", alt: "Screenshot of an asset management dashboard showing assets selected for bulk editing, with text instructions on editing or requesting appeals for multiple assets at once.", imgSrc: "/assets/cloned/images/e29f85a53249.jpg", srcSet: "/assets/cloned/images/e29f85a53249.jpg 380w, /assets/cloned/images/d0db729e22cc.jpg 230w, /assets/cloned/images/e4d2fac8115b.jpg 260w", href2: "/ppc-news/2026-08/microsoft-introduces-bulk-edit-disapproved-assets/", href3: "/ppc-news/2026-08/microsoft-introduces-bulk-edit-disapproved-assets/" }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="border-t border-solid border-t-clr-9 block mt-16 pt-8">
      <h5 className="block mb-8 text-[2rem] font-extrabold leading-[2.3125rem] [overflow-wrap:break-word]" data-component="heading">
        <span className="inline">
          <span className="inline">
            Read next
          </span>
        </span>
      </h5>
      {" "}
      <div className="flex -mx-5 flex-wrap">
        {mediaCardData.map((d, i) => <MediaCard key={i} d={d} meta={MediaCard_meta[i]} styles={MediaCard_styles[i]} />)}
      </div>
    </div>
  );
}
