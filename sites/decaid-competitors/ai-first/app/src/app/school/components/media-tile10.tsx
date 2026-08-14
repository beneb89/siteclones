export type MediaTile10Data = {
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile10({ d }: { d: MediaTile10Data }) {
  return (
    <li className="list-item">
      <a className="flex relative pl-4 items-center text-muted-foreground [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg italic leading-7 [font-feature-settings:'calt',_'liga',_'onum'] cursor-pointer max-md:pl-3 max-md:text-sm max-md:leading-5" data-component="link" href={d.href}>
        <svg className="block absolute top-3.5 left-0 opacity-0 min-w-0 overflow-hidden align-middle [translate:0px_-50%] [scale:0.5] h-2.5 w-auto max-md:h-[7.69px]" aria-hidden="true" fill="currentColor" viewBox="0 0 201.75 208.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M 6.056146 102.069444 C 61.789791 70.519211 117.580421 36.907140 172.925451 5.421289 C 180.666491 1.000000 186.817319 9.579628 192.197423 15.004544 C 196.013922 18.858073 196.665224 19.824213 194.561781 25.291577 C 171.506969 84.788673 148.554029 144.516729 125.694880 204.468210 C 124.577208 207.383992 122.710452 207.988572 120.094610 206.281948 C 113.842220 202.181250 103.783271 194.175863 103.834801 185.801776 C 103.947974 167.552334 104.307227 149.298207 104.908792 131.043437 C 105.123120 124.309198 94.951454 116.210031 90.476615 113.763149 C 87.786563 112.281909 84.387270 111.869041 80.271067 112.528721 C 62.239672 115.413671 44.228528 118.430808 26.237498 121.576227 C 19.559054 122.735789 9.001512 112.652787 5.008397 107.882989 C 4.645548 107.453985 4.381609 106.947262 4.233560 106.401315 C 4.089414 105.855232 4.065607 105.285404 4.167404 104.730731 C 4.265298 104.176196 4.489207 103.648529 4.813166 103.187724 C 5.141165 102.730685 5.565584 102.348453 6.056146 102.069444 Z" />
        </svg>
        {d.label}
      </a>
    </li>
  );
}
