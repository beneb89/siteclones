// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const MediaTile_meta: DittoNodeMetaMap[] = [
    {  },
    { 2: { anchor: "menu-trigger-3" } },
    { 2: { anchor: "menu-trigger-4" } },
    { 2: { anchor: "menu-trigger-5" } },
    { 2: { anchor: "menu-trigger-6" } }
];
