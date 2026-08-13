import Icon5 from "../svgs/svg-icon5";
import ListRow5, { type ListRow5Data } from "../components/list-row5";
import ListRow6, { type ListRow6Data } from "../components/list-row6";
const ListRow5_data: ListRow5Data[] = [
    { text: "title", text2: " – title text of the ad;" },
    { text: "description", text2: " – description ad text;" },
    { text: "url", text2: " – relevant URL of the ad element in SERP;" },
    { text: "images", text2: " array – contains an alt text of the image, its URL, and the URL leading to the original image resource;" }
];
const ListRow6_data: ListRow6Data[] = [
    { text: "Retrieve detailed data on advertisers, including the approximate ad count and advertiser IDs." },
    { text: "Explore both active and historical ads from advertisers." },
    { text: "Identify the Google services where ads are displayed and their respective formats." },
    { text: "Analyze competitor ad creatives and messaging strategies to understand how they engage their audience." }
];
/** How Can You section. */
export default function HowCanYouSection({ listRow5Data = ListRow5_data, listRow6Data = ListRow6_data } = {}) {
  return (
    <div className="block leading-7">
      <p className="block mb-5 leading-[1.625rem]">
        Keeping an eye on competitors in a sphere like online advertising is vital for success. Analyzing competitors’ ads and how they are displayed in Google SERPs can provide valuable insights for optimizing your own ad campaigns.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"For instance, you can explore the strengths and weaknesses of the competitors’ ads and advertising strategies. You can analyze which keywords your competitors target in search ads and what tone of voice they use to resonate with the audience. Moreover, examining the locations and Google services where their ads are displayed may reveal new opportunities for ad targeting. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Obtaining data on a few ad competitors is easy, but analyzing dozens becomes more challenging. Besides, you can’t get competitors’ data in Google Ads – you can only access your campaigns. Sure, you can manually research competitors on SERPs, but this method is inefficient and time-consuming.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Fortunately, APIs provide an efficient way to overcome these challenges. By using the right APIs, you can explore ad competitors and retrieve data on their ads from SERPs in real time. Additionally, APIs can extract advertising data from the Google Ads Transparency Center — a new Google service designed for transparent ad monitoring. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"In this article, we will explore how to use APIs to gather ads and advertiser data from SERPs and the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://adstransparency.google.com/" rel="nofollow noopener" target="_blank">
            Google Ads Transparency Center
          </a>
        </strong>
        . Additionally, we’ll demonstrate a practical case for using this data to fine-tune your advertising campaigns.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          Contents:
        </strong>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <a className="inline text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#apidata">
          <strong className="inline">
            <i className="inline italic" />
            How can you get ads and advertiser data using APIs?
          </strong>
        </a>
        <br className="inline" />
        {" "}
        <a className="inline pl-[0.9375rem] text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#method1">
          <span className="inline text-color-007">
            ➤
          </span>
          Getting ads and advertiser data from search engine results
        </a>
        <br className="inline" />
        {" "}
        <a className="inline pl-[0.9375rem] text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#method2">
          <span className="inline text-color-007">
            ➤
          </span>
          Retrieving data from Google Ads Transparency with APIs
        </a>
        <br className="inline" />
        {" "}
        <a className="inline text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#usecase">
          <strong className="inline">
            <i className="inline italic" />
            Use case: Research competitors and their ads in SERP to enhance your own campaign
          </strong>
        </a>
        <br className="inline" />
        {" "}
        <a className="inline pl-[0.9375rem] text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#title1">
          <span className="inline text-color-007">
            ➤
          </span>
          Identifying ads and advertisers displayed in SERP with Google Organic
        </a>
        <br className="inline" />
        {" "}
        <a className="inline pl-[0.9375rem] text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#title2">
          <span className="inline text-color-007">
            ➤
          </span>
          Getting data on competitors with Ads Advertisers
        </a>
        <br className="inline" />
        {" "}
        <a className="inline pl-[0.9375rem] text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#title3">
          <span className="inline text-color-007">
            ➤
          </span>
          Exploring all competitors’ ads with Ads Search
        </a>
        <br className="inline" />
        {" "}
        <a className="inline pl-[0.9375rem] text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#title4">
          <span className="inline text-color-007">
            ➤
          </span>
          Getting new ad keyword ideas with Keywords for Keywords
        </a>
        <br className="inline" />
        {" "}
        <a className="inline text-accent font-semibold cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="#conclusion">
          <strong className="inline">
            <i className="inline italic" />
            Conclusion
          </strong>
        </a>
        <br className="inline" />
        {" "}
      </p>
      {" "}
      <h3 className="block mt-[2.4rem] mb-[0.9rem] text-color-001 text-2xl font-bold leading-[1.8125rem] [overflow-wrap:break-word]" data-component="heading" id="how-can-you-get-ads-and-advertiser-data-from-serp-using-apis">
        <a className="inline text-accent font-semibold" name="apidata" />
        How can you get ads and advertiser data from SERP using APIs?
      </h3>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        APIs emerge as a scalable and effective solution for retrieving detailed data on ads and advertisers. The main benefit of using APIs is that you can effortlessly get real-time data from SERPs and Google services in bulk. Moreover, you can get results based on various parameters, like a specific location, language, keyword, or even a target domain. These benefits open a wide range of opportunities for large-scale competitor research in online advertising instead of manually surfing search results for competitors and their ads.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        There are two main ways to get ads and advertiser data with APIs. The first method involves retrieving multiple SERPs to identify potential competitors and see how their ads are displayed in the search engine. The second uses the Google Ads Transparency Center to get detailed data on competitors and all their ads published across Google Services.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Let’s explore these two approaches in detail and outline their main benefits.
      </p>
      {" "}
      <h4 className="block mt-7.5 mb-2.5 text-color-001 text-[1.25rem] font-bold [overflow-wrap:break-word]" data-component="heading">
        <a className="inline text-accent font-semibold" name="method1" />
        <span className="border-[3px] border-solid border-border inline-block -mt-1 mr-2 ml-1 rounded-[50%] align-middle text-color-003 leading-[1.4375rem] text-center">
          1
        </span>
        {" Getting ads and advertiser data from search engine results"}
      </h4>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        {"To research competitors and their ads using data from the Google search engine, you have to analyze multiple search engine results pages. You can accomplish this task using the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?bash" target="_blank">
            DataForSEO Google Organic
          </a>
          {" "}
        </strong>
        {"endpoint of "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/google-serp-api" target="_blank">
            SERP API
          </a>
        </strong>
        . This endpoint can provide a real-time overview of Google results pages with search elements that may include paid search.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        However, this approach has certain drawbacks that influence its effectiveness. There is no guarantee that the endpoint’s response will include paid results, nor will it capture all potential ads for a given search query. This limitation arises because Google Ads bidding happens in real time, causing ads to appear, disappear, or change momentarily.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        All that means this method may not provide a fully comprehensive view of competitors’ ads. Nevertheless, it is still valuable for identifying potential ad competitors for further analysis. By examining the results, you can see how competitors’ ads are displayed in the SERP, and explore specific ad details. Additionally, the API’s quick response time and ability to handle up to 2,000 calls per minute enable the rapid retrieval of bulk SERP data.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Using the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?bash" target="_blank">
            Google Organic
          </a>
        </strong>
        {" endpoint is easy. First, you should call the endpoint and set up a task."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST https://api.dataforseo.com/v3/serp/google/organic/live/advanced
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"In the request, specify the target keyword, location, and language. Additionally, use the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          device
        </code>
        {" field to get results specific to a device’s type and the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          os
        </code>
        {" parameter to choose the device operating system. The Google Organic endpoint returns 100 results from SERP, but you can increase the number of results using the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          depth
        </code>
        {" parameter. For more information on the parameters for this endpoint, check the documentation. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"language_code\": \"en\",\n    \"location_code\": 1006886,\n    \"keyword\": \"ai marketing tool\",\n    \"deivce\": \"desktop\",\n    \"os\": \"windows\"\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"The "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          items
        </code>
        {" array of the result may contain "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          paid
        </code>
        {" objects. These objects contain information about ads displayed in retrieved SERP and look as follows."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <em className="inline italic">
          <strong className="inline text-color-001 font-semibold">
            Example:
          </strong>
        </em>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n              \"type\": \"paid\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"position\": \"left\",\n              \"xpath\": \"/html[1]/body[1]/div[3]/div[1]/div[13]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]\",\n              \"title\": \"AI-Assisted Marketing\",\n              \"domain\": \"www.braze.com\",\n              \"breadcrumb\": \"https://www.braze.com\",\n              \"is_image\": false,\n              \"is_video\": false,\n              \"images\": null,\n              \"url\": \"https://www.braze.com/customer-engagement\",\n              \"highlighted\": null,\n              \"extra\": {\n                \"ad_aclk\": \"DChcSEwiX5s_l1bGKAxU1o2YCHXdJGJMYABADGgJzbQ\"\n              },\n              \"description\": \"Braze™ | Marketing Automation — Create, Adapt, & Iterate on Customer Journeys All in One Place. Turn Leads Into Customers.\",\n              \"description_rows\": null,\n              \"links\": null,\n              \"price\": null,\n              \"rectangle\": null\n            }\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          The paid objects have fields with detailed data about displayed ads, such as:
        </strong>
      </p>
      {" "}
      <ul className="block my-5 pl-6.5 [list-style-type:disc] list-outside">
        <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
          <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
            rank_group
          </code>
          {" and "}
          <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
            rank_absolute
          </code>
          {" – show the ad’s position relative to other ads in SERP and all other elements, respectively."}
        </li>
        {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} />)}
        <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
          <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
            ad_aclk
          </code>
          {" – the ad identifier. It can be used in the "}
          <strong className="inline text-color-001 font-semibold">
            <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/merchant/google/sellers/ad_url/?bash" target="_blank">
              Google Sellers Ad URL
            </a>
          </strong>
          {" endpoint of the "}
          <strong className="inline text-color-001 font-semibold">
            <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/merchant-api" target="_blank">
              Merchant API
            </a>
          </strong>
          {" to retrieve the full decoded ad URL."}
        </li>
      </ul>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Using this information, you can explore the potential competitors and see the position of some of their ads in SERPs. Additionally, you can analyze the types of text, keywords, and images used in ads to attract the audience. For a visual reference, you can get a screenshot of the SERP using the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/screenshot/?bash" target="_blank">
            Screenshot
          </a>
        </strong>
        {" endpoint."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <img className="w-[56.8125rem] h-107.5 block max-w-full my-8 rounded-sm overflow-clip aspect-[auto_1100/521] align-middle [cursor:zoom-in] max-md:w-[21.4375rem] max-md:h-40.5 md:max-lg:w-180.5 md:max-lg:h-85.5 2xl:w-220 2xl:h-[26.0625rem]" data-component="image" alt="Ads Transparency 1" height="521" sizes="(max-width: 1100px) 100vw, 1100px" src="/assets/cloned/images/33eae0b7a356.webp" srcSet="/assets/cloned/images/33eae0b7a356.webp 1500w, /assets/cloned/images/dffc05cb06df.webp 300w, /assets/cloned/images/badb8eb0453d.webp 768w, /assets/cloned/images/7c181cd70052.webp 1536w, /assets/cloned/images/a0d811ebb92a.webp 1920w" title="Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs 2" width="1100" />
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        If you need to get the complete URLs of competitor ads, you can use the ad identifier (
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          ad_aclk
        </code>
        {") in the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/merchant/google/sellers/ad_url/?bash" target="_blank">
            Google Sellers Ad URL
          </a>
        </strong>
        {" endpoint. Call this endpoint and place the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          ad_aclk
        </code>
        {" at the end of the request URL."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          GET: https://api.dataforseo.com/v3/merchant/google/sellers/ad_url/
          <strong className="inline font-semibold">
            DChcSEwjHhveG5a6KAxWxtloFHXFxDsMY
            <br className="inline" />
            {" ABAFGgJ2dQ"}
          </strong>
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"As a result, you will get a fully decoded "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          ad_url
        </code>
        {" with all additional UTM parameters."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Example:
          </em>
        </strong>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {"https://www.braze.com/product/mobile-app-messaging?utm_medium=paid-search&utm_source=google&utm_campaign=fy22-emea-marketing_automation_uk&i_en&utm_content=mt_marketing_automation_ad_copy_fy22&utm_term=mark"}
          <br className="inline" />
          {" eting_automation|best ai marketing automation|p|g|c||686007437718&_bt=686007437718&_bk=best ai marketing automation&_bm=p&_bn=g&gad_source=1"}
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"You can use the decoded URL to identify the exact page the ad points to and analyze the types of text and visuals on the landing page, as well as the purpose for which it is tailored. Additionally, you can examine the UTM parameters used by competitors in their ads to identify opportunities for implementing similar parameters and values in your own campaigns. For example, the parameter "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          utm_term=marketing_automation|best_ai_marketing_automation
        </code>
        {" indicates that this ad specifically targets the search terms “"}
        <strong className="inline text-color-001 font-semibold">
          marketing automation
        </strong>
        ” and “
        <strong className="inline text-color-001 font-semibold">
          best ai marketing automation
        </strong>
        ”.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        As you can see, with the SERP API Google Organic endpoint, you can extract real-time search results that may contain information about the ads on SERP and how they are displayed. Moreover, with the Sellers Ad URL endpoint of Merchant API, it is possible to get decoded ad URLs to analyze the specific ads that may catch your interest. All this data can be used to examine the actual SERP performance of competitor’s ads and evaluate their strengths and weaknesses.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Using the Google Organic and Sellers Ad URL endpoints for ad competitor research is indeed cost-effective. For example, the price per SERP page retrieved in Live mode costs "}
        <strong className="inline text-color-001 font-semibold">
          only $0.002
        </strong>
        {". So, "}
        <strong className="inline text-color-001 font-semibold">
          to get 1000 SERPs
        </strong>
        {" this way, you will pay just "}
        <strong className="inline text-color-001 font-semibold">
          $2
        </strong>
        {". The cost of using Sellers Ad URL endpoint is even cheaper. With the price per 1 URL of "}
        <strong className="inline text-color-001 font-semibold">
          $0.000001
        </strong>
        {", you can get "}
        <strong className="inline text-color-001 font-semibold">
          1000 ad URLs
        </strong>
        {" for just "}
        <strong className="inline text-color-001 font-semibold">
          $0.001
        </strong>
        {". Check our "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/pricing" target="_blank">
            Pricing
          </a>
        </strong>
        {" page for more details. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Now you know one method to get data on ads and advertisers from SERPs. While this method is useful for retrieving SERP data in bulk, it is not entirely reliable. There is no guarantee that SERP API will always return paid results, and it can’t capture all the ads a competitor is running. However, you can overcome these constraints by using the second method—getting the advertiser data from the Google Ads Transparency Center.
      </p>
      {" "}
      <h4 className="block mt-7.5 mb-2.5 text-color-001 text-[1.25rem] font-bold [overflow-wrap:break-word]" data-component="heading">
        <a className="inline text-accent font-semibold" name="method2" />
        <span className="border-[3px] border-solid border-border inline-block -mt-1 mr-2 ml-1 rounded-[50%] align-middle text-color-003 leading-[1.4375rem] text-center">
          2
        </span>
        {" Retrieving data from Google Ads Transparency with APIs"}
      </h4>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        {"Launched in 2023, the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://adstransparency.google.com/" rel="nofollow noopener" target="_blank">
            Google Ads Transparency Center
          </a>
        </strong>
        {" has become a hidden gem for PPC competitor analysis. It was created to transparently monitor Google Ads advertisers and the content of ads by Google users. However, the functionality of Google Ads Transparency opened a new way for marketers to research advertising competitors. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        For instance, in the Google Ads Transparency Center, you can enter a competitor’s name or domain to view all displayed ads. Additionally, you can narrow the results by selecting a specific country, Google service, and time range.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <img className="w-[56.8125rem] h-[29.0625rem] block max-w-full my-8 rounded-sm overflow-clip aspect-[auto_1100/562] align-middle [cursor:zoom-in] max-md:w-[21.4375rem] max-md:h-[10.9375rem] md:max-lg:w-180.5 md:max-lg:h-[23.0625rem] 2xl:w-220 2xl:h-112.5" data-component="image" alt="Ads Transparency 2" height="562" sizes="(max-width: 1100px) 100vw, 1100px" src="/assets/cloned/images/47cef02e04fd.webp" srcSet="/assets/cloned/images/47cef02e04fd.webp 1500w, /assets/cloned/images/a7eda8fc178c.webp 300w, /assets/cloned/images/b84b37275d8b.webp 768w, /assets/cloned/images/be0fe72381ed.webp 1536w, /assets/cloned/images/bae99aec79e8.webp 1920w" title="Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs 3" width="1100" />
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        You can also click an individual ad to see when it was last shown and its format.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <img className="w-[56.8125rem] h-[28.6875rem] block max-w-full my-8 rounded-sm overflow-clip aspect-[auto_1100/555] align-middle [cursor:zoom-in] max-md:w-[21.4375rem] max-md:h-[10.8125rem] md:max-lg:w-180.5 md:max-lg:h-91 2xl:w-220 2xl:h-111" data-component="image" alt="Ads Transparency 3" height="555" sizes="auto, (max-width: 1100px) 100vw, 1100px" src="/assets/cloned/images/f6fba4cabb95.webp" srcSet="/assets/cloned/images/f6fba4cabb95.webp 1500w, /assets/cloned/images/f70d7f45317d.webp 300w, /assets/cloned/images/98654f778649.webp 768w, /assets/cloned/images/7420b7b3555d.webp 1536w, /assets/cloned/images/52fa81f78eab.webp 1920w" title="Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs 4" width="1100" />
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        As you can see, using Google Ads Transparency Center, you can quickly explore both active and older ads displayed by a specific advertiser (up to the latest, 2023). It lets you view ads across different Google services simultaneously without manually searching the SERP. However, you still need to research each advertiser individually This is where APIs come in, enabling the extraction of all available and hidden data from the Ads Transparency Center.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"In particular, our new SERP API endpoints, "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-advertisers" target="_blank">
            Google Ads Advertisers
          </a>
        </strong>
        {" and "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-search" target="_blank">
            Google Ads Search
          </a>
        </strong>
        , are specifically designed to retrieve ad details and advertiser data from the Ads Transparency Center. These endpoints transform ad competitor research by providing comprehensive information about ads from multiple advertisers in a single response. Let’s take a closer look at each endpoint.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          {"1. The "}
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/live/advanced/?bash" target="_blank">
            Google Ads Advertisers
          </a>
          {" endpoint"}
        </strong>
        {" is a powerful tool for getting detailed advertiser information in bulk. The standout feature of this endpoint is the ability to get information about advertisers that you can’t obtain from SERPs or Google Ads, such as advertiser ID and approximate ads count. You just need to call this endpoint, specify the location, and write the advertiser’s name in the keyword field."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST: https://api.dataforseo.com/v3/serp/google/ads_advertisers/live/advanced
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"location_name\": \"United Kingdom\",\n    \"keyword\": \"dataforseo\"\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Response example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n  \"version\": \"0.1.20241217\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"12.1017 sec.\",\n  \"cost\": 0.002,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"12231904-1535-0139-0000-711d119d4f2f\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"12.0363 sec.\",\n      \"cost\": 0.002,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"ads_advertisers\",\n        \"live\",\n        \"advanced\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"live\",\n        \"se\": \"google\",\n        \"se_type\": \"ads_advertisers\",\n        \"location_name\": \"United Kingdom\",\n        \"keyword\": \"dataforseo\",\n        \"device\": \"desktop\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"dataforseo\",\n          \"type\": \"ads_advertisers\",\n          \"se_domain\": \"adstransparency.google.com\",\n          \"location_code\": 2826,\n          \"language_code\": \"en\",\n          \"check_url\": null,\n          \"datetime\": \"2024-12-23 17:04:31 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"ads_advertiser\",\n            \"ads_domain\"\n          ],\n          \"se_results_count\": 0,\n          \"items_count\": 2,\n          \"items\": [\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"title\": \"Dataforseo OU\",\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"location\": \"EE\",\n              \"verified\": true,\n              \"approx_ads_count\": 22\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 2,\n              \"domain\": \"dataforseo.com\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"In the endpoint’s response, you will receive a list of advertisers who manage a single Google Ads account, as well as multi-account advertisers who have multiple accounts but share the same name. Moreover, you will get comprehensive data on each advertiser, including its verification status, the approximate number of ads, and, most notably, the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          advertiser_id
        </code>
        {" – "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/help-center/what-is-an-advertiser_id-in-google-ads-and-how-can-you-obtain-it" target="_blank">
            unique advertiser identifier
          </a>
        </strong>
        {". This ID can be used to explore all ads published by the advertiser via the Google Ads Search endpoint. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Using this endpoint, you can quickly gather data about potential ad competitors in your industry for further research.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          {"2. The "}
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/live/advanced/?bash" target="_blank">
            Google Ads Search
          </a>
          {" endpoint"}
        </strong>
        {" complements the Google Ads Advertisers endpoint perfectly. It retrieves detailed data on ads run by specific advertisers across all Google services for a defined location. To set a task, you can use either the advertiser’s website domain or their "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          advertiser_id
        </code>
        {", which can be obtained through the "}
        <strong className="inline text-color-001 font-semibold">
          Google Ads Advertisers
        </strong>
        {" endpoint."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"With the Google Ads Search endpoint, you can get information about all ads for up to 25 advertisers in a single request. Moreover, you can customize the request to get results for a specific location, Google service, ad type, and timeframe. This endpoint is ideal for large-scale competitor ad research and is an efficient alternative to manual scraping of the Google Ads Transparency Center. "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST: https://api.dataforseo.com/v3/serp/google/ads_search/live/advanced
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"location_name\": \"United Kingdom\",\n    \"advertiser_ids\": [\n      \"AR13752565271262920705\"\n    ],\n    \"platform\": \"google_search\",\n    \"date_from\": \"2024-10-01\",\n    \"date_to\": \"2024-12-19\",\n    \"depth\": 15\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Response example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n  \"version\": \"0.1.20241217\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"3.1019 sec.\",\n  \"cost\": 0.002,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"12231908-1535-0139-0000-cfc37a66c53d\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"3.0266 sec.\",\n      \"cost\": 0.002,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"ads_search\",\n        \"live\",\n        \"advanced\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"live\",\n        \"se\": \"google\",\n        \"se_type\": \"ads_search\",\n        \"location_name\": \"United Kingdom\",\n        \"advertiser_ids\": [\n          \"AR13752565271262920705\"\n        ],\n        \"platform\": \"google_search\",\n        \"date_from\": \"2024-10-01\",\n        \"date_to\": \"2024-12-19\",\n        \"depth\": 15,\n        \"device\": \"desktop\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"ids:AR13752565271262920705\",\n          \"type\": \"ads_search\",\n          \"se_domain\": \"adstransparency.google.com\",\n          \"location_code\": 2826,\n          \"language_code\": \"en\",\n          \"check_url\": null,\n          \"datetime\": \"2024-12-23 17:08:25 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"ads_search\"\n          ],\n          \"se_results_count\": 0,\n          \"items_count\": 15,\n          \"items\": [\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR04993497650285248513\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR04993497650285248513?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/10115983844720688453\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:10:21 +00:00\",\n              \"last_shown\": \"2024-12-23 14:07:48 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 2,\n              \"rank_absolute\": 2,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR12042076438048800769\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR12042076438048800769?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/17942259409837424820\",\n                \"height\": 219,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-05-30 13:09:10 +00:00\",\n              \"last_shown\": \"2024-12-23 08:29:10 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 3,\n              \"rank_absolute\": 3,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR17473444801570406401\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR17473444801570406401?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/1641105414394893292\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-07-04 15:17:54 +00:00\",\n              \"last_shown\": \"2024-12-23 07:50:01 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 4,\n              \"rank_absolute\": 4,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR13315550940145647617\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR13315550940145647617?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/7774403068822838759\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:13:03 +00:00\",\n              \"last_shown\": \"2024-12-23 05:51:37 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 5,\n              \"rank_absolute\": 5,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR00574697066932994049\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR00574697066932994049?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/7368343709185202310\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:02:17 +00:00\",\n              \"last_shown\": \"2024-12-23 05:00:14 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 6,\n              \"rank_absolute\": 6,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR14294538982367690753\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR14294538982367690753?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/18442165902183032547\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-08-11 16:18:48 +00:00\",\n              \"last_shown\": \"2024-12-23 03:42:29 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 7,\n              \"rank_absolute\": 7,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR16579141694675484673\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR16579141694675484673?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/17717871248044095500\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:19:29 +00:00\",\n              \"last_shown\": \"2024-12-23 02:29:29 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 8,\n              \"rank_absolute\": 8,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR10722536040880406529\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR10722536040880406529?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/3366731893680246315\",\n                \"height\": 225,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-06-18 13:16:44 +00:00\",\n              \"last_shown\": \"2024-12-23 02:02:19 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 9,\n              \"rank_absolute\": 9,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR17249727445544730625\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR17249727445544730625?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/10347890168435160670\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-06-21 15:15:13 +00:00\",\n              \"last_shown\": \"2024-12-22 12:08:37 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 10,\n              \"rank_absolute\": 10,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR11802137505942208513\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR11802137505942208513?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/10658779585912133650\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 09:57:26 +00:00\",\n              \"last_shown\": \"2024-12-20 12:50:53 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 11,\n              \"rank_absolute\": 11,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR00182140629491384321\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR00182140629491384321?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/12460533716685135356\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:06:02 +00:00\",\n              \"last_shown\": \"2024-12-20 12:45:35 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 12,\n              \"rank_absolute\": 12,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR09280195381893791745\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR09280195381893791745?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/1557413086725787963\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:10:45 +00:00\",\n              \"last_shown\": \"2024-07-04 14:26:54 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 13,\n              \"rank_absolute\": 13,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR12693880468731330561\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR12693880468731330561?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/1242966674039009940\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:12:13 +00:00\",\n              \"last_shown\": \"2024-07-04 14:03:46 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 14,\n              \"rank_absolute\": 14,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR05365339597897203713\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR05365339597897203713?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/6838101999820781180\",\n                \"height\": 153,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 09:59:36 +00:00\",\n              \"last_shown\": \"2024-06-14 12:54:45 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 15,\n              \"rank_absolute\": 15,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR02931319921163894785\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR02931319921163894785?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/2956752892591404585\",\n                \"height\": 153,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 09:59:04 +00:00\",\n              \"last_shown\": \"2024-05-22 14:47:01 +00:00\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        The response includes objects with data about all ads published by advertiser(s) across Google services like Google Search, YouTube, and Display. These objects contain information such as the first and last time each ad was shown, the ad’s position in SERP and format, and a preview image of the ad. Additionally, the results are returned in a structured format, with the data conveniently separated for each advertiser specified in your request.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"By combining the "}
        <strong className="inline text-color-001 font-semibold">
          Google Ads Advertisers
        </strong>
        {" and "}
        <strong className="inline text-color-001 font-semibold">
          Google Ads Search
        </strong>
        {" endpoints, you can:"}
      </p>
      {" "}
      <ul className="block my-5 pl-6.5 [list-style-type:disc] list-outside">
        {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} />)}
      </ul>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"For detailed instructions on setting up tasks for these endpoints and understanding the results, refer to "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/help-center/how-to-retrieve-data-on-ads-and-advertisers-from-google-ads" target="_blank">
            our comprehensive guide
          </a>
        </strong>
        {" in the Help Center."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"The pricing for the Google Ads Advertisers and Google Ads Search endpoints is both affordable and transparent. For example, setting a task for Google Ads Advertisers in Live mode costs "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/pricing/serp/serp-api" target="_blank">
            just $0.002
          </a>
        </strong>
        {". The same pricing applies to retrieve 40 results in the Google Ads Search endpoint. This means that obtaining a list of advertisers and retrieving "}
        <strong className="inline text-color-001 font-semibold">
          120 results
        </strong>
        {" in Google Ads Search would cost "}
        <strong className="inline text-color-001 font-semibold">
          only $0.008
        </strong>
        {" in total."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Now that we’ve explored both approaches to retrieving ads and advertiser data for uncovering competitor strategies, it’s clear that each method has its unique advantages. However, when used together, they provide the most comprehensive view of the competitive landscape and opportunities in advertising.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Let’s examine a practical and comprehensive use case below to demonstrate the full potential of these approaches.
        <br className="inline" />
        {" "}
      </p>
      {" "}
      <h3 className="block mt-[2.4rem] mb-[0.9rem] text-color-001 text-2xl font-bold leading-[1.8125rem] [overflow-wrap:break-word]" data-component="heading" id="use-case-research-competitors-and-their-ads-in-serp-to-enhance-your-ad-campaigns">
        <a className="inline text-accent font-semibold" name="usecase" />
        Use case: Research competitors and their ads in SERP to enhance your ad campaigns
      </h3>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        Let’s assume you are the marketing manager of a software company specializing in creating tailored AI chatbots and other solutions for the B2B market. To promote your services, you created a Google Ads campaign targeting an audience in London, United Kingdom. Before launching your campaign, you want to explore possible competitors and their ads to fine-tune your strategy.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          You can accomplish this task by leveraging the following DataForSEO endpoints:
        </strong>
      </p>
      {" "}
      <ol className="block my-5 pl-6.5 [list-style-type:decimal] list-outside">
        <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
          <strong className="inline text-color-001 font-semibold">
            <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?bash" target="_blank">
              Google SERP Organic
            </a>
          </strong>
          : To retrieve SERPs displaying competitors’ ads.
        </li>
        <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
          <strong className="inline text-color-001 font-semibold">
            <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-advertisers" target="_blank">
              Google Ads Advertisers
            </a>
          </strong>
          {": To obtain detailed information about ad competitors, including their "}
          <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
            advertiser_id
          </code>
          .
        </li>
        <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
          <strong className="inline text-color-001 font-semibold">
            <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-search" target="_blank">
              Google Ads Search
            </a>
          </strong>
          : To explore all ads displayed by competitors and analyze their content.
        </li>
        <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
          <strong className="inline text-color-001 font-semibold">
            <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/live/advanced/?bash" target="_blank">
              Keywords for Keywords
            </a>
          </strong>
          : To discover relevant keyword ideas for ads with optimal CPC and search volume.
        </li>
      </ol>
      {" "}
      <h4 className="block mt-7.5 mb-2.5 text-color-001 text-[1.25rem] font-bold [overflow-wrap:break-word]" data-component="heading">
        <a className="inline text-accent font-semibold" name="title1" />
        <span className="border-[3px] border-solid border-border inline-block -mt-1 mr-2 ml-1 rounded-[50%] align-middle text-color-003 leading-[1.4375rem] text-center">
          1
        </span>
        {" Identifying ads and advertisers displayed in SERP with Google Organic"}
      </h4>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          1.
        </strong>
        {" Let’s start with the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?bash" target="_blank">
            Google SERP Organic
          </a>
        </strong>
        {" endpoint to identify the ads already displayed in the SERP for the query “"}
        <strong className="inline text-color-001 font-semibold">
          ai chatbot
        </strong>
        ” in London.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST: https://api.dataforseo.com/v3/serp/google/organic/live/advanced
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          2.
        </strong>
        {" In the request, specify the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          language_name
        </code>
        {" with "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          “en”
        </code>
        {" and "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          location_name
        </code>
        {" with "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          "London,England,United Kingdom"
        </code>
        {". Then, write “ai chatbot” query in the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          keyword
        </code>
        {" field and use the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          “device”: “desktop”
        </code>
        {" parameter to get desktop-based results."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"language_code\": \"en\",\n    \"location_name\": \"London,England,United Kingdom\",\n    \"keyword\": \"ai chatbot\",\n    \"device\": \"desktop\"\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            The response will return as follows:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n  \"version\": \"0.1.20241217\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"0.1255 sec.\",\n  \"cost\": 0,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"12181917-1535-0139-0000-d27863db21b4\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"0.0699 sec.\",\n      \"cost\": 0,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"organic\",\n        \"task_get\",\n        \"advanced\",\n        \"12181917-1535-0139-0000-d27863db21b4\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"task_get\",\n        \"se\": \"google\",\n        \"se_type\": \"organic\",\n        \"language_code\": \"en\",\n        \"location_name\": \"London,England,United Kingdom\",\n        \"keyword\": \"ai chatbot\",\n        \"device\": \"desktop\",\n        \"postback_data\": \"advanced\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"ai chatbot\",\n          \"type\": \"organic\",\n          \"se_domain\": \"google.co.uk\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"check_url\": \"https://www.google.co.uk/search?q=ai%20chatbot&num=100&hl=en&gl=GB&gws_rd=cr&ie=UTF-8&oe=UTF-8&glp=1&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS\",\n          \"datetime\": \"2024-12-18 17:17:28 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"paid\",\n            \"organic\",\n            \"people_also_ask\",\n            \"images\",\n            \"related_searches\"\n          ],\n          \"se_results_count\": 4430000000,\n          \"items_count\": 108,\n          \"items\": [\n            {\n              \"type\": \"paid\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"position\": \"left\",\n              \"xpath\": \"/html[1]/body[1]/div[3]/div[1]/div[12]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]\",\n              \"title\": \"Try Now - Freshechat\",\n              \"domain\": \"www.freshworks.com\",\n              \"breadcrumb\": \"https://www.freshworks.com\",\n              \"is_image\": false,\n              \"is_video\": false,\n              \"images\": null,\n              \"url\": \"https://www.freshworks.com/live-chat-software/lp/website-livechat/\",\n              \"highlighted\": null,\n              \"extra\": {\n                \"ad_aclk\": \"DChcSEwji66-z6bGKAxUUN0QIHXjMFBQYABACGgJkeg\"\n              },\n              \"description\": \"Try Free Live Chat Software — Greet Your Website Visitors With A Customised, & User-Friendly Free Live Chat Application. Proactively support and notify customers on your website with a Free live chat Solution.\",\n              \"description_rows\": null,\n              \"links\": null,\n              \"price\": null,\n              \"rectangle\": null\n            },\n            {\n              \"type\": \"paid\",\n              \"rank_group\": 2,\n              \"rank_absolute\": 2,\n              \"position\": \"left\",\n              \"xpath\": \"/html[1]/body[1]/div[3]/div[1]/div[12]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]\",\n              \"title\": \"AI Chatbot Tool for Businesses - AI Chat for Customer Service\",\n              \"domain\": \"sendbird.com\",\n              \"breadcrumb\": \"https://www.sendbird.com\",\n              \"is_image\": false,\n              \"is_video\": false,\n              \"images\": null,\n              \"url\": \"https://sendbird.com/form/ai-chatbot-customer-service\",\n              \"highlighted\": null,\n              \"extra\": {\n                \"ad_aclk\": \"DChcSEwji66-z6bGKAxUUN0QIHXjMFBQYABADGgJkeg\"\n              },\n              \"description\": \"Reduce costs & elevate customer satisfaction by transforming your customer service w/ AI. Create an AI chatbot for your website, free. Follow 5 simple steps and launch in minutes. Create Chat in 15 Minutes. Chat Moderation.\",\n              \"description_rows\": null,\n              \"links\": null,\n              \"price\": null,\n              \"rectangle\": null\n            },\n            {\n              \"type\": \"paid\",\n              \"rank_group\": 3,\n              \"rank_absolute\": 3,\n              \"position\": \"left\",\n              \"xpath\": \"/html[1]/body[1]/div[3]/div[1]/div[12]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]\",\n              \"title\": \"Free Cloud-Based Chat Centers\",\n              \"domain\": \"aws.amazon.com\",\n              \"breadcrumb\": \"https://aws.amazon.com › aws › contact-center\",\n              \"is_image\": false,\n              \"is_video\": false,\n              \"images\": null,\n              \"url\": \"https://aws.amazon.com/pm/contact-center/\",\n              \"highlighted\": null,\n              \"extra\": {\n                \"ad_aclk\": \"DChcSEwji66-z6bGKAxUUN0QIHXjMFBQYABAAGgJkeg\"\n              },\n              \"description\": \"Build a Free Chat Call Center — Unlock Omnichannel Customer Service Benefits by Building a Contact Center with AWS Today.\",\n              \"description_rows\": null,\n              \"links\": null,\n              \"price\": null,\n              \"rectangle\": null\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"In the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          items
        </code>
        {" array of the response, find the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          paid
        </code>
        {" elements. They contain the information about ads currently displayed in the SERP, including ad title, description, name and domain of the competitor. Additionally, you can use the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/screenshot/?bash" target="_blank">
            Screenshot
          </a>
        </strong>
        {" endpoint to get the screenshot of this SERP and see how ads are displayed to a Google user."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Example of a SERP screenshot:
          </em>
        </strong>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <img className="w-[56.8125rem] h-115.5 block max-w-full my-8 rounded-sm overflow-clip aspect-[auto_1100/559] align-middle [cursor:zoom-in] max-md:w-[21.4375rem] max-md:h-43.5 md:max-lg:w-180.5 md:max-lg:h-[22.9375rem] 2xl:w-220 2xl:h-[27.9375rem]" data-component="image" alt="Ads Transparency 4" height="559" sizes="auto, (max-width: 1100px) 100vw, 1100px" src="/assets/cloned/images/db4628011861.webp" srcSet="/assets/cloned/images/db4628011861.webp 1500w, /assets/cloned/images/4dba45bbebc1.webp 300w, /assets/cloned/images/e3f4a0a3229a.webp 768w, /assets/cloned/images/cf7f6e2f6f8d.webp 1536w, /assets/cloned/images/b8190ba7cc4f.webp 1920w" title="Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs 5" width="1100" />
        {" "}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Now, you have found possible competitors and a few examples of ads they display in London for the specified query. Similarly, you can try to search for competitors in other locations or for different queries by changing the location and keyword in the API request.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Once we’ve identified competitors using the Google Organic endpoint, we can gather more detailed information about them and their ads by leveraging the Ads Advertisers and Ads Search endpoints.
      </p>
      {" "}
      <h4 className="block mt-7.5 mb-2.5 text-color-001 text-[1.25rem] font-bold [overflow-wrap:break-word]" data-component="heading">
        <a className="inline text-accent font-semibold" name="title2" />
        <span className="border-[3px] border-solid border-border inline-block -mt-1 mr-2 ml-1 rounded-[50%] align-middle text-color-003 leading-[1.4375rem] text-center">
          2
        </span>
        {" Getting data on competitors with Ads Advertisers"}
      </h4>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        {"First, we’ll use the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-advertisers" target="_blank">
            Ads Advertisers
          </a>
        </strong>
        {" endpoint to retrieve advertiser details, including their unique advertiser IDs. These advertiser IDs can then be used in the Ads Search endpoint to obtain a comprehensive overview of all ads they’ve published."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          1.
        </strong>
        {" Call the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/live/advanced/?bash" target="_blank">
            Ads Advertisers
          </a>
        </strong>
        {" endpoint:"}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST: https://api.dataforseo.com/v3/serp/google/ads_advertisers/live/advanced
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          2.
        </strong>
        {" Specify the advertiser’s name in the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          keyword
        </code>
        {" field and location using the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          location_name
        </code>
        {", "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          location_code
        </code>
        {", or "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          location_coordinate
        </code>
        {" field."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"location_name\": \"United Kingdom\",\n    \"keyword\": \"Sendbird\"\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Response example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n  \"version\": \"0.1.20241217\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"4.1010 sec.\",\n  \"cost\": 0.002,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"12231915-1535-0139-0000-0f373a940914\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"4.0248 sec.\",\n      \"cost\": 0.002,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"ads_advertisers\",\n        \"live\",\n        \"advanced\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"live\",\n        \"se\": \"google\",\n        \"se_type\": \"ads_advertisers\",\n        \"location_name\": \"United Kingdom\",\n        \"keyword\": \"Sendbird\",\n        \"device\": \"desktop\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"Sendbird\",\n          \"type\": \"ads_advertisers\",\n          \"se_domain\": \"adstransparency.google.com\",\n          \"location_code\": 2826,\n          \"language_code\": \"en\",\n          \"check_url\": null,\n          \"datetime\": \"2024-12-23 17:15:23 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"ads_advertiser\",\n            \"ads_domain\"\n          ],\n          \"se_results_count\": 0,\n          \"items_count\": 2,\n          \"items\": [\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"title\": \"SendBird, Inc\",\n              \"advertiser_id\": \"AR01148309259486756865\",\n              \"location\": \"US\",\n              \"verified\": true,\n              \"approx_ads_count\": 200\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 2,\n              \"domain\": \"sendbird.com\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"In the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          items
        </code>
        {" array, navigate to the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          ads_advertiser
        </code>
        {" element. Here, you can see that the advertiser is verified, registered in the United States, has approximately 200 ads published, and is identified by the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          advertiser_id AR01148309259486756865
        </code>
        . This way, you can quickly retrieve such details for any Google Ads advertiser. For example, you can call the endpoint again, specify another advertiser name, such as Freshworks, and obtain similar information in the same manner.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Now that we have our competitors’ advertiser IDs, let’s use the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-search" target="_blank">
            Ads Search
          </a>
        </strong>
        {" endpoint to get a complete overview of their ads in Google Search."}
      </p>
      {" "}
      <h4 className="block mt-7.5 mb-2.5 text-color-001 text-[1.25rem] font-bold [overflow-wrap:break-word]" data-component="heading">
        <a className="inline text-accent font-semibold" name="title3" />
        <span className="border-[3px] border-solid border-border inline-block -mt-1 mr-2 ml-1 rounded-[50%] align-middle text-color-003 leading-[1.4375rem] text-center">
          3
        </span>
        {" Exploring all competitors’ ads with Ads Search"}
      </h4>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          1.
        </strong>
        {" First, make and API call to the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/live/advanced/?bash" target="_blank">
            Ads Search
          </a>
        </strong>
        {" endpoint:"}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST: https://api.dataforseo.com/v3/serp/google/ads_search/live/advanced
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          2.
        </strong>
        {" Specify the location and write the advertiser IDs of Sendbird ("}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          AR01148309259486756865
        </code>
        ) and Freshworks (
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          AR03035893441289519105
        </code>
        {") in the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          advertiser_ids
        </code>
        {" array."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          3.
        </strong>
        {" Then, use the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          “platform”: “google_search”
        </code>
        {" parameter to retrieve the ads displayed in Google Search. Additionally, you can specify "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          date_from
        </code>
        {" and "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          date_to
        </code>
        {" parameters to get ads that were displayed within the particular timeframe. In our case, let’s use "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          "date_from": "2024-10-01", "date_to": "2024-12-19"
        </code>
        , to see ads shown from October to December.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"location_name\": \"United Kingdom\",\n    \"advertiser_ids\": [\n      \"AR01148309259486756865\",\n      \"AR03035893441289519105\"\n    ],\n    \"platform\": \"google_search\",\n    \"date_from\": \"2024-10-01\",\n    \"date_to\": \"2024-12-19\"\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Response example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n  \"version\": \"0.1.20241217\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"1.0978 sec.\",\n  \"cost\": 0.002,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"12231917-1535-0139-0000-118d35cbbd12\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"1.0245 sec.\",\n      \"cost\": 0.002,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"ads_search\",\n        \"live\",\n        \"advanced\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"live\",\n        \"se\": \"google\",\n        \"se_type\": \"ads_search\",\n        \"location_name\": \"United Kingdom\",\n        \"advertiser_ids\": [\n          \"AR01148309259486756865\",\n          \"AR03035893441289519105\"\n        ],\n        \"platform\": \"google_search\",\n        \"date_from\": \"2024-10-01\",\n        \"date_to\": \"2024-12-19\",\n        \"device\": \"desktop\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"ids:AR01148309259486756865,AR03035893441289519105\",\n          \"type\": \"ads_search\",\n          \"se_domain\": \"adstransparency.google.com\",\n          \"location_code\": 2826,\n          \"language_code\": \"en\",\n          \"check_url\": null,\n          \"datetime\": \"2024-12-23 17:17:35 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"ads_search\"\n          ],\n          \"se_results_count\": 0,\n          \"items_count\": 40,\n          \"items\": [\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR16292191957512355841\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR16292191957512355841?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/18261906701303679707\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-10-10 11:20:53 +00:00\",\n              \"last_shown\": \"2024-12-23 16:31:42 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 2,\n              \"rank_absolute\": 2,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR00994751276572999681\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR00994751276572999681?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9413604450039407616\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2022-09-16 09:54:19 +00:00\",\n              \"last_shown\": \"2024-12-23 16:14:39 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 3,\n              \"rank_absolute\": 3,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR08046858878186422273\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR08046858878186422273?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/12446777725859745130\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-04-02 07:00:00 +00:00\",\n              \"last_shown\": \"2024-12-23 15:46:22 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 4,\n              \"rank_absolute\": 4,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR14604460214674522113\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR14604460214674522113?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/907424826636235581\",\n                \"height\": 239,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-02-05 08:00:00 +00:00\",\n              \"last_shown\": \"2024-12-23 15:36:09 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 5,\n              \"rank_absolute\": 5,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR14131888605227909121\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR14131888605227909121?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/1155810045844261019\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2022-12-23 09:20:04 +00:00\",\n              \"last_shown\": \"2024-12-23 15:18:42 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 6,\n              \"rank_absolute\": 6,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR09945277046273867777\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR09945277046273867777?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/16541795927482192944\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-08-11 19:10:12 +00:00\",\n              \"last_shown\": \"2024-12-23 15:16:35 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 7,\n              \"rank_absolute\": 7,\n              \"advertiser_id\": \"AR01148309259486756865\",\n              \"creative_id\": \"CR01557515412529217537\",\n              \"title\": \"SendBird, Inc\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR01148309259486756865/creative/CR01557515412529217537?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/14321987621100899307\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-07-26 20:16:55 +00:00\",\n              \"last_shown\": \"2024-12-23 15:04:08 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 8,\n              \"rank_absolute\": 8,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR09160767786094428161\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR09160767786094428161?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/16634468904490251688\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-09-05 08:51:14 +00:00\",\n              \"last_shown\": \"2024-12-23 14:39:54 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 9,\n              \"rank_absolute\": 9,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR11890831432462893057\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR11890831432462893057?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/7838955001328869183\",\n                \"height\": 239,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2022-12-28 06:41:39 +00:00\",\n              \"last_shown\": \"2024-12-23 14:37:34 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 10,\n              \"rank_absolute\": 10,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR12380907541901606913\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR12380907541901606913?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/2124420511141541854\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2022-12-23 09:08:09 +00:00\",\n              \"last_shown\": \"2024-12-23 14:35:18 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 11,\n              \"rank_absolute\": 11,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR13174115794482626561\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR13174115794482626561?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/7144915077818820263\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-08-08 07:00:00 +00:00\",\n              \"last_shown\": \"2024-12-23 14:30:21 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 12,\n              \"rank_absolute\": 12,\n              \"advertiser_id\": \"AR01148309259486756865\",\n              \"creative_id\": \"CR13467917344512671745\",\n              \"title\": \"SendBird, Inc\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR01148309259486756865/creative/CR13467917344512671745?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/6328702749039821285\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-07-26 18:19:53 +00:00\",\n              \"last_shown\": \"2024-12-23 14:23:03 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 13,\n              \"rank_absolute\": 13,\n              \"advertiser_id\": \"AR03035893441289519105\",\n              \"creative_id\": \"CR09170255970146713601\",\n              \"title\": \"Freshworks Inc.\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR03035893441289519105/creative/CR09170255970146713601?region=GB\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/6960499395088559673\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2022-12-25 16:59:11 +00:00\",\n              \"last_shown\": \"2024-12-23 14:22:13 +00:00\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        As a result, you will receive a list of objects containing detailed information about each ad displayed by Sendbird and Freshworks in UK Google Search. These objects include details such as the ad format, its URL in Google Ads Transparency, preview image information, and the timestamps for when the ad was first and last displayed.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        In this way you can quickly analyze the content of all competitors’ ads, including the keywords and triggers they use. You can then leverage these insights to enhance your own ads and uncover the strengths and weaknesses of competitors’ advertising campaigns.
      </p>
      {" "}
      <h4 className="block mt-7.5 mb-2.5 text-color-001 text-[1.25rem] font-bold [overflow-wrap:break-word]" data-component="heading">
        <a className="inline text-accent font-semibold" name="title4" />
        <span className="border-[3px] border-solid border-border inline-block -mt-1 mr-2 ml-1 rounded-[50%] align-middle text-color-003 leading-[1.4375rem] text-center">
          4
        </span>
        {" Getting new ad keyword ideas with Keywords for Keywords"}
      </h4>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        {"For example, let’s examine one of Sendbird’s latest ads, identify the keywords used in the ad, and generate additional keyword ideas using the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live/?bash" target="_blank">
            Keywords for Keywords
          </a>
        </strong>
        {" endpoint."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <img className="w-[56.8125rem] h-191 block max-w-full my-8 rounded-sm overflow-clip aspect-[auto_1486/1250] align-middle [cursor:zoom-in] max-md:w-[21.4375rem] max-md:h-[18.0625rem] md:max-lg:w-180.5 md:max-lg:h-[37.9375rem] 2xl:w-220 2xl:h-185" data-component="image" alt="Ads Transparency 5" height="1250" sizes="auto, (max-width: 1486px) 100vw, 1486px" src="/assets/cloned/images/b3172b74cb60.webp" srcSet="/assets/cloned/images/b3172b74cb60.webp 1486w, /assets/cloned/images/a7c84ebdf424.webp 300w, /assets/cloned/images/8ff026ba4a21.webp 768w" title="Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs 6" width="1486" />
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Here we can see that advertisers use keyphrases, such as “
        <strong className="inline text-color-001 font-semibold">
          ai chatbot tool
        </strong>
        ”, “
        <strong className="inline text-color-001 font-semibold">
          create an ai chatbot
        </strong>
        ” and “
        <strong className="inline text-color-001 font-semibold">
          automate business operations
        </strong>
        {"”. You can use them as seed keywords for the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live/?bash" target="_blank">
            Google Keywords for Keywords
          </a>
        </strong>
        {" endpoint of "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/keyword-data-api" target="_blank">
            Keyword Data API
          </a>
        </strong>
        . This endpoint will retrieve relevant keyword suggestions from the Google Ads API based on the seed keywords you specify.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          1.
        </strong>
        {" Call the "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live/?bash" target="_blank">
            Keywords for Keywords
          </a>
        </strong>
        {" endpoint:"}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          POST: https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live
        </code>
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          2.
        </strong>
        {" Specify the location and language and write seed keywords in the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          keywords
        </code>
        {" array. Use the "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          date_from
        </code>
        {" parameter if you want to get information on keywords from a specific date. Finally, use "}
        <code className="inline py-0.5 px-1.5 rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm font-medium leading-[1.375rem] [overflow-wrap:anywhere] bg-surface before:content-['`'] before:hidden before:text-color-001 before:text-sm before:font-medium before:leading-[1.375rem] after:content-['`'] after:hidden after:text-color-001 after:text-sm after:font-medium after:leading-[1.375rem]">
          "sort_by": "search_volume"
        </code>
        {" parameter to sort keyword suggestions by search volume in descending order."}
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Request example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"[\n  {\n    \"location_name\": \"London,England,United Kingdom\",\n    \"language_code\": \"en\",\n    \"keywords\": [\n      \"ai chatbot tool\",\n      \"create ai chatbot\",\n      \"automate business operations\"\n    ],\n    \"date_from\": \"2024-10-01\",\n    \"sort_by\": \"search_volume\"\n  }\n]\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        <strong className="inline text-color-001 font-semibold">
          <em className="inline italic">
            Response example:
          </em>
        </strong>
      </p>
      {" "}
      <div className="block">
        <code className="block rounded-sm text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] font-medium">
          {" "}
          <div className="block relative my-[1.7125rem]">
            <pre className="block max-h-50 pt-11 pb-4 px-5 rounded-md overflow-auto text-color-002 text-sm font-normal leading-6 whitespace-pre text-nowrap bg-color-001">
              {"{\n  \"version\": \"0.1.20241217\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"2.4423 sec.\",\n  \"cost\": 0.075,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"12231922-1535-0368-0000-338c2275516e\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"2.3768 sec.\",\n      \"cost\": 0.075,\n      \"result_count\": 157,\n      \"path\": [\n        \"v3\",\n        \"keywords_data\",\n        \"google_ads\",\n        \"keywords_for_keywords\",\n        \"live\"\n      ],\n      \"data\": {\n        \"api\": \"keywords_data\",\n        \"function\": \"keywords_for_keywords\",\n        \"se\": \"google_ads\",\n        \"location_name\": \"London,England,United Kingdom\",\n        \"language_code\": \"en\",\n        \"keywords\": [\n          \"ai chatbot tool\",\n          \"create ai chatbot\",\n          \"automate business operations\"\n        ],\n        \"date_from\": \"2024-10-01\",\n        \"sort_by\": \"search_volume\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"best ai chat\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 50,\n          \"search_volume\": 260,\n          \"low_top_of_page_bid\": 0.87,\n          \"high_top_of_page_bid\": 5.13,\n          \"cpc\": 3.33,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 260\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 320\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"best ia chat\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 50,\n          \"search_volume\": 260,\n          \"low_top_of_page_bid\": 0.87,\n          \"high_top_of_page_bid\": 5.13,\n          \"cpc\": 3.33,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 260\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 320\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"best ai chat bot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 42,\n          \"search_volume\": 50,\n          \"low_top_of_page_bid\": 1.16,\n          \"high_top_of_page_bid\": 10,\n          \"cpc\": 5.91,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 70\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 50\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"best free ai chat\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 49,\n          \"search_volume\": 50,\n          \"low_top_of_page_bid\": 0.46,\n          \"high_top_of_page_bid\": 2.16,\n          \"cpc\": 1.46,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 50\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 50\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"drift chat bot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 45,\n          \"search_volume\": 40,\n          \"low_top_of_page_bid\": 4.81,\n          \"high_top_of_page_bid\": 10.33,\n          \"cpc\": 11.41,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 40\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 50\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"drift\",\n                \"concept_group\": {\n                  \"name\": \"Other Brands\",\n                  \"type\": \"OTHER_BRANDS\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"best ai chat free\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 56,\n          \"search_volume\": 40,\n          \"low_top_of_page_bid\": 0.65,\n          \"high_top_of_page_bid\": 2.77,\n          \"cpc\": 5.68,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 30\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 50\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"best ai chatbot app\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 47,\n          \"search_volume\": 30,\n          \"low_top_of_page_bid\": 0.81,\n          \"high_top_of_page_bid\": 2.77,\n          \"cpc\": 2.19,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 50\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 50\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"apps\",\n                \"concept_group\": {\n                  \"name\": \"Others\",\n                  \"type\": null\n                }\n              },\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"intercom chat bot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 54,\n          \"search_volume\": 30,\n          \"low_top_of_page_bid\": 5.5,\n          \"high_top_of_page_bid\": 20,\n          \"cpc\": 18.75,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 30\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 50\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"intercom\",\n                \"concept_group\": {\n                  \"name\": \"Other Brands\",\n                  \"type\": \"OTHER_BRANDS\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"ai chatbot tool\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"HIGH\",\n          \"competition_index\": 86,\n          \"search_volume\": 20,\n          \"low_top_of_page_bid\": 3.62,\n          \"high_top_of_page_bid\": 13.43,\n          \"cpc\": 16.74,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 10\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 10\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": null\n          }\n        },\n        {\n          \"keyword\": \"create a chat bot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"HIGH\",\n          \"competition_index\": 72,\n          \"search_volume\": 20,\n          \"low_top_of_page_bid\": 2.41,\n          \"high_top_of_page_bid\": 12.23,\n          \"cpc\": 11.44,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 20\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 20\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"build a chat bot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"MEDIUM\",\n          \"competition_index\": 62,\n          \"search_volume\": 20,\n          \"low_top_of_page_bid\": 2.89,\n          \"high_top_of_page_bid\": 9.43,\n          \"cpc\": 7.13,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 20\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 30\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"create an ai chatbot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"HIGH\",\n          \"competition_index\": 92,\n          \"search_volume\": 20,\n          \"low_top_of_page_bid\": 2.89,\n          \"high_top_of_page_bid\": 10.88,\n          \"cpc\": 9.62,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 10\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 20\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        },\n        {\n          \"keyword\": \"make a chat bot\",\n          \"location_code\": 1006886,\n          \"language_code\": \"en\",\n          \"search_partners\": false,\n          \"competition\": \"HIGH\",\n          \"competition_index\": 72,\n          \"search_volume\": 20,\n          \"low_top_of_page_bid\": 2.41,\n          \"high_top_of_page_bid\": 12.23,\n          \"cpc\": 11.44,\n          \"monthly_searches\": [\n            {\n              \"year\": 2024,\n              \"month\": 11,\n              \"search_volume\": 20\n            },\n            {\n              \"year\": 2024,\n              \"month\": 10,\n              \"search_volume\": 20\n            }\n          ],\n          \"keyword_annotations\": {\n            \"concepts\": [\n              {\n                \"name\": \"Non-Brands\",\n                \"concept_group\": {\n                  \"name\": \"Non-Brands\",\n                  \"type\": \"NON_BRAND\"\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n"}
            </pre>
            <button className="w-8 h-8 border border-solid border-primary flex absolute top-2 right-3 rounded-sm justify-center items-center gap-[0.4375rem] text-color-002 text-sm leading-[1.5625rem] text-center bg-color-006 cursor-pointer hover:bg-primary hover:shadow-[var(--clr-15)_0px_2px_8px_0px] hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" data-component="button" aria-label="Copy code to clipboard" title="Copy" type="button">
              <Icon5 />
            </button>
          </div>
          {" "}
          <p className="block my-5 leading-[1.625rem]" />
        </code>
      </div>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        The response contains a list of keywords relevant to the seed keywords you specified. Each keyword comes with key metrics such as CPC, search volume, competition index, and monthly search data. You can analyze these keywords to identify those that align with your campaign goals and fit within your advertising budget. For instance, queries like “
        <strong className="inline text-color-001 font-semibold">
          build ai chatbot
        </strong>
        ,” “
        <strong className="inline text-color-001 font-semibold">
          make chatbot
        </strong>
        ,” “
        <strong className="inline text-color-001 font-semibold">
          create an ai chatbot
        </strong>
        ,” and “
        <strong className="inline text-color-001 font-semibold">
          best ai chatbot
        </strong>
        ” from the results can be considered and used to tailor your ad triggers accordingly.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        Overall, with the help of DataForSEO APIs, you successfully identified your advertising competitors, uncovered their strategies using Google Ads Transparency data, and generated keyword ideas for your ad campaign. Additionally, you obtained detailed data on all competitors’ ads from Google Search. Now, you’re fully equipped to fine-tune your ads for optimal performance.
        <br className="inline" />
        {" "}
      </p>
      {" "}
      <h3 className="block mt-[2.4rem] mb-[0.9rem] text-color-001 text-2xl font-bold leading-[1.8125rem] [overflow-wrap:break-word]" data-component="heading" id="conclusion">
        <a className="inline text-accent font-semibold" name="conclusion" />
        Conclusion
      </h3>
      {" "}
      <p className="block mb-5 leading-[1.625rem]">
        For marketers and advertisers aiming to outperform competitors in online advertising, DataForSEO offers powerful and cost-effective API solutions. With our APIs, you can easily uncover competitors’ advertising strategies and get real-time access to detailed ad and advertiser data from both Google SERPs and the Google Ads Transparency Center.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Using DataForSEO endpoints, such as "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?bash" target="_blank">
            Google SERP Organic
          </a>
        </strong>
        {", "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-advertisers" target="_blank">
            Google Ads Advertisers
          </a>
        </strong>
        {", and "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="/apis/serp-api/ads-transparency-api#ads-search" target="_blank">
            Google Ads Search
          </a>
        </strong>
        , you can effortlessly identify ad competitors and analyze their advertising content to optimize your campaigns. Furthermore, you can gather comprehensive data at scale, saving time and effort compared to manual research.
      </p>
      {" "}
      <p className="block my-5 leading-[1.625rem]">
        {"Take your competitor analysis to the next level with DataForSEO APIs, and "}
        <strong className="inline text-color-001 font-semibold">
          <a className="inline text-accent cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] hover:underline" data-component="link" href="http://app.dataforseo.com/register" target="_blank">
            reimagine your advertising strategies today!
          </a>
        </strong>
      </p>
      {" "}
    </div>
  );
}
