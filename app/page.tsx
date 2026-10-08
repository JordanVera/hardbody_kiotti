'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { TrackList } from '@/components/TrackList';
import { RadioPlayer } from '@/components/RadioPlayer';
import { Backdrop } from '@/components/Backdrop';
import { PlayIcon } from '@/components/Icons';
import { tracks } from '@/lib/tracks';

function arch(text: string, from: number, to: number) {
  const chars = [...text];
  const last = chars.length - 1;
  return chars.map((ch, i) => {
    const t = last === 0 ? from : from + ((to - from) * i) / last;
    const peak = 0.52;
    const onLeft = t <= peak;
    const u = onLeft ? (peak - t) / peak : (t - peak) / (1 - peak);
    const drop = u * u * (onLeft ? 0.07 : 0.046);
    const rot = (onLeft ? -2.9 : 1.9) * u;
    return (
      <span
        key={`${text}-${i}`}
        className="inline-block origin-bottom font-black"
        style={{
          transform: `translateY(${drop.toFixed(3)}em) rotate(${rot.toFixed(2)}deg)`,
        }}
      >
        {ch}
      </span>
    );
  });
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const audioRef = useRef<HTMLAudioElement>(null);
  const activeRef = useRef(active);
  const volumeRef = useRef(volume);
  activeRef.current = active;
  volumeRef.current = volume;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[0].src;
    audio.volume = volumeRef.current / 100;
    return () => audio.pause();
  }, []);

  const cue = (index: number, shouldPlay: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextSrc = tracks[index].src;
    const assigned = audio.getAttribute('src') ?? '';
    const sameTrack = assigned === nextSrc || audio.src.endsWith(nextSrc);
    if (!sameTrack) audio.src = nextSrc;
    else if (shouldPlay && audio.ended) audio.currentTime = 0;
    audio.volume = volumeRef.current / 100;
    activeRef.current = index;
    setActive(index);
    if (!shouldPlay) return;
    setPlaying(true);
    void audio.play().catch(() => setPlaying(false));
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }
    cue(activeRef.current, true);
  };

  const select = (index: number) => {
    if (index === activeRef.current) toggle();
    else cue(index, true);
  };

  const changeVolume = (value: number) => {
    volumeRef.current = value;
    setVolume(value);
    const audio = audioRef.current;
    if (audio) audio.volume = value / 100;
  };

  const handleEnded = () => {
    cue((activeRef.current + 1) % tracks.length, true);
  };
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-signal px-4 py-3 focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section
          id="home"
          aria-label="Hardbody 24/7"
          className="relative isolate [clip-path:inset(-70px_0_0_0)] lg:min-h-[min(950px,calc(100vw*.69))] "
        >
          <Backdrop />
          <div className="relative mx-auto w-full max-w-[1600px] [container-type:inline-size] lg:min-h-[inherit]">
            <div className="px-5 pt-8 sm:px-8 lg:px-[4cqw] lg:pt-[3cqw] xl:pt-0">
              <div className="relative z-20 w-full [container-type:inline-size] lg:w-[70%]">
                <h1
                  aria-label="HARDBODY 24/7"
                  className="stamp relative w-max max-w-full font-display text-[23.5cqi] uppercase leading-none tracking-[-.03em] text-cream"
                >
                  <span className="relative z-10 block">
                    {arch('HARDBODY', 0, 1)}
                  </span>
                  <span className="-mt-[0.10em] block text-signal">
                    {' '}
                    {arch('24/7', 0, 0.48)}
                  </span>
                </h1>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[.3em] sm:text-[13px] sm:tracking-[.45em]">
                  Houston <span className="text-signal">•</span> The frequency
                  is yours
                </p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[.18em] text-white/80 sm:text-[11px]">
                  Grab the radio. Spin the city. Make the signal yours.
                </p>
              </div>
            </div>
            <div className="relative z-30 mt-4 flex flex-wrap gap-4 px-5 sm:mt-5 sm:px-8 xl:absolute xl:bottom-[calc(5%+18.75rem)] xl:left-[4cqw] xl:mt-0 xl:px-0">
              <a
                href="#tracklist"
                className="flex -skew-x-6 items-center gap-8 border-2 border-signal bg-black/90 px-6 py-3 font-display text-lg italic transition hover:bg-signal sm:text-[23px]"
              >
                <span className="skew-x-6">ENTER THE HUB</span>
                <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                onClick={toggle}
                aria-pressed={playing}
                className="flex -skew-x-6 items-center gap-5 border-2 border-signal bg-signal px-5 py-3 font-display text-base transition hover:bg-[#c30020] sm:text-xl"
              >
                <span className="skew-x-6">
                  {playing ? 'PAUSE MUSIC' : 'PLAY MUSIC'}
                </span>
                <PlayIcon playing={playing} />
              </button>
            </div>
            <div className="relative z-10 -mx-16 -mb-10 mt-5 h-[350px] sm:h-[480px] lg:absolute lg:right-[calc((100%-100vw)/2)] lg:top-[6%] lg:m-0 lg:h-auto lg:w-[75%] lg:max-w-[1200px]">
              <Image
                src="/images/kiotti-couch.png"
                alt="Kiotti seated on a gray couch in a black and white varsity jacket, holding a black bag and gesturing toward the camera"
                width={1488}
                height={1058}
                priority
                sizes="(min-width: 1024px) 75vw, 110vw"
                className="h-full w-full object-contain object-top lg:h-auto [mask-image:linear-gradient(black_0%,black_83%,transparent_100%)]"
              />
            </div>
            <div className="relative z-30 px-5 sm:px-8 lg:absolute lg:bottom-[5%] lg:left-[4cqw] lg:w-[28%] lg:px-0">
              <TrackList active={active} playing={playing} onSelect={select} />
            </div>
            <div className="relative z-40 mt-12 px-5 pb-10 sm:px-8 lg:absolute lg:bottom-[4%] lg:left-[31cqw] lg:mt-0 lg:w-[66%] lg:rotate-[1.5deg] lg:px-0 lg:pb-0">
              <RadioPlayer
                active={active}
                playing={playing}
                volume={volume}
                onToggle={toggle}
                onTrack={select}
                onVolume={changeVolume}
              />
            </div>
            <audio
              ref={audioRef}
              className="sr-only"
              preload="auto"
              playsInline
              onEnded={handleEnded}
            />
            <p role="status" aria-live="polite" className="sr-only">
              {playing ? 'Playing' : 'Paused'}: {tracks[active].title} by{' '}
              {tracks[active].artist}.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
