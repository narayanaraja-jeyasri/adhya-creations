import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import Stats from '../components/sections/Stats'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <Process />
      <Testimonials />
      <CTABanner />
    </motion.div>
  )
}
