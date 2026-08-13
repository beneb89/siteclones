export type CardLinkData = {
  href: string;
  title: string;
  description: string;
  date: string;
};
/** A linked card. */
export default function CardLink({ d }: { d: CardLinkData }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <div className="block mb-4 overflow-hidden aspect-[3/2]">
        <img className="w-full block max-w-full overflow-clip object-cover align-middle h-full" data-component="image" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      </div>
      <h3 className="block text-color-001 [font-family:ABCSynt,_Georgia,_serif] text-base font-medium leading-[1.125rem] tracking-[-0.32px]" data-component="heading">
        {d.title}
      </h3>
      <p className="mt-2 overflow-hidden text-muted-foreground text-sm leading-5 line-clamp-2">
        {d.description}
      </p>
      <time className="block mt-2 text-muted-foreground text-xs leading-4">
        {d.date}
      </time>
    </a>
  );
}
