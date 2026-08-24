export type Tile2Data = {
  ariacontrols: string;
  id: string;
  label: string;
  arialabelledby: string;
  id2: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="border-b border-solid border-b-color-003 block">
      <div className="block py-5.5 font-bold leading-4.5 cursor-pointer" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" id={d.id} role="button">
        <span className="w-[1.6875rem] block float-right text-color-005 text-right max-md:w-[1.35rem]" aria-hidden="true">
          {" "}
          <span className="block">
            <i className="inline-block [font-family:'Font_Awesome_5_Free'] font-black before:content-[''] before:text-primary before:text-lg before:font-black before:leading-4.5 before:text-right" />
          </span>
          {"  "}
        </span>
        {" "}
        <a className="inline text-color-005 font-semibold leading-6">
          {d.label}
        </a>
        {" "}
      </div>
      {" "}
      <div className="hidden pb-5.5 text-clr-20 text-base leading-7 after:content-[''] after:block after:w-0 after:h-0" aria-labelledby={d.arialabelledby} id={d.id2} role="region">
        <p className="block my-2.5 [font-family:'PP_Mori'] text-lg leading-[1.9375rem]">
          {d.description}
        </p>
      </div>
      {" "}
    </div>
  );
}
