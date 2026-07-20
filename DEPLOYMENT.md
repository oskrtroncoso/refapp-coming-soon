# RefApp deployment guide

This project is a static Vite website designed for deployment at:

- `https://refapp-tech.com`
- `https://www.refapp-tech.com`

The current landing page does not require a database or application server.

## Project structure

```text
/
├── index.html
├── package.json
├── vercel.json
├── DEPLOYMENT.md
├── src/
│   ├── styles.css
│   └── main.js
└── public/
    ├── refapp-logo.svg
    ├── favicon.svg
    └── og-refapp.svg
```

## Requirements

Install Node.js 20 or newer.

```bash
node --version
npm --version
```

## Run locally

From the project root:

```bash
npm install
npm run dev
```

Vite will print a local URL, typically `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The deployable files are generated in `dist/`.

## Deploy with Vercel from GitHub

1. Create a Git repository containing all project files.
2. Commit and push it to GitHub.
3. In Vercel, select **Add New → Project**.
4. Import the GitHub repository.
5. Use:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Select **Deploy**.

## Deploy with the Vercel CLI

```bash
npm install --global vercel
vercel login
vercel
vercel --prod
```

## Connect refapp-tech.com

In the Vercel project:

1. Open **Settings → Domains**.
2. Add `refapp-tech.com`.
3. Add `www.refapp-tech.com`.
4. Configure the DNS records exactly as Vercel shows them at your registrar.
5. Set `refapp-tech.com` as the primary domain.
6. Redirect `www.refapp-tech.com` to `refapp-tech.com`.

Vercel commonly uses:

```text
Root domain:
Type: A
Name: @
Value: 76.76.21.21

www:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Use the values displayed by Vercel because its recommended records may change.

HTTPS is provisioned automatically after DNS verification.

## Logo assets

The site reads local assets from:

- `public/refapp-logo.svg`
- `public/favicon.svg`
- `public/og-refapp.svg`

The SVG files included in this package are functional reconstructed assets based on the blue/cyan RefApp visual language. Replace them with the final official artwork using the same filenames to preserve every reference.

## Social sharing image

The current metadata references:

```text
https://refapp-tech.com/og-refapp.svg
```

Some social platforms have limited support for SVG previews. For maximum compatibility, export a `1200 × 630` PNG as:

```text
public/og-refapp.png
```

Then update the Open Graph and Twitter image tags in `index.html`.

## Early-access form

The current form only displays a browser-side confirmation. It does not store or send submissions.

Before collecting real data, connect it to a Vercel serverless function, CRM, mailing provider, or another approved backend. Do not expose secret API keys in `src/main.js`.

## Final checklist

```bash
npm install
npm run build
npm run preview
```

Then verify:

- Mobile, tablet and desktop layouts
- Navigation and keyboard focus
- Reduced-motion behavior
- Logo and favicon
- Canonical URL and social metadata
- HTTPS
- Root-domain and `www` redirect
- Real backend integration before collecting contact information
