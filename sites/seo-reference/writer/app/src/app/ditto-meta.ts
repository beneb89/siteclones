// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const ListRow_meta: DittoNodeMetaMap[] = [
    {  },
    {  },
    {  },
    {  },
    { 1: { anchor: "motion-2" } },
    {  }
];
export const FeatureCard2_meta: DittoNodeMetaMap[] = [
    { 2: { anchor: "style-3" } },
    { 2: { anchor: "style-4" } },
    { 2: { anchor: "style-5" } }
];
