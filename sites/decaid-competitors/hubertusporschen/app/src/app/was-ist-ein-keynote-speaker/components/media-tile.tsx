export type MediaTileData = {
  text: string;
  text2: string;
  alt: string;
  imgSrc: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="border border-solid border-border block relative overflow-hidden aspect-[4/3] 2xl:border-l-2 2xl:border-l-primary 2xl:py-[1.8625rem] 2xl:px-5 2xl:text-center 2xl:bg-surface-2 2xl:border-[0] 2xl:border-initial 2xl:border-[initial] 2xl:static 2xl:inset-auto 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:aspect-[initial]">
      <div className="hidden 2xl:block 2xl:mb-2 2xl:text-primary 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[2.625rem] 2xl:italic 2xl:leading-10.5 2xl:tracking-[-0.84px]">
        {d.text}
      </div>
      <div className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.625rem] 2xl:leading-3.5 2xl:tracking-[1.4px] 2xl:uppercase">
        {d.text2}
      </div>
      <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_1280/854] align-middle h-full 2xl:hidden" data-component="image" alt={d.alt} height="854" src={d.imgSrc} width="1280" />
      {" "}
    </div>
  );
}
