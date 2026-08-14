export type TileData = Record<string, never>;
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <svg className="w-auto h-6 block relative max-w-6 max-h-6 overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2,2)">
        <path d="M10 0.09375L12.9119 5.98949L19.5 6.89752L14.7116 11.4493L15.8713 17.9062L10 14.8237L4.12868 17.9062L5.28843 11.4493L0.5 6.89752L7.08809 5.98949L10 0.09375Z" fill="#AB9044" />
      </g>
    </svg>
  );
}
