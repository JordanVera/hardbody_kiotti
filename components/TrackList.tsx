import Image from 'next/image';
import { tracks } from '@/lib/tracks';
import { PlayIcon } from './Icons';
export function TrackList({ active, playing, onSelect }: { active: number; playing: boolean; onSelect: (index: number) => void }) {
 return <section id="tracklist" aria-label="Featured tracks" className="scroll-mt-24"><ol className="space-y-2">{tracks.map((track, index) => <li key={track.id}><button type="button" aria-pressed={active === index} aria-label={`${active === index && playing ? 'Pause' : 'Play'} ${track.title} by ${track.artist}`} onClick={() => onSelect(index)} className={`group relative flex w-full items-center gap-4 border p-2 text-left transition duration-300 ${active === index ? 'border-signal/80 bg-gradient-to-l from-signal/20 to-black shadow-neon' : 'border-transparent border-b-white/15 bg-black/70 hover:border-white/30'}`}>
  {active === index && <span className="absolute -left-px top-2 h-[calc(100%-16px)] w-[2px] bg-signal shadow-[0_0_12px_#f00c28]" />}
  <Image src={track.artwork} alt="" width={66} height={66} className="h-[60px] w-[60px] shrink-0 border border-white/15 object-cover xl:h-[70px] xl:w-[70px]" />
  <span className="min-w-0 flex-1"><span className="block text-[20px] font-bold leading-tight xl:text-[23px]">{track.title}</span><span className="mt-1 block text-xs text-white/65 xl:text-sm">{track.artist}</span></span>
  <PlayIcon playing={active === index && playing} className="mr-2 h-4 w-4 shrink-0" />
 </button></li>)}</ol></section>;
}
