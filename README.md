# The Harini Issue — Birthday Magazine Website

A clean Next.js + Tailwind website designed as an editorial birthday magazine with scrapbook layouts and a tiny Y2K touch.

## Run locally

```bash
npm install
npm run build
npm run dev
```

Open `http://localhost:3000`.

## Where to edit text

Open:

```txt
app/page.tsx
```

At the top of the file, edit these arrays:

- `magazine`
- `coverLines`
- `memoryEras`
- `loveList`
- `awards`
- `interviews`
- `messages`

## Where to add photos

Put your photos inside:

```txt
public/photos
```

The website already expects names like:

```txt
cover.jpg
photo-01.jpg
photo-02.jpg
photo-03.jpg
...
photo-36.jpg
era-1.jpg
era-2.jpg
message-1.jpg
back-cover.jpg
```

You can rename your real photos to match these names.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Harini birthday magazine"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Deploy on Vercel

1. Go to Vercel.
2. Click New Project.
3. Import your GitHub repository.
4. Keep Framework Preset as Next.js.
5. Click Deploy.

## Important

Do not upload `node_modules` or `.next` to GitHub. They are already ignored in `.gitignore`.
