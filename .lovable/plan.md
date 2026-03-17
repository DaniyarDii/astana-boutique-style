

## Plan: Redesign product cards

### Changes to `src/components/ProductsGrid.tsx`

1. **Reduce image aspect ratio** from `aspect-[3/4]` to `aspect-square` for more compact cards

2. **Redesign card layout** — below the image, show a row with:
   - Left side: product name + price
   - Right side: "Add to cart" button (shopping bag icon)

3. **Add to cart functionality**: Import `useCart` and `toast`, clicking the button adds the item directly (default size M, qty 1) with a toast confirmation. Clicking the image/name still opens the product modal.

4. **Grid stays the same** but with `gap-y-8` instead of `gap-y-10/14` for tighter spacing

### Result
More compact cards with a quick "add to cart" button on each card, improving conversion while keeping the premium look.

