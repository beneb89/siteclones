// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const MediaTile_meta: DittoNodeMetaMap[] = [
    { 1: { anchor: "menu-trigger-1" } },
    { 1: { anchor: "menu-trigger-2" } },
    { 1: { anchor: "menu-trigger-3" } },
    { 1: { anchor: "menu-trigger-4" } }
];
