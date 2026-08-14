import type { ReactNode } from "react";
export type MediaCardData = {
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="border border-solid border-border block relative py-10 px-8 rounded-3xl overflow-hidden max-lg:py-8 max-lg:px-6" style={{ backgroundImage: "linear-gradient(var(--color-004) 0%, var(--color-010) 100%)" }}>
      <div className="w-12 h-12 border border-solid border-color-002 flex mb-5 rounded-xl justify-center items-center bg-color-005">
        <svg className="w-auto h-5.5 block overflow-hidden" data-component="icon" fill="#E60000" height="22" viewBox="0 0 16 16" width="22">{d.icon}</svg>
        {" "}
      </div>
      {" "}
      <h3 className="block mb-3.5 text-2xl font-semibold leading-[1.8125rem] tracking-[-0.29px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
