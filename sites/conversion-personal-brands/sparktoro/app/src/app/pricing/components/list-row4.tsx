export type ListRow4Data = {
  href: string;
  rel: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-3.5">
      <a className="inline text-[1.0625rem] leading-[1.625rem] underline cursor-pointer" data-component="link" href={d.href} rel={d.rel} target="_blank">
        {d.label}
      </a>
    </li>
  );
}
