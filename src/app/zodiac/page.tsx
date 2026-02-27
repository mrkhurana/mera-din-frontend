'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ZodiacSign {
  name: string
  degrees: string
  element: 'Fire' | 'Earth' | 'Air' | 'Water'
  modality: 'Cardinal' | 'Fixed' | 'Mutable'
  planet: string
  theme: string
  elemental: string
  strength: string
  shadow: string
}

interface FaqItem {
  question: string
  answer: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: 'Aries',
    degrees: '0°–30°',
    element: 'Fire',
    modality: 'Cardinal',
    planet: 'Mars',
    theme:
      'Aries occupies the first segment of the zodiac and is associated with initiation, directness, and independent action. It marks the traditional beginning of the astrological year.',
    elemental:
      'As a Fire sign, Aries is associated with energy, impulse, and forward momentum. The Fire quality here is expressed as the spark that begins a process rather than the sustained flame that maintains it.',
    strength:
      'Courage, decisiveness, and the capacity to act quickly under pressure are commonly associated with this placement. There is a strong orientation toward independent initiative.',
    shadow:
      'The same directness that enables swift action can manifest as impatience, impulsivity, or difficulty sustaining effort once the initial momentum subsides.',
  },
  {
    name: 'Taurus',
    degrees: '30°–60°',
    element: 'Earth',
    modality: 'Fixed',
    planet: 'Venus',
    theme:
      'Taurus occupies the second segment and is associated with stability, material grounding, and persistence. It follows the initiating energy of Aries with consolidation and endurance.',
    elemental:
      'As an Earth sign, Taurus relates to physical and material reality — what can be touched, built, and sustained. The Fixed quality reinforces this with staying power and resistance to unnecessary change.',
    strength:
      'Reliability, patience, and the ability to maintain consistent effort over time are central traits. Taurus is associated with building and preserving what has value.',
    shadow:
      'Resistance to change, possessiveness, and a tendency toward inflexibility can emerge when the stabilising quality becomes excessive or defensive.',
  },
  {
    name: 'Gemini',
    degrees: '60°–90°',
    element: 'Air',
    modality: 'Mutable',
    planet: 'Mercury',
    theme:
      'Gemini occupies the third segment and is associated with communication, duality, and the exchange of information. It bridges the personal and social dimensions of experience.',
    elemental:
      'As an Air sign, Gemini relates to thought, language, and the movement of ideas. The Mutable quality gives this intellectual energy flexibility and adaptability across contexts.',
    strength:
      'Curiosity, verbal facility, and the ability to hold multiple perspectives simultaneously are characteristic. Gemini is associated with gathering and transmitting information.',
    shadow:
      'Inconsistency, superficiality, and difficulty sustaining focus on a single topic or commitment can emerge when the sign\'s versatility operates without direction.',
  },
  {
    name: 'Cancer',
    degrees: '90°–120°',
    element: 'Water',
    modality: 'Cardinal',
    planet: 'Moon',
    theme:
      'Cancer occupies the fourth segment and is associated with emotional security, home, and the foundational structures of personal life. It is the first Water sign in the zodiac sequence.',
    elemental:
      'As a Water sign, Cancer relates to emotion, memory, and intuitive perception. The Cardinal quality gives it a drive to establish and protect its emotional environment.',
    strength:
      'Deep empathy, protective instinct, and the capacity to create environments of comfort and care are associated with this sign. Memory and emotional attunement are both pronounced.',
    shadow:
      'Excessive defensiveness, emotional withdrawal, and difficulty releasing the past can manifest when the protective impulse becomes over-extended.',
  },
  {
    name: 'Leo',
    degrees: '120°–150°',
    element: 'Fire',
    modality: 'Fixed',
    planet: 'Sun',
    theme:
      'Leo occupies the fifth segment and is associated with self-expression, creative output, and the desire for recognition. It represents a sustained and radiant outpouring of personal energy.',
    elemental:
      'As a Fire sign with Fixed quality, Leo is associated with a consistent, central source of warmth and vitality. The energy here is maintained and focused rather than impulsive.',
    strength:
      'Generosity, charisma, and the ability to inspire those around them are core qualities. Leo is associated with strong creative drive and a natural capacity for leadership.',
    shadow:
      'Pride, a need for excessive validation, and difficulty acknowledging others as equals can emerge when the self-expressive quality becomes self-centred.',
  },
  {
    name: 'Virgo',
    degrees: '150°–180°',
    element: 'Earth',
    modality: 'Mutable',
    planet: 'Mercury',
    theme:
      'Virgo occupies the sixth segment and is associated with analysis, discernment, and the refinement of process. It brings the Earth element into its most practical and detail-oriented expression.',
    elemental:
      'As a Mutable Earth sign, Virgo combines material orientation with adaptability. This produces a quality of careful, flexible application to practical tasks.',
    strength:
      'Precision, skill in analysis, and the capacity to improve systems through careful observation are characteristic. Virgo is associated with a strong sense of craft and service.',
    shadow:
      'Overcriticism of self and others, excessive worry, and difficulty accepting imperfection can arise when the analytical quality is not balanced by acceptance.',
  },
  {
    name: 'Libra',
    degrees: '180°–210°',
    element: 'Air',
    modality: 'Cardinal',
    planet: 'Venus',
    theme:
      'Libra occupies the seventh segment and is associated with balance, partnership, and the principles of fairness. It initiates the second half of the zodiac, which is oriented toward relationship.',
    elemental:
      'As a Cardinal Air sign, Libra initiates through thought, diplomacy, and the pursuit of equilibrium. Ideas about justice and mutual consideration are actively pursued.',
    strength:
      'Diplomatic skill, appreciation for harmony, and the capacity to see multiple valid perspectives are central. Libra is associated with refined aesthetic sensibility and cooperative instinct.',
    shadow:
      'Indecisiveness, conflict avoidance, and a tendency to defer personal needs in the service of external harmony can emerge as characteristic difficulty areas.',
  },
  {
    name: 'Scorpio',
    degrees: '210°–240°',
    element: 'Water',
    modality: 'Fixed',
    planet: 'Mars / Pluto',
    theme:
      'Scorpio occupies the eighth segment and is associated with depth, transformation, and the exploration of hidden or beneath-the-surface dimensions of experience.',
    elemental:
      'As a Fixed Water sign, Scorpio combines emotional intensity with persistence. Feelings run deep and are held for a long time. Superficial engagement is rarely satisfying.',
    strength:
      'Perceptiveness, psychological depth, and the ability to sustain focus through difficulty are characteristic. Scorpio is associated with courage in confronting what lies beneath the surface.',
    shadow:
      'Jealousy, difficulty releasing control, and a tendency toward suspicious or manipulative behaviour can emerge when depth turns into possessiveness.',
  },
  {
    name: 'Sagittarius',
    degrees: '240°–270°',
    element: 'Fire',
    modality: 'Mutable',
    planet: 'Jupiter',
    theme:
      'Sagittarius occupies the ninth segment and is associated with expansion, philosophy, and the search for meaning across broad horizons. It moves Fire energy toward inquiry and exploration.',
    elemental:
      'As a Mutable Fire sign, Sagittarius expresses energy through restless exploration and the pursuit of understanding. The flame here ranges widely rather than burning in one place.',
    strength:
      'Optimism, philosophical breadth, and the capacity to inspire others through vision and enthusiasm are central qualities. Sagittarius is associated with honest directness and a long view.',
    shadow:
      'Overconfidence, excess, and a tendency to avoid the practical implications of grand ideas can emerge when the expansive impulse operates without grounding.',
  },
  {
    name: 'Capricorn',
    degrees: '270°–300°',
    element: 'Earth',
    modality: 'Cardinal',
    planet: 'Saturn',
    theme:
      'Capricorn occupies the tenth segment and is associated with ambition, discipline, and the patient building of lasting structures. It applies the Earth element with strategic direction.',
    elemental:
      'As a Cardinal Earth sign, Capricorn initiates through practical planning and long-term purpose. Energy is applied with care, intention, and an eye toward sustainable outcomes.',
    strength:
      'Discipline, strategic patience, and the ability to construct and maintain complex structures over time are characteristic. Capricorn is associated with responsibility and earned authority.',
    shadow:
      'Rigidity, excessive focus on status, and the suppression of emotional needs in pursuit of external achievement can emerge as characteristic difficulty areas.',
  },
  {
    name: 'Aquarius',
    degrees: '300°–330°',
    element: 'Air',
    modality: 'Fixed',
    planet: 'Saturn / Uranus',
    theme:
      'Aquarius occupies the eleventh segment and is associated with collective orientation, innovation, and principled independence. It applies Air energy toward systems and ideals rather than personal exchange.',
    elemental:
      'As a Fixed Air sign, Aquarius holds firmly to ideas and principles. Intellectual positions are maintained with conviction, and departure from established frameworks is done on principle rather than whim.',
    strength:
      'Original thinking, humanitarian orientation, and the ability to perceive patterns in collective rather than individual terms are central. Aquarius is associated with a strong sense of fairness and innovation.',
    shadow:
      'Detachment, emotional unavailability, and a tendency to prioritise ideology over individual human complexity can emerge when the idealistic quality becomes inflexible.',
  },
  {
    name: 'Pisces',
    degrees: '330°–360°',
    element: 'Water',
    modality: 'Mutable',
    planet: 'Jupiter / Neptune',
    theme:
      'Pisces occupies the twelfth and final segment and is associated with dissolution, imagination, and the experience of boundaries becoming permeable. It closes the zodiac cycle.',
    elemental:
      'As a Mutable Water sign, Pisces is fluid in both emotion and identity. It absorbs the surrounding emotional atmosphere and resists fixed definition more than any other sign.',
    strength:
      'Empathy, imaginative depth, and a natural orientation toward compassion and creative synthesis are characteristic. Pisces is associated with the capacity to perceive beyond the literal.',
    shadow:
      'Escapism, difficulty maintaining healthy boundaries, and a tendency toward vagueness or avoidance of concrete responsibility can emerge when fluidity becomes diffusion.',
  },
]

