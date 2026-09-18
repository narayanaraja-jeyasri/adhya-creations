import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video Layer with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter contrast-125 scale-105"
        >
          <source src="/assets/ADHYA_logo_animation.mp4" type="video/mp4" />
        </video> */}

        {/* Soft Dark Gradients & Vignette to guarantee pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark/90"></div>

        {/* Ambient Gold Glow Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-[140px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="gap-12 items-center" style={{ display: "flex", alignItems: "center" }}>
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
              In a digital world, your brand needs more than just a presence — it needs the right strategy, creativity and technology. <br /><br />
              <strong className="text-white">That's where ADHYA comes in.</strong>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact" className="bg-gradient-gold text-dark px-8 py-4 rounded-full font-bold text-lg hover:glow-gold transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <span>Let's Grow Together</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
              <Link to="/portfolio" className="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/10 transition-all duration-300">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content / Mockup with Video Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block" style={{ width: "460px" }}
          >
            <div className="rounded-2xl border border-white/10 h-[460px] lg:h-[520px] w-full relative overflow-hidden flex items-center justify-center group bg-black shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter drop-shadow-[0_0_20px_rgba(245,184,0,0.3)] transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/assets/ADHYA_logo_animation.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
