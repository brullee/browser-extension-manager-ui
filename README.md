# Frontend Mentor - Browser extensions manager UI solution

This is my solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

![Dark theme](./docs/Dark%20theme.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/browser-extension-manager-ui-S75qFplrIF)
- Live Site URL: [Vercel](https://browser-extension-manager-delta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- The `<template>` element is really useful for rendering repeated UI from data. Instead of building HTML strings with concatenation or repetitive `createElement` calls, you clone the template's content for each item — it's cleaner and the browser never renders the template itself.

- Swapping an entire stylesheet for theming (enabling/disabling a `<link>` element) is a cleaner approach than toggling a class on `<body>`. The light and dark styles stay completely separate and don't interfere with each other.

- Getting CSS-only toggle switches right takes more care than expected. The spacing, sizing, and transition timing all interact in ways that are hard to predict, and small values matter a lot for it to feel right.

- Filtering is handled entirely through CSS classes rather than re-rendering the list. Each filter button adds a `hide--extension` class to cards that don't match, and removes it from ones that do. It's a much lighter approach than rebuilding the DOM on every filter change.

- Accessibility attributes like `role="switch"` and `aria-checked` need to be kept in sync with visual state manually in vanilla JS — it's something frameworks handle silently that you have to be deliberate about when writing your own DOM code. Learning to think in terms of the accessibility tree alongside the visual DOM was a useful shift.

### Continued development

- I'd like to add persistence so that toggled/removed extensions survive a page refresh, whether through `localStorage` or a more structured state approach.

- The filtering logic resets if you remove an extension while a filter is active, which is a rough edge worth smoothing out.
