// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type MediaLinkStyles = {
  className: string;
  className2?: string;
};
export type TextLinkStyles = {
  className: string;
};

export const MediaLink_styles: MediaLinkStyles[] = [
    { className: "after:content-['Copy_URL'] after:-right-[2.8125rem] after:w-[5.0625rem] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]", className2: "hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" },
    { className: "after:content-['Send_via_Email'] after:-right-[4.4375rem] after:w-[6.6875rem]" },
    { className: "after:content-['Share'] after:-right-5.5 after:w-14.5" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "border-border bg-border pointer-events-none hover:bg-clr-8 hover:border-clr-8 focus:bg-color-001" },
    { className: "border-clr-1 hover:bg-clr-14 hover:border-clr-14 focus:bg-clr-24 focus:border-clr-24" },
    { className: "border-clr-1 hover:bg-clr-14 hover:border-clr-14 focus:bg-clr-24 focus:border-clr-24" },
    { className: "border-clr-1 hover:bg-clr-14 hover:border-clr-14 focus:bg-clr-24 focus:border-clr-24" },
    { className: "border-clr-1 hover:bg-clr-14 hover:border-clr-14 focus:bg-clr-24 focus:border-clr-24" }
];
