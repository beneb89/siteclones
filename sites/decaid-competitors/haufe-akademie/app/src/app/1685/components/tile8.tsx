import type { Tile8Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile8Data = {
  id: string;
  id2: string;
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile8({ d, styles }: { d: Tile8Data; styles: Tile8Styles }) {
  return (
    <div className="block relative mb-4" id={d.id}>
      <div className="border border-solid border-border flex relative z-10 px-12 rounded-xl flex-col [overflow-wrap:break-word] bg-background max-md:px-4 md:max-lg:px-6" id={d.id2}>
        <div className="flex py-6 justify-between items-center max-lg:py-4 max-lg:flex-wrap">
          <div className="w-4 h-[6.1875rem] border border-solid border-color-010 block absolute -top-px -left-px min-w-0 rounded-tl-xl rounded-bl-xl bg-color-010 max-lg:w-3 max-md:h-[8.8125rem] md:max-lg:h-[5.8125rem]" aria-label={"<p>There are still<br/><b>sufficient places available</b><br/> on this date.</p>"} />
          {" "}
          <div className="flex justify-between grow gap-15 max-md:flex-col max-md:gap-2 md:max-lg:gap-12.5">
            <div className="w-[61%] flex justify-between items-center grow max-md:w-full max-md:items-start md:max-lg:w-[47%]">
              <div className="flex items-center grow gap-12.5 max-lg:flex-col max-lg:[align-items:initial] max-lg:gap-[initial]">
                <div className="w-[31.5%] flex py-2 px-4 items-center font-bold max-lg:w-full max-lg:py-1 max-lg:px-2 max-lg:[align-items:initial]">
                  <i className="block pr-3 pb-0.5 [font-family:'Font_Awesome_Pro'] font-normal leading-4 text-center max-lg:pt-[0.1875rem] max-lg:pr-3.5 max-lg:pl-0.5 max-lg:pb-0" />
                  {d.text}
                </div>
                {" "}
                <div className="flex py-2 px-4 items-center grow font-bold max-lg:py-1 max-lg:px-2 max-lg:[align-items:initial]">
                  <i className={cn("block pb-0.5 [font-family:'Font_Awesome_Pro'] font-normal leading-4 text-center max-lg:pt-[0.1875rem] max-lg:pb-0", styles.className)} />
                  {d.text2}
                </div>
                {" "}
              </div>
              {" "}
              <div className="w-[21.5%] flex pb-1 justify-end items-center max-lg:flex-wrap max-md:pb-0 max-lg:[align-items:initial] md:max-lg:w-[20.5%]" />
              {" "}
            </div>
            {" "}
            <div className="w-1/3 flex justify-between items-center grow gap-15 max-md:w-full max-md:gap-[initial] md:max-lg:w-[45.5%] md:max-lg:gap-12.5">
              <div className="block py-2 px-4 font-bold max-lg:px-2">
                <a className="inline-block relative pr-6 text-primary cursor-pointer after:content-[''] after:block after:absolute after:top-1 after:right-px after:bottom-0.5 after:left-17 after:w-3.5 after:h-4 after:text-primary after:text-base after:font-bold after:leading-4 after:text-left" data-component="link" href="#">
                  Details
                </a>
              </div>
              {" "}
              <div className="w-[50.5%] block max-md:w-[43.5%] md:max-lg:w-[51.5%]">
                <form className="block">
                  {" "}
                  <label className="w-full border-2 border-solid border-primary inline-block max-w-120 py-3 px-6 rounded-full align-middle text-background font-medium text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer max-lg:py-2 max-lg:px-4 max-lg:text-sm max-lg:leading-5">
                    {" "}
                    <i className="inline-block pr-2 [font-family:'Font_Awesome_Pro'] font-normal leading-4 max-lg:leading-3.5" />
                    <input className="w-[4.8125rem] h-5.5 inline-block overflow-clip font-normal whitespace-pre max-lg:w-[4.3125rem] max-lg:h-5" data-component="button" type="submit" value="Book now" />
                    {" "}
                  </label>
                  {" "}
                </form>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {"  "}
    </div>
  );
}
