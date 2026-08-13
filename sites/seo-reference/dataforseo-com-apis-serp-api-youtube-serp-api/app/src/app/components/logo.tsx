import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  rel: string;
  alt: string;
  imgSrc: string;
  label: string;
  alt2: string;
  imgSrc2: string;
  label2: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("box-content w-[183.3px] block float-left max-md:w-67.5 max-md:[float:initial] md:max-lg:w-50", styles.className)}>
      <div className="box-content block relative px-2.5 max-lg:px-0 2xl:px-0">
        <div className="box-content block">
          <a className={cn("box-content inline-block relative max-w-full overflow-hidden align-middle text-primary leading-0 cursor-pointer group", styles.className2)} data-component="link" href={d.href} rel={d.rel} target="_blank">
            {" "}
            <span className={cn("box-content block relative my-2.5 mx-[0.9375rem] focus:opacity-100", styles.className3)}>
              {" "}
              <img className={cn("box-content inline max-w-full overflow-clip", styles.className4)} data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
              {" "}
            </span>
            {" "}
            <span className={cn("box-content block absolute top-2.5 left-[0.9375rem] opacity-0 group-hover:opacity-100", styles.className5)}>
              {" "}
              <img className={cn("box-content inline max-w-full overflow-clip", styles.className6)} data-component="image" alt={d.alt2} src={d.imgSrc2} title={d.label2} />
              {" "}
            </span>
            {" "}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
