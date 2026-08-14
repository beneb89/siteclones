import type { ReactNode } from "react";
export type MediaCardData = {
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="border border-solid border-border block relative p-8 rounded-2xl overflow-hidden bg-border">
      <div className="w-11 h-11 border border-solid border-color-008 flex mb-5 rounded-[10px] justify-center items-center bg-color-005">
        <svg className="w-auto h-5 block overflow-hidden" data-component="icon" fill="none" height="20" viewBox="0 0 16 16" width="20">{d.icon}</svg>
      </div>
      {" "}
      <h3 className="block mb-3 text-lg font-semibold leading-[1.8125rem]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
