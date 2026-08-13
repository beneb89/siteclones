export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="box-content border-b border-solid border-b-color-001 block float-right ml-5 pb-px cursor-pointer max-lg:mt-2 max-lg:border-b-[0] max-lg:border-initial max-lg:border-b-[initial] max-lg:[float:initial]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
