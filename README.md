# The Wall Story — MERN Landing Page

A full MERN stack landing page for **The Wall Story** — curated interiors business.

## 📂 Project Structure

```
wall-story/
├── backend/                    # Express + MongoDB API
│   ├── config/db.js
│   ├── models/                 # Service, Testimonial, GalleryItem, Contact
│   ├── routes/                 # services, testimonials, gallery, contact
│   ├── server.js
│   ├── seed.js                 # populates DB with initial data
│   ├── package.json
│   └── .env.example
│
└── frontend/                   # React (Vite)
    ├── public/
    │   └── hero-video.mp4      # ← ADD YOUR VIDEO HERE
    ├── src/
    │   ├── components/         # Navbar, Hero, About, Testimonials, Gallery, etc.
    │   ├── styles/             # One CSS file per component
    │   ├── data/               # constants + mock fallback data
    │   ├── services/api.js     # axios calls to backend
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🚀 Setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env          # edit MONGO_URI if needed
npm run seed                  # populate DB with services, testimonials, gallery
npm run dev                   # runs on http://localhost:5000
```

**Requires:** Node 18+ and MongoDB running locally (or set `MONGO_URI` to Atlas connection string).

> Note: If MongoDB is not connected, the server still runs and the frontend falls back to mock data automatically.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev                   # runs on http://localhost:5173
```

Vite proxies `/api/*` calls to the backend automatically.

### 3. Add your hero video

Drop your `hero-video.mp4` into `frontend/public/`. It's already wired up in `Hero.jsx`.
If the file is missing, a graceful gradient fallback appears automatically.

## 🎨 What's included

**Sections (top to bottom):**
1. Glass-effect floating navbar
2. Hero — full-screen video + glass overlay card
3. Auto-scrolling service marquee
4. Services — 10 numbered glass cards (fetched from DB)
5. **About Us** — story, values, stats
6. Process — 4 steps with dotted connector
7. Why Us — 3 feature cards
8. **Testimonials carousel** — autoplay, arrows, dots (from DB)
9. **Gallery carousel** — horizontal swipe + lightbox (from DB)
10. Contact — form saves to DB, phone CTA
11. Footer
12. **WhatsApp floating button** — pulses, auto-tooltip

**Design:**
- Montserrat throughout
- White background with grid pattern
- Glass-morphism (backdrop-filter blur) on all cards
- Terracotta + gold accents
- Ornate flourish dividers matching the logo
- Fully responsive (mobile, tablet, desktop)
- Reduced-motion respected

## 🔧 Customization

- **Phone / WhatsApp number:** edit `frontend/src/data/constants.js`
- **Services / testimonials / gallery:** edit `backend/seed.js` and re-run `npm run seed`
- **Colors:** edit CSS variables in `frontend/src/styles/index.css` (`:root`)
- **Copy:** edit component files directly (`About.jsx`, `WhyUs.jsx`, `Process.jsx`)

## 📡 API Endpoints

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| GET    | `/api/services`      | List all active services       |
| GET    | `/api/testimonials`  | List all testimonials          |
| GET    | `/api/gallery`       | List all gallery items         |
| POST   | `/api/contact`       | Submit contact form (rate-limited) |
| GET    | `/api/contact`       | List submissions (admin)       |

## 🌐 Deployment

**Backend:** Render / Railway / Fly.io — set `MONGO_URI` and `CLIENT_URL` env vars.
**Frontend:** Vercel / Netlify — set `VITE_API_URL` env var, or update the Vite proxy for production.

## ☎️ Contact info in code

- Phone: `097674 79000` — edit in `frontend/src/data/constants.js`
- WhatsApp: opens `wa.me/919767479000` — same file
