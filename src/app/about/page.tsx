export default function AboutPage() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-stone-800 mb-1">About Where Sky Aligns</h1>
        <p className="text-sm leading-relaxed text-stone-500 mb-10">
          A personal alignment space grounded in celestial cycles.
        </p>

        {/* What we offer */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            What We Offer
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Where Sky Aligns is a personal alignment space grounded in celestial cycles. We
            interpret the relationship between your natal chart and the current sky to offer a
            structured daily reading — one that reflects patterns, not predictions.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            You enter your date of birth, time of birth, and place of birth. The site calculates
            your Moon sign and generates a daily alignment score based on current celestial
            positioning. The result is a structured reading: a score, your Moon sign, and
            contextual lines describing the quality of the day relative to your natal chart.
            Everything is recalculated fresh each time — no accounts, no subscriptions, no
            stored data.
          </p>
        </div>

        {/* How alignment works */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            How the Alignment Score Works
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            The alignment score reflects the structural relationship between the current position
            of the Moon and other celestial bodies, measured against your natal chart. In
            astrological terms, this involves examining transits — the live positions of planets
            relative to where they were at the moment of your birth.
          </p>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Scores are expressed on a scale from 1 to 10. A higher score means the current sky
            is in closer structural alignment with your birth chart — not that the day is
            objectively better. A lower score reflects greater tension or contrast between
            current transits and your natal positions.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            The contextual lines that accompany each score describe the nature of the alignment
            patterns active on that day. They are interpretive, not predictive.
          </p>
        </div>

        {/* Moon signs */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            Moon Signs and Why They Matter Here
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Your Moon sign is the zodiac sign the Moon occupied at the moment you were born.
            Unlike your Sun sign — determined only by your birth date — your Moon sign requires
            your birth time and location to calculate accurately, because the Moon moves through
            a new sign roughly every two and a half days.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            Within astrological frameworks, the Moon is associated with cyclical rhythms,
            emotional tone, and instinctive patterns. It is the fastest-moving body used in
            astrology, which makes it the primary lens for day-to-day alignment readings.
            Grounding the daily score in your Moon sign rather than your Sun sign produces
            readings that are more time-sensitive and specific to your natal chart.
          </p>
        </div>

        {/* Explore the site */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            Explore the Site
          </h2>
          <ul className="text-sm leading-relaxed text-stone-600 space-y-3">
            <li>
              <a href="/moon-signs" className="font-medium text-stone-700 hover:text-stone-900 underline underline-offset-2 transition-colors">
                Moon Sign Guide
              </a>
              {' '}— A reference covering all 12 Moon signs, their elemental associations,
              characteristic patterns, and how each relates to alignment rhythms.
            </li>
            <li>
              <a href="/compatibility" className="font-medium text-stone-700 hover:text-stone-900 underline underline-offset-2 transition-colors">
                Compatibility
              </a>
              {' '}— An overview of how Moon sign combinations interact within astrological
              frameworks, based on elemental and modal relationships between two charts.
            </li>
            <li>
              <a href="/zodiac" className="font-medium text-stone-700 hover:text-stone-900 underline underline-offset-2 transition-colors">
                Zodiac Reference
              </a>
              {' '}— A structured breakdown of the 12-sign zodiac: elements, modalities, ruling
              bodies, and cyclical position within the astrological year.
            </li>
          </ul>
        </div>

        {/* Our approach */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            Our Approach
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Everything on Where Sky Aligns is informational and interpretive. We explore
            patterns in celestial cycles and reflect them back through the lens of your natal
            chart. We do not predict events, offer advice, or make claims about outcomes.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            The readings are based on the tropical zodiac system used in Western astrology —
            a structured interpretive tradition, not an empirical science. We present these
            frameworks clearly, without overstating what they can offer.
          </p>
        </div>

      </div>
    </section>
  )
}
