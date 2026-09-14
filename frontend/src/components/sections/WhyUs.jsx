import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const reasons = [
  "Better Design",
  "Stronger Presence",
  "More Customers",
  "Long Term Growth"
]

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
              Why Choose <span className="text-gold">ADHYA</span>?
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              We don't just build websites or run ads. We create comprehensive digital ecosystems designed to make your business thrive in a competitive market.
            </p>
            
            <ul className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-center gap-4 text-white font-medium text-lg"
                >
                  <FaCheckCircle className="text-gold text-xl" />
                  {reason}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass p-10 rounded-3xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-[50px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-montserrat mb-2 text-white/90">Creative Ideas.</h3>
              <h3 className="text-3xl font-bold font-montserrat mb-2 text-white/90">Smart Technology.</h3>
              <h3 className="text-4xl font-bold font-montserrat mb-6 text-gradient-gold">Real Growth.</h3>
              <p className="text-muted mb-8">We build digital solutions that help businesses grow locally and globally.</p>
              
              <Link to="/contact" className="inline-block bg-gradient-gold text-dark px-8 py-3 rounded-full font-bold hover:glow-gold transition-all duration-300">
                Let's Grow Together →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