const ELEMENT_GROUPS: {
  element: string
  description: string
  signs: string[]
}[] = [
  {
    element: 'Fire',
    description:
      'Fire signs are associated with initiative, energy, and impulse. They tend to act from instinct, generate heat and movement, and orient toward the future. Fire represents the will to begin.',
    signs: ['Aries', 'Leo', 'Sagittarius'],
  },
  {
    element: 'Earth',
    description:
      'Earth signs are associated with structure, stability, and material focus. They ground energy in practical reality, work with what is concrete and measurable, and build enduring forms.',
    signs: ['Taurus', 'Virgo', 'Capricorn'],
  },
  {
    element: 'Air',
    description:
      'Air signs are associated with thought, communication, and abstraction. They operate in the realm of ideas, relationships, and the exchange of information. Air represents the mind in motion.',
    signs: ['Gemini', 'Libra', 'Aquarius'],
  },
  {
    element: 'Water',
    description:
      'Water signs are associated with emotion, intuition, and sensitivity. They perceive through feeling rather than analysis, and are attuned to undercurrents that can be difficult to articulate explicitly.',
    signs: ['Cancer', 'Scorpio', 'Pisces'],
  },
]

const MODALITY_GROUPS: {
  modality: string
  description: string
  signs: string[]
}[] = [
  {
    modality: 'Cardinal',
    description:
      'Cardinal signs carry an initiating energy. They tend to begin new cycles, launch new directions, and catalyse movement. Each Cardinal sign opens one of the four seasons in the tropical zodiac.',
    signs: ['Aries', 'Cancer', 'Libra', 'Capricorn'],
  },
  {
    modality: 'Fixed',
    description:
      'Fixed signs carry a stabilising energy. They sustain and concentrate what has been initiated. They resist disruption and are associated with persistence, depth, and the consolidation of effort.',
    signs: ['Taurus', 'Leo', 'Scorpio', 'Aquarius'],
  },
  {
    modality: 'Mutable',
    description:
      'Mutable signs carry an adapting energy. They bridge one cycle to the next, synthesise what has come before, and respond to change with flexibility. Each Mutable sign closes a season.',
    signs: ['Gemini', 'Virgo', 'Sagittarius', 'Pisces'],
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Are zodiac signs scientifically proven?',
    answer:
      'No. Zodiac signs are not supported by empirical scientific evidence as causal influences on personality or events. Controlled studies, including large-scale analyses, have not found a statistically significant relationship between birth sign and measurable traits. The zodiac is a symbolic framework used within astrological practice, and this website presents it in that context only — as a structural system, not a predictive or scientific one.',
  },
  {
    question: 'Why do some apps show different signs for the same birthday?',
    answer:
      'The most common reason is the difference between the tropical and sidereal zodiac systems. Tropical astrology aligns signs to the seasons, while sidereal astrology aligns them to fixed star positions. Due to the precession of the equinoxes, these systems have drifted approximately 24 degrees apart. A person who is Aries in the tropical system may be Pisces in the sidereal system. Different apps use different systems, and some do not clearly state which one they apply.',
  },
  {
    question: 'What zodiac system does this site use?',
    answer:
      'This site uses the tropical zodiac, which is the standard framework in Western astrology. In this system, 0° Aries corresponds to the vernal equinox. Sign dates are defined by the Sun\'s position relative to Earth\'s seasonal cycle rather than against the backdrop of fixed stars.',
  },
  {
    question: 'Does everyone have all 12 signs somewhere in their chart?',
    answer:
      'In a full birth chart, the 360° ecliptic is divided into 12 houses, and each of the 12 signs occupies some portion of that wheel. So structurally, all 12 signs are present in every chart. However, different signs will contain different planets — or no planets at all. The significance of each sign in a chart depends on what planets, if any, occupy it and what house it rules.',
  },
  {
    question: 'Can zodiac signs change over time?',
    answer:
      'The signs themselves are fixed positional divisions of the ecliptic and do not change. What changes over time is the movement of the equinoxes relative to the fixed stars — a phenomenon called precession of the equinoxes. This is why the tropical and sidereal systems have diverged. Within the tropical system, the sign boundaries remain constant by definition. Your Sun sign, Moon sign, and rising sign in the tropical system do not change over the course of your life.',
  },
]

