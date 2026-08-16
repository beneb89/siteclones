export type Logo2Data = {
  style: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <span className="w-6 flex justify-center items-center shrink-0" style={d.style}>
      {" "}
      <svg className="w-auto h-[1.0625rem] flex overflow-hidden" data-component="icon" aria-hidden="true" height="17" viewBox="0 0 31.575 30.402" width="17" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path transform="translate(-945.648 -673.671)" fill="white" d="m977.223 685.241-7.775 7.8 2.031 10.988-9.836-5.168-9.678 5.211 1.7-11-8.012-7.767 10.885-1.628 4.726-10.011 5.031 9.99z" />
      </svg>
      {" "}
    </span>
  );
}
