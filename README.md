# KIOTTI — HARDBODY 24/7

A complete Next.js App Router / TypeScript homepage, styled with Tailwind CSS. Built from the supplied reference composition with a generated portrait, local fonts, placeholder album covers, and interactive HTML radio controls.

## Run

Requires Node.js 20.9 or later (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

## Structure

- `app/page.tsx`: homepage composition and shared player state.
- `app/layout.tsx`: metadata and locally hosted fonts using `next/font/local`.
- `app/globals.css`: Tailwind directives and base styles; no CSS modules.
- `components/Navbar.tsx`: sticky desktop navigation and accessible mobile menu.
- `components/Backdrop.tsx`: decorative red strokes, city silhouettes, grain, and vertical LISTEN panel.
- `components/TrackList.tsx`: three selectable tracks with active treatment.
- `components/RadioPlayer.tsx`: dimensional radio, volume slider, preset buttons, animated waveform, and play/pause.
- `lib/tracks.ts`: editable track names, artists, and artwork paths.
- `tailwind.config.ts`: colors, fonts, glow shadows, and waveform animation.
- `public/images/`: all image assets, included locally.
- `public/fonts/`: bundled Anton and Barlow Condensed fonts.

## Demo behavior

Play/pause and track-card clicks share one audio element and play the MP3s in `public/music`. Numbered presets select a track without starting playback; if music is already playing, the preset switches files and keeps going. The volume slider sets the audio volume and rotates the dial. When a track ends, the next one starts, and the last track returns to the first. The waveform animates while audio is playing and respects reduced-motion preferences.

Home and Enter the Hub scroll within the page. All other navigation links are intentional `#` placeholders. Mobile navigation closes when a link is selected.

## Design and asset notes

This is an editable recreation, not an exact screenshot reproduction. Desktop uses overlapping layers; tablets and phones stack the portrait, tracks, and player so controls remain usable. The headline uses distressed cream HARDBODY and red 24/7, matching the screenshot. CTA colors follow the written request: outlined Enter the Hub and solid-red Play Music. The frequency badge uses the requested red outline.

The portrait is AI-generated from the supplied visual reference and differs in detail from the original photograph. Replace `public/images/kiotti-couch.png` with an approved transparent production portrait, preferably preserving its 1488 × 1058 aspect ratio. Update the Image dimensions in `app/page.tsx` for a different ratio. The album covers are clearly named SVG placeholders, not official cover art; replace them and update `lib/tracks.ts` when official artwork is available. The background and radio are code-based graphics, not flattened screenshots.

Fonts are bundled so rendering and builds do not require Google Fonts access. Font license files are included in `public/fonts/`. No API keys or environment variables are needed.
