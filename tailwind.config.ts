import type { Config } from 'tailwindcss';
export default {
 content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
 theme: { extend: {
  colors: { signal: '#f00c28', cream: '#f5f0df' },
  fontFamily: { display: ['var(--font-anton)', 'Impact', 'sans-serif'], sans: ['var(--font-barlow)', 'Arial', 'sans-serif'] },
  boxShadow: { neon: '0 0 25px #f00c2840, inset 0 0 24px #f00c2820', radio: '0 25px 45px #000, 0 8px 35px #ed002c40' },
  keyframes: { equalize: { '0%,100%': { transform: 'scaleY(.35)' }, '50%': { transform: 'scaleY(1)' } } },
  animation: { equalize: 'equalize 750ms ease-in-out infinite alternate' }
 } }, plugins: []
} satisfies Config;
