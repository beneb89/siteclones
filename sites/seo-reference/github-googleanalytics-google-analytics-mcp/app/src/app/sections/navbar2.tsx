import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import Icon13 from "../svgs/svg-icon13";
import Icon14 from "../svgs/svg-icon14";
import Icon15 from "../svgs/svg-icon15";
import Icon16 from "../svgs/svg-icon16";
/** Navbar2 section. */
export default function Navbar2() {
  return (
    <div className="block pt-4 bg-surface" id="repository-container-header">
      <div className="flex mb-4 px-8 justify-end gap-4 max-lg:px-4">
        <div className="block min-w-0 max-w-full grow">
          <div className="h-full flex flex-wrap items-center text-xl leading-7.5 [word-break:break-word] max-md:text-lg max-md:leading-[1.6875rem]">
            <Icon5 />
            {" "}
            <span className="block self-stretch" itemProp="author">
              {" "}
              <a className="inline text-primary cursor-pointer hover:underline" data-component="link" aria-keyshortcuts="Alt+ArrowUp" href="/googleanalytics" rel="author">
                {" googleanalytics "}
              </a>
              {" "}
            </span>
            {" "}
            <span className="block mx-1 self-stretch text-muted-foreground">
              /
            </span>
            {" "}
            <strong className="block mr-2 self-stretch font-semibold" itemProp="name">
              {" "}
              <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/googleanalytics/google-analytics-mcp">
                google-analytics-mcp
              </a>
              {" "}
            </strong>
            {" "}
            <span className="border border-solid border-border block mr-1 px-1.5 rounded-full align-middle text-muted-foreground text-xs font-medium leading-4.5 whitespace-nowrap text-nowrap">
              Public
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-[70%] shrink-0" id="repository-details-container">
          <ul className="inline py-0.5 shrink-0 [list-style-type:disc] list-outside max-md:hidden">
            <li className="list-item float-left mr-2 text-xs leading-4.5 [list-style-type:none]">
              <a className="h-7 border border-solid border-border inline-block relative py-[0.1875rem] px-3 rounded-md align-middle text-color-002 font-medium leading-5 whitespace-nowrap text-nowrap bg-surface cursor-pointer hover:bg-clr-8" data-component="button" aria-describedby="tooltip-b55ff41a-2c35-412f-96f9-014f8abd31c3" aria-label="You must be signed in to change notification settings" href="/login?return_to=%2Fgoogleanalytics%2Fgoogle-analytics-mcp" id="repository-details-watch-button" rel="nofollow">
                {" "}
                <Icon6 />
                {"Notifications "}
              </a>
              {" "}
              <tool-tip class="w-[max-content] h-px hidden absolute top-0 left-0 opacity-0 max-w-80 my-auto py-1 px-2 rounded-md text-background leading-[1.25rem] text-center [overflow-wrap:normal] text-balance bg-color-002 [clip-path:inset(0px_100%_100%_0px)] after:content-[''] after:block after:absolute after:inset-x-0 after:h-1" for="repository-details-watch-button" id="tooltip-b55ff41a-2c35-412f-96f9-014f8abd31c3" role="tooltip">
                You must be signed in to change notification settings
              </tool-tip>
              {" "}
            </li>
            <li className="list-item float-left mr-2 text-xs leading-4.5 [list-style-type:none]">
              <a className="h-7 border border-solid border-border inline-block relative py-[0.1875rem] px-3 rounded-md align-middle text-color-002 font-medium leading-5 whitespace-nowrap text-nowrap bg-surface cursor-pointer hover:bg-clr-8" data-component="button" href="/login?return_to=%2Fgoogleanalytics%2Fgoogle-analytics-mcp" id="fork-button" rel="nofollow">
                {" "}
                <Icon7 />
                {"Fork "}
                <span className="border border-solid border-clr-0 inline-block min-w-5 ml-0.5 px-1.5 rounded-3xl align-top leading-4.5 text-center bg-color-001" data-component="badge" id="repo-network-counter" title="645">
                  645
                </span>
                {" "}
              </a>
              {" "}
            </li>
            <li className="list-item float-left text-xs leading-4.5 [list-style-type:none]">
              <div className="flex align-middle before:content-[''] before:table before:w-0 before:h-7 max-md:before:w-auto max-md:before:h-auto after:content-[''] after:table after:w-0 after:h-7 max-md:after:w-auto max-md:after:h-auto">
                <a className="h-7 border border-solid border-border block relative py-[0.1875rem] px-3 rounded-md align-middle text-color-002 font-medium leading-5 whitespace-nowrap text-nowrap bg-surface cursor-pointer after:content-['You_must_be_signed_in_to_star_a_repository'] after:hidden after:absolute after:top-full after:right-1/2 after:z-1000000 after:mt-1.5 after:-mr-4 after:py-1 after:px-2 after:text-background after:text-xs after:leading-[1.25rem] after:text-center after:bg-color-002 after:opacity-0 after:rounded-tl-md hover:bg-clr-8" data-component="link" aria-label="You must be signed in to star a repository" href="/login?return_to=%2Fgoogleanalytics%2Fgoogle-analytics-mcp" rel="nofollow">
                  {" "}
                  <Icon8 />
                  <span className="inline">
                    {" Star "}
                  </span>
                  {" "}
                  <span className="border border-solid border-clr-0 inline-block min-w-5 ml-0.5 px-1.5 rounded-3xl align-top leading-4.5 text-center bg-color-001" data-component="badge" aria-label="2939 users starred this repository" id="repo-stars-counter-star" title="2,939">
                    2.9k
                  </span>
                  {" "}
                </a>
              </div>
              {" "}
            </li>
          </ul>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block" id="responsive-meta-container" />
      {" "}
      <nav className="min-h-12 flex px-8 justify-between overflow-hidden shadow-[var(--color-006)_0px_-1px_0px_0px_inset] max-md:px-4 md:max-lg:px-6" data-component="nav" aria-label="Repository">
        <ul className="flex items-center gap-2 [list-style-type:none] list-outside">
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center font-semibold leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer after:content-[''] after:block after:absolute after:top-[2.3125rem] after:right-[37.5px] after:-bottom-[0.5625rem] after:left-[-37.5px] after:z-1 after:w-[4.6875rem] after:h-0.5 after:bg-clr-1 after:transform-[matrix(1,0,0,1,37.5,-1)] after:origin-[37.5px_1px] after:rounded-tl-md hover:bg-color-001" data-component="link" aria-current="page" href="/googleanalytics/google-analytics-mcp" id="code-tab">
              {" "}
              <Icon9 />
              {" "}
              <span className="block before:content-['Code'] before:block before:w-[2.1875rem] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Code
              </span>
              {" "}
            </a>
          </li>
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer hover:bg-color-001 hover:border-b-color-006 focus:border-b-color-006" data-component="link" href="/googleanalytics/google-analytics-mcp/issues" id="issues-tab">
              {" "}
              <Icon10 />
              {" "}
              <span className="block before:content-['Issues'] before:block before:w-[2.725rem] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Issues
              </span>
              {" "}
              <span className="border border-solid border-clr-0 block min-w-5 ml-2 px-1.5 rounded-3xl text-xs font-medium leading-4.5 bg-color-001" id="issues-repo-tab-count" title="8">
                8
              </span>
              {" "}
            </a>
          </li>
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer max-md:invisible hover:bg-color-001 hover:border-b-color-006 focus:border-b-color-006" data-component="link" href="/googleanalytics/google-analytics-mcp/pulls" id="pull-requests-tab">
              {" "}
              <Icon11 />
              {" "}
              <span className="block max-md:invisible before:content-['Pull_requests'] before:block before:w-[5.5rem] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Pull requests
              </span>
              {" "}
              <span className="border border-solid border-clr-0 block min-w-5 ml-2 px-1.5 rounded-3xl text-xs font-medium leading-4.5 bg-color-001 max-md:invisible" id="pull-requests-repo-tab-count" title="18">
                18
              </span>
              {" "}
            </a>
          </li>
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer max-md:invisible hover:bg-color-001 hover:border-b-color-006 focus:border-b-color-006" data-component="link" href="/googleanalytics/google-analytics-mcp/actions" id="actions-tab">
              {" "}
              <Icon12 />
              {" "}
              <span className="block max-md:invisible before:content-['Actions'] before:block before:w-[51.3px] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Actions
              </span>
              {" "}
            </a>
          </li>
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer max-md:invisible hover:bg-color-001 hover:border-b-color-006 focus:border-b-color-006" data-component="link" href="/googleanalytics/google-analytics-mcp/projects" id="projects-tab">
              {" "}
              <Icon13 />
              {" "}
              <span className="block max-md:invisible before:content-['Projects'] before:block before:w-[55.3px] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Projects
              </span>
              {" "}
            </a>
          </li>
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:bg-color-001 hover:border-b-color-006 focus:border-b-color-006" data-component="link" href="/googleanalytics/google-analytics-mcp/security" id="security-and-quality-tab">
              {" "}
              <Icon14 />
              {" "}
              <span className="block max-lg:invisible before:content-['Security_and_quality'] before:block before:w-[8.3125rem] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Security and quality
              </span>
              {" "}
              <span className="border border-solid border-clr-0 hidden min-w-5 ml-2 px-1.5 rounded-3xl text-xs font-medium leading-4.5 bg-color-001" id="security-and-quality-repo-tab-count" title="0">
                0
              </span>
              {" "}
            </a>
          </li>
          <li className="flex">
            <a className="h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:bg-color-001 hover:border-b-color-006 focus:border-b-color-006" data-component="link" href="/googleanalytics/google-analytics-mcp/pulse" id="insights-tab">
              {" "}
              <Icon15 />
              {" "}
              <span className="block max-lg:invisible before:content-['Insights'] before:block before:w-[53.7px] before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center">
                Insights
              </span>
              {" "}
            </a>
          </li>
        </ul>
        {" "}
        <div className="w-16 h-8 block absolute right-0 invisible min-w-0 pr-8 self-center max-md:w-12 max-md:pr-4 max-lg:[visibility:inherit] md:max-lg:w-14 md:max-lg:pr-6">
          <action-menu class="block">
            <focus-group class="inline">
              {" "}
              <button className="w-8 h-8 border border-solid border-border inline-grid relative min-w-[max-content] rounded-md justify-center items-center content-center gap-1 grid-cols-[16px] text-muted-foreground font-medium leading-7.5 text-center whitespace-nowrap text-nowrap bg-surface cursor-pointer" aria-controls="action-menu-626d986d-95b9-4c8f-bc3b-04fa2cafbe2c-list" aria-haspopup="true" aria-labelledby="tooltip-61a45d37-c784-4241-a35b-54691b3f49ec" id="action-menu-626d986d-95b9-4c8f-bc3b-04fa2cafbe2c-button" type="button">
                {" "}
                <Icon16 />
                {" "}
              </button>
              <tool-tip class="w-[max-content] h-px hidden absolute top-0 left-0 opacity-0 max-w-80 my-auto py-1 px-2 rounded-md text-background text-xs leading-[1.25rem] text-center [overflow-wrap:normal] text-balance bg-color-002 [clip-path:inset(0px_100%_100%_0px)] after:content-[''] after:block after:absolute after:inset-x-0 after:h-1" aria-hidden="true" for="action-menu-626d986d-95b9-4c8f-bc3b-04fa2cafbe2c-button" id="tooltip-61a45d37-c784-4241-a35b-54691b3f49ec" role="tooltip">
                Additional navigation options
              </tool-tip>
              {" "}
            </focus-group>
            {" "}
          </action-menu>
        </div>
        {" "}
      </nav>
      {" "}
    </div>
  );
}
