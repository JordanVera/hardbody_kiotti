'use client';
import { useState } from 'react';
import { Chevron } from './Icons';
const links = ['Home', 'Watch', 'Listen', 'Shows', 'Community', 'Shop', 'Work With Us'];
export function Navbar() {
 const [open, setOpen] = useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
  <nav aria-label="Main navigation" className="mx-auto flex h-[70px] max-w-[1600px] items-center justify-between gap-5 px-5 md:px-[4%]">
   <a href="#home" aria-label="Kiotti Hardbody 24/7 home" className="shrink-0 leading-none"><span className="font-display text-[29px] tracking-[-1px]">KIOTTI</span><span className="mt-1 block text-[8px] font-bold tracking-[.25em]">HARDBODY 24/7</span></a>
   <div className="hidden items-center gap-7 text-sm font-semibold lg:flex xl:gap-10">{links.map((label, i) => <a key={label} href={i === 0 ? '#home' : '#'} aria-current={i === 0 ? 'page' : undefined} className={`relative flex items-center gap-2 py-6 transition-colors hover:text-signal ${i === 0 ? 'after:absolute after:bottom-3 after:left-0 after:h-[2px] after:w-full after:bg-signal' : ''}`}>{label}{label === 'Shows' && <Chevron />}</a>)}</div>
   <a href="#" className="ml-auto hidden -skew-x-12 border border-signal bg-signal/10 px-5 py-3 text-sm font-black italic tracking-wider text-white transition hover:bg-signal sm:block lg:ml-0"><span className="block skew-x-12">FREQUENCY WALL</span></a>
   <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center border border-white/20 text-2xl lg:hidden">{open ? '×' : '☰'}</button>
  </nav>
  {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid grid-cols-2 gap-1 border-t border-white/10 bg-black p-5 lg:hidden">{[...links, 'Frequency Wall'].map((label, i) => <a key={label} href={i === 0 ? '#home' : '#'} onClick={() => setOpen(false)} className="p-3 text-lg hover:bg-signal/20">{label}</a>)}</nav>}
 </header>;
}
