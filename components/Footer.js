export default function Footer() {
  return (
    <footer className="relative py-16 px-6">
      <div className="divider mb-12" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1.5" fill="white" opacity="0.9"/>
              <rect x="9" y="2" width="5" height="5" rx="1.5" fill="white" opacity="0.6"/>
              <rect x="2" y="9" width="5" height="5" rx="1.5" fill="white" opacity="0.6"/>
              <rect x="9" y="9" width="5" height="5" rx="1.5" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-syne)' }}>
            TutorSync
          </span>
        </div>

        {/* Tagline */}
        <p className="text-slate-500 text-sm text-center" style={{ fontFamily: 'var(--font-dm)' }}>
          Built for independent tutors, by someone who cares about your time.
        </p>

        {/* Contact */}
        <a
          href="mailto:tutorsync@gmail.com"
          className="text-slate-400 text-sm hover:text-teal-400 transition-colors"
          style={{ fontFamily: 'var(--font-dm)' }}
        >
          tutorsync@gmail.com
        </a>
      </div>

      <p className="text-center text-slate-700 text-xs mt-10" style={{ fontFamily: 'var(--font-dm)' }}>
        © 2025 TutorSync. All rights reserved.
      </p>
    </footer>
  )
}
