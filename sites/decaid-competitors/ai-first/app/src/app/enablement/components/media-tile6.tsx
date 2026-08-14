export type MediaTile6Data = {
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
  description3: string;
};
/** A media tile. */
export default function MediaTile6({ d }: { d: MediaTile6Data }) {
  return (
    <div className="flex flex-col items-end text-right max-md:items-start max-md:text-left">
      <div className="block relative mb-2 shrink-0 h-16 w-16">
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="64px" src={d.imgSrc} srcSet={d.srcSet} />
      </div>
      <p className="block text-accent text-base leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:leading-5.5 2xl:[font-size:inherit]">
        <strong className="inline font-semibold">
          {d.description}
        </strong>
        {d.description2}
        <span className="inline font-bold uppercase">
          AI FIRST
          <svg className="inline mr-[0.1rem] ml-px overflow-hidden h-[11.11px] w-auto max-md:mr-[0.0875rem] max-md:ml-[0.05rem] max-md:h-2.5 md:max-lg:mr-[1.5px] md:max-lg:ml-[0.9px] md:max-lg:h-[10.42px] 2xl:h-[11.19px]" data-component="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 201.75 208.5" xmlns="http://www.w3.org/2000/svg">
            <path d="M 6.056146 102.069444 C 61.789791 70.519211 117.580421 36.907140 172.925451 5.421289 C 180.666491 1.000000 186.817319 9.579628 192.197423 15.004544 C 196.013922 18.858073 196.665224 19.824213 194.561781 25.291577 C 171.506969 84.788673 148.554029 144.516729 125.694880 204.468210 C 124.577208 207.383992 122.710452 207.988572 120.094610 206.281948 C 113.842220 202.181250 103.783271 194.175863 103.834801 185.801776 C 103.947974 167.552334 104.307227 149.298207 104.908792 131.043437 C 105.123120 124.309198 94.951454 116.210031 90.476615 113.763149 C 87.786563 112.281909 84.387270 111.869041 80.271067 112.528721 C 62.239672 115.413671 44.228528 118.430808 26.237498 121.576227 C 19.559054 122.735789 9.001512 112.652787 5.008397 107.882989 C 4.645548 107.453985 4.381609 106.947262 4.233560 106.401315 C 4.089414 105.855232 4.065607 105.285404 4.167404 104.730731 C 4.265298 104.176196 4.489207 103.648529 4.813166 103.187724 C 5.141165 102.730685 5.565584 102.348453 6.056146 102.069444 Z" />
          </svg>
        </span>
        <span className="inline [font-family:'Martina_Plantijn',_Georgia,_serif] italic tracking-[0.63px] [font-feature-settings:'calt',_'liga',_'onum'] max-md:tracking-[0.57px] md:max-lg:tracking-[0.6px] 2xl:tracking-[0.64px]">
          {d.description3}
        </span>
      </p>
    </div>
  );
}
