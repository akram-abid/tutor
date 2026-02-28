import Hero from '@/components/Hero'
import Pain from '@/components/Pain'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pain />
      <Features />
      <SocialProof />
      <Waitlist />
      <Footer />
    </main>
  )
}
