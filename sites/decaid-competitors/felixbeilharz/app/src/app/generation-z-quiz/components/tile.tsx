export type TileData = {
  id: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="box-content border border-solid border-surface-5 block relative mt-[1.5625rem] rounded-lg text-left cursor-pointer" id={d.id}>
      <div className="box-content block p-[0.9375rem] after:content-[''] after:table after:w-0 after:h-0">
        <div className="box-content block">
          <div className="box-content block relative pl-7.5 font-light leading-7 [word-break:break-word]">
            <span className="box-content inline">
              {d.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
