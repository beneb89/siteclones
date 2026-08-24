export type ListRow4Data = {
  id: string;
  ariacurrent?: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item pl-[0.4375rem] [list-style-type:none] max-lg:pl-2 2xl:pl-[0.5625rem]" id={d.id}>
      <a className="inline [background-size:0px_1px] [background-position:100%_100%] bg-no-repeat cursor-pointer max-lg:bg-[none] max-lg:[background-size:initial] max-lg:[background-position:initial] max-lg:[background-repeat:initial]" data-component="link" aria-current={d.ariacurrent} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
