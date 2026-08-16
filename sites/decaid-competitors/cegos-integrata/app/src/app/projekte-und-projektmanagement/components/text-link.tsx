export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="grid py-[0.9375rem] px-2.5 items-center gap-2.5 cursor-pointer grid-cols-[1fr_repeat(2,minmax(0,0.5fr))] max-md:grid-cols-[1fr]" data-component="link" href={d.href}>
      <div className="block font-semibold">
        {d.label}
      </div>
      <div className="w-[68.95rem] block max-md:w-[19.6875rem] md:max-lg:w-177 2xl:w-[71.5625rem]" />
      <div className="block text-primary whitespace-nowrap text-nowrap" />
    </a>
  );
}
