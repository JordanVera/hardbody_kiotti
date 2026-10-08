'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ALT =
  'Kiotti seated on a gray couch in a black and white varsity jacket, holding a black bag and gesturing toward the camera';
const SIZES = '(min-width: 1024px) 75vw, 110vw';
const FRAME =
  'relative z-10 -mx-16 -mb-10 mt-5 h-[350px] sm:h-[480px] lg:absolute lg:right-[calc((100%-100vw)/2)] lg:top-[6%] lg:m-0 lg:h-auto lg:w-[75%] lg:max-w-[1200px]';
const STAGE =
  'relative mx-auto h-full w-auto max-w-full [aspect-ratio:1486/1058] [mask-image:linear-gradient(black_0%,black_83%,transparent_100%)] lg:h-auto lg:w-full';

// Head artwork is a close crop. These place its cap and beard over the collar opening.
const HEAD_BOX =
  'pointer-events-none absolute left-[43.5%] top-[1.6%] w-[23.2%] [aspect-ratio:1263/1245]';

const CYCLE_MS = 1500;

export function KiottiPortrait({ playing }: { playing: boolean }) {
  const headRef = useRef<HTMLDivElement>(null);
  const playingRef = useRef(playing);
  const amountRef = useRef(0);
  playingRef.current = playing;
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduce(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduce) {
      amountRef.current = 0;
      if (headRef.current) headRef.current.style.transform = 'none';
      return;
    }
    const head = headRef.current;
    if (!head) return;
    if (!playing && amountRef.current < 0.01) return;
    let frame = 0;
    let stopped = false;

    const step = (now: number) => {
      if (stopped) return;
      const target = playingRef.current ? 1 : 0;
      amountRef.current += (target - amountRef.current) * 0.035;
      const amount = amountRef.current;
      const bob = Math.sin((now / CYCLE_MS) * Math.PI * 2);
      const drop = bob * amount * head.offsetHeight * 0.055;
      if (!playingRef.current && amount < 0.01) {
        amountRef.current = 0;
        head.style.transform = 'none';
        return;
      }
      head.style.transform = `translateY(${drop.toFixed(2)}px)`;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
    };
  }, [playing, reduce]);

  return (
    <div className={FRAME}>
      <div className={STAGE}>
        <Image
          src="/images/kiotti_couch_no_head.png"
          alt={ALT}
          fill
          preload
          sizes={SIZES}
          className="object-fill"
        />
        <div
          ref={headRef}
          aria-hidden="true"
          className={HEAD_BOX}
        >
          <Image
            src="/images/kiotti_head.png"
            alt=""
            fill
            loading="eager"
            sizes="(min-width: 1024px) 20vw, 45vw"
            className="object-fill"
          />
        </div>
      </div>
    </div>
  );
}
