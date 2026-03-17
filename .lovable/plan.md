

## Plan: Add horizontal padding and reduce product card sizes

### Problem
The product grid has minimal horizontal padding from the screen edges, and the cards are too large.

### Changes to `src/components/ProductsGrid.tsx`

1. **Add horizontal padding** — wrap the grid in `px-4 md:px-8 lg:px-16` or increase the container's `max-width` constraint. Since the container already has `1.5rem` padding, we'll add `max-w-5xl mx-auto` to the grid itself to constrain it and create more whitespace on the sides.

2. **Reduce card sizes** — change the grid from `grid-cols-2 md:grid-cols-3` to `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` so cards are smaller on larger screens. Also reduce gap sizes slightly.

Alternatively, a simpler approach: keep 3 columns but add `max-w-4xl mx-auto` to the grid container to make everything smaller with more horizontal breathing room.

### Implementation
- Line 67: Change grid div to add `max-w-5xl mx-auto` to constrain width
- Line 62: Add `px-6 md:px-12` to the section for extra horizontal padding
- This creates visible margins on both sides while making the cards proportionally smaller

