export type Tile5Data = {
  id: string;
  text: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <blockquote className="border-l-2 border-solid border-l-color-008 block relative mb-[0.6rem] py-[0.7rem] px-4 text-color-005 text-[0.8125rem] italic leading-[1.3125rem] bg-surface-3" id={d.id}>
      {d.text}
      <cite className="block mt-[0.4rem] text-color-003 [font-family:ui-monospace,_Menlo,_'Courier_New',_monospace] text-[0.6875rem] not-italic leading-[1.125rem]">
        <a className="border-b border-dotted border-b-accent inline cursor-pointer" data-component="link" href="https://sparktoro.com/blog/audience-research-the-complete-guide-for-marketers">
          Audience Research: The Complete Guide for Marketers in 2025 - SparkToro
        </a>
        {" — published by SparkToro"}
      </cite>
      {" "}
      <span className="inline mt-[0.2rem] text-color-003 [font-family:ui-monospace,_Menlo,_'Courier_New',_monospace] text-[0.625rem] not-italic leading-4">
        retrieved 22 Jun 2026
      </span>
      {" "}
    </blockquote>
  );
}
