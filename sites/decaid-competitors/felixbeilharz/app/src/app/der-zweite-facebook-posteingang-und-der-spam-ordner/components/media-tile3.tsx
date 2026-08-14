export type MediaTile3Data = {
  id: string;
  id2: string;
  imgSrc: string;
  srcSet: string;
  text: string;
  dateTime: string;
  date: string;
  description: string;
  ariaLabel: string;
  href: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <li className="box-content list-item text-foreground text-base leading-7" id={d.id}>
      <article className="border border-solid border-border block relative mb-5 p-5 rounded-sm after:content-[''] after:table after:w-0 after:h-0" id={d.id2}>
        <footer className="block">
          <div className="box-content block after:content-[''] after:table after:w-0 after:h-0">
            <div className="box-content block float-left mr-[0.9375rem]">
              <img className="box-content w-15 h-15 border border-solid border-muted-foreground block float-left max-w-full rounded-[50%] overflow-clip align-middle" data-component="avatar" alt="" src={d.imgSrc} srcSet={d.srcSet} />
            </div>
            {" "}
            <b className="box-content inline-block mt-2 text-color-010 text-sm font-semibold leading-[1.5625rem]">
              {d.text}
            </b>
            {" "}
            <span className="box-content hidden float-left">
              sagt:
            </span>
            {" "}
          </div>
          {" "}
          <div className="box-content block -mt-7.5 mb-5 ml-18 text-color-006 text-xs leading-[1.3125rem]">
            <a className="box-content inline cursor-pointer" data-component="link" href="/der-zweite-facebook-posteingang-und-der-spam-ordner">
              <time className="box-content inline" dateTime={d.dateTime}>
                {d.date}
              </time>
            </a>
            {" "}
          </div>
          {" "}
        </footer>
        {" "}
        <div className="box-content block opacity-85 text-sm font-light leading-[1.3125rem] before:content-[''] before:table before:w-0 before:h-0 after:content-[''] after:table after:w-0 after:h-0">
          <p className="box-content block pt-[0.3125rem] pb-2.5 font-normal">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
        <div className="box-content table float-right max-w-full mt-2.5 cursor-text">
          <a className="h-9 border border-solid border-accent inline-flex p-2 rounded-[50px] justify-center items-center overflow-hidden text-accent text-[0.9375rem] font-medium leading-4.5 text-center cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="nofollow">
            <span className="block relative leading-0 before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
              {" "}
              <span className="table">
                {" "}
                <svg className="box-content w-[0.9375rem] h-[0.9375rem] inline-block overflow-hidden align-middle leading-[0.9375rem]" data-component="icon" viewBox="0 0 576 512" data-id="icon-reply-light" data-name="" fill="currentColor">
                  <path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z" />
                </svg>
                {" "}
              </span>
              {" "}
            </span>
            <span className="block relative pl-[0.9375rem] before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
              {" "}
              <span className="block">
                {"\n\t\t\n\t\tReply\t\t"}
              </span>
              {" "}
            </span>
          </a>
        </div>
        {" "}
      </article>
      {" "}
    </li>
  );
}
