export type ListRow4Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="border-r border-solid border-r-color-004 border-b border-b-color-004 flex py-6 px-7.5 flex-col gap-1 text-muted text-left max-md:p-5 md:max-lg:px-6">
      <p className="block text-foreground text-[2.125rem] font-semibold leading-[2.625rem] text-pretty max-lg:text-[1.5625rem] max-md:leading-[2.0625rem] md:max-lg:leading-[2.3125rem] 2xl:text-[2.5rem] 2xl:leading-12">
        {d.description}
      </p>
      {" "}
      <p className="block text-foreground text-[1.1875rem] font-medium leading-[1.6875rem] max-md:text-base max-md:leading-[1.5rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.5625rem] 2xl:text-xl 2xl:leading-7">
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
