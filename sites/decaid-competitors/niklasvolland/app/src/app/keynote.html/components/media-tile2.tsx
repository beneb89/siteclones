export type MediaTile2Data = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="border border-solid border-border flex py-4.5 px-5 rounded-xl gap-3.5 bg-border">
      <div className="w-8 h-8 border border-solid border-color-002 flex rounded-lg justify-center items-center shrink-0 bg-color-005">
        <svg className="w-auto h-3.5 block overflow-hidden" data-component="icon" fill="#E60000" height="14" viewBox="0 0 16 16" width="14">
          <path d="M13.485 1.929a.75.75 0 0 1 .086 1.056l-7.25 8.5a.75.75 0 0 1-1.1.043l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.68 2.68 6.718-7.883a.75.75 0 0 1 1.056-.086z" />
        </svg>
      </div>
      {" "}
      <div className="block">
        <strong className="block mb-0.5 text-[0.9375rem] font-semibold leading-6">
          {d.text}
        </strong>
        <span className="inline text-muted-foreground text-sm leading-[1.25rem]">
          {d.text2}
        </span>
      </div>
      {" "}
    </li>
  );
}
