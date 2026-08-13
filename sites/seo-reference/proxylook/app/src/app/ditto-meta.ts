// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const Tile12_meta: DittoNodeMetaMap[] = [
    { 2: { anchor: "style-19" } },
    { 2: { anchor: "style-20" } },
    { 2: { anchor: "style-21" } }
];
export const Tile13_meta: DittoNodeMetaMap[] = [
    {  },
    { 1: { anchor: "interaction-1" }, 4: { anchor: "interaction-2" } },
    { 1: { anchor: "interaction-3" }, 4: { anchor: "interaction-4" } },
    { 1: { anchor: "interaction-5" }, 4: { anchor: "interaction-6" } }
];
