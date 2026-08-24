export type ListRow5Data = {
  description: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item relative pl-6 [list-style-type:none] list-outside 2xl:pl-9 before:content-['•'] before:block before:absolute before:top-0 before:right-[576.1px] before:bottom-[0.55rem] before:left-0 before:text-foreground before:text-base before:leading-[1.375rem] before:text-center max-md:before:right-[19.9375rem] max-lg:before:bottom-[0.55rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] md:max-lg:before:right-156 2xl:before:right-216 2xl:before:-bottom-[0.15rem] 2xl:before:text-2xl 2xl:before:leading-[2.125rem]">
      <p className="block [font-family:'PP_Mori'] text-lg leading-[1.9375rem]">
        {d.description}
      </p>
      {" "}
    </li>
  );
}
