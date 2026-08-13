// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type TileStyles = {
  className: string;
};
export type ListRowStyles = {
  className: string;
};
export type ListRow2Styles = {
  className?: string;
};
export type MediaTileStyles = {
  className: string;
};
export type FeatureGridItemStyles = {
  className: string;
  className2: string;
};
export type ListRow3Styles = {
  className: string;
};
export type LogoStyles = {
  className?: string;
  className2: string;
  className3: string;
  className4: string;
  className5: string;
  className6: string;
};
export type MediaCardStyles = {
  className2?: string;
  className3: string;
  className4: string;
  className?: string;
};
export type MediaCard2Styles = {
  className?: string;
  className3: string;
  className4: string;
  className2?: string;
};
export type LogoCloudItemStyles = {
  rootClassName?: string;
  linkClassName?: string;
  innerClassName?: string;
  imgClassName?: string;
  tooltipClassName?: string;
};

export const Tile_styles: TileStyles[] = [
    { className: "whitespace-nowrap hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" },
    { className: "whitespace-nowrap after:content-[''] after:block after:w-0 after:h-0 after:mt-0.5 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" },
    { className: "whitespace-nowrap after:content-[''] after:block after:w-0 after:h-0 after:mt-0.5 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" },
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" },
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-clr-35 focus:text-clr-35 focus:outline-clr-35 focus:[text-decoration-color:var(--clr-35)]" },
    { className: "hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" }
];
export const ListRow_styles: ListRowStyles[] = [
    { className: "before:inset-x-[50.5px] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[5px_5px] 2xl:after:hidden" },
    { className: "before:inset-x-[3.9375rem] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[5px_5px] 2xl:after:hidden" },
    { className: "before:inset-x-[52.5px] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[5px_5px] 2xl:after:hidden" },
    { className: "before:inset-x-[42.5px]" },
    { className: "whitespace-nowrap before:inset-x-[5.0625rem] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[5px_5px] 2xl:after:hidden" }
];
export const ListRow2_styles: ListRow2Styles[] = [
    { className: "border-b border-solid border-b-clr-0" },
    { className: "border-b border-solid border-b-clr-0" },
    {  }
];
export const MediaTile_styles: MediaTileStyles[] = [
    { className: "md:max-lg:h-57.5" },
    { className: "md:max-lg:h-57.5" },
    { className: "md:max-lg:h-[15.8125rem]" }
];
export const FeatureGridItem_styles: FeatureGridItemStyles[] = [
    { className: "h-[467.7px] max-md:h-[22.5rem] md:max-lg:h-[371.9px]", className2: "mb-5" },
    { className: "h-57.5 max-md:h-51.5 md:max-lg:h-83", className2: "mb-5" },
    { className: "h-54.5 max-md:h-53.5 md:max-lg:h-[19.6875rem]", className2: "h-full" }
];
export const ListRow3_styles: ListRow3Styles[] = [
    { className: "border-b-primary rounded-tl-[3px] rounded-bl-[3px] text-primary" },
    { className: "border-b-border text-background max-lg:text-clr-8" },
    { className: "border-b-border text-background max-lg:text-clr-8" },
    { className: "border-b-border rounded-tr-[3px] rounded-br-[3px] text-background max-lg:text-clr-8" }
];
export const Logo_styles: LogoStyles[] = [
    { className: "max-lg:clear-both", className2: "h-[2.4375rem]", className3: "hover:opacity-[0.993299]", className4: "w-30 h-[1.1875rem]", className5: "w-30 h-[1.1875rem]", className6: "w-30 h-[1.1875rem]" },
    { className2: "h-[3.0625rem]", className3: "hover:opacity-[0.996815]", className4: "w-29.5 h-[1.8125rem]", className5: "w-29.5 h-[1.8125rem]", className6: "w-29.5 h-[1.8125rem]" },
    { className: "max-md:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993299]", className4: "w-27.5 h-[2.0625rem]", className5: "w-27.5 h-[2.0625rem]", className6: "w-27.5 h-[2.0625rem]" },
    { className: "md:max-lg:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993277]", className4: "w-26.5 h-[2.0625rem]", className5: "w-26.5 h-[2.0625rem]", className6: "w-26.5 h-[2.0625rem]" },
    { className: "max-md:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993299]", className4: "w-20.5 h-[2.0625rem]", className5: "w-20.5 h-[2.0625rem]", className6: "w-20.5 h-[2.0625rem]" },
    { className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993277]", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" },
    { className: "max-lg:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-100", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" },
    { className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993277]", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" },
    { className: "max-md:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993299]", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" },
    { className: "md:max-lg:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993277]", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" },
    { className: "max-md:clear-both", className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993299]", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" },
    { className2: "h-[3.3125rem]", className3: "hover:opacity-[0.993299]", className4: "w-30 h-[2.0625rem]", className5: "w-30 h-[2.0625rem]", className6: "w-30 h-[2.0625rem]" }
];
export const MediaCard_styles: MediaCardStyles[] = [
    { className2: "mb-10", className3: "hover:opacity-[0.889333]", className4: "before:right-[8.1875rem]" },
    { className2: "mb-10", className3: "hover:opacity-[0.889333]", className4: "before:right-[9.3125rem]" },
    { className2: "mb-10", className3: "hover:opacity-[0.889442]", className4: "before:right-33.5" },
    { className: "max-md:h-[12.225rem]", className3: "hover:opacity-[0.889224]", className4: "before:right-33" }
];
export const MediaCard2_styles: MediaCard2Styles[] = [
    { className: "max-md:h-[12.225rem]", className3: "hover:opacity-[0.869506] focus:opacity-[0.0803164]", className4: "before:right-30" },
    { className2: "mb-10", className3: "hover:opacity-[0.889442] focus:opacity-[0.0846522]", className4: "before:right-[6.6875rem]" },
    { className2: "mb-10", className3: "hover:opacity-[0.889333] focus:opacity-[0.0845364]", className4: "before:right-[7.4375rem]" },
    { className: "max-md:h-[12.225rem]", className3: "hover:opacity-[0.889442] focus:opacity-[0.0846522]", className4: "before:right-[9.5625rem]" }
];
export const MediaCard2_styles2: MediaCard2Styles[] = [
    { className2: "mb-10", className3: "hover:opacity-[0.889442] focus:opacity-[0.0845364]", className4: "before:right-53" },
    { className: "max-md:h-[12.225rem]", className3: "hover:opacity-[0.869506] focus:opacity-[0.0667154]", className4: "before:right-[10.8125rem]" },
    { className: "max-lg:h-[12.225rem]", className3: "hover:opacity-[0.889442] focus:opacity-[0.0845364]", className4: "before:right-38.5" },
    { className: "max-lg:h-[12.225rem]", className3: "hover:opacity-[0.869506] focus:opacity-[0.0551902]", className4: "before:right-39" }
];
export const LogoCloudItem_styles: LogoCloudItemStyles[] = [
    { rootClassName: "box-content h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "box-content w-14 h-8.5 inline max-w-full overflow-clip aspect-[auto_56/34]" },
    { rootClassName: "box-content h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "box-content w-14 h-8.5 inline max-w-full overflow-clip aspect-[auto_56/34]" },
    { rootClassName: "box-content h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "box-content w-14 h-8.5 inline max-w-full overflow-clip aspect-[auto_56/34]" }
];
