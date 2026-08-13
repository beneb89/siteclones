// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type MediaLinkStyles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
};
export type Tile3Styles = {
  className: string;
  className2: string;
};
export type Tile4Styles = {
  className: string;
  className2: string;
};

export const MediaLink_styles: MediaLinkStyles[] = [
    { className: "after:content-['Copy_URL'] after:-right-[2.8125rem] after:w-[5.0625rem] hover:border-color-005 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" },
    { className: "after:content-['Send_via_Email'] after:-right-[4.4375rem] after:w-[6.6875rem] hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)]" },
    { className: "after:content-['Share'] after:-right-5.5 after:w-14.5 hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-color-004 focus:[text-decoration-color:var(--color-004)]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "border-border bg-border pointer-events-none hover:bg-clr-18 hover:border-clr-18 focus:text-clr-55 focus:outline-clr-55 focus:[text-decoration-color:var(--clr-55)]" },
    { className: "border-clr-1 hover:bg-clr-20 hover:border-clr-20 focus:bg-color-002 focus:border-color-002 focus:text-clr-55 focus:outline-clr-55 focus:[text-decoration-color:var(--clr-55)]" },
    { className: "border-clr-1 hover:bg-clr-20 hover:border-clr-20 focus:bg-color-002 focus:border-color-002 focus:text-clr-55 focus:outline-clr-55 focus:[text-decoration-color:var(--clr-55)]" },
    { className: "border-clr-1 hover:bg-clr-20 hover:border-clr-20 focus:bg-color-002 focus:border-color-002 focus:text-clr-55 focus:outline-clr-55 focus:[text-decoration-color:var(--clr-55)]" },
    { className: "border-clr-1 hover:bg-clr-20 hover:border-clr-20 focus:bg-color-002 focus:border-color-002 focus:text-clr-56 focus:outline-clr-56 focus:[text-decoration-color:var(--clr-56)]" }
];
export const Tile3_styles: Tile3Styles[] = [
    { className: "top-3.5", className2: "text-accent" },
    { className: "top-7", className2: "text-color-007" },
    { className: "top-10.5", className2: "text-accent" },
    { className: "top-14", className2: "text-accent" },
    { className: "top-17.5", className2: "text-color-007" },
    { className: "top-21", className2: "text-color-007" },
    { className: "top-24.5", className2: "text-color-007" }
];
export const Tile4_styles: Tile4Styles[] = [
    { className: "top-35", className2: "text-accent" },
    { className: "top-38.5", className2: "text-color-007" },
    { className: "top-42", className2: "text-accent" },
    { className: "top-45.5", className2: "text-accent" },
    { className: "top-49", className2: "text-color-007" },
    { className: "top-52.5", className2: "text-color-007" }
];
