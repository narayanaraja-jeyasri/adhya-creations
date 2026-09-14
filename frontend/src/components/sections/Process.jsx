import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  { icon: "🔍", title: "Discovery", desc: "Understand your goals" },
  { icon: "📐", title: "Strategy", desc: "Plan the approach" },
  { icon: "🛠️", title: "Build", desc: "Execute with excellence" },
  { icon: "🚀", title: "Launch & Grow", desc: "Deliver results" }
]

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-dark-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4 text-white">How We Work</h2>
          <p className="text-muted">A streamlined process for maximum impact.</p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center relative hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border-2 border-gold text-2xl mb-4 absolute -top-6">
                  {index + 1}
                </div>
                <div className="text-4xl mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-white mb-2">{step.title}</h3>
                <p className="text-muted text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
