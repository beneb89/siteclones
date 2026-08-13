export type FeatureCardData = {
  href: string;
  dateTime: string;
  date: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <article className="block">
      <a className="block p-5 rounded-2xl cursor-pointer hover:bg-clr-2" data-component="link" href={d.href}>
        {" "}
        <div className="flex mb-2 items-center gap-3 text-muted-foreground text-xs leading-4.5">
          <span className="block py-0.5 px-2 rounded-lg text-muted font-medium bg-surface">
            Meta Ads
          </span>
          {" "}
          <time className="block" dateTime={d.dateTime}>
            {d.date}
          </time>
          {" "}
        </div>
        {" "}
        <h2 className="block text-color-001 text-lg font-bold leading-[1.5625rem] tracking-[-0.18px]" data-component="heading">
          {d.title}
        </h2>
        {" "}
        <p className="mt-1.5 overflow-hidden text-muted-foreground text-sm leading-[1.3125rem] line-clamp-2">
          {d.description}
        </p>
        {" "}
      </a>
      {" "}
    </article>
  );
}
