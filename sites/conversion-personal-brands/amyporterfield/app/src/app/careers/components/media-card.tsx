import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  id: string;
  href: string;
  style: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("box-content block relative pointer-events-none", styles.className)} id={d.id}>
      <div className="box-content h-full block absolute top-0 inset-x-0 bg-background pointer-events-none">
        <div className="box-content w-300 h-full block relative max-h-20000 mx-10 pointer-events-none max-md:w-[23.4375rem] max-lg:mx-0 md:max-lg:w-192 2xl:mx-90">
          <div className={cn("w-42.5 h-10 block absolute top-12.5 left-231 transform-[none] max-md:w-60.5 max-md:h-12.5 max-md:left-[2.4375rem] max-md:origin-[121px_25px] md:max-lg:transform-[matrix(0.64,0,0,0.64,-363.24,-25.2)] md:max-lg:origin-[85px_20px]", styles.className2)}>
            <div className="h-full block bg-color-003" />
          </div>
          <a className={cn("w-42.5 h-10 block absolute top-12.5 left-231 transform-[none] cursor-pointer max-md:w-60.5 max-md:h-12.5 max-md:left-[2.4375rem] max-md:origin-[121px_25px] md:max-lg:transform-[matrix(0.64,0,0,0.64,-363.24,-25.2)] md:max-lg:origin-[85px_20px]", styles.className3)} data-component="link" href={d.href} target="_blank">
            <p className="box-content h-full block absolute top-0 inset-x-0 text-border [font-family:Montserrat] text-[0.8125rem] font-semibold leading-[2.375rem] tracking-[0.65px] text-center uppercase max-md:text-[0.9375rem] max-md:leading-12 max-md:tracking-[0.75px]">
              learn more
              <br className="box-content inline" />
            </p>
          </a>
          <div className="w-77 h-51.5 block absolute top-12.5 left-[6.6875rem] transform-[none] max-md:w-71.5 max-md:h-[11.9375rem] max-md:top-6.5 max-md:left-[1.0625rem] max-md:transform-[matrix(1.17188,0,0,1.17188,27.5,20.8828)] max-md:origin-[143px_95.5px] md:max-lg:transform-[matrix(0.64,0,0,0.64,-93.96,-55.08)] md:max-lg:origin-[154px_103px]">
            <div className="box-content h-full block absolute top-0 inset-x-0 bg-cover [background-position:50%_50%] bg-no-repeat" style={d.style} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
          </div>
          <div className="w-px h-px block absolute top-[0.5625rem] left-26.5 transform-[none] md:max-lg:top-1.5 md:max-lg:left-[67.5px] md:max-lg:transform-[matrix(1,0,0,1,-0.36,0)]">
            <svg className="box-content w-[61.6875rem] h-0.5 inline p-px align-top pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-158" data-component="image" fill="currentColor">
              <line data-d-strokelinecap="butt" data-d-linestyle="solid" data-d-thickness="2" data-d-rotatedwidth="987" data-d-rotatedheight="0" data-d-widthoffset="0" data-d-heightoffset="0" data-d-isround="false" data-d-rotation="0" data-d-roundedsolid="false" data-d-dotted="false" data-d-length="987" data-d-mirrorline="false" data-d-dashwidth="21" data-d-spacing="15" data-d-dasharrayvalue="none" data-m-strokelinecap="butt" data-m-linestyle="solid" data-m-thickness="2" data-m-rotatedwidth="320" data-m-rotatedheight="0" data-m-widthoffset="0" data-m-heightoffset="0" data-m-isround="false" data-m-rotation="0" data-m-roundedsolid="false" data-m-dotted="false" data-m-length="320" data-m-mirrorline="false" data-m-dashwidth="21" data-m-spacing="15" data-m-dasharrayvalue="none" x1="0" y1="0" x2="100%" y2="0" style={{ strokeWidth: "2px", strokeDasharray: "0px" }} />
            </svg>
          </div>
          <div className={cn("h-12 block absolute top-12.5 left-[28.4375rem] transform-[none] max-md:w-71.5 max-md:h-18.5 max-md:top-[15.4375rem] max-md:left-[1.0625rem] max-md:transform-[matrix(1.17188,0,0,1.17188,27.5,48.8125)] max-md:origin-[143px_37px]", styles.className4)}>
            <h2 className="box-content h-full block absolute top-0 inset-x-0 text-primary [font-family:'Ivy_Presto_Italic'] text-[2.1875rem] leading-10.5 text-left max-md:text-3xl max-md:leading-9" data-component="heading">
              {d.title}
              <br className="box-content inline" />
            </h2>
          </div>
          <div className={cn("w-[29.3125rem] block absolute left-[28.4375rem] transform-[none] max-md:w-71.5 max-md:left-[1.0625rem]", styles.className5)}>
            <p className="box-content h-full block absolute top-0 inset-x-0 text-border [font-family:Montserrat] text-[0.9375rem] leading-6 text-left">
              {d.description}
              <br className="box-content inline" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
