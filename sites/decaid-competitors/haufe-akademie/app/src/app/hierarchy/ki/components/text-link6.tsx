import type { TextLink6Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TextLink6Data = {
  id: string;
  title: string;
  label: string;
  id2: string;
  description: string;
  description2: string;
  label2: string;
  kind?: string;
  kind2?: string;
};
/** A text link. */
export default function TextLink6({ d, styles }: { d: TextLink6Data; styles: TextLink6Styles }) {
  return (
    <a className={styles.className} href="/blog/berufe" id={d.id} target="_self" data-component={d.kind}>
      {" "}
      <div className={styles.className2}>
        <div className={styles.className3}>
          <div className={styles.className4}>
            <div className={styles.className5}>
              <i className={styles.className6} />
              {"\n\t\t\t\t\t\tFokus KI"}
            </div>
            {" "}
            <div className={styles.className7}>
              <h4 className={styles.className8} data-component={d.kind2}>
                {d.title}
              </h4>
              {" "}
              <div className={styles.className9}>
                {d.label}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className={styles.className10} id={d.id2} />
          {" "}
        </div>
        {" "}
        <div className={styles.className11}>
          <div className={styles.className12}>
            <div className={styles.className13}>
              <div className={styles.className14}>
                {"\n\t\t\t\t\t\t\t\tNeu"}
              </div>
              {" "}
            </div>
            {" "}
            <p className={styles.className15}>
              <i className={styles.className16} />
              {"\n\t\t\t\t\t\tonline"}
            </p>
            {" "}
            <p className={styles.className17}>
              <i className={styles.className18} />
              {d.description}
            </p>
            {" "}
            <p className={styles.className19}>
              <i className={styles.className20} />
              {d.description2}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className={styles.className21} />
      {" "}
      <div className={styles.className22}>
        <div className={styles.className23}>
          <span className={styles.className24}>
            {d.label2}
          </span>
          {" "}
          <br className={styles.className25} />
          {" "}
          <span className={styles.className26}>
            zzgl. MwSt.
          </span>
          {" "}
        </div>
        {" "}
        <div className={cn("w-auto", styles.className27)}>
          Alle Infos
          <i className={styles.className28} />
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
