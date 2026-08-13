// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type MediaLinkStyles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
};

export const MediaLink_styles: MediaLinkStyles[] = [
    { className: "after:content-['Copy_URL'] after:-right-[2.8125rem] after:w-[5.0625rem]" },
    { className: "after:content-['Send_via_Email'] after:-right-[4.4375rem] after:w-[6.6875rem]" },
    { className: "after:content-['Share'] after:-right-5.5 after:w-14.5" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "border-border bg-border pointer-events-none hover:bg-clr-9 hover:border-clr-9 focus:bg-color-001" },
    { className: "border-clr-1 hover:bg-clr-11 hover:border-clr-11 focus:bg-clr-23 focus:border-clr-23" },
    { className: "border-clr-1 hover:bg-clr-11 hover:border-clr-11 focus:bg-clr-23 focus:border-clr-23" },
    { className: "border-clr-1 hover:bg-clr-11 hover:border-clr-11 focus:bg-clr-23 focus:border-clr-23" },
    { className: "border-clr-1 hover:bg-clr-11 hover:border-clr-11 focus:bg-clr-23 focus:border-clr-23" }
];
