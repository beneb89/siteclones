export type Tile3Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <details className="border border-solid border-border block rounded-[22px] overflow-hidden bg-background">
      <summary className="h-full min-h-14 list-item py-4 px-5.5 font-bold leading-[1.625rem] list-inside cursor-pointer">
        {d.text}
      </summary>
      {" "}
      <p className="block p-5.5">
        {d.description}
      </p>
      {" "}
    </details>
  );
}
