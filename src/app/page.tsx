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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent mb-2">
            Mera Din
          </h1>
          <p className="text-slate-300 font-medium text-lg mb-1">
            Kaisa Jayega?
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-8\">
            <label
              htmlFor="dob"
              className="block text-base font-bold text-slate-100 mb-2"
            >
              When were you born?
            </label>
            <p className="text-xs text-slate-400 mb-4">We use your birthdate to predict your day</p>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300\"></div>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="relative w-full px-5 py-4 bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 hover:border-slate-600 rounded-2xl text-white font-medium focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40 transition-all duration-300 shadow-xl hover:shadow-amber-400/20 cursor-pointer"
                max={new Date().toISOString().split('T')[0]}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl pointer-events-none text-slate-400">📅</span>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border-l-4 border-red-500 rounded-lg text-red-300 text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 mt-6 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 disabled:from-amber-500 disabled:to-yellow-500 disabled:opacity-50 text-slate-950 font-bold rounded-xl transition-all disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-amber-400/50 transform hover:scale-105 active:scale-95"
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
              <StarRating label="Luck" rating={result.luck} />
              <StarRating label="Relationships" rating={result.relationships} />
            </div>

            <button
              onClick={() => {
                const message = `Kaise rahega, aaj ka din? 📊\n\n💰 Money: ${'★'.repeat(Math.floor(result.money))}${'☆'.repeat(5 - Math.floor(result.money))}\n💼 Work: ${'★'.repeat(Math.floor(result.work))}${'☆'.repeat(5 - Math.floor(result.work))}\n📚 Study: ${'★'.repeat(Math.floor(result.study))}${'☆'.repeat(5 - Math.floor(result.study))}\n💪 Health: ${'★'.repeat(Math.floor(result.health))}${'☆'.repeat(5 - Math.floor(result.health))}\n❤️ Relationships: ${'★'.repeat(Math.floor(result.relationships))}${'☆'.repeat(5 - Math.floor(result.relationships))}\n🍀 Luck: ${'★'.repeat(Math.floor(result.luck))}${'☆'.repeat(5 - Math.floor(result.luck))}\n\nCheck yours on meradinkaisajayega.online`
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
