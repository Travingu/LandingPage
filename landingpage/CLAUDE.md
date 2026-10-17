# Landing Page: Night Sky

`travingn.dev` is a single, normally scrolling page (native scrollbar: no scroll-jacking, pinning or snapping) over a fixed twilight sky. **The sky is real:** the stars and constellation lines are the actual sky over Seattle at the moment of the visit, looking south. A wordless, looping timeline in the center of the top bar (`SkyTimeline.tsx`) turns the sky to other hours. Sections in order: hero (name, summary) → About (photo, bio, socials) → Highlights (one featured item plus three cards) → Skills (one card, three columns, each skill with where it was used) → "Elsewhere on travingn.dev" (large serif rows set straight on the sky, linking to Projects and Games; the only section not on paper, on purpose) → footer. **This page defines the theme the other sites are being moved to.** Treat its tokens as the source of truth.

## History (why it's simple)

From 2026-10-16 this page was a scroll-driven 3D hike: a GSAP-scrubbed camera through forest, lake, peaks and aspens, with per-layer depth-of-field blur. The owner dropped it for **performance**. Blurring and re-scaling many full-screen SVG layers every frame was too heavy for real devices.

Rules that follow from that:
- Don't reintroduce per-frame JS rendering, scroll-scrubbed timelines, or CSS `filter`s on elements that change size or position while scrolling.
- Blur only static things. The sky's haze is the one blurred element, and it's painted once.
- Keep motion compositor-only: `opacity` and `transform`.

## Theme tokens (`src/index.css`)

- **Colors:**
  - `paper` #f4f0e6 (cards, light text on the sky), `ink` #15211a (text on paper), `ink-muted` #4b584f, `night` #0f1a2e (page base, footer, button hover).
  - `ember` #e3762b is the **only** accent: arrows, link underlines, focus rings. Never use it for body text on paper. (It was called `blaze` during the hiking theme.)
- **Sky gradient** (in `NightSky.tsx`): #0f1a2e → #1b2a47 → #3a4d6e → #6b7a8f, top to bottom, fixed to the viewport.
- **Type:** Cormorant Garamond 500 for display (`font-display`, a soft, airy, "dreamy" serif; it runs small, so display sizes are one step up and use no negative tracking) and Inter 400/500/600 for body (`font-sans`). Both are loaded from Google Fonts in `index.html`.
  - Ramp: h1 `text-6xl sm:text-8xl`, h2 `text-5xl`, card title `text-4xl`, lead `text-lg leading-8`, body `text-base leading-7`, small `text-sm leading-6`, label `text-xs uppercase tracking-wider font-medium`.
- **Shape:** one radius (`rounded-md`), one elevation (`shadow-card`), `border-ink/15` hairlines on paper.
- **Spacing:** Tailwind's 4px scale, in multiples of 8. Content sits in `mx-auto max-w-5xl px-4 sm:px-8`, and the fixed `TopBar` uses the same container so edges line up.
- **Contrast rule:** text placed directly on the sky is solid `paper` (no opacity below the hero, since the bottom of the gradient is light), and everything else sits on a `paper` card.

## Structure

- **The real sky:**
  - `src/data/sky.ts` holds the star and constellation data, derived from d3-celestial (BSD-3; the licence is in `src/data/sky-data-LICENSE.txt` and must stay with the data). It has the 921 stars of magnitude 4.5 or brighter (J2000 RA/Dec) and all constellation lines, with Latin names and label positions. It was generated once by a script, so don't hand-edit it.
  - `src/lib/sky.ts`: `projectSky(date, w, h)` converts RA/Dec to altitude/azimuth for Seattle (47.61°N, 122.33°W) via sidereal time, then projects stereographically around a south-facing view (az 180°, alt 40°, ±75° across the long side). It returns the stars, constellation polylines broken at the horizon or frame edge, rank-1 labels, and the list of constellations that are `up`. Sanity-checked: October 9 pm shows Pegasus, Aquila and Cetus; January 9 pm shows Orion, Taurus, Gemini and Auriga.
  - `src/lib/useNow.ts` refreshes the time every minute, so the sky turns slowly while the page is open.
  - `src/components/NightSky.tsx` is a fixed `-z-10` backdrop: the gradient, four static `blur-3xl` haze banks, then one **static SVG** with the constellation lines, faint stars and labels. Only stars brighter than magnitude 2 (~50) are HTML spans that twinkle (`.star` / `@keyframes twinkle` in `index.css`), so the animation stays compositor-only. Labels that would land behind the hero text are dropped.
  - `src/components/SkyTimeline.tsx`: a draggable strip of hour ticks (major every 6 h, ember dot = now) under a fixed center line, with no visible text by design. It loops: the offset wraps within ±12 h and the strip repeats every 24 h, so the jump is invisible. Releasing within 10 minutes of now, double-clicking, or Home returns to now; arrow keys step 10 minutes; it's a `role="slider"` with the Seattle time as `aria-valuetext`. The strip moves by `transform` only. The offset lives in `App.tsx`; the sky reads a `useDeferredValue` copy so dragging stays responsive. This is the one place the sky redraws in response to input, and it's driven by the drag, never by scroll. In `TopBar` it sits between monogram and nav from `md` up, and on a second centered row below that.
  - To pin the sky to a meaningful date instead of "now", pass a fixed `Date` instead of `useNow()` in `App.tsx`.
- `src/data/highlights.ts`: Highlights content. Facts are copied from the portfolio site's data (`Website/website/src/data`), so keep the two in sync and don't add claims that aren't there.
- `src/data/skills.ts`: Skills content, from the same portfolio data plus TypeScript (this site). Every skill names the project or job it was used in; don't add one without that.
- The Portfolio and Blog sites were taken offline on 2026-10-16 (owner's call), since Highlights and Skills now cover the portfolio's content. Don't link them.
- `src/components/Reveal.tsx`: sections fade up once as they enter the viewport (IntersectionObserver plus a CSS transition), also off under reduced motion.
- `src/data/site.ts`: destinations and socials. **Edit links here only.** The top bar nav and the cards both read from it.
- `Hero`, `About`, `Skills`, `Destinations`, `SocialLinks`, `TopBar`, `Footer` are plain presentational components.
- Photos: use the resized, EXIF-stripped `public/about-1280.jpg`, never the original iPhone files. `portrait.jpg` and `about.jpg` are unused originals.

## Open items

- No résumé link yet (recruiters look for one first).
- The OG/link-preview image (`public/og-image.png`) still shows the old pre-retheme page.
- The Games and Projects sites the cards link to are mostly "Coming soon", and the blog has no posts.

## To do

The list of changes to make the page feel less AI-made is in `todo.md`.
