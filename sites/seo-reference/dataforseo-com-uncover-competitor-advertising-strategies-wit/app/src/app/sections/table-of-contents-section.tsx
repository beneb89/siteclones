import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import ListRow4 from "../components/list-row4";
import { ListRow4_styles } from "../_styles";
import { listRow4Data as listRow4DataContent } from "../content";
/** Table Of Contents section. */
export default function TableOfContentsSection({ listRow4Data = listRow4DataContent } = {}) {
  return (
    <details className="border border-solid border-surface-2 block rounded-lg bg-background">
      <summary className="flex py-4 px-5 items-center gap-3 text-color-001 font-semibold cursor-pointer">
        <span className="flex" aria-hidden="true">
          {" "}
          <Icon3 />
          {" "}
        </span>
        {" "}
        <span className="block">
          Table of Contents
        </span>
        {" "}
        <Icon4 />
        {" "}
      </summary>
      {" "}
      <nav className="border-t border-solid border-t-surface block pt-2 pb-5 px-5" data-component="nav" aria-label="Table of contents">
        <ol className="block pl-6 [list-style-type:none] list-outside">
          {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
        </ol>
        {" "}
      </nav>
      {" "}
    </details>
  );
}
