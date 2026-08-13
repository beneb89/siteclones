import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  viewBox: string;
  icon: ReactNode;
  height?: string;
  width?: string;
  shapeRendering?: string;
  textrendering?: string;
  imagerendering?: string;
  fillRule?: string;
  clipRule?: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="h-11 block relative p-2 cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noreferrer" target="_blank">
      <div className="w-11 block absolute top-0 left-0 opacity-10 rounded-full bg-color-001 h-full" />
      <div className="block p-2 rounded-full text-background bg-foreground">
        <svg className="block overflow-hidden align-middle h-3 w-3" data-component="icon" fill="currentColor" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" height={d.height} width={d.width} shapeRendering={d.shapeRendering} text-rendering={d.textrendering} image-rendering={d.imagerendering} fillRule={d.fillRule} clipRule={d.clipRule}>{d.icon}</svg>
      </div>
    </a>
  );
}
