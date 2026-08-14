export type MediaTileData = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="flex items-start gap-3 text-muted-foreground text-[0.9375rem] leading-[1.375rem]">
      <span className="w-5.5 h-5.5 border border-solid border-color-003 flex mt-px rounded-[7px] justify-center items-center shrink-0 text-primary bg-color-005">
        <svg className="w-auto h-[0.6875rem] block overflow-hidden" data-component="icon" fill="currentColor" height="11" viewBox="0 0 16 16" width="11">
          <path d="M13.485 1.929a1 1 0 0 1 .086 1.412l-7 8a1 1 0 0 1-1.493.043l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.74 2.74 6.34-7.24a1 1 0 0 1 1.413-.086z" />
        </svg>
      </span>
      {" "}
      <span className="block">
        <strong className="inline text-foreground font-semibold">
          {d.text}
        </strong>
        {d.text2}
      </span>
      {" "}
    </li>
  );
}
