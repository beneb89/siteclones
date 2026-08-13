// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const Tile5_meta: DittoNodeMetaMap[] = [
    { 2: { anchor: "style-2" } },
    { 2: { anchor: "style-3" } },
    { 2: { anchor: "style-4" } }
];
export const Tile6_meta: DittoNodeMetaMap[] = [
    { 2: { anchor: "style-6" } },
    { 2: { anchor: "style-7" } },
    { 2: { anchor: "style-8" } },
    { 2: { anchor: "style-9" } },
    { 2: { anchor: "style-10" } }
];
