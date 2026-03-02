export default function AboutPage() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-stone-800 mb-1">About Where Sky Aligns</h1>
        <p className="text-sm leading-relaxed text-stone-500 mb-10">
          A daily alignment tool built around your Moon sign and celestial cycles.
        </p>

        {/* What it is */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            What This Site Does
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Where Sky Aligns is a personal alignment tool. You enter your date of birth, time of
            birth, and place of birth — and the site calculates your Moon sign and generates a
            daily alignment score based on current celestial positioning.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            The result is a structured reading: a numerical alignment score, your Moon sign, and
            a set of contextual lines describing the quality of the current day relative to your
            natal chart. Everything is recalculated fresh each time you check — there are no
            saved accounts, no subscriptions, and no stored data.
          </p>
        </div>

        {/* How alignment works */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            How the Alignment Score Works
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            The alignment score is derived from the relationship between the current position of
            the Moon and other celestial bodies, measured against your natal chart. In
            astrological terms, this involves examining transits — the live positions of planets
            relative to where they were at the moment of your birth.
          </p>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Scores are expressed on a scale from 1 to 10 and reflect the structural harmony or
            tension between current planetary positions and your natal placements. A higher score
            does not mean a better day in any absolute sense — it means the current sky is in
            closer structural alignment with your birth chart.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            The contextual lines that accompany each score are derived from the dominant
            astrological patterns active on that day for your chart. They describe the nature of
            the alignment, not predictions.
          </p>
        </div>

        {/* Moon signs */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            Moon Signs and Why They Matter Here
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Your Moon sign is the zodiac sign the Moon occupied at the moment you were born.
            Unlike your Sun sign — which is determined only by your birth date — your Moon sign
            requires your birth time and location to calculate accurately, because the Moon
            moves through a new sign roughly every two and a half days.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            In astrological frameworks, the Moon governs cyclical rhythms, emotional tone, and
            instinctive response patterns. It is the fastest-moving of the major bodies used in
            astrology, which makes it the primary lens for day-to-day alignment readings. By
            grounding the daily score in your Moon sign rather than your Sun sign, the readings
            on this site are more time-sensitive and personalised to your specific natal chart.
          </p>
        </div>

        {/* Other tools */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            Other Tools on the Site
          </h2>
          <ul className="text-sm leading-relaxed text-stone-600 space-y-3">
            <li>
              <a href="/moon-signs" className="font-medium text-stone-700 hover:text-stone-900 underline underline-offset-2 transition-colors">
                Moon Sign Guide
              </a>
              {' '}— A reference covering all 12 Moon signs, their elemental associations,
              characteristic patterns, and how each Moon sign relates to alignment rhythms.
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

        {/* Informational intent */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            How to Use This Site
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            All content on Where Sky Aligns is informational. The alignment score and readings
            are based on established astrological frameworks — specifically the tropical zodiac
            system used in Western astrology — and are intended as a reflective tool, not a
            predictive one.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            The site does not collect or store your birth details beyond the time needed to
            generate your result. There are no accounts, and nothing is retained on our servers
            after your reading is returned.
          </p>
        </div>

      </div>
    </section>
  )
}
