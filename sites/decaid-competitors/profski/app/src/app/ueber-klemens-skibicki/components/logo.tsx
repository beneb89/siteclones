export type LogoData = {
  href: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <figure className="w-[16.825rem] block max-w-full mr-2.5 mb-2.5 align-middle max-md:w-[142.5px] md:max-lg:w-[21.1875rem] 2xl:w-[26.5375rem]" itemProp="associatedMedia">
      <a className="h-full block relative pt-[16.825rem] text-primary cursor-pointer max-md:pt-[142.5px] md:max-lg:pt-[21.1875rem] 2xl:pt-[26.5375rem]" data-component="link" href={d.href} itemProp="contentUrl">
        {" "}
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle" data-component="image" alt="" itemProp="thumbnail" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
        {" "}
      </a>
      {" "}
      <figcaption className="block" itemProp="caption description" />
      {" "}
    </figure>
  );
}
