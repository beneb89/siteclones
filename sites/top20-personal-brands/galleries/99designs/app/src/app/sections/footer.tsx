import Illustration from "../svgs/svg-illustration";
import Illustration2 from "../svgs/svg-illustration2";
import Illustration3 from "../svgs/svg-illustration3";
import Illustration4 from "../svgs/svg-illustration4";
import Illustration5 from "../svgs/svg-illustration5";
/** Site footer. */
export default function Footer() {
  return (
    <section className="block pt-15 bg-surface max-md:pt-7.5">
      <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
        <div className="w-full block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
          <a className="inline text-primary cursor-pointer focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/about/media">
            {" "}
            <div className="block max-w-190 mx-auto text-center">
              <div className="inline-block max-w-[33%] pb-15 px-[0.9375rem] max-md:pb-7.5 max-md:max-w-none max-md:px-0 md:max-lg:max-w-[50%]">
                {" "}
                <span className="h-7.5 inline-block relative max-w-full" title="The Wall Street Journal">
                  {" "}
                  <Illustration />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <div className="inline-block max-w-[33%] pb-15 px-[0.9375rem] max-md:pb-7.5 max-md:max-w-none max-md:px-0 md:max-lg:max-w-[50%]">
                {" "}
                <span className="h-7.5 inline-block relative max-w-full" title="TechCrunch">
                  {" "}
                  <Illustration2 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <div className="inline-block max-w-[33%] pb-15 px-[0.9375rem] max-md:pb-7.5 max-md:max-w-none max-md:px-0 md:max-lg:max-w-[50%]">
                {" "}
                <span className="h-7.5 inline-block relative max-w-full" title="Entrepreneur">
                  {" "}
                  <Illustration3 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <div className="inline-block max-w-[33%] pb-15 px-[0.9375rem] max-md:pb-7.5 max-md:max-w-none max-md:px-0 md:max-lg:max-w-[50%]">
                {" "}
                <span className="h-7.5 inline-block relative max-w-full" title="The New York Times">
                  {" "}
                  <Illustration4 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <div className="inline-block max-w-[33%] pb-15 px-[0.9375rem] max-md:pb-7.5 max-md:max-w-none max-md:px-0 md:max-lg:max-w-[50%]">
                {" "}
                <span className="h-7.5 inline-block relative max-w-full" title="Forbes">
                  {" "}
                  <Illustration5 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
