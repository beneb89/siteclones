export type LogoData = {
  text: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
      <img className="w-[1.0625rem] h-[1.0625rem] inline max-w-full mx-[0.075rem] overflow-clip [vertical-align:-1.7px] [border-collapse:collapse] [border-spacing:2px]" data-component="image" alt="✅" role="img" src="/assets/cloned/svg/754f4aa380c4.svg" />
      {d.text}
    </td>
  );
}
