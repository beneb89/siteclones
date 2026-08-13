export type MediaTile2Data = {
  id: string;
  ariaLabel: string;
  href: string;
  label: string;
  label2: string;
  ariaLabel2: string;
  href2: string;
  label3: string;
  label4: string;
  href3: string;
  label5: string;
  label6: string;
  href4: string;
  label7: string;
  href5: string;
  label8: string;
  datetime: string;
  label9: string;
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <tr className="h-[2.5625rem] table-row align-middle" id={d.id}>
      <td className="border-t border-solid border-t-border hidden pl-4 align-middle text-left max-md:table-cell" colSpan="2">
        <div className="h-10 flex pr-4 items-center gap-y-1 gap-x-2.5">
          <svg className="w-4 h-4 block min-w-0 align-text-bottom text-muted-foreground" aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" data-component="Octicon" focusable="false" display="inline-block" overflow="visible">
            <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
          </svg>
          <div className="block min-w-0 overflow-hidden">
            <div className="block">
              <div className="inline-block max-w-full overflow-hidden align-top whitespace-nowrap text-nowrap">
                <a className="inline cursor-pointer" aria-label={d.ariaLabel} href={d.href} title={d.label}>
                  {d.label2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="border-t border-solid border-t-border table-cell pl-4 align-middle text-left max-md:hidden" colSpan="1">
        <div className="h-10 flex pr-4 items-center gap-y-1 gap-x-2.5">
          <svg className="w-auto h-4 block align-text-bottom text-muted-foreground" data-component="icon" aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" focusable="false" display="inline-block" overflow="visible">
            <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
          </svg>
          <div className="block overflow-hidden">
            <div className="block">
              <div className="inline-block max-w-full overflow-hidden align-top whitespace-nowrap text-nowrap">
                <a className="inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" aria-label={d.ariaLabel2} href={d.href2} title={d.label3}>
                  {d.label4}
                </a>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="border-t border-solid border-t-border table-cell pl-4 align-middle text-left max-md:hidden">
        <div className="block">
          <div className="block max-w-full overflow-hidden whitespace-nowrap text-nowrap">
            <a className="inline text-muted-foreground cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" href={d.href3} title={d.label5}>
              {d.label6}
            </a>
            <a className="inline text-primary cursor-pointer hover:underline" data-component="link" aria-keyshortcuts="Alt+ArrowUp" href={d.href4}>
              {d.label7}
            </a>
            <a className="inline text-muted-foreground cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" href={d.href5} title={d.label8}>
              )
            </a>
          </div>
        </div>
      </td>
      <td className="border-t border-solid border-t-border table-cell pl-4 align-middle text-left">
        <div className="block pr-4 text-muted-foreground text-right">
          <relative-time class="inline whitespace-nowrap text-nowrap" datetime={d.datetime} title={d.label9}>
            <span className="box-content inline">
              {d.text}
            </span>
          </relative-time>
        </div>
      </td>
    </tr>
  );
}
