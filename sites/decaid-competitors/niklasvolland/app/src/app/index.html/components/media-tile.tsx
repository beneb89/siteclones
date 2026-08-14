export type MediaTileData = {
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="border border-solid border-border flex mb-4 py-4 px-5 rounded-xl items-start gap-4 bg-border">
      <div className="w-5 h-5 flex mt-0.5 rounded-[50%] justify-center items-center shrink-0 bg-primary">
        <svg className="w-auto h-3 block overflow-hidden" data-component="icon" fill="white" height="12" viewBox="0 0 16 16" width="12">
          <path d="M13.485 1.929a.75.75 0 0 1 .086 1.056l-7.25 8.5a.75.75 0 0 1-1.1.043l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.68 2.68 6.718-7.883a.75.75 0 0 1 1.056-.086z" />
        </svg>
      </div>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
