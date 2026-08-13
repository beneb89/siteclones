/** Article Overlay Close section. */
export default function ArticleOverlayCloseSection() {
  return (
    <div className="w-full h-full block relative rounded-tl-lg rounded-tr-lg overflow-hidden bg-background shadow-[var(--clr-3)_0px_0px_40px_0px] pointer-events-none max-lg:rounded-br-lg max-lg:rounded-bl-lg">
      <button className="w-5 h-5 border-2 border-solid border-foreground flex absolute top-5 right-[0.9375rem] z-10 rounded-[50%] justify-center items-center text-foreground text-xl font-normal leading-3 text-center cursor-pointer pointer-events-none" data-component="button" type="button">
        ×
      </button>
      <div className="h-full block overflow-auto pointer-events-none" />
    </div>
  );
}
