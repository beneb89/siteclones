// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type LogoStyles = {
  className: string;
  className2: string;
  className3: string;
};
export type TileStyles = {
  className: string;
};

export const Logo_styles: LogoStyles[] = [
    { className: "max-md:invisible", className2: "max-md:invisible", className3: "max-md:invisible before:content-['Discussions'] before:w-[82.5px]" },
    { className: "max-md:invisible", className2: "max-md:invisible", className3: "max-md:invisible before:content-['Actions'] before:w-[51.3px]" },
    { className: "max-lg:invisible", className2: "max-lg:invisible", className3: "max-lg:invisible before:content-['Projects'] before:w-[55.3px]" }
];
export const Tile_styles: TileStyles[] = [
    { className: "bg-background" },
    { className: "bg-surface" },
    { className: "bg-background" },
    { className: "bg-surface" },
    { className: "bg-background" },
    { className: "bg-surface" }
];
