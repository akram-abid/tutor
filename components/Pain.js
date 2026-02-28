'use client'

import { useEffect, useRef } from 'react'

const pains = [
  {
    emoji: '📅',
    title: 'Scheduling feels like a second job.',
    body:
      'You spend more time exchanging messages to find a time than you do actually teaching. Students cancel last minute and you have no system to handle it.',
    color: 'from-teal-500/10 to-transparent',
    border: 'border-teal-500/20',
  },
  {
    emoji: '💸',
    title: 'Chasing payments is awkward and exhausting.',
    body:
      'You finished the session, you did the work — now you have to awkwardly remind someone to pay. Manual tracking means things slip through the cracks.',
    color: 'from-indigo-500/10 to-transparent',
    border: 'border-indigo-500/20',
  },
  {
    emoji: '📁',
    title: 'Your student notes are scattered everywhere.',
    body:
      "Last session's notes are in a text message. The homework you sent is buried in an email thread. There's no single place to see a student's full history.",
    color: 'from-cyan-500/10 to-transparent',
    border: 'border-cyan-500/20',
  },
]

export default function Pain() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      {/* Section divider */}
      <div className="divider mb-24" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal text-center mb-4">
          <span className="teal-dot text-xs font-semibold tracking-widest uppercase text-teal-400"
                style={{ fontFamily: 'var(--font-syne)' }}>
            The problem
          </span>
        </div>

        {/* Heading */}
        <h2 className="reveal text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight"
            style={{ transitionDelay: '0.1s' }}>
          Sound familiar?
        </h2>
        <p className="reveal text-slate-400 text-center max-w-xl mx-auto mb-20 text-lg leading-relaxed"
           style={{ transitionDelay: '0.15s', fontFamily: 'var(--font-dm)' }}>
          Every independent tutor we talked to had the same complaints.
          These aren't small annoyances — they cost you real time and real money.
        </p>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className={`reveal glass rounded-2xl p-7 flex flex-col gap-4 bg-gradient-to-b ${p.color} border ${p.border} hover:-translate-y-1 transition-transform duration-300`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="text-lg font-bold leading-snug" style={{ fontFamily: 'var(--font-syne)' }}>
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stat banner */}
        <div className="reveal mt-12 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center border border-teal-500/10"
             style={{ transitionDelay: '0.5s' }}>
          <p className="text-5xl font-extrabold gradient-text" style={{ fontFamily: 'var(--font-syne)' }}>
            8+ hrs
          </p>
          <p className="text-slate-400 max-w-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm)' }}>
            The average independent tutor spends more than{' '}
            <strong className="text-white">8 unpaid hours per month</strong> on admin tasks that have
            nothing to do with teaching.
          </p>
        </div>
      </div>
    </section>
  )
}
