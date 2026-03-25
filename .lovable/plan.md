

## Деплой на Cloudflare Pages

Cloudflare Pages даёт бесплатный поддомен `*.pages.dev` + CDN + SSL. Нужно обновить GitHub Actions workflow.

### Что меняем

**Файл:** `.github/workflows/deploy.yml`
- Заменяем деплой на GitHub Pages на деплой через **Cloudflare Pages**
- Используем `cloudflare/wrangler-action` для публикации папки `dist`
- Убираем `VITE_BASE_PATH` (Cloudflare Pages работает от корня `/`)

**Файл:** `vite.config.ts`  
- Можно оставить как есть (base по умолчанию `/`)

### Что нужно от вас

В настройках GitHub репозитория (Settings → Secrets) добавить два секрета:
1. **`CLOUDFLARE_API_TOKEN`** — API-токен из Cloudflare Dashboard (с правами на Pages)
2. **`CLOUDFLARE_ACCOUNT_ID`** — ID аккаунта Cloudflare

### Новый workflow

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install --legacy-peer-deps
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=astana-style
```

Результат: сайт будет доступен по адресу **astana-style.pages.dev**.

### Техническая деталь
Также нужно исправить текущую ошибку сборки — пакет `lovable-tagger` не найден. Обернём импорт в try/catch в `vite.config.ts`.

