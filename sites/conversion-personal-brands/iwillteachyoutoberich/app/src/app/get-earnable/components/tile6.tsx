export type Tile6Data = {
  description: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <div className="block relative">
      <div className="block">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          {"A "}
          <strong className="inline font-bold">
            business
          </strong>
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
