export type MediaCardData = {
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="box-content block relative max-h-[1e+06px] mt-[1.0625rem] 2xl:hidden">
      <div className="box-content block max-h-[1e+06px] 2xl:hidden">
        <div className="box-content flex relative max-h-[1e+06px] py-[0.9375rem] px-2.5 flex-row-reverse items-center bg-background cursor-pointer 2xl:hidden after:content-['.'] after:block after:w-[0.3125rem] after:h-0 after:text-foreground after:text-lg after:leading-0 2xl:after:hidden">
          <div className="box-content w-[0.8125rem] h-[0.8125rem] flex relative max-h-[1e+06px] ml-2 2xl:hidden">
            <svg className="box-content w-[0.8125rem] h-4.5 block max-h-[1e+06px] overflow-hidden align-middle leading-4.5 2xl:hidden" data-component="icon" viewBox="0 0 256 512" data-id="icon-angle-double-down-light" data-name="" fill="currentColor">
              <path d="M119.5 262.9L3.5 145.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 223.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 263c-4.7 4.6-12.3 4.6-17-.1zm17 128l116-117.8c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L128 351.3 27.6 249.1c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l116 117.8c4.7 4.6 12.3 4.6 17-.1z" />
            </svg>
          </div>
          {" "}
          <h4 className="block max-h-[1e+06px] flex-1 text-xl font-bold leading-6.5 max-md:text-[1.0625rem] max-md:leading-[1.375rem] max-md:whitespace-pre-wrap 2xl:hidden" data-component="heading">
            {d.title}
          </h4>
          {" "}
        </div>
        {"  "}
      </div>
      {" "}
    </div>
  );
}
