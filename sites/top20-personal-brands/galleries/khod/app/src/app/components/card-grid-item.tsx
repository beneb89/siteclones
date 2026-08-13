export type CardGridItemData = {
  variant: string;
  title: string;
  description: string;
};
/** card grid item component. */
export default function CardGridItem({ d }: { d: CardGridItemData }) {
  switch (d.variant) {
    case "services":
      return (
        <ul className="w-39.5 flex min-w-39.5 flex-col gap-6 [list-style-type:none] list-outside max-lg:w-36 max-lg:min-w-0" role="list">
          <li className="flex mb-4">
            {d.title}
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-3.21975px_50%] hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/webflow-development-agency">
              {d.description}
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.6502px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6813px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/b2b-web-design-agency">
              B2B Web Design
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.68px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/webflow-maintenance">
              Webflow Maintenance
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/seo-lead-generation-services">
              SEO Lead Gen
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/seo-agency-for-tech-startups">
              SEO
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-3.21975px_50%] hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] focus:[background-position:-12.284px_50%] focus:border-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/conversion-rate-optimization-experts">
              CRO
            </a>
          </li>
        </ul>
      );
    case "expertise":
      return (
        <ul className="w-39.5 flex min-w-39.5 flex-col gap-6 [list-style-type:none] list-outside max-lg:w-33 max-lg:min-w-0" role="list">
          <li className="flex mb-4">
            {d.title}
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/industries/ai">
              AI
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64388px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6786px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/industries/ai/conversational-ai">
              Conversational AI
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.68px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/industries/blockchain">
              Blockchain
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.6502px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6813px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/stages/startups">
              Startups
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.6502px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6835px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/stages/startups/seed">
              {d.description}
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.6502px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6835px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/stages/startups/series-a">
              Series A Startups
            </a>
          </li>
        </ul>
      );
    case "resources":
      return (
        <ul className="w-[12.1875rem] flex min-w-30 flex-col gap-6 [list-style-type:none] list-outside max-lg:min-w-0" role="list">
          <li className="flex mb-4">
            {d.title}
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-13.0058px_50%] focus:border-clr-16 focus:text-clr-16 focus:outline-clr-16 focus:[text-decoration-color:var(--clr-16)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/resource-center/articles">
              Articles
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/resource-center/playbooks">
              Playbooks
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-3.21975px_50%] hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] focus:[background-position:-12.284px_50%] focus:border-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/webflow-integrations">
              Integrations
            </a>
          </li>
          <li className="flex">
            <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer whitespace-nowrap hover:[background-position:-2.6502px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6835px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/resource-center/webflow-development-guides">
              {d.description}
            </a>
          </li>
          <li className="flex">
            <ul className="w-[81%] flex min-w-39.5 mt-5 flex-col gap-6 [list-style-type:none] list-outside max-lg:w-[44%] max-lg:min-w-0" role="list">
              <li className="flex mb-4">
                Company
              </li>
              <li className="flex">
                <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/case-studies">
                  Case Studies
                </a>
              </li>
              <li className="flex">
                <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.68px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/careers">
                  Careers
                </a>
              </li>
              <li className="flex">
                <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 [background-position:-14px_50%] bg-no-repeat cursor-pointer hover:[background-position:-2.64704px_50%] hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:[background-position:-12.6821px_50%] focus:border-clr-25 focus:text-clr-25 focus:outline-clr-25 focus:[text-decoration-color:var(--clr-25)]" style={{ backgroundImage: "url(\"/assets/cloned/svg/735f21ca5f15.svg\")" }} data-component="link" href="/for-ai">
                  For AI
                </a>
              </li>
            </ul>
          </li>
        </ul>
      );
    default:
      return null;
  }
}
