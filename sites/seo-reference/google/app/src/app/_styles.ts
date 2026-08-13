// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type TileStyles = {
  className: string;
  className2: string;
};
export type ListRowStyles = {
  className: string;
};

export const Tile_styles: TileStyles[] = [
    { className: "w-20.5", className2: "hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" },
    { className: "w-26", className2: "hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" },
    { className: "w-44.5", className2: "hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" },
    { className: "w-21", className2: "after:content-[''] after:block after:absolute after:top-[2.8125rem] after:bottom-0 after:inset-x-5.5 after:w-10 after:h-[0.1875rem] after:rounded-tl-[3px] max-lg:after:top-auto max-lg:after:w-auto max-lg:after:h-auto" },
    { className: "w-[5.5625rem]", className2: "hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" }
];
export const ListRow_styles: ListRowStyles[] = [
    { className: "h-6" },
    { className: "h-6" },
    { className: "h-6" },
    { className: "h-6" },
    { className: "w-[16.3125rem] h-10" }
];
