/** Page Summary section. */
export default function PageSummarySection() {
  return (
    <div className="block mt-4 after:content-[''] after:table after:w-0 after:h-0">
      <devsite-key-takeaways-panel class="border border-solid border-border block mb-4 rounded-sm" aria-labelledby="key-takeaways-panel-title" role="region">
        <div className="flex py-2 px-4 rounded-[3px] items-center text-color-004 bg-surface-4 cursor-pointer" data-component="button" aria-expanded="false" aria-labelledby="key-takeaways-panel-title" role="button">
          <img className="w-5 h-5 block max-w-full overflow-clip" data-component="image" alt="Spark icon" src="/assets/cloned/svg/9f86cbac6892.svg" />
          {" "}
          <div className="block grow">
            <h2 className="inline-block mx-3 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-5" data-component="heading" id="key-takeaways-panel-title">
              Page Summary
            </h2>
            {" "}
          </div>
          {" "}
          <span className="block align-bottom [font-family:'Material_Icons'] text-[1.5rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] cursor-default pointer-events-none before:content-['expand\_more'] before:text-color-004 before:text-2xl before:leading-6" aria-hidden="true" />
          {" "}
        </div>
        {" "}
      </devsite-key-takeaways-panel>
      {" "}
      <p className="block my-4">
        {"Each Google Ads API developer token is assigned an access level and \"permissible use.\" The "}
        <strong className="inline font-bold">
          access level
        </strong>
        {" determines whether you can affect production accounts and the number of operations and requests that you can execute daily. "}
        <strong className="inline font-bold">
          Permissible use
        </strong>
        {" determines the specific Google Ads API features that the developer token is allowed to use."}
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="access-levels" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          Access levels
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        {"There are four different developer token access levels listed in order in the table. If you don't already have Google Ads API access, you can start by "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/get-started/dev-token#apply-token">
          signing up
        </a>
        {" to obtain a developer token with Test Account Access level. You can increase the access level by completing some additional steps in the application."}
      </p>
      {" "}
      <div className="block my-4 overflow-auto">
        <table className="table text-sm leading-5 [border-collapse:collapse]">
          <tbody className="table-row-group align-middle [border-collapse:collapse]">
            <tr className="border-t border-solid border-t-border border-b border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                Access level
              </th>
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                Can access...
              </th>
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                Daily operation limit
                <sup className="inline align-super text-xs leading-[0.75rem] [border-collapse:collapse]">
                  <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="#superscript-1">
                    1
                  </a>
                </sup>
              </th>
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                How to apply
              </th>
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                How long do reviews typically take?
              </th>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Test Account Access level
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Test accounts
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                15,000 operations / day
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/docs/api-policy/developer-token#apply-token">
                  Instructions
                </a>
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Explorer Access level
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Test and production accounts "}
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"2,880 operations / day for production accounts "}
                <br className="inline [border-collapse:collapse]" />
                {" 15,000 operations / day for test accounts "}
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/docs/api-policy/developer-token#apply-token">
                  Instructions
                </a>
                {" "}
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Basic Access level
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Test and production accounts
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                15,000 operations / day for both test and production accounts
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="#how-to-apply-for-basic-access">
                  Instructions
                </a>
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                5 business days
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Standard Access level
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Test and production accounts
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Unlimited operations / day for both test and production accounts
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="#how-to-apply-for-standard-access">
                  Instructions
                </a>
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                10 business days
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {" "}
      <p className="block my-4" id="superscript-1">
        <sup className="inline align-super text-[0.8125rem] leading-[0.8125rem]">
          1
        </sup>
        {" \"Per day\" is based on a sliding 24 hour time period in which API requests were made with your developer token. Your application will receive an error if it exceeds the request limit for your access level within the last 24 hours."}
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="test-account-access" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          Test Account Access level
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        After you've completed the initial sign-up for the Google Ads API, you're issued a developer token with the Test Account Access level. This means that the developer token can only make Google Ads API requests against test accounts.
      </p>
      {" "}
      <aside className="border-t border-solid border-t-clr-0 border-b border-b-clr-0 block my-4 -mx-10 py-[0.9375rem] pr-10 pl-19 text-color-003 text-[0.875rem] bg-surface-4 max-md:-mx-4 max-md:pr-4 max-md:pl-13 md:max-lg:-mx-6 md:max-lg:pr-6 md:max-lg:pl-15" data-ditto-id="style-aside">
        <strong className="inline font-bold">
          Important:
        </strong>
        <span className="inline">
          {" Refer to the "}
          <a className="inline underline [word-break:break-word] bg-surface-4 cursor-pointer hover:bg-clr-13 hover:no-underline focus:bg-clr-13 focus:no-underline" data-component="link" href="/google-ads/api/docs/best-practices/test-accounts">
            test account guide
          </a>
          {" to learn more about how to create a test account."}
        </span>
      </aside>
      {" "}
      <h3 className="block mt-8 mb-4 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-xl leading-7" data-component="heading" id="how-to-apply-for-test-account-access" role="presentation">
        <span className="inline" aria-level="3" role="heading">
          How to apply for Test Account Access level
        </span>
      </h3>
      {" "}
      <p className="block my-4">
        {"Complete the "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/api-policy/developer-token#apply-token">
          Google Ads API sign-up
        </a>
        {" on the Google Ads web interface to automatically be granted the Test Account Access level."}
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="explorer-access" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          Explorer Access level
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        {"After you've completed the initial sign-up for the Google Ads API, Google may automatically upgrade your developer token from "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="#test-account-access">
          Test Account Access level
        </a>
        {" to the Explorer Access level in some cases. Explorer Access level allows the developer token to make Google Ads API requests against both test accounts and production accounts. "}
        <strong className="inline font-bold">
          Production accounts
        </strong>
        {" are any accounts that serve real, live Google ads—test accounts don't serve ads."}
      </p>
      {" "}
      <p className="block my-4">
        Explorer Access level allows the developer token to execute up to 2,880 operations per day against production accounts. This is sufficient for most developers to get started with the API and build basic automation.
      </p>
      {" "}
      <p className="block my-4">
        {"Explorer Access level restricts access to the following features. If you need to use these features, you need to apply for "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="#basic-access">
          Basic Access level
        </a>
        {" or "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="#standard-access">
          Standard Access level
        </a>
        .
      </p>
      {" "}
      <div className="block my-4 overflow-auto">
        <table className="w-full table text-sm leading-5 [border-collapse:collapse]" id="explorer-feature-restrictions">
          <tbody className="table-row-group align-middle [border-collapse:collapse]">
            <tr className="border-t border-solid border-t-border border-b border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                Restricted Functionality
              </th>
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                Restricted Services and Methods
              </th>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Account creation
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/CustomerService/CreateCustomerClient">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    CustomerService.CreateCustomerClient
                  </code>
                </a>
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                User management
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/CustomerUserAccessInvitationService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    CustomerUserAccessInvitationService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/CustomerUserAccessService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    CustomerUserAccessService
                  </code>
                </a>
                {" "}
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Planning
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanIdeaService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanIdeaService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanCampaignService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanCampaignService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanCampaignKeywordService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanCampaignKeywordService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanAdGroupService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanAdGroupService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanAdGroupKeywordService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanAdGroupKeywordService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/AudienceInsightsService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    AudienceInsightsService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanIdeaService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanIdeaService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/ReachPlanService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    ReachPlanService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                Account Billing and Payment
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/PaymentsAccountService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    PaymentsAccountService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/BillingSetupService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    BillingSetupService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/AccountBudgetProposalService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    AccountBudgetProposalService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/InvoiceService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    InvoiceService
                  </code>
                </a>
                <br className="inline [border-collapse:collapse]" />
                {" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {" "}
      <h3 className="block mt-8 mb-4 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-xl leading-7" data-component="heading" id="how_to_apply_for_explorer_access_level" role="presentation">
        <span className="inline" aria-level="3" role="heading">
          How to apply for Explorer Access level
        </span>
      </h3>
      {" "}
      <p className="block my-4">
        {"Complete the "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/api-policy/developer-token#apply-token">
          Google Ads API sign-up
        </a>
        {" on the Google Ads web interface. In some cases, Google may automatically upgrade your developer token to the Explorer Access level once you complete the signup."}
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="basic-access" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          Basic Access level
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        {"Basic Access level allows the developer token to make Google Ads API requests against both test accounts and production accounts. "}
        <strong className="inline font-bold">
          Production accounts
        </strong>
        {" are any accounts that serve real, live Google ads—test accounts don't serve ads."}
      </p>
      {" "}
      <p className="block my-4">
        Basic Access level allows the developer token to execute up to 15,000 operations per day. This is sufficient for most developers.
      </p>
      {" "}
      <h3 className="block mt-8 mb-4 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-xl leading-7" data-component="heading" id="how-to-apply-for-basic-access" role="presentation">
        <span className="inline" aria-level="3" role="heading">
          How to apply for Basic Access level
        </span>
      </h3>
      {" "}
      <p className="block my-4">
        If you have a developer token with Test Account Access level or Explorer Access, you can apply for Basic Access level as follows:
      </p>
      {" "}
      <ol className="block pl-10 [list-style-type:decimal] list-outside">
        <li className="list-item my-3">
          <p className="block mb-3">
            {"Navigate to the "}
            <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="https://ads.google.com/aw/apicenter">
              API Center
            </a>
            {" in your web browser. Sign in to your Google Ads manager account if prompted."}
          </p>
          {" "}
          <p className="block mt-3">
            <a className="h-9 inline-block min-w-9 px-6 rounded-sm overflow-hidden align-middle text-surface-3 [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-9 text-center whitespace-nowrap [word-break:break-word] text-nowrap bg-primary cursor-pointer hover:bg-clr-14 hover:shadow-[var(--clr-1)_0px_0.983509px_1.96702px_0px,var(--clr-15)_0px_0.983509px_2.95053px_0.983509px] focus:bg-clr-14 focus:shadow-[var(--clr-17)_0px_0.0158606px_0.0317211px_0px,var(--clr-17)_0px_0.0158606px_0.0475817px_0.0158606px]" data-component="button" href="https://ads.google.com/aw/apicenter" target="devsite">
              Access API Center
            </a>
          </p>
        </li>
        <li className="list-item my-3">
          <p className="block">
            {"Verify that your "}
            <strong className="inline font-bold">
              Access level
            </strong>
            {" is either "}
            <strong className="inline font-bold">
              Test Account
            </strong>
            {" or "}
            <strong className="inline font-bold">
              Explorer
            </strong>
            .
          </p>
        </li>
        <li className="list-item my-3">
          <p className="block">
            {"Ensure that the "}
            <strong className="inline font-bold">
              API Contact Email
            </strong>
            {" in the API center is up-to-date. You won't be able to complete the application process without a valid, regularly checked email address. Ensure you have linked all of your active Google Ads accounts to the Google Ads manager account with the API token."}
          </p>
        </li>
        <li className="list-item my-3">
          <p className="block">
            {"Click the drop-down arrow next to the "}
            <strong className="inline font-bold">
              Access level
            </strong>
            {" and click the "}
            <strong className="inline font-bold">
              Apply for Basic Access
            </strong>
            {" link."}
          </p>
        </li>
      </ol>
      {" "}
      <h3 className="block mt-8 mb-4 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-xl leading-7" data-component="heading" id="brand-verification" role="presentation">
        <span className="inline" aria-level="3" role="heading">
          Complete the brand verification of Google Cloud projects
        </span>
      </h3>
      {" "}
      <aside className="border-t border-solid border-t-clr-0 border-b border-b-clr-0 block my-4 -mx-10 py-[0.9375rem] pr-10 pl-19 text-color-003 text-[0.875rem] bg-surface-4 max-md:-mx-4 max-md:pr-4 max-md:pl-13 md:max-lg:-mx-6 md:max-lg:pr-6 md:max-lg:pl-15" data-ditto-id="style-aside-2">
        <strong className="inline font-bold">
          Note:
        </strong>
        <span className="inline">
          {" Brand verification is optional and is used only as a signal for faster determination of Ads API Basic Access eligibility. You don't need to complete brand verification if you already have an approved developer token and aren't newly applying for Basic Access level."}
        </span>
      </aside>
      {" "}
      <p className="block my-4">
        {"Google Ads API uses the brand verification status of Google Cloud projects associated with a developer token while reviewing the applications for Basic Access level. You can complete the brand verification process in your Google Cloud project to expedite the review process of your basic access application. In some cases, Google may also ask you to complete brand verification in your Google Cloud projects as a prerequisite to processing your basic access application. Refer to the "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/api-policy/brand-verification">
          brand verification guide
        </a>
        {" to learn more."}
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="standard-access" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          Standard Access level
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        {"Standard Access level allows the developer token to execute an unlimited number of operations per day for most services. This includes but is not limited to "}
        <code className="inline py-px px-1 text-muted [font-family:'Roboto_Mono',_monospace] text-sm font-medium leading-[0.875rem] text-left [word-break:break-word] bg-surface-2" dir="ltr">
          GoogleAdsService
        </code>
        {" "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/GoogleAdsService/Search">
          <code className="inline py-px px-1 text-accent [font-family:'Roboto_Mono',_monospace] text-sm font-medium leading-[0.875rem] text-left bg-surface-2" dir="ltr">
            Search
          </code>
        </a>
        {" and "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/GoogleAdsService/SearchStream">
          <code className="inline py-px px-1 text-accent [font-family:'Roboto_Mono',_monospace] text-sm font-medium leading-[0.875rem] text-left bg-surface-2" dir="ltr">
            SearchStream
          </code>
        </a>
        {". For more details on limits and exceptions to Standard Access level, see "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/best-practices/quotas">
          API quotas
        </a>
        .
      </p>
      {" "}
      <p className="block my-4">
        The Standard Access level are only granted to developers who require unlimited Google Ads API operations, such as large companies or tools that serve many users.
      </p>
      {" "}
      <h3 className="block mt-8 mb-4 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-xl leading-7" data-component="heading" id="how-to-apply-for-standard-access" role="presentation">
        <span className="inline" aria-level="3" role="heading">
          How to apply for Standard Access level
        </span>
      </h3>
      {" "}
      <p className="block my-4">
        If you have a developer token with Basic Access level, you can apply for Standard Access level as follows:
      </p>
      {" "}
      <ol className="block pl-10 [list-style-type:decimal] list-outside">
        <li className="list-item my-3">
          <p className="block mb-3">
            {"Navigate to the "}
            <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="https://ads.google.com/aw/apicenter">
              API Center
            </a>
            {" in your web browser. Sign in to your Google Ads manager account if prompted."}
          </p>
          {" "}
          <p className="block mt-3">
            <a className="h-9 inline-block min-w-9 px-6 rounded-sm overflow-hidden align-middle text-surface-3 [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-9 text-center whitespace-nowrap [word-break:break-word] text-nowrap bg-primary cursor-pointer hover:bg-clr-14 hover:shadow-[var(--clr-1)_0px_0.983404px_1.96681px_0px,var(--clr-15)_0px_0.983404px_2.95021px_0.983404px] focus:bg-clr-14 focus:shadow-[var(--clr-17)_0px_0.0158515px_0.031703px_0px,var(--clr-17)_0px_0.0158515px_0.0475546px_0.0158515px]" data-component="button" href="https://ads.google.com/aw/apicenter" target="devsite">
              Access API Center
            </a>
          </p>
        </li>
        <li className="list-item my-3">
          <p className="block">
            {"Verify that your "}
            <strong className="inline font-bold">
              Access level
            </strong>
            {" is "}
            <strong className="inline font-bold">
              Basic
            </strong>
            .
          </p>
        </li>
        <li className="list-item my-3">
          <p className="block">
            {"Ensure that the "}
            <strong className="inline font-bold">
              API Contact Email
            </strong>
            {" in the API center is up-to-date. You won't be able to complete the application process without a valid, regularly checked email address. Ensure you have linked all of your active Google Ads accounts to the Google Ads manager account with the API token."}
          </p>
        </li>
        <li className="list-item my-3">
          <p className="block">
            {"Click the drop-down arrow next to the "}
            <strong className="inline font-bold">
              Access level
            </strong>
            {" and click the "}
            <strong className="inline font-bold">
              Apply for Standard Access
            </strong>
            {" link."}
          </p>
        </li>
      </ol>
      {" "}
      <p className="block my-4">
        {"If your tool is used by external users, be prepared to provide demo sign-in access to your tool. Note that your tool must comply with the "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/rmf">
          Required Minimum Functionality
        </a>
        .
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="api-quotas-and-system-rate-limits" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          API quotas and system rate limits
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        {"Regardless of the access level, all API operations are subject to system rate limits, which restricts how many operations you may perform in a period of time, that is the number of operations per hour. To learn more about how to handle rate limit errors, see "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/best-practices/error-types#retryable_errors">
          error types
        </a>
        .
      </p>
      {" "}
      <p className="block my-4">
        {"Individual services may enforce additional limits and quota restrictions due to reasons such as product design limitations, product policy restrictions, API performance and latency considerations. See the documentation about "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/google-ads/api/docs/best-practices/quotas">
          API quotas
        </a>
        {" to learn more about these restrictions."}
      </p>
      {" "}
      <h2 className="block mt-12 mb-6 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-2xl leading-8" data-component="heading" id="permissible-use" role="presentation">
        <span className="inline" aria-level="2" role="heading">
          Permissible use
        </span>
      </h2>
      {" "}
      <p className="block my-4">
        Permissible use only applies to developer tokens with Basic Access and Standard Access levels. Permissible use is allocated based on intended use of the Google Ads API. These permissions determine which features of the API a developer token can be used for, as elaborated in the following table:
      </p>
      {" "}
      <div className="block my-4 overflow-auto">
        <table className="table text-sm leading-5 [border-collapse:collapse]">
          <tbody className="table-row-group align-middle [border-collapse:collapse]">
            <tr className="border-t border-solid border-t-border border-b border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                {"Permissible Use "}
              </th>
              <th className="table-cell p-2 align-middle font-medium text-left bg-background [border-collapse:collapse]">
                {"Description "}
              </th>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Ad creation / management "}
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Provide access to all services of the API for creating and managing Google Ads campaigns, ad groups, ads, and keywords. "}
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Reporting "}
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Only make "}
                <code className="inline text-muted [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                  <a className="inline text-accent cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/GoogleAdsService/Search">
                    GoogleAdsService.Search
                  </a>
                </code>
                {" or "}
                <code className="inline text-muted [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                  <a className="inline text-accent cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/GoogleAdsService/SearchStream">
                    GoogleAdsService.SearchStream
                  </a>
                </code>
                {" requests, or read-only calls. This is for developers who only use the API to request stats. "}
              </td>
            </tr>
            <tr className="border-b border-solid border-b-border table-row align-middle [background-position:0px_50%] [border-collapse:collapse]">
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Researching keywords and recommendations "}
              </td>
              <td className="table-cell pt-[0.4375rem] pb-2 px-2 align-top text-left bg-surface [border-collapse:collapse]">
                {"Allow the developer token to access "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/RecommendationService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    RecommendationService
                  </code>
                </a>
                {", "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanIdeaService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanIdeaService
                  </code>
                </a>
                {", and "}
                <a className="inline text-primary cursor-pointer [border-collapse:collapse] focus:underline" data-component="link" href="/google-ads/api/reference/rpc/v25/KeywordPlanService">
                  <code className="inline text-accent [font-family:'Roboto_Mono',_monospace] font-medium leading-3.5 bg-surface-2 [border-collapse:collapse]" dir="ltr">
                    KeywordPlanService
                  </code>
                </a>
                {". This is only used by tools requiring suggestions to help facilitate the creation and management of Google Ads campaigns. "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {" "}
      <h3 className="block mt-8 mb-4 overflow-x-clip [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-xl leading-7" data-component="heading" id="how-to-change-permissible-use" role="presentation">
        <span className="inline" aria-level="3" role="heading">
          How to change permissible use
        </span>
      </h3>
      {" "}
      <p className="block my-4">
        {"If your developer token has been approved for either the Basic Access level or Standard Access level, you can fill out the "}
        <a className="inline text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="https://support.google.com/adspolicy/contact/tool_change">
          application to update permissible use
        </a>
        . Fill out the application if you would like to update your permissible use or grant your clients access to your tool.
      </p>
      {" "}
    </div>
  );
}
