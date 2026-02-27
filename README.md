# Mera Din Kaisa Jayega — Frontend

Mobile-first Next.js frontend for [meradinkaisajayega.online](https://meradinkaisajayega.online) — enter your birth details and get a personal cosmic alignment score for today.

## Features

- **Mobile-first design** — responsive and lightweight
- **Star rating display** — visual 10-point alignment score
- **WhatsApp sharing** — share your result in one tap
- **SEO-ready** — sitemap, robots.txt, Open Graph, and favicon all configured
- **Vercel Analytics** — privacy-friendly usage insights

## Tech Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — utility-first styling
- **TypeScript** — fully typed

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file and set your backend API URL:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
```

## API Integration

- **Endpoint**: `POST /api/v1/today`
- **Request body**:
  ```json
  {
    "name": "string",
    "dob": "YYYY-MM-DD",
    "tob": "HH:MM",
    "place_of_birth": "City"
  }
  ```
- **Response**:
  ```json
  {
    "date": "YYYY-MM-DD",
    "name": "string",
    "moon_sign": "string",
    "alignment_score": 7,
    "context_lines": ["string", "string"]
  }
  ```

## Project Structure

```
src/
├── app/
│   ├── favicon.ico        # Favicon (served by Next.js App Router)
│   ├── layout.tsx         # Root layout with metadata & OG tags
│   ├── page.tsx           # Main page — form + results
│   ├── globals.css        # Tailwind base styles
│   ├── robots.ts          # robots.txt generation
│   └── sitemap.ts         # sitemap.xml generation
└── components/
    ├── Header.tsx         # Centered brand header with slide-in nav drawer
    └── StarRating.tsx     # 10-star alignment score component
```

## Deployment

Deployed on [Vercel](https://vercel.com). Connect your GitHub repo for automatic deployments on push.

## License

MIT
