import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar } from 'react-icons/fa6'

const testimonials = [
  {
    quote: "ADHYA transformed our online presence completely! Our sales increased by 3x in 3 months.",
    name: "Rajan Kumar",
    title: "Entrepreneur, Tenkasi",
    initials: "RK"
  },
  {
    quote: "Best investment we made. Their SEO strategy brought us to page 1 of Google!",
    name: "Priya Sharma",
    title: "Boutique Owner",
    initials: "PS"
  },
  {
    quote: "Professional, creative, and results-driven. Highly recommended for digital growth!",
    name: "Mohammed Ali",
    title: "Restaurant Owner",
    initials: "MA"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4 text-white">What Our Clients Say</h2>
          <div className="flex justify-center gap-1.5 text-gold text-base mt-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <FaStar />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <p className="text-xl md:text-2xl font-inter text-gray-300 italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold font-montserrat">
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold">{testimonials[current].name}</h4>
                  <p className="text-muted text-sm">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current ? 'bg-gold w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
