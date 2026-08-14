export type ListRow6Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item">
      <a className="inline text-sm leading-[1.4375rem] cursor-pointer max-md:leading-[1.375rem]" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
