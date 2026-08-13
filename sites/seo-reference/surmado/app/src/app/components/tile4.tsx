export type Tile4Data = {
  htmlFor: string;
  id: string;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <label className="h-[3.2375rem] min-h-12 border-2 border-solid border-border flex py-3 px-4 rounded-md justify-center items-center text-sm font-semibold leading-[1.5rem] bg-background cursor-pointer" htmlFor={d.htmlFor}>
      <input className="w-px h-px block absolute min-w-0 -m-px overflow-hidden text-color-010 [font-family:Arial] text-[0.8125rem] font-normal leading-[0.9375rem] text-start whitespace-nowrap text-nowrap [clip-path:inset(50%)] cursor-default max-lg:text-base max-lg:leading-4.5 focus:shadow-[var(--clr-6)_0px_0px_0px_3px]" data-component="input" id={d.id} name="site_feeling" type="radio" value={d.value} />
      <span className="flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-5 before:bg-background before:rounded-tl-[50%]">
        {d.text}
      </span>
    </label>
  );
}
