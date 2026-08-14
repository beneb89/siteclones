export type ListRowData = {
  text: string;
  description: string;
  description2: string;
  description3: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item">
      <div className="w-[32.025rem] h-px block shrink-0 bg-color-008 max-md:w-73.5 md:max-lg:w-[218.3px] 2xl:w-135.5" role="none" />
      <div className="flex py-3 items-center gap-5 max-md:py-2 max-md:gap-3">
        <span className="block shrink-0 text-xl font-bold leading-[1.4375rem] w-12 max-md:text-lg max-md:leading-[1.625rem] max-md:w-10">
          {d.text}
        </span>
        <p className="block text-base leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
          {d.description}
          <strong className="inline font-bold">
            {d.description2}
          </strong>
          {d.description3}
        </p>
      </div>
    </li>
  );
}
