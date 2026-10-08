import { tracks } from '@/lib/tracks';
import { PlayIcon } from './Icons';
type Props = { active: number; playing: boolean; volume: number; onToggle: () => void; onTrack: (index: number) => void; onVolume: (volume: number) => void };
export function RadioPlayer({ active, playing, volume, onToggle, onTrack, onVolume }: Props) {
 return <section aria-label="Music player" className="relative isolate w-full drop-shadow-[0_20px_15px_#000]">
  <div aria-hidden="true" className="absolute -top-5 left-5 right-0 h-7 origin-bottom -skew-x-[38deg] border border-white/35 bg-[repeating-linear-gradient(90deg,#0b0b0b_0px,#0b0b0b_20px,#5e0714_21px,#ff1738_23px,#10090c_26px)] shadow-[inset_0_3px_2px_#aaa]" />
  <div className="relative grid grid-cols-[80px_1fr] gap-3 border-[3px] border-[#4e4e4e] bg-gradient-to-br from-[#333] via-[#101010] to-black p-3 shadow-radio ring-1 ring-black sm:grid-cols-[110px_1fr_1.05fr] sm:gap-3 sm:p-4 xl:grid-cols-[140px_1fr_1.13fr] xl:gap-5 xl:p-5">
   <div aria-hidden="true" className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
   <div className="flex flex-col items-center justify-center gap-3 border-r border-black/70 pr-3">
    <div className="relative flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[conic-gradient(#eee,#454545,#161616,#aaa,#fafafa,#383838,#ddd)] p-[5px] shadow-[3px_4px_8px_#000] sm:h-[91px] sm:w-[91px] xl:h-[112px] xl:w-[112px]">
     <div className="relative h-full w-full rounded-full border-[4px] border-signal bg-gradient-to-br from-[#555] via-[#151515] to-black shadow-[0_0_13px_#ff1537,inset_2px_2px_6px_#000]" style={{ transform: `rotate(${volume * 2.7 - 135}deg)` }}><span className="absolute left-1/2 top-1 h-3 w-1 -translate-x-1/2 rounded-full bg-white shadow-[0_0_5px_white]" /></div>
    </div>
    <label className="w-full text-center text-[9px] font-semibold tracking-[.2em] text-white/70">VOLUME <span className="sr-only">{volume}%</span><input aria-label="Volume" type="range" min="0" max="100" value={volume} onChange={e => onVolume(Number(e.target.value))} className="mt-2 block h-1 w-full cursor-pointer accent-signal" /></label>
   </div>
   <div className="relative flex min-w-0 flex-col justify-center overflow-hidden border-[3px] border-[#333] bg-[#060708] px-2 py-3 text-center shadow-[inset_0_0_20px_#000,0_0_0_1px_#070707,0_1px_0_2px_#888] sm:px-3">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,#ffffff03_4px)]" />
    <span className="font-display text-[11px] leading-none">KIOTTI</span>
    <div className="mt-1 whitespace-nowrap font-display text-[23px] leading-none tracking-[-.04em] text-cream sm:text-[25px] xl:text-[36px]">HARDBODY <span className="text-signal">24/7</span></div>
    <p className="mt-3 truncate text-[9px] font-semibold uppercase tracking-[.14em] xl:text-[11px]">{tracks[active].id} / {tracks[active].title}</p>
    <div aria-hidden="true" className="mt-2 flex h-8 items-end justify-center gap-[2px] border-b border-signal/40">{Array.from({ length: 54 }, (_, i) => <span key={i} className={`min-w-0 flex-1 origin-bottom bg-signal shadow-[0_0_4px_#f00c28] ${playing ? 'motion-safe:animate-equalize' : ''}`} style={{ height: `${15 + ((i * 37 + i * i * 3) % 85)}%`, animationDelay: `${(i % 9) * -110}ms`, animationDuration: `${500 + (i % 7) * 90}ms` }} />)}</div>
   </div>
   <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
    <div role="group" aria-label="Select track" className="grid grid-cols-3 gap-3">{tracks.map((track, index) => <button type="button" key={track.id} aria-label={`Select ${track.title}`} aria-pressed={index === active} onClick={() => onTrack(index)} className={`border-2 py-2 text-base font-bold shadow-[inset_0_0_0_3px_#0008,0_0_0_3px_#222] transition hover:brightness-125 ${index === active ? 'border-[#fa8d99] bg-gradient-to-b from-[#ff354d] to-[#c3001a] shadow-neon' : 'border-[#777] bg-gradient-to-b from-[#222] to-black'}`}>{track.id}</button>)}</div>
    <button type="button" aria-pressed={playing} onClick={onToggle} className="flex min-h-[64px] flex-1 items-center justify-center gap-3 rounded-sm border-2 border-[#ff8999] bg-gradient-to-b from-[#ff1738] via-[#df0825] to-[#a80016] px-3 py-3 font-display text-[26px] tracking-wide shadow-[inset_0_0_0_3px_#820819,0_0_0_4px_#191919,0_4px_10px_#000] transition hover:brightness-125 active:translate-y-px xl:text-[33px]"><PlayIcon playing={playing} className="h-5 w-5" />{playing ? 'PAUSE MUSIC' : 'PLAY MUSIC'}</button>
   </div>
  </div>
 </section>;
}
