

## Plan: Add background images to category cards

Currently the category cards are plain colored blocks. We'll generate 4 fashion category images and use them as background images with a dark overlay for text readability.

### Steps

1. **Generate 4 category images** using imagegen:
   - `category-men.jpg` — men's fashion
   - `category-women.jpg` — women's fashion
   - `category-new.jpg` — new collection
   - `category-bestseller.jpg` — bestseller items

2. **Update `CategoriesSection.tsx`**:
   - Import the 4 images
   - Add `image` field to each category object
   - Render each card with the image as a background `<img>` tag (absolute positioned, object-cover)
   - Add a dark gradient overlay (`bg-gradient-to-t from-black/60 to-transparent`) so the white text remains readable
   - Text color becomes white, with hover scale effect on the image for a premium feel

### Result
Each category card will show a full-bleed fashion photo with the category name overlaid at the bottom, matching the luxury aesthetic.