// ─── Element badge colours ────────────────────────────────────────────────────

const ELEMENT_STYLE: Record<string, string> = {
  Fire: 'bg-orange-50 text-orange-700 border-orange-200',
  Earth: 'bg-stone-100 text-stone-600 border-stone-300',
  Air: 'bg-sky-50 text-sky-700 border-sky-200',
  Water: 'bg-blue-50 text-blue-700 border-blue-200',
}

const ELEMENT_SECTION_STYLE: Record<string, string> = {
  Fire: 'border-orange-200 bg-orange-50',
  Earth: 'border-stone-200 bg-stone-50',
  Air: 'border-sky-200 bg-sky-50',
  Water: 'border-blue-200 bg-blue-50',
}

const MODALITY_STYLE: Record<string, string> = {
  Cardinal: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  Fixed: 'bg-stone-100 text-stone-600 border-stone-300',
  Mutable: 'bg-violet-50 text-violet-700 border-violet-200',
}

// ─── Chevron ──────────────────────────────────────────────────────────────────

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

// ─── Zodiac Sign Card ─────────────────────────────────────────────────────────

function ZodiacCard({
  sign,
  expanded,
  onToggle,
}: {
  sign: ZodiacSign
  expanded: boolean
  onToggle: () => void
}) {
  const cardId = `zodiac-${sign.name.toLowerCase()}`

  return (
    <div id={cardId} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`${cardId}-body`}
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-sm font-bold text-stone-800 tracking-wide uppercase">
              {sign.name}
            </h3>
            <span className="text-xs text-stone-400">{sign.degrees}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span
              className={`inline-block text-[11px] font-medium border rounded px-1.5 py-0.5 ${ELEMENT_STYLE[sign.element]}`}
            >
              {sign.element}
            </span>
            <span
              className={`inline-block text-[11px] font-medium border rounded px-1.5 py-0.5 ${MODALITY_STYLE[sign.modality]}`}
            >
              {sign.modality}
            </span>
            <span className="inline-block text-[11px] font-medium border border-stone-200 bg-white text-stone-500 rounded px-1.5 py-0.5">
              {sign.planet}
            </span>
          </div>
        </div>
        <ChevronIcon open={expanded} />
      </button>

      {expanded && (
        <div id={`${cardId}-body`} className="px-5 pb-5 border-t border-stone-100 space-y-4 mt-0">
          <div className="mt-4">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
              Core Theme
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">{sign.theme}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
              Elemental Nature
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">{sign.elemental}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
              Strength Expression
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">{sign.strength}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
              Shadow Expression
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">{sign.shadow}</p>
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
  item: FaqItem
  open: boolean
  onToggle: () => void
  index: number
}) {
  const id = `faq-zodiac-${index}`
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
        <p id={`${id}-answer`} className="pb-4 text-sm text-stone-600 leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ZodiacPage() {
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
    <div className="w-full max-w-2xl mx-auto">

      {/* ── 1. What Is the Zodiac? ─────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="intro-heading">
        <h1
          id="intro-heading"
          className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-6"
        >
          What Is the Zodiac?
        </h1>

        <div className="space-y-4 text-base text-stone-700 leading-relaxed">
          <p>
            The zodiac is a coordinate system used in astrology to track the position of celestial
            bodies relative to Earth. It is based on the ecliptic — the apparent annual path of the
            Sun as observed from Earth — which forms a 360° band around the sky. This band is
            divided into 12 equal segments of 30° each, and each segment is assigned a name and a
            set of symbolic associations.
          </p>
          <p>
            The 12 signs — from Aries at 0° to Pisces ending at 360° — serve as reference points
            within this framework. When astrologers say that the Moon is in Cancer, or that someone
            has a Scorpio Sun, they are describing which 30° segment a given body occupied at a
            specific moment in time. The signs themselves are fixed positional divisions; they do
            not move.
          </p>
          <p>
            In the tropical zodiac, the most widely used system in Western astrology, the starting
            point of 0° Aries is anchored to the vernal equinox — the moment in late March when day
            and night are of equal length in the Northern Hemisphere. This ties the zodiac to
            Earth&apos;s seasonal cycle rather than to the backdrop of fixed stars.
          </p>
          <p>
            Each sign carries a set of qualities derived from its position in the cycle, its
            associated element (Fire, Earth, Air, or Water), and its modality (Cardinal, Fixed, or
            Mutable). These qualities are symbolic descriptions and archetypal patterns — not fixed
            destinies or predictions. They represent a vocabulary for describing certain tendencies
            and orientations within the astrological tradition.
          </p>
          <p>
            The zodiac provides the structural foundation for the readings on this site. Moon signs,
            daily alignment, and compatibility all use sign placements as the primary unit of
            analysis. Understanding how the 12-sign system is organised helps clarify how those
            readings are constructed.
          </p>
        </div>
      </section>

      {/* ── 2. 12 Signs Grid ──────────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="signs-heading">
        <h2
          id="signs-heading"
          className="text-2xl font-bold text-stone-900 mb-2"
        >
          The 12 Zodiac Signs
        </h2>
        <p className="text-sm text-stone-500 mb-6 max-w-xl">
          Each sign covers a 30° arc of the ecliptic. Select a sign to expand its full profile.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ZODIAC_SIGNS.map((sign) => (
            <ZodiacCard
              key={sign.name}
              sign={sign}
              expanded={expandedSigns.has(sign.name)}
              onToggle={() => toggleSign(sign.name)}
            />
          ))}
        </div>
      </section>

      {/* ── 3. Elements ───────────────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="elements-heading">
        <h2
          id="elements-heading"
          className="text-2xl font-bold text-stone-900 mb-6"
        >
          The Four Elements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ELEMENT_GROUPS.map((g) => (
            <div
              key={g.element}
              className={`border rounded-xl p-5 ${ELEMENT_SECTION_STYLE[g.element]}`}
            >
              <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest mb-2">
                {g.element}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-3">{g.description}</p>
              <p className="text-xs text-stone-500 font-medium">
                {g.signs.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Modalities ─────────────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="modalities-heading">
        <h2
          id="modalities-heading"
          className="text-2xl font-bold text-stone-900 mb-6"
        >
          Cardinal, Fixed, and Mutable
        </h2>

        <div className="space-y-4">
          {MODALITY_GROUPS.map((g) => (
            <div key={g.modality} className="bg-white border border-stone-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-sm font-bold text-stone-800 uppercase tracking-widest">
                  {g.modality}
                </h3>
                <span
                  className={`text-[11px] font-medium border rounded px-1.5 py-0.5 ${MODALITY_STYLE[g.modality]}`}
                >
                  {g.signs.join(' · ')}
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Tropical vs Sidereal ───────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="systems-heading">
        <h2
          id="systems-heading"
          className="text-2xl font-bold text-stone-900 mb-6"
        >
          Tropical vs Sidereal Systems
        </h2>

        <div className="space-y-4 text-base text-stone-700 leading-relaxed">
          <p>
            Two major zodiac frameworks are in widespread use: the tropical zodiac and the sidereal
            zodiac. Both divide the ecliptic into 12 segments of 30°, but they use different
            reference points to define where those segments begin.
          </p>
          <p>
            The <strong className="font-semibold text-stone-900">tropical zodiac</strong> anchors
            0° Aries to the vernal equinox. This alignment is recalculated each year and is tied to
            Earth&apos;s relationship to the Sun and the turning of the seasons. It is the standard
            framework in Western astrology and in most widely used horoscope systems.
          </p>
          <p>
            The <strong className="font-semibold text-stone-900">sidereal zodiac</strong> anchors
            its starting point to the fixed stars — specifically to the position of a star cluster
            used as a reference in ancient Babylonian astronomy. It is the primary framework in
            Vedic (Jyotish) astrology and remains closely tied to the actual observed positions of
            constellations.
          </p>
          <p>
            These two systems have diverged over time due to the{' '}
            <strong className="font-semibold text-stone-900">precession of the equinoxes</strong> —
            a slow wobble in Earth&apos;s axial rotation that shifts the equinox point backward
            through the sky at roughly 1° every 72 years. Over approximately 2,000 years, this has
            created a gap of around 23–24° between the two systems. A person who is Aries in the
            tropical system will often be Pisces in the sidereal system.
          </p>
          <p>
            This site uses the <strong className="font-semibold text-stone-900">tropical zodiac</strong>{' '}
            for all calculations, including Moon signs, daily alignment, and compatibility.
          </p>
        </div>
      </section>

      {/* ── 6. Sun, Moon, Rising ──────────────────────────────────────────── */}
      <section className="mb-14" aria-labelledby="placements-heading">
        <h2
          id="placements-heading"
          className="text-2xl font-bold text-stone-900 mb-6"
        >
          Zodiac, Sun Sign, and Moon Sign
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
              Sun Sign
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Determined by the Sun&apos;s sign at birth. Changes approximately once per month.
              Broadly associated with core identity and outward character in astrological analysis.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
              Moon Sign
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Determined by the Moon&apos;s sign at birth. Changes approximately every two and a
              half days. Associated with emotional rhythm, instinctive response, and inner life.
            </p>
            <div className="mt-3">
              <Link
                href="/moon-signs"
                className="text-xs font-medium text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors"
              >
                Moon Signs Guide
              </Link>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
              Rising Sign
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              The sign on the eastern horizon at the exact moment and location of birth. Changes
              approximately every two hours. Associated with outward expression and first
              impressions.
            </p>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5">
          <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">
            How the Zodiac Connects to This Site
          </h3>
          <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
            <li className="flex gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" aria-hidden="true" />
              <span>
                <Link href="/" className="text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors font-medium">
                  Daily Alignment
                </Link>{' '}
                compares the current Moon transit to your natal Moon sign and returns a score based
                on the relationship between the two positions.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" aria-hidden="true" />
              <span>
                <Link href="/moon-signs" className="text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors font-medium">
                  Moon Signs
                </Link>{' '}
                identifies your natal Moon placement and provides a descriptive profile of the
                associated emotional patterns.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" aria-hidden="true" />
              <span>
                <Link href="/compatibility" className="text-yellow-700 hover:text-yellow-900 underline underline-offset-2 transition-colors font-medium">
                  Compatibility
                </Link>{' '}
                compares the Moon placements of two individuals and evaluates the relationship
                between their signs using elemental and modal considerations.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── 7. FAQ ────────────────────────────────────────────────────────── */}
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
