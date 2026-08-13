export type CardLink2Data = {
  href: string;
  alt: string;
  title: string;
};
/** A linked card. */
export default function CardLink2({ d }: { d: CardLink2Data }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <div className="block rounded-sm overflow-hidden">
        <img className="w-full h-42 block max-w-full overflow-clip object-cover align-middle aspect-video max-md:h-46 md:max-lg:h-48.5" data-component="image" alt={d.alt} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      </div>
      <h3 className="block mt-3 text-color-001 [font-family:ABCSynt,_Georgia,_serif] text-base font-medium leading-[1.125rem] tracking-[-0.32px]" data-component="heading">
        {d.title}
      </h3>
    </a>
  );
}
