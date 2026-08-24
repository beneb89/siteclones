export type ListRow6Data = {
  href: string;
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      <a className="inline max-w-full cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        <strong className="inline font-semibold">
          {d.text}
        </strong>
      </a>
      {d.text2}
    </li>
  );
}
