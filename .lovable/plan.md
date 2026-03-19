

## Исправление белого экрана при публикации

### Проблема
В `vite.config.ts` установлен `base: '/astana-boutique-style/'` — это путь для GitHub Pages. Когда сайт публикуется на Lovable (домен `astana-boutique-style.lovable.app`), все ресурсы (JS, CSS, картинки) ищутся по пути `/astana-boutique-style/assets/...`, которого не существует на Lovable-хостинге. Результат — белый экран.

Также в `package.json` отсутствует скрипт `build:dev`, что блокирует сборку.

### Решение

**1. Сделать `base` динамическим в `vite.config.ts`**

Использовать переменную окружения `VITE_BASE_PATH` для выбора base:
- На Lovable (по умолчанию): `base: '/'`  
- На GitHub Pages: `base: '/astana-boutique-style/'` (через переменную окружения в GitHub Actions)

```
base: process.env.VITE_BASE_PATH || '/',
```

**2. Обновить GitHub Actions workflow**

Добавить переменную `VITE_BASE_PATH` в шаг сборки:
```yaml
- name: Build
  run: npm run build
  env:
    VITE_BASE_PATH: /astana-boutique-style/
```

**3. Добавить `build:dev` скрипт в `package.json`**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview"
}
```

### Файлы для изменения
- `vite.config.ts` — динамический `base`
- `package.json` — добавить `build:dev`, убрать `tsc` из `build`
- `.github/workflows/deploy.yml` — передать `VITE_BASE_PATH`

### Результат
- Lovable публикация: сайт работает на `astana-boutique-style.lovable.app` с `base: '/'`
- GitHub Pages: сайт работает на `username.github.io/astana-boutique-style/` с `base: '/astana-boutique-style/'`

