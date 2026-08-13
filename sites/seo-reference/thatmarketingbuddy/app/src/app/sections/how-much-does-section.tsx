/** How Much Does section. */
export default function HowMuchDoesSection() {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="pricing">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        Pricing
      </p>
      <h2 className="block mb-2 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        How much does DataForSEO cost?
      </h2>
      <p className="block mb-6 text-color-003 text-sm leading-5">
        {"DataForSEO starts at From $50. That's at category median for SEO APIs tools. "}
      </p>
      <div className="block mb-6" />
      <div className="block mb-6">
        <p className="block mb-6 text-color-004 leading-6.5">
          {"DataForSEO operates on a pay-as-you-go model. Registration is free with no credit card required, and new accounts get a $1 free credit to make real API calls before paying anything, enough for a few hundred SERP queries or a few thousand keyword/backlink lookups. Beyond that free credit, a $50 minimum payment applies. Pricing then varies by API endpoint and data complexity, with simple keyword lookups starting around $0.0001 per request and more complex SERP analysis costing $0.002-0.01 per query. "}
        </p>
        <p className="block mb-6 text-color-004 leading-6.5">
          Backlink data requests typically range from $0.001-0.005 depending on the depth of analysis required.
        </p>
        <p className="block mb-6 text-color-004 leading-6.5">
          The pricing model scales with usage, making it cost-effective for both small projects and enterprise implementations. Unlike subscription-based SEO tools with fixed monthly costs, you only pay for the specific data you consume. This can result in significant savings for agencies that need large amounts of data intermittently rather than constant access.
        </p>
        <p className="block text-color-004 leading-6.5">
          Custom enterprise pricing is available for high-volume users, typically offering better per-request rates and dedicated infrastructure. The platform provides detailed usage tracking and spending controls to help manage costs, with options to set daily or monthly limits to prevent unexpected charges. For most professional use cases, monthly spending ranges from hundreds to thousands of dollars depending on data volume and frequency.
        </p>
      </div>
      <div className="block mb-6">
        <div className="border border-solid border-border block rounded-xl overflow-hidden">
          <table className="table text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
            <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-border table-row align-middle bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
                <th className="table-cell py-2.5 px-4 align-middle text-color-001 font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                  Plan
                </th>
                <th className="table-cell py-2.5 px-4 align-middle text-color-001 font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                  Monthly
                </th>
                <th className="table-cell py-2.5 px-4 align-middle text-color-001 font-semibold text-right [border-collapse:collapse] [border-spacing:2px] max-md:hidden">
                  Annual
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
              <tr className="border-b border-solid border-b-color-005 table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-2.5 px-4 align-middle text-color-004 [border-collapse:collapse] [border-spacing:2px]">
                  <span className="flex items-center gap-2 [border-collapse:collapse] [border-spacing:2px]">
                    Pay-As-You-Go
                  </span>
                </td>
                <td className="table-cell py-2.5 px-4 align-middle text-color-001 font-medium text-right [border-collapse:collapse] [border-spacing:2px]">
                  $50/mo
                </td>
                <td className="table-cell py-2.5 px-4 align-middle text-color-001 font-medium text-right [border-collapse:collapse] [border-spacing:2px] max-md:hidden">
                  —
                </td>
              </tr>
              <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                <td className="table-cell py-2.5 px-4 align-middle text-color-004 [border-collapse:collapse] [border-spacing:2px]">
                  <span className="flex items-center gap-2 [border-collapse:collapse] [border-spacing:2px]">
                    Custom Enterprise
                  </span>
                </td>
                <td className="table-cell py-2.5 px-4 align-middle text-color-001 font-medium text-right [border-collapse:collapse] [border-spacing:2px]">
                  Custom
                </td>
                <td className="table-cell py-2.5 px-4 align-middle text-color-001 font-medium text-right [border-collapse:collapse] [border-spacing:2px] max-md:hidden">
                  —
                </td>
              </tr>
            </tbody>
          </table>
          <a className="h-[3.0625rem] border-t border-solid border-t-border flex py-3 px-4 justify-between items-center bg-surface-2 cursor-pointer hover:bg-color-005" data-component="link" href="/pricing/dataforseo">
            <span className="block text-color-004 text-sm font-medium leading-5">
              See full DataForSEO pricing breakdown
            </span>
            <span className="block text-muted-foreground">
              →
            </span>
          </a>
        </div>
      </div>
      <a className="inline-flex mt-2 items-center gap-1 text-color-001 text-sm font-medium leading-5 underline cursor-pointer hover:[text-decoration-color:var(--color-001)]" data-component="link" href="/pricing/dataforseo">
        Full pricing breakdown →
      </a>
    </section>
  );
}
