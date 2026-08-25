export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
  label3: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="block max-h-[1e+06px] mb-5 leading-[1.4375rem] cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
      {" "}
      <span className="block max-h-[1e+06px] p-5 rounded-[15px] bg-background 2xl:hidden">
        {" "}
        <span className="flex max-h-[1e+06px] max-lg:block 2xl:hidden">
          {" "}
          <span className="w-25 flex max-h-[1e+06px] mr-5 p-2.5 rounded-[10px] flex-col justify-center text-center bg-surface-3 max-lg:mb-[0.9375rem] 2xl:hidden">
            {" "}
            <span className="flex max-h-[1e+06px] mb-[0.3125rem] justify-center items-end grow-[1.5] basis-[0%] text-4xl font-bold leading-9 2xl:hidden">
              {d.label}
            </span>
            {" "}
            <span className="flex max-h-[1e+06px] justify-center items-start flex-1 text-sm leading-[1.125rem] tracking-[2px] uppercase 2xl:hidden">
              December
            </span>
            {" "}
            <span className="block max-h-[1e+06px] mt-[0.3125rem] text-sm leading-[1.125rem] tracking-[1px] 2xl:hidden">
              {d.label2}
            </span>
            {" "}
          </span>
          {" "}
          <span className="flex max-h-[1e+06px] flex-col justify-center flex-1 2xl:hidden">
            {" "}
            <span className="block max-h-[1e+06px] mb-[0.1875rem] text-sm leading-[1.125rem] tracking-[3px] uppercase 2xl:hidden">
              {d.label3}
            </span>
            {" "}
            <h4 className="block max-h-[1e+06px] mb-[0.1875rem] text-2xl font-bold leading-[1.9375rem] max-lg:text-xl max-lg:leading-6.5 2xl:hidden" data-component="heading">
              {d.title}
            </h4>
            {" "}
            <p className="block max-h-[1e+06px] my-2.5 2xl:hidden">
              {d.description}
            </p>
            {" "}
            <p className="block max-h-[1e+06px] mb-[0.1875rem] 2xl:hidden">
              <span className="inline max-h-[1e+06px] mb-[0.1875rem] text-sm leading-[1.125rem] tracking-[2px] uppercase 2xl:hidden">
                ✅ Accelerator
              </span>
              {" "}
              <span className="inline max-h-[1e+06px] ml-5 text-sm leading-[1.125rem] tracking-[2px] uppercase 2xl:hidden">
                🚫 University
              </span>
              {" "}
            </p>
            {" "}
            <p className="block max-h-[1e+06px] text-primary underline 2xl:hidden">
              <span className="inline max-h-[1e+06px] text-sm leading-[1.125rem] tracking-[2px] uppercase 2xl:hidden">
                View Event »
              </span>
            </p>
            {" "}
          </span>
          {" "}
        </span>
        {" "}
      </span>
      {" "}
    </a>
  );
}
