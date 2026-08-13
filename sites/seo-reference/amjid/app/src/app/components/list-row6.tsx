export type ListRow6Data = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item">
      <a className="inline text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase cursor-pointer max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.1px] md:max-lg:tracking-[1.13px] 2xl:tracking-[1.2px] hover:underline" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
