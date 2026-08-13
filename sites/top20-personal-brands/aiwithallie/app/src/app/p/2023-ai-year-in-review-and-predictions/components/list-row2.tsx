export type ListRow2Data = {
  description: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item mt-2.5">
      <p className="block text-left">
        <span className="inline">
          <b className="inline font-bold">
            {d.description}
          </b>
        </span>
      </p>
    </li>
  );
}
