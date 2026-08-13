export type ListRow3Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mb-2">
      <p className="block mb-4">
        <strong className="inline font-bold">
          {d.description}
        </strong>
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
