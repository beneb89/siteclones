export type ListRow6Data = {
  text: string;
  text2: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="box-content list-item mt-[0.725rem] max-lg:mt-2.5 2xl:mt-3">
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      {d.text2}
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel="external noopener noref" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
