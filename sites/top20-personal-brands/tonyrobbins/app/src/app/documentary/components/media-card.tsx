export type MediaCardData = {
  imgSrc: string;
  title: string;
  text: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <li className="list-item">
      <div className="block relative mb-6 rounded-xl overflow-hidden aspect-video">
        <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_600/400] align-middle text-clr-0 h-full" data-component="image" alt="" height="400" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw" src={d.imgSrc} srcSet="/assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/73dec1e8950d.png 256w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/4f50b3954396.png 384w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/f41365be2811.png 640w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/667302c8295c.png 750w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/04c7a7dece1e.png 828w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/dfd361331ad8.png 1080w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/552ed9184da1.png 1200w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/f4eb8b33510a.png 1920w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/e26a436d5665.png 2048w, /assets/cloned/images/981a9063e209.png, /assets/cloned/images/d654f65fef47.png, /assets/cloned/images/209447402527.png 3840w" width="600" />
      </div>
      <div className="block">
        <h3 className="block mb-2 text-[1.5rem] font-medium" data-component="heading">
          {d.title}
        </h3>
        <span className="block mb-4 text-[1.5rem] tracking-[-1.2px] max-md:text-[1.3125rem] max-md:leading-[1.3125rem] max-md:tracking-[-1.05px] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.4375rem] md:max-lg:tracking-[-1.15px]">
          {d.text}
        </span>
        <div className="block text-clr-3 leading-7">
          <p className="block my-3 text-background text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
            {d.description}
          </p>
        </div>
      </div>
    </li>
  );
}
