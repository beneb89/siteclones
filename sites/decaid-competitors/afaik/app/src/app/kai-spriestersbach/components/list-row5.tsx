export type ListRow5Data = {
  text: string;
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="box-content list-item mt-[0.725rem] max-lg:mt-2.5 2xl:mt-3">
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      {" "}
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
