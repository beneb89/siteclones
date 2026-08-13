export default function Page() {
  return (
    <>
      <div className="h-200 flex max-w-full max-h-full justify-center items-center bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-203 md:max-lg:h-256 2xl:h-270" style={{ backgroundImage: "url(\"/assets/cloned/images/fe5632450897.png\")" }}>
        <div className="w-65 h-160 flex -mt-15 flex-col justify-center text-center max-md:h-[40.6rem] md:max-lg:h-[51.2rem] 2xl:h-216">
          <img className="w-26.5 h-6 block max-w-full mb-25 mx-[4.8125rem] overflow-clip align-middle" data-component="image" alt="" src="/assets/cloned/svg/014cdd708bed.svg" />
          <h2 className="block opacity-[0.9779] mt-5 mb-2.5 text-[4rem] font-medium leading-16 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-0)]" style={{ backgroundImage: "linear-gradient(var(--clr-1) 20.95%, var(--clr-2) 135.16%)" }} data-component="heading">
            404
          </h2>
          <div className="block text-clr-3 text-base font-light leading-6">
            The page you are looking for doesn’t exist or has been moved.
          </div>
          <div className="block mt-7.5">
            <a className="inline-block min-w-38 py-2.5 rounded-lg text-clr-1 [font-family:'Public_Sans',_sans-serif] text-[0.75rem] font-semibold uppercase bg-primary cursor-pointer max-md:py-5 hover:bg-[linear-gradient(var(--clr-5),_var(--primary)_70%)]" style={{ backgroundImage: "linear-gradient(var(--clr-4), var(--primary))" }} data-component="button" href="/">
              Back to home
            </a>
          </div>
        </div>
      </div>
      {" "}
    </>
  );
}
