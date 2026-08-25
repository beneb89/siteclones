import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  description: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <blockquote className={cn("min-h-15 flex my-10 ml-[2.0625rem] pl-20 flex-col justify-center text-xl font-semibold italic leading-7.5 [background-size:47px] [background-position:left_8px_top_11px] bg-no-repeat max-md:min-h-13.5 max-md:my-8 max-md:pl-16 max-md:text-lg max-md:leading-[1.6875rem] max-md:[background-size:40px] max-md:ml-0", styles.className)} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='48' height='37' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.03 32.932C2.327 30.06.875 26.84.875 21.618c0-9.187 6.45-17.422 15.829-21.493l2.344 3.617C10.294 8.478 8.582 14.622 7.9 18.497c1.41-.73 3.255-.984 5.063-.816 4.736.438 8.468 4.326 8.468 9.159a9.188 9.188 0 0 1-9.187 9.187c-2.817 0-5.51-1.286-7.214-3.095zm26.25 0c-2.703-2.872-4.155-6.092-4.155-11.314 0-9.187 6.45-17.422 15.829-21.493l2.344 3.617c-8.755 4.736-10.466 10.88-11.148 14.755 1.41-.73 3.255-.984 5.063-.816 4.736.438 8.468 4.326 8.468 9.159a9.188 9.188 0 0 1-9.187 9.187c-2.817 0-5.51-1.286-7.214-3.095z' fill='%23F26822'/%3E%3C/svg%3E\")" }}>
      <p className="block mb-7.5 max-md:mb-[1.6875rem]">
        {d.description}
      </p>
      <footer className="block mt-[0.4375rem] [font-family:Montserrat,_sans-serif] text-sm not-italic leading-[1.3125rem] uppercase max-md:mt-[6.5px] max-md:text-[0.8125rem] max-md:leading-[1.25rem]">
        —
        <cite className="inline mt-[0.4375rem] ml-1 max-md:mt-[6.5px]">
          {d.text}
        </cite>
      </footer>
    </blockquote>
  );
}
