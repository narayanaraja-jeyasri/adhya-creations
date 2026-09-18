import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaSearchengin, FaCompassDrafting, FaCode, FaRocket } from 'react-icons/fa6'

const steps = [
  {
    icon: <FaSearchengin size={26} />,
    title: "Discovery",
    desc: "Understand your vision, target audience, and strategic growth goals.",
    color: "from-amber-500/20 to-gold/10"
  },
  {
    icon: <FaCompassDrafting size={26} />,
    title: "Strategy",
    desc: "Map out the technical architecture, design system, and timeline.",
    color: "from-yellow-500/20 to-gold/10"
  },
  {
    icon: <FaCode size={26} />,
    title: "Build",
    desc: "Develop with precision, modern tech stacks, and pixel-perfection.",
    color: "from-gold/20 to-amber-600/10"
  },
  {
    icon: <FaRocket size={26} />,
    title: "Launch & Grow",
    desc: "Deploy seamlessly, track performance, and scale your brand reach.",
    color: "from-gold-light/20 to-gold/10"
  }
]

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-white">
            How We <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A battle-tested, streamlined process designed for maximum speed, quality, and measurable impact.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-gold/50 via-gold to-gold-light shadow-lg shadow-gold/50"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-dark-card p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center relative hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border-2 border-gold text-gold font-montserrat font-bold text-lg mb-4 absolute -top-6 shadow-lg shadow-black/50 group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                  {index + 1}
                </div>

                {/* Animated Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className={`w-18 h-18 p-4 rounded-2xl bg-gradient-to-br ${step.color} border border-gold/30 text-gold flex items-center justify-center mb-5 mt-3 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300`}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-xl font-bold font-montserrat text-white mb-2 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
