// Semantic page content extracted from recognized recipe sections.

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/v3/serp/youtube/organic/overview/", label: "YouTube Organic" },
    { href: "/v3/serp/youtube/video_info/overview/", label: "YouTube Video Info" },
    { href: "/v3/serp/youtube/video_subtitles/overview/", label: "YouTube Subtitles" },
    { href: "/v3/serp/youtube/video_comments/overview/", label: "YouTube Comments" }
];

export type TextLinkDataItem = {
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { label: "cURL" },
    { label: "php" },
    { label: "Node.js" },
    { label: "Python" },
    { label: "cSharp" }
];

