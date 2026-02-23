# Mera Din Kaisa Jayega - Frontend

A minimal, mobile-first Next.js frontend for predicting how your day will be.

## Features

- **Mobile-first design** - Works perfectly on all devices
- **Single-page application** - Fast and lightweight
- **Dark theme** - Easy on the eyes
- **Star ratings** - Visual feedback with ★ symbols
- **Client-side form handling** - No server-side processing needed
- **Zero tracking** - No cookies, localStorage, or analytics

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

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

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

If you need to point to a different API endpoint, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

Then update the fetch URL in `src/app/page.tsx`.

## API Integration

The frontend is configured to use your backend API at `http://localhost:8000`:

- **Endpoint**: `POST http://localhost:8000/api/v1/today`
- **Request**: `{ "dob": "YYYY-MM-DD" }`
- **Response**:
  ```json
  {
    "date": "YYYY-MM-DD",
    "money": 3.5,
    "work": 4,
    "study": 2.5,
    "health": 5,
    "relationships": 3,
    "luck": 4.5
  }
  ```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with form and results
│   └── globals.css      # Tailwind styles
└── components/
    └── StarRating.tsx   # Star rating display component
```

## Performance

- **Minimal bundle size** - No unnecessary dependencies
- **Fast load times** - Optimized images and code splitting
- **Mobile optimized** - Touch-friendly interface
- **Zero JavaScript runtime** - Uses Next.js static optimization

## License

MIT
