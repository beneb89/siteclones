export type ListRow4Data = {
  description: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item relative pl-6 list-outside 2xl:pl-9">
      <p className="block [font-family:'PP_Mori'] text-lg leading-[1.9375rem]">
        {d.description}
      </p>
      {" "}
    </li>
  );
}
