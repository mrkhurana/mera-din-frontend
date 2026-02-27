'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MoonSignApiResult {
  moon_sign: string
  approximate: boolean
}

interface MoonSignData {
  name: string
  summary: string[]
  sections: {
    emotional: string
    reaction: string
    comfort: string
    relationship: string
  }
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputClass =
  'block w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300 placeholder-stone-400'

const labelClass = 'block text-sm font-medium text-stone-600 mb-1'

// ─── Moon sign data ───────────────────────────────────────────────────────────

const MOON_SIGNS: MoonSignData[] = [
  {
    name: 'Aries',
    summary: [
      'Responds to situations with immediacy and directness.',
      'Processes emotions through action rather than reflection.',
      'Values autonomy and dislikes prolonged emotional standoffs.',
      'Tends to move forward quickly once feelings are expressed.',
    ],
    sections: {
      emotional:
        'Moon in Aries processes feelings rapidly and with intensity. There is a strong impulse to act on emotions as they arise, often before they have been fully examined.',
      reaction:
        'Reactions are fast and direct. Conflict or perceived obstacles typically prompt an immediate, decisive response. Long deliberation is uncommon.',
      comfort:
        'Stability comes from having a sense of forward movement. Periods of inaction or emotional stagnation are particularly uncomfortable for this placement.',
      relationship:
        'Brings honesty and energy to close connections. May need to balance the impulse for immediate resolution against a partner\'s need for a slower emotional pace.',
    },
  },
  {
    name: 'Taurus',
    summary: [
      'Maintains a steady, patient emotional baseline.',
      'Seeks comfort in familiar environments and reliable routines.',
      'Takes time before responding to emotional disruptions.',
      'Places high value on consistency in relationships.',
    ],
    sections: {
      emotional:
        'Moon in Taurus produces a stable emotional foundation. Feelings build slowly and tend to persist. Sudden upheaval is unsettling and requires time to process.',
      reaction:
        'Reactions are measured and deliberate. There is a strong reluctance to change course under pressure, combined with a preference for waiting until a situation is fully clear.',
      comfort:
        'Physical surroundings, familiar spaces, and predictable schedules provide genuine security. Material stability is experienced as emotional stability.',
      relationship:
        'Brings patience and dependability. Loyalty is strong but so is the need for reciprocal consistency. Sudden changes in relational tone can be destabilising.',
    },
  },
  {
    name: 'Gemini',
    summary: [
      'Processes emotions through language and mental activity.',
      'Emotional states shift frequently and fluidly.',
      'Needs variety to stay engaged and settled.',
      'Communicates openly about inner experience.',
    ],
    sections: {
      emotional:
        'Moon in Gemini links feelings closely to thought. Emotions are often examined, narrated, and rationalised as they occur. Sitting with an unresolved feeling for long is uncomfortable.',
      reaction:
        'Responses tend to be verbal and quick. Discussing a situation is the primary means of working through it. Multiple perspectives are considered simultaneously.',
      comfort:
        'Mental stimulation, conversation, and change of environment restore a sense of ease. Monotony is more destabilising than outward conflict.',
      relationship:
        'Brings wit, adaptability, and a genuine interest in communication. Emotional depth develops through shared intellectual engagement.',
    },
  },
  {
    name: 'Cancer',
    summary: [
      'Highly attuned to emotional atmospheres and subtle shifts.',
      'Nourishes others as a primary mode of connection.',
      'Memory and personal history shape emotional responses strongly.',
      'Home and family environments carry deep significance.',
    ],
    sections: {
      emotional:
        'Moon in Cancer operates through deep feeling and strong intuition. Emotional sensitivity is high, and past experiences remain vivid and influential.',
      reaction:
        'Tends to withdraw before responding. Initial reactions are protective. Once safety is established, expression becomes warm and open.',
      comfort:
        'Domestic settings, close family, and familiar traditions provide the greatest sense of security. Disruption to these foundations can be keenly felt.',
      relationship:
        'Invests deeply and remembers gestures with care. Mutual trust and emotional consistency are the foundation of meaningful connection.',
    },
  },
  {
    name: 'Leo',
    summary: [
      'Expresses emotions with warmth and visible intensity.',
      'Finds satisfaction in creative or personal recognition.',
      'Generous within relationships and expects reciprocal acknowledgement.',
      'Pride is closely linked to emotional wellbeing.',
    ],
    sections: {
      emotional:
        'Moon in Leo experiences emotions on a large scale. Joy, affection, and hurt alike tend to manifest visibly. Suppression is difficult and feels unnatural.',
      reaction:
        'Responds to slights and praise with equal clarity. When the ego is engaged, reactions can be dramatic. When stable, responses are magnanimous.',
      comfort:
        'Creative expression, personal recognition, and environments that allow self-presentation all sustain inner equilibrium. Being overlooked is genuinely uncomfortable.',
      relationship:
        'Brings loyalty, generosity, and enthusiasm. Relationships thrive when both parties feel celebrated and neither feels diminished.',
    },
  },
  {
    name: 'Virgo',
    summary: [
      'Processes emotions through analysis and practical application.',
      'Finds comfort in being useful and maintaining order.',
      'Critiques both self and environment as a mode of care.',
      'Emotional expression tends to be restrained and precise.',
    ],
    sections: {
      emotional:
        'Moon in Virgo internalises feelings before expressing them. There is a strong tendency to assess and categorise emotions rather than simply experience them.',
      reaction:
        'Responses are careful and constructive. The impulse is to identify what went wrong and how to correct it, rather than to express raw feeling.',
      comfort:
        'A well-ordered environment, productive routines, and a sense of accomplishment contribute to emotional steadiness. Disorder and inefficiency create underlying tension.',
      relationship:
        'Demonstrates care through attention to detail and acts of service. May need to express warmth more directly rather than implying it through practical assistance.',
    },
  },
  {
    name: 'Libra',
    summary: [
      'Oriented toward harmony and mutual fairness in all interactions.',
      'Processes emotions through social exchange and dialogue.',
      'Discomfort with unchecked conflict or imbalance.',
      'Weighs options carefully before committing emotionally.',
    ],
    sections: {
      emotional:
        'Moon in Libra seeks emotional equilibrium. Feelings are influenced heavily by the relational environment — peace in relationships produces inner peace.',
      reaction:
        'Responses are diplomatic and measured. There is a preference for finding middle ground rather than taking a firm, potentially divisive stance.',
      comfort:
        'Aesthetic environments, social balance, and fair treatment contribute to a sense of ease. Persistent conflict or inequity is more draining than most other conditions.',
      relationship:
        'Prioritises partnership and compromise. Connections are most satisfying when both people feel equally heard and respected.',
    },
  },
  {
    name: 'Scorpio',
    summary: [
      'Experiences emotions with unusual depth and intensity.',
      'Privacy and control over personal disclosure are important.',
      'Invests in relationships with full commitment or not at all.',
      'Perceptive of hidden dynamics and unstated motivations.',
    ],
    sections: {
      emotional:
        'Moon in Scorpio does not experience feelings lightly. Emotions are powerful, often private, and remain present for longer than they appear on the surface.',
      reaction:
        'Initial responses are typically restrained. Observation precedes action. When a boundary is crossed, the response tends to be measured but decisive.',
      comfort:
        'Depth, honesty, and a sense of control over personal information provide security. Environments that feel exposed or superficial are draining.',
      relationship:
        'Committed and perceptive. Expects authenticity and reciprocates with singular focus. Betrayal of trust is difficult to move past.',
    },
  },
  {
    name: 'Sagittarius',
    summary: [
      'Maintains a naturally optimistic and expansive emotional outlook.',
      'Requires freedom of movement and thought to feel settled.',
      'Processes difficult feelings through philosophical framing.',
      'Boredom and restriction are among the most destabilising conditions.',
    ],
    sections: {
      emotional:
        'Moon in Sagittarius relates to feelings in broad terms. There is a tendency to move away from difficult emotions quickly, reframing them within a wider context.',
      reaction:
        'Responses are candid, often humorous, and seldom prolonged. The impulse is to restore lightness and forward momentum.',
      comfort:
        'Open horizons, new environments, and the freedom to explore ideas or places maintain inner balance. Extended obligation without variety becomes taxing.',
      relationship:
        'Brings honesty, enthusiasm, and a non-possessive affection. Relationships that allow independent growth alongside shared experience tend to be the most sustaining.',
    },
  },
  {
    name: 'Capricorn',
    summary: [
      'Maintains controlled, disciplined emotional expression.',
      'Achievement and structure provide genuine psychological stability.',
      'Tends to manage feelings through duty and practical focus.',
      'Trustworthy and consistent across long-term commitments.',
    ],
    sections: {
      emotional:
        'Moon in Capricorn keeps emotional expression contained. Feelings exist fully but are typically processed internally before any outward response is made.',
      reaction:
        'Reactions are controlled and goal-oriented. The instinct is to assess what is required and proceed efficiently rather than to dwell in emotional experience.',
      comfort:
        'A clear sense of purpose, measurable progress, and respect from others all contribute to inner stability. Loss of status or direction is significantly unsettling.',
      relationship:
        'Offers reliability, long-term loyalty, and practical support. Vulnerability develops slowly and in response to proven trustworthiness.',
    },
  },
  {
    name: 'Aquarius',
    summary: [
      'Processes emotions through ideas, principles, and collective concerns.',
      'Maintains an independent inner life regardless of relational closeness.',
      'Values fairness and originality in emotional exchange.',
      'Can appear detached while feeling things genuinely.',
    ],
    sections: {
      emotional:
        'Moon in Aquarius tends to intellectualise feelings. Emotions are observed with a degree of distance, which can aid perspective but may limit immediate intimacy.',
      reaction:
        'Responses are rational and often unexpected. The impulse is to understand a situation fully before engaging emotionally. Reactivity is rare.',
      comfort:
        'Access to ideas, a circle of like-minded people, and personal freedom sustain inner equilibrium. Environments that feel rigid or exclusionary are particularly uncomfortable.',
      relationship:
        'Brings loyalty and originality. Most at ease in partnerships that respect individuality without requiring emotional homogeneity.',
    },
  },
  {
    name: 'Pisces',
    summary: [
      'Absorbs the emotional atmosphere of environments and those nearby.',
      'Highly empathetic with naturally permeable emotional boundaries.',
      'Finds restoration in solitude, creativity, and quiet.',
      'Imagination plays a significant role in emotional life.',
    ],
    sections: {
      emotional:
        'Moon in Pisces experiences emotion in a fluid, all-encompassing way. The line between personal feeling and the emotional state of others can be unclear.',
      reaction:
        'Initial reactions are often absorptive rather than assertive. Processing happens internally, and responses may be delayed while full clarity is sought.',
      comfort:
        'Solitary creative time, connection to nature, and gentle sensory environments allow for emotional restoration. Harsh or chaotic surroundings are particularly draining.',
      relationship:
        'Brings deep empathy and imaginative investment. Benefits from partners who help maintain clear boundaries without demanding emotional curtailment.',
    },
  },
]

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    question: 'What is the difference between a Sun sign and a Moon sign?',
    answer:
      'The Sun sign is determined by the position of the Sun at your date of birth and changes roughly once a month. It is what most horoscope columns refer to. The Moon sign is determined by the position of the Moon and changes approximately every two and a half days, making it more dependent on the precise date and time of birth. While the Sun sign is often associated with identity and outward character, the Moon sign relates to emotional patterns, instinctive responses, and inner life.',
  },
  {
    question: 'Why does the time of birth matter for calculating a Moon sign?',
    answer:
      'The Moon moves through the zodiac faster than any other major celestial body — completing a full cycle in approximately 27 days. This means it can shift from one sign to the next within a 24-hour period. Without an accurate time of birth, a calculation performed on a day when the Moon is transitioning between signs may assign the wrong sign with confidence, or will need to return an approximation. The more precise the birth time, the more reliable the result.',
  },
  {
    question: 'Can your Moon sign change over the course of your life?',
    answer:
      'No. In traditional Western and Vedic astrological frameworks, the Moon sign refers to the position of the Moon at the moment of birth and remains fixed. It does not change. What may shift is an individual\'s relationship to or awareness of the traits associated with that sign, often described in terms of personal maturity or changing life circumstances. Transits — the current position of the Moon — are separate from the natal Moon sign.',
  },
  {
    question: 'What if I do not know my time of birth?',
    answer:
      'If your time of birth is unknown, it is still possible to calculate a probable Moon sign, provided the Moon was not transitioning between signs on your date of birth. In that case, the result will be marked as approximate. If the Moon was near a sign boundary on your birth date, no confident result can be given without additional information. Birth times can sometimes be obtained from hospital records, birth certificates, or family records.',
  },
  {
    question: 'Is the Moon sign more important than the Sun sign?',
    answer:
      'Neither is objectively more important. They describe different dimensions of an individual. The Sun sign broadly relates to identity, purpose, and outward character. The Moon sign relates to emotional life, instinctive responses, and psychological patterns. In practice, some people identify more strongly with one than the other, often depending on which describes their inner experience more accurately. Both are individual factors within a larger birth chart.',
  },
]

