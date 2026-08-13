import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
const ListRow3_data: ListRow3Data[] = [
    { text: "Date Range: ", text2: "Filter ads by Anytime, Today, Yesterday, Last 7 Days, Last 30 Days, or a custom date picker." },
    { text: "Country:", text2: " Filter ads by the country or region they were displayed in. " },
    { text: "Formate:", text2: " Filter your search by; All formats, Image, Text, or Video. " },
    { text: "Topics: ", text2: "You can segment your results by; All Topics or Political Ads only. " }
];
const ListRow2_data2: ListRow2Data[] = [
    { text: "Google Search Ads" },
    { text: "Google Display Ads" },
    { text: "Google Banner Ads" },
    { text: "YouTube Ads" }
];
/** What Is The section. */
export default function WhatIsTheSection({ listRow3Data = ListRow3_data, listRow2Data2 = ListRow2_data2 } = {}) {
  return (
    <div className="block pb-10 max-md:pb-6">
      <div className="block text-color-003" id="blog-rtb">
        <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-color-003 before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-003 after:text-base after:leading-6 after:tracking-[-0.18px]">
          <h2 className="block mt-6 mb-4 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-[1.75rem] font-bold leading-9" data-component="heading">
            What is the Google Ads Transparency Center?
          </h2>
          <p className="block">
            {"In the simplest form, it is a searchable database that provides users easy access to view all ads a brand runs across Search, Display, and YouTube ads. It is a one stop shop for Google ad inspiration. "}
          </p>
          <figure className="block relative clear-both max-w-688.5 text-center">
            <div className="inline-block text-clr-3 text-[0rem]">
              <img className="w-180 h-118 block relative max-w-full my-8 rounded-[20px] overflow-clip align-middle max-md:w-[20.4375rem] max-md:h-53.5 md:max-lg:w-176 md:max-lg:h-115.5 2xl:w-188 2xl:h-[30.8125rem]" data-component="image" alt="google ads transparency homepage" src="/assets/cloned/images/90c95878fc50.png" />
            </div>
            <figcaption className="block mt-[0.3125rem]">
              Google Transparency Center Home Page
            </figcaption>
          </figure>
          <p className="block">
            {"Ad transparency has been a hot topic, most likely pressured by the increasing attention to user privacy & safety; Google says, "}
            <strong className="inline font-bold">
              "The transparency center is a step forward to a safer and more transparent internet."
            </strong>
            {" The primary use case for the public is to provide users an open and transparent repository for political ads; however, for marketers, "}
            <strong className="inline font-bold">
              it acts as a gold mine to gain insights into what other brands and advertisers are running (even outside of political advertising).
            </strong>
          </p>
          <p className="block">
            {"To access the Transparency Center, visit: "}
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="https://adstransparency.google.com/" target="_blank">
              adstransparency.google.com
            </a>
          </p>
          <h2 className="block mt-6 mb-4 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-[1.75rem] font-bold leading-9" data-component="heading">
            How Marketers Leverage Google Ads Transparency Center
          </h2>
          <p className="block">
            {"Like any marketing tool, getting value for your campaigns depends on how you use it. As marketers, there are 4 core ways to use the new Transparency Center to level up your Google ads workflow outside of just providing more transparency to the public. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            1. Spark Ad Creative Inspiration
          </h3>
          <p className="block">
            {"We have all been there, sitting in front of our laptops, needing to launch a new Google Display or Youtube ad that stops a user's scroll and gets them to click on your offer. Before the transparency center, seeing what image or video ads people were running was incredibly hard. "}
            <strong className="inline font-bold">
              {"Now with a simple search, you can see Google ads inspiration by top brands to spark ideas for your next campaign. "}
            </strong>
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            2. Spy on your competitor's Google Ads
          </h3>
          <p className="block">
            {"Two brains is always better than one - since your competitors are consistently trying to win, just like you spying on their ad strategies can be a shortcut to gain more insights into what you should be testing in your upcoming campaigns. It is important to note that competitor research can play a primary role in informing your ad strategy, but you should always avoid copying your competitors directly. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            3. Building a Google Ad Swipe File
          </h3>
          <p className="block">
            {"Every marketer's secret weapon is their "}
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="/post/swipe-file" target="_blank">
              Swipe File
            </a>
            {". Before the transparency center, creating a Swipe File of Google ads was limited to seeing them out in the wild, screenshotting them, and adding saving them to a folder (not the most ideal process). "}
            <strong className="inline font-bold">
              {"With the Google Ad Library, you have a central source to search and save ads. "}
            </strong>
            {"In the coming weeks, Foreplay will also be adding support to their "}
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="/swipe-file" target="_blank">
              Swipe File Chrome Extension
            </a>
            {", allowing you to keep ads from Google Transparency Center with a single click. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            {"4. Stay Ahead of Trends "}
          </h3>
          <p className="block">
            {"Just like fashion marketing is constantly evolving, specifically for B2C companies leveraging advertising trends can be a fantastic way to ride a wave of out-performing your baseline. By consistently checking in on adjacent or competing brands, you may stumble upon a creative style or copywriting hook that can take your brand to the next level. Being able to identify new trends and take timely action is key to making informed decisions when building your next campaign. "}
          </p>
          <h2 className="block mt-6 mb-4 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-[1.75rem] font-bold leading-9" data-component="heading">
            Step-by-Step Guide to Using Google Ads Library
          </h2>
          <p className="block">
            {"If you are familiar with the Meta Ads Library, you should have no problem with the Google counterpart; however, all platforms have nuances and secret features. Let's get into a tactical guide on how you can get the most out of this searchable hub known ads Google ads library. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            Accessing the Transparency Center
          </h3>
          <p className="block">
            <strong className="inline font-bold">
              {"Option 1 - Direct Access: "}
            </strong>
            {"You can now access the Transparency Center directly by visiting "}
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="https://adstransparency.google.com/" target="_blank">
              adstransparency.google.com
            </a>
            {". This is the best option when you are just trying to search for brands or keywords. "}
          </p>
          <p className="block">
            <strong className="inline font-bold">
              {"Option 2 - Shortcut from Active Ad: "}
            </strong>
            {"This is best when you see a Google ad out in the wild. For example, if I do a Google search for \"Dropshipping,\" I can see that Shopify is running search ads. By clicking the three dot menu, I can then click \"See more ads\" in the modal to be directed to their transparency center page. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            {"Using the Search & Filters"}
          </h3>
          <figure className="block relative clear-both max-w-569.5 text-center">
            <div className="inline-block text-clr-3 text-[0rem]">
              <img className="w-180 h-88 block relative max-w-full my-8 rounded-[20px] overflow-clip align-middle max-md:w-[20.4375rem] max-md:h-40 md:max-lg:w-176 md:max-lg:h-86 2xl:w-188 2xl:h-92" data-component="image" alt="searching google ad library" src="/assets/cloned/images/2bf1872c3b92.png" />
            </div>
            <figcaption className="block mt-[0.3125rem]">
              Search Google Ad Library
            </figcaption>
          </figure>
          <p className="block">
            {"You will notice a few different types of results when using the search bar. In this example, we searched for the martech tool Hyros and were granted 2 results. One is the advertiser's profile, and the second is their primary domain name. Usually, for the best result, we recommend selecting the domain name. "}
          </p>
          <h4 className="block mt-3 mb-2 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-xl leading-8" data-component="heading">
            Available Filters
          </h4>
          <ul className="flex my-4 pl-6 flex-col gap-3 overflow-hidden [list-style-type:disc] list-outside" role="list">
            {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
          </ul>
          <p className="block">
            {"To continue our ad research process on Hyros, I clicked on the 2nd result in the prefilled search and are redirected to this page. By default, the ads are sorted by the most recent ads served. "}
          </p>
          <figure className="block relative clear-both max-w-566.5 text-center">
            <div className="inline-block text-clr-3 text-[0rem]">
              <img className="w-180 h-103.5 block relative max-w-full my-8 rounded-[20px] overflow-clip align-middle max-md:w-[20.4375rem] max-md:h-47 md:max-lg:w-176 md:max-lg:h-[25.3125rem] 2xl:w-188 2xl:h-[27.0625rem]" data-component="image" alt="google transparency center search results" src="/assets/cloned/images/e715233cc8f5.png" />
            </div>
            <figcaption className="block mt-[0.3125rem]">
              Transparency Center Search Results
            </figcaption>
          </figure>
          <p className="block">
            <strong className="inline font-bold">
              Pro tip:
            </strong>
            {" Be sure to click the \"See All Ads\" button at the bottom of the grid after the initial load. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            Understanding the Ad Formats Displayed
          </h3>
          <figure className="block relative clear-both max-w-517 text-center">
            <div className="inline-block text-clr-3 text-[0rem]">
              <img className="w-180 h-[22.4375rem] block relative max-w-full my-8 rounded-[20px] overflow-clip align-middle max-md:w-[20.4375rem] max-md:h-[10.1875rem] md:max-lg:w-176 md:max-lg:h-[21.9375rem] 2xl:w-188 2xl:h-[23.4375rem]" data-component="image" alt="youtube and search ads results" src="/assets/cloned/images/4c7f18c57a08.png" />
            </div>
            <figcaption className="block mt-[0.3125rem]">
              Transparency Center Supported Formats
            </figcaption>
          </figure>
          <p className="block">
            {"As you will see in this example, there is a mix of video ads (most likely being run on YouTube) and Google text search ads rendered as an image preview. "}
          </p>
          <p className="block">
            {"By clicking on these ads, you can unlock additional information, such as when this ad was last shown, along with the advertiser details, including the Legan name and the country in which the advertiser is verified. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            Finding Winning Ads in Google Ad Library
          </h3>
          <p className="block">
            {"As marketers, we are all constantly testing and iterating our ad campaigns, meaning when doing competitor research, it can be challenging to know what ads are driving growth or if they are failing tests. Luckily we have a strategy to cut through this noise. "}
          </p>
          <p className="block">
            {"In the search bar, you can have the option to only display ads that have been running for a custom date range. "}
            <strong className="inline font-bold">
              {"You can use this filter to narrow down ads running for the longest. "}
            </strong>
          </p>
          <figure className="block relative clear-both max-w-546.5 text-center">
            <div className="inline-block text-clr-3 text-[0rem]">
              <img className="w-180 h-[15.4375rem] block relative max-w-full my-8 rounded-[20px] overflow-clip align-middle max-md:w-[20.4375rem] max-md:h-28 md:max-lg:w-176 md:max-lg:h-60.5 2xl:w-188 2xl:h-64.5" data-component="image" alt="finding longest running ads" src="/assets/cloned/images/af53891fc154.png" />
            </div>
            <figcaption className="block mt-[0.3125rem]">
              {"Find longest running Google Ads. "}
            </figcaption>
          </figure>
          <p className="block">
            {"The thesis with this method is that if an ad is successful, the brand will continue running it; if it fails, they will cut it off. "}
          </p>
          <p className="block">
            <strong className="inline font-bold">
              {"Pro Tip: "}
            </strong>
            {"Finding the longest winning ads in the transparency center is the most accurate way to find winning google ads. "}
          </p>
          <h2 className="block mt-6 mb-4 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-[1.75rem] font-bold leading-9" data-component="heading">
            {"Common Problems & Questions"}
          </h2>
          <p className="block">
            {"Considering that everyone will be adopting the new Google Transparency center, there will surely be hiccups and pitfalls along the way; here are some of the most common roadblocks and questions you may be asking yourself. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            I Can't Find My Competitor's Ads?
          </h3>
          <p className="block">
            {"If you cannot find your competitor's ads when searching the Google ads transparency center, there can be multiple explanations. If you are 100% sure this brand is running Google ads, "}
            <strong className="inline font-bold">
              {"the most likely cause is that they have not completed the Advertiser Verification process. "}
            </strong>
          </p>
          <p className="block">
            {"To ensure the information is accurate and true, Google only shows ads from verified advertisers. You can learn more about this process "}
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="https://support.google.com/adspolicy/answer/9703665" target="_blank">
              here
            </a>
            {". "}
          </p>
          <p className="block">
            {"It is important to note that most advertisers will complete this process because if they do not, they have a higher risk of their account being temporarily or permanently banned, resulting in their inability to advertise on Google. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            Is the Google Ad Library Real-Time?
          </h3>
          <p className="block">
            {"When Google launched this new platform, I hoped this would be a real-time ads feed. Unfortunately, it is not. In their internal press release, Google notes that "}
            <strong className="inline font-bold">
              ads will be available in the Transparency Center 48-72 hours after they are published live
            </strong>
            {" or after an unverified advertiser completes the verification program. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            Does Google Transparency Center include Youtube?
          </h3>
          <p className="block">
            {"Yes! Since YouTube ads are managed within your Google Ads account, they are included in the transparency center. It is similar to how the Meta Ads Library displays ads from their entire network, including Instagram and Audience. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            Is there an ads library for Google Ads?
          </h3>
          <p className="block">
            {"The Google Ad Library is officially known as the Google Transparency Center, where you can view Search, Display, and YouTube advertising from any verified Google Advertiser. "}
          </p>
          <h3 className="block mt-4 mb-3 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-2xl font-bold leading-8" data-component="heading">
            What kind of ads are in Transparency Center?
          </h3>
          <p className="block">
            {"All ad formats and styles offered by google are included in the Transparency Center. This includes: "}
          </p>
          <ul className="flex my-4 pl-6 flex-col gap-3 overflow-hidden [list-style-type:disc] list-outside" role="list">
            {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          <h2 className="block mt-6 mb-4 [font-family:'Inter_Display',_Inter,_'system-ui',_sans-serif] text-[1.75rem] font-bold leading-9" data-component="heading">
            Other Ad Libraries you need to know about
          </h2>
          <p className="block">
            {"Although this announcement is exciting, frankly, Google is a bit late to the game following other leading ad platforms like Meta and TikTok. We have written similar guides on how to use these other platforms in conjunction with Google's new ad library. "}
          </p>
          <p className="block">
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="/post/facebook-ads-library" target="_blank">
              Learn more about Meta Ad Library
            </a>
          </p>
          <p className="block">
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="/post/save-video-ads-from-tiktok" target="_blank">
              Learn more about TikTok Top Ads
            </a>
          </p>
          <p className="block">
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="/post/save-ads-from-linkedin" target="_blank">
              Learn more about LinkedIn Ad Transparency
            </a>
          </p>
          <p className="block">
            {"Click "}
            <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="https://blog.google/technology/ads/announcing-the-launch-of-the-new-ads-transparency-center/" target="_blank">
              here
            </a>
            {" to read the official announcement from the Google Ads Safety Team. "}
          </p>
          <p className="block">
            ‍
          </p>
        </div>
      </div>
    </div>
  );
}
