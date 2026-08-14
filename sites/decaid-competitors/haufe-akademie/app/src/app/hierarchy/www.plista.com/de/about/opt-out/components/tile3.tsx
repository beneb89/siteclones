export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block mb-2 max-lg:text-sm max-lg:leading-5 2xl:hidden">
      <a className="inline text-primary cursor-pointer 2xl:hidden after:content-[''] after:inline-block after:w-5 after:h-4 after:pl-1 after:text-primary after:text-base after:leading-4 after:text-left max-lg:after:w-4.5 max-lg:after:h-3.5 max-lg:after:text-sm max-lg:after:leading-3.5 2xl:after:hidden" data-component="link" href="/1685">
        <span className="inline 2xl:hidden">
          {d.description}
        </span>
      </a>
    </p>
  );
}
