export type Logo4Data = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo4({ d }: { d: Logo4Data }) {
  return (
    <div className="block relative p-1.5 shrink-0 bg-primary h-44 w-[13%] max-md:p-0.5 max-md:h-16 md:max-lg:h-32" style={{ maskImage: "radial-gradient(3px at 3px 0px, var(--clr-2) 97%, var(--background)), radial-gradient(3px at 3px 100%, var(--clr-2) 97%, var(--background)), radial-gradient(3px at 0px 3px, var(--clr-2) 97%, var(--background)), radial-gradient(3px at 100% 3px, var(--clr-2) 97%, var(--background))" }}>
      <div className="w-[136.3px] h-41 block absolute top-1.5 left-1.5 z-10 pointer-events-none max-md:w-[2.2875rem] max-md:h-14 max-md:top-1 max-md:left-1 md:max-lg:w-[4.525rem] md:max-lg:h-29 2xl:w-36">
        <div className="border border-solid border-surface-6 block pointer-events-none h-full w-full" />
      </div>
      <div className="block relative overflow-hidden h-full w-full">
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover object-[50%_0%] align-middle text-clr-2" data-component="image" alt="" sizes="120px" src={d.imgSrc} srcSet={d.srcSet} />
      </div>
    </div>
  );
}
