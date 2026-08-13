import type { ReactNode } from "react";
import type { FeatureCard3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard3Data = {
  title: string;
  alt: string;
  imgSrc: string;
  label: string;
  description: string;
  href: string;
  label2: string;
  height: string;
  viewBox: string;
  width: string;
  icon: ReactNode;
};
/** A feature card. */
export default function FeatureCard3({ d, styles }: { d: FeatureCard3Data; styles: FeatureCard3Styles }) {
  return (
    <div className="border border-solid border-surface flex p-6 rounded-lg flex-col gap-4">
      <div className="flex justify-between items-start gap-4">
        <h3 className="block text-color-014 text-2xl font-semibold leading-[1.9375rem] max-md:text-lg max-md:leading-[1.4375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <div className="w-13.5 h-13.5 block shrink-0">
          <img className="w-13.5 h-13.5 block max-w-full overflow-clip aspect-[auto_54/54] align-middle" data-component="image" alt={d.alt} height="54" src={d.imgSrc} title={d.label} width="54" />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <p className="block flex-1 font-medium">
        {d.description}
      </p>
      {" "}
      <a className="h-[2.65rem] flex mt-2 items-stretch cursor-pointer" data-component="link" href={d.href}>
        {" "}
        <span className={cn("border-t-2 border-solid border-t-color-002 border-b-2 border-b-color-002 border-l-2 border-l-color-002 flex py-2 px-4.5 rounded-tl-[3px] rounded-bl-[3px] items-center text-sm font-semibold leading-[1.375rem] uppercase hover:bg-color-003", styles.className)}>
          {d.label2}
        </span>
        {" "}
        <span className="w-9.5 border-2 border-solid border-color-002 flex rounded-tr-[3px] rounded-br-[3px] justify-center items-center shrink-0 text-color-007">
          {" "}
          <svg className="w-auto h-4 block overflow-hidden align-middle" data-component="icon" fill="none" height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
