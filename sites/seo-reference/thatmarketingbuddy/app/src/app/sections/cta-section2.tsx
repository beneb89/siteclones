import Icon5 from "../svgs/svg-icon5";
import { ctaSection2Content } from "../content";
/** Cta section. */
export default function CtaSection2({ content = ctaSection2Content } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10">
      <h3 className="block mb-3 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        {content.title}
      </h3>
      <p className="block mb-5 text-color-003">
        Register free (no card required) and get a $1 credit to test real SEO data through the API before you pay anything. Top up $50 when you are ready to scale.
      </p>
      <a className="h-11 inline-flex py-3 px-6 rounded-full items-center gap-3 text-background text-sm font-semibold leading-5 bg-color-001 cursor-pointer hover:bg-color-009" data-component="button" href={"/go/dataforseo?pos=software-cta&src=software-dataforseo"} rel="nofollow sponsored noopener" target="_blank">
        <img className="block max-w-full rounded-sm overflow-clip align-middle w-5 h-5" data-component="image" alt="DataForSEO logo" src="/assets/cloned/images/e8a547719322.png" />
        Register for Free →
        <Icon5 />
      </a>
    </section>
  );
}
