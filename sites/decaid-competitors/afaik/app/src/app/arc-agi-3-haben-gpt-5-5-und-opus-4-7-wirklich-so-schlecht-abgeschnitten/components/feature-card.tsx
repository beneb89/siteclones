export type FeatureCardData = {
  href: string;
  title: string;
  href2: string;
  dateTime: string;
  date: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <li className="box-content list-item">
      <div className="border-b border-solid border-b-clr-0 flex py-3.5 justify-between items-center gap-5">
        <h3 className="block font-extrabold leading-[1.3125rem] tracking-[-1.3px] [word-break:break-word] text-pretty max-md:leading-[1.125rem] max-md:tracking-[-1.09px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-1.2px]" data-component="heading">
          <a className="box-content inline-block cursor-pointer" data-component="link" href={d.href} target="_self">
            {d.title}
          </a>
        </h3>
        {" "}
        <div className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] text-right">
          <a className="box-content inline cursor-pointer" data-component="link" href={d.href2}>
            <time className="box-content inline" dateTime={d.dateTime}>
              {d.date}
            </time>
          </a>
        </div>
        {" "}
      </div>
      {" "}
    </li>
  );
}
