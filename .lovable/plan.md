

## Plan: Single column product grid on mobile

### Change in `src/components/ProductsGrid.tsx`

Line 67: Change `grid-cols-2` to `grid-cols-1` so products display one per row on mobile.

```
grid-cols-1 md:grid-cols-3 lg:grid-cols-4
```

