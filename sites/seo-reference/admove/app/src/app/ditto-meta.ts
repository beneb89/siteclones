// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const ListRow2_meta: DittoNodeMetaMap[] = [
    { 0: { anchor: "style-3" } },
    { 0: { anchor: "style-4" } },
    { 0: { anchor: "style-5" } }
];
export const ListRow2_meta2: DittoNodeMetaMap[] = [
    { 0: { anchor: "style-8" } },
    { 0: { anchor: "style-9" } },
    { 0: { anchor: "style-10" } }
];
export const ListRow2_meta3: DittoNodeMetaMap[] = [
    { 0: { anchor: "style-11" } },
    { 0: { anchor: "style-12" } },
    { 0: { anchor: "style-13" } }
];
