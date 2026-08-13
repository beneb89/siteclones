// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const Logo3_meta: DittoNodeMetaMap[] = [
    { 2: { anchor: "style-1" } },
    { 2: { anchor: "style-2" } },
    { 2: { anchor: "style-3" } }
];
