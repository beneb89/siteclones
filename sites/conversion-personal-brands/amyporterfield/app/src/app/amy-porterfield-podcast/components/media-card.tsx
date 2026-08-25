export type MediaCardData = {
  href: string;
  title: string;
  href2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="box-content border-t border-solid border-t-accent flex my-4 pt-8 pb-4 justify-between items-center max-md:flex-wrap">
      <div className="box-content w-[65%] block max-md:w-3/4 max-md:order-[2]">
        <h3 className="box-content block" data-component="heading">
          <a className="box-content inline text-accent [font-family:'Ivy_Presto_Display_Regular'] text-[1.75rem] leading-[1.9375rem] text-left cursor-pointer max-md:text-[1.375rem] max-md:leading-[1.5rem]" data-component="link" href={d.href}>
            {d.title}
          </a>
        </h3>
      </div>
      <div className="box-content w-[7%] block relative max-md:w-[22.5%] max-md:order-[3]">
        <a className="box-content inline cursor-pointer" data-component="link" href={d.href2}>
          <svg className="box-content w-auto h-15 inline max-w-15 overflow-hidden" data-component="image" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <defs />
            <path d="M25 46.57c-11.81 0-21.53-9.71-21.53-21.61S13.19 3.43 25 3.43s21.53 9.71 21.53 21.53S36.9 46.57 25 46.57Zm0-42.26c-11.38 0-20.65 9.27-20.65 20.65S13.63 45.61 25 45.61s20.65-9.28 20.65-20.65S36.46 4.31 25 4.31Z" />
            <path d="m29.99 24.96-8.05-5.87v11.82l8.05-5.95z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
