export type TextLink2Data = {
  href: string;
  text: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="h-[1.7rem] flex py-1 px-2.5 rounded-[999px] items-center gap-1 text-color-002 text-xs font-semibold leading-[1.1875rem] whitespace-nowrap text-nowrap bg-surface-4 cursor-pointer max-lg:max-w-full max-lg:[white-space:inherit] max-lg:[text-wrap:initial]" data-component="button" href={d.href}>
      <b className="block font-black">
        DataForSEO
      </b>
      {" vs "}
      <b className="block font-black">
        {d.text}
      </b>
      {" →"}
    </a>
  );
}
