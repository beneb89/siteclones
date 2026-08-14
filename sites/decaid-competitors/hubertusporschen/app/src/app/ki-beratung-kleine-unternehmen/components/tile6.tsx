export type Tile6Data = {
  text: string;
  description: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <details className="border-b border-solid border-b-border block py-5.5">
      <summary className="flex justify-between items-start gap-5 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-semibold leading-[1.625rem] list-inside cursor-pointer after:content-['+'] after:block after:w-[0.9375rem] after:h-3.5 after:text-accent after:text-[1.75rem] after:font-light after:leading-3.5">
        {d.text}
      </summary>
      <p className="hidden 2xl:block 2xl:max-w-198 2xl:mt-4 2xl:text-muted-foreground">
        {d.description}
      </p>
      <div className="block max-w-198 mt-4 text-muted-foreground max-md:max-w-180 max-md:leading-[1.6875rem] 2xl:hidden">
        {d.text2}
      </div>
    </details>
  );
}
