export type Logo3Data = {
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <li className="list-item max-h-[1e+06px] -ml-2.5 2xl:hidden">
      <img className="w-full h-[3.1875rem] block max-w-full max-h-[1e+06px] rounded-[50%] overflow-clip object-cover align-top 2xl:hidden" data-component="avatar" alt="" src={d.imgSrc} srcSet={d.srcSet} />
      {" "}
    </li>
  );
}
