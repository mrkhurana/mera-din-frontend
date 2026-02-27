'use client'

import { FormEvent, useRef, useState } from 'react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface PersonInput {
  name: string
  dob: string
  tob: string
  place_of_birth: string
}

interface CompatibilityResult {
  compatibility_score: number
  summary_lines: string[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputClass =
  'block w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300 placeholder-stone-400'

const labelClass = 'block text-sm font-medium text-stone-600 mb-1'

function isPersonValid(p: PersonInput): boolean {
  return p.name.trim().length >= 3 && !!p.dob && !!p.tob && p.place_of_birth.trim().length >= 3
}

function emptyPerson(): PersonInput {
  return { name: '', dob: '', tob: '', place_of_birth: '' }
}

// ─── Half-star component ──────────────────────────────────────────────────────

const STAR_PATH =
  'M12 2l2.4 6.8H22l-6.2 4.5 2.4 6.8L12 15.6l-6.2 4.5 2.4-6.8L2 8.8h7.6z'

type FillType = 'full' | 'half' | 'empty'

function StarSvg({ fill, index }: { fill: FillType; index: number }) {
  const gradientId = `half-${index}`
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
      {fill === 'half' && (
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="50%" stopColor="#92400e" />
            <stop offset="50%" stopColor="#d6d3d1" />
          </linearGradient>
        </defs>
      )}
      <path
        d={STAR_PATH}
        fill={
          fill === 'full'
            ? '#92400e'
            : fill === 'half'
            ? `url(#${gradientId})`
            : '#d6d3d1'
        }
      />
    </svg>
  )
}

function CompatibilityStars({ score }: { score: number }) {
  // Map 0–100 → 0–10 in 0.5 increments
  const stars = Math.round(score / 10) // e.g. 50 → 5, 75 → 8 (rounded)

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="flex gap-0.5"
        role="img"
        aria-label={`${stars} out of 10 stars`}
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const pos = i + 1
          let fill: FillType
          if (pos <= Math.floor(stars)) fill = 'full'
          else if (pos === Math.ceil(stars) && stars % 1 !== 0) fill = 'half'
          else fill = 'empty'
          return <StarSvg key={i} fill={fill} index={i} />
        })}
      </div>
      <p className="text-4xl font-bold text-stone-900 tracking-tight">
        {score}{' '}
        <span className="text-stone-400 font-normal text-2xl">/ 100</span>
      </p>
    </div>
  )
}

// ─── Person form section ──────────────────────────────────────────────────────

interface PersonFormProps {
  label: string
  prefix: string
  data: PersonInput
  onChange: (field: keyof PersonInput, value: string) => void
  fieldErrors: Partial<Record<keyof PersonInput, string>>
}

