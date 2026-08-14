export type ListRow3Data = {
  text: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item">
      <span className="box-content inline">
        {d.text}
      </span>
      {" "}
      <span className="box-content inline">
        –
      </span>
      {" "}
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href="/" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
