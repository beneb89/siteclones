export type ListRow5Data = {
  text: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item my-2 pl-[0.4375rem] leading-[1.75rem] max-md:pl-1.5 max-md:leading-6 md:max-lg:pl-[0.4rem] md:max-lg:leading-[1.625rem] 2xl:pl-[7.5px] 2xl:leading-7.5">
      {d.text}
    </li>
  );
}
