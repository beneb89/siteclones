export type MediaTile2Data = {
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <button className="block py-2 px-5 rounded-full text-color-033 text-[0.8125rem] font-semibold leading-[1.25rem] text-center bg-surface-12 cursor-default max-md:text-xs max-md:leading-[1.125rem] md:max-lg:leading-[1.1875rem] 2xl:text-sm 2xl:leading-[1.3125rem]" data-component="button">
      <span className="inline-flex items-baseline">
        <svg className="block mr-0.5 self-baseline overflow-hidden align-middle h-[0.535rem] w-auto max-lg:h-2 2xl:h-[9.09px]" data-component="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 201.75 208.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M 6.056146 102.069444 C 61.789791 70.519211 117.580421 36.907140 172.925451 5.421289 C 180.666491 1.000000 186.817319 9.579628 192.197423 15.004544 C 196.013922 18.858073 196.665224 19.824213 194.561781 25.291577 C 171.506969 84.788673 148.554029 144.516729 125.694880 204.468210 C 124.577208 207.383992 122.710452 207.988572 120.094610 206.281948 C 113.842220 202.181250 103.783271 194.175863 103.834801 185.801776 C 103.947974 167.552334 104.307227 149.298207 104.908792 131.043437 C 105.123120 124.309198 94.951454 116.210031 90.476615 113.763149 C 87.786563 112.281909 84.387270 111.869041 80.271067 112.528721 C 62.239672 115.413671 44.228528 118.430808 26.237498 121.576227 C 19.559054 122.735789 9.001512 112.652787 5.008397 107.882989 C 4.645548 107.453985 4.381609 106.947262 4.233560 106.401315 C 4.089414 105.855232 4.065607 105.285404 4.167404 104.730731 C 4.265298 104.176196 4.489207 103.648529 4.813166 103.187724 C 5.141165 102.730685 5.565584 102.348453 6.056146 102.069444 Z" />
        </svg>
        <span className="block [font-family:'Martina_Plantijn',_Georgia,_serif] font-normal italic tracking-[0.53px] [font-feature-settings:'calt',_'liga',_'onum'] max-md:tracking-[0.48px] md:max-lg:tracking-[0.5px] 2xl:tracking-[0.56px]">
          {d.label}
        </span>
      </span>
    </button>
  );
}
