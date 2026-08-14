import type { TextLink18Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TextLink18Data = {
  id: string;
  title: string;
  label: string;
  id2: string;
  description: string;
  description2: string;
  description3: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink18({ d, styles }: { d: TextLink18Data; styles: TextLink18Styles }) {
  return (
    <a className="border border-solid border-border flex min-w-0 p-5 rounded-xl flex-col flex-1 gap-4 text-primary bg-background cursor-pointer" data-component="link" href="/blog/berufe" id={d.id} target="_self">
      {" "}
      <div className={cn("flex flex-col gap-4", styles.className)}>
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <h4 className="block text-foreground text-2xl font-medium leading-7 tracking-[-0.24px] max-lg:text-lg max-lg:tracking-[-0.18px] max-lg:leading-[inherit]" data-component="heading">
                {d.title}
              </h4>
              {" "}
              <div className="block text-color-003 max-lg:text-sm max-lg:leading-5">
                {d.label}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block text-accent [font-family:'Font_Awesome_Pro'] text-2xl leading-6 text-center" id={d.id2} />
          {" "}
        </div>
        {" "}
        <div className="flex gap-4">
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <p className="flex items-center gap-1 text-sm leading-3.5">
              <i className="block [font-family:'Font_Awesome_Pro'] text-center" />
              {d.description}
            </p>
            {" "}
            <p className="flex items-center gap-1 text-sm leading-3.5">
              <i className="block [font-family:'Font_Awesome_Pro'] text-center" />
              {d.description2}
            </p>
            {" "}
            <p className="flex items-center gap-1 text-sm leading-3.5">
              <i className="block [font-family:'Font_Awesome_Pro'] text-center" />
              {d.description3}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="border-b border-solid border-b-border block my-2" />
      {" "}
      <div className="flex justify-between items-center gap-4">
        <div className="block">
          <span className="inline text-foreground text-2xl font-medium leading-7 tracking-[-0.24px] max-lg:text-lg max-lg:tracking-[-0.18px] max-lg:leading-[inherit]">
            {d.label2}
          </span>
          {" "}
          <br className="inline" />
          {" "}
          <span className="inline text-muted-foreground text-sm leading-3.5 text-center">
            {d.label3}
          </span>
          {" "}
        </div>
        {" "}
        <div className="border-2 border-solid border-primary block py-3 px-6 rounded-full align-middle text-background font-medium text-center whitespace-nowrap text-nowrap bg-primary w-auto max-lg:py-2 max-lg:px-4 max-lg:text-sm max-lg:leading-5">
          Alle Infos
          <i className="inline-block pl-2 [font-family:'Font_Awesome_Pro'] font-normal leading-4 max-lg:leading-3.5" />
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
