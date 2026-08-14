export type Tile6Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <details className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-border 2xl:block 2xl:py-5.5">
      <summary className="hidden 2xl:flex 2xl:justify-between 2xl:items-start 2xl:gap-5 2xl:text-primary 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[1.1875rem] 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:list-inside 2xl:cursor-pointer after:content-['+'] after:block after:w-[0.9375rem] after:h-3.5 after:text-accent after:text-[1.75rem] after:font-light after:leading-3.5 max-lg:after:hidden">
        {d.text}
      </summary>
      {" "}
      <p className="hidden 2xl:block 2xl:max-w-198 2xl:mt-4 2xl:text-muted-foreground">
        {d.description}
      </p>
      {" "}
    </details>
  );
}
