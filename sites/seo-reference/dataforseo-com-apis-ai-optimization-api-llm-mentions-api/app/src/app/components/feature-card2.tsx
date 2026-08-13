import type { ReactNode } from "react";
export type FeatureCard2Data = {
  title: string;
  alt: string;
  imgSrc: string;
  label: string;
  description: string;
  label2: string;
  height: string;
  viewBox: string;
  width: string;
  icon: ReactNode;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border border-solid border-border flex p-6 rounded-lg flex-col gap-4">
      <div className="flex justify-between items-start gap-4">
        <h3 className="block text-accent text-2xl font-semibold leading-[1.9375rem] max-md:text-lg max-md:leading-[1.4375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]" data-component="heading">
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
      <a className="h-[2.65rem] flex mt-2 items-stretch cursor-pointer focus:outline-foreground" data-component="link" href="#">
        {" "}
        <span className="border-t-2 border-solid border-t-color-002 border-b-2 border-b-color-002 border-l-2 border-l-color-002 flex py-2 px-4.5 rounded-tl-[3px] rounded-bl-[3px] items-center text-muted text-sm font-semibold leading-[1.375rem] uppercase hover:bg-color-003 focus:bg-clr-63 focus:outline-muted">
          {d.label2}
        </span>
        {" "}
        <span className="w-9.5 border-2 border-solid border-color-002 flex rounded-tr-[3px] rounded-br-[3px] justify-center items-center shrink-0 text-color-006 focus:outline-color-006">
          {" "}
          <svg className="w-auto h-4 block overflow-hidden align-middle focus:outline-color-006" data-component="icon" fill="none" height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
