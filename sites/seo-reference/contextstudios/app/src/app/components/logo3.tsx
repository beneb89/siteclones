export type Logo3Data = Record<string, never>;
/** A logo. */
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <svg className="w-auto h-[0.5625rem] block overflow-hidden align-middle focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="#EF4444" height="9" viewBox="0 0 24 24" width="9">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
