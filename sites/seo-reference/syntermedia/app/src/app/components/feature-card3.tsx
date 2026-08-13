export type FeatureCard3Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
      <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
        {d.title}
      </h3>
      <div className="block">
        <p className="block mb-5 p-3 rounded-sm [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_'JetBrains_Mono',_ui-monospace,_monospace,_ui-monospace,_SFMono-Regular,_monospace] text-sm leading-5 bg-color-008">
          {d.description}
        </p>
      </div>
    </div>
  );
}
