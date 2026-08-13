export type ListRow5Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
      <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
        {d.text}
      </code>
      {d.text2}
    </li>
  );
}
