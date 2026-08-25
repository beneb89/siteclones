export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item relative pl-6.5">
      <a className="block py-2.5 pl-5 [font-family:Montserrat,_sans-serif] font-bold leading-[1.6875rem] cursor-pointer max-md:text-base max-md:leading-6" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
