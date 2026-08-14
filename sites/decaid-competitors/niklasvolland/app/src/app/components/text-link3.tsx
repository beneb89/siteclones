export type TextLink3Data = {
  href: string;
  label: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="border border-solid border-border flex relative p-10 rounded-3xl flex-col overflow-hidden bg-border cursor-pointer" data-component="link" href={d.href}>
      {" "}
      <div className="block mb-4 text-primary text-[0.8125rem] font-bold leading-[1.3125rem] tracking-[1.5px] uppercase">
        {d.label}
      </div>
      {" "}
      <h3 className="block mb-4 text-2xl font-bold leading-[2.375rem] tracking-[-0.48px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-6 flex-1 text-muted-foreground text-sm leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border flex pt-5 justify-between items-center">
        <span className="flex items-center gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.3125rem]">
          Mehr erfahren →
        </span>
        {" "}
      </div>
      {" "}
    </a>
  );
}
