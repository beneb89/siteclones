// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const Tile_meta: DittoNodeMetaMap[] = [
    { 0: { anchor: "motion-2" }, 1: { anchor: "menu-trigger-2" } },
    { 0: { anchor: "motion-3" }, 1: { anchor: "menu-trigger-3" } },
    { 0: { anchor: "motion-4" } }
];
