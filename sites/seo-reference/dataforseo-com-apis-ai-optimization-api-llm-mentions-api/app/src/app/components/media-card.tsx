export type MediaCardData = {
  title: string;
  description: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="border border-solid border-border flex py-8 px-4 rounded-md justify-between items-start gap-4 bg-background shadow-[var(--clr-16)_0px_0px_10px_0px]">
      <div className="block flex-1">
        <h3 className="block mb-2 text-color-001 text-lg font-semibold leading-[1.4375rem] max-lg:text-[0.9375rem] max-lg:leading-[1.25rem]" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted font-medium leading-[1.4375rem]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
      <img className="w-25 h-25 block max-w-full shrink-0 overflow-clip object-contain aspect-[auto_150/150] align-middle" data-component="image" alt={d.alt} height="150" src={d.imgSrc} title={d.label} width="150" />
      {" "}
    </div>
  );
}
