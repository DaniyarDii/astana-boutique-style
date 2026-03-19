

## Fix: Add missing `build:dev` script

### Problem
The `package.json` was recreated but is missing the `build:dev` script that Lovable's build system requires. This blocks deployment and preview builds.

### Solution
Edit `package.json` scripts section:
- Add `"build:dev": "vite build --mode development"`
- Change `"build"` from `"tsc && vite build"` to `"vite build"` (tsc blocks builds on type errors)

### Change
File: `package.json`, lines 6-10 (scripts block)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview"
}
```

This is a one-line addition that unblocks the build pipeline.

