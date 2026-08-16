export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="box-content border-b border-solid border-b-surface-2 flex py-1.5 px-5 justify-between items-center cursor-pointer max-lg:flex-col max-md:items-start" data-component="link" href={d.href}>
      <div className="box-content w-full block max-w-105">
        {d.label}
      </div>
      <div className="box-content w-[182.7px] block max-lg:w-50 max-md:mt-2.5 max-md:mb-[0.3125rem] 2xl:w-[12.1625rem]" />
      <ul className="box-content w-[246.7px] grid mt-2.5 mb-[0.9375rem] [list-style-type:none] list-outside grid-cols-[minmax(0,_1fr)] max-lg:w-67.5 max-md:mb-0 2xl:w-[262.7px]">
        <li className="box-content flex relative ml-5 items-center gap-[0.3125rem]">
          <span className="box-content block pl-[0.4375rem]">
            {" 2 Tage "}
          </span>
        </li>
      </ul>
      <div className="box-content w-1/5 block max-md:w-[85%] md:max-lg:w-[35%] 2xl:w-[20.5%]" />
    </a>
  );
}
