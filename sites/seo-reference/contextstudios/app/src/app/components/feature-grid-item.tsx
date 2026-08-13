export type FeatureGridItemData = {
  variant: string;
  eyebrow: string;
  title: string;
  description: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "related-guides":
      return (
        <div className="border border-solid border-surface block p-4 rounded-[10px]">
          <h3 className="block mb-3 text-lg font-medium leading-7" data-component="heading">
            📖 Related Guides
          </h3>
          <ul className="block [list-style-type:none] list-outside">
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/guides/best-ai-content-automation-tools-2026">
                Best AI Content Automation Tools 2026
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/guides/mcp-integration-development-guide-2026">
                MCP Integration Development Guide
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/guides/openclaw-production-guide-2026">
                {d.description}
              </a>
            </li>
            <li className="list-item">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/guides/custom-wrappers-clis-mcp-servers-future-2026">
                {"Custom Wrappers, CLIs & MCP Servers"}
              </a>
            </li>
          </ul>
        </div>
      );
    case "related-blog-posts":
      return (
        <div className="border border-solid border-surface block p-4 rounded-[10px]">
          <h3 className="block mb-3 text-lg font-medium leading-7" data-component="heading">
            📝 Related Blog Posts
          </h3>
          <ul className="block [list-style-type:none] list-outside">
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/blog/dual-model-ai-coding-stack-why-opus-46-gemini-31-pro-is-the-future">
                {d.description}
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/blog/ai-ecosystem-update-week-52026-gpt-52-revolutionizes-coding-mcp-apps-bring-interactive-uis-and-google-ai-studio-goes-independent">
                AI Ecosystem Update Week 5/2026
              </a>
            </li>
            <li className="list-item">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/blog/how-to-choose-an-ai-development-studio-in-berlin-the-complete-decision-framework">
                How to Choose an AI Development Studio in Berlin
              </a>
            </li>
          </ul>
        </div>
      );
    case "related-comparisons":
      return (
        <div className="border border-solid border-surface block p-4 rounded-[10px]">
          <h3 className="block mb-3 text-lg font-medium leading-7" data-component="heading">
            ⚖️ Related Comparisons
          </h3>
          <ul className="block [list-style-type:none] list-outside">
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/comparisons/ai-native-vs-traditional">
                {d.description}
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/comparisons/wordpress-vs-custom-cms">
                WordPress vs Custom CMS
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/comparisons/ai-automation-vs-manual-processes">
                AI Automation vs Manual Processes
              </a>
            </li>
            <li className="list-item">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/comparisons/no-code-vs-custom">
                No-Code vs Custom Development
              </a>
            </li>
          </ul>
        </div>
      );
    case "ai-glossary":
      return (
        <div className="border border-solid border-surface block p-4 rounded-[10px]">
          <h3 className="block mb-3 text-lg font-medium leading-7" data-component="heading">
            📚 AI Glossary
          </h3>
          <ul className="block [list-style-type:none] list-outside">
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/glossary/generative-engine-optimization">
                {d.description}
              </a>
            </li>
            <li className="list-item">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/glossary/llms-txt">
                llms.txt
              </a>
            </li>
          </ul>
        </div>
      );
    case "our-services":
      return (
        <div className="border border-solid border-surface block p-4 rounded-[10px]">
          <h3 className="block mb-3 text-lg font-medium leading-7" data-component="heading">
            🔧 Our Services
          </h3>
          <ul className="block [list-style-type:none] list-outside">
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/ai-consulting-berlin">
                AI Consulting Berlin
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/ai-content-generation">
                {d.description}
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/ai-for-marketing">
                AI for Marketing
              </a>
            </li>
            <li className="list-item mb-2">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/geo-optimization">
                GEO Optimization
              </a>
            </li>
            <li className="list-item">
              <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer hover:text-foreground" data-component="link" href="/custom-ai-development">
                Custom AI Development
              </a>
            </li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}
