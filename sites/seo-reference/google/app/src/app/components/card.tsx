export type CardData = {
  href: string;
  alt: string;
  imgSrc: string;
  text: string;
  title: string;
};
/** A card. */
export default function Card({ d }: { d: CardData }) {
  return (
    <li className="list-item my-5 basis-[192px] text-center max-lg:py-2 max-lg:shrink-0 max-lg:basis-1/2 max-lg:my-0 max-lg:[text-align:inherit]">
      <a className="block text-color-001 [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-base leading-6.5 [word-break:break-word] cursor-pointer max-lg:flex max-lg:items-center hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        {" "}
        <picture className="inline max-lg:w-10 max-lg:h-8 max-lg:block">
          {" "}
          <img className="w-12 h-12 block max-w-full mb-2 mx-auto overflow-clip text-[3rem] max-lg:w-8 max-lg:h-8 max-lg:mr-2 max-lg:mb-0 max-lg:ml-0" data-component="image" alt={d.alt} src={d.imgSrc} />
          {" "}
        </picture>
        {" "}
        <span className="inline max-lg:block">
          {d.title}
        </span>
        {" "}
      </a>
      {" "}
      <div className="block max-lg:hidden">
        {d.text}
      </div>
      {" "}
    </li>
  );
}
