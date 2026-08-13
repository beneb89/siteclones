import Icon from "../svgs/svg-icon";
import TextLink from "../components/text-link";
import FeatureCard from "../components/feature-card";
import MediaLink, { type MediaLinkData } from "../components/media-link";
import MediaLink2, { type MediaLink2Data } from "../components/media-link2";
import MediaCard from "../components/media-card";
import Tile2, { type Tile2Data } from "../components/tile2";
import MediaTile from "../components/media-tile";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import LogoCloudItem from "../components/logo-cloud-item";
import Logo from "../components/logo";
import TextLink2, { type TextLink2Data } from "../components/text-link2";
import FeatureCard2, { type FeatureCard2Data } from "../components/feature-card2";
import Icon6 from "../svgs/svg-icon6";
import { TextLink2_meta } from "../ditto-meta";
import { TextLink_styles, FeatureCard_styles, MediaLink_styles, MediaLink2_styles, LogoCloudItem_styles, Logo_styles, TextLink2_styles } from "../_styles";
import { textLinkData as textLinkDataContent, features as featuresContent, mediaCardData as mediaCardDataContent, mediaTileData as mediaTileDataContent, logos as logosContent, logoData as logoDataContent } from "../content";
const MediaLink_data: MediaLinkData[] = [
    { alt: "Search Mentions", imgSrc: "/assets/cloned/svg/c265ec7a46de.svg", label: "LLM Mentions API 6", label2: "Search Mentions" },
    { alt: "Target", imgSrc: "/assets/cloned/svg/a4518bd486ae.svg", label: "LLM Mentions API 7", label2: "Target Metrics" },
    { alt: "Multi Target", imgSrc: "/assets/cloned/svg/7f63199cb3ca.svg", label: "LLM Mentions API 8", label2: "Multi-Target Metrics" },
    { alt: "Domain", imgSrc: "/assets/cloned/svg/96fb4a82aaf3.svg", label: "LLM Mentions API 9", label2: "Top Mentioned Domains & Pages" },
    { alt: "Top", imgSrc: "/assets/cloned/svg/4be67c0c00c2.svg", label: "LLM Mentions API 10", label2: "Top Mentioned Brands" }
];
const MediaLink2_data: MediaLink2Data[] = [
    { alt: "Historical", imgSrc: "/assets/cloned/svg/f4847020d765.svg", label: "LLM Mentions API 12", label2: "Historical" },
    { alt: "Delta", imgSrc: "/assets/cloned/svg/014e0508f017.svg", label: "LLM Mentions API 13", label2: "Timeseries Delta" },
    { alt: "NewLost", imgSrc: "/assets/cloned/svg/9adb918d14e5.svg", label: "LLM Mentions API 14", label2: "Timeseries New&Lost " }
];
const Tile2_data: Tile2Data[] = [
    { text: "Price per request", text2: "$0.1" },
    { text: "Number of requests", text2: "1" },
    { text: "Price per row", text2: "$0.001" },
    { text: "Number of rows", text2: "1,000" }
];
const TextLink2_data: TextLink2Data[] = [
    { ariacontrols: "bs-panel-1", ariaselected: "true", id: "bs-tab-1", label: "Rank Tracking" },
    { ariacontrols: "bs-panel-2", ariaselected: "false", id: "bs-tab-2", label: "Backlink Analysis" },
    { ariacontrols: "bs-panel-3", ariaselected: "false", id: "bs-tab-3", label: "Reputation Management" },
    { ariacontrols: "bs-panel-4", ariaselected: "false", id: "bs-tab-4", label: "Keyword Research" }
];
const FeatureCard2_data: FeatureCard2Data[] = [
    { title: "Well-rounded documentation", alt: "release 1", imgSrc: "/assets/cloned/images/5ba6285f1166.png", label: "LLM Mentions API 50", description: "DataForSEO offers a detailed documentation for every parameter, field and function you can come across while using our APIs and databases.", label2: "VIEW", height: "23", viewBox: "0 0 23 23", width: "23", icon: <>
            <path d="M17.25 0H9.34375C8.93945 0 8.5988 0.13851 8.32178 0.415527C8.04476 0.692545 7.90625 1.0332 7.90625 1.4375H15.8125V7.1875H21.5625V18.6875H16.5312V20.125H21.5625C21.9668 20.125 22.3075 19.9865 22.5845 19.7095C22.8615 19.4325 23 19.0918 23 18.6875V5.75L17.25 0ZM17.25 5.75V2.02148L20.9561 5.75H17.25ZM1.4375 2.875C1.0332 2.875 0.692546 3.01351 0.415527 3.29053C0.138509 3.56754 0 3.9082 0 4.3125V21.5625C0 21.9668 0.138509 22.3075 0.415527 22.5845C0.692546 22.8615 1.0332 23 1.4375 23H13.6562C14.0605 23 14.4012 22.8615 14.6782 22.5845C14.9552 22.3075 15.0938 21.9668 15.0938 21.5625V8.625L9.34375 2.875H1.4375ZM13.6562 21.5625H1.4375V4.3125H7.90625V10.0625H13.6562V21.5625ZM9.34375 8.625V4.89648L13.0498 8.625H9.34375Z" fill="#707070" />
            </> },
    { title: "GUI for API usage control", alt: "release 2", imgSrc: "/assets/cloned/images/e3e07b4da35a.png", label: "LLM Mentions API 51", description: "Every DataForSEO user has access to a comprehensive graphic user interface (GUI) and can monitor and control every aspect of data usage.", label2: "REGISTER", height: "23", viewBox: "0 0 23 23", width: "23", icon: <>
            <path d="M21.5625 9.32129L19.7207 8.91699C19.6608 8.67741 19.5822 8.44906 19.4849 8.23193C19.3875 8.01481 19.2865 7.80143 19.1816 7.5918L20.1699 5.92969C20.3646 5.63021 20.4844 5.28581 20.5293 4.89648C20.5742 4.50716 20.4544 4.17025 20.1699 3.88574L19.1592 2.875C18.8747 2.59049 18.5303 2.45947 18.126 2.48193C17.7217 2.50439 17.3698 2.61296 17.0703 2.80762L15.4531 3.84082C15.2435 3.736 15.0301 3.63867 14.813 3.54883C14.5959 3.45898 14.375 3.37663 14.1504 3.30176L13.7461 1.41504C13.6712 1.08561 13.499 0.767416 13.2295 0.460449C12.96 0.153482 12.623 0 12.2188 0H10.7812C10.377 0 10.055 0.153482 9.81543 0.460449C9.57585 0.767416 9.41862 1.0931 9.34375 1.4375L8.87207 3.2793C8.63249 3.35417 8.39665 3.44027 8.16455 3.5376C7.93245 3.63493 7.7041 3.74349 7.47949 3.86328L5.81738 2.80762C5.53288 2.61296 5.18473 2.50439 4.77295 2.48193C4.36117 2.45947 4.02051 2.59049 3.75098 2.875L2.71777 3.88574C2.44824 4.17025 2.33594 4.50716 2.38086 4.89648C2.42578 5.28581 2.53809 5.63021 2.71777 5.92969L3.77344 7.68164C3.68359 7.8763 3.59375 8.07845 3.50391 8.28809C3.41406 8.49772 3.33919 8.70736 3.2793 8.91699L1.4375 9.32129C1.0931 9.38118 0.767415 9.54964 0.460449 9.82666C0.153483 10.1037 0 10.4443 0 10.8486V12.2861C0 12.6755 0.153483 12.9899 0.460449 13.2295C0.767415 13.4691 1.0931 13.6338 1.4375 13.7236L3.30176 14.1729C3.36165 14.3825 3.43278 14.5809 3.51514 14.7681C3.59749 14.9552 3.68359 15.1387 3.77344 15.3184L2.71777 17.0703C2.53809 17.3698 2.42578 17.7142 2.38086 18.1035C2.33594 18.4928 2.44824 18.8298 2.71777 19.1143L3.75098 20.125C4.02051 20.4095 4.36117 20.5405 4.77295 20.5181C5.18473 20.4956 5.53288 20.387 5.81738 20.1924L7.47949 19.1367C7.7041 19.2565 7.9362 19.3651 8.17578 19.4624C8.41536 19.5597 8.65495 19.6458 8.89453 19.7207L9.34375 21.5625C9.43359 21.9069 9.59831 22.2326 9.83789 22.5396C10.0775 22.8465 10.3919 23 10.7812 23H12.2188C12.623 23 12.9637 22.8465 13.2407 22.5396C13.5177 22.2326 13.6862 21.9069 13.7461 21.5625L14.1504 19.6982C14.39 19.6234 14.6146 19.541 14.8242 19.4512C15.0339 19.3613 15.2435 19.264 15.4531 19.1592L17.0703 20.1924C17.3698 20.387 17.7217 20.4956 18.126 20.5181C18.5303 20.5405 18.8747 20.4095 19.1592 20.125L20.1699 19.1143C20.4544 18.8298 20.5742 18.4928 20.5293 18.1035C20.4844 17.7142 20.3646 17.3698 20.1699 17.0703L19.1816 15.4082C19.2865 15.2135 19.38 15.0151 19.4624 14.813C19.5448 14.6108 19.6234 14.3975 19.6982 14.1729L21.5625 13.7236C21.9069 13.6338 22.2326 13.4691 22.5396 13.2295C22.8465 12.9899 23 12.6755 23 12.2861V10.8486C23 10.4443 22.8465 10.1037 22.5396 9.82666C22.2326 9.54964 21.9069 9.38118 21.5625 9.32129ZM21.5625 12.1738C21.5326 12.2038 21.4914 12.23 21.439 12.2524C21.3866 12.2749 21.3229 12.2936 21.248 12.3086L18.5752 12.9824L18.3281 13.7236C18.2682 13.9033 18.2046 14.0793 18.1372 14.2515C18.0698 14.4237 17.9912 14.5921 17.9014 14.7568L17.542 15.4756L18.957 17.8115C19.002 17.8864 19.0356 17.9538 19.0581 18.0137C19.0806 18.0736 19.0918 18.126 19.0918 18.1709L18.1484 19.1143C18.1035 19.0993 18.0586 19.0806 18.0137 19.0581C17.9688 19.0356 17.9313 19.0169 17.9014 19.002L15.543 17.4971L14.8018 17.8789C14.6221 17.9688 14.4424 18.0511 14.2627 18.126C14.083 18.2008 13.9033 18.2682 13.7236 18.3281L12.9375 18.5977L12.3535 21.2705C12.3385 21.3304 12.3123 21.3903 12.2749 21.4502C12.2375 21.5101 12.2113 21.5475 12.1963 21.5625H10.8936C10.8636 21.5326 10.8374 21.4914 10.8149 21.439C10.7925 21.3866 10.7738 21.3229 10.7588 21.248L10.085 18.5977L9.32129 18.3506C9.12663 18.2907 8.93197 18.2196 8.7373 18.1372C8.54264 18.0549 8.34798 17.9613 8.15332 17.8564L7.41211 17.4746L5.05371 18.9795C5.00879 19.0094 4.96012 19.0356 4.90771 19.0581C4.85531 19.0806 4.80664 19.0918 4.76172 19.0918L3.81836 18.1709C3.81836 18.126 3.82959 18.0736 3.85205 18.0137C3.87451 17.9538 3.9082 17.8939 3.95312 17.834L5.41309 15.3857L5.07617 14.6895C4.98633 14.5247 4.90771 14.3638 4.84033 14.2065C4.77295 14.0493 4.7168 13.8958 4.67188 13.7461L4.4248 12.9824L1.79688 12.3086C1.70703 12.2936 1.63216 12.2749 1.57227 12.2524C1.51237 12.23 1.46745 12.2038 1.4375 12.1738V10.8486C1.45247 10.8486 1.48617 10.8337 1.53857 10.8037C1.59098 10.7738 1.63965 10.7513 1.68457 10.7363L4.40234 10.1299L4.64941 9.34375C4.69434 9.17904 4.75049 9.01432 4.81787 8.84961C4.88525 8.6849 4.96387 8.50521 5.05371 8.31055L5.41309 7.61426L3.95312 5.18848C3.9082 5.11361 3.87451 5.04622 3.85205 4.98633C3.82959 4.92643 3.81836 4.87402 3.81836 4.8291L4.76172 3.88574C4.80664 3.90072 4.85156 3.91943 4.89648 3.94189C4.94141 3.96436 4.97884 3.98307 5.00879 3.99805L7.41211 5.52539L8.15332 5.14355C8.34798 5.03874 8.54264 4.94515 8.7373 4.86279C8.93197 4.78044 9.12663 4.70931 9.32129 4.64941L10.085 4.40234L10.7363 1.79688C10.7513 1.70703 10.7738 1.63216 10.8037 1.57227C10.8337 1.51237 10.8636 1.46745 10.8936 1.4375H12.2188C12.2188 1.4375 12.2337 1.46371 12.2637 1.51611C12.2936 1.56852 12.3161 1.62467 12.3311 1.68457L12.915 4.40234L13.7012 4.67188C13.8958 4.7168 14.083 4.78044 14.2627 4.86279C14.4424 4.94515 14.6221 5.03125 14.8018 5.12109L15.543 5.50293L17.8564 4.02051C17.9014 3.99056 17.95 3.9681 18.0024 3.95312C18.0548 3.93815 18.1035 3.93066 18.1484 3.93066L19.0918 4.85156C19.0918 4.88151 19.0806 4.92643 19.0581 4.98633C19.0356 5.04622 19.002 5.10612 18.957 5.16602L17.542 7.52441L17.9014 8.24316C18.0062 8.43783 18.096 8.625 18.1709 8.80469C18.2458 8.98438 18.3057 9.16406 18.3506 9.34375L18.5977 10.1299L21.2705 10.7363C21.3454 10.7513 21.4128 10.7775 21.4727 10.8149C21.5326 10.8524 21.57 10.8786 21.585 10.8936L21.5625 12.1738ZM11.5 7.1875C10.3171 7.1875 9.30257 7.60677 8.45654 8.44531C7.61051 9.28385 7.1875 10.3021 7.1875 11.5C7.1875 12.6979 7.61051 13.7161 8.45654 14.5547C9.30257 15.3932 10.3171 15.8125 11.5 15.8125C12.6979 15.8125 13.7199 15.3932 14.5659 14.5547C15.4119 13.7161 15.835 12.6979 15.835 11.5C15.835 10.3021 15.4119 9.28385 14.5659 8.44531C13.7199 7.60677 12.6979 7.1875 11.5 7.1875ZM11.5 14.375C10.7064 14.375 10.0288 14.0942 9.46729 13.5327C8.90576 12.9712 8.625 12.2936 8.625 11.5C8.625 10.7064 8.90576 10.0288 9.46729 9.46729C10.0288 8.90576 10.7064 8.625 11.5 8.625C12.2936 8.625 12.9712 8.90576 13.5327 9.46729C14.0942 10.0288 14.375 10.7064 14.375 11.5C14.375 12.2936 14.0942 12.9712 13.5327 13.5327C12.9712 14.0942 12.2936 14.375 11.5 14.375Z" fill="#707070" />
            </> },
    { title: "Ad hoc integration and deployment support", alt: "release 3", imgSrc: "/assets/cloned/images/44f2a0f20cc4.png", label: "LLM Mentions API 52", description: "Our support team is available 24/7 to ensure you get the required assistance and all your requests are addressed promptly and proficiently.", label2: "CONTACT US", height: "24", viewBox: "0 0 24 24", width: "24", icon: <>
            <path d="M22.4843 17.3623C22.3945 17.2874 22.1249 17.1003 21.6757 16.8008C21.2265 16.5013 20.7361 16.1756 20.2045 15.8237C19.673 15.4718 19.1713 15.1424 18.6996 14.8354C18.228 14.5285 17.9322 14.3376 17.8124 14.2627C17.7076 14.2028 17.5953 14.1541 17.4755 14.1167C17.3557 14.0793 17.2285 14.0605 17.0937 14.0605C16.914 14.0605 16.7306 14.0868 16.5434 14.1392C16.3562 14.1916 16.1653 14.2702 15.9706 14.375C15.791 14.4648 15.4728 14.6408 15.0161 14.9028C14.5593 15.1649 14.1962 15.3708 13.9267 15.5205C13.6871 15.3558 13.2828 15.0376 12.7138 14.5659C12.1448 14.0942 11.4111 13.4092 10.5126 12.5107C9.62917 11.6273 8.9516 10.901 8.47992 10.332C8.00824 9.76302 7.69004 9.35872 7.52533 9.11914C7.67507 8.83464 7.87722 8.46777 8.13178 8.01855C8.38633 7.56934 8.56602 7.25488 8.67084 7.0752C8.85053 6.71582 8.94786 6.37142 8.96283 6.04199C8.9778 5.71256 8.91791 5.43555 8.78314 5.21094C8.70827 5.09115 8.51735 4.79915 8.21039 4.33496C7.90342 3.87077 7.574 3.37288 7.22211 2.84131C6.87022 2.30973 6.54079 1.81559 6.23383 1.35889C5.92686 0.902182 5.74343 0.628906 5.68353 0.539062C5.56374 0.359375 5.39903 0.224609 5.18939 0.134766C4.97976 0.0449219 4.75515 0 4.51557 0C4.3209 0 4.12624 0.0299473 3.93158 0.0898438C3.73692 0.14974 3.54974 0.239584 3.37006 0.359375C3.35508 0.37435 3.17165 0.516602 2.81976 0.786133C2.46788 1.05566 2.0823 1.38883 1.66303 1.78564C1.24376 2.18246 0.858176 2.60172 0.506288 3.04346C0.1544 3.48519 -0.0140572 3.88574 0.000916773 4.24512C0.0308647 5.21842 0.270448 6.22542 0.719667 7.26611C1.16889 8.3068 1.73415 9.33626 2.41547 10.3545C3.09678 11.3727 3.84922 12.3573 4.67279 13.3081C5.49636 14.259 6.30495 15.1312 7.09857 15.9248C7.89219 16.7184 8.76443 17.5308 9.71527 18.3618C10.6661 19.1929 11.6507 19.9491 12.6689 20.6304C13.6871 21.3117 14.7203 21.877 15.7685 22.3262C16.8167 22.7754 17.8349 23.015 18.8232 23.0449H18.8456C19.19 23.0449 19.5831 22.869 20.0248 22.5171C20.4666 22.1652 20.8821 21.7796 21.2714 21.3604C21.6607 20.9411 21.9902 20.5555 22.2597 20.2036C22.5292 19.8517 22.664 19.6758 22.664 19.6758C22.9785 19.2116 23.102 18.7586 23.0346 18.3169C22.9672 17.8752 22.7838 17.557 22.4843 17.3623ZM21.496 18.8223C21.0468 19.4512 20.5452 20.0464 19.9912 20.6079C19.4371 21.1694 19.0328 21.5026 18.7783 21.6074C18.1044 21.5625 17.367 21.3866 16.5659 21.0796C15.7648 20.7726 14.915 20.3384 14.0165 19.7769C13.1181 19.2153 12.171 18.5265 11.1752 17.7104C10.1795 16.8944 9.15749 15.9622 8.10931 14.9141C7.07611 13.8659 6.15147 12.8477 5.33539 11.8594C4.51931 10.8711 3.82676 9.92773 3.25775 9.0293C2.68874 8.13086 2.25075 7.28109 1.94379 6.47998C1.63682 5.67887 1.46836 4.94141 1.43842 4.26758C1.52826 4.01302 1.85394 3.60872 2.41547 3.05469C2.97699 2.50065 3.57221 1.99902 4.20111 1.5498C4.24603 1.51986 4.2947 1.49365 4.34711 1.47119C4.39952 1.44873 4.45567 1.4375 4.51557 1.4375C4.51557 1.4375 4.52305 1.4375 4.53803 1.4375C4.553 1.4375 4.56049 1.44499 4.56049 1.45996C4.6653 1.59473 4.85997 1.87923 5.14447 2.31348C5.42898 2.74772 5.7322 3.20443 6.05414 3.68359C6.37608 4.16276 6.6793 4.61947 6.96381 5.05371C7.24831 5.48796 7.43549 5.77995 7.52533 5.92969C7.52533 5.95963 7.51784 6.01579 7.50287 6.09814C7.4879 6.1805 7.45046 6.28158 7.39056 6.40137C7.33067 6.52116 7.19965 6.757 6.9975 7.10889C6.79535 7.46077 6.55202 7.89128 6.26752 8.40039L5.8183 9.18652L6.3349 9.92773C6.52956 10.2122 6.87771 10.654 7.37933 11.2529C7.88096 11.8519 8.58848 12.6156 9.50189 13.5439C10.4153 14.4574 11.1752 15.1611 11.7817 15.6553C12.3881 16.1494 12.8261 16.4938 13.0956 16.6885L13.8369 17.2275L14.6454 16.7783C15.0198 16.5537 15.4091 16.3291 15.8134 16.1045C16.2177 15.8799 16.4947 15.7301 16.6445 15.6553C16.7643 15.5804 16.8616 15.5355 16.9365 15.5205C17.0113 15.5055 17.0637 15.498 17.0937 15.498C17.0937 15.498 17.1012 15.498 17.1162 15.498C17.2509 15.5879 17.5317 15.7751 17.9584 16.0596C18.3852 16.3441 18.8456 16.651 19.3398 16.9805C19.8339 17.3099 20.2981 17.6169 20.7324 17.9014C21.1666 18.1859 21.4586 18.3805 21.6083 18.4854C21.6083 18.5153 21.6046 18.5602 21.5971 18.6201C21.5896 18.68 21.5559 18.7474 21.496 18.8223ZM15.3867 8.60254L21.5634 2.4707L21.541 5.95215C21.541 6.08691 21.5896 6.21045 21.687 6.32275C21.7843 6.43506 21.9078 6.49121 22.0576 6.49121H22.4394C22.5742 6.47624 22.694 6.42757 22.7988 6.34521C22.9036 6.26286 22.9635 6.1543 22.9785 6.01953V0.831055C22.9785 0.831055 22.9747 0.827311 22.9672 0.819824C22.9597 0.812338 22.956 0.808594 22.956 0.808594L23.0009 0.539062C23.0009 0.479166 22.9897 0.415527 22.9672 0.348145C22.9448 0.280762 22.9111 0.224609 22.8662 0.179688C22.8212 0.134766 22.7651 0.0973301 22.6977 0.0673828C22.6303 0.0374355 22.5667 0.0224609 22.5068 0.0224609L22.2372 0.0449219C22.2372 0.0449219 22.2335 0.0449219 22.226 0.0449219C22.2185 0.0449219 22.2148 0.0449219 22.2148 0.0449219L17.0712 0.0224609C16.9215 0.0224609 16.7942 0.0748692 16.6894 0.179688C16.5846 0.284506 16.5322 0.411783 16.5322 0.561523V0.920898C16.5471 1.10059 16.6145 1.23535 16.7343 1.3252C16.8541 1.41504 16.9889 1.45996 17.1386 1.45996H20.5302L14.3759 7.5918C14.2262 7.72656 14.1513 7.89502 14.1513 8.09717C14.1513 8.29932 14.2262 8.46777 14.3759 8.60254C14.5107 8.75228 14.6791 8.82715 14.8813 8.82715C15.0834 8.82715 15.2519 8.75228 15.3867 8.60254Z" fill="#707070" />
            </> }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ textLinkData = textLinkDataContent, features = featuresContent, mediaLinkData = MediaLink_data, mediaLink2Data = MediaLink2_data, mediaCardData = mediaCardDataContent, tile2Data = Tile2_data, mediaTileData = mediaTileDataContent, logos = logosContent, logoData = logoDataContent, textLink2Data = TextLink2_data, features2 = FeatureCard2_data } = {}) {
  return (
    <main className="block" id="main">
      <section className="block relative isolate pt-24 pb-16 overflow-hidden text-background text-center bg-color-011">
        <img className="w-320 h-113 block absolute top-0 left-0 -z-1 max-w-full overflow-clip object-cover object-[50%_0%] aspect-[auto_1920/484] align-middle max-md:w-[23.4375rem] max-md:h-123.5 md:max-lg:w-192 2xl:w-480" data-component="image" alt="Hero Background" height="484" sizes="(max-width: 1920px) 100vw, 1920px" src="/assets/cloned/images/ae5fc1dd539e.webp" srcSet="/assets/cloned/images/ae5fc1dd539e.webp 1920w, /assets/cloned/images/73c5960abb3d.webp 300w, /assets/cloned/images/c3f2c8f6292f.webp 1500w, /assets/cloned/images/ba0afac1f5b5.webp 768w, /assets/cloned/images/0efd87a15635.webp 1536w" title="LLM Mentions API 1" width="1920" />
        {" "}
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="w-full max-w-224 flex mb-10 flex-col gap-8 text-left">
            <h1 className="block text-5xl font-bold leading-[3.3125rem] tracking-[-1.21px] max-md:text-[2.1875rem] max-md:leading-[2.375rem] max-md:tracking-[-0.88px]" data-component="heading">
              LLM Mentions API for
              <br className="inline" />
              AI visibility and GEO data
            </h1>
            {" "}
            <p className="block text-xl font-medium leading-[1.6875rem]">
              <span className="inline text-2xl leading-[2rem]">
                Track brand mentions and AI visibility across LLMs
              </span>
            </p>
            {" "}
            <div className="flex flex-wrap justify-start gap-4">
              <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center [align-self:start] gap-[0.4375rem] overflow-hidden text-color-012 text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20678px_15.5169px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55169)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.336903px_0.842257px_0px] focus:outline-color-012 focus:transform-[matrix(1,0,0,1,0,-0.0438446)]" data-ditto-id="style-button-2" data-component="button" href="https://app.dataforseo.com/signin">
                Try now
              </a>
              {" "}
              <a className="h-[3.15rem] border-2 border-solid border-primary flex relative z-1 py-3 px-[2.1875rem] rounded-[3px] justify-center items-center [align-self:start] gap-[0.4375rem] overflow-hidden text-primary text-sm font-medium leading-[1.375rem] cursor-pointer before:content-[''] before:block before:absolute before:top-[1.45rem] before:-right-19.5 before:-bottom-[1.45rem] before:left-19.5 before:-z-1 before:w-39 before:h-[2.9rem] before:bg-primary before:opacity-0 before:transform-[matrix(0,0,0,0,-78,-23.1953)] before:origin-[78px_23.1953px] hover:shadow-[var(--clr-33)_0px_6.20281px_15.507px_0px] hover:text-clr-34 hover:[text-decoration-color:var(--clr-34)] hover:transform-[matrix(1,0,0,1,0,-1.5507)] focus:shadow-[var(--clr-49)_0px_0.337789px_0.844474px_0px] focus:text-clr-50 focus:outline-clr-50 focus:[text-decoration-color:var(--clr-50)] focus:transform-[matrix(1,0,0,1,0,-0.0435874)]" data-ditto-id="style-button-3" data-component="button" href="/pricing/ai-optimization/llm-mentions">
                SEE PRICING
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="block">
        <section className="block pt-12">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="block mb-8 text-center" />
            {" "}
            <div className="border border-solid border-border flex py-8 px-6 rounded-lg overflow-hidden shadow-[var(--clr-2)_0px_4px_6px_0px,var(--clr-3)_0px_2px_4px_0px] max-md:py-5 max-md:px-4 max-md:flex-col max-md:grid-cols-2 md:max-lg:grid md:max-lg:grid-cols-[359.969px_359.969px] md:max-lg:p-0">
              <div className="border-r border-solid border-r-border block py-4 px-6 flex-1 text-center max-lg:border-b max-lg:border-b-border max-md:pb-5 max-md:px-4 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] focus:outline-foreground">
                <p className="block" />
                <div className="flex flex-col gap-2">
                  <div className="block">
                    <div className="block text-color-001 text-2xl font-semibold leading-[2.375rem] max-md:text-lg max-md:leading-[1.8125rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[2.3125rem]">
                      Total LLM Prompts
                    </div>
                    {" "}
                    <div className="block text-accent [font-family:Inter,_sans-serif] text-[2rem] font-bold leading-[2.375rem] tracking-[-0.32px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]">
                      311.3M+
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="border-r border-solid border-r-border block py-4 px-6 flex-1 text-center max-lg:border-b max-lg:border-b-border max-md:pb-5 max-md:px-4 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] focus:outline-foreground">
                <div className="flex flex-col gap-2">
                  <div className="block">
                    <div className="block text-color-001 text-2xl font-semibold leading-[2.375rem] max-md:text-lg max-md:leading-[1.8125rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[2.3125rem]">
                      ChatGPT Prompts
                    </div>
                    {" "}
                    <div className="block text-accent [font-family:Inter,_sans-serif] text-[2rem] font-bold leading-[2.375rem] tracking-[-0.32px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]">
                      24.9M+
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block py-4 px-6 flex-1 text-center max-md:px-4 max-lg:col-span-full">
                <div className="flex flex-col gap-2">
                  <div className="block">
                    <div className="block text-color-001 text-2xl font-semibold leading-[2.375rem] max-md:text-lg max-md:leading-[1.8125rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[2.3125rem]">
                      Google AIO Prompts
                    </div>
                    {" "}
                    <div className="block text-accent [font-family:Inter,_sans-serif] text-[2rem] font-bold leading-[2.375rem] tracking-[-0.32px] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.24px]">
                      286.4M+
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <section className="block py-16 max-lg:py-10 2xl:py-20">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="flex mb-10 flex-col gap-8">
            <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.3125rem] text-center max-md:text-2xl max-md:leading-[1.625rem]" data-component="heading">
              {"Have questions about LLM Mentions? "}
              <br className="inline" />
              Ask Sofia!
            </h2>
            {" "}
          </div>
          {" "}
          <div className="block max-w-full rounded-xl bg-background max-lg:rounded-lg">
            <div className="block">
              <div className="block" id="custom-widget-container">
                <div className="block max-w-288 mx-auto p-4">
                  <div className="border-t-4 border-solid border-t-primary block p-6 rounded-[10px] bg-background shadow-[var(--clr-4)_4.9728px_-3.0272px_15px_0px] [animation-name:ai-widget-shadow-orbit-ZOwgn] [animation-duration:3s] [animation-timing-function:linear] [animation-iteration-count:infinite] max-md:shadow-[var(--clr-5)_-7.63889px_0.361109px_15px_0px] md:max-lg:shadow-[var(--clr-6)_4.2656px_-3.7344px_15px_0px] 2xl:shadow-[var(--clr-7)_2.96px_-5.04px_15px_0px]">
                    <div className="flex mb-6 items-start gap-4 max-md:flex-col">
                      <div className="w-20 flex justify-center items-center shrink-0 text-primary">
                        <img className="w-20 h-[4.3125rem] block max-w-full overflow-clip align-middle" data-component="image" alt="Sofia" src="/assets/cloned/svg/46d0bc097fdd.svg" />
                      </div>
                      <div className="block flex-1">
                        <h2 className="block mb-1 text-accent text-2xl font-bold leading-8" data-component="heading">
                          Meet Sofia — Your DataForSEO AI Assistant
                        </h2>
                        <p className="block text-clr-8 leading-6">
                          Tell us about your use case and get custom-tailored data roadmap
                        </p>
                      </div>
                    </div>
                    <form className="border border-solid border-color-010 block mb-4 rounded-[10px] overflow-hidden bg-color-003 shadow-[var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px] w-full">
                      <textarea className="w-full h-14 min-h-10 block p-4 rounded-md overflow-auto text-muted leading-6 whitespace-pre-wrap [overflow-wrap:break-word] [background-clip:padding-box] shadow-[var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--muted)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px] [-webkit-background-clip:padding-box] cursor-text hover:border-color-002 focus:bg-background focus:border-color-009 focus:shadow-[var(--clr-51)_0px_0px_0px_3px] focus:outline-muted" data-ditto-id="style-textarea" data-component="textarea" name="message" placeholder="Tell about your use case..." />
                      <div className="flex py-2 px-4 justify-between items-center shadow-[var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_0px]">
                        <button className="border border-solid border-border flex relative opacity-50 p-3 rounded-full justify-center items-center gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center whitespace-nowrap text-nowrap bg-clr-10 cursor-not-allowed pointer-events-none h-10 w-10 hover:bg-primary hover:border-clr-35 hover:shadow-[var(--clr-2)_0px_1.67383px_6.69533px_0px] focus:bg-clr-52 focus:border-clr-53 focus:shadow-[var(--clr-49)_0px_0.182601px_0.730405px_0px] focus:outline-muted" data-component="button" disabled type="submit">
                          <Icon />
                        </button>
                      </div>
                    </form>
                    <div className="block mb-8">
                      <div className="flex flex-wrap gap-2">
                        {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="block">
        <section className="block pb-16 max-lg:pb-10 2xl:pb-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="flex mb-10 flex-col gap-8">
              <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.3125rem] text-center max-md:text-2xl max-md:leading-[1.625rem]" data-component="heading">
                Tap into the largest database of millions of LLM prompts and petabytes of related data
              </h2>
              {" "}
            </div>
            {" "}
            <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-3">
              {features.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <div className="block">
        <section className="block pb-12" id="block-1">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <h2 className="block mb-10 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] text-center max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading" />
            {" "}
            <div className="grid items-center gap-12 grid-cols-2 max-lg:gap-8 max-lg:grid-cols-1">
              <div className="block">
                <img className="w-144.5 h-[25.0625rem] block max-w-full rounded-lg overflow-clip aspect-[auto_750/521] align-middle max-md:w-60 max-md:h-[10.4375rem] max-lg:mb-8 max-md:mx-[51.5px] md:max-lg:w-[31.5625rem] md:max-lg:h-[21.9375rem] md:max-lg:mx-[108.3px] 2xl:w-142 2xl:h-[24.6875rem]" data-component="image" alt="LLM chats data" height="521" sizes="auto, (max-width: 750px) 100vw, 750px" src="/assets/cloned/images/2a0147f9a3f6.webp" srcSet="/assets/cloned/images/2a0147f9a3f6.webp 750w, /assets/cloned/images/7b017d5202e6.webp 300w" title="LLM Mentions API 5" width="750" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <h3 className="border-l-4 border-solid border-l-primary block mb-6 pl-8 text-color-001 text-3xl font-bold leading-9 max-md:text-xl max-md:leading-6 md:max-lg:text-[1.6875rem] md:max-lg:leading-[2rem]" data-component="heading">
                  Measure AI brand visibility with aggregated LLM chats data
                </h3>
                {" "}
                <p className="block mb-6 text-lg leading-[1.8125rem]">
                  The DataFoSEO LLM Mentions API offers data that generating optimization specialists can use to track and improve brand visibility in AI answers. For software companies, the same data powers a new generation of AI visibility and generative-search tracking tools, turning raw mention data into products clients can act on. And by surfacing the domains and pages cited most often in AI responses, the API helps teams pinpoint the authoritative sources shaping those answers.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <div className="block">
        <section className="block pb-16 max-lg:pb-10 2xl:pb-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="border border-solid border-color-003 grid mt-12 rounded-2xl overflow-hidden bg-background shadow-[var(--clr-11)_0px_10px_15px_0px,var(--clr-3)_0px_4px_6px_0px] grid-cols-[320px_1fr] max-lg:grid-cols-1">
              <div className="border-r border-solid border-r-color-003 flex flex-col bg-clr-12 max-lg:border-b max-lg:border-b-color-003 max-lg:overflow-auto max-lg:border-r-[0] max-lg:border-initial max-lg:border-r-[initial] max-lg:[flex-direction:initial] grid-cols-1">
                {mediaLinkData.map((d, i) => <MediaLink key={i} d={d} styles={MediaLink_styles[i]} />)}
                {" "}
              </div>
              {" "}
              <div className="block">
                <div className="block p-8 [animation-name:fadeIn] [animation-duration:0.4s] max-md:p-6">
                  <h3 className="block mb-6 text-color-001 text-[2rem] font-bold leading-[2.375rem] capitalize max-lg:text-2xl max-lg:leading-[1.8125rem] focus:outline-color-001" data-component="heading">
                    Search for domain or keyword mentions in LLM responses’ data
                  </h3>
                  {" "}
                  <p className="w-full max-w-175 block mb-8 text-muted text-lg leading-[1.8125rem] focus:outline-muted">
                    DataForSEO boasts a vast database of LLM responses from the most popular AI models, allowing you to search for the mentions relevant to a keyword or domain.
                  </p>
                  {" "}
                  <p className="w-full max-w-175 block mb-8 text-muted text-lg leading-[1.8125rem]">
                    {" Use the Search Mentions endpoint to specify a keyword or domain and explore how and in which context they are mentioned in AI responses. "}
                  </p>
                  {" "}
                  <div className="flex flex-wrap gap-4">
                    <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-background text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20631px_15.5158px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55158)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.337908px_0.84477px_0px] focus:outline-background focus:transform-[matrix(1,0,0,1,0,-0.0438141)]" data-ditto-id="style-button-4" data-component="button" href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/search_mentions/live/">
                      See Docs
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <div className="block">
        <section className="block pt-8 pb-12" id="block-2">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <h2 className="block mb-10 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] text-center max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading" />
            {" "}
            <div className="grid items-center gap-12 grid-cols-2 max-lg:gap-8 max-lg:grid-cols-1">
              <div className="block">
                <img className="w-144.5 h-[24.4375rem] block max-w-full rounded-lg overflow-clip aspect-[auto_700/474] align-middle max-md:w-60 max-md:h-[10.1875rem] max-lg:mb-8 max-md:mx-[51.5px] md:max-lg:w-[31.5625rem] md:max-lg:h-85.5 md:max-lg:mx-[108.3px] 2xl:w-142 2xl:h-[24.0625rem]" data-component="image" alt="Historical LLM Mentions" height="474" sizes="auto, (max-width: 700px) 100vw, 700px" src="/assets/cloned/images/074ff2ae45b2.webp" srcSet="/assets/cloned/images/074ff2ae45b2.webp 700w, /assets/cloned/images/95d1a0b4354b.webp 300w" title="LLM Mentions API 11" width="700" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <h3 className="border-l-4 border-solid border-l-primary block mb-6 pl-8 text-color-001 text-3xl font-bold leading-9 max-md:text-xl max-md:leading-6 md:max-lg:text-[1.6875rem] md:max-lg:leading-[2rem]" data-component="heading">
                  Historical LLM Mentions data for identifying trends and tracking GEO progress
                </h3>
                {" "}
                <p className="block mb-6 text-lg leading-[1.8125rem]">
                  Historical LLM Mentions endpoints let you move beyond a current data point and see how a brand, domain, or keyword’s presence in AI answers has shifted over time. Instead of measuring visibility on any given day, you can pull mention data across past periods to surface trends, spot when a competitor started gaining ground in LLM responses, and tie changes in AI visibility back to the cited content that drove them.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <div className="block">
        <section className="block pb-16 max-lg:pb-10 2xl:pb-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="border border-solid border-color-003 grid mt-12 rounded-2xl overflow-hidden bg-background shadow-[var(--clr-11)_0px_10px_15px_0px,var(--clr-3)_0px_4px_6px_0px] grid-cols-[auto_1fr] max-lg:grid-cols-1">
              <div className="border-r border-solid border-r-color-003 flex flex-col bg-clr-12 max-lg:border-b max-lg:border-b-color-003 max-lg:overflow-auto max-lg:border-r-[0] max-lg:border-initial max-lg:border-r-[initial] max-lg:[flex-direction:initial]">
                {mediaLink2Data.map((d, i) => <MediaLink2 key={i} d={d} styles={MediaLink2_styles[i]} />)}
                {" "}
              </div>
              {" "}
              <div className="block">
                <div className="h-full block p-8 [animation-name:fadeIn] [animation-duration:0.4s] max-md:p-6">
                  <h3 className="block mb-6 text-color-001 text-[2rem] font-bold leading-[2.375rem] capitalize max-lg:text-2xl max-lg:leading-[1.8125rem] focus:outline-color-001" data-component="heading">
                    Analyze historical LLM Mentions data for domains, brands, or keywords
                  </h3>
                  {" "}
                  <p className="w-full max-w-175 block mb-8 text-muted text-lg leading-[1.8125rem] focus:outline-muted">
                    The Live LLM Mentions Historical endpoint returns month-by-month mention counts and AI search volume for any keyword or domain across Google’s AI Overviews and ChatGPT, with data going back to 2025.
                  </p>
                  {" "}
                  <p className="w-full max-w-175 block mb-8 text-muted text-lg leading-[1.8125rem]">
                    Get a continuous timeline of how your brand surfaces in AI answers.
                  </p>
                  {" "}
                  <div className="flex flex-wrap gap-4">
                    <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-background text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20348px_15.5087px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55087)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.335682px_0.839206px_0px] focus:outline-background focus:transform-[matrix(1,0,0,1,0,-0.043631)]" data-ditto-id="style-button-5" data-component="button" href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/historical/live/">
                      SEE DOCS
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <div className="block">
        <section className="block pt-8 pb-16 max-lg:pb-10 2xl:pb-20" id="block-3">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <h2 className="block mb-10 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] text-center max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading" />
            {" "}
            <div className="grid items-center gap-12 grid-cols-2 max-lg:gap-8 max-lg:grid-cols-1">
              <div className="block">
                <img className="w-144.5 h-[27.4375rem] block max-w-full rounded-lg overflow-clip aspect-[auto_700/532] align-middle max-md:w-60 max-md:h-45.5 max-lg:mb-8 max-md:mx-[51.5px] md:max-lg:w-[31.5625rem] md:max-lg:h-96 md:max-lg:mx-[108.3px] 2xl:w-142 2xl:h-108" data-component="image" alt="LLM mentions data" height="532" sizes="auto, (max-width: 700px) 100vw, 700px" src="/assets/cloned/images/35251ec45f3c.webp" srcSet="/assets/cloned/images/35251ec45f3c.webp 700w, /assets/cloned/images/b6d7f1930e81.webp 300w" title="LLM Mentions API 15" width="700" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <h3 className="border-l-4 border-solid border-l-primary block mb-6 pl-8 text-color-001 text-3xl font-bold leading-9 max-md:text-xl max-md:leading-6 md:max-lg:text-[1.6875rem] md:max-lg:leading-[2rem]" data-component="heading">
                  Lightweight endpoints for obtaining LLM mentions data quickly and without overhead
                </h3>
                {" "}
                <p className="block mb-6 text-lg leading-[1.8125rem]">
                  The Lite endpoints are built for when you want LLM Mentions data ASAP. Each returns the same core data – mention counts and AI search volume for your target keywords, domains, brands, categories, or pages across Google’s AI Overviews and ChatGPT, but trimmed to the essentials, skipping the heavier breakdowns. That makes them the fast, lightweight way to check AI visibility at a glance, ideal for dashboards, quick comparisons, and high-volume monitoring.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <section className="block py-12 bg-background [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-lg:py-8" style={{ backgroundImage: "linear-gradient(132.92deg, var(--clr-13) 9.56%, var(--clr-14) 55.33%, var(--clr-15) 101.11%), none" }}>
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="flex justify-between items-center gap-8 max-md:flex-col max-md:text-center">
            <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
              <h2 className="block text-color-001 text-2xl font-bold leading-[1.8125rem] whitespace-nowrap max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem]" data-component="heading">
                Start your unlimited free trial
              </h2>
              {" "}
            </div>
            {" "}
            <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
              <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-color-012 text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer whitespace-nowrap hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20402px_15.51px_0px] hover:transform-[matrix(1,0,0,1,0,-1.551)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.334706px_0.836766px_0px] focus:outline-color-012 focus:transform-[matrix(1,0,0,1,0,-0.0434707)]" data-ditto-id="style-button-6" data-component="button" href="https://app.dataforseo.com/register">
                Sign up now
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block py-16 max-lg:py-10 2xl:py-20">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="block mb-10 text-center">
            <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
              DataForSEO LLM Mentions API Pricing
            </h2>
            {" "}
          </div>
          {" "}
          <div className="grid gap-6 grid-cols-3 max-lg:grid-cols-1">
            {mediaCardData.map((d, i) => <MediaCard key={i} d={d} />)}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="block">
        <section className="block pt-8 pb-16 max-lg:pb-10 2xl:pb-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="flex mb-10 flex-col gap-8">
              <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.3125rem] text-center max-md:text-2xl max-md:leading-[1.625rem]" data-component="heading">
                Pay As You Go Pricing
              </h2>
              {" "}
            </div>
            {" "}
            <div className="block max-w-full">
              <div className="flex justify-center gap-6 max-lg:flex-col">
                <div className="block mb-6 p-8 rounded-lg basis-[34%] bg-background shadow-[var(--clr-16)_0px_7px_20px_0px] max-lg:p-4">
                  <div className="border-b border-solid border-b-surface-4 flex mb-6 pb-4 justify-between items-center">
                    <h2 className="block text-color-001 text-2xl font-semibold leading-[1.8125rem] max-md:text-[1.1875rem] max-md:leading-[1.4375rem]" data-component="heading">
                      Request Settings
                    </h2>
                    {" "}
                    <span className="block text-accent text-sm font-semibold leading-[1.375rem]">
                      API Mode: LIVE
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="block mb-6">
                    <h4 className="block mb-2 text-clr-17 text-lg font-semibold leading-[1.5625rem]" data-component="heading">
                      {" Real-time results with a single POST request "}
                    </h4>
                    {" "}
                    <p className="block mt-[0.3125rem] text-clr-18 text-sm leading-[1.375rem]">
                      {" Your account will be billed for setting a task and retrieving its results, where one row in the results is the object containing data on a single domain or keyword mention with related data. "}
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="block mt-20 mb-6 max-md:mt-4">
                    <label className="flex mb-2 items-center text-muted text-[0.9375rem] font-medium leading-6 cursor-pointer focus:outline-muted">
                      {" How many rows do you need? "}
                    </label>
                    {" "}
                    <div className="flex items-center gap-4 max-md:block">
                      <input className="w-48.5 h-6 block rounded-[5px] flex-1 cursor-pointer max-md:w-[19.4375rem] max-md:inline-block md:max-lg:w-[33.6875rem] 2xl:w-47" data-component="input" max="1000000" min="100" step="100" type="range" value="1000" />
                      {" "}
                      <span className="hidden min-w-12.5 text-accent font-semibold text-right">
                        1,000
                      </span>
                      {" "}
                      <div className="border border-solid border-color-006 flex max-w-37.5 py-1 px-2 rounded-md items-center bg-background max-md:inline-flex max-md:mt-4">
                        <input className="w-auto h-[1.3125rem] block rounded-md overflow-clip text-muted text-sm leading-[1.3125rem] text-left cursor-text hover:border-color-002 focus:bg-background focus:border-color-009 focus:shadow-[var(--clr-51)_0px_0px_0px_3px]" data-component="input" max="1000000" min="100" step="100" type="number" value="1000" />
                        {" "}
                        <span className="block ml-1.5 text-clr-19 text-sm leading-[1.375rem] whitespace-nowrap text-nowrap">
                          rows
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="block mb-6 p-8 rounded-lg basis-[34%] bg-background shadow-[var(--clr-16)_0px_7px_20px_0px] max-lg:p-4">
                  <div className="border-b border-solid border-b-surface-4 flex mb-6 pb-4 justify-between items-center">
                    <h2 className="block text-color-001 text-2xl font-semibold leading-[1.8125rem] max-md:text-[1.1875rem] max-md:leading-[1.4375rem]" data-component="heading">
                      Summary
                    </h2>
                    {" "}
                  </div>
                  {tile2Data.map((d, i) => <Tile2 key={i} d={d} />)}
                  {" "}
                  <div className="block mt-4 text-accent text-[1.8125rem] font-bold leading-[2.875rem] text-center">
                    $1.1
                  </div>
                  {" "}
                  <div className="block">
                    <a className="block mt-4 py-3.5 px-6 rounded-lg text-background font-bold tracking-[1px] text-center uppercase bg-primary cursor-pointer hover:bg-clr-39 hover:transform-[matrix(1,0,0,1,0,-1.92086)] focus:outline-background focus:transform-[matrix(1,0,0,1,0,-0.0271379)]" data-component="link" href="https://app.dataforseo.com/register" target="_blank">
                      Start now
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <div className="block">
        <section className="block py-16 max-lg:py-10 2xl:py-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="grid items-start gap-12 grid-cols-[1fr_1.5fr] max-lg:gap-10 max-lg:grid-cols-1">
              <div className="block">
                <h2 className="border-l-4 border-solid border-l-primary block mb-6 pl-8 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
                  LLM Mentions data for your GEO use case
                </h2>
                {" "}
                <p className="block mb-4 text-lg font-medium leading-[1.8125rem]">
                  Whether you are a marketing software company looking to expand into AI visibility tracking, brand agency seeking to improve your customer’s online reputation, or a GEO enthusiast interested in sentiment analysis – DataForSEO LLM mentions API will provide a piece of a solution for your challenging use case.
                </p>
                {" "}
                <div className="flex flex-wrap gap-4">
                  <a className="h-[3.15rem] flex relative z-1 mt-4 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-background text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20328px_15.5082px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55082)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.335607px_0.839019px_0px] focus:outline-background focus:transform-[matrix(1,0,0,1,0,-0.0434229)]" data-ditto-id="style-button-7" data-component="button" href="/blog/ai-visibility-and-mentions-insights-with-dataforseo">
                    Learn more
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="flex flex-col gap-8">
                {mediaTileData.map((d, i) => <MediaTile key={i} d={d} />)}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <section className="block py-12 bg-background [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-lg:py-8" style={{ backgroundImage: "linear-gradient(132.92deg, var(--clr-13) 9.56%, var(--clr-14) 55.33%, var(--clr-15) 101.11%), none" }}>
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="flex justify-between items-center gap-8 max-md:flex-col max-md:text-center">
            <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
              <h2 className="block text-color-001 text-2xl font-bold leading-[1.8125rem] max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem]" data-component="heading">
                Try DataForSEO API Explorer
              </h2>
              {" "}
            </div>
            {" "}
            <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
              <p className="block text-color-001 text-[1.375rem] leading-[2.1875rem]">
                Get a free account to test DataForSEO APIs you're interested in with a real-time playground.
              </p>
              {" "}
              <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-color-012 text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20382px_15.5095px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55095)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.335807px_0.839517px_0px] focus:outline-color-012 focus:transform-[matrix(1,0,0,1,0,-0.0434576)]" data-ditto-id="style-button-8" data-component="button" href="https://app.dataforseo.com/register">
                GET A FREE ACCOUNT
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block py-16 max-lg:py-10 2xl:py-20">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <h2 className="block mb-10 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] text-center max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
            Dive into AI Optimization with DataForSEO
          </h2>
          {" "}
          <div className="w-full grid items-stretch gap-6 grid-cols-1 lg:grid-cols-2">
            <div className="border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border flex rounded-md flex-col overflow-hidden">
              <div className="block shrink-0">
                <img className="w-147 h-65 block max-w-full overflow-clip object-cover aspect-[auto_582/225] align-middle max-md:w-[21.3125rem] md:max-lg:w-180 2xl:w-144.5" data-component="image" alt="wp llm" height="225" sizes="auto, (max-width: 582px) 100vw, 582px" src="/assets/cloned/images/3ae0ff551e34.webp" srcSet="/assets/cloned/images/3ae0ff551e34.webp 582w, /assets/cloned/images/3e603f57c9de.webp 300w" title="LLM Mentions API 22" width="582" />
                {" "}
              </div>
              {" "}
              <div className="flex p-6 flex-col flex-1 gap-4">
                <h3 className="block text-color-001 text-2xl font-bold leading-[1.8125rem] max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem] focus:outline-color-001" data-component="heading">
                  How LLMs Use Fan-Out Queries to Navigate the Web
                </h3>
                {" "}
                <p className="block flex-1 text-lg font-medium leading-[1.8125rem] focus:outline-foreground">
                  {" To uncover queries that LLMs use to navigate the Web, we analyzed 100,000 ChatGPT prompts and 100,249 fan-out queries, randomly selected from DataForSEO’s proprietary database powering LLM Mentions API."}
                </p>
                {" "}
                <a className="h-[3.15rem] border-2 border-solid border-primary flex relative z-1 py-3 px-[2.1875rem] rounded-[3px] justify-center items-center self-start gap-[0.4375rem] overflow-hidden text-primary text-sm font-medium leading-[1.375rem] cursor-pointer before:content-[''] before:block before:absolute before:top-[1.45rem] before:-right-[4.9375rem] before:-bottom-[1.45rem] before:left-[4.9375rem] before:-z-1 before:w-39.5 before:h-[2.9rem] before:bg-primary before:opacity-0 before:transform-[matrix(0,0,0,0,-79,-23.1953)] before:origin-[79px_23.1953px] hover:shadow-[var(--clr-33)_0px_6.69791px_16.7448px_0px] hover:text-clr-40 hover:[text-decoration-color:var(--clr-40)] hover:transform-[matrix(1,0,0,1,0,-1.67448)] focus:shadow-[var(--clr-58)_0px_0.542071px_1.35518px_0px] focus:text-clr-59 focus:outline-clr-59 focus:[text-decoration-color:var(--clr-59)] focus:transform-[matrix(1,0,0,1,0,-0.135518)]" data-ditto-id="style-button-9" data-component="button" href="/whitepapers/llm-fan-out-queries-research-2026">
                  LEARN MORE
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="flex flex-col gap-6">
              <div className="border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border grid p-5 rounded-md items-center gap-4 overflow-hidden grid-cols-[1.2fr_1fr] max-md:flex-col max-md:grid-cols-1">
                <div className="flex flex-col gap-5">
                  <h3 className="block text-color-001 text-2xl font-bold leading-[1.8125rem] max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem] focus:outline-color-001" data-component="heading">
                    SEO vs GEO: Key Differences and Shared Principles
                  </h3>
                  {" "}
                  <p className="block flex-1 text-lg font-medium leading-[1.8125rem] focus:outline-foreground">
                    In this article, we break down the key similarities and differences between SEO and GEO, focusing on visibility tracking, keyword analysis, and setting KPIs.
                  </p>
                  {" "}
                  <a className="h-[3.15rem] border-2 border-solid border-primary flex relative z-1 py-3 px-[2.1875rem] rounded-[3px] justify-center items-center self-start gap-[0.4375rem] overflow-hidden text-primary text-sm font-medium leading-[1.375rem] cursor-pointer before:content-[''] before:block before:absolute before:top-[1.45rem] before:-right-[4.9375rem] before:-bottom-[1.45rem] before:left-[4.9375rem] before:-z-1 before:w-39.5 before:h-[2.9rem] before:bg-primary before:opacity-0 before:transform-[matrix(0,0,0,0,-79,-23.1953)] before:origin-[79px_23.1953px] hover:shadow-[var(--clr-33)_0px_6.69791px_16.7448px_0px] hover:text-clr-40 hover:[text-decoration-color:var(--clr-40)] hover:transform-[matrix(1,0,0,1,0,-1.67448)] focus:shadow-[var(--clr-58)_0px_0.543612px_1.35903px_0px] focus:text-clr-59 focus:outline-clr-59 focus:[text-decoration-color:var(--clr-59)] focus:transform-[matrix(1,0,0,1,0,-0.135903)]" data-ditto-id="style-button-10" data-component="button" href="/blog/seo-vs-geo-key-differences-and-shared-principles-in-data-and-optimization">
                    LEARN MORE
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="block max-md:hidden">
                  <img className="w-37.5 h-37.5 block max-w-full overflow-clip object-cover aspect-[auto_200/200] align-middle" data-component="image" alt="SEO vs GEO" height="200" sizes="auto, (max-width: 200px) 100vw, 200px" src="/assets/cloned/images/47eecc643a50.webp" srcSet="/assets/cloned/images/47eecc643a50.webp 200w, /assets/cloned/images/294c48f756bb.webp 150w" title="LLM Mentions API 23" width="200" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="border-t-4 border-solid border-t-primary border-r border-r-border border-b border-b-border border-l border-l-border grid p-5 rounded-md items-center gap-4 overflow-hidden grid-cols-[1.2fr_1fr] max-md:flex-col max-md:grid-cols-1">
                <div className="flex flex-col gap-5">
                  <h3 className="block text-color-001 text-2xl font-bold leading-[1.8125rem] max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem] focus:outline-color-001" data-component="heading">
                    Use Cases for LLM Mentions API
                  </h3>
                  {" "}
                  <p className="block flex-1 text-lg font-medium leading-[1.8125rem] focus:outline-foreground">
                    In this article, we’ll explore how to use this API to pull and track LLM mentions effortlessly.
                  </p>
                  {" "}
                  <a className="h-[3.15rem] border-2 border-solid border-primary flex relative z-1 py-3 px-[2.1875rem] rounded-[3px] justify-center items-center self-start gap-[0.4375rem] overflow-hidden text-primary text-sm font-medium leading-[1.375rem] cursor-pointer before:content-[''] before:block before:absolute before:top-[1.45rem] before:-right-[4.9375rem] before:-bottom-[1.45rem] before:left-[4.9375rem] before:-z-1 before:w-39.5 before:h-[2.9rem] before:bg-primary before:opacity-0 before:transform-[matrix(0,0,0,0,-79,-23.1953)] before:origin-[79px_23.1953px] hover:shadow-[var(--clr-33)_0px_6.20112px_15.5028px_0px] hover:text-clr-34 hover:[text-decoration-color:var(--clr-34)] hover:transform-[matrix(1,0,0,1,0,-1.55028)] focus:shadow-[var(--clr-58)_0px_0.542411px_1.35603px_0px] focus:text-clr-59 focus:outline-clr-59 focus:[text-decoration-color:var(--clr-59)] focus:transform-[matrix(1,0,0,1,0,-0.135603)]" data-ditto-id="style-button-11" data-component="button" href="/blog/ai-visibility-and-mentions-insights-with-dataforseo">
                    LEARN MORE
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="block max-md:hidden">
                  <img className="w-37.5 h-37.5 block max-w-full overflow-clip object-cover aspect-[auto_200/200] align-middle" data-component="image" alt="Use Cases for LLM Mentions API" height="200" sizes="auto, (max-width: 200px) 100vw, 200px" src="/assets/cloned/images/d76ee9d3852d.webp" srcSet="/assets/cloned/images/d76ee9d3852d.webp 200w, /assets/cloned/images/fab27dcc7c25.webp 150w" title="LLM Mentions API 24" width="200" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block py-16 max-lg:py-10 2xl:py-20">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="block mb-10 text-center">
            <h2 className="block mb-1.5 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
              Data industry leaders trust
            </h2>
            {" "}
            <p className="block text-color-002 text-3xl font-bold leading-12 max-md:text-xl max-md:leading-8 md:max-lg:text-[1.6875rem] md:max-lg:leading-[2.6875rem]">
              Solutions developers praise
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="flex max-w-224 mx-auto items-center gap-4 max-md:gap-2">
            <button className="w-14 h-14 flex relative rounded-[7px] justify-center items-center shrink-0 gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-background cursor-pointer max-md:hidden hover:bg-clr-41 hover:border-color-009 focus:border-muted focus:outline-muted" data-component="button" aria-label="Previous slide">
              <Icon2 />
              {" "}
            </button>
            {" "}
            <div className="block min-w-0 rounded-md flex-1 overflow-hidden shadow-[var(--clr-20)_4px_4px_18px_0px]">
              <div className="flex grid-cols-2">
                <div className="w-188 grid min-w-0 p-5 shrink-0 basis-full grid-cols-[repeat(auto-fit,_minmax(268px,_1fr))] max-md:w-[21.4375rem] md:max-lg:w-[36.125rem] focus:outline-foreground">
                  <div className="flex flex-col gap-2.5">
                    <img className="w-89 h-56 block max-w-full overflow-clip object-cover aspect-[auto_1024/508] align-middle max-md:w-[18.9375rem] md:max-lg:w-[16.8125rem]" data-component="image" alt="twinword head" height="508" sizes="auto, (max-width: 1024px) 100vw, 1024px" src="/assets/cloned/images/acdb19a3bf50.png" srcSet="/assets/cloned/images/acdb19a3bf50.png 1024w, /assets/cloned/images/28ac9bdb4031.png 300w, /assets/cloned/images/a0b2be951f92.png 768w" title="LLM Mentions API 25" width="1024" />
                    {" "}
                    <div className="flex flex-col flex-1 gap-2.5">
                      <span className="block text-color-006 text-sm leading-[1.375rem]">
                        Customer success story
                      </span>
                      {" "}
                      <h3 className="block flex-1 text-color-001 font-semibold leading-[1.4375rem]" data-component="heading">
                        Twinword Wins 35% More Paid Customers After Switching To DataForSEO APIs
                      </h3>
                      {" "}
                      <a className="h-[2.3625rem] border-2 border-solid border-primary flex py-[6.5px] px-[16.3px] rounded-sm self-start text-primary text-[0.8125rem] font-semibold leading-[1.3125rem] uppercase cursor-pointer hover:bg-clr-42 focus:bg-clr-60 focus:outline-primary" data-component="button" aria-label="Learn more about Twinword Wins 35% More Paid Customers After Switching To DataForSEO APIs" href="/success-stories/list/twinword-wins-35-more-paid-customers-after-switching-to-dataforseo-apis/">
                        Learn more
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="flex pl-5 flex-col gap-3 max-md:pt-5 max-md:pl-0">
                    <div className="flex pt-[1.5625rem] pb-[2.1875rem] rounded-lg flex-col overflow-hidden bg-clr-21 shadow-[var(--clr-20)_4px_4px_18px_0px]">
                      <div className="block">
                        <img className="w-84 h-[4.1875rem] block max-w-full shrink-0 overflow-clip object-cover aspect-[auto_850/170] align-middle max-md:w-[18.9375rem] max-md:h-[3.8125rem] md:max-lg:w-[15.5625rem] md:max-lg:h-12.5" data-component="image" alt="rev Kono Kim" height="170" sizes="auto, (max-width: 850px) 100vw, 850px" src="/assets/cloned/images/7a7ae76a1435.png" srcSet="/assets/cloned/images/7a7ae76a1435.png 850w, /assets/cloned/images/5303747555b8.png 300w, /assets/cloned/images/cfd6dba211f8.png 768w" title="LLM Mentions API 26" width="850" />
                        {" "}
                      </div>
                      {" "}
                      <p className="block p-4 flex-1 text-color-001 text-[0.9375rem] font-medium italic leading-[1.4375rem]">
                        "I always recommend DataForSEO. No worries about server capacity, no need for maintenance, and splendid possibilities for rapid development when we want to try something new. Why reinvent the wheel?"
                      </p>
                      {" "}
                    </div>
                    {" "}
                    <a className="h-[4.8rem] border border-solid border-border flex py-3.5 px-4 rounded-lg items-center gap-3 bg-background cursor-pointer hover:bg-surface-5 focus:outline-foreground" data-component="link" href="https://www.linkedin.com/in/konokim/" rel="noopener noreferrer nofollow" target="_blank">
                      {" "}
                      <span className="block focus:outline-foreground">
                        {" "}
                        <Icon3 />
                        {" "}
                      </span>
                      {" "}
                      <div className="flex flex-col gap-0.5 focus:outline-foreground">
                        <strong className="block text-color-001 text-sm font-bold leading-[1.375rem] focus:outline-color-001">
                          Kono Kim
                        </strong>
                        {" "}
                        <strong className="block text-color-001 text-sm font-bold leading-[1.375rem] whitespace-nowrap focus:outline-color-001">
                          Connect on LinkedIn
                        </strong>
                        {" "}
                      </div>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="basis-full shrink-0 grid min-w-0 p-5 grid-cols-[repeat(auto-fit,_minmax(268px,_1fr))] focus:outline-foreground">
                  <div className="flex flex-col gap-2.5">
                    <img className="w-89 h-56 block max-w-full overflow-clip object-cover aspect-[auto_1583/785] align-middle max-md:w-[18.9375rem] md:max-lg:w-[16.8125rem]" data-component="image" alt="pathfinder seo home" height="785" sizes="auto, (max-width: 1583px) 100vw, 1583px" src="/assets/cloned/images/5f647a0c5c6b.png" srcSet="/assets/cloned/images/5f647a0c5c6b.png 1583w, /assets/cloned/images/6221fc43b44f.png 300w, /assets/cloned/images/f1f19f4d2426.png 768w, /assets/cloned/images/cf20d812b134.png 1024w" title="LLM Mentions API 27" width="1583" />
                    {" "}
                    <div className="flex flex-col flex-1 gap-2.5">
                      <span className="block text-color-006 text-sm leading-[1.375rem]">
                        Customer success story
                      </span>
                      {" "}
                      <h3 className="block flex-1 text-color-001 font-semibold leading-[1.4375rem]" data-component="heading">
                        How DataForSEO Helps Pathfinder SEO Guide its Customers, One Simple Task at a Time
                      </h3>
                      {" "}
                      <a className="h-[2.3625rem] border-2 border-solid border-primary flex py-[6.5px] px-[16.3px] rounded-sm self-start text-primary text-[0.8125rem] font-semibold leading-[1.3125rem] uppercase cursor-pointer hover:bg-clr-42 focus:bg-clr-60 focus:outline-primary" data-component="button" aria-label="Learn more about How DataForSEO Helps Pathfinder SEO Guide its Customers, One Simple Task at a Time" href="/success-stories/list/how-dataforseo-helps-pathfinder-seo-guide-its-customers-one-simple-task-at-a-time/">
                        Learn more
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="flex pl-5 flex-col gap-3 max-md:pt-5 max-md:pl-0">
                    <div className="flex pt-[1.5625rem] pb-[2.1875rem] rounded-lg flex-col overflow-hidden bg-clr-21 shadow-[var(--clr-20)_4px_4px_18px_0px]">
                      <div className="block">
                        <img className="w-84 h-[4.1875rem] block max-w-full shrink-0 overflow-clip object-cover aspect-[auto_850/170] align-middle max-md:w-[18.9375rem] max-md:h-[3.8125rem] md:max-lg:w-[15.5625rem] md:max-lg:h-12.5" alt="rev Lindsay Halsey" height="170" sizes="auto, (max-width: 850px) 100vw, 850px" src="/assets/cloned/images/e09a48fe24aa.png" srcSet="/assets/cloned/images/e09a48fe24aa.png 850w, /assets/cloned/images/907989f863da.png 300w, /assets/cloned/images/7d0911b99f33.png 768w" title="LLM Mentions API 28" width="850" />
                        {" "}
                      </div>
                      {" "}
                      <p className="block p-4 flex-1 text-color-001 text-[0.9375rem] font-medium italic leading-[1.4375rem]">
                        "We found DataForSEO online while we were planning for the beta version of our software. We were impressed by how responsive the team DataForSEO was and by the comprehensive nature of the APIs available."
                      </p>
                      {" "}
                    </div>
                    {" "}
                    <a className="border border-solid border-border flex py-3.5 px-4 rounded-lg items-center gap-3 bg-background cursor-pointer hover:bg-surface-5 focus:outline-foreground" href="https://www.linkedin.com/in/lindsay-halsey/" rel="noopener noreferrer nofollow" target="_blank">
                      {" "}
                      <span className="block focus:outline-foreground">
                        {" "}
                        <Icon4 />
                        {" "}
                      </span>
                      {" "}
                      <div className="flex flex-col gap-0.5 focus:outline-foreground">
                        <strong className="block text-color-001 text-sm font-bold leading-[1.375rem] focus:outline-color-001">
                          Lindsay Halsey
                        </strong>
                        {" "}
                        <strong className="block text-color-001 text-sm font-bold leading-[1.375rem] whitespace-nowrap focus:outline-color-001">
                          Connect on LinkedIn
                        </strong>
                        {" "}
                      </div>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <button className="w-14 h-14 flex relative rounded-[7px] justify-center items-center shrink-0 gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-background cursor-pointer max-md:hidden hover:bg-clr-41 hover:border-color-009 focus:border-muted focus:outline-muted" data-component="button" aria-label="Next slide">
              <Icon5 />
              {" "}
            </button>
            {" "}
          </div>
          {" "}
          <div className="flex mt-5 justify-center items-center gap-2" aria-label="Slides" role="tablist">
            <button className="w-6 h-2 flex relative rounded-sm justify-center items-center gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-clr-22 cursor-pointer hover:border-color-009 hover:shadow-[var(--clr-11)_0px_2px_8px_0px] focus:outline-muted" data-component="button" aria-label="Slide 1" />
            <button className="w-2 h-2 flex relative rounded-[50%] justify-center items-center gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-color-002 cursor-pointer hover:bg-border hover:border-color-009 hover:shadow-[var(--clr-11)_0px_2px_8px_0px] focus:outline-muted" data-component="button" aria-label="Slide 2" />
            <button className="w-2 h-2 flex relative rounded-[50%] justify-center items-center gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-color-002 cursor-pointer hover:bg-border hover:border-color-009 hover:shadow-[var(--clr-11)_0px_2px_8px_0px] focus:outline-muted" data-component="button" aria-label="Slide 3" />
            <button className="w-2 h-2 flex relative rounded-[50%] justify-center items-center gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-color-002 cursor-pointer hover:bg-border hover:border-color-009 hover:shadow-[var(--clr-11)_0px_2px_8px_0px] focus:outline-muted" data-component="button" aria-label="Slide 4" />
            <button className="w-2 h-2 flex relative rounded-[50%] justify-center items-center gap-[0.4375rem] text-muted text-sm font-medium leading-[1.375rem] text-center bg-color-002 cursor-pointer hover:bg-border hover:border-color-009 hover:shadow-[var(--clr-11)_0px_2px_8px_0px] focus:outline-muted" data-component="button" aria-label="Slide 5" />
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block py-16 overflow-hidden max-lg:py-10 2xl:py-20">
        <div className="block px-[2.4rem] max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <h2 className="w-px h-px block absolute -mt-px mb-12 -mx-px overflow-hidden text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] text-center whitespace-nowrap text-nowrap max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
            Logos
          </h2>
          {" "}
          <div className="block relative overflow-hidden" data-ditto-id="style-div">
            <div className="w-[223.45rem] flex transform-[matrix(1,0,0,1,-320.1,0)] max-lg:w-[2856.1px] max-md:transform-[matrix(1,0,0,1,-158.1,0)] md:max-lg:transform-[matrix(1,0,0,1,-241.8,0)] 2xl:w-1000 2xl:transform-[matrix(1,0,0,1,-829.5,0)]">
              <div className="flex pr-16 items-center gap-16 max-lg:pr-10 max-lg:gap-10 2xl:pr-20 2xl:gap-20" aria-hidden="false">
                {logos.map((d, i) => <LogoCloudItem key={i} d={d} styles={LogoCloudItem_styles[i]} />)}
                {" "}
                <div className="flex items-center shrink-0">
                  <img className="w-29 h-8 block opacity-85 max-w-30 overflow-clip object-contain aspect-[auto_120/33] align-middle [filter:grayscale(0.2)] max-lg:w-25.5 max-lg:h-7 2xl:w-30 2xl:h-10" alt="Oracle logo" height="33" src="/assets/cloned/images/be4b74ba04e6.png" title="LLM Mentions API 44" width="120" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="flex pr-16 items-center gap-16 max-lg:pr-10 max-lg:gap-10 2xl:pr-20 2xl:gap-20" aria-hidden="true">
                {logoData.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                {" "}
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block relative py-16 max-lg:py-10 2xl:py-20">
        <div className="block pt-16 pb-28 text-center bg-color-011 max-lg:pt-10 2xl:pt-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <div className="flex mb-10 flex-col gap-8">
              <h2 className="block max-w-220 mb-5 mx-[10.7875rem] text-background text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-2xl max-md:leading-[1.8125rem] max-lg:mx-0 2xl:mx-[10.1875rem]" data-component="heading">
                Amplify your capabilities with our business solutions
              </h2>
              {" "}
              <p className="block max-w-200 mx-auto text-clr-23 text-lg font-semibold leading-[1.6875rem]">
                From building innovative SEO software solutions to fostering market research and ecommerce analytics, DataForSEO is made for what you do
              </p>
              {" "}
            </div>
            {" "}
            <div className="flex relative mt-11 flex-wrap items-end gap-y-4 gap-x-8 max-md:flex-col max-md:justify-center max-md:items-center after:content-[''] after:block after:absolute after:top-[2.325rem] after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-clr-24 max-md:after:top-[12.925rem] max-md:after:bg-[initial] md:max-lg:after:top-[3.525rem]" aria-label="Business solutions" role="tablist">
              {textLink2Data.map((d, i) => <TextLink2 key={i} d={d} meta={TextLink2_meta[i]} styles={TextLink2_styles[i]} />)}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="block relative z-1 -mt-20 p-12 rounded-xl bg-background shadow-[var(--clr-11)_0px_20px_25px_0px,var(--clr-25)_0px_10px_10px_0px] max-md:-mt-16 max-md:p-6">
            <div className="grid items-center gap-12 grid-cols-2 max-lg:gap-8 max-lg:grid-cols-1" data-ditto-id="interaction-bs-panel-1" aria-labelledby="bs-tab-1" id="bs-panel-1" role="tabpanel">
              <div className="block">
                <img className="w-132.5 h-[19.4375rem] block max-w-full overflow-clip aspect-[auto_2302/1350] align-middle max-md:w-[18.4375rem] max-md:h-[10.8125rem] md:max-lg:w-156.5 md:max-lg:h-[22.9375rem] 2xl:w-130 2xl:h-[19.0625rem]" data-component="image" alt="general img Rank Tracking Dashboard" height="1350" sizes="auto, (max-width: 2302px) 100vw, 2302px" src="/assets/cloned/images/f50dc377ebd7.webp" srcSet="/assets/cloned/images/f50dc377ebd7.webp 2302w, /assets/cloned/images/e026e0a2be15.webp 300w, /assets/cloned/images/b8a284292602.webp 1024w, /assets/cloned/images/496ec8be1ebb.webp 768w, /assets/cloned/images/b5f8224cb5bf.webp 1536w, /assets/cloned/images/fdb7a0a51855.webp 2048w" title="LLM Mentions API 45" width="2302" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <p className="block mb-4 text-muted text-lg leading-[1.6875rem]">
                  {" Rank Tracker is the primary tool used by website owners and SEO professionals to monitor search engine rankings of website’s pages for specific keywords. "}
                </p>
                {" "}
                <p className="block mb-6 text-muted text-lg leading-[1.6875rem]">
                  {" If you’re looking for a reliable solution to build sustainable rank tracking, visit our guide to developing a Rank Tracking tool with DataForSEO APIs. "}
                </p>
                {" "}
                <div className="flex flex-col gap-3">
                  <a className="border border-solid border-surface-3 flex py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer hover:bg-clr-44 hover:border-clr-43 focus:outline-color-001" data-component="link" href="/solutions/rank-tracking-app">
                    {" "}
                    <span className="w-10.5 h-10.5 flex rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden focus:outline-color-009">
                      {" "}
                      <img className="w-10.5 h-10.5 block max-w-full overflow-clip align-middle focus:outline-color-009" data-component="image" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block focus:outline-color-001">
                      Learn how to build a Rank Tracking tool with DataForSEO.
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a className="border border-solid border-surface-3 flex py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer hover:bg-clr-44 hover:border-clr-43 focus:border-clr-62 focus:outline-color-001" data-component="link" href="/blog/how-dataforseo-apis-helped-gmb-crush-build-a-top-notch-local-seo-tool">
                    {" "}
                    <span className="w-10.5 h-10.5 flex rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden focus:outline-color-009">
                      {" "}
                      <img className="w-10.5 h-10.5 block max-w-full overflow-clip align-middle focus:outline-color-009" data-component="image" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block focus:outline-color-001">
                      {" Find out how DataForSEO APIs Helped GMB Crush Build a Top-Notch Local SEO Tool."}
                    </span>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hidden items-center gap-12 grid-cols-[1fr_1fr]" data-ditto-id="interaction-bs-panel-2" aria-labelledby="bs-tab-2" id="bs-panel-2" role="tabpanel">
              <div className="block">
                <img className="w-full block max-w-full overflow-clip aspect-[auto_2302/1350] align-middle" alt="Backlinks overview general img" height="1350" sizes="auto, (max-width: 2302px) 100vw, 2302px" src="/assets/cloned/images/9e5d2aabaa61.png" srcSet="/assets/cloned/images/9e5d2aabaa61.png 2302w, /assets/cloned/images/e5aa77855726.png 300w, /assets/cloned/images/4ac6cb1f108b.png 1024w, /assets/cloned/images/56075dd97b89.png 768w, /assets/cloned/images/1fb8e1560559.png 1536w, /assets/cloned/images/3e91fdeb9cfb.png 2048w" title="LLM Mentions API 46" width="2302" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <p className="block mb-4 text-muted text-lg leading-[1.6875rem]">
                  Backlink analysis tools showcase the backlink profile of any target and provide deep insights into a site’s backlinks, top pages, referring domains, and more.
                </p>
                {" "}
                <p className="block mb-6 text-muted text-lg leading-[1.6875rem]">
                  With DataForSEO Backlinks API, you can speed up the designing stage, and swiftly release a quality Backlink Checker powered by fresh and robust data.
                </p>
                {" "}
                <div className="flex flex-col gap-3">
                  <a className="border border-solid border-surface-3 flex min-w-0 py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer" href="/solutions/api-driven-backlinksapp">
                    {" "}
                    <span className="w-10.5 h-10.5 flex min-w-0 rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden">
                      {" "}
                      <img className="block min-w-0 max-w-full overflow-clip align-middle" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block min-w-0">
                      See what features you can build with DataForSEO Backlinks API
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a className="border border-solid border-surface-3 flex min-w-0 py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer" href="/blog/twinword-wins-more-paid-customers-after-switching-to-dataforseo-apis">
                    {" "}
                    <span className="w-10.5 h-10.5 flex min-w-0 rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden">
                      {" "}
                      <img className="block min-w-0 max-w-full overflow-clip align-middle" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block min-w-0">
                      {" Twinword Wins 35% More Paid Customers After Switching To DataForSEO APIs"}
                    </span>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hidden items-center gap-12 grid-cols-[1fr_1fr]" data-ditto-id="interaction-bs-panel-3" aria-labelledby="bs-tab-3" id="bs-panel-3" role="tabpanel">
              <div className="block">
                <img className="w-full block max-w-full overflow-clip aspect-[auto_1920/1126] align-middle" alt="Review monitoring tool main min" height="1126" sizes="auto, (max-width: 1920px) 100vw, 1920px" src="/assets/cloned/images/cf22a8dac95c.webp" srcSet="/assets/cloned/images/cf22a8dac95c.webp 1920w, /assets/cloned/images/5d721b33629e.webp 300w, /assets/cloned/images/72f15e9eecd4.webp 1500w, /assets/cloned/images/14843388c178.webp 768w, /assets/cloned/images/1859d0c38cf7.webp 1536w" title="LLM Mentions API 47" width="1920" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <p className="block mb-4 text-muted text-lg leading-[1.6875rem]">
                  Reputation Management tools help users keep track of online mentions, and monitor customer reviews on various platforms, such as Yelp and Google Business Profile.
                </p>
                {" "}
                <p className="block mb-6 text-muted text-lg leading-[1.6875rem]">
                  Check our development guide and learn how to quickly design and release a robust reputation management software atop two powerful DataForSEO APIs.
                </p>
                {" "}
                <div className="flex flex-col gap-3">
                  <a className="border border-solid border-surface-3 flex min-w-0 py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer" href="/solutions/api-driven-reputation-management">
                    {" "}
                    <span className="w-10.5 h-10.5 flex min-w-0 rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden">
                      {" "}
                      <img className="block min-w-0 max-w-full overflow-clip align-middle" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block min-w-0">
                      {" View our guide to building a Reputation Management Tool"}
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a className="border border-solid border-surface-3 flex min-w-0 py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer" href="/blog/dataforseo-api-helps-on-the-map-marketing-go-up-at-the-time-of-a-downturn">
                    {" "}
                    <span className="w-10.5 h-10.5 flex min-w-0 rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden">
                      {" "}
                      <img className="block min-w-0 max-w-full overflow-clip align-middle" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block min-w-0">
                      {" DataForSEO API Helps On the Map Marketing Go Up at the Time of a Downturn"}
                    </span>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hidden items-center gap-12 grid-cols-[1fr_1fr]" data-ditto-id="interaction-bs-panel-4" aria-labelledby="bs-tab-4" id="bs-panel-4" role="tabpanel">
              <div className="block">
                <img className="w-full block max-w-full overflow-clip aspect-[auto_1920/1126] align-middle" alt="general img keyword research app" height="1126" sizes="auto, (max-width: 1920px) 100vw, 1920px" src="/assets/cloned/images/bf32d1dc3856.webp" srcSet="/assets/cloned/images/bf32d1dc3856.webp 1920w, /assets/cloned/images/b20af9f03766.webp 300w, /assets/cloned/images/22328a04181c.webp 1500w, /assets/cloned/images/9a235aed24a9.webp 768w, /assets/cloned/images/bc3e99e3dc49.webp 1536w" title="LLM Mentions API 48" width="1920" />
                {" "}
              </div>
              {" "}
              <div className="block">
                <p className="block mb-4 text-muted text-lg leading-[1.6875rem]">
                  Keyword research is one of the most crucial processes in search engine optimization. It helps understand user intent and drive targeted traffic by identifying the queries that people search for.
                </p>
                {" "}
                <p className="block mb-6 text-muted text-lg leading-[1.6875rem]">
                  We’ve prepared a development guide to help you build your own keyword research tool based on the effective use of DataForSEO APIs.
                </p>
                {" "}
                <div className="flex flex-col gap-3">
                  <a className="border border-solid border-surface-3 flex min-w-0 py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer" href="/solutions/keyword-research-app">
                    {" "}
                    <span className="w-10.5 h-10.5 flex min-w-0 rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden">
                      {" "}
                      <img className="block min-w-0 max-w-full overflow-clip align-middle" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block min-w-0">
                      {" Find out how to develop your own Keyword Research App"}
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a className="border border-solid border-surface-3 flex min-w-0 py-3.5 px-4 rounded-sm items-center gap-6 text-color-001 text-lg font-semibold leading-[1.6875rem] bg-clr-26 cursor-pointer" href="/blog/fattoretto-agency-boosts-precision-with-dataforseo-api">
                    {" "}
                    <span className="w-10.5 h-10.5 flex min-w-0 rounded-sm justify-center items-center shrink-0 text-color-009 max-md:hidden">
                      {" "}
                      <img className="block min-w-0 max-w-full overflow-clip align-middle" alt="arrow" src="/assets/cloned/images/ebcdc641a653.png" title="arrow" />
                      {" "}
                    </span>
                    {" "}
                    <span className="block min-w-0">
                      Fattoretto Agency Boosts Precision of FattoBoost with DataForSEO API
                    </span>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="block">
        <section className="block py-16 max-lg:py-10 2xl:py-20">
          <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
            <h2 className="block mb-10 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] text-center max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading" />
            {" "}
            <div className="grid items-center gap-12 grid-cols-2 max-lg:gap-8 max-lg:grid-cols-1">
              <div className="block">
                <img className="w-144.5 h-91 block max-w-full rounded-lg overflow-clip aspect-[auto_736/464] align-middle max-md:w-60 max-md:h-[9.4375rem] max-lg:mb-8 max-md:mx-[51.5px] md:max-lg:w-[31.5625rem] md:max-lg:h-[19.9375rem] md:max-lg:mx-[108.3px] 2xl:w-142 2xl:h-89.5" data-component="image" alt="no code block img" height="464" sizes="auto, (max-width: 736px) 100vw, 736px" src="/assets/cloned/images/0603687ac58b.webp" srcSet="/assets/cloned/images/0603687ac58b.webp 736w, /assets/cloned/images/d27c4e034b36.webp 300w" title="LLM Mentions API 49" width="736" />
                {" "}
              </div>
              {" "}
              <div className="block order-[-1]">
                <h3 className="border-l-4 border-solid border-l-primary block mb-6 pl-8 text-color-001 text-3xl font-bold leading-9 max-md:text-xl max-md:leading-6 md:max-lg:text-[1.6875rem] md:max-lg:leading-[2rem]" data-component="heading">
                  No-code integration with DataForSEO APIs
                </h3>
                {" "}
                <p className="block mb-6 text-lg leading-[1.8125rem]">
                  Easily integrate DataForSEO APIs into your favourite tools without writing a single line of code. With a collection of ready-made connectors and modules you can access high-quality SEO data effortlessly, saving your time and resources.
                </p>
                {" "}
                <div className="flex flex-wrap gap-4">
                  <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-background text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-32 hover:shadow-[var(--clr-33)_0px_6.20429px_15.5107px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55107)] focus:bg-clr-48 focus:shadow-[var(--clr-49)_0px_0.337159px_0.842898px_0px] focus:outline-background focus:transform-[matrix(1,0,0,1,0,-0.0436833)]" data-ditto-id="style-button-12" data-component="button" href="/integrations">
                    View integrations
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      {" "}
      <section className="block py-16 max-lg:py-10 2xl:py-20">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="block mb-10">
            <h2 className="block mb-3 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
              Release in days, not weeks
            </h2>
            {" "}
            <p className="w-full max-w-208 block text-lg leading-[1.8125rem]">
              Integrating a new data source can take a lot of time and money. We accelerate this process by providing a user-friendly interface for controlling your API usage and spending.
            </p>
            {" "}
          </div>
          {" "}
          <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-3">
            {features2.map((d, i) => <FeatureCard2 key={i} d={d} />)}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block pb-16 max-lg:pb-10 2xl:pb-20">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="block mb-10 text-center">
            <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-2xl max-md:leading-[1.8125rem]" data-component="heading">
              <span className="inline" />
              <span className="inline" />
              <span className="inline">
                Frequently Asked Questions
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <details className="block relative rounded-sm overflow-hidden">
              <summary className="h-12 flex relative py-4 pr-5 pl-14 items-center gap-4 text-color-005 font-medium bg-surface-5 cursor-pointer max-md:h-[6.8rem] before:content-['+'] before:flex before:absolute before:inset-y-0 before:right-[72.2rem] before:left-0 before:w-12 before:text-color-003 before:text-xl before:font-bold before:leading-5 before:bg-primary max-md:before:right-[18.4375rem] md:max-lg:before:right-[42.125rem] 2xl:before:right-284 focus:outline-color-005">
                <h3 className="block leading-[1.1875rem] focus:outline-color-005" data-component="heading">
                  Can I pull AI search metrics for multiple domains, brands, keywords or products simultaneously?
                </h3>
              </summary>
              {" "}
              <div className="flex pt-4 pr-5 pb-4.5 pl-16 flex-col gap-4 text-color-001 text-sm leading-[1.5rem]">
                <p className="block leading-[1.375rem]">
                  Yes. The LLM Mentions endpoints of AI Optimization API support multi-target analysis for domains, brands, products, keywords and other entities. This option is useful for tracking AI visibility, as well as mentions, and citation performance across several competitors or any other entities you want to track in LLM responses.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="block relative rounded-sm overflow-hidden">
              <summary className="h-12 flex relative py-4 pr-5 pl-14 items-center gap-4 text-color-005 font-medium bg-surface-5 cursor-pointer max-md:h-[4.4rem] before:content-['+'] before:flex before:absolute before:inset-y-0 before:right-[72.2rem] before:left-0 before:w-12 before:text-color-003 before:text-xl before:font-bold before:leading-5 before:bg-primary max-md:before:right-[18.4375rem] md:max-lg:before:right-[42.125rem] 2xl:before:right-284 focus:outline-color-005">
                <h3 className="block leading-[1.1875rem] focus:outline-color-005" data-component="heading">
                  How can I get LLM citation data with the AI Optimization Data API?
                </h3>
              </summary>
              {" "}
              <div className="flex pt-4 pr-5 pb-4.5 pl-16 flex-col gap-4 text-color-001 text-sm leading-[1.5rem]">
                <p className="block leading-[1.375rem]">
                  <a className="inline text-color-013 font-semibold cursor-pointer hover:[text-decoration-color:var(--color-013)] focus:outline-color-013" data-component="link" href="/help-center/how-to-get-llm-citation-data-with-llm-mentions-api" rel="noopener" target="_blank">
                    Citation data
                  </a>
                  {" can be retrieved through the LLM Mentions API, which provides access to source references, text snippets, mentions, and more from ChatGPT responses and Google AIO. This data helps to analyze which websites get cited in AI answers and how often they appear."}
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="block relative rounded-sm overflow-hidden">
              <summary className="h-12 flex relative py-4 pr-5 pl-14 items-center gap-4 text-color-005 font-medium bg-surface-5 cursor-pointer max-md:h-[5.6rem] before:content-['+'] before:flex before:absolute before:inset-y-0 before:right-[72.2rem] before:left-0 before:w-12 before:text-color-003 before:text-xl before:font-bold before:leading-5 before:bg-primary max-md:before:right-[18.4375rem] md:max-lg:before:right-[42.125rem] 2xl:before:right-284 focus:outline-color-005">
                <h3 className="block leading-[1.1875rem] focus:outline-color-005" data-component="heading">
                  {"Which LLM Mentions endpoints support historical data, and what is the cut-off date for it? "}
                </h3>
              </summary>
              {" "}
              <div className="flex pt-4 pr-5 pb-4.5 pl-16 flex-col gap-4 text-color-001 text-sm leading-[1.5rem]">
                <p className="block leading-[1.375rem]">
                  {"Three endpoints provide historical data: Historical Mentions, Timeseries New & Lost, and Timeseries Delta. The historical data in these endpoints is available up to 2025-08-01."}
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="block relative rounded-sm overflow-hidden">
              <summary className="h-12 flex relative py-4 pr-5 pl-14 items-center gap-4 text-color-005 font-medium bg-surface-5 cursor-pointer max-md:h-[4.4rem] before:content-['+'] before:flex before:absolute before:inset-y-0 before:right-[72.2rem] before:left-0 before:w-12 before:text-color-003 before:text-xl before:font-bold before:leading-5 before:bg-primary max-md:before:right-[18.4375rem] md:max-lg:before:right-[42.125rem] 2xl:before:right-284 focus:outline-color-005">
                <h3 className="block leading-[1.1875rem] focus:outline-color-005" data-component="heading">
                  What is AI Search Volume in DataForSEO?
                </h3>
              </summary>
              {" "}
              <div className="flex pt-4 pr-5 pb-4.5 pl-16 flex-col gap-4 text-color-001 text-sm leading-[1.5rem]">
                <p className="block leading-[1.375rem]">
                  <a className="inline text-color-013 font-semibold cursor-pointer hover:[text-decoration-color:var(--color-013)] focus:outline-color-013" data-component="link" href="/help-center/what-is-ai-search-volume-in-dataforseo">
                    AI Search Volume
                  </a>
                  {" is a metric for estimating demand for AI searches and prompts. It allows assessing which topics, questions, or keywords are more or less popular in AI search environments."}
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="block relative rounded-sm overflow-hidden">
              <summary className="h-12 flex relative py-4 pr-5 pl-14 items-center gap-4 text-color-005 font-medium bg-surface-5 cursor-pointer max-md:h-[5.6rem] before:content-['+'] before:flex before:absolute before:inset-y-0 before:right-[72.2rem] before:left-0 before:w-12 before:text-color-003 before:text-xl before:font-bold before:leading-5 before:bg-primary max-md:before:right-[18.4375rem] md:max-lg:before:right-[42.125rem] 2xl:before:right-284 focus:outline-color-005">
                <h3 className="block leading-[1.1875rem] focus:outline-color-005" data-component="heading">
                  Can I use DataForSEO LLM Mentions data in a GEO tool I sell to my own customers?
                </h3>
              </summary>
              {" "}
              <div className="flex pt-4 pr-5 pb-4.5 pl-16 flex-col gap-4 text-color-001 text-sm leading-[1.5rem]">
                <p className="block leading-[1.375rem]">
                  {"Yes. Our pricing model is optimized for software builders, and most of our customers ship SEO and GEO tools that surface our data to their own end users. The specifics are in our "}
                  <a className="inline text-color-013 font-semibold cursor-pointer hover:[text-decoration-color:var(--color-013)] focus:outline-color-013" data-component="link" href="/terms-of-service">
                    Terms of Service
                  </a>
                  . If you have a non-standard distribution model or an enterprise use case, our team is happy to talk it through.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="block relative rounded-sm overflow-hidden">
              <summary className="h-12 flex relative py-4 pr-5 pl-14 items-center gap-4 text-color-005 font-medium bg-surface-5 cursor-pointer max-md:h-[5.6rem] before:content-['+'] before:flex before:absolute before:inset-y-0 before:right-[72.2rem] before:left-0 before:w-12 before:text-color-003 before:text-xl before:font-bold before:leading-5 before:bg-primary max-md:before:right-[18.4375rem] md:max-lg:before:right-[42.125rem] 2xl:before:right-284 focus:outline-color-005">
                <h3 className="block leading-[1.1875rem] focus:outline-color-005" data-component="heading">
                  What data sources are used in the LLM Mentions endpoints of AI Optimization API?
                </h3>
              </summary>
              {" "}
              <div className="flex pt-4 pr-5 pb-4.5 pl-16 flex-col gap-4 text-color-001 text-sm leading-[1.5rem]">
                <p className="block leading-[1.375rem]">
                  DataForSEO AI Optimization API and its LLM Mentions endpoints rely on various internal data sources and ptroprietary databases to provide data to users. Although we do not disclose our internal algorithms, it’s important to note that we do not use customer data (including customer API responses) in any of our products.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="block py-12 bg-color-011 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-lg:py-8" style={{ backgroundImage: "radial-gradient(circle at 10% 80%, var(--clr-27) 0%, var(--clr-9) 50%), radial-gradient(circle at 95% 50%, var(--clr-28) 0%, var(--clr-9) 45%)" }}>
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="flex justify-between items-center gap-8 max-md:flex-col max-md:text-center">
            <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
              <h2 className="block text-color-003 text-2xl font-bold leading-[1.8125rem] max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem]" data-component="heading">
                Didn't find the feature you were looking for?
              </h2>
              {" "}
              <p className="block text-color-002 text-[1.375rem] leading-[2.1875rem]">
                Want to discuss your use case?
              </p>
              {" "}
            </div>
            {" "}
            <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
              <a className="h-[2.9rem] flex items-stretch shrink-0 cursor-pointer focus:outline-foreground" data-component="link" href="https://app.dataforseo.com/register">
                {" "}
                <span className="border-t-2 border-solid border-t-background border-b-2 border-b-background border-l-2 border-l-background flex py-2.5 px-5 rounded-tl-[3px] rounded-bl-[3px] items-center text-color-003 text-sm font-extrabold leading-[1.375rem] uppercase whitespace-nowrap text-nowrap hover:bg-surface-6 focus:bg-clr-64 focus:outline-color-003">
                  Sign up now
                </span>
                {" "}
                <span className="w-10 border-2 border-solid border-background flex rounded-tr-[3px] rounded-br-[3px] justify-center items-center shrink-0 text-color-003 focus:outline-color-003">
                  {" "}
                  <Icon6 />
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
    </main>
  );
}
