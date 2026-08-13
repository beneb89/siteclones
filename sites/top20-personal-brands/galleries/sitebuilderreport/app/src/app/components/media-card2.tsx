export type MediaCard2Data = {
  href: string;
  imgSrc: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d }: { d: MediaCard2Data }) {
  return (
    <li className="box-content list-item">
      <a className="box-content inline text-primary cursor-pointer" data-component="link" href={d.href}>
        {" "}
        <img className="box-content w-86 h-[11.5625rem] border border-solid border-border inline rounded-[3px] overflow-clip max-md:w-36 max-md:h-19.5 md:max-lg:w-49.5 md:max-lg:h-[6.6875rem] 2xl:w-121.5 2xl:h-[16.3125rem] hover:transform-[none] focus:transform-[none]" data-component="image" src={d.imgSrc} />
        {" "}
        <h4 className="box-content block mt-[0.3125rem] text-color-001 font-semibold leading-[1.375rem] max-md:text-[0.9375rem] max-md:leading-[1.25rem]" data-component="heading">
          {d.title}
        </h4>
        {" "}
      </a>
      {" "}
    </li>
  );
}
