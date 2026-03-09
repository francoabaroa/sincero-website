import { HeroSection } from '@/components/HeroSection'
import { MarqueeSection } from '@/components/MarqueeSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { TeamSection } from '@/components/TeamSection'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <PhilosophySection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}
