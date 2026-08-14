export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item mt-[0.725rem] max-lg:mt-2.5 2xl:mt-3">
      {d.text}
      <em className="box-content inline italic">
        {d.text2}
      </em>
      {d.text3}
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
