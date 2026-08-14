export type TextLink11Data = {
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink11({ d }: { d: TextLink11Data }) {
  return (
    <a className="min-h-8 border-2 border-solid border-clr-1 flex min-w-[fit-content] p-3 rounded-lg text-sm leading-[1.0625rem] cursor-pointer" href="/blog/berufe" target="_self">
      {" "}
      <i className="min-h-9 flex min-w-9 max-w-9 max-h-9 mr-3 rounded-full justify-center items-center text-primary text-[1.125rem] italic bg-clr-1" />
      {" "}
      <div className="block min-w-0">
        <div className="flex">
          <div className="block min-w-0 my-auto font-medium leading-5">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block mt-1 text-color-003 leading-5">
          {d.label2}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
