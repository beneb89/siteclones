// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type MediaLinkStyles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
};

export const MediaLink_styles: MediaLinkStyles[] = [
    { className: "after:content-['Copy_URL'] after:-right-[2.8125rem] after:w-[5.0625rem] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" },
    { className: "after:content-['Send_via_Email'] after:-right-[4.4375rem] after:w-[6.6875rem]" },
    { className: "after:content-['Share'] after:-right-5.5 after:w-14.5" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "border-border bg-border pointer-events-none hover:bg-clr-8 hover:border-clr-8 focus:bg-color-001 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" },
    { className: "border-clr-1 hover:bg-clr-9 hover:border-clr-9 focus:bg-clr-22 focus:border-clr-22 focus:text-clr-23 focus:outline-clr-23 focus:[text-decoration-color:var(--clr-23)]" },
    { className: "border-clr-1 hover:bg-clr-9 hover:border-clr-9 focus:bg-clr-24 focus:border-clr-24 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" },
    { className: "border-clr-1 hover:bg-clr-9 hover:border-clr-9 focus:bg-clr-24 focus:border-clr-24 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" },
    { className: "border-clr-1 hover:bg-clr-9 hover:border-clr-9 focus:bg-clr-24 focus:border-clr-24 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" }
];
