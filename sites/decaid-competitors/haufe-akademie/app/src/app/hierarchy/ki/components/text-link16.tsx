export type TextLink16Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink16({ d }: { d: TextLink16Data }) {
  return (
    <a className="w-full border-2 border-solid border-clr-1 block clear-both py-2 px-3 text-sm font-medium leading-5 whitespace-nowrap text-nowrap bg-clr-1 cursor-pointer" href={d.href}>
      {" "}
      <div className="block">
        <div className="flex items-center">
          <div className="block min-w-0">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
