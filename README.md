# Pernikahan Fandi & Mitha

Digital wedding invitation web app — personalized invite codes, RSVP, gallery, gift info, and live countdown.

Built with React 18 and Tailwind CSS, deployed on Vercel.

## Features

- **Personalized invitations** — each guest gets a unique code that customizes the invitation view (bride/groom ordering, name, greeting)
- **Code entry flow** — landing page with 4-character code lookup, redirects to personalized invitation
- **Live countdown** — real-time timer to the wedding date
- **Music player** — auto-play piano instrumental with toggle
- **Schedule & location** — Akad Nikah and Resepsi times with Google Maps link
- **Photo gallery** — 10 photos in responsive grid
- **Gift info** — bank account details with one-click copy
- **RSVP & guestbook** — form with attendance confirmation, live message feed with timestamps
- **Scroll navigation** — sticky side menu jumping to each section
- **Quran verse** — Ar-Rum:21 displayed in Arabic with translation

## Tech Stack

| | |
|---|---|
| **Framework** | React 18 |
| **Routing** | react-router-dom 6 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | AOS, react-transition-group |
| **Icons** | react-icons |
| **Build** | Create React App 5 |
| **Deploy** | Vercel |

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Enter code `ab12` to see the invitation.

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Development server on port 3000 |
| `npm run build` | Production build to `build/` |
| `npm test` | Run tests |

## Deployment

The project is configured for Vercel. Node.js version is set via `.nvmrc` (24.x).

```bash
npm run build
```

Or connect the repo to Vercel for automatic deploys.
