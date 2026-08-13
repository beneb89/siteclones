export type FeatureGridItemData = {
  variant: string;
  title: string;
  description: string;
  label?: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "well-rounded-documentation":
      return (
        <div className="w-[356.7px] h-[17.6375rem] min-h-px block relative float-left m-2.5 py-[1.5625rem] rounded-md [background-size:20%] [background-position:90%_10%] bg-no-repeat shadow-[var(--clr-3)_0px_7px_20px_0px] max-md:w-75 max-md:h-[18.9rem] max-lg:min-w-75 max-md:[background-size:18%] max-lg:min-h-0 max-md:[float:initial] md:max-lg:w-157.5 md:max-lg:h-52 md:max-lg:[background-size:15%] md:max-lg:[background-position:95%_90%]" style={{ backgroundImage: "url(\"/assets/cloned/images/90faabdec007.png\")" }}>
          <div className="h-full block px-[0.9375rem] text-[1rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:font-medium after:leading-[1.4375rem] after:text-left">
            <div className="box-content h-full block">
              <div className="box-content block">
                <div className="box-content block">
                  <h5 className="box-content w-[228.7px] block text-accent text-[1.1875rem] font-semibold leading-[1.6875rem] max-md:w-[11.8125rem] max-lg:text-lg max-lg:leading-[1.5625rem] md:max-lg:w-150" data-component="heading">
                    <a className="box-content inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="https://docs.dataforseo.com/v3/">
                      {d.title}
                    </a>
                  </h5>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="box-content h-4 block" />
              {" "}
              <div className="box-content block">
                <div className="box-content block">
                  <p className="box-content block max-lg:text-[0.9375rem]">
                    {d.description}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="box-content h-4 block" />
              <a className="box-content h-[2.6875rem] border-2 border-solid border-border inline-block relative mt-2 rounded-[3px] align-middle text-muted text-[0.8125rem] font-semibold leading-[2.6875rem] tracking-[1px] uppercase cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/" target="_blank">
                {" "}
                <span className="box-content w-[5.9375rem] block float-left min-w-[5.9375rem] px-5 align-middle text-center">
                  {d.label}
                </span>
                {" "}
                <span className="box-content w-14 border-l-2 border-solid border-l-border block relative float-left rounded-tr-[3px] rounded-br-[3px] overflow-hidden align-middle text-[1.4375rem] text-center before:content-[''] before:block before:absolute before:inset-y-0 before:right-14 before:-left-14 before:w-14 before:h-[2.6875rem] before:text-muted before:text-[1.4375rem] before:leading-[2.6875rem] before:tracking-[1px] before:text-center before:[overflow:hidden]">
                  <i className="box-content block relative [font-family:simple-line-icons] font-normal normal-case before:content-[''] before:text-muted before:text-[1.4375rem] before:leading-[2.6875rem] before:tracking-[1px] before:text-center" />
                </span>
                {" "}
              </a>
            </div>
          </div>
        </div>
      );
    case "gui-for-api-usage":
      return (
        <div className="w-[356.7px] h-[17.6375rem] min-h-px block relative float-left m-2.5 py-[1.5625rem] rounded-md [background-size:20%] [background-position:90%_10%] bg-no-repeat shadow-[var(--clr-3)_0px_7px_20px_0px] max-md:w-75 max-md:h-[17.4625rem] max-lg:min-w-75 max-md:[background-size:18%] max-lg:min-h-0 max-md:[float:initial] md:max-lg:w-157.5 md:max-lg:h-52 md:max-lg:[background-size:15%] md:max-lg:[background-position:95%_90%]" style={{ backgroundImage: "url(\"/assets/cloned/images/2691dcc9ac93.png\")" }}>
          <div className="h-full block px-[0.9375rem] text-[1rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:font-medium after:leading-[1.4375rem] after:text-left">
            <div className="box-content h-full block">
              <div className="box-content block">
                <div className="box-content block">
                  <h5 className="box-content w-[228.7px] block text-accent text-[1.1875rem] font-semibold leading-[1.6875rem] max-md:w-[11.8125rem] max-lg:text-lg max-lg:leading-[1.5625rem] md:max-lg:w-150" data-component="heading">
                    <a className="box-content inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="https://app.dataforseo.com/register">
                      {d.title}
                      <br className="box-content inline max-lg:hidden" />
                      {" control"}
                    </a>
                  </h5>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="box-content h-4 block" />
              {" "}
              <div className="box-content block">
                <div className="box-content block">
                  <p className="box-content block max-lg:text-[0.9375rem]">
                    {d.description}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="box-content h-4 block" />
              <a className="box-content h-[2.6875rem] border-2 border-solid border-border inline-block relative mt-2 rounded-[3px] align-middle text-muted text-[0.8125rem] font-semibold leading-[2.6875rem] tracking-[1px] uppercase cursor-pointer" data-component="link" href="https://app.dataforseo.com/register" target="_blank">
                {" "}
                <span className="box-content w-[5.9375rem] block float-left min-w-[5.9375rem] px-5 align-middle text-center">
                  Register
                </span>
                {" "}
                <span className="box-content w-14 border-l-2 border-solid border-l-border block relative float-left rounded-tr-[3px] rounded-br-[3px] overflow-hidden align-middle text-[1.4375rem] text-center before:content-[''] before:block before:absolute before:inset-y-0 before:right-14 before:-left-14 before:w-14 before:h-[2.6875rem] before:text-muted before:text-[1.4375rem] before:leading-[2.6875rem] before:tracking-[1px] before:text-center before:[overflow:hidden]">
                  <i className="box-content block relative [font-family:simple-line-icons] font-normal normal-case before:content-[''] before:text-muted before:text-[1.4375rem] before:leading-[2.6875rem] before:tracking-[1px] before:text-center" />
                </span>
                {" "}
              </a>
            </div>
          </div>
        </div>
      );
    case "ad-hoc-integration-and-deployment-support":
      return (
        <div className="w-[356.7px] h-[17.6375rem] min-h-px block relative float-left m-2.5 py-[1.5625rem] rounded-md [background-size:20%] [background-position:90%_10%] bg-no-repeat shadow-[var(--clr-3)_0px_7px_20px_0px] max-md:w-75 max-md:h-[19.0375rem] max-lg:min-w-75 max-md:[background-size:18%] max-lg:min-h-0 max-md:[float:initial] md:max-lg:w-157.5 md:max-lg:h-52 md:max-lg:[background-size:15%] md:max-lg:[background-position:95%_90%]" style={{ backgroundImage: "url(\"/assets/cloned/images/bde5c55a5cfd.png\")" }}>
          <div className="h-full block px-[0.9375rem] text-[1rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:font-medium after:leading-[1.4375rem] after:text-left">
            <div className="box-content h-full block">
              <div className="box-content block">
                <div className="box-content block">
                  <h5 className="box-content w-[228.7px] block text-accent text-[1.1875rem] font-semibold leading-[1.6875rem] max-md:w-[11.8125rem] max-lg:text-lg max-lg:leading-[1.5625rem] md:max-lg:w-150" data-component="heading">
                    <a className="box-content inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/contact">
                      {d.title}
                    </a>
                  </h5>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="box-content h-4 block" />
              {" "}
              <div className="box-content block">
                <div className="box-content block">
                  <p className="box-content block max-lg:text-[0.9375rem]">
                    {d.description}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="box-content h-4 block" />
              <a className="box-content h-[2.6875rem] border-2 border-solid border-border inline-block relative mt-2 rounded-[3px] align-middle text-muted text-[0.8125rem] font-semibold leading-[2.6875rem] tracking-[1px] uppercase cursor-pointer" data-component="link" href="/contact" target="_blank">
                {" "}
                <span className="box-content w-[5.9375rem] block float-left min-w-[5.9375rem] px-5 align-middle text-center">
                  {d.label}
                </span>
                {" "}
                <span className="box-content w-14 border-l-2 border-solid border-l-border block relative float-left rounded-tr-[3px] rounded-br-[3px] overflow-hidden align-middle text-[1.4375rem] text-center before:content-[''] before:block before:absolute before:inset-y-0 before:right-14 before:-left-14 before:w-14 before:h-[2.6875rem] before:text-muted before:text-[1.4375rem] before:leading-[2.6875rem] before:tracking-[1px] before:text-center before:[overflow:hidden]">
                  <i className="box-content block relative [font-family:simple-line-icons] font-normal normal-case before:content-[''] before:text-muted before:text-[1.4375rem] before:leading-[2.6875rem] before:tracking-[1px] before:text-center" />
                </span>
                {" "}
              </a>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
