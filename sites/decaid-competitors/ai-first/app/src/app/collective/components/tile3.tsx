export type Tile3Data = {
  htmlFor: string;
  text: string;
  id: string;
  name: string;
  type: string;
  htmlFor2: string;
  text2: string;
  ariarequired?: string;
  id2: string;
  name2: string;
  type2: string;
  placeholder?: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="grid mb-10 gap-6 grid-cols-2 max-md:grid-cols-1">
      <div className="block">
        <label className="block mb-2 text-color-024 text-base font-bold leading-[1.375rem] cursor-default max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]" htmlFor={d.htmlFor}>
          {d.text}
        </label>
        <input className="w-full h-9.5 border-b-2 border-solid border-b-surface-7 inline-block pb-2 overflow-clip [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg italic leading-7 [font-feature-settings:'calt',_'liga',_'onum'] cursor-text" data-component="input" aria-invalid="false" aria-required="true" id={d.id} name={d.name} type={d.type} />
      </div>
      <div className="block">
        <label className="block mb-2 text-color-024 text-base font-bold leading-[1.375rem] cursor-default max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]" htmlFor={d.htmlFor2}>
          {d.text2}
        </label>
        <input className="w-full h-9.5 border-b-2 border-solid border-b-surface-7 inline-block pb-2 overflow-clip [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg italic leading-7 [font-feature-settings:'calt',_'liga',_'onum'] cursor-text" data-component="input" aria-invalid="false" aria-required={d.ariarequired} id={d.id2} name={d.name2} type={d.type2} placeholder={d.placeholder} />
      </div>
    </div>
  );
}
