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
export type ListRow3Styles = {
  className?: string;
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
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" },
    { className: "whitespace-nowrap after:content-[''] after:block after:w-0 after:h-0 after:mt-0.5 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" },
    { className: "whitespace-nowrap after:content-[''] after:block after:w-0 after:h-0 after:mt-0.5 hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] focus:border-clr-10 focus:text-clr-10 focus:outline-clr-10 focus:[text-decoration-color:var(--clr-10)]" },
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" },
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" },
    { className: "hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" }
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
export const ListRow3_styles: ListRow3Styles[] = [
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border" },
    { className: "border-b border-dashed border-b-border", className2: "whitespace-nowrap" },
    { className: "border-b border-dashed border-b-border", className2: "whitespace-nowrap" },
    {  }
];
export const LogoCloudItem_styles: LogoCloudItemStyles[] = [
    { rootClassName: "box-content h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "box-content w-14 h-8.5 inline max-w-full overflow-clip aspect-[auto_56/34]" },
    { rootClassName: "box-content h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "box-content w-14 h-8.5 inline max-w-full overflow-clip aspect-[auto_56/34]" },
    { rootClassName: "box-content h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "box-content w-14 h-8.5 inline max-w-full overflow-clip aspect-[auto_56/34]" }
];
