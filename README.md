# AI Without Fear - Landing Page

Founding Readers waitlist site for the book *AI Without Fear* by Carol Trull Pittman.

Static single-file site. No build step, no dependencies.

## Deploy (Vercel)

1. Push this repo to GitHub
2. In Vercel: **Add New Project** > import the repo
3. Framework preset: **Other** (no build command, output directory: root)
4. Deploy, then point `aiwithoutfear.com` at it under Project > Settings > Domains

## Wire the signup form

Signups write to a Google Sheet via Apps Script.

1. Create a Google Sheet with headers: `Timestamp | First Name | Email | Source`
2. Extensions > Apps Script, paste the contents of `apps-script.gs`
3. Deploy > New deployment > **Web app**, execute as *Me*, access *Anyone*
4. Copy the web app URL into `SHEET_ENDPOINT` near the bottom of `index.html`

## Signup source tracking

Append `?src=` tags to the URL to attribute signups by channel:

- Postcard QR: `/?src=postcard`
- Untagged visits log as `direct`

Each signup row records timestamp, first name, email, and source.

## Brand

- Gold: `#D7C300` (RedKnot gold), darkened `#9C8E00` for small text
- Ink: `#141311` on white
- Type: Schibsted Grotesk, Libre Caslon Text (italic Without), Martian Mono
- Page is declared `color-scheme: only light` so mobile auto dark mode cannot invert it
