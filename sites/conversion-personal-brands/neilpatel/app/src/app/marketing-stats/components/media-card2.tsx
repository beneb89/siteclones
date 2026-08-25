import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  href: string;
  title: string;
  href2: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet?: string;
  href3: string;
  label: string;
  href4: string;
  title2: string;
  href5: string;
  alt2: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  href6: string;
  label2: string;
  href7: string;
  title3: string;
  href8: string;
  alt3: string;
  height3: string;
  imgSrc3: string;
  srcSet3: string;
  href9: string;
  label3: string;
  href10: string;
  title4: string;
  href11: string;
  alt4: string;
  height4: string;
  imgSrc4: string;
  srcSet4: string;
  href12: string;
  label4: string;
  href13: string;
  title5: string;
  href14: string;
  alt5: string;
  height5: string;
  imgSrc5: string;
  srcSet5: string;
  href15: string;
  label5: string;
  href16: string;
  title6: string;
  href17: string;
  alt6: string;
  height6: string;
  imgSrc6: string;
  srcSet6: string;
  href18: string;
  label6: string;
  href19: string;
  title7: string;
  href20: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <li className="flex flex-col gap-8">
      <h2 className="block text-color-001 text-[1.3125rem] font-bold leading-0.5" data-component="heading">
        <a className="inline text-color-002 text-[1.75rem] leading-[2.1875rem] cursor-pointer" data-component="link" href={d.href}>
          {d.title}
        </a>
      </h2>
      {" "}
      <div className="flex flex-wrap justify-start gap-6 text-left">
        <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
          <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className)}>
            <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square cursor-pointer" data-component="link" href={d.href2}>
              <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className2)} data-component="image" alt={d.alt} height={d.height} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc} srcSet={d.srcSet} width="350" />
            </a>
            {" "}
            <div className="flex min-w-0 flex-col grow">
              <a className="block text-muted text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href3}>
                {d.label}
              </a>
              {" "}
              <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
                <a className="inline text-lg leading-7 cursor-pointer" data-component="link" href={d.href4}>
                  {d.title2}
                </a>
              </h3>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
        <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
          <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className3)}>
            <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square cursor-pointer" data-component="link" href={d.href5}>
              <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className4)} data-component="image" alt={d.alt2} height={d.height2} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc2} srcSet={d.srcSet2} width="350" />
            </a>
            {" "}
            <div className="flex min-w-0 flex-col grow">
              <a className="block text-muted text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href6}>
                {d.label2}
              </a>
              {" "}
              <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
                <a className="inline text-lg leading-7 cursor-pointer" data-component="link" href={d.href7}>
                  {d.title3}
                </a>
              </h3>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
        <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
          <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className5)}>
            <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square cursor-pointer" data-component="link" href={d.href8}>
              <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className6)} data-component="image" alt={d.alt3} height={d.height3} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc3} srcSet={d.srcSet3} width="350" />
            </a>
            {" "}
            <div className="flex min-w-0 flex-col grow">
              <a className="block text-muted text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href9}>
                {d.label3}
              </a>
              {" "}
              <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
                <a className="inline text-lg leading-7 cursor-pointer" data-component="link" href={d.href10}>
                  {d.title4}
                </a>
              </h3>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
        <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
          <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className7)}>
            <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square cursor-pointer" data-component="link" href={d.href11}>
              <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className8)} data-component="image" alt={d.alt4} height={d.height4} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc4} srcSet={d.srcSet4} width="350" />
            </a>
            {" "}
            <div className="flex min-w-0 flex-col grow">
              <a className="block text-muted text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href12}>
                {d.label4}
              </a>
              {" "}
              <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
                <a className="inline text-lg leading-7 cursor-pointer" data-component="link" href={d.href13}>
                  {d.title5}
                </a>
              </h3>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
        <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
          <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className9)}>
            <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square cursor-pointer" data-component="link" href={d.href14}>
              <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className10)} data-component="image" alt={d.alt5} height={d.height5} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc5} srcSet={d.srcSet5} width="350" />
            </a>
            {" "}
            <div className="flex min-w-0 flex-col grow">
              <a className="block text-muted text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href15}>
                {d.label5}
              </a>
              {" "}
              <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
                <a className="inline text-lg leading-7 cursor-pointer" data-component="link" href={d.href16}>
                  {d.title6}
                </a>
              </h3>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
        <div className="block basis-[calc(33.3333%_-_16px)] max-lg:basis-full">
          <article className={cn("border border-solid border-border flex p-4 rounded-lg items-center gap-4 bg-background", styles.className11)}>
            <a className="h-30 block rounded-sm shrink-0 basis-[120px] overflow-hidden aspect-square cursor-pointer" data-component="link" href={d.href17}>
              <img className={cn("w-30 h-30 block max-w-full overflow-clip object-cover", styles.className12)} data-component="image" alt={d.alt6} height={d.height6} sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc6} srcSet={d.srcSet6} width="350" />
            </a>
            {" "}
            <div className="flex min-w-0 flex-col grow">
              <a className="block text-muted text-[0.8125rem] font-medium leading-5 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href18}>
                {d.label6}
              </a>
              {" "}
              <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-medium leading-0.5" data-component="heading">
                <a className="inline text-lg leading-7 cursor-pointer" data-component="link" href={d.href19}>
                  {d.title7}
                </a>
              </h3>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <p className="w-308 h-[26.7px] block text-base font-medium leading-[1.6875rem] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-[77.3125rem]">
        <a className="inline cursor-pointer" data-component="link" href={d.href20}>
          More →
        </a>
      </p>
      {" "}
    </li>
  );
}
