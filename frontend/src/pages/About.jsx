import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLightbulb, FaAward, FaHandshake, FaChartLine } from 'react-icons/fa'
import CTABanner from '../components/sections/CTABanner'

const values = [
  { icon: <FaLightbulb size={24} />, title: "Innovation", desc: "Always exploring new technologies and creative approaches to stay ahead." },
  { icon: <FaAward size={24} />, title: "Quality", desc: "Uncompromising standards in every line of code and every pixel designed." },
  { icon: <FaHandshake size={24} />, title: "Integrity", desc: "Transparent communication and honest commitments to our clients." },
  { icon: <FaChartLine size={24} />, title: "Growth", desc: "Focused on delivering measurable results that drive business success." }
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark min-h-screen pt-12 pb-24"
    >
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold font-montserrat mb-6"
          >
            About <span className="text-gradient-gold">ADHYA</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            Your partner in digital transformation.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-white">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              ADHYA Creations & Tech Solutions was born from a simple belief: every business deserves to be seen, heard, and remembered.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              We started with a passion for design and technology, aiming to bridge the gap between traditional businesses and the digital world. Today, we are a full-service agency helping brands across various industries establish a commanding online presence.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Pavoorchatram", "Tenkasi", "Tirunelveli", "Alangulam"].map((loc, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="px-4 py-2 bg-dark-secondary rounded-full text-sm text-gold font-medium border border-gold/20 hover:border-gold shadow-sm flex items-center gap-1.5 cursor-default"
                >
                  <span className="text-xs animate-pulse">📍</span> {loc}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-gold blur-[60px] opacity-20 rounded-full"></div>
            <div className="glass p-12 rounded-3xl relative z-10 text-center flex flex-col items-center justify-center aspect-square">
              <h3 className="text-5xl font-bold font-montserrat mb-6 text-white">Your Vision.</h3>
              <h3 className="text-5xl font-bold font-montserrat text-gradient-gold">Our Technology.</h3>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-secondary p-12 rounded-3xl text-center mb-24 border border-white/5"
        >
          <h2 className="text-2xl font-bold font-montserrat mb-4 text-gold uppercase tracking-widest">Our Mission</h2>
          <p className="text-2xl md:text-3xl font-inter font-medium text-white max-w-4xl mx-auto leading-relaxed">
            "To empower businesses with innovative digital solutions that drive growth, enhance brand identity, and create meaningful connections with their audience."
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-montserrat mb-12 text-center text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-dark-card p-8 rounded-3xl border border-white/5 hover:border-gold/40 transition-all duration-300 group hover:shadow-xl hover:shadow-gold/10 relative overflow-hidden"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-gold flex items-center justify-center mb-6 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300 relative"
                >
                  <span className="absolute inset-0 rounded-2xl bg-gold/10 animate-ping opacity-20 pointer-events-none" />
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold font-montserrat text-white mb-3 group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <CTABanner />
    </motion.div>
  )
}
