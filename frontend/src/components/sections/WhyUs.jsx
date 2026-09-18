import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaRoadCircleCheck, FaArrowRight } from 'react-icons/fa6'

const reasons = [
  { text: "Better Design", desc: "Aesthetic interfaces that capture immediate attention." },
  { text: "Stronger Presence", desc: "Cohesive branding across web, social, and search." },
  { text: "More Customers", desc: "Data-driven funnels that convert visitors into buyers." },
  { text: "Long Term Growth", desc: "Scalable tech and strategic guidance for ongoing scale." }
]

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-dark-secondary relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

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
              We don't just build websites or run ads. We engineer comprehensive digital ecosystems designed to make your business thrive in an increasingly crowded market.
            </p>

            <div className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-300 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5 group-hover:bg-gold group-hover:text-dark transition-colors duration-300"
                  >
                    <FaRoadCircleCheck className="text-sm" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-bold font-montserrat text-base group-hover:text-gold transition-colors">
                      {reason.text}
                    </h4>
                    <p className="text-muted text-sm mt-0.5">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="glass p-10 rounded-3xl relative overflow-hidden border border-white/10 hover:border-gold/30 transition-all duration-500 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-gold/20 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-xs uppercase font-semibold text-gold tracking-widest px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-6">
                Our Philosophy
              </span>
              <h3 className="text-3xl font-bold font-montserrat mb-2 text-white/90">Creative Ideas.</h3>
              <h3 className="text-3xl font-bold font-montserrat mb-2 text-white/90">Smart Technology.</h3>
              <h3 className="text-4xl font-bold font-montserrat mb-6 text-gradient-gold">Real Growth.</h3>
              <p className="text-muted mb-8 leading-relaxed">
                We craft high-performing digital strategies and software that help businesses dominate locally and scale globally.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-gold text-dark px-8 py-3.5 rounded-full font-bold hover:glow-gold transition-all duration-300 hover:scale-105 group"
              >
                <span>Let's Grow Together</span>
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
