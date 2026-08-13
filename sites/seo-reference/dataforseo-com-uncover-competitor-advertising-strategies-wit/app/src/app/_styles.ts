// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type TileStyles = {
  className: string;
};
export type ListRowStyles = {
  className: string;
};
export type ListRow2Styles = {
  className: string;
};
export type ListRow3Styles = {
  className?: string;
};
export type ListRow4Styles = {
  className: string;
};
export type LogoStyles = {
  className?: string;
};
export type MediaCardStyles = {
  className?: string;
};
export type ListRow8Styles = {
  className: string;
};
export type LogoCloudItemStyles = {
  rootClassName?: string;
  linkClassName?: string;
  innerClassName?: string;
  imgClassName?: string;
  tooltipClassName?: string;
};

export const Tile_styles: TileStyles[] = [
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" },
    { className: "whitespace-nowrap after:content-[''] after:block after:w-2 after:h-1 after:mt-0.5 max-lg:after:w-0 max-lg:after:h-0 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" },
    { className: "whitespace-nowrap after:content-[''] after:block after:w-2 after:h-1 after:mt-0.5 max-lg:after:w-0 max-lg:after:h-0 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" },
    { className: "whitespace-nowrap hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" },
    { className: "whitespace-nowrap hover:border-clr-12 hover:text-clr-12 hover:outline-clr-12 hover:[text-decoration-color:var(--clr-12)]" },
    { className: "hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" }
];
export const ListRow_styles: ListRowStyles[] = [
    { className: "before:inset-x-[50.5px] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[4px_4px] 2xl:after:hidden" },
    { className: "before:inset-x-[3.9375rem] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[4px_4px] 2xl:after:hidden" },
    { className: "before:inset-x-[52.5px] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[4px_4px] 2xl:after:hidden" },
    { className: "before:inset-x-[42.5px]" },
    { className: "whitespace-nowrap before:inset-x-[5.0625rem] after:content-[''] after:block after:w-2 after:h-2 after:-mt-1 after:ml-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[4px_4px] 2xl:after:hidden" }
];
export const ListRow2_styles: ListRow2Styles[] = [
    { className: "border-b border-solid border-b-surface-2 max-lg:h-[3.0625rem]" },
    { className: "border-b border-solid border-b-surface-2 max-lg:h-[3.0625rem]" },
    { className: "max-lg:h-12" }
];
export const ListRow3_styles: ListRow3Styles[] = [
    {  },
    { className: "before:content-['»'] before:block before:w-2 before:h-[1.4rem] before:text-color-004 before:text-sm before:font-medium before:leading-[1.375rem]" },
    { className: "before:content-['»'] before:block before:w-2 before:h-[1.4rem] before:text-color-004 before:text-sm before:font-medium before:leading-[1.375rem]" }
];
export const ListRow4_styles: ListRow4Styles[] = [
    { className: "text-color-003 font-semibold" },
    { className: "hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" },
    { className: "hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" }
];
export const Logo_styles: LogoStyles[] = [
    {  },
    { className: "focus:transform-[matrix(1,0,0,1,0,-1.25404e-08)]" },
    { className: "focus:transform-[matrix(1,0,0,1,0,-1.92007e-09)]" },
    {  }
];
export const MediaCard_styles: MediaCardStyles[] = [
    {  },
    { className: "mt-6.5 max-md:mt-0 md:max-lg:mt-[3.1875rem]" },
    { className: "mt-6.5 max-lg:mt-0" }
];
export const ListRow8_styles: ListRow8Styles[] = [
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" },
    { className: "focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" }
];
export const LogoCloudItem_styles: LogoCloudItemStyles[] = [
    { rootClassName: "h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "w-14 h-8.5 block max-w-full overflow-clip aspect-[auto_56/34] align-middle" },
    { rootClassName: "h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "w-14 h-8.5 block max-w-full overflow-clip aspect-[auto_56/34] align-middle" },
    { rootClassName: "h-8.5 border-t border-solid border-t-background border-b border-b-background inline-block mr-[0.3125rem] rounded-[3px] overflow-hidden bg-background", imgClassName: "w-14 h-8.5 block max-w-full overflow-clip aspect-[auto_56/34] align-middle" }
];
