export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-stone-800 mb-1">Privacy Policy</h1>
        <p className="text-xs text-stone-400 mb-10">Last updated: 1 March 2026</p>

        {/* 1. Introduction */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            1. Introduction
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Where Sky Aligns operates the website at whereskyaligns.com. This page explains how we
            handle information that is provided or generated when you use our services — including
            the daily alignment tool, Moon sign finder, compatibility calculator, and zodiac
            reference pages.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            We take your privacy seriously. Our approach is to collect only what is necessary,
            keep it transparent, and never use your information in ways you would not expect.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            2. Information We Collect
          </h2>
          <h3 className="text-sm font-semibold text-stone-700 mt-4 mb-2">Birth Details</h3>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            When you use our alignment or compatibility tools, you are asked to enter a date of
            birth, time of birth, and place of birth. This information is submitted to our
            servers solely to generate your result. We do not retain this data on our servers
            after your result is returned.
          </p>
          <h3 className="text-sm font-semibold text-stone-700 mt-4 mb-2">Local Storage</h3>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            If you choose to save your details for convenience, that information is stored in
            your browser&apos;s local storage on your device only. It is not transmitted to our
            servers. You can clear this at any time through your browser settings.
          </p>
          <h3 className="text-sm font-semibold text-stone-700 mt-4 mb-2">Analytics Data</h3>
          <p className="text-sm leading-relaxed text-stone-600">
            We may collect standard usage information such as your IP address, browser type,
            device type, pages visited, and time spent on the site. This is collected via
            third-party analytics tools and is used only to understand how the site is used
            and to improve its performance.
          </p>
        </div>

        {/* 3. How We Use Information */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            3. How We Use Information
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Information you provide is used to:
          </p>
          <ul className="text-sm leading-relaxed text-stone-600 space-y-2 list-disc list-inside ml-1">
            <li>Generate your alignment score, Moon sign result, or compatibility reading</li>
            <li>Understand and improve site performance and usability</li>
          </ul>
          <p className="text-sm leading-relaxed text-stone-600 mt-3">
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </div>

        {/* 4. Cookies and Local Storage */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            4. Cookies and Local Storage
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            Our site may use cookies or browser local storage for the following purposes:
          </p>
          <ul className="text-sm leading-relaxed text-stone-600 space-y-2 list-disc list-inside ml-1">
            <li>Storing your previously entered birth details locally for convenience</li>
            <li>Analytics cookies used by third-party tools to measure site traffic</li>
          </ul>
          <p className="text-sm leading-relaxed text-stone-600 mt-3">
            You can manage or delete cookies and local storage data through your browser settings
            at any time. Disabling cookies will not affect your ability to use the core features
            of this site.
          </p>
        </div>

        {/* 5. Third-Party Services */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            5. Third-Party Services
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 mb-3">
            We use the following third-party services to operate and improve this site:
          </p>
          <ul className="text-sm leading-relaxed text-stone-600 space-y-2 list-disc list-inside ml-1">
            <li>
              <span className="font-medium text-stone-700">Hosting</span> — This site is hosted
              on a cloud platform. Hosting providers may process standard server log data as part
              of normal operations.
            </li>
            <li>
              <span className="font-medium text-stone-700">Analytics</span> — We may use an
              analytics service to understand how users interact with the site. These services
              operate under their own privacy policies.
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-stone-600 mt-3">
            We encourage you to review the privacy policies of any third-party services if you
            have specific concerns.
          </p>
        </div>

        {/* 6. Data Security */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            6. Data Security
          </h2>
          <p className="text-sm leading-relaxed text-stone-600">
            We take reasonable technical measures to protect information in transit and during
            processing. All connections to this site are encrypted via HTTPS. However, no method
            of transmission over the internet can be guaranteed to be completely secure, and we
            cannot offer an absolute assurance of security.
          </p>
        </div>

        {/* 7. Changes to This Policy */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-stone-700 mb-3 pb-1 border-b border-stone-200">
            7. Changes to This Policy
          </h2>
          <p className="text-sm leading-relaxed text-stone-600">
            We reserve the right to update this Privacy Policy from time to time. Any changes
            will be reflected on this page with a revised date at the top. Continued use of the
            site after changes are posted constitutes your acceptance of the revised policy.
          </p>
        </div>

      </div>
    </section>
  )
}
