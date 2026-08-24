export type ListRow3Data = {
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item">
      <a className="block pt-4 pb-3 px-[1.5625rem] text-color-013 text-sm font-bold leading-5.5 bg-surface-3 cursor-default" data-component="link" href="#">
        {d.label}
      </a>
      {" "}
      <ul className="block [list-style-type:none] list-outside">
        <li className="list-item">
          <a className="border-b border-solid border-b-color-046 block relative pt-3.5 pr-[3.3125rem] pb-2.5 pl-[1.5625rem] text-background text-base font-bold leading-[1.5625rem] bg-primary cursor-pointer after:content-[''] after:block after:absolute after:top-[1.5375rem] after:right-7 after:bottom-[1.4125rem] after:left-54.5 after:w-[0.4375rem] after:h-[0.4375rem] after:-mt-[0.3125rem] after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[4.62px_4.62px] max-md:after:top-1/2 max-md:after:bottom-auto max-md:after:left-auto max-md:after:transform-[none] max-md:after:origin-[initial]" data-component="link" href="#">
            {d.label2}
          </a>
          {"  "}
        </li>
      </ul>
      {" "}
    </li>
  );
}
