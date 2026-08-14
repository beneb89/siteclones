import type { ReactNode } from "react";
export type MediaCardData = {
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="border border-solid border-border flex relative py-8 px-7 rounded-2xl flex-col gap-3.5 bg-color-004 max-lg:py-6.5 max-lg:px-5.5">
      <div className="w-10 h-10 border border-solid border-color-002 flex rounded-[10px] justify-center items-center bg-color-005">
        <svg className="w-auto h-4.5 block overflow-hidden" data-component="icon" fill="#E60000" height="18" viewBox="0 0 16 16" width="18">{d.icon}</svg>
      </div>
      {" "}
      <h3 className="block text-[1.1875rem] font-semibold leading-[1.5rem] tracking-[-0.09px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
