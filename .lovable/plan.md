

## Plan: Generate AI Favicon

**Goal**: Use AI image generation to create a luxury-style favicon with a gold letter "A" on a black background, then set it as the site's favicon.

### Steps

1. **Copy AI script** from `knowledge://skill/ai-gateway/scripts/lovable_ai.py` to `/tmp/`
2. **Generate image** using `google/gemini-3.1-flash-image-preview` model with a detailed prompt describing a luxury gold "A" on black background, output to `/mnt/documents/favicon.png`
3. **QA the image** by viewing it
4. **Copy to project** `public/favicon.png`
5. **Update `index.html`** to reference `/favicon.png` with `type="image/png"`

### Technical Details
- Model: `google/gemini-3.1-flash-image-preview` (fast, high quality image generation)
- Prompt: "Generate a square favicon icon, 512x512 pixels. A stylish uppercase letter 'A' in luxurious gold color on a solid black background. The letter should have an elegant serif font style with metallic gold gradient effect. Minimalist luxury boutique aesthetic. No other elements, just the letter on black."
- Output format: PNG
- Final location: `public/favicon.png`

