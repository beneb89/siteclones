export type ListRow4Data = {
  description: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-2">
      <p className="block mb-4">
        {d.description}
      </p>
      {" "}
    </li>
  );
}
