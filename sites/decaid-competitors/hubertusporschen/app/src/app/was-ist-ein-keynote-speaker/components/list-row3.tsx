export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item relative pl-5 text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden before:content-['—'] before:block before:absolute before:inset-y-0 before:right-[425.5px] before:left-0 before:w-[0.9375rem] before:h-[22.5px] before:text-accent before:text-[0.9375rem] before:leading-[1.4375rem] max-md:before:right-55.5 md:max-lg:before:right-[220.7px] 2xl:before:hidden">
      {d.text}
    </li>
  );
}
