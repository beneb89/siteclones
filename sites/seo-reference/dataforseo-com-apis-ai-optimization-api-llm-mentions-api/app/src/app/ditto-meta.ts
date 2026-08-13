// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const Tile_meta: DittoNodeMetaMap[] = [
    {  },
    { 1: { anchor: "menu-trigger-1" } },
    { 1: { anchor: "menu-trigger-2" } },
    {  },
    {  },
    {  }
];
export const ListRow_meta: DittoNodeMetaMap[] = [
    { 1: { anchor: "menu-trigger-3" } },
    { 1: { anchor: "menu-trigger-4" } },
    { 1: { anchor: "menu-trigger-5" } },
    {  },
    { 1: { anchor: "menu-trigger-6" } }
];
export const TextLink2_meta: DittoNodeMetaMap[] = [
    { 0: { anchor: "interaction-1" } },
    { 0: { anchor: "interaction-3" } },
    { 0: { anchor: "interaction-5" } },
    { 0: { anchor: "interaction-7" } }
];
