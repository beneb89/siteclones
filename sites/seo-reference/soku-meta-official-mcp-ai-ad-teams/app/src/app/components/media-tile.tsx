export type MediaTileData = {
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="block relative">
      <button className="inline-flex items-center gap-1 text-muted-foreground font-medium text-center cursor-default hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" type="button">
        {d.label}
        <svg className="w-4 h-4 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
