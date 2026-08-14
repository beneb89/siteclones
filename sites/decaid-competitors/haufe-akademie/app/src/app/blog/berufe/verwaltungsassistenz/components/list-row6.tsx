export type ListRow6Data = {
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="box-content list-item pb-[0.5625rem] leading-5">
      <a className="box-content block text-[0.875rem] font-medium cursor-pointer before:content-['•'] before:hidden before:text-background before:text-sm before:font-medium before:leading-5 before:text-left" data-component="link" href="/blog/themen/assistenz-und-office-management/din-5008">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
