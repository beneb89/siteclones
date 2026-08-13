// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type LogoStyles = {
  className: string;
  className2: string;
};
export type TileStyles = {
  className?: string;
  className2?: string;
};
export type Tile2Styles = {
  className: string;
};
export type Tile3Styles = {
  className?: string;
  className2?: string;
  className3?: string;
};
export type Logo2Styles = {
  className: string;
  className2: string;
};
export type Logo3Styles = {
  className: string;
};

export const Logo_styles: LogoStyles[] = [
    { className: "bg-color-002", className2: "bg-color-002" },
    { className: "bg-clr-2", className2: "bg-clr-2" },
    { className: "bg-clr-3", className2: "bg-clr-3" }
];
export const Tile_styles: TileStyles[] = [
    {  },
    { className: "bg-color-001", className2: "bg-color-001" },
    {  },
    { className: "bg-color-001", className2: "bg-color-001" },
    {  },
    { className: "bg-color-001", className2: "bg-color-001" },
    {  }
];
export const Tile2_styles: Tile2Styles[] = [
    { className: "max-md:w-29.5" },
    { className: "max-md:w-[7.3125rem]" },
    { className: "max-md:w-[9.3125rem]" }
];
export const Tile3_styles: Tile3Styles[] = [
    {  },
    { className: "bg-color-001", className2: "bg-color-001", className3: "bg-color-001" },
    {  },
    { className: "bg-color-001", className2: "bg-color-001", className3: "bg-color-001" },
    {  },
    { className: "bg-color-001", className2: "bg-color-001", className3: "bg-color-001" }
];
export const Logo2_styles: Logo2Styles[] = [
    { className: "h-[216.5px] -top-12.5 right-[4.575rem] left-[56.05rem] max-md:hidden md:max-lg:h-[10.825rem] md:max-lg:right-[43.7px] md:max-lg:left-[484.3px] 2xl:h-[251.1px] 2xl:-top-17.5 2xl:right-[24.475rem] 2xl:left-[68.65rem]", className2: "w-62.5 h-[13.5625rem] aspect-[auto_336/290] md:max-lg:w-50 md:max-lg:h-[10.8125rem] 2xl:w-72.5 2xl:h-[15.6875rem]" },
    { className: "h-[93.7px] top-10 right-247 left-30.5 max-md:h-[76.7px] max-md:-top-[1.5625rem] max-md:right-[14.8625rem] max-md:left-[17.3px] max-md:gap-[0.9375rem] md:max-lg:right-[34.075rem] md:max-lg:left-[4.55rem] 2xl:h-[6.925rem] 2xl:right-323.5 2xl:left-89", className2: "w-27.5 h-23.5 aspect-[auto_130/111] max-md:w-22.5 max-md:h-[4.8125rem] 2xl:w-32.5 2xl:h-[6.9375rem]" },
    { className: "h-[155.9px] right-229.5 -bottom-12.5 left-30.5 max-md:h-[4.875rem] max-md:right-[13.5px] max-md:-bottom-[2.8125rem] max-md:left-[241.5px] max-md:gap-[0.9375rem] md:max-lg:h-[8.125rem] md:max-lg:right-[31.575rem] md:max-lg:left-[4.55rem] 2xl:h-[11.625rem] 2xl:right-[1209.3px] 2xl:left-89", className2: "w-45 h-39 aspect-[auto_214/185] max-md:w-22.5 max-md:h-19.5 md:max-lg:w-37.5 md:max-lg:h-32.5 2xl:w-[13.4375rem] 2xl:h-46.5" }
];
export const Logo3_styles: Logo3Styles[] = [
    { className: "w-50.5 h-[4.3125rem] aspect-[auto_404/138] max-md:w-[9.9375rem] max-md:h-13.5" },
    { className: "w-30 h-30 aspect-[auto_240/240]" },
    { className: "w-[6.0625rem] h-26 aspect-[auto_194/208]" },
    { className: "w-30 h-30 aspect-[auto_240/240]" },
    { className: "w-50.5 h-23.5 aspect-[auto_404/188] max-md:w-[9.9375rem] max-md:h-18.5" }
];
