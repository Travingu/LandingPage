# To do: make it feel less AI-made

The design system is consistent; what reads as generated is the template structure and generic copy. Remaining ideas, roughly by impact (the live sky and the top-bar timeline are done):

- [ ] **Show real artifacts.** A photo of the Micromouse robot in the featured card, a PyMiDio clip or screenshot of a transcribed piano roll, a Trade Desk screenshot. One real photo beats any styling change.
- [ ] **Rewrite the copy in the owner's voice.** The hero summary and the first sentence of the About bio (`About.tsx`) repeat each other word for word; rewrite one. Replace filler like "on a trail whenever the weather allows" with specifics (which trail, what's on the piano, why embedded systems). Highlights (`src/data/highlights.ts`) should say what Travis did and what was hard, e.g. one real failure traced at Boeing, not a list of test methods. Only the owner can supply these facts; don't invent them.
- [ ] **Break the card-grid sameness.**
  - [ ] Highlights: an editorial list (dates in a narrow left column, title and text on the right, hairline dividers) instead of three identical cards. Keep a card only for the featured item.
  - [ ] "Elsewhere on travingn.dev" still repeats the top nav (now Projects and Games, set on the sky instead of cards), and Games is all "Coming soon". Cut it, or drop Games until it has content. (Games dropped 2026-10-17; with one row left, cutting the section is now the open question.)
  - [ ] Fewer arrows: they appear on highlight links and every destination row, all nudging right on hover. Keep them in one place.
- [ ] **Smaller tells.**
  - [ ] Cormorant Garamond + Inter is a very common generated pairing; consider e.g. Fraunces, Newsreader or Instrument Serif with a less default sans.
  - [ ] Every section fades up on scroll (`Reveal`). Drop it or keep it on one section.
  - [ ] Tag pills ("C", "Circuitry") add little; cut them or fold the tech into the meta line.
  - [ ] The "TN" monogram square is generic; plain name text or a small constellation-style mark would feel more personal.
- [ ] **Sky follow-ups (optional).**
  - [ ] Daytime: dragging the timeline to midday still shows stars on the night gradient. Fading stars and warming the gradient by sun altitude would make the timeline feel real.
  - [ ] A "jump to" a meaningful date (e.g. the night Micromouse started); needs a date from the owner.
  - [ ] If visitors don't discover the wordless timeline, a single small wiggle of the strip on first load would hint that it drags, without adding text.
