import MediaTile, { type MediaTileData } from "../components/media-tile";
import Icon21 from "../svgs/svg-icon21";
import Icon22 from "../svgs/svg-icon22";
import { MediaTile_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { kind: "link", href: "/post/how-to-make-an-existing-post-facebook-ad", kind2: "image", alt: "", imgSrc: "/assets/cloned/images/a5c865fee828.png", srcSet: "/assets/cloned/images/db2dd230a06a.png 500w, /assets/cloned/images/b87ea3509410.png 800w, /assets/cloned/images/8e5bc2255681.png 1080w, /assets/cloned/images/2154f1b85e77.png 1600w, /assets/cloned/images/a5c865fee828.png 1875w", kind3: "image", label: "How to Make an Existing Post Facebook Ad", label2: "Learn how to easily create an existing post ad on Facebook to boost your best-performing content and reach more customers. This step-by-step guide walks you through the process with simple tips and helpful insights." },
    { kind: "link", href: "/post/how-to-choose-which-products-to-use-in-ads", kind2: "image", alt: "", imgSrc: "/assets/cloned/images/b96e6eaed685.png", srcSet: "/assets/cloned/images/58b69e4612e5.png 500w, /assets/cloned/images/b96e6eaed685.png 512w", kind3: "image", label: "How to Choose Which Products to Use in Ads", label2: "A simple guide on choosing the right products for your ads by focusing on demand, supply, and margin to maximize profitability and long-term customer value." },
    { kind: "link", href: "/post/the-ugc-that-brought-armra-over-10-000-new-customers", kind2: "image", alt: "", imgSrc: "/assets/cloned/images/22be125f9b61.webp", srcSet: "/assets/cloned/images/fdaadfcb571a.webp 500w, /assets/cloned/images/0478cc43b363.webp 800w, /assets/cloned/images/22be125f9b61.webp 1024w", label: "The UGC That Brought ARMRA Over 10,000 New Customers", label2: "Breaking down how UGC Factory helped ARMRA acquire more than 10,000 new customers by turning complex science into simple benefits, creating clear differentiators, and crafting believable multi-angle UGC that outperformed ARMRA’s traditional ads." },
    { href: "/post/november-lens-update", alt: "Creative Analytics by Foreplay", imgSrc: "/assets/cloned/images/f9f1ee4d25ca.png", srcSet: "/assets/cloned/images/538114418a63.png 500w, /assets/cloned/images/b5c0f5d6d5c6.png 800w, /assets/cloned/images/82153542da92.png 1080w, /assets/cloned/images/832f74cf8046.png 1600w, /assets/cloned/images/16d3c3ed2eda.png 2000w, /assets/cloned/images/7b861507cfe9.png 2600w, /assets/cloned/images/f9f1ee4d25ca.png 2932w", label: "November Lens Updates. Upgrade your Creative analytics", label2: "Foreplay’s latest Lens update unifies creative analytics, audience segmentation, production workflows, and attribution into a single system designed to help teams scale paid creative with precision and speed." },
    { href: "/post/how-foreplay-helps-brands-agencies-and-creative-strategists", alt: "", imgSrc: "/assets/cloned/images/7366b88e5ad7.png", srcSet: "/assets/cloned/images/d1f2de7ad24f.png 500w, /assets/cloned/images/90be49937ba2.png 800w, /assets/cloned/images/1ee6a63741b7.png 1080w, /assets/cloned/images/b5f0cf8887e9.png 1600w, /assets/cloned/images/50e2930d25b9.png 2000w, /assets/cloned/images/abd01d0571d7.png 2600w, /assets/cloned/images/7366b88e5ad7.png 2934w", label: "How Foreplay Helps Brands, Agencies, and Creative Strategists", label2: "How Foreplay streamlines ad creation by organizing inspiration, providing a huge ad database, tracking competitors, generating creative briefs, and analyzing performance." }
];
/** Related Articles section. */
export default function RelatedArticlesSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <aside className="block overflow-hidden">
      <div className="flex py-30 flex-col gap-9">
        <div className="w-full block max-w-200 mx-auto px-10 max-md:px-6 md:max-lg:px-8 2xl:max-w-208">
          <div className="flex flex-col gap-2">
            <div className="block items-center text-color-002">
              <h2 className="block text-[1.125rem] [font-weight:550] tracking-[-0.26px]" data-component="heading">
                Related Articles
              </h2>
            </div>
            <div className="block flex-1 text-color-001">
              <div className="block">
                You might also like these reads on similar themes.
              </div>
            </div>
          </div>
        </div>
        <div className="block relative">
          <div className="block max-w-200 mx-auto px-10 max-md:px-6 md:max-lg:px-8 2xl:max-w-208">
            <div className="flex pt-16 flex-col gap-12">
              <div className="block">
                <div className="flex pb-2 gap-4" role="list">
                  {mediaTileData.map((d, i) => <MediaTile key={i} d={d} styles={MediaTile_styles[i]} />)}
                </div>
              </div>
              <div className="flex justify-center items-center gap-6">
                <a className="w-9 h-9 flex relative opacity-50 max-w-full rounded-full justify-center items-center text-border bg-surface-3 cursor-pointer pointer-events-none max-md:w-11 max-md:h-11 max-md:rounded-[750px] hover:bg-border hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] focus:border-border focus:outline-border focus:[text-decoration-color:var(--border)]" data-component="link" aria-disabled="true" aria-label="Previous" href="#">
                  <div className="w-4.5 h-4.5 block pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-border before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-border after:text-base after:leading-6 after:tracking-[-0.18px] hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)] focus:border-border focus:text-border focus:outline-border focus:[text-decoration-color:var(--border)]">
                    <Icon21 />
                  </div>
                </a>
                <a className="w-9 h-9 flex relative max-w-full rounded-full justify-center items-center text-border bg-surface-3 cursor-pointer max-md:w-11 max-md:h-11 max-md:rounded-[750px] hover:bg-border hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] focus:border-border focus:outline-border focus:[text-decoration-color:var(--border)]" data-component="link" aria-disabled="false" aria-label="Previous" href="#">
                  <div className="w-4.5 h-4.5 block before:content-['_'] before:table before:w-0 before:h-0 before:text-border before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-border after:text-base after:leading-6 after:tracking-[-0.18px] hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)] focus:border-border focus:text-border focus:outline-border focus:[text-decoration-color:var(--border)]">
                    <Icon22 />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
