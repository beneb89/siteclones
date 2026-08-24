export type ListRow7Data = {
  href: string;
  label: string;
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      <strong className="inline font-semibold">
        <a className="inline max-w-full cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
          {d.label}
        </a>
        {d.text}
      </strong>
      {d.text2}
      <ul className="block mt-1 mb-[0.3125rem] ml-7.5 [list-style-type:disc] list-outside">
        <li className="list-item mb-1.5 ml-4 py-[0.1875rem]">
          {d.text3}
        </li>
      </ul>
      {" "}
    </li>
  );
}
