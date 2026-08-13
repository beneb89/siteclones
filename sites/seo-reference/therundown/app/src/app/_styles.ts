// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type NavLinkStyles = {
  className: string;
};
export type ListRow2Styles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
};

export const NavLink_styles: NavLinkStyles[] = [
    { className: "text-color-004 hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" },
    { className: "text-color-004 hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" },
    { className: "after:content-[''] after:block after:absolute after:top-15.5 after:bottom-0 after:inset-x-3 after:w-12 after:h-0.5 after:bg-foreground max-lg:after:top-auto max-lg:after:w-auto" },
    { className: "text-color-004 hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" },
    { className: "text-color-004 hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" }
];
export const ListRow2_styles: ListRow2Styles[] = [
    { className: "before:bottom-[56.7px] max-md:before:bottom-[104.7px] md:max-lg:before:bottom-[32.7px]" },
    { className: "before:bottom-[32.7px] max-md:before:bottom-[56.7px] md:max-lg:before:bottom-[8.7px]" },
    { className: "before:bottom-[8.7px]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "pb-3" },
    { className: "py-3" },
    { className: "py-3" },
    { className: "py-3" }
];
