export type MediaTileData = {
  text: string;
  label: string;
  text2: string;
  label2: string;
  alt?: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="box-content list-item relative ml-5">
      <strong className="box-content inline font-bold">
        <mark className="box-content inline text-color-008">
          {d.text}
        </mark>
      </strong>
      {" "}
      <picture className="box-content w-[1.5625rem] inline">
        <source className="box-content inline" sizes="auto" srcSet="/assets/cloned/images/055cb7de93b8.webp 500w, /assets/cloned/images/665689e455f1.webp 320w" type="image/webp" />
        <img className="box-content w-[1.5625rem] inline max-w-full rounded-[10px] overflow-clip aspect-[auto_500/500] align-bottom h-auto" data-component="image" height="500" sizes="auto" src="/assets/cloned/images/d9d373fb9b24.png" srcSet="/assets/cloned/images/d9d373fb9b24.png 500w, /assets/cloned/images/9ae5e8207a66.png 320w" width="500" alt={d.alt} />
      </picture>
      {" Mehr unter "}
      <a className="box-content inline text-primary cursor-pointer" data-component="link" href="/seminarangebot/agilitaet-scrum">
        {d.label}
      </a>
      {d.text2}
      <a className="box-content inline text-primary cursor-pointer" data-component="link" href="/seminarangebot/agilitaet-scrum">
        {d.label2}
      </a>
    </li>
  );
}
