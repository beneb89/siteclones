export type Tile6Data = {
  id: string;
  label: string;
  id2: string;
  label2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <div className="w-[24.625rem] block max-w-full px-3 shrink-0">
      <div className="hidden 2xl:block 2xl:relative" id={d.id}>
        <button className="hidden 2xl:w-full 2xl:border 2xl:border-solid 2xl:border-muted-foreground 2xl:inline-block 2xl:relative 2xl:z-99 2xl:p-3 2xl:rounded-lg 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-background 2xl:cursor-pointer after:content-[''] after:block after:absolute after:inset-y-3 after:right-3 after:left-[21.375rem] after:w-3.5 after:h-5.5 after:text-foreground after:text-base after:leading-5.5 after:text-left max-lg:after:hidden" aria-expanded="false" type="button">
          {" "}
          <i className="hidden 2xl:inline-block 2xl:pr-1.5 2xl:[font-family:'Font_Awesome_Pro'] 2xl:leading-4 2xl:text-center" />
          {d.label}
        </button>
        {"  "}
      </div>
      <div className="block relative 2xl:hidden" id={d.id2}>
        <button className="w-full border border-solid border-muted-foreground inline-block relative z-99 p-3 rounded-lg whitespace-nowrap text-nowrap bg-background cursor-pointer 2xl:hidden after:content-[''] after:block after:absolute after:inset-y-3 after:right-3 after:left-[21.375rem] after:w-3.5 after:h-5.5 after:text-foreground after:text-base after:leading-5.5 after:text-left max-lg:after:inset-y-auto max-lg:after:left-auto max-lg:after:w-auto max-lg:after:h-auto 2xl:after:hidden" data-component="button" aria-expanded="false" type="button">
          {" "}
          <i className="inline-block pr-1.5 [font-family:'Font_Awesome_Pro'] leading-4 text-center 2xl:hidden" />
          {d.label2}
        </button>
        {"  "}
      </div>
      {"  "}
    </div>
  );
}
