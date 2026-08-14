export type LogoData = {
  href: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <p className="block my-5">
      <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
        <img className="w-180 h-180 block max-w-full overflow-clip align-middle max-md:w-[20.4375rem] max-md:h-[20.4375rem] md:max-lg:w-164 md:max-lg:h-164" data-component="image" alt="" src={d.imgSrc} />
      </a>
    </p>
  );
}
