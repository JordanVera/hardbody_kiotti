import { tracks } from '@/lib/tracks';
import { PlayIcon } from './Icons';

type Props = {
  active: number;
  playing: boolean;
  volume: number;
  onToggle: () => void;
  onTrack: (index: number) => void;
  onVolume: (volume: number) => void;
};

const keyIdle =
  'border-t-[#6d6d6d] border-b-[#050505] bg-gradient-to-b from-[#3a3a3a] via-[#1a1a1a] to-[#050505] text-white shadow-[inset_0_1px_0_#ffffff40,inset_0_-2px_0_#000,0_4px_0_#0a0a0a,0_6px_8px_#000]';
const keyActive =
  'border-t-[#ffd0d6] border-b-[#5c0010] bg-gradient-to-b from-[#ff5a6e] via-[#e10624] to-[#8a0014] text-white shadow-[inset_0_1px_0_#ffe4e8,inset_0_-3px_0_#5a000c,0_4px_0_#1a0508,0_6px_10px_#000,0_0_16px_#f00c2844]';

export function RadioPlayer({
  active,
  playing,
  volume,
  onToggle,
  onTrack,
  onVolume,
}: Props) {
  return (
    <section
      aria-label="Music player"
      className="relative isolate w-full shadow-radio"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[calc(100%-6px)] left-0 right-0 h-24 [perspective-origin:center_bottom] [perspective:280px] sm:h-28"
      >
        <div className="relative h-full origin-bottom [transform:rotateX(48deg)]">
          <div className="flex h-full flex-col bg-gradient-to-b from-[#f3f3f3] via-[#8a8a8a] to-[#2a2a2a] p-[4px] shadow-[0_14px_12px_#000]">
            <div className="h-1.5 shrink-0 bg-gradient-to-b from-white via-[#d5d5d5] to-[#7a7a7a]" />
            <div className="relative min-h-0 flex-1 overflow-hidden bg-gradient-to-b from-[#4a4a4a] via-[#1a1a1a] to-[#0a0a0a] shadow-[inset_0_10px_14px_#000,inset_0_1px_0_#ffffff55]">
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_38%,#ffffff2e_48%,transparent_58%)]" />
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
            <div className="h-2.5 shrink-0 bg-gradient-to-b from-[#f7f7f7] via-[#9a9a9a] to-[#161616]" />
          </div>
        </div>
      </div>
      <div className="relative rounded-[3px] bg-gradient-to-b from-[#c4c4c4] via-[#5a5a5a] to-[#111] p-[3px] shadow-[0_28px_40px_#000,0_12px_28px_#ed002c40,inset_0_1px_0_#ffffff]">
        <div className="relative grid grid-cols-[80px_1fr] gap-3 bg-gradient-to-b from-[#3c3c3c] via-[#171717] to-[#070707] p-3 shadow-[inset_0_1px_0_#ffffff38,inset_0_-10px_16px_#000] sm:grid-cols-[110px_1fr_1.05fr] sm:gap-3 sm:p-4 xl:grid-cols-[140px_1fr_1.13fr] xl:gap-5 xl:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-black/80"
          />
          <div className="flex flex-col items-center justify-center gap-3 pr-1">
            <div className="relative flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[conic-gradient(#f4f4f4,#6a6a6a,#1a1a1a,#bdbdbd,#fff,#4a4a4a,#ececec)] p-[5px] shadow-[5px_7px_10px_#000,inset_0_1px_1px_#fff] sm:h-[91px] sm:w-[91px] xl:h-[112px] xl:w-[112px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#ff4d62] to-[#9a0016] p-[7px] shadow-[0_0_16px_#ff1537,inset_0_1px_2px_#ffd0d6]">
                <div
                  className="relative h-full w-full rounded-full bg-gradient-to-br from-[#4a4a4a] via-[#121212] to-black shadow-[inset_3px_4px_8px_#000,inset_-1px_-1px_3px_#ffffff22]"
                  style={{ transform: `rotate(${volume * 2.7 - 135}deg)` }}
                >
                  <span className="absolute left-1/2 top-1.5 h-3.5 w-1 -translate-x-1/2 rounded-full bg-white shadow-[0_0_6px_white]" />
                </div>
              </div>
            </div>
            <label className="w-full text-center text-[9px] font-semibold tracking-[.2em] text-white/70">
              VOLUME <span className="sr-only">{volume}%</span>
              <input
                aria-label="Volume"
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => onVolume(Number(e.target.value))}
                className="mt-2 block h-1 w-full cursor-pointer accent-signal"
              />
            </label>
          </div>
          <div className="relative flex min-w-0 flex-col justify-center overflow-hidden rounded-sm border-[5px] border-[#141414] bg-[#050607] px-2 py-3 text-center shadow-[inset_0_10px_18px_#000,inset_0_-4px_8px_#000,0_1px_0_#9a9a9a] sm:px-3">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,#ffffff08_4px)]"
            />
            <span className="relative font-display text-[11px] leading-none">
              KIOTTI
            </span>
            <div className="relative mt-1 whitespace-nowrap font-display text-[23px] leading-none tracking-[-.04em] text-cream sm:text-[25px] xl:text-[36px]">
              HARDBODY <span className="text-signal">24/7</span>
            </div>
            <p className="relative mt-3 truncate text-[9px] font-semibold uppercase tracking-[.14em] xl:text-[11px]">
              {tracks[active].id} / {tracks[active].title}
            </p>
            <div
              aria-hidden="true"
              className="relative mt-2 flex h-8 items-end justify-center gap-[2px] border-b border-signal/40"
            >
              {Array.from({ length: 54 }, (_, i) => (
                <span
                  key={i}
                  className={`min-w-0 flex-1 origin-bottom bg-signal shadow-[0_0_4px_#f00c28] ${playing ? 'motion-safe:animate-equalize' : ''}`}
                  style={{
                    height: `${15 + ((i * 37 + i * i * 3) % 85)}%`,
                    animationDelay: `${(i % 9) * -110}ms`,
                    animationDuration: `${500 + (i % 7) * 90}ms`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <div
              role="group"
              aria-label="Select track"
              className="grid grid-cols-3 gap-3"
            >
              {tracks.map((track, index) => (
                <button
                  type="button"
                  key={track.id}
                  aria-label={`Select ${track.title}`}
                  aria-pressed={index === active}
                  onClick={() => onTrack(index)}
                  className={`border-y-2 py-2 text-base font-bold transition hover:brightness-125 active:translate-y-px ${index === active ? keyActive : keyIdle}`}
                >
                  {track.id}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-pressed={playing}
              onClick={onToggle}
              className="flex min-h-[64px] flex-1 items-center justify-center gap-3 border-y-2 border-t-[#ffd0d6] border-b-[#5c0010] bg-gradient-to-b from-[#ff4d62] via-[#e10624] to-[#8a0014] px-3 py-3 font-display text-[26px] tracking-wide text-white shadow-[inset_0_1px_0_#ffe4e8,inset_0_-4px_0_#5a000c,0_5px_0_#140308,0_8px_14px_#000] transition hover:brightness-110 active:translate-y-0.5 active:shadow-[inset_0_2px_4px_#5a000c,0_2px_0_#140308] xl:text-[33px]"
            >
              <PlayIcon playing={playing} className="h-5 w-5" />
              {playing ? 'PAUSE MUSIC' : 'PLAY MUSIC'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
