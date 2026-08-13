export type MediaTileData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  label2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="w-[282.5px] h-[6.8125rem] min-h-px block relative float-left max-md:w-75 max-md:[float:initial] md:max-lg:w-[157.5px] md:max-lg:h-15">
      <div className="h-full block px-[0.9375rem] md:max-lg:px-[0.3125rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
        <div className="box-content block">
          <div className="box-content block">
            <div className="box-content block">
              <div className="box-content border border-solid border-border block mb-[0.9375rem] mx-2.5 p-[0.9375rem] rounded-lg bg-background shadow-[var(--clr-4)_0px_10px_42px_7px] md:max-lg:p-2.5 md:max-lg:mx-0">
                <a className="box-content flex items-center text-primary cursor-pointer" data-component="link" href={d.href}>
                  {" "}
                  <div className="box-content block max-w-12.5 mt-[0.3125rem] mr-[0.3125rem] md:max-lg:hidden">
                    <img className="box-content w-12.5 h-12.5 inline max-w-full overflow-clip" data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
                  </div>
                  {" "}
                  <div className="box-content block text-color-002 text-[0.9375rem] font-semibold md:max-lg:text-[0.75rem] hover:border-clr-8 hover:text-clr-8 hover:outline-clr-8 hover:[text-decoration-color:var(--clr-8)]">
                    {d.label2}
                  </div>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </div>
  );
}
