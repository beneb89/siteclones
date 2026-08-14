export type MediaTile2Data = {
  href: string;
  imgSrc: string;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="box-content flex mb-5 rounded-xl items-stretch overflow-hidden bg-surface-2">
      <a className="box-content h-24 block relative float-left text-color-001 cursor-pointer" data-component="link" href={d.href}>
        <img className="box-content w-27.5 h-24 block float-left overflow-clip object-cover aspect-[auto_110/96]" data-component="image" alt="" height="96" src={d.imgSrc} width="110" />
        {" "}
        <div className="box-content h-24 min-h-[4.5625rem] flex px-2.5 items-center leading-[1.375rem]">
          {d.label}
        </div>
        {" "}
      </a>
      {" "}
    </li>
  );
}
