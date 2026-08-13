export type FeatureCardData = {
  href: string;
  title: string;
  description: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <a className="border border-solid border-border block p-6 rounded-3xl bg-background cursor-pointer hover:shadow-[var(--clr-16)_0px_4px_16px_0px] hover:transform-[matrix(1,0,0,1,0,-2)]" data-component="link" href={d.href}>
      <span className="inline-block mb-2 text-color-007 text-xs font-bold leading-[1.25rem] tracking-[0.6px] uppercase">
        AI Visibility
      </span>
      <h3 className="block mb-2 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-lg [font-weight:1000] leading-[1.4375rem] tracking-[-0.45px] uppercase [overflow-wrap:break-word]" data-component="heading">
        {d.title}
      </h3>
      <p className="block mb-3 text-color-009 text-sm leading-[1.3125rem]">
        {d.description}
      </p>
      <span className="inline text-color-009 text-xs leading-[1.25rem]">
        {d.label}
      </span>
    </a>
  );
}
