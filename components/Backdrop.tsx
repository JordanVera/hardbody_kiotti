import Image from 'next/image';

export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_67%_45%,#38383840,transparent_50%),radial-gradient(ellipse_at_70%_100%,#bc001c35,transparent_42%)]" />
      <div className="absolute left-[-6%] top-[10%] h-[50%] w-[108%] sm:left-[4%] sm:top-[12%] sm:h-[46%] sm:w-[78%] lg:left-[6%] lg:top-[13%] lg:h-[42%] lg:w-[64%]">
        <Image
          src="/images/houston-skyline.jpg"
          alt=""
          width={1920}
          height={420}
          priority
          className="h-full w-full object-cover object-center brightness-[.62] contrast-110 grayscale [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_78%,transparent_100%),linear-gradient(to_right,transparent_0%,black_12%,black_86%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
        />
      </div>
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 980"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="rough">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".035"
              numOctaves="3"
              seed="8"
            />
            <feDisplacementMap in="SourceGraphic" scale="11" />
          </filter>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".17" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g fill="none" stroke="#ed0627" filter="url(#rough)">
          <path
            d="M1410 -120 560 490 1190 175 385 820 1350 450"
            strokeWidth="24"
          />
          <path
            d="m1290 -70-555 440M0 970l1440-350M400 945l1020-110"
            strokeWidth="5"
          />
          <path d="m830 610 510-263-145 173" strokeWidth="2" />
        </g>
        <path
          d="m940 0-95 250M790 80l235-64M790 126l205-61"
          stroke="#ccc"
          strokeWidth="5"
          opacity=".35"
          filter="url(#rough)"
        />
        <rect width="1440" height="980" filter="url(#grain)" opacity=".5" />
      </svg>
      {/* <div className="absolute right-[4%] top-[8%] hidden rotate-[-14deg] font-serif text-[66px] italic leading-none text-white/20 lg:block">
        Frequency
        <br />
        <span className="pl-24">Wall</span>
      </div> */}
      <div className="absolute right-[-35px] top-6 hidden h-[660px] w-[190px] -rotate-3 border-x border-signal/70 bg-gradient-to-b from-signal via-signal/80 to-transparent lg:block">
        <span className="absolute left-[148px] top-[-7px] origin-top-left rotate-90 whitespace-nowrap font-display text-[155px] leading-none tracking-[-.02em] text-black">
          LISTEN
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[23%] bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
}
