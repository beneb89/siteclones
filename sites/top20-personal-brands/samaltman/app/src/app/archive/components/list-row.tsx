export type ListRowData = {
  href: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="box-content list-item mb-5 [list-style-type:none]">
      <a className="box-content block mb-[0.1875rem] text-primary leading-5 cursor-pointer" data-component="link" href={d.href}>
        {" "}
        <span className="box-content inline">
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
      <div className="box-content block mb-[0.1875rem] text-xs leading-[1.1875rem]" />
      {" "}
      <div className="box-content block text-muted [font-family:'Helvetica_Neue',_Helvetica,_Arial,_'Lucida_Grande',_sans-serif] text-[0.6875rem] font-bold leading-[1.125rem] uppercase">
        {d.text}
      </div>
      {" "}
    </li>
  );
}
