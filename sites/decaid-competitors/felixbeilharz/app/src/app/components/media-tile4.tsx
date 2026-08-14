export type MediaTile4Data = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile4({ d }: { d: MediaTile4Data }) {
  return (
    <li className="flex justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
      <div className="block relative z-1">
        <div className="box-content table p-2.5 leading-0 text-center">
          <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-primary leading-4" data-component="icon" viewBox="0 0 256 512" data-id="icon-angle-right-solid" data-name="" fill="currentColor">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg>
        </div>
      </div>
      <span className="block z-0 leading-[2.3125rem]">
        <strong className="inline font-semibold">
          {d.text}
        </strong>
        {d.text2}
      </span>
    </li>
  );
}