// ─── Moon Sign Card ───────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-stone-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoonSignCard({
  sign,
  expanded,
  onToggle,
}: {
  sign: MoonSignData
  expanded: boolean
  onToggle: () => void
}) {
  const cardId = `moon-${sign.name.toLowerCase()}`

  return (
    <div
      id={cardId}
      className="bg-white border border-stone-200 rounded-xl overflow-hidden"
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`${cardId}-body`}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex-1">
          <h3 className="text-sm font-bold text-stone-800 tracking-wide uppercase">
            Moon in {sign.name}
          </h3>
          {!expanded && (
            <p className="mt-1 text-xs text-stone-500 leading-relaxed line-clamp-2">
              {sign.summary[0]}
            </p>
          )}
        </div>
        <ChevronIcon open={expanded} />
      </button>

      {/* Expandable body */}
      {expanded && (
        <div
          id={`${cardId}-body`}
          className="px-5 pb-5 border-t border-stone-100"
        >
          {/* Summary bullets */}
          <ul className="mt-4 space-y-1.5 list-none">
            {sign.summary.map((line, i) => (
              <li key={i} className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>

          {/* Subsections */}
          <div className="mt-5 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
                Emotional Pattern
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {sign.sections.emotional}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
                Reaction Style
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {sign.sections.reaction}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
                Comfort Zone
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {sign.sections.comfort}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
                Relationship Tone
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {sign.sections.relationship}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: { question: string; answer: string }
  open: boolean
  onToggle: () => void
  index: number
}) {
  const id = `faq-${index}`
  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-stone-800 leading-relaxed">
          {item.question}
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <p
          id={`${id}-answer`}
          className="pb-4 text-sm text-stone-600 leading-relaxed"
        >
          {item.answer}
        </p>
      )}
    </div>
  )
}

// ─── Moon Sign Finder Form ────────────────────────────────────────────────────

function MoonSignFinder() {
  const [dob, setDob] = useState('')
  const [tob, setTob] = useState('')
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<MoonSignApiResult | null>(null)

  const [fieldErrors, setFieldErrors] = useState<{
    dob?: string
    city?: string
  }>({})

  function validate() {
    const errs: { dob?: string; city?: string } = {}
    if (!dob) errs.dob = 'Date of birth is required.'
    if (!city.trim() || city.trim().length < 3) errs.city = 'Place of birth must be at least 3 characters.'
    return errs
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setResult(null)

    const errs = validate()
    setFieldErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
      if (!apiBaseUrl) throw new Error('API base URL is not configured.')

      const body: Record<string, string> = {
        dob,
        place_of_birth: city.trim(),
      }
      if (tob) body.tob = tob

      const response = await fetch(`${apiBaseUrl}/api/v1/moon-sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        let message = 'Unable to calculate Moon sign. Please try again.'
        try {
          const errData = await response.json()
          if (errData?.detail) message = errData.detail
        } catch {
          // use default
        }
        throw new Error(message)
      }

      const data: MoonSignApiResult = await response.json()
      setResult(data)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Unable to calculate Moon sign. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setDob('')
    setTob('')
    setCity('')
    setResult(null)
    setError('')
    setFieldErrors({})
  }

  const isFormValid = !!dob && city.trim().length >= 3

  return (
    <div>
      {!result ? (
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            {/* Date of Birth */}
            <div>
              <label htmlFor="finder-dob" className={labelClass}>
                Date of Birth
              </label>
              <input
                id="finder-dob"
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value)
                  setFieldErrors((p) => ({ ...p, dob: undefined }))
                }}
                max={new Date().toISOString().split('T')[0]}
                className={`${inputClass} uppercase ${
                  fieldErrors.dob
                    ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                    : ''
                }`}
              />
              {fieldErrors.dob && (
                <p className="mt-1.5 text-xs text-red-500">{fieldErrors.dob}</p>
              )}
            </div>

            {/* Time of Birth — optional */}
            <div>
              <label htmlFor="finder-tob" className={labelClass}>
                Time of Birth{' '}
                <span className="font-normal text-stone-400">(optional)</span>
              </label>
              <input
                id="finder-tob"
                type="time"
                value={tob}
                onChange={(e) => setTob(e.target.value)}
                className={inputClass}
              />
              <p className="mt-1.5 text-xs text-stone-400">
                Adding a birth time improves accuracy when the Moon was near a sign boundary.
              </p>
            </div>

            {/* Place of Birth */}
            <div>
              <label htmlFor="finder-city" className={labelClass}>
                Place of Birth
              </label>
              <input
                id="finder-city"
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value)
                  setFieldErrors((p) => ({ ...p, city: undefined }))
                }}
                placeholder="City"
                autoComplete="off"
                className={`${inputClass} ${fieldErrors.city ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}`}
              />
              {fieldErrors.city && (
                <p className="mt-1.5 text-xs text-red-500">{fieldErrors.city}</p>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-5 p-3 border border-red-200 bg-red-50 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !isFormValid}
            className="w-full mt-6 px-4 py-3 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
          >
            {loading ? 'Calculating...' : 'Find My Moon Sign'}
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          {/* Result card */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">
              Your Moon Sign
            </p>
            <p className="text-3xl font-bold text-stone-900 tracking-tight">
              Moon in {result.moon_sign}
            </p>
            {result.approximate && (
              <p className="mt-3 text-xs text-stone-500 border border-stone-200 bg-white rounded-md px-3 py-2 inline-block">
                Calculated without exact birth time — result may be approximate.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full text-sm text-stone-400 hover:text-stone-700 underline underline-offset-2 transition-colors text-center pt-1"
          >
            Calculate again
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function MoonSignsPage() {
  const [expandedSigns, setExpandedSigns] = useState<Set<string>>(new Set())
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set())

  function toggleSign(name: string) {
    setExpandedSigns((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  function toggleFaq(index: number) {
    setOpenFaqs((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="w-full max-w-3xl self-start">

      {/* ── 1. Intro Section ───────────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="intro-heading">
        <h1
          id="intro-heading"
          className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-6"
        >
          Understanding Your Moon Sign
        </h1>

        <div className="space-y-4 text-base text-stone-700 leading-relaxed max-w-2xl">
          <p>
            In astrology, the Moon sign refers to the zodiac sign the Moon occupied at the moment of your birth. Unlike the Sun sign, which remains in the same sign for approximately a month, the Moon moves through a sign roughly every two and a half days. This faster cycle means that two people born on the same day can have different Moon signs if they were born at different times.
          </p>
          <p>
            The Moon sign is generally associated with the emotional dimension of a person — how they process feelings, what makes them feel secure, how they instinctively react to stress or change, and what kind of environment allows them to feel settled. It tends to describe the inner life rather than the outer presentation.
          </p>
          <p>
            Calculating a Moon sign requires at minimum a date of birth and a place of birth. An accurate birth time further refines the result, particularly when the Moon was changing signs around the time of birth. Without a birth time, a result can still be given if the Moon remained in a single sign throughout the entire day.
          </p>
          <p>
            Each of the 12 zodiac signs carries a different set of qualities when the Moon is placed there. These are consistent patterns described within the astrological tradition, not predictions about individual outcomes. The profiles below are intended to provide clear, factual descriptions of the broad patterns associated with each placement.
          </p>
        </div>
      </section>

      {/* ── 2. Moon Sign Finder ────────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="finder-heading">
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
          <h2
            id="finder-heading"
            className="text-xl font-bold text-stone-900 mb-1"
          >
            Find Your Moon Sign
          </h2>
          <p className="text-sm text-stone-500 mb-6">
            Enter your birth details to identify your Moon sign.
          </p>
          <MoonSignFinder />
        </div>
      </section>

      {/* ── 3. 12 Moon Signs Grid ──────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="signs-heading">
        <h2
          id="signs-heading"
          className="text-2xl font-bold text-stone-900 mb-2"
        >
          The 12 Moon Signs
        </h2>
        <p className="text-sm text-stone-500 mb-6 max-w-xl">
          Select any sign to expand its full profile. Each entry covers emotional pattern, reaction style, comfort zone, and relationship tone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MOON_SIGNS.map((sign) => (
            <MoonSignCard
              key={sign.name}
              sign={sign}
              expanded={expandedSigns.has(sign.name)}
              onToggle={() => toggleSign(sign.name)}
            />
          ))}
        </div>
      </section>

      {/* ── 4. Connection Section ──────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="connection-heading">
        <h2
          id="connection-heading"
          className="text-2xl font-bold text-stone-900 mb-6"
        >
          How the Moon Sign Connects to Other Readings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Daily Alignment */}
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
              Daily Alignment
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The Daily Alignment reading calculates how the current lunar position compares to your natal Moon sign. The Moon transits through signs continuously, and each transit produces a different relationship with the sign it occupied at your birth. The alignment score on the home page reflects this relationship for today&apos;s date.
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors"
              >
                Check today&apos;s alignment
              </Link>
            </div>
          </div>

          {/* Compatibility */}
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
              Compatibility
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The Compatibility Finder compares the Moon placements of two individuals alongside other chart factors. Moon sign comparison forms a central part of traditional compatibility analysis because of its association with emotional temperament and instinctive relational behaviour. Signs that share elemental or modal qualities frequently show stronger resonance.
            </p>
            <div className="mt-4">
              <Link
                href="/compatibility"
                className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors"
              >
                Go to Compatibility Finder
              </Link>
            </div>
          </div>

          {/* Zodiac Overview */}
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-3">
              Zodiac Overview
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The Zodiac Overview explains the structural framework behind all sign placements — including elements, modalities, and the tropical vs sidereal distinction. It provides the foundational reference for understanding how Moon signs and compatibility scores are derived.
            </p>
            <div className="mt-4">
              <Link
                href="/zodiac"
                className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors"
              >
                Read Zodiac Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ Section ────────────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="faq-heading">
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-stone-900 mb-6"
        >
          Frequently Asked Questions
        </h2>

        <div className="bg-white border border-stone-200 rounded-xl px-5 divide-y divide-stone-100">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              open={openFaqs.has(i)}
              onToggle={() => toggleFaq(i)}
            />
          ))}
        </div>
      </section>

    </div>
  )
}
