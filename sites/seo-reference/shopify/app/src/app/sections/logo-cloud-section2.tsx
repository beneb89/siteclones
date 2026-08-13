import MediaTile4 from "../components/media-tile4";
import { MediaTile4_styles } from "../_styles";
import { mediaTile4Data as mediaTile4DataContent } from "../content";
/** Logo Cloud section. */
export default function LogoCloudSection2({ mediaTile4Data = mediaTile4DataContent } = {}) {
  return (
    <ul className="border-l border-solid border-l-border flex flex-col gap-4 [list-style-type:none] list-outside">
      {mediaTile4Data.map((d, i) => <MediaTile4 key={i} d={d} styles={MediaTile4_styles[i]} />)}
    </ul>
  );
}
