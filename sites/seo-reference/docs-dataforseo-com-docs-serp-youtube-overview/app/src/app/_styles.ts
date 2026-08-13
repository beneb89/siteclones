// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type MediaLinkStyles = {
  className: string;
  className2?: string;
};
export type ListRowStyles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
};

export const MediaLink_styles: MediaLinkStyles[] = [
    { className: "after:content-['Copy_URL'] after:-right-[2.8125rem] after:w-[5.0625rem]" },
    { className: "after:content-['Send_via_Email'] after:-right-[4.4375rem] after:w-[6.6875rem] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]", className2: "hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" },
    { className: "after:content-['Share'] after:-right-5.5 after:w-14.5" }
];
export const ListRow_styles: ListRowStyles[] = [
    { className: "hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-17 focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" },
    { className: "hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-20 focus:text-clr-20 focus:outline-clr-20 focus:[text-decoration-color:var(--clr-20)]" },
    { className: "hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-17 focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" },
    { className: "hover:border-clr-6 hover:text-clr-6 hover:outline-clr-6 hover:[text-decoration-color:var(--clr-6)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "border-border bg-border pointer-events-none hover:bg-clr-8 hover:border-clr-8 focus:bg-color-001 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" },
    { className: "border-clr-1 hover:bg-clr-12 hover:border-clr-12 focus:bg-clr-22 focus:border-clr-22 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" },
    { className: "border-clr-1 hover:bg-clr-12 hover:border-clr-12 focus:bg-clr-22 focus:border-clr-22 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" },
    { className: "border-clr-1 hover:bg-clr-12 hover:border-clr-12 focus:bg-clr-22 focus:border-clr-22 focus:text-clr-23 focus:outline-clr-23 focus:[text-decoration-color:var(--clr-23)]" },
    { className: "border-clr-1 hover:bg-clr-12 hover:border-clr-12 focus:bg-clr-22 focus:border-clr-22 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" }
];
