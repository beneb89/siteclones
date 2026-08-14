export type MediaCardData = {
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="border-t-[3px] border-solid border-t-border block p-[1.8625rem] bg-surface-2 max-md:p-7 2xl:hidden">
      <div className="block mb-3 text-muted-foreground 2xl:hidden">
        <svg className="block overflow-hidden align-middle w-6 h-6 2xl:hidden" data-component="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {" "}
      </div>
      {" "}
      <h3 className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-semibold leading-[1.375rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
