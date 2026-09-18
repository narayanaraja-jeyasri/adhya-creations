import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold font-montserrat text-gold">ADHYA</span>
            </div>
            <p className="text-muted text-sm mb-6">
              Creative Solutions for Modern Businesses. Make your business impossible to ignore with our premium digital services.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61594360046171" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center text-white hover:text-gold hover:bg-white/5 transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center text-white hover:text-gold hover:bg-white/5 transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="https://wa.me/+919342267605" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center text-white hover:text-gold hover:bg-white/5 transition-all">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center text-white hover:text-gold hover:bg-white/5 transition-all">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-montserrat mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-muted hover:text-gold text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted hover:text-gold text-sm transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-muted hover:text-gold text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-gold text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-montserrat mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-muted hover:text-gold text-sm transition-colors">Design & Branding</Link></li>
              <li><Link to="/services" className="text-muted hover:text-gold text-sm transition-colors">Websites & Apps</Link></li>
              <li><Link to="/services" className="text-muted hover:text-gold text-sm transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-muted hover:text-gold text-sm transition-colors">SEO & Google Ads</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-montserrat mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li>Email: adhyadigitech@gmail.com</li>
              <li>Phone: +91 93422 67605</li>
              <li className="mt-2">
                <strong>Locations:</strong><br />
                Pavoorchatram | Alangulam | Tenkasi | Tirunelveli
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} ADHYA Creations & Tech Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )
}
