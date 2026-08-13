import MediaCard2, { type MediaCard2Data } from "../components/media-card2";
import Icon13 from "../svgs/svg-icon13";
import Icon14 from "../svgs/svg-icon14";
import Icon15 from "../svgs/svg-icon15";
import { MediaCard2_styles } from "../_styles";
const MediaCard2_data: MediaCard2Data[] = [
    { ariaLabel: "1 / 8", kind: "link", href: "/best-designs/jury/sebastian-samuel", kind2: "image", alt: "Sebastian Samuel", imgSrc: "/assets/cloned/images/5a8936c6427d.jpg", kind3: "heading", title: "Sebastian Samuel", description: "Canada", description2: "Remote", kind4: "link", href2: "https://www.linkedin.com/in/sebastian-samuel/", kind5: "icon", kind6: "link", href3: "https://www.instagram.com/infiuzbranding/", kind7: "icon" },
    { ariaLabel: "2 / 8", kind: "link", href: "/best-designs/jury/andrea-owsinek-brucker", kind2: "image", alt: "Andrea Owsinek-Brucker", imgSrc: "/assets/cloned/images/43b3bdec3c9d.jpg", kind3: "heading", title: "Andrea Owsinek-Brucker", description: "United States", description2: "Remote", kind4: "link", href2: "https://www.linkedin.com/in/andreabrucker/", kind5: "icon", kind6: "link", href3: "https://www.instagram.com/anneinkadvertising", kind7: "icon" },
    { ariaLabel: "3 / 8", kind: "link", href: "/best-designs/jury/lee-selsick", kind2: "image", alt: "Lee Selsick", imgSrc: "/assets/cloned/images/16c0310f6959.jpg", kind3: "heading", title: "Lee Selsick", description: "Australia", description2: "Remote, On Site", kind4: "link", href2: "https://www.linkedin.com/in/lee-selsick-64500417/?originalSubdomain=au", kind5: "icon", kind6: "link", href3: "https://www.instagram.com/next.brand.design/", kind7: "icon" },
    { ariaLabel: "4 / 8", href: "/best-designs/jury/charmilla-herath", alt: "Charmilla Herath", imgSrc: "/assets/cloned/images/18bece4407be.jpg", title: "Charmilla Herath", description: "Australia", description2: "Remote, On Site", href2: "https://www.linkedin.com/in/charmillaherath/", href3: "https://www.instagram.com/claritie_/" }
];
/** Awards Jury section. */
export default function AwardsJurySection({ mediaCard2Data = MediaCard2_data } = {}) {
  return (
    <div className="block">
      <div className="block pt-[4.6875rem] pb-25 px-10 text-background max-lg:pt-15.5 max-md:pb-[31.3px] max-lg:px-0 md:max-lg:pb-16 2xl:px-0" style={{ backgroundImage: "linear-gradient(var(--clr-17) 0%, var(--clr-18) 100%)" }}>
        <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
          <div className="flex mb-15.5 items-center gap-y-[0.9375rem] gap-x-25 max-lg:mb-13 max-lg:flex-col max-lg:text-center">
            <h2 className="block mb-2.5 grow text-4xl font-medium leading-9 max-lg:mb-4 max-lg:shrink-0 max-lg:text-3xl max-lg:leading-7.5 max-lg:grow-[initial]" data-component="heading">
              2026 Awards Jury
            </h2>
            <section className="block max-w-170 shrink-0 text-xl font-normal leading-7.5 max-lg:text-lg max-lg:leading-[1.6875rem] max-lg:max-w-none max-lg:shrink-[initial]">
              {" DesignRush Jury is a group of 79 seasoned professionals who bring years of experience and a deep understanding of creative excellence. "}
            </section>
          </div>
          <div className="block relative">
            <div className="block relative z-1 overflow-hidden cursor-grab max-lg:-mx-5 max-lg:px-12.5 max-lg:[overflow-x:initial] max-lg:[overflow-y:initial]">
              <div className="box-content flex relative z-1" aria-live="polite" id="swiper-wrapper-44e3bfcdee84510ae">
                {mediaCard2Data.map((d, i) => <MediaCard2 key={i} d={d} styles={MediaCard2_styles[i]} />)}
              </div>
            </div>
            <div className="block max-lg:hidden">
              <div className="w-4.5 h-8 block absolute top-[clamp(275.5px,_50%,_calc(100%_-_275.5px))] left-282.5 transform-[matrix(1,0,0,1,42,-16)] cursor-pointer 2xl:left-352.5" data-component="button" aria-controls="swiper-wrapper-44e3bfcdee84510ae" aria-disabled="false" aria-label="Next slide" role="button">
                <Icon13 />
              </div>
              <div className="w-4.5 h-8 block absolute top-[275.5px] right-282.5 opacity-50 transform-[matrix(-1,0,0,-1,-42,-16)] origin-[9px_16px] cursor-pointer pointer-events-none 2xl:top-[310.5px] 2xl:right-352.5" data-component="button" aria-controls="swiper-wrapper-44e3bfcdee84510ae" aria-disabled="true" aria-label="Previous slide" role="button">
                <Icon14 />
              </div>
            </div>
            <div className="h-[0.4375rem] block mt-13.5 rounded-sm bg-clr-19">
              <div className="w-[36.5%] h-full block rounded-sm bg-background max-md:w-[11.5%] md:max-lg:w-[12%]" />
            </div>
          </div>
          <article className="block mt-12 mb-7.5 text-xl leading-7.5 text-center max-lg:mt-9.5">
            <p className="block my-5">
              {"Our Jury has worked with "}
              <strong className="inline font-medium">
                Prada
              </strong>
              {", "}
              <strong className="inline font-medium">
                Nike
              </strong>
              {", "}
              <strong className="inline font-medium">
                Chanel
              </strong>
              {", "}
              <strong className="inline font-medium">
                Google
              </strong>
              {", and "}
              <strong className="inline font-medium">
                Apple
              </strong>
              .
            </p>
          </article>
          <div className="flex justify-center items-center max-md:mt-15.5 max-md:flex-col max-md:gap-2.5">
            <a className="h-10.5 min-h-10.5 flex relative py-0.5 px-7.5 justify-center items-center gap-3 text-lg font-medium leading-[1.4375rem] uppercase cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:w-73 before:h-10.5 before:bg-background before:opacity-0 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[146px_21px] before:rounded-tl-[5.4px] hover:border-clr-28 hover:text-clr-28 hover:outline-clr-28 hover:[text-decoration-color:var(--clr-28)] focus:border-clr-34 focus:text-clr-34 focus:outline-clr-34 focus:[text-decoration-color:var(--clr-34)]" data-ditto-id="style-link-6" data-component="link" href="/best-designs/jury">
              <span className="block relative z-1 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]">
                View All Jury Members
              </span>
              <Icon15 />
            </a>
            <a className="h-10.5 min-h-10.5 flex relative py-0.5 px-7.5 justify-center items-center gap-3 text-lg font-medium leading-[1.4375rem] uppercase cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:w-57.5 before:h-10.5 before:bg-clr-13 before:opacity-0 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[115px_21px] before:rounded-tl-[5.4px] after:content-[''] after:block after:absolute after:inset-0 after:w-57.5 after:h-10.5 after:[background-size:calc(100%_+_100px)_100%] after:[background-position:0px_0%] after:transform-[matrix(1,0,-0.700208,1,0,0)] after:origin-[115px_21px] after:rounded-tl-[5.4px]" data-component="link" href="/best-designs/jury/become-a-judge">
              <span className="block relative z-1">
                Become a Judge
              </span>
              <Icon15 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
