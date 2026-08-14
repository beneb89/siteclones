export type MediaTile2Data = {
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="flex justify-start items-start content-start text-background leading-[2rem] [word-break:break-word]">
      <div className="box-content block relative z-1">
        <div className="box-content block p-2.5 leading-0 text-center">
          <svg className="box-content w-auto h-4.5 inline-block overflow-hidden align-middle leading-4.5" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
          </svg>
        </div>
      </div>
      <span className="block z-0 leading-[2.5625rem]">
        <a className="border-b border-dashed border-b-primary inline [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href={d.href} target="_blank">
          {d.label}
        </a>
      </span>
    </li>
  );
}
