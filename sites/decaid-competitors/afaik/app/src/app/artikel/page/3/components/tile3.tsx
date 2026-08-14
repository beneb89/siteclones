export type Tile3Data = {
  href: string;
  rel: string;
  label: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="box-content block [font-family:-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_Helvetica,_Arial,_sans-serif]">
      <a className="inline-block py-[12.5px] px-[1.15rem] rounded-[999px] content-center text-background text-[0.9375rem] font-semibold leading-[1.5625rem] text-center [word-break:break-word] bg-foreground cursor-pointer whitespace-nowrap" data-component="button" href={d.href} rel={d.rel} target="_blank">
        {d.label}
      </a>
    </div>
  );
}
