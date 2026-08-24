export type ListRow3Data = {
  description: string;
  href: string;
  description2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item relative pl-6 [list-style-type:none] list-outside 2xl:pl-9 before:content-['•'] before:block before:absolute before:top-0 before:right-[576.1px] before:bottom-[0.55rem] before:left-0 before:text-foreground before:text-base before:leading-[1.375rem] before:text-center max-md:before:right-[19.9375rem] max-md:before:bottom-10 max-lg:before:text-base max-lg:before:leading-[1.375rem] md:max-lg:before:right-156 md:max-lg:before:bottom-[0.55rem] 2xl:before:right-216 2xl:before:-bottom-[0.15rem] 2xl:before:text-2xl 2xl:before:leading-[2.125rem]">
      <p className="h-full block [font-family:'PP_Mori'] text-lg leading-[1.9375rem]">
        {d.description}
        <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer">
          {d.description2}
        </a>
        )
      </p>
      {" "}
    </li>
  );
}
