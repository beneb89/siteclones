import MediaTile, { type MediaTileData } from "../components/media-tile";
import { MediaTile_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { alt: "Consultant website with the title 'SUMMER VEIT | Consultant'", imgSrc: "/assets/cloned/images/d1e4a94741cb.png", label: "LaShonda Brown", text: "1" },
    { alt: "Consultant website with the title 'Boxfish studio new website'", imgSrc: "/assets/cloned/images/0ff761ababa8.jpg", label: "CREATIVE PIXXELS", text: "4" },
    { alt: "Consultant website with the title 'Swedish consulting company'", imgSrc: "/assets/cloned/images/9d239f90bbab.png", label: "FusionTrek", text: "3" },
    { alt: "Consultant website with the title 'Trendy website for business consulting company'", imgSrc: "/assets/cloned/images/4a3c1695e131.jpg", label: "Yevhen Genome", text: "5" },
    { alt: "Consultant website with the title 'Consulting Company Website'", imgSrc: "/assets/cloned/images/4626b5521c5a.png", label: "SetupShop™", text: "3" },
    { alt: "Consultant website with the title 'Powerful and friendly web design for our online community'", imgSrc: "/assets/cloned/images/cf6c301d1fd2.jpg", label: "CREATIVE PIXXELS", text: "14" },
    { alt: "Consultant website with the title 'We Run Your Practice'", imgSrc: "/assets/cloned/images/f7777e99813f.jpg", label: "“ ST “", text: "3" },
    { alt: "Consultant website with the title 'Business consulting conpany based in Dubai '", imgSrc: "/assets/cloned/images/2ac0b893fd78.png", label: "Creative_David", text: "2" },
    { alt: "Consultant website with the title 'Earlybirds.io'", imgSrc: "/assets/cloned/images/828beaaaa1a1.jpg", label: "CREATIVE PIXXELS", text: "1" },
    { alt: "Consultant website with the title 'rocket'", imgSrc: "/assets/cloned/images/b11511a6431f.jpg", label: "Spoon Lancer", text: "138" },
    { alt: "Consultant website with the title 'Technology web desgin'", imgSrc: "/assets/cloned/images/f1c0cc257c87.jpg", label: "OMGuys™", text: "34" },
    { alt: "Consultant website with the title 'Smartthinking.io'", imgSrc: "/assets/cloned/images/ee166ed13895.jpg", label: "Braunsberger", text: "9" },
    { alt: "Consultant website with the title 'Consulting business web design'", imgSrc: "/assets/cloned/images/f80ee41821d6.png", label: "PackaVita", text: "1" },
    { alt: "Consultant website with the title 'Web design for a sauce brokerage service '", imgSrc: "/assets/cloned/images/036e5191fff5.jpg", label: "Terry Bogard", text: "22" },
    { alt: "Consultant website with the title 'Webdesign Odion'", imgSrc: "/assets/cloned/images/83c6b80833ed.png", label: "malzi.", text: "13" },
    { alt: "Consultant website with the title 'Website Redesign For Computer Repair and IT Consulting Service'", imgSrc: "/assets/cloned/images/720f6191f2ef.png", label: "Pyrolectric", text: "56" },
    { alt: "Consultant website with the title 'Accounting & Consulting Service Website'", imgSrc: "/assets/cloned/images/538ced4a39f4.jpg", label: "The Lion King", text: "31" },
    { alt: "Consultant website with the title 'We appreciate well crafted, thoughtful design - Website for IT services company'", imgSrc: "/assets/cloned/images/b6f008ae8e91.jpg", label: "galinka", text: "19" },
    { alt: "Consultant website with the title 'WordPress theme design'", imgSrc: "/assets/cloned/images/df0782a31fc0.jpg", label: "Alex_M™", text: "0" },
    { alt: "Consultant website with the title 'Responsive Website for IT Security'", imgSrc: "/assets/cloned/images/00a2616dc4c3.png", label: "set4net", text: "5" },
    { alt: "Consultant website with the title 'Modern/business professional look Medical Insurance website'", imgSrc: "/assets/cloned/images/519e77d10bac.jpg", label: "Janki14", text: "14" }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <div className="block -mt-55 max-md:mt-0 md:max-lg:-mt-60 2xl:-mt-[15.3125rem] after:content-[''] after:table after:w-0 after:h-0">
      {mediaTileData.map((d, i) => <MediaTile key={i} d={d} styles={MediaTile_styles[i]} />)}
      {" "}
    </div>
  );
}
