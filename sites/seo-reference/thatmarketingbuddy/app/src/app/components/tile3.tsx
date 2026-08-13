export type Tile3Data = {
  label: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border border-solid border-border block rounded-2xl overflow-hidden bg-background">
      <button className="flex py-5 px-6 justify-between items-center text-color-001 font-medium text-left cursor-default w-full hover:bg-surface-2" data-component="button" aria-expanded="false">
        <span className="block">
          {d.label}
        </span>
        <span className="block text-muted-foreground text-2xl leading-8">
          +
        </span>
      </button>
      <div className="grid grid-cols-[minmax(0,_1fr)] grid-rows-[0fr]">
        <div className="block overflow-hidden">
          <p className="block pb-5 px-6 text-muted leading-6.5">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
