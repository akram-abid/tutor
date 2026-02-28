'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="16" rx="2" stroke="#14B8A6" strokeWidth="1.5"/>
        <path d="M2 9H20" stroke="#14B8A6" strokeWidth="1.5"/>
        <path d="M7 2V5M15 2V5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7" cy="13" r="1" fill="#14B8A6"/>
        <circle cx="11" cy="13" r="1" fill="#14B8A6"/>
        <circle cx="15" cy="13" r="1" fill="#14B8A6"/>
        <circle cx="7" cy="17" r="1" fill="#14B8A6" opacity="0.5"/>
        <circle cx="11" cy="17" r="1" fill="#14B8A6" opacity="0.5"/>
      </svg>
    ),
    tag: 'Scheduling',
    title: 'Let students book themselves.',
    body:
      'Set your weekly availability once. Students get a direct booking link — no account required, no back-and-forth. Automated reminders go out before every session so no-shows become rare.',
    perks: ['Google Calendar two-way sync', 'Auto timezone detection', 'SMS + email reminders', 'Cancellation policy controls'],
    accent: 'teal',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="2" width="16" height="18" rx="2" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M7 7H15M7 11H15M7 15H11" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="4" fill="#080C14" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M14.5 16L15.5 17L17.5 15" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Billing',
    title: 'Get paid without the awkward ask.',
    body:
      'Generate invoices in one click after every session. Track who\'s paid, who\'s pending, and who\'s overdue at a glance. Accept payments online through Stripe so the reminder texts disappear.',
    perks: ['One-click invoice generation', 'Stripe online payments', 'Overdue auto-reminders', 'Revenue dashboard per student'],
    accent: 'indigo',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#06B6D4" strokeWidth="1.5"/>
        <path d="M4 18C4 15.2386 7.13401 13 11 13C14.866 13 18 15.2386 18 18" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 9L18 11L21 7" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Student CRM',
    title: 'Never forget where you left off.',
    body:
      'Every student gets a full profile with session history, notes, learning goals, and contact info. You\'ll always walk into a session knowing exactly what happened last time.',
    perks: ['Session notes & history', 'Goal & progress tracking', 'Parent contact info', 'Searchable notes'],
    accent: 'cyan',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4H14L18 8V18C18 18.5523 17.5523 19 17 19H4C3.44772 19 3 18.5523 3 18V5C3 4.44772 3.44772 4 4 4Z" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M14 4V8H18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H15M7 15H12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Resource Hub',
    title: 'Files that actually reach the student.',
    body:
      'Upload homework, PDFs, and feedback directly to each student\'s profile. Students access their files through their own clean portal — no more lost email attachments or broken links.',
    perks: ['Per-student file upload', 'Student-facing portal', 'Homework & feedback files', 'No file size headaches'],
    accent: 'amber',
  },
]

const accentMap = {
  teal:   { border: 'border-teal-500/20',   tag: 'bg-teal-500/10 text-teal-400',   dot: 'bg-teal-400' },
  indigo: { border: 'border-indigo-500/20', tag: 'bg-indigo-500/10 text-indigo-400', dot: 'bg-indigo-400' },
  cyan:   { border: 'border-cyan-500/20',   tag: 'bg-cyan-500/10 text-cyan-400',   dot: 'bg-cyan-400' },
  amber:  { border: 'border-amber-500/20',  tag: 'bg-amber-500/10 text-amber-400', dot: 'bg-amber-400' },
}

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="divider mb-24" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-4">
          <span className="teal-dot text-xs font-semibold tracking-widest uppercase text-teal-400"
                style={{ fontFamily: 'var(--font-syne)' }}>
            The solution
          </span>
        </div>

        <h2 className="reveal text-4xl md:text-5xl font-extrabold text-center mb-5 tracking-tight"
            style={{ transitionDelay: '0.1s' }}>
          Everything you need,{' '}
          <span className="gradient-text">finally in one place.</span>
        </h2>
        <p className="reveal text-slate-400 text-center max-w-2xl mx-auto mb-20 text-lg leading-relaxed"
           style={{ transitionDelay: '0.15s', fontFamily: 'var(--font-dm)' }}>
          TutorSync replaces the patchwork of tools with one clean dashboard built
          for how tutors actually work.
        </p>

        {/* Feature cards — alternating large/small layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const a = accentMap[f.accent]
            return (
              <div
                key={i}
                className={`reveal glass rounded-2xl p-8 border ${a.border} hover:-translate-y-1 transition-transform duration-300 group`}
                style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
              >
                {/* Icon + Tag */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border ${a.border} flex items-center justify-center`}>
                    {f.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${a.tag}`}
                        style={{ fontFamily: 'var(--font-syne)' }}>
                    {f.tag}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-3 leading-snug" style={{ fontFamily: 'var(--font-syne)' }}>
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-dm)' }}>
                  {f.body}
                </p>

                {/* Perks list */}
                <ul className="space-y-2">
                  {f.perks.map((perk, pi) => (
                    <li key={pi} className="flex items-center gap-2.5 text-sm text-slate-300"
                        style={{ fontFamily: 'var(--font-dm)' }}>
                      <span className={`w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
