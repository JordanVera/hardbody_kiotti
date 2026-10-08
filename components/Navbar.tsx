'use client';
import { useState } from 'react';
import { Chevron } from './Icons';
const links = [
  'Home',
  'Watch',
  'Listen',
  'Shows',
  'Community',
  'Shop',
  'Work With Us',
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <a
        href="#"
        className="absolute inset-y-0 right-0 z-10 hidden items-center bg-signal pl-12 pr-6 text-black transition hover:brightness-110 lg:flex [clip-path:polygon(36px_0,100%_0,100%_100%,0_100%)]"
      >
        <span className="font-rocktown inline-block origin-center -rotate-3 text-[24px]">
          FREQUENCY WALL
        </span>
      </a>
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-[70px] max-w-[1600px] items-center justify-between gap-5 px-5 md:px-[4%]"
      >
        <a
          href="#home"
          aria-label="Kiotti Hardbody 24/7 home"
          className="shrink-0 leading-none"
        >
          <span className="font-display text-[29px] tracking-[-1px]">
            KIOTTI
          </span>
          <span className="mt-1 block text-[8px] font-bold tracking-[.25em]">
            HARDBODY 24/7
          </span>
        </a>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm font-semibold lg:flex xl:gap-10">
          {links.map((label, i) => (
            <a
              key={label}
              href={i === 0 ? '#home' : '#'}
              aria-current={i === 0 ? 'page' : undefined}
              className={`relative flex items-center gap-2 py-6 transition-colors hover:text-signal ${i === 0 ? 'after:absolute after:bottom-3 after:left-0 after:h-[2px] after:w-full after:bg-signal' : ''}`}
            >
              {label}
              {label === 'Shows' && <Chevron />}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-2xl lg:hidden"
        >
          {open ? '×' : '☰'}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="grid grid-cols-2 gap-1 border-t border-white/10 bg-black p-5 lg:hidden"
        >
          {[...links, 'Frequency Wall'].map((label, i) => (
            <a
              key={label}
              href={i === 0 ? '#home' : '#'}
              onClick={() => setOpen(false)}
              className="p-3 text-lg hover:bg-signal/20"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
