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
export const ListRow7_meta: DittoNodeMetaMap[] = [
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
    {  },
    {  },
    {  },
    {  }
];
export const ListRow7_meta2: DittoNodeMetaMap[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  }
];
export const ListRow7_meta3: DittoNodeMetaMap[] = [
    {  },
    {  },
    {  },
    {  },
    { 0: { anchor: "motion-1" } },
    {  },
    {  },
    {  },
    {  },
    {  }
];
export const ListRow7_meta4: DittoNodeMetaMap[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  }
];
