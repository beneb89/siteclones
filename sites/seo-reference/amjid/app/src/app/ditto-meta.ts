// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const FeatureCard_meta: DittoNodeMetaMap[] = [
    { 1: { anchor: "motion-1" } },
    { 1: { anchor: "motion-2" } },
    { 1: { anchor: "motion-3" } }
];
