export type ListRow2Data = {
  href: string;
  label2: string;
  label?: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item relative pt-[0.3125rem] pl-[0.9375rem] align-top text-[0.875rem] 2xl:pt-1.5 2xl:pl-4.5 2xl:text-[1.0625rem] before:content-[''] before:inline-block before:w-[0.9375rem] before:h-3 before:-ml-[0.9375rem] before:text-primary before:text-xs before:leading-3 2xl:before:w-4.5 2xl:before:h-[0.9rem] 2xl:before:-ml-4.5 2xl:before:text-sm 2xl:before:leading-[0.875rem]">
      <a className="inline text-[0.75rem] font-normal tracking-[0.3px] underline cursor-pointer 2xl:text-[0.875rem] 2xl:tracking-[0.36px] after:content-[''] after:inline-block after:w-[0.6875rem] after:h-[0.7125rem] after:mx-[3.5px] after:text-primary after:text-[0.6875rem] after:leading-[0.6875rem] 2xl:after:w-3.5 2xl:after:h-[13.7px] 2xl:after:mx-1 2xl:after:text-sm 2xl:after:leading-[0.875rem]" data-component="link" href={d.href} target="_blank" title={d.label}>
        {d.label2}
      </a>
      {" (jobs.fraunhofer.de)"}
    </li>
  );
}
