# A History of the University of Sussex

*From Plate Glass to the Present.*

A static website telling the history of the **University of Sussex**, the first
of the plate-glass universities of the 1960s — from its 1961 Royal Charter and
Basil Spence's Falmer campus to the present day.

Part of the [History of Universities](https://github.com/history-of-universities)
project. **Not** an official publication of the University of Sussex (yet!).

## The site

Plain HTML and CSS, one small vanilla-JS nav script, no framework, no build step.

| Page | File |
|------|------|
| Home | `index.html` |
| The Founding (1961) | `founding.html` |
| The Concept of the University | `concept.html` |
| Early History (1961–68) | `early-history.html` |
| The Campus (Falmer) | `campus.html` |
| People | `people.html` |
| The Arms (1962) | `arms.html` |
| Timeline | `timeline.html` |
| Sources | `bibliography.html` |
| About | `about.html` |

The Founding, Concept, Early History, Campus, People, and Arms pages are
grouped under a **Sussex** dropdown in the navigation (`assets/nav.js` handles
the dropdown behaviour).

Shared styling lives in `assets/css/site.css`; navigation in `assets/nav.js`;
the click-to-zoom image lightbox in `assets/lightbox.js`. The stylesheet and
scripts are linked with a cache-buster (`?v=N`); bump `N` when they change.

## Images

Optimised, web-sized images live in `assets/images/web/` (48 images) and are the
only images committed to the repo. Source originals are **not** kept in the repo
(they were moved out after optimisation). To add an image, optimise it into
`assets/images/web/` (e.g. with `sips -s format jpeg -Z 1800 src --out web/name.jpg`)
and reference it from a figure:

```html
<figure class="fig fig-right">   <!-- or fig-left / fig-wide -->
  <img src="assets/images/web/name.jpg" alt="…">
  <figcaption><b>Title.</b> Caption.</figcaption>
</figure>
```

Figures float and text wraps around them; clicking opens the image full-size in
a modal, with the caption. This is the standard image pattern for the site.

## Branding

The site takes its colours from the university's founding heraldry, granted by
the College of Arms on 15 March 1962:

> *Argent, on a chevron per pale azure and gules six martlets or, between in
> chief two Saxon crowns and in base a dolphin naiant sable.*

| Colour | Heraldic | Hex | Role |
|--------|----------|-----|------|
| Blue | azure | `#0a3d91` | primary |
| Red | gules | `#b71234` | accent |
| Gold | or | `#c2982f` | highlight |
| Silver/white | argent | `#f3f1ea` | page |
| Black | sable | `#1a1c20` | ink |

The aesthetic is **plate glass**: a light, daylit theme with a glass curtain-wall
hero motif, echoing Spence's Falmer architecture. (The structural template is
adapted from the Critical Code Studies reading sites.)

## Deployment

Intended for GitHub Pages from the `main` branch (root). `.nojekyll` is present
so the `assets/` directory is published verbatim.

## Status

Early scaffold (v0.1.0). Structure, branding, home page, and heraldry page are
drafted; the founding, campus, timeline, and people chapters are in preparation.
