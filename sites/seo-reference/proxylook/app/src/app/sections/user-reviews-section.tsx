import Tile12, { type Tile12Data } from "../components/tile12";
import { Tile12_meta } from "../ditto-meta";
const Tile12_data: Tile12Data[] = [
    { text: "Your name", name: "reviewer_name", placeholder: "Optional · public" },
    { text: "Your role", name: "reviewer_role", placeholder: "e.g., \"Senior Dev\"" },
    { text: "Email", name: "reviewer_email", placeholder: "Private · for verification", type: "email" }
];
/** User Reviews section. */
export default function UserReviewsSection({ tile12Data = Tile12_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-reviews" id="reviews">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        User reviews
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        No reader reviews yet — be the first below.
      </p>
      {" "}
      <div className="grid items-start gap-6 grid-cols-[220px_1fr] max-lg:grid-cols-1">
        <div className="border border-solid border-surface-5 block p-4.5 rounded-lg text-center max-md:p-3.5" style={{ backgroundImage: "linear-gradient(var(--clr-16), var(--background))" }}>
          <div className="block text-[3.5rem] font-extrabold leading-14 tracking-[-1.68px] max-md:text-[2.625rem] max-md:leading-10.5 max-md:tracking-[-1.26px]">
            4.6
          </div>
          {" "}
          <div className="block my-1.5 text-clr-3 text-base leading-[1.625rem] tracking-[2px]">
            ★★★★★
          </div>
          {" "}
          <div className="block text-muted-foreground text-xs leading-[1.25rem]">
            Editorial rating only
          </div>
          {" "}
        </div>
        {" "}
        <div className="flex justify-center items-center gap-1.5 text-muted-foreground text-[0.8125rem] italic leading-[1.375rem]">
          {" Rating distribution will appear once reader reviews come in. "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block mt-4.5" id="pp-user-reviews">
        <div className="border border-dashed border-border block p-4.5 rounded-lg text-muted-foreground text-[0.8125rem] leading-[1.375rem] text-center bg-surface-2">
          {" No reader reviews published yet for DataForSEO. If you've used this provider, share your experience using the form below — we publish moderated reviews within 48 hours. "}
        </div>
        {" "}
      </div>
      {" "}
      <details className="border border-solid border-border block mt-6 rounded-lg bg-surface-2">
        <summary className="flex py-3.5 px-4.5 justify-between items-center font-semibold cursor-pointer">
          <span className="block">
            <i className="h-3.5 inline-block mr-2 [vertical-align:-1.75px] text-primary bg-primary" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z'/%3E%3C/svg%3E\")" }} />
            Used DataForSEO? Write a review
          </span>
          <span className="block text-muted-foreground text-lg leading-[1.875rem]">
            +
          </span>
        </summary>
        {" "}
        <form className="grid pb-4.5 px-4.5 gap-3 grid-cols-[792px] max-md:grid-cols-[300px] md:max-lg:grid-cols-[644px] 2xl:grid-cols-[832px]" id="pp-review-form">
          <div className="block">
            <label className="block mb-1.5 text-muted-foreground text-[0.6875rem] font-bold leading-4 tracking-[0.66px] uppercase cursor-default">
              Your rating *
            </label>
            {" "}
            <div className="inline-flex gap-1 text-2xl leading-[2.5rem] cursor-pointer" id="pp-rev-stars-input">
              {" "}
              <span className="block text-muted 2xl:text-clr-3">
                ★
              </span>
              <span className="block text-muted 2xl:text-clr-3">
                ★
              </span>
              <span className="block text-muted 2xl:text-clr-3">
                ★
              </span>
              <span className="block text-muted 2xl:text-clr-3">
                ★
              </span>
              <span className="block text-muted 2xl:text-clr-3">
                ★
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(299px,_1fr))]">
            <div className="block">
              <label className="block mb-1.5 text-muted-foreground text-[0.6875rem] font-bold leading-4 tracking-[0.66px] uppercase cursor-default">
                Headline *
              </label>
              <input className="w-full h-[2.5625rem] border border-solid border-border inline-block py-[0.5625rem] px-3 rounded-md overflow-clip text-[0.8125rem] leading-[1.375rem] bg-surface cursor-text" data-ditto-id="style-input" data-component="input" name="title" placeholder="e.g., Great pool quality, slow support" />
            </div>
            {" "}
            <div className="block">
              <label className="block mb-1.5 text-muted-foreground text-[0.6875rem] font-bold leading-4 tracking-[0.66px] uppercase cursor-default">
                Use case
              </label>
              <input className="w-full h-[2.5625rem] border border-solid border-border inline-block py-[0.5625rem] px-3 rounded-md overflow-clip text-[0.8125rem] leading-[1.375rem] bg-surface cursor-text" data-ditto-id="style-input-2" data-component="input" name="use_case" placeholder="e.g., SERP scraping, ad verification" />
            </div>
            {" "}
          </div>
          {" "}
          <div className="block">
            <label className="block mb-1.5 text-muted-foreground text-[0.6875rem] font-bold leading-4 tracking-[0.66px] uppercase cursor-default">
              Your review *
            </label>
            <textarea className="w-full h-30 border border-solid border-border inline-block py-2.5 px-3 rounded-md overflow-auto text-[0.8125rem] leading-[1.25rem] whitespace-pre-wrap [overflow-wrap:break-word] bg-surface cursor-text" data-ditto-id="style-textarea" data-component="textarea" name="body" placeholder="What worked, what didn't, what you'd want them to fix. Be specific — vague reviews don't get published." />
          </div>
          {" "}
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(206px,_1fr))]">
            {tile12Data.map((d, i) => <Tile12 key={i} d={d} meta={Tile12_meta[i]} />)}
            {" "}
          </div>
          {" "}
          <div className="block">
            <div className="block" />
          </div>
          {" "}
          <div className="flex flex-wrap items-center gap-2.5">
            <button className="h-full border border-solid border-clr-1 flex py-2 px-3.5 rounded-lg justify-center items-center gap-1.5 text-surface text-[0.8125rem] font-semibold leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer max-md:min-h-11 hover:shadow-[var(--clr-1)_0px_0px_0px_0px] hover:" data-component="button" type="submit">
              <i className="w-[0.8125rem] h-[0.8125rem] block mr-1.5 [vertical-align:-1.625px] bg-surface" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z'/%3E%3C/svg%3E\")" }} />
              Submit review
            </button>
            {" "}
          </div>
          {" "}
          <p className="block max-w-119 text-muted text-[0.6875rem] leading-[1.0625rem]">
            {"Reviews are moderated by our editorial team and published within 48 hours. We never publish your email address. Submitted via this form, you agree to our "}
            <a className="inline-flex items-center gap-1 text-primary text-[0.8125rem] font-semibold leading-[1.25rem] cursor-pointer hover:underline" data-component="link" href="/terms">
              terms
            </a>
            .
          </p>
          {" "}
        </form>
        {" "}
      </details>
      {" "}
    </section>
  );
}
