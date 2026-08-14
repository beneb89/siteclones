export type Tile5Data = {
  htmlFor: string;
  text: string;
  id: string;
  name: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <div className="block mb-10">
      <label className="block mb-2 text-color-024 text-base font-bold leading-[1.375rem] cursor-default max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]" htmlFor={d.htmlFor}>
        {d.text}
      </label>
      <textarea className="w-full h-23.5 border-b-2 border-solid border-b-surface-7 inline-block pb-2 overflow-auto [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg italic leading-7 whitespace-pre-wrap [overflow-wrap:break-word] [font-feature-settings:'calt',_'liga',_'onum'] cursor-text" data-component="textarea" aria-invalid="false" aria-required="true" id={d.id} name={d.name} />
    </div>
  );
}
