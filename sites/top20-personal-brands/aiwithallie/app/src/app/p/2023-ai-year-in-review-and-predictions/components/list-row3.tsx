export type ListRow3Data = {
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item font-bold underline [border-collapse:collapse]">
      <a className="inline underline [word-break:break-word] cursor-pointer [border-collapse:collapse]" data-component="link" href="https://www.aiwithallie.com/login" rel="noopener noreferrer nofollow" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
