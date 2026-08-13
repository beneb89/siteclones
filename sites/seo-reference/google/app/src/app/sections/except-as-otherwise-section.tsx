/** Except As Otherwise section. */
export default function ExceptAsOtherwiseSection() {
  return (
    <devsite-content-footer class="block clear-both text-color-002 text-[0.8125rem] leading-5 max-md:px-4 md:max-lg:px-6">
      <p className="block my-4">
        {"Except as otherwise noted, the content of this page is licensed under the "}
        <a className="inline text-accent [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 License
        </a>
        {", and code samples are licensed under the "}
        <a className="inline text-accent [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="https://www.apache.org/licenses/LICENSE-2.0">
          Apache 2.0 License
        </a>
        {". For details, see the "}
        <a className="inline text-accent [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/site-policies">
          Google Developers Site Policies
        </a>
        . Java is a registered trademark of Oracle and/or its affiliates.
      </p>
      {" "}
      <p className="block my-4">
        Last updated 2026-08-03 UTC.
      </p>
      {" "}
    </devsite-content-footer>
  );
}
