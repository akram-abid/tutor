'use client'

import { useEffect, useRef } from 'react'

const quotes = [
  {
    text: "I spend so much time just chasing payments — it genuinely feels like a second job some weeks.",
    handle: 'u/math_tutor_uk',
    source: 'Reddit r/tutoring',
  },
  {
    text: "The worst part is the back-and-forth to schedule. By the time we agree on a time I've wasted 20 minutes.",
    handle: 'u/science_teacher99',
    source: 'Reddit r/tutoring',
  },
  {
    text: "I've tried three different apps. None of them do everything. I'm still using a spreadsheet for billing.",
    handle: 'u/privatetutoringnz',
    source: 'Reddit r/Tutors',
  },
]

const stats = [
  { number: '8+', label: 'Unpaid admin hours lost per month' },
  { number: '30%', label: 'Of tutors say late payment is their top stress' },
  { number: '1 in 3', label: 'Sessions impacted by scheduling friction' },
]

export default function SocialProof() {
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

        {/* Label */}
        <div className="reveal text-center mb-4">
          <span className="teal-dot text-xs font-semibold tracking-widest uppercase text-teal-400"
                style={{ fontFamily: 'var(--font-syne)' }}>
            What tutors are saying
          </span>
        </div>

        <h2 className="reveal text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight"
            style={{ transitionDelay: '0.1s' }}>
          We listened before we built.
        </h2>

        {/* Quotes */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl p-6 border border-white/[0.06] flex flex-col gap-4"
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              {/* Quote mark */}
              <div className="text-teal-400 text-4xl leading-none font-serif">&ldquo;</div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1"
                 style={{ fontFamily: 'var(--font-dm)' }}>
                {q.text}
              </p>
              <div className="pt-3 border-t border-white/[0.06]">
                <p className="text-slate-400 text-xs font-medium">{q.handle}</p>
                <p className="text-slate-600 text-xs">{q.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="reveal grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
             style={{ transitionDelay: '0.5s' }}>
          {stats.map((s, i) => (
            <div key={i} className="bg-[#080C14] p-8 text-center">
              <p className="text-4xl font-extrabold gradient-text mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                {s.number}
              </p>
              <p className="text-slate-400 text-sm" style={{ fontFamily: 'var(--font-dm)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
