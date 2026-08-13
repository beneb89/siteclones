export type FeatureCard2Data = {
  title: string;
  text: string;
  text3: string;
  text4: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
      <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
        {d.title}
      </h3>
      <div className="block">
        <ul className="block mb-5 pl-6 text-sm leading-5 [list-style-type:disc] list-outside">
          <li className="list-item mb-2">
            {d.text}
          </li>
          <li className="list-item mt-1">
            {d.description}
          </li>
          <li className="list-item mt-1">
            {d.text3}
          </li>
          <li className="list-item mt-1">
            {d.text4}
          </li>
        </ul>
      </div>
    </div>
  );
}
