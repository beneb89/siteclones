export type MediaTile3Data = {
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="box-content table max-w-[67%] my-5 mx-[3.025rem] max-md:mx-[55.3px] md:max-lg:mx-[3.1125rem]">
      {" "}
      <a className="h-[4.2rem] inline-flex py-3 px-[0.9375rem] rounded-[5px] items-center overflow-hidden text-background text-lg leading-[1.375rem] tracking-[2px] text-center [background-position:50%_50%] bg-no-repeat cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--color-002), var(--color-002))" }} data-component="link" href={d.href} target="_blank">
        <span className="block relative text-color-005 font-extrabold leading-0 before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
          {" "}
          <div className="box-content table">
            <svg className="box-content w-auto h-4.5 inline-block overflow-hidden align-middle leading-4.5" data-component="icon" viewBox="0 0 512 512" data-id="icon-download-solid" data-name="" fill="currentColor">
              {"!--! Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->"}
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </div>
          {" "}
        </span>
        {" "}
        <span className="block relative pl-[0.9375rem] flex-1 text-color-005 font-extrabold before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
          <span className="block">
            {d.label}
          </span>
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
