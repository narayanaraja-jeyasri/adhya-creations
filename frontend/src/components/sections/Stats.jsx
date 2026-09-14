import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { num: 200, suffix: '+', label: 'Projects Completed' },
  { num: 150, suffix: '+', label: 'Happy Clients' },
  { num: 5, suffix: '+', label: 'Years Experience' },
  { num: 3, suffix: '', label: 'Service Locations' }
]

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <section className="py-20 bg-dark border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-bold font-montserrat text-gold mb-2">
                {inView ? <CountUp end={stat.num} duration={2.5} /> : '0'}
                {stat.suffix}
              </h3>
              <p className="text-white text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
