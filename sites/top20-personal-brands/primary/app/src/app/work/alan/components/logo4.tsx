export type Logo4Data = Record<string, never>;
/** A logo. */
export default function Logo4({ d }: { d: Logo4Data }) {
  return (
    <div className="w-5 block relative shrink-0 aspect-square">
      <div className="w-5 h-5 block relative overflow-hidden cursor-pointer">
        <div className="w-5 h-full block absolute top-0 shrink-0" aria-hidden="true">
          <div className="h-full block">
            <svg className="w-5 h-5 block overflow-hidden" data-component="icon" fill="currentColor">
              <use href="#svg2218268641" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
