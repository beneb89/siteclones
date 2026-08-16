export type Tile2Data = {
  id: string;
  value: string;
  htmlFor: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="box-content flex relative max-lg:block">
      <input className="w-[0.8125rem] h-3.5 block my-[0.1875rem] mr-[0.1875rem] ml-1 text-color-001 leading-4 cursor-default max-lg:h-[0.8125rem] max-lg:inline-block max-md:leading-[0.9375rem]" data-component="input" id={d.id} name="cegos_subscription_interests[]" type="checkbox" value={d.value} />
      <label className="box-content block cursor-default max-lg:inline" htmlFor={d.htmlFor}>
        {d.text}
      </label>
    </div>
  );
}
