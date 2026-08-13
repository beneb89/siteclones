// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type FeatureCardStyles = {
  className: string;
};
export type FeatureCard2Styles = {
  className: string;
  className2: string;
};
export type FeatureCard3Styles = {
  className: string;
};
export type ListRowStyles = {
  className?: string;
};

export const FeatureCard_styles: FeatureCardStyles[] = [
    { className: "mr-7.5 max-md:mr-0 md:max-lg:mr-[0.9375rem]" },
    { className: "mr-7.5 max-lg:mr-0 md:max-lg:shrink-0 md:max-lg:grow-[initial]" },
    { className: "md:max-lg:shrink-0 md:max-lg:grow-[initial]" }
];
export const FeatureCard2_styles: FeatureCard2Styles[] = [
    { className: "pr-3 max-lg:pl-3", className2: "max-md:pt-8.5" },
    { className: "px-3", className2: "max-md:pt-[3.0625rem]" },
    { className: "px-3", className2: "max-md:pt-[3.0625rem]" }
];
export const FeatureCard3_styles: FeatureCard3Styles[] = [
    { className: "pr-3 max-lg:pl-3" },
    { className: "px-3" },
    { className: "px-3" }
];
export const ListRow_styles: ListRowStyles[] = [
    {  },
    { className: "whitespace-nowrap" },
    { className: "whitespace-nowrap" },
    {  },
    { className: "whitespace-nowrap" },
    { className: "whitespace-nowrap" }
];
