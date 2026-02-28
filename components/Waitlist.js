'use client'

import { useEffect, useRef, useState } from 'react'

export default function Waitlist() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(47) // Update this manually as waitlist grows

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

  // ── Connect this handler to your Tally.so form or a backend endpoint ──
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = {
      name:  form.name.value,
      email: form.email.value,
    }
    // TODO: Replace the URL below with your Tally.so form endpoint
    // or your own API route at /api/waitlist
    // Example Tally hidden form submission:
    //   await fetch('https://tally.so/r/YOUR_FORM_ID', { method: 'POST', body: new FormData(form) })
    await new Promise(r => setTimeout(r, 900)) // remove this fake delay when connected
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="waitlist" ref={sectionRef} className="relative py-32 px-6">

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="divider mb-24" />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Label */}
        <div className="reveal text-center mb-4">
          <span className="teal-dot text-xs font-semibold tracking-widest uppercase text-teal-400"
                style={{ fontFamily: 'var(--font-syne)' }}>
            Early access
          </span>
        </div>

        {/* Heading */}
        <h2 className="reveal text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight"
            style={{ transitionDelay: '0.1s' }}>
          Get early access.
          <br />
          <span className="gradient-text">Shape the product.</span>
        </h2>

        <p className="reveal text-slate-400 text-center text-lg leading-relaxed mb-3"
           style={{ transitionDelay: '0.15s', fontFamily: 'var(--font-dm)' }}>
          TutorSync is being built with input from real tutors. Join the waitlist
          and help shape what we make — early members get{' '}
          <strong className="text-white">40% off forever</strong> when we launch.
        </p>

        {/* Waitlist count */}
        <div className="reveal text-center mb-10" style={{ transitionDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-teal-500/20 text-sm">
            <span className="flex -space-x-1.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 border border-[#080C14]" />
              ))}
            </span>
            <span className="text-slate-300" style={{ fontFamily: 'var(--font-dm)' }}>
              <strong className="text-white">{count} tutors</strong> already on the list
            </span>
          </div>
        </div>

        {/* Form card */}
        <div className="reveal glass rounded-2xl p-8 border border-white/[0.08] shadow-2xl shadow-black/40"
             style={{ transitionDelay: '0.25s' }}>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5"
                       style={{ fontFamily: 'var(--font-syne)' }}>
                  First name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your first name"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all"
                  style={{ fontFamily: 'var(--font-dm)' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5"
                       style={{ fontFamily: 'var(--font-syne)' }}>
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all"
                  style={{ fontFamily: 'var(--font-dm)' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-teal w-full py-4 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                      <path d="M8 2A6 6 0 0 1 14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Saving your spot…
                  </span>
                ) : 'Save My Spot'}
              </button>

              <p className="text-center text-xs text-slate-600 pt-1" style={{ fontFamily: 'var(--font-dm)' }}>
                We'll only email you when there's something worth reading. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="text-center py-6 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>You're on the list!</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm" style={{ fontFamily: 'var(--font-dm)' }}>
                Check your inbox — we sent you a quick note. We'll be in touch before
                we launch to get your feedback. Thank you for believing in this early.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
