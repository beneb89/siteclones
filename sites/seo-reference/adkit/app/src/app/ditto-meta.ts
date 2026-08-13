// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const ListRow2_meta: DittoNodeMetaMap[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    { 0: { anchor: "motion-1" } }
];
export const MediaLink2_meta: DittoNodeMetaMap[] = [
    {  },
    { 2: { anchor: "motion-8" } },
    {  }
];
export const Tile_meta: DittoNodeMetaMap[] = [
    {  },
    { 2: { anchor: "motion-11" } },
    {  }
];
export const Tile2_meta: DittoNodeMetaMap[] = [
    { 3: { anchor: "motion-14" } },
    {  },
    {  },
    { 2: { anchor: "motion-15" } }
];
