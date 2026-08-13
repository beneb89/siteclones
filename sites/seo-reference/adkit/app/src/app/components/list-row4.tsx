export type ListRow4Data = {
  text: string;
  text2: string;
  kind?: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item my-1.5 pl-1.5 leading-7">
      <code className="border border-solid border-border inline-block py-0.5 px-1.5 rounded-md text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 bg-surface-2" data-component={d.kind}>
        {d.text}
      </code>
      {d.text2}
    </li>
  );
}
