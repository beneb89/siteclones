// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const MediaCard_meta: DittoNodeMetaMap[] = [
    { 9: { anchor: "style-1" } },
    { 9: { anchor: "style-2" } },
    { 9: { anchor: "style-3" } },
    { 9: { anchor: "style-4" } }
];
