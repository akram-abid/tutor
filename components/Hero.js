'use client'

import { useEffect, useRef } from 'react'

/* ── Canvas orb animation ──────────────────────────────── */
function OrbCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const orbs = [
      { x: 0.2, y: 0.3, r: 0.28, color: '#14B8A6', vx: 0.00012, vy: 0.00009 },
      { x: 0.7, y: 0.2, r: 0.22, color: '#6366F1', vx: -0.0001, vy: 0.00014 },
      { x: 0.5, y: 0.7, r: 0.25, color: '#0891B2', vx: 0.00008, vy: -0.0001 },
      { x: 0.85, y: 0.6, r: 0.18, color: '#14B8A6', vx: -0.00013, vy: -0.00008 },
      { x: 0.1, y: 0.8, r: 0.2,  color: '#7C3AED', vx: 0.00011, vy: 0.00012 },
    ]

    let t = 0
    const draw = () => {
      t++
      const W = canvas.width
      const H = canvas.height

      ctx.clearRect(0, 0, W, H)

      orbs.forEach(o => {
        o.x += o.vx
        o.y += o.vy
        if (o.x < -0.1 || o.x > 1.1) o.vx *= -1
        if (o.y < -0.1 || o.y > 1.1) o.vy *= -1

        const cx = o.x * W
        const cy = o.y * H
        const radius = o.r * Math.min(W, H)

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        grad.addColorStop(0,   o.color + 'CC')
        grad.addColorStop(0.5, o.color + '44')
        grad.addColorStop(1,   o.color + '00')

        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.025)'
      ctx.lineWidth = 1
      const gridSize = 50
      const offsetX = (t * 0.2) % gridSize
      const offsetY = (t * 0.15) % gridSize
      for (let x = -gridSize + offsetX; x < W + gridSize; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = -gridSize + offsetY; y < H + gridSize; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(48px)', opacity: 0.65 }}
    />
  )
}

/* ── Hero Section ─────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Animated orb background */}
      <div className="absolute inset-0">
        <OrbCanvas />
      </div>

      {/* Dark vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080C14_100%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080C14] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <div
          className="animate-fade-in mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-300 font-medium" style={{ fontFamily: 'var(--font-syne)' }}>
            Now accepting early access applications
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
          style={{ animationDelay: '0.2s' }}
        >
          Stop running your
          <br />
          tutoring business from{' '}
          <span className="gradient-text">a dozen apps.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          style={{ animationDelay: '0.35s', fontFamily: 'var(--font-dm)' }}
        >
          TutorSync replaces the chaos of scattered calendars, spreadsheets,
          and payment reminders with one clean dashboard — so you only have to teach.
        </p>

        {/* CTA group */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-4 mb-6"
          style={{ animationDelay: '0.5s' }}
        >
          <a href="#waitlist" className="btn-teal px-8 py-4 text-base">
            Join the Early Access List
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust line */}
        <p
          className="animate-fade-in text-sm text-slate-500"
          style={{ animationDelay: '0.65s' }}
        >
          Free to join &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Early members get 40% off forever
        </p>

        {/* ── Abstract video placeholder ─────────────────────── */}
        <div
          className="animate-fade-up mt-20 w-full max-w-4xl relative"
          style={{ animationDelay: '0.75s' }}
        >
          {/* Glow behind the card */}
          <div className="absolute -inset-4 rounded-3xl bg-teal-500/10 blur-2xl" />

          <div className="relative glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
               style={{ aspectRatio: '16/9' }}>

            {/* Fake browser top bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <div className="flex-1 mx-4">
                <div className="mx-auto w-48 h-5 rounded-md bg-white/[0.05] flex items-center justify-center">
                  <span className="text-xs text-slate-500" style={{ fontFamily: 'var(--font-dm)' }}>app.tutorsync.io</span>
                </div>
              </div>
            </div>

            {/* Placeholder content — replace with real screenshot / video */}
            <div className="absolute inset-0 top-10 flex items-center justify-center flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M11 9L19 14L11 19V9Z" fill="#14B8A6"/>
                  <circle cx="14" cy="14" r="12" stroke="#14B8A6" strokeWidth="1.5" strokeOpacity="0.4"/>
                </svg>
              </div>
              <p className="text-slate-500 text-sm" style={{ fontFamily: 'var(--font-dm)' }}>
                Product demo coming soon
              </p>
              {/* Decorative dashboard skeleton */}
              <div className="mt-4 w-80 space-y-2.5 opacity-30">
                <div className="h-3 bg-slate-700 rounded-full w-3/4" />
                <div className="h-3 bg-slate-700 rounded-full w-full" />
                <div className="h-3 bg-slate-700 rounded-full w-2/3" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-12 bg-teal-800/50 rounded-lg" />
                  <div className="h-12 bg-indigo-800/50 rounded-lg" />
                  <div className="h-12 bg-slate-700/50 rounded-lg" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
