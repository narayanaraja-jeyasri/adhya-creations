import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export default function CTABanner() {
  return (
    <section className="bg-dark-card border-y border-white/10 py-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-dark-secondary flex items-center justify-center text-gold text-xl border border-gold/20">
              ⚡
            </div>
            <div>
              <h3 className="text-white font-bold font-montserrat text-lg">Creative Solutions</h3>
              <p className="text-muted text-sm">for Modern Businesses.</p>
            </div>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400 font-medium">
            <span>Build Your Brand</span>
            <span className="text-gold/50">•</span>
            <span>Connect With Audience</span>
            <span className="text-gold/50">•</span>
            <span>Grow Your Business</span>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-gold transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><FaInstagram size={20} /></a>
              <a href="https://wa.me/+919876543210" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors"><FaWhatsapp size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><FaYoutube size={20} /></a>
            </div>
            
            <Link to="/contact" className="bg-gradient-gold text-dark px-6 py-2 rounded-full font-bold text-sm hover:glow-gold transition-all duration-300">
              Follow ADHYA →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
