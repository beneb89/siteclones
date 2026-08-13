export type ProductCardData = {
  href: string;
  alt: string;
  title: string;
  description: string;
  label: string;
};
/** A product card. */
export default function ProductCard({ d }: { d: ProductCardData }) {
  return (
    <a className="h-79.5 border border-solid border-surface block rounded-lg overflow-hidden cursor-pointer hover:border-clr-27 hover:shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-24)_0px_4px_6px_-1px,var(--clr-24)_0px_2px_4px_-2px]" data-component="link" href={d.href}>
      <div className="block relative bg-surface-2 h-40">
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-3" data-component="image" alt={d.alt} src="/assets/cloned/svg/dbd837290cfa.svg" />
      </div>
      <div className="block p-4">
        <h3 className="mb-2 overflow-hidden text-color-001 font-semibold line-clamp-2" data-component="heading">
          {d.title}
        </h3>
        <p className="mb-3 overflow-hidden text-color-002 text-sm leading-5 line-clamp-2">
          {d.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="block text-muted text-xs leading-4">
            {d.label}
          </span>
          <span className="block text-primary text-xs font-medium leading-4">
            Read more →
          </span>
        </div>
      </div>
    </a>
  );
}
