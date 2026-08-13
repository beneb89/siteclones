export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
      <strong className="inline text-foreground font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
