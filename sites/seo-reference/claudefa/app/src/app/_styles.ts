// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type TileStyles = {
  className2?: string;
  className3: string;
  className?: string;
};
export type Tile2Styles = {
  className: string;
  className2?: string;
};
export type MediaTile2Styles = {
  className?: string;
};

export const Tile_styles: TileStyles[] = [
    { className2: "2xl:whitespace-nowrap", className3: "2xl:text-accent" },
    { className2: "2xl:whitespace-nowrap", className3: "2xl:text-accent" },
    { className3: "2xl:text-clr-22" },
    { className2: "2xl:whitespace-nowrap", className3: "2xl:text-clr-22" },
    { className: "2xl:bg-clr-23 2xl:shadow-[var(--clr-5)_0px_0px_0px_0px,var(--clr-24)_0px_0px_0px_1px,var(--clr-0)_0px_0px_0px_0px]", className3: "2xl:text-clr-0 2xl:[background-clip:text] 2xl:[-webkit-background-clip:text] 2xl:[-webkit-text-fill-color:var(--clr-0)]" }
];
export const Tile2_styles: Tile2Styles[] = [
    { className: "2xl:w-27.5" },
    { className: "2xl:w-[157.9px]", className2: "2xl:whitespace-nowrap" },
    { className: "2xl:w-27.5" },
    { className: "2xl:w-[122.3px]", className2: "2xl:whitespace-nowrap" }
];
export const MediaTile2_styles: MediaTile2Styles[] = [
    {  },
    { className: "2xl:mt-3" },
    { className: "2xl:mt-3" },
    { className: "2xl:mt-3" },
    { className: "2xl:mt-3" },
    { className: "2xl:mt-3" },
    { className: "2xl:mt-3" }
];
