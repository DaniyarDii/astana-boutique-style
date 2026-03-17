

## Plan: Update social media links across the site

### Problem
All WhatsApp, Telegram, and Instagram links use placeholder URLs. Need to replace with real ones.

### New URLs
- **WhatsApp**: `https://wa.me/77023817322`
- **Telegram**: `https://t.me/DaniyarDii`
- **Instagram**: `https://www.instagram.com`

### Files to update (4 files, ~10 replacements)

1. **`src/components/HeroSection.tsx`** — Update all 3 button hrefs (WhatsApp, Telegram, Instagram)
2. **`src/components/CTASection.tsx`** — Update WhatsApp and Telegram hrefs
3. **`src/components/Footer.tsx`** — Update all 3 social links (Instagram, Telegram, WhatsApp)
4. **`src/components/CheckoutModal.tsx`** — Update WhatsApp and Telegram URLs in `window.open()` calls

All links already have `target="_blank"` so they will open in new tabs.

