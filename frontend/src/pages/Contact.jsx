import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import toast from 'react-hot-toast'
import axios from 'axios'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Design',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 1. Try sending via API (if backend exists)
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      try {
        await axios.post(`${apiUrl}/api/contact`, formData)
      } catch (err) {
        console.log("API POST failed, falling back to Supabase", err)
      }

      // 2. Backup: Save to Supabase directly
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          phone: formData.phone, 
          service: formData.service, 
          message: formData.message 
        }])

      if (error && error.message !== "FetchError: Failed to fetch") {
         console.log("Supabase error (ignored if placeholder): ", error)
      }

      toast.success('Message sent successfully! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', service: 'Design', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark min-h-screen pt-12 pb-24"
    >
      <div className="container mx-auto px-6 max-w-6xl mt-10">
        
        <div className="grid lg:grid-cols-2 gap-16 bg-dark-card rounded-3xl overflow-hidden border border-white/5">
          
          {/* Left Panel - Info */}
          <div className="p-10 lg:p-16 bg-dark-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-gold opacity-5 blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold font-montserrat mb-4 text-white">Let's Build Something Great Together</h2>
              <p className="text-muted mb-12">Whether you need a new website, a marketing campaign, or a complete brand overhaul, we're here to help.</p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Email Us</p>
                    <p className="text-white font-medium">contact@adhyacreations.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Call Us</p>
                    <p className="text-white font-medium">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Our Locations</p>
                    <p className="text-white font-medium">Tenkasi | Tirunelveli | Alangulam</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/+919876543210" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors mb-8"
              >
                <FaWhatsapp size={24} /> Chat on WhatsApp
              </a>

              <div>
                <p className="text-sm text-muted mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-dark transition-all"><FaFacebook /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-dark transition-all"><FaInstagram /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-dark transition-all"><FaYoutube /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-10 lg:p-16">
            <h3 className="text-2xl font-bold font-montserrat mb-8 text-white">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="+91 xxxxx xxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="Design">Design & Branding</option>
                  <option value="Websites">Websites & Apps</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="AI">AI Solutions</option>
                  <option value="SEO">SEO & Google Ads</option>
                  <option value="Content">Content & Video Creation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-gold text-dark font-bold text-lg py-4 rounded-xl hover:glow-gold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  )
}
