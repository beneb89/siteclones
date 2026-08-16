export type ListRow2Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item">
      <a className="inline font-semibold underline cursor-pointer max-lg:min-h-11 max-lg:block max-lg:py-[0.8125rem] max-lg:px-3.5 max-lg:rounded-[14px] max-lg:text-[0.9375rem] max-lg:leading-[1.0625rem] max-lg:[text-decoration-line:initial]" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
