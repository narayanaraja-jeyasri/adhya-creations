import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-montserrat font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Make Your Business <br />
              <span className="font-dancing text-6xl md:text-8xl text-gradient-gold italic">Impossible to Ignore.</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              In a digital world, your brand needs more than just a presence — it needs the right strategy, creativity and technology. <br/><br/>
              <strong className="text-white">That's where ADHYA comes in.</strong>
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact" className="bg-gradient-gold text-dark px-8 py-4 rounded-full font-bold text-lg hover:glow-gold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Let's Grow Together <span>→</span>
              </Link>
              <Link to="/portfolio" className="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/10 transition-all duration-300">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="glass p-6 rounded-2xl glow-gold transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-8 bg-dark-secondary rounded-t-lg flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-dark p-6 rounded-b-lg border border-white/5 h-80 flex flex-col justify-center items-center text-center">
                <div className="text-gold text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold font-montserrat mb-2">Digital Excellence</h3>
                <p className="text-muted text-sm">Designing experiences that convert.</p>
                <div className="mt-6 w-3/4 h-2 bg-dark-secondary rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-gold animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-xl">
                3x
              </div>
              <div>
                <p className="text-xs text-muted font-semibold uppercase">Average</p>
                <p className="font-bold text-white">ROI Increase</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
