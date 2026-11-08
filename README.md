# Wok World

Run locally with Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check the production build, run `npm run build`, then `npm start`.

## Deploy to Vercel

Import the repository in Vercel and select the directory containing `package.json` as the project root. Use the Next.js preset and its default build settings. The project selects Node.js 22 through `package.json`. [Vercel’s Next.js guide](https://vercel.com/docs/frameworks/full-stack/nextjs)

For a local directory without a Git remote, run `npx vercel` from this directory to create a preview deployment. [Vercel CLI deployment guide](https://vercel.com/docs/cli/deploy)

Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in Project Settings → Environment Variables before deploying. Use the publishable key. The footer shows the privacy policy and terms when Supabase returns valid links for the `wokworld` restaurant. [Vercel environment variables](https://vercel.com/docs/environment-variables)

After deploying, open the homepage and `/reservation` on the preview URL. Check the PT/EN switch, the booking form, and the footer links.
