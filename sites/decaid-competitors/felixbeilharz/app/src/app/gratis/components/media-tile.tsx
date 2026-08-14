export type MediaTileData = {
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="flex justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
      <div className="block relative z-1">
        <div className="box-content block p-2.5 leading-0 text-center">
          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
          </svg>
        </div>
      </div>
      <span className="block z-0 leading-[2.3125rem]">
        {d.text}
      </span>
    </li>
  );
}
