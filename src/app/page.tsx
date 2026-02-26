'use client'

import { FormEvent, useState } from 'react'
import { AlignmentStars } from '@/components/StarRating'

interface ApiResponse {
  date: string
  name: string
  moon_sign: string
  alignment_score: number
  context_lines: string[]
}

interface FormState {
  name: string
  dob: string
  tob: string
  place_of_birth: string
}

function formatDate(dateStr: string): string {
  // Parse as local date to avoid UTC offset shifting the day
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const inputClass =
  'block w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300 placeholder-stone-400'

const labelClass = 'block text-sm font-medium text-stone-600 mb-1'

export default function Home() {
  const [form, setForm] = useState<FormState>({
    name: '',
    dob: '',
    tob: '',
    place_of_birth: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<ApiResponse | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setResult(null)

    const { name, dob, tob, place_of_birth } = form
    if (!name.trim() || !dob || !tob || !place_of_birth.trim()) {
      setError('All fields are required.')
      return
    }
    if (name.trim().length < 3) {
      setError('Name must be at least 3 characters.')
      return
    }

    setLoading(true)

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
      if (!apiBaseUrl) {
        throw new Error('API base URL is not configured')
      }
      const response = await fetch(`${apiBaseUrl}/api/v1/today`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          dob,
          tob,
          place_of_birth: place_of_birth.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch results')
      }

      const data: ApiResponse = await response.json()
      setResult(data)
    } catch (_err) {
      setError('Unable to fetch your results. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold text-stone-500">
            {result ? "Your day at a glance" : 'Fill in the details to find out how your day will go!'}
          </p>
        </div>

        {/* Form */}
        {!result && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="given-name"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="dob" className={labelClass}>
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  max={new Date().toISOString().split('T')[0]}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="tob" className={labelClass}>
                  Time of Birth
                </label>
                <input
                  id="tob"
                  name="tob"
                  type="time"
                  value={form.tob}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="place_of_birth" className={labelClass}>
                  Place of Birth
                </label>
                <input
                  id="place_of_birth"
                  name="place_of_birth"
                  type="text"
                  value={form.place_of_birth}
                  onChange={handleChange}
                  placeholder="City"
                  autoComplete="address-level2"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="mt-5 p-3 border border-red-200 bg-red-50 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 px-4 py-3 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
            >
              {loading ? 'Calculating...' : 'Check Today\'s Alignment'}
            </button>
          </form>
        )}

        {/* Results */}
        {result && (
          <div>
            {/* Date */}
            <p className="text-xs text-stone-500 mb-4 uppercase tracking-widest font-semibold">
              {formatDate(result.date)}
            </p>

            {/* Greeting */}
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Hello, {result.name}
            </h2>

            {/* Moon sign */}
            <p className="text-sm text-stone-500 mb-8">
              Moon sign:{' '}
              <span className="text-yellow-700 font-semibold">{result.moon_sign}</span>
            </p>

            {/* Alignment score */}
            <div className="border-2 border-stone-300 bg-white rounded-lg p-5 mb-6">
              <p className="text-xs font-bold text-stone-700 uppercase tracking-widest mb-4">
                Today&apos;s Alignment
              </p>
              <AlignmentStars score={result.alignment_score} />
            </div>

            {/* Context lines */}
            <div className="space-y-3 mb-8">
              {result.context_lines.map((line, i) => (
                <p key={i} className="text-base text-stone-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Reset */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                type="button"
                onClick={() => {
                  const stars = '★'.repeat(result.alignment_score) + '☆'.repeat(10 - result.alignment_score)
                  const lines = result.context_lines.join('\n\n')
                  const message = `\n\n${result.name} — ${result.moon_sign}\nAlignment: ${stars} ${result.alignment_score}/10\n\n${lines}\n\nCheck yours at meradinkaisajayega.online`
                  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
                }}
                className="w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium rounded-lg transition-colors"
              >
                Share on WhatsApp
              </button>
              <button
                type="button"
                onClick={() => {
                  setResult(null)
                  setError('')
                }}
                className="text-sm text-stone-400 hover:text-stone-700 underline underline-offset-2 transition-colors text-center"
              >
                Check again
              </button>
            </div>
          </div>
        )}

    </div>
  )
}
