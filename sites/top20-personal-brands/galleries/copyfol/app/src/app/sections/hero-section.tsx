import Illustration2 from "../svgs/svg-illustration2";
import Icon8 from "../svgs/svg-icon8";
import Illustration3 from "../svgs/svg-illustration3";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import MediaCard from "../components/media-card";
import Icon13 from "../svgs/svg-icon13";
import Icon14 from "../svgs/svg-icon14";
import Icon from "../svgs/svg-icon";
import { MediaCard_styles } from "../_styles";
import { mediaCardData as mediaCardDataContent } from "../content";
const ListRow2_data: ListRow2Data[] = [
    { text: "have an easy-to-use, visual editor," },
    { text: "offer lots of styles, colors, and fonts to choose from," },
    { text: "make showcasing your work samples easy," },
    { text: "assist with polishing your writing without leaving the app," },
    { text: "give you the option to buy or connect a custom domain easily," },
    { text: "have quick and friendly customer support in case you have questions," },
    { text: "and most importantly, help you with not just your website, but also with your personal brand." }
];
const ListRow2_data2: ListRow2Data[] = [
    { text: "writing and adding case studies (or other projects) to your site," },
    { text: "generating a professional headshot from a photo you upload," },
    { text: "or creating a social media strategy, complete with content pillars to increase your visibility online." }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "Write a short case study.", text2: " It’s best for projects that deserve an explanation: just follow the structure of the page you get and fill it with all the info needed. You’ll find this option in portfolio sections." },
    { text: "Upload a PDF file.", text2: " Another project type in portfolio sections, this option is perfect if you already have your samples saved as PDFs. People simply click the thumbnail image, and it’ll open in a new tab." },
    { text: "Add an external link.", text2: " It’s the most popular option amongst journalists and content writers. You just paste a link to something that’s already published online, and people can check it via the thumbnail again. This is the third project type in portfolio sections." },
    { text: "Create a video gallery.", text2: " Made with creators and social media peeps in mind, you can upload short-form videos into a stunning gallery, so people can watch them without leaving your site. Way more professional than a Google Drive dump." },
    { text: "Try a collage or image gallery.", text2: " If you have loads of visual content that don’t need explanations, just pop them into one of these and let the content speak for itself." },
    { text: "Add an image + text section.", text2: " Nothing fancy, but sometimes all you need is one visual on one side and some info on the other. In Copyfolio, you can upload an image (and play around with the shape or add it to a mockup) or video, then have a text module right next to it." }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ listRow2Data = ListRow2_data, listRow2Data2 = ListRow2_data2, listRow3Data = ListRow3_data, mediaCardData = mediaCardDataContent } = {}) {
  return (
    <div className="grid max-w-360 mx-auto w-full grid-cols-8">
      <div className="block col-start-3 col-end-[span_7] max-md:col-span-full md:max-lg:col-start-2 md:max-lg:col-end-[span_6]">
        <div className="block p-6 max-md:p-4">
          <ul className="inline-flex mb-4 flex-wrap [list-style-type:none] list-outside">
            <li className="list-item">
              <a className="inline relative z-10 mr-2 py-1.5 px-3 rounded-sm text-color-005 text-sm leading-[1.3125rem] bg-accent cursor-pointer max-md:py-1 max-md:px-2 max-md:text-xs max-md:leading-4 hover:bg-clr-4" data-component="link" href="/category/branding">
                Branding
              </a>
            </li>
            <li className="list-item">
              <a className="inline relative z-10 mr-2 py-1.5 px-3 rounded-sm text-color-005 text-sm leading-[1.3125rem] bg-accent cursor-pointer max-md:py-1 max-md:px-2 max-md:text-xs max-md:leading-4 hover:bg-clr-4" data-component="link" href="/category/website-building">
                Website Building
              </a>
            </li>
          </ul>
          <h1 className="block mb-4 text-color-001 text-4xl [font-weight:650] leading-[2.8125rem] tracking-[-1.08px]" data-component="heading">
            11 Hand-Picked Personal Brand Websites (2026) + How to Build Yours
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground text-sm leading-[1.3125rem] max-md:flex-col max-md:items-start max-md:gap-4">
            <a className="h-7 flex items-center gap-2 cursor-pointer" data-component="link" href="/author/dorka-kardos-latif">
              <div className="block h-7 w-7">
                <img className="w-7 h-7 block max-w-full rounded-full overflow-clip aspect-[auto_28/28] align-middle text-clr-0" data-component="avatar" alt="Author's profile picture" height="28" src="/assets/cloned/images/3ef30fac6cd8.jpg" srcSet="/assets/cloned/images/c35228caeca4.webp 1x, /assets/cloned/images/3ef30fac6cd8.jpg 2x" width="28" />
              </div>
              <div className="block text-color-005">
                Dorka Kardos-Latif
              </div>
            </a>
            <div className="flex justify-start items-center gap-2 text-color-005 max-md:block max-lg:mt-2">
              <div className="block rounded-sm bg-clr-1 h-1 w-1 max-lg:hidden" />
              <span className="block max-md:inline">
                {"Published at "}
                <time className="inline" dateTime="2026-01-22T12:17:22.647Z">
                  Jan 22, 2026
                </time>
              </span>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="block px-6 text-color-001 w-full max-w-full max-md:px-4">
            <p className="block pb-4">
              {"Wanna see examples from real people building their online presence with successful personal brand websites? Start scrolling to see our top, curated picks, then read on to discover the best and easiest way to "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="https://copyfol.io/auth/sign-up/" target="_blank">
                recreate them for yourself
              </a>
              .
            </p>
            <p className="block pb-4">
              P.S. The website builder you’ll read about will not only create your website but help lay your personal brand’s foundations too.
            </p>
            <div className="grid mt-2 mb-8 rounded-2xl bg-accent grid-cols-2">
              <div className="block p-6 order-[1] col-start-[span_1] col-end-[span_1] max-md:px-4 max-md:order-[2] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                <Illustration2 />
                <div className="block">
                  <div className="block pt-14 max-md:pt-0">
                    <div className="block max-md:text-sm max-md:leading-[1.3125rem]">
                      Boost your career with an on-brand website, built in 30 mins.
                    </div>
                  </div>
                  <div className="block pt-4 max-md:pt-6">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Create your site" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01969,0,0,1.01969,0,0)] focus:transform-[matrix(1.0003,0,0,1.0003,0,0)]" data-component="button" type="button">
                        Create your site
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="block order-[2] col-start-[span_1] col-end-[span_1] max-md:order-[1] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                <div className="block relative h-full w-full">
                  <Icon8 />
                  <div className="w-66 h-65 block absolute -top-3 left-0 max-md:w-[266.3px] max-md:float-right max-md:-mt-4 max-md:px-4 max-md:h-auto max-md:static max-md:top-auto max-md:left-auto md:max-lg:w-58 md:max-lg:top-3 2xl:w-70.5 2xl:left-5.5">
                    <img className="w-66 block max-w-full overflow-clip aspect-[auto_1128/1040] align-middle text-clr-0 h-[16.25rem] max-md:w-58.5 max-md:h-[13.5rem] md:max-lg:w-58 2xl:w-70.5" data-component="image" alt="Create your site now" height="1040" src="/assets/cloned/images/0c9fe8d16c4d.png" srcSet="/assets/cloned/images/be33fe5b6662.webp 1x, /assets/cloned/images/0c9fe8d16c4d.png 2x" width="1128" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="block pt-8 pb-4 text-[1.75rem] [font-weight:650] leading-[2.1875rem]" data-component="heading" id="our-hand-picked-personal-website-examples-to-give-you-inspiration">
              <strong className="inline">
                Our hand-picked personal website examples to give you inspiration
              </strong>
            </h2>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="1-suzanna-copywriter">
              <strong className="inline">
                1. Suzanna: Copywriter
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[44.6875rem] block max-w-full overflow-clip aspect-[auto_2566/3098] align-middle text-clr-0 max-md:h-103.5 md:max-lg:h-[39.8125rem] 2xl:h-[50.6875rem]" data-component="image" alt="The witty personal website of copywriter Suzanna, featuring her signature brand color, purple." height="3098" src="/assets/cloned/images/cc7ecc7953cc.webp" srcSet="/assets/cloned/images/cc7ecc7953cc.webp 1x" width="2566" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Build one like hers" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01969,0,0,1.01969,0,0)] focus:transform-[matrix(1.00029,0,0,1.00029,0,0)]" data-component="button" type="button">
                        Build one like hers
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              Suzanna’s branding superpower lies in her witty copywriting, signature purple color, and super memorable visuals.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="2-chuck-marketing-leader">
              <strong className="inline">
                2. Chuck: Marketing Leader
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-193 block max-w-full overflow-clip aspect-[auto_2204/2874] align-middle text-clr-0 max-md:h-[27.9375rem] md:max-lg:h-[43.0625rem] 2xl:h-219" data-component="image" alt="The dark themed personal branding website of marketing leader Chuck Lepley." height="2874" src="/assets/cloned/images/22dc18f4971e.webp" srcSet="/assets/cloned/images/22dc18f4971e.webp 1x" width="2204" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Create your site" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01969,0,0,1.01969,0,0)] focus:transform-[matrix(1.00007,0,0,1.00007,0,0)]" data-component="button" type="button">
                        Create your site
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              Chuck’s personal website exudes confidence. With his content and its presentation, he gives no chance for you to think of him as anything other than the most capable marketing leader.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="3-june-digital-marketing-specialist">
              <strong className="inline">
                3. June: Digital Marketing Specialist
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-371 block max-w-full overflow-clip aspect-[auto_2160/5414] align-middle text-clr-0 max-md:h-215 md:max-lg:h-[82.6875rem] 2xl:h-421" data-component="image" alt="The about page on marketing specialist June Lee's personal website" height="5414" src="/assets/cloned/images/50a5f84c18dc.webp" srcSet="/assets/cloned/images/50a5f84c18dc.webp 1x" width="2160" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Start yours now" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01969,0,0,1.01969,0,0)] focus:transform-[matrix(1.00029,0,0,1.00029,0,0)]" data-component="button" type="button">
                        Start yours now
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              {"June’s recipe for a successful personal branding page? A confident picture, a straightforward intro, and real content in her "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/social-media-portfolio" target="_blank">
                social media portfolio
              </a>
              , created by her that shows both her skills and personality.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="4-lidia-brand-marketing-leader">
              <strong className="inline">
                4. Lidia: Brand Marketing Leader
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[38.5625rem] block max-w-full overflow-clip aspect-[auto_2566/2676] align-middle text-clr-0 max-md:h-89.5 md:max-lg:h-[34.4375rem] 2xl:h-[43.8125rem]" data-component="image" alt="The homepage of brand marketing leader Lidia Markova's personal website" height="2676" src="/assets/cloned/images/f845d052f5d1.webp" srcSet="/assets/cloned/images/f845d052f5d1.webp 1x" width="2566" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Try Copyfolio" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01993,0,0,1.01993,0,0)] focus:transform-[matrix(1.00031,0,0,1.00031,0,0)]" data-component="button" type="button">
                        Try Copyfolio
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              {"When Lidia’s site loads, you’ll see two things. Her "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/branding-photos" target="_blank">
                branding photo
              </a>
              {" (stunning, friendly, yet professional) and her intro that tells you everything about her expertise."}
            </p>
            <p className="block pb-4">
              Complete with social media links, of course. With logos of previous clients, lists of her competencies and accomplishments, alongside some really impressive projects on her “CASES” page, Lidia really shows how it’s done when it comes to personal branding websites.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="5-tina-content-creator-and-baker">
              <strong className="inline">
                {"5. Tina: Content Creator & Baker"}
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[44.1875rem] block max-w-full overflow-clip aspect-[auto_2566/3066] align-middle text-clr-0 max-md:h-102.5 md:max-lg:h-[39.4375rem] 2xl:h-[50.1875rem]" data-component="image" alt="The about and home pages of content creator and baker Tina Le from Little Moments" height="3066" src="/assets/cloned/images/fd72cb181170.webp" srcSet="/assets/cloned/images/fd72cb181170.webp 1x" width="2566" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Create your site" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01992,0,0,1.01992,0,0)] focus:transform-[matrix(1.00007,0,0,1.00007,0,0)]" data-component="button" type="button">
                        Create your site
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              Sweet personality (pun intended) and two impressive niches? That’s Tina, who’s both a content creator and a baker—and who built a website that showcases both of them perfectly.
            </p>
            <p className="block pb-4">
              She did that by introducing both on her homepage, but then also dedicating separate pages for each. The information is clear and not overwhelming, and the site’s made unique by Tina’s custom content.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="6-jessica-from-the-ink-jar-journalist-poet">
              <strong className="inline">
                6. Jessica from The Ink Jar: Journalist / Poet
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-166.5 block max-w-full overflow-clip aspect-[auto_2566/2888] align-middle text-clr-0 max-md:h-96.5 md:max-lg:h-148.5 2xl:h-189" data-component="image" alt="The personal website of journalist and poet Jessica from The Ink Jar" height="2888" src="/assets/cloned/images/e8cb403f7da2.webp" srcSet="/assets/cloned/images/e8cb403f7da2.webp 1x" width="2566" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Build your own" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01992,0,0,1.01992,0,0)] focus:transform-[matrix(1.00031,0,0,1.00031,0,0)]" data-component="button" type="button">
                        Build your own
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              {"Jessica’s website leads with a strong headline, logos, her top projects, and services—supported by dedicated pages for her story and different "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/content-writing-samples" target="_blank">
                writing samples
              </a>
              . It’s the perfect balance of personal and professional, we love.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="7-marianne-senior-director-and-executive-producer">
              <strong className="inline">
                {"7. Marianne: Senior Director & Executive Producer"}
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[41.3125rem] block max-w-full overflow-clip aspect-[auto_2566/2864] align-middle text-clr-0 max-md:h-[23.9375rem] md:max-lg:h-[36.8125rem] 2xl:h-187.5" data-component="image" alt="Marianne Canada senior director and executive producer's personal branding website" height="2864" src="/assets/cloned/images/c06425c03c02.webp" srcSet="/assets/cloned/images/c06425c03c02.webp 1x" width="2566" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Start building yours" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01992,0,0,1.01992,0,0)] focus:transform-[matrix(1.00031,0,0,1.00031,0,0)]" data-component="button" type="button">
                        Start building yours
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              The secret to Marianne’s website is the copywriting. It’s not only written really well, but perfectly shows her achievements and expertise, even is you only skim and read the headings. Pair that with her charming picture and you have great rapport already.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="8-shaylee-content-writer-and-digital-strategist">
              <strong className="inline">
                {"8. Shaylee: Content Writer & Digital Strategist"}
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[69.4375rem] block max-w-full overflow-clip aspect-[auto_2160/4054] align-middle text-clr-0 max-md:h-161 md:max-lg:h-[61.9375rem] 2xl:h-[78.8125rem]" data-component="image" alt="The personal website of content writer and digital strategist Shaylee Souza" height="4054" src="/assets/cloned/images/e3d4a8647515.webp" srcSet="/assets/cloned/images/e3d4a8647515.webp 1x" width="2160" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Create your site" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01993,0,0,1.01993,0,0)] focus:transform-[matrix(1.00031,0,0,1.00031,0,0)]" data-component="button" type="button">
                        Create your site
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              “Hi, I’m Shaylee” is the first thing you see on the homepage—which is a great opening for a personal brand website. This site is the perfect combo of personality (with photos and a dedicated about page) and credibility (with clearly outlined services and work samples).
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="9-chandler-baker-content-creator">
              <strong className="inline">
                9. Chandler Baker: Content Creator
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-315.5 block max-w-full overflow-clip aspect-[auto_2160/4606] align-middle text-clr-0 max-md:h-[45.6875rem] md:max-lg:h-281.5 2xl:h-[89.5625rem]" data-component="image" alt="The on-brand personal website of content creator Chandler Baker" height="4606" src="/assets/cloned/images/ffa82e778d6a.webp" srcSet="/assets/cloned/images/ffa82e778d6a.webp 1x" width="2160" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Try Copyfolio" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01993,0,0,1.01993,0,0)] focus:transform-[matrix(1.00031,0,0,1.00031,0,0)]" data-component="button" type="button">
                        Try Copyfolio
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              A signature color, profile picture consistent across all platforms, and expertise backed up by impressive stats—these are the backbones of Chandler’s website and online presence.
            </p>
            <div className="block pb-4 max-md:px-4">
              <a className="flex justify-between items-center gap-4 cursor-pointer max-md:text-sm max-md:leading-[1.3125rem]" data-component="link" href="/ugc-portfolio-examples" target="_blank">
                <div className="block shrink-0 aspect-video">
                  <img className="w-full border border-solid border-border block max-w-full rounded-sm overflow-clip object-cover aspect-[auto_105/60] align-middle text-clr-0 h-[3.75rem] max-md:h-[3.125rem]" data-component="image" alt="Check more UGC portfolios for inspo" height="60" src="/assets/cloned/images/1190efc58afb.jpg" srcSet="/assets/cloned/images/d59eb280ad70.webp 1x, /assets/cloned/images/1190efc58afb.jpg 2x" width="105" />
                </div>
                <div className="block flex-1 overflow-hidden">
                  <div className="overflow-hidden whitespace-nowrap text-nowrap line-clamp-2 max-md:[white-space:inherit] max-md:[text-wrap:initial]">
                    Check more UGC portfolios for inspo
                  </div>
                  <time className="block text-muted-foreground max-md:hidden" dateTime="2023-06-08T09:52:58.000Z">
                    June 8, 2023
                  </time>
                </div>
                <div className="block">
                  <Icon10 />
                </div>
              </a>
            </div>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="10-carmen-creative-strategist-and-performance-designer">
              <strong className="inline">
                {"10. Carmen: Creative Strategist & Performance Designer"}
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-338 block max-w-full overflow-clip aspect-[auto_2160/4934] align-middle text-clr-0 max-md:h-196 md:max-lg:h-301.5 2xl:h-[95.9375rem]" data-component="image" alt="The website and portfolio of creative strategist Carmen C." height="4934" src="/assets/cloned/images/b80ec49582e1.webp" srcSet="/assets/cloned/images/b80ec49582e1.webp 1x" width="2160" />
              <div className="grid rounded-2xl bg-accent grid-rows-1 aspect-[7.4] grid-cols-2 max-md:aspect-[4.288] md:max-lg:aspect-[6.6] 2xl:aspect-[8.4]">
                <div className="flex py-4 px-6 justify-between items-center order-[1] col-start-[span_2] col-end-[span_2] max-md:px-4 max-md:order-[2]">
                  <Illustration3 />
                  <Icon9 />
                  <div className="block">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Build your site" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01993,0,0,1.01993,0,0)] focus:transform-[matrix(1.00031,0,0,1.00031,0,0)]" data-component="button" type="button">
                        Build your site
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              Crystal clear tagline? Check. Photo to build a connection? Check. Logos and UGC samples for credibility? Check. Stats to impress? You guessed it, check.
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="11-lauren-digital-marketer">
              <strong className="inline">
                11. Lauren: Digital Marketer
              </strong>
            </h3>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-166.5 block max-w-full overflow-clip aspect-[auto_2566/2888] align-middle text-clr-0 max-md:h-96.5 md:max-lg:h-148.5 2xl:h-189" data-component="image" alt="The digital marketing portfolio and personal website of Lauren Pavelik" height="2888" src="/assets/cloned/images/1bb9c07f0863.webp" srcSet="/assets/cloned/images/1bb9c07f0863.webp 1x" width="2566" />
            </div>
            <p className="block pb-4">
              Lauren’s homepage centers specifically around her (which is perfect for a personal branding website) and serves as an entry point for the rest of her site.
            </p>
            <p className="block pb-4">
              You already get an idea of her brand personality thanks to her photo and intro and are forced to check all your options aka the content she has on her site. This covers everything from more info on her to her different areas of expertise.
            </p>
            <h2 className="block pt-8 pb-4 text-[1.75rem] [font-weight:650] leading-[2.1875rem]" data-component="heading" id="the-best-website-builder-for-your-personal-brand-website">
              <strong className="inline">
                The best website builder for your personal brand website
              </strong>
            </h2>
            <p className="block pb-4">
              For a website builder to make your life easier and not harder when building your personal website, it needs to check a few boxes. It needs to:
            </p>
            <ul className="block -mt-4 pb-4 pl-12 [list-style-type:disc] list-outside">
              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            <p className="block pb-4">
              {"Not surprisingly, it’s that last bit most website builders utterly fail to do. And if you try to build a "}
              <em className="inline italic">
                personal brand
              </em>
              {" website without discovering your personal brand first… The result will most probably be a rather generic, unmemorable site that won’t capture attention nearly as much as a real personal branding site would."}
            </p>
            <p className="block pb-4">
              {"The best website builder for creating an impossible-to-ignore personal website is "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="https://copyfol.io/" target="_blank">
                <strong className="inline py-4 [font-weight:650] tracking-[-0.48px]">
                  Copyfolio
                </strong>
              </a>
              .
            </p>
            <p className="block pb-4">
              {"Copyfolio not only checks all the "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="https://copyfol.io/services.html" target="_blank">
                website-building must-have boxes
              </a>
              {" but has a free, built-in branding coach (Brandi 🫶) who will help you nail your personal brand—then apply it to every aspect of your website."}
            </p>
            <p className="block pb-4">
              All you need is to find 10 minutes for a chat, and she’ll help you figure out your USP, brand personality, and tone of voice. With your brand foundations done, you can also get her help with
            </p>
            <ul className="block -mt-4 pb-4 pl-12 [list-style-type:disc] list-outside">
              <li className="list-item my-2">
                {"writing you a new website tagline, intro, or other sections (using your new "}
                <a className="inline my-5 text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/tone-of-voice-definition" target="_blank">
                  ToV
                </a>
                ),
              </li>
              {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            <div className="grid mt-2 mb-8 rounded-2xl bg-accent grid-cols-2">
              <div className="block p-6 order-[1] col-start-[span_1] col-end-[span_1] max-md:px-4 max-md:order-[2] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                <Illustration2 />
                <div className="block">
                  <div className="block pt-14 max-md:pt-0">
                    <div className="block max-md:text-sm max-md:leading-[1.3125rem]">
                      You can do it all super easily with Copyfolio.
                    </div>
                  </div>
                  <div className="block pt-4 max-md:pt-6">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label={"Build your site & brand"} href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 hover:transform-[matrix(1.01969,0,0,1.01969,0,0)] focus:transform-[matrix(1.00029,0,0,1.00029,0,0)]" data-component="button" type="button">
                        {"Build your site & brand"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="block order-[2] col-start-[span_1] col-end-[span_1] max-md:order-[1] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                <div className="block relative h-full w-full">
                  <Icon8 />
                  <div className="w-66 h-65 block absolute -top-3 left-0 max-md:w-[266.3px] max-md:float-right max-md:-mt-4 max-md:px-4 max-md:h-auto max-md:static max-md:top-auto max-md:left-auto md:max-lg:w-58 md:max-lg:top-3 2xl:w-70.5 2xl:left-5.5">
                    <img className="w-66 block max-w-full overflow-clip aspect-[auto_1128/1040] align-middle text-clr-0 h-[16.25rem] max-md:w-58.5 max-md:h-[13.5rem] md:max-lg:w-58 2xl:w-70.5" data-component="image" alt="Create your site now" height="1040" src="/assets/cloned/images/f8a46ec18410.png" srcSet="/assets/cloned/images/dc81c6301e97.webp 1x, /assets/cloned/images/f8a46ec18410.png 2x" width="1128" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="block pt-8 pb-4 text-[1.75rem] [font-weight:650] leading-[2.1875rem]" data-component="heading" id="how-to-build-your-personal-brand-website">
              <strong className="inline">
                How to build your personal brand website
              </strong>
            </h2>
            <p className="block pb-4">
              Starting is always the hardest part—except when the task is broken down for you. So we’ll do just that: outline the personal website building process in easy-to-follow steps to turn this activity from overwhelming into something kinda fun.
            </p>
            <div className="border-t border-solid border-t-color-003 border-b border-b-color-003 block -mb-px">
              <div className="block">
                <div className="flex py-4 px-6 justify-between items-center cursor-pointer max-md:px-4" aria-hidden="true">
                  <h4 className="block [font-weight:650]" data-component="heading">
                    What makes it a *personal branding* website?
                  </h4>
                  <Icon11 />
                </div>
                <div className="h-0 block overflow-hidden">
                  <div className="block py-4 px-6 max-md:px-4">
                    <p className="block pb-4">
                      The difference between a “regular” website and a personal brand website is that the latter is all about you. Its goal is to communicate the picture and narrative you want to portray. It should show your uniqueness and why you’re the top professional in your field, through photos, intros, and your past work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="step-1-discover-your-personal-brand">
              <strong className="inline">
                Step 1: Discover your personal brand
              </strong>
            </h3>
            <p className="block pb-4">
              {"How could you fill a page if you don’t know who you’re talking to, or even what to write? So the first step is to explore your personal brand and get clear about what makes you unique (aka your "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/usp-meaning" target="_blank">
                USP
              </a>
              ) and how you want people to feel when interacting with you and your content. Putting these together, you’ll have a blueprint for what to say and how.
            </p>
            <p className="block pb-4">
              {"The easiest (and most fun) way to do that is by chatting with Brandi, Copyfolio’s "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/personal-branding-coach" target="_blank">
                branding coach
              </a>
              . She’s going to ask questions and challenge you to dig deeper (no BS answers here), and guide you to each of your brand assets. Like that, the end result is guaranteed to be as unique as you are. ✨
            </p>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[24.6875rem] block max-w-full overflow-clip aspect-[auto_3600/2400] align-middle text-clr-0 max-md:h-[14.3125rem] md:max-lg:h-88 2xl:h-112" data-component="image" alt="Copyfolio" height="2400" src="/assets/cloned/images/c24230d92bdd.webp" srcSet="/assets/cloned/images/c24230d92bdd.webp 1x" width="3600" />
            </div>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="step-2-choose-and-customize-your-website-template">
              <strong className="inline">
                {"Step 2: Choose & customize your website template"}
              </strong>
            </h3>
            <p className="block pb-4">
              Keeping your fresh, new brand personality in mind, pick a template for your website. If you’re building your site with Copyfolio, focus on the hero section of the homepage—you can change the rest after.
            </p>
            <div className="border-t border-solid border-t-color-003 border-b border-b-color-003 block -mb-px">
              <div className="block">
                <div className="flex py-4 px-6 justify-between items-center cursor-pointer max-md:px-4" aria-hidden="true">
                  <h4 className="block [font-weight:650]" data-component="heading">
                    What is a website template?
                  </h4>
                  <Icon12 />
                </div>
                <div className="h-0 block overflow-hidden">
                  <div className="block py-4 px-6 max-md:px-4">
                    <p className="block pb-4">
                      A website template decides the starting layout and colors of your site. In most cases, some elements are fixed, but usually you can customize many aspects later. What these are always depend on the website builder you use. For example, in Copyfolio, the layout of your homepage hero section is fixed for each template, but you can change the rest of the sections, colors, fonts, and everything else if you’d like.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="block pb-4">
              {"With that done, you can upload your "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/personal-branding-headshots" target="_blank">
                personal branding headshot
              </a>
              {" to nail your first impression, then choose the fonts, colors, and button styles that best match your brand."}
            </p>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="step-3-add-your-content-and-projects">
              <strong className="inline">
                {"Step 3: Add your content & projects"}
              </strong>
            </h3>
            <p className="block pb-4">
              {"You’re more than just a pretty face, and so is your website. So your next step is to fill it with content. Write your intro section (and "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/about-me-examples" target="_blank">
                about me page
              </a>
              {" if you’re ambitious) and focus on highlighting your USP. It should be clear to everyone reading why you’d be the best choice to follow or work with."}
            </p>
            <p className="block pb-4">
              But since anyone can say anything on the internet these days, so gotta back it all up. Add samples of your previous work to your site. The best practice is to highlight your three strongest projects on your homepage, and add the rest to a dedicated portfolio page of your personal website.
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                How can you showcase your projects in Copyfolio?
              </strong>
            </h4>
            <p className="block pb-4">
              Not all projects are created equal, so the best way to showcase them varies a lot. Here are some of the ways to display your work in Copyfolio:
            </p>
            <ul className="block -mt-4 pb-4 pl-12 [list-style-type:disc] list-outside">
              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ul>
            <p className="block pb-4">
              {"With the number of sections Copyfolio has the possibilities are endless, your creativity is the only limit. "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="https://copyfol.io/auth/sign-up/" target="_blank">
                <strong className="inline py-4 [font-weight:650] tracking-[-0.48px]">
                  Click here to give it a try.
                </strong>
              </a>
            </p>
            <div className="flex mb-8 rounded-sm flex-col gap-y-4 overflow-hidden">
              <img className="w-full h-[18.4375rem] block max-w-full overflow-clip aspect-[auto_2400/1194] align-middle text-clr-0 max-md:h-[10.6875rem] md:max-lg:h-[16.4375rem] 2xl:h-83.5" data-component="image" alt="Copyfolio" height="1194" src="/assets/cloned/images/612af9d3a77c.webp" srcSet="/assets/cloned/images/612af9d3a77c.webp 1x" width="2400" />
            </div>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="step-4-get-a-custom-domain-and-publish-your-site">
              <strong className="inline">
                {"Step 4: Get a custom domain & publish your site"}
              </strong>
            </h3>
            <p className="block pb-4">
              {"When it comes to "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/personal-branding-vs-business-branding" target="_blank">
                personal branding (not business branding)
              </a>
              , your name is a big part of your brand. So of course having your personal website under your name is essential for fully owning your brand. Not to mention that it’s way more professional to have your own domain than to host your site under your provider’s address.
            </p>
            <p className="block pb-4">
              In Copyfolio, you can get and connect your domain in a few clicks. It’ll automatically search for your name, so just choose the TLD (like .com or .design) you like and click purchase. You don’t have to worry about the setup; it’s done for you automatically in the background.
            </p>
            <p className="block pb-4">
              It also automatically comes with an SSL certificate (unlike at other domain providers), so you won’t have to spend any extra money on that either.
            </p>
            <p className="block pb-4">
              And if you’ve already reserved your domain name elsewhere, that’s okay too. You can connect it to your site by following a few simple instructions.
            </p>
            <div className="block pb-4 max-md:px-4">
              <a className="flex justify-between items-center gap-4 cursor-pointer max-md:text-sm max-md:leading-[1.3125rem]" data-component="link" href="/copyfolio-settings-panel" target="_blank">
                <div className="block shrink-0 aspect-video">
                  <img className="w-full border border-solid border-border block max-w-full rounded-sm overflow-clip object-cover aspect-[auto_105/60] align-middle text-clr-0 h-[3.75rem] max-md:h-[3.125rem]" data-component="image" alt="See how domain setup works in Copyfolio" height="60" src="/assets/cloned/images/af149af11661.jpg" srcSet="/assets/cloned/images/08e7e23bb684.webp 1x, /assets/cloned/images/af149af11661.jpg 2x" width="105" />
                </div>
                <div className="block flex-1 overflow-hidden">
                  <div className="overflow-hidden whitespace-nowrap text-nowrap line-clamp-2 max-md:[white-space:inherit] max-md:[text-wrap:initial]">
                    See how domain setup works in Copyfolio
                  </div>
                  <time className="block text-muted-foreground max-md:hidden" dateTime="2024-10-01T07:37:53.829Z">
                    October 1, 2024
                  </time>
                </div>
                <div className="block">
                  <Icon10 />
                </div>
              </a>
            </div>
            <h3 className="block pt-6 pb-4 text-2xl [font-weight:650] leading-7.5" data-component="heading" id="optional-steps-to-put-the-cherry-on-top">
              <strong className="inline">
                Optional steps to put the cherry on top
              </strong>
            </h3>
            <p className="block pb-4">
              {"Or course there’s always more you can do, so if you want to really pimp the hub of your "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/personal-brand-definition" target="_blank">
                personal brand
              </a>
              , here are a few more things you could do.
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Set yourself up for SEO success
              </strong>
            </h4>
            <p className="block pb-4">
              {"There are some basics you need to cover if you want to show up in search and socials like a professional. Find the "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/beginner-seo-guide" target="_blank">
                SEO settings
              </a>
              {" and fill out the meta titles and descriptions for each of your pages."}
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Create custom preview images
              </strong>
            </h4>
            <p className="block pb-4">
              Speaking of metadata, if you plan on sharing your site on LinkedIn and other socials, create and add custom preview thumbnails too. It’ll make your content instantly recognizable as yours and give context to those who are too lazy to even read the meta title.
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Start a blog to drive traffic
              </strong>
            </h4>
            <p className="block pb-4">
              {"Is SEO a part of your marketing strategy? Then "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/how-to-create-a-blog-in-copyfolio" target="_blank">
                start a blog
              </a>
              {" (Copyfolio has a handy blog section for that) and get to creating content in your niche to get featured in search and bring visitors to your site. LinkedIn’s not the only place to become a thought leader, after all."}
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Showcase logos of previous clients and companies
              </strong>
            </h4>
            <p className="block pb-4">
              Another great way to add credibility to your personal brand website is to showcase who’s already given you confidence before, aka your previous clients and employers. Use a simple logo wall section to showcase their brands easily.
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Brand every bit: set a custom favicon
              </strong>
            </h4>
            <p className="block pb-4">
              You know that little icon that appears next to your page’s title in the browser tab? It helps your page stand out from the million tabs one might have open, and makes it recognizable as yours. So upload your logo or generate a custom icon from your initials in Copyfolio.
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Link your profiles with social media icons
              </strong>
            </h4>
            <p className="block pb-4">
              {"Your personal website shouldn’t be a free-floating part of your "}
              <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="/digital-presence" target="_blank">
                digital presence
              </a>
              . Think of it as part of a network instead. So to link back to other important parts, add social media icons to your hero or footer, so people can check you out on other platforms easily.
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Customize your contact page
              </strong>
            </h4>
            <p className="block pb-4">
              {"The contact page is a very underrated part of your website. You don’t think much of it, but what if it can give the nudge someone needs to "}
              <em className="inline italic">
                actually
              </em>
              {" reach out? So write some fun copy, upload an on-brand picture, or shake it up in a creative way."}
            </p>
            <h4 className="block pt-6 pb-4 text-xl [font-weight:650] leading-[1.5625rem]" data-component="heading">
              <strong className="inline">
                Add all important info to your footer
              </strong>
            </h4>
            <p className="block pb-4">
              Don’t want to add a contact page? Then it’s even more important to have all your info in your footer. That’s where most of us instinctively go for these things, so have them all ready.
            </p>
            <div className="grid mt-2 mb-8 rounded-2xl bg-accent grid-cols-2">
              <div className="block p-6 order-[1] col-start-[span_1] col-end-[span_1] max-md:px-4 max-md:order-[2] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                <Illustration2 />
                <div className="block">
                  <div className="block pt-14 max-md:pt-0">
                    <div className="block max-md:text-sm max-md:leading-[1.3125rem]">
                      Build your dream site in no time
                    </div>
                  </div>
                  <div className="block pt-4 max-md:pt-6">
                    <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" aria-label="Try Copyfolio" href="https://copyfol.io/auth/sign-up" target="_blank">
                      <div className="inline-block py-3 px-6 rounded-xl text-color-004 font-medium text-center bg-color-002 whitespace-nowrap hover:transform-[matrix(1.01969,0,0,1.01969,0,0)] focus:transform-[matrix(1.0003,0,0,1.0003,0,0)]" data-component="button" type="button">
                        Try Copyfolio
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="block order-[2] col-start-[span_1] col-end-[span_1] max-md:order-[1] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                <div className="block relative h-full w-full">
                  <Icon8 />
                  <div className="w-66 h-65 block absolute -top-9 left-0 max-md:w-[266.3px] max-md:float-right max-md:-mt-4 max-md:px-4 max-md:h-auto max-md:static max-md:top-auto max-md:left-auto md:max-lg:w-58 md:max-lg:-top-3 2xl:w-70.5 2xl:left-5.5">
                    <img className="w-66 block max-w-full overflow-clip aspect-[auto_1128/1040] align-middle text-clr-0 h-[16.25rem] max-md:w-58.5 max-md:h-[13.5rem] md:max-lg:w-58 2xl:w-70.5" data-component="image" alt="Create your site now" height="1040" src="/assets/cloned/images/65b0e4f9f1c0.png" srcSet="/assets/cloned/images/caa57be0c95a.webp 1x, /assets/cloned/images/65b0e4f9f1c0.png 2x" width="1128" />
                  </div>
                </div>
              </div>
            </div>
            <div className="block mb-4">
              <div className="border-l-[3px] border-solid border-l-clr-2 block py-4 px-6 rounded-tr-md rounded-br-md max-md:px-4">
                <div className="block mb-2 [font-weight:650]">
                  Liked this blog post?
                </div>
                <p className="block">
                  <a className="inline text-primary cursor-pointer hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:underline" data-component="link" href="https://www.google.com/preferences/source?q=https://copyfol.io">
                    See more from Copyfolio in Google!
                  </a>
                </p>
              </div>
            </div>
            <h2 className="block pt-8 pb-4 text-[1.75rem] [font-weight:650] leading-[2.1875rem]" data-component="heading" id="all-your-personal-branding-website-questions-answered">
              <strong className="inline">
                All your personal branding website questions answered
              </strong>
            </h2>
            <p className="block pb-4">
              Still wondering about anything related to creating your personal website? Take a look, maybe we have the answer below.
            </p>
            {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
            <p className="block pb-4" />
          </div>
        </div>
        <div className="flex pt-2 pb-10 px-6 col-start-3 col-end-[span_5] max-md:px-4 max-md:flex-col max-md:col-span-full md:max-lg:col-start-2 md:max-lg:col-end-[span_10]">
          <a className="block cursor-pointer" data-component="link" href="/author/dorka-kardos-latif">
            <div className="flex py-10 justify-start items-center flex-1 gap-x-5 bg-contain [background-position:0%_50%] bg-no-repeat" style={{ backgroundImage: "url(\"/assets/cloned/images/51cd26d204db.png\")" }}>
              <div className="block h-[4.5rem] w-[4.5rem]">
                <img className="w-18 h-18 block max-w-full rounded-full overflow-clip aspect-[auto_72/72] align-middle text-clr-0" data-component="avatar" alt="Author's profile picture" height="72" src="/assets/cloned/images/bab47549dea6.jpg" srcSet="/assets/cloned/images/0d2e8635cb84.webp 1x, /assets/cloned/images/bab47549dea6.jpg 2x" width="72" />
              </div>
              <div className="block flex-1">
                <h3 className="block [font-weight:650]" data-component="heading">
                  Dorka Kardos-Latif
                </h3>
                <p className="block text-muted-foreground">
                  {"Digital marketer & portfolio expert, the face behind all content on Copyfolio 👋"}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="block mb-24 px-6 col-start-10 col-end-[span_3] max-lg:hidden">
        <div className="h-99.5 border border-solid border-primary block sticky top-10 mt-6 p-6 rounded-2xl overflow-auto max-h-[calc(100vh_-_80px)] 2xl:h-[20.9375rem]">
          <div className="h-full block">
            <div className="block mb-6 text-color-001 [font-weight:650]">
              Table of contents
            </div>
            <div className="flex flex-col">
              <div className="flex mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                <div className="block mr-2">
                  <div className="w-1.5 block mt-2 2xl:mt-0">
                    <Icon13 />
                  </div>
                </div>
                <div className="block text-color-001 cursor-pointer 2xl:text-[color:inherit]" aria-hidden="true">
                  Our hand-picked personal website examples to give you inspiration
                </div>
              </div>
              <div className="flex mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                <div className="block mr-2">
                  <div className="block w-1.5" />
                </div>
                <div className="block cursor-pointer" aria-hidden="true">
                  The best website builder for your personal brand website
                </div>
              </div>
              <div className="flex mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                <div className="block mr-2">
                  <div className="block w-1.5" />
                </div>
                <div className="block cursor-pointer" aria-hidden="true">
                  How to build your personal brand website
                </div>
              </div>
              <div className="flex text-muted-foreground text-sm leading-[1.3125rem]">
                <div className="block mr-2">
                  <div className="block w-1.5 2xl:mt-2">
                    <Icon14 />
                  </div>
                </div>
                <div className="block cursor-pointer 2xl:text-color-001" aria-hidden="true">
                  All your personal branding website questions answered
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex fixed top-181 left-301 z-20 rounded-full justify-center items-center text-center bg-color-004 shadow-[var(--color-004)_0px_0px_0px_0px,var(--border)_0px_0px_0px_1px,var(--clr-0)_0px_0px_0px_0px] transform-[matrix(1,0,0,1,0,100)] cursor-pointer h-11 w-11 hover:shadow-[var(--color-004)_0px_0px_0px_0px,var(--color-001)_0px_0px_0px_2px,var(--clr-0)_0px_0px_0px_0px]" type="button">
          <Icon />
        </button>
      </div>
    </div>
  );
}
