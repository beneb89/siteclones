/** Previous Arrow Back section. */
export default function PreviousArrowBackSection() {
  return (
    <div className="flex pt-6 pb-10 flex-wrap max-md:pt-2 max-md:pb-4">
      <div className="flex relative ml-10 flex-col justify-center grow font-medium max-md:ml-0 md:max-lg:ml-6">
        <a className="h-[3.0625rem] block text-primary [word-break:break-word] cursor-pointer max-lg:h-12" data-component="link" href="/google-ads/api/docs/api-policy/developer-token">
          {" "}
          <div className="block text-[0.875rem]">
            Previous
          </div>
          {" "}
          <span className="w-6 h-6 block absolute bottom-px -left-10 align-bottom [font-family:'Material_Icons'] text-[1.5rem] font-normal whitespace-nowrap text-nowrap [font-feature-settings:'liga'] max-md:hidden md:max-lg:w-4 md:max-lg:h-4 md:max-lg:bottom-1 md:max-lg:-left-6 md:max-lg:leading-4 md:max-lg:[font-size:inherit]" aria-hidden="true">
            {" arrow_back "}
          </span>
          {" "}
          <span className="inline text-clr-4 text-[1.125rem] max-lg:text-[0.875rem]">
            {" Developer Token "}
          </span>
          {" "}
        </a>
        {" "}
      </div>
      {" "}
      <div className="flex relative mr-10 flex-col justify-center grow font-medium text-right max-md:mr-0 md:max-lg:mr-6">
        <a className="h-[3.0625rem] block text-primary [word-break:break-word] cursor-pointer max-lg:h-12" data-component="link" href="/google-ads/api/docs/api-policy/brand-verification">
          {" "}
          <div className="block text-[0.875rem]">
            Next
          </div>
          {" "}
          <span className="inline text-clr-4 text-[1.125rem] max-lg:text-[0.875rem]">
            {" Brand verification "}
          </span>
          {" "}
          <span className="w-6 h-6 block absolute -right-10 bottom-px align-bottom [font-family:'Material_Icons'] text-[1.5rem] font-normal whitespace-nowrap text-nowrap [font-feature-settings:'liga'] max-md:hidden md:max-lg:w-4 md:max-lg:h-4 md:max-lg:-right-6 md:max-lg:bottom-1 md:max-lg:leading-4 md:max-lg:[font-size:inherit]" aria-hidden="true">
            {" arrow_forward "}
          </span>
          {" "}
        </a>
        {" "}
      </div>
      {" "}
    </div>
  );
}
