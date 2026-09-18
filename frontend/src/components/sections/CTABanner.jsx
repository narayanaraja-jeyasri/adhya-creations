import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaBolt } from 'react-icons/fa6'

export default function CTABanner() {
  return (
    <section className="bg-dark-card border-y border-white/10 py-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Left */}
          <div className="flex items-center gap-4">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold text-xl border border-gold/30 shadow-md shadow-gold/10"
            >
              <FaBolt className="text-gold" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold font-montserrat text-lg">Creative Solutions</h3>
              <p className="text-muted text-sm">for Modern Businesses.</p>
            </div>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400 font-medium">
            <span className="hover:text-gold transition-colors cursor-default">Build Your Brand</span>
            <span className="text-gold/50">•</span>
            <span className="hover:text-gold transition-colors cursor-default">Connect With Audience</span>
            <span className="text-gold/50">•</span>
            <span className="hover:text-gold transition-colors cursor-default">Grow Your Business</span>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/profile.php?id=61594360046171" },
                { icon: <FaInstagram size={18} />, href: "#" },
                { icon: <FaWhatsapp size={18} />, href: "https://wa.me/+919342267605" },
                { icon: <FaYoutube size={18} />, href: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-9 h-9 rounded-full bg-dark-secondary border border-white/5 flex items-center justify-center text-white hover:text-gold hover:border-gold/40 hover:shadow-md hover:shadow-gold/20 transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="bg-gradient-gold text-dark px-6 py-2.5 rounded-full font-bold text-sm hover:glow-gold transition-all duration-300 hover:scale-105"
            >
              Follow ADHYA →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
