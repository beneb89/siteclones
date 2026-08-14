export type Logo2Data = {
  href: string;
  rel?: string;
  target?: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <td className="box-content border border-solid border-color-001 table-cell align-middle [border-collapse:collapse]">
      <a className="box-content inline text-color-007 cursor-pointer [border-collapse:collapse]" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        <img className="box-content w-12.5 h-12.5 inline max-w-full overflow-clip aspect-[auto_50/50] align-middle [border-collapse:collapse]" data-component="image" height="50" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="50" />
      </a>
    </td>
  );
}
