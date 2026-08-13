export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mb-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
      <code className="inline py-[0.1rem] px-[6.5px] rounded-lg text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-base leading-[1.75rem] bg-color-002 max-md:py-[0.0875rem] max-lg:px-1.5 max-lg:text-[0.9375rem] max-md:leading-[1.5625rem] md:max-lg:py-[1.5px] md:max-lg:leading-[1.6875rem]">
        {d.text}
      </code>
      {d.text2}
    </li>
  );
}
