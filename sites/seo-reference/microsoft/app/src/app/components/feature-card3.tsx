import type { FeatureCard3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard3Data = {
  title: string;
  href: string;
  label: string;
  href2: string;
  label2: string;
  href3: string;
  label3: string;
  href4: string;
  label4: string;
  href5: string;
  label5: string;
  href6: string;
  label6: string;
  href7: string;
  label7: string;
  href8: string;
  id?: string;
  label8: string;
};
/** A feature card. */
export default function FeatureCard3({ d, styles }: { d: FeatureCard3Data; styles: FeatureCard3Styles }) {
  return (
    <uhf-footer-nav-group class={cn("block max-w-[33.3333%] flex-1 max-md:max-w-full", styles.className)}>
      <h2 className="block mb-[0.8125rem] pt-9 text-muted-foreground [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] text-[0.9375rem] font-bold leading-[1.1875rem] [overflow-wrap:break-word] max-lg:pt-[3.0625rem]" data-component="heading">
        {d.title}
      </h2>
      {" "}
      <ul className="block mt-3 leading-4 [list-style-type:none] list-outside">
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href}>
            {d.label}
          </a>
        </li>
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href2}>
            {d.label2}
          </a>
        </li>
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href3}>
            {d.label3}
          </a>
        </li>
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href4}>
            {d.label4}
          </a>
        </li>
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href5}>
            {d.label5}
          </a>
        </li>
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href6}>
            {d.label6}
          </a>
        </li>
        <li className="list-item mb-3.5 text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href7}>
            {d.label7}
          </a>
        </li>
        <li className="list-item text-muted-foreground">
          <a className="inline-flex [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] leading-4.5 [overflow-wrap:break-word] cursor-pointer hover:underline" data-component="link" href={d.href8} id={d.id}>
            {d.label8}
          </a>
        </li>
      </ul>
      {" "}
    </uhf-footer-nav-group>
  );
}
