export type MediaTile3Data = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <li className="flex gap-3 text-[0.9375rem] leading-[1.375rem]">
      <span className="w-5 h-5 border border-solid border-color-003 flex mt-px rounded-[5px] justify-center items-center shrink-0 bg-color-005">
        <svg className="w-auto h-[0.6875rem] block overflow-hidden" data-component="icon" fill="#E60000" height="11" viewBox="0 0 16 16" width="11">
          <path d="M13.485 1.929a.75.75 0 0 1 .086 1.056l-7.25 8.5a.75.75 0 0 1-1.1.043l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.68 2.68 6.718-7.883a.75.75 0 0 1 1.056-.086z" />
        </svg>
      </span>
      {" "}
      <span className="block">
        <strong className="block mb-0.5 font-semibold">
          {d.text}
        </strong>
        <em className="block text-muted-foreground text-[0.8125rem] leading-[1.25rem]">
          {d.text2}
        </em>
      </span>
      {" "}
    </li>
  );
}
