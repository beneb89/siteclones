/** Site footer. */
export default function Footer() {
  return (
    <footer className="flex items-start gap-5 max-md:flex-col max-md:items-center max-md:text-center">
      <div className="block">
        <img className="w-full h-20 block max-w-full rounded-lg overflow-clip object-cover aspect-[auto_96/96] align-middle" data-component="image" alt="Anatolii" height="96" src="/assets/cloned/images/b19c3a8e6c82.png" srcSet="/assets/cloned/images/bf71db51a8af.png 2x" width="96" />
      </div>
      {" "}
      <div className="block flex-1">
        <p className="block mb-2 text-lg font-bold leading-[1.8125rem]">
          Anatolii
        </p>
        {" "}
        <p className="block text-sm leading-[1.375rem]">
          Content Writer at DataForSEO. Anatolii's deep interest in SEO optimization allows him to interpret complex SEO and tech topics and turn them into important insights for the audience. Sign up for our newsletter to never miss the latest pieces.
        </p>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