function PersonForm({ label, prefix, data, onChange, fieldErrors }: PersonFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-bold text-stone-700 uppercase tracking-widest border-b border-stone-200 pb-2">
        {label}
      </h2>

      {/* Name */}
      <div>
        <label htmlFor={`${prefix}-name`} className={labelClass}>
          Name
        </label>
        <input
          id={`${prefix}-name`}
          type="text"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Full name"
          autoComplete="off"
          className={`${inputClass} ${fieldErrors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
        />
        {fieldErrors.name && (
          <p className="mt-1.5 text-xs text-red-500">{fieldErrors.name}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label htmlFor={`${prefix}-dob`} className={labelClass}>
          Date of Birth
        </label>
        <input
          id={`${prefix}-dob`}
          type="date"
          value={data.dob}
          onChange={(e) => onChange('dob', e.target.value)}
          max={new Date().toISOString().split('T')[0]}
          className={`${inputClass} uppercase ${fieldErrors.dob ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
        />
        {fieldErrors.dob && (
          <p className="mt-1.5 text-xs text-red-500">{fieldErrors.dob}</p>
        )}
      </div>

      {/* Time of Birth */}
      <div>
        <label htmlFor={`${prefix}-tob`} className={labelClass}>
          Time of Birth
        </label>
        <input
          id={`${prefix}-tob`}
          type="time"
          value={data.tob}
          onChange={(e) => onChange('tob', e.target.value)}
          className={`${inputClass} ${fieldErrors.tob ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
        />
        {fieldErrors.tob && (
          <p className="mt-1.5 text-xs text-red-500">{fieldErrors.tob}</p>
        )}
      </div>

      {/* Place of Birth */}
      <div>
        <label htmlFor={`${prefix}-city`} className={labelClass}>
          Place of Birth
        </label>
        <input
          id={`${prefix}-city`}
          type="text"
          value={data.place_of_birth}
          onChange={(e) => onChange('place_of_birth', e.target.value)}
          placeholder="City"
          autoComplete="off"
          className={`${inputClass} ${fieldErrors.place_of_birth ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
        />
        {fieldErrors.place_of_birth && (
          <p className="mt-1.5 text-xs text-red-500">{fieldErrors.place_of_birth}</p>
        )}
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CompatibilityPage() {
  const [personA, setPersonA] = useState<PersonInput>(emptyPerson())
  const [personB, setPersonB] = useState<PersonInput>(emptyPerson())

  const [loading, setLoading] = useState(false)
  const [globalError, setGlobalError] = useState('')
  const [result, setResult] = useState<CompatibilityResult | null>(null)

  const [errorsA, setErrorsA] = useState<Partial<Record<keyof PersonInput, string>>>({})
  const [errorsB, setErrorsB] = useState<Partial<Record<keyof PersonInput, string>>>({})

  const resultRef = useRef<HTMLDivElement>(null)

  function updatePerson(
    setter: React.Dispatch<React.SetStateAction<PersonInput>>,
    field: keyof PersonInput,
    value: string
  ) {
    setter((prev) => ({ ...prev, [field]: value }))
  }

  function validatePerson(p: PersonInput): Partial<Record<keyof PersonInput, string>> {
    const errs: Partial<Record<keyof PersonInput, string>> = {}
    if (!p.name.trim() || p.name.trim().length < 3)
      errs.name = 'Name must be at least 3 characters.'
    if (!p.dob) errs.dob = 'Date of birth is required.'
    if (!p.tob) errs.tob = 'Time of birth is required.'
    if (!p.place_of_birth.trim() || p.place_of_birth.trim().length < 3)
      errs.place_of_birth = 'Place of birth must be at least 3 characters.'
    return errs
  }

  const isFormValid = isPersonValid(personA) && isPersonValid(personB)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGlobalError('')

    const eA = validatePerson(personA)
    const eB = validatePerson(personB)
    setErrorsA(eA)
    setErrorsB(eB)

    if (Object.keys(eA).length > 0 || Object.keys(eB).length > 0) return

    setLoading(true)
    setResult(null)

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
      if (!apiBaseUrl) throw new Error('API base URL is not configured')

      const response = await fetch(`${apiBaseUrl}/api/v1/compatibility`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          person_a: {
            name: personA.name.trim(),
            dob: personA.dob,
            tob: personA.tob,
            place_of_birth: personA.place_of_birth,
          },
          person_b: {
            name: personB.name.trim(),
            dob: personB.dob,
            tob: personB.tob,
            place_of_birth: personB.place_of_birth,
          },
        }),
      })

      if (!response.ok) {
        let message = 'Unable to fetch compatibility results. Please try again.'
        try {
          const errData = await response.json()
          if (errData?.detail) message = errData.detail
        } catch {
          // use default message
        }
        throw new Error(message)
      }

      const data: CompatibilityResult = await response.json()
      setResult(data)

      // Smooth scroll to result
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } catch (err) {
      setGlobalError(
        err instanceof Error
          ? err.message
          : 'Unable to fetch compatibility results. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setPersonA(emptyPerson())
    setPersonB(emptyPerson())
    setResult(null)
    setGlobalError('')
    setErrorsA({})
    setErrorsB({})
  }

  return (
    <div className="w-full max-w-xl">
      {/* Page heading */}
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold text-stone-500">
          {result ? 'Compatibility Result' : 'Enter birth details for both individuals'}
        </p>
      </div>

      {/* ── Form ── */}
      {!result && (
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-8">
            {/* Person A */}
            <PersonForm
              label="Your Details"
              prefix="a"
              data={personA}
              onChange={(f, v) => updatePerson(setPersonA, f, v)}
              fieldErrors={errorsA}
            />

            {/* Separator */}
            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-stone-300" />
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                &amp;
              </span>
              <div className="flex-1 border-t border-stone-300" />
            </div>

            {/* Person B */}
            <PersonForm
              label="Partner Details"
              prefix="b"
              data={personB}
              onChange={(f, v) => updatePerson(setPersonB, f, v)}
              fieldErrors={errorsB}
            />
          </div>

          {globalError && (
            <div className="mt-5 p-3 border border-red-200 bg-red-50 rounded-lg text-red-600 text-sm">
              {globalError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !isFormValid}
            className="w-full mt-6 px-4 py-3 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
          >
            {loading ? 'Calculating...' : 'Check Compatibility'}
          </button>
        </form>
      )}

      {/* ── Result ── */}
      {result && (
        <div ref={resultRef} className="space-y-6">
          {/* Score card */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm text-center">
            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-5">
              Compatibility Score
            </p>
            <CompatibilityStars score={result.compatibility_score} />
          </div>

          {/* Names */}
          <p className="text-center text-sm text-stone-500">
            {personA.name} &amp; {personB.name}
          </p>

          {/* Summary lines */}
          {result.summary_lines.length > 0 && (
            <div className="space-y-3">
              {result.summary_lines.map((line, i) => (
                <p key={i} className="text-base text-stone-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                const summaryText = result.summary_lines.join('\n\n')
                const message = [
                  `💫 Compatibility Reading`,
                  `${personA.name} & ${personB.name}`,
                  `❤️ Score: ${result.compatibility_score} / 100`,
                  summaryText,
                  `✨ Check yours at meradinkaisajayega.online/compatibility`,
                ].join('\n\n')
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(message)}`,
                  '_blank'
                )
              }}
              className="w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium rounded-lg transition-colors"
            >
              Share on WhatsApp
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-stone-400 hover:text-stone-700 underline underline-offset-2 transition-colors text-center"
            >
              Check again
            </button>
          </div>
        </div>
      )}

      {/* ── Internal links ── */}
      <div className="mt-10 pt-6 border-t border-stone-200">
        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Explore more</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors">
            Daily Alignment
          </Link>
          <Link href="/moon-signs" className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors">
            Moon Signs Guide
          </Link>
          <Link href="/zodiac" className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors">
            Zodiac Overview
          </Link>
        </div>
      </div>
    </div>
  )
}
