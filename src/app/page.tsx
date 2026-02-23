'use client'

import { FormEvent, useState } from 'react'
import { StarRating } from '@/components/StarRating'

interface ApiResponse {
  date: string
  money: number
  work: number
  study: number
  health: number
  relationships: number
  luck: number
}

export default function Home() {
  const [dob, setDob] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<ApiResponse | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setResult(null)

    if (!dob) {
      setError('Please enter your date of birth')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/today', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dob }),
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
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-4">
            <span className="text-6xl">✨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent mb-3">
            Mera Din
          </h1>
          <p className="text-xl text-transparent bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text font-semibold">
            Kaisa Jayega?
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-6">
            <label
              htmlFor="dob"
              className="block text-sm font-semibold text-slate-300 mb-3"
            >
              Your Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all hover:border-slate-600"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-500/20 border-l-4 border-red-500 rounded-lg text-red-300 text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 disabled:from-amber-500 disabled:to-yellow-500 disabled:opacity-50 text-slate-950 font-bold rounded-xl transition-all disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-amber-400/50 transform hover:scale-105 active:scale-95"
          >
            {loading ? '✨ Finding...' : '🌟 See My Day'}
          </button>
        </form>

        {/* Results */}
        {result && (
          <div className="fade-in bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/80 border-2 border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <div className="mb-6 text-center">
              <p className="text-slate-400 text-sm font-semibold mb-2">📅</p>
              <p className="text-slate-300 font-semibold">
                {new Date(result.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            <div className="space-y-0 mb-8 bg-slate-800/40 rounded-xl p-4">
              <StarRating label="Money" rating={result.money} />
              <StarRating label="Work" rating={result.work} />
              <StarRating label="Study" rating={result.study} />
              <StarRating label="Health" rating={result.health} />
              <StarRating label="Relationships" rating={result.relationships} />
              <StarRating label="Luck" rating={result.luck} />
            </div>

            <button
              onClick={() => {
                const message = `Mera Din Kaisa Jayega? 📊\n\n💰 Money: ${'★'.repeat(Math.floor(result.money))}${'☆'.repeat(5 - Math.floor(result.money))}\n💼 Work: ${'★'.repeat(Math.floor(result.work))}${'☆'.repeat(5 - Math.floor(result.work))}\n📚 Study: ${'★'.repeat(Math.floor(result.study))}${'☆'.repeat(5 - Math.floor(result.study))}\n💪 Health: ${'★'.repeat(Math.floor(result.health))}${'☆'.repeat(5 - Math.floor(result.health))}\n❤️ Relationships: ${'★'.repeat(Math.floor(result.relationships))}${'☆'.repeat(5 - Math.floor(result.relationships))}\n🍀 Luck: ${'★'.repeat(Math.floor(result.luck))}${'☆'.repeat(5 - Math.floor(result.luck))}\n\nCheck yours on meradinkaisajayega.online`
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>📱 Share on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
