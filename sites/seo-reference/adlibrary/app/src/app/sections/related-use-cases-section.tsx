/** Related Use Cases section. */
export default function RelatedUseCasesSection() {
  return (
    <div className="border-t border-solid border-t-border block mt-16 pt-8 w-full">
      <h2 className="block mb-8 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-3xl font-light leading-9 tracking-[-0.75px]" data-component="heading">
        Related Use Cases
      </h2>
      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        <a className="border border-solid border-border block p-4 rounded-[3.2px] cursor-pointer hover:border-color-001" data-component="link" href="/use-cases/ad-data-for-ai-agents">
          <h3 className="h-full block font-light hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="heading">
            Ad Data for AI Agents
          </h3>
        </a>
        <a className="border border-solid border-border block p-4 rounded-[3.2px] cursor-pointer hover:border-color-001" data-component="link" href="/use-cases/media-buyer-workflow">
          <h3 className="h-full block font-light hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="heading">
            Media Buyer Daily Workflow
          </h3>
        </a>
      </div>
    </div>
  );
}
