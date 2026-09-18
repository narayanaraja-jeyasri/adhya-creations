import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPalette, FaGlobe, FaBullhorn, FaRobot, FaSearchengin, FaVideo, FaCheckCircle } from 'react-icons/fa'
import CTABanner from '../components/sections/CTABanner'

const detailedServices = [
  {
    icon: <FaPalette size={40} />,
    title: "Design & Branding",
    desc: "Crafting memorable identities that resonate with your audience.",
    features: [
      "Logo design & brand identity",
      "Color palette & typography",
      "Marketing materials (flyers, brochures)",
      "UI/UX design for web & mobile"
    ]
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Websites & Apps",
    desc: "High-performance digital experiences built for scale.",
    features: [
      "Custom websites & web applications",
      "React.js & modern frameworks",
      "Mobile-first responsive design",
      "E-commerce solutions"
    ]
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    desc: "Data-driven campaigns that maximize your ROI.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Targeted lead generation",
      "Social media management",
      "ROI tracking & analytics"
    ]
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Solutions",
    desc: "Automating workflows to keep you ahead of the curve.",
    features: [
      "Custom AI chatbots",
      "Workflow automation",
      "AI content generation tools",
      "Data analytics & insights"
    ]
  },
  {
    icon: <FaSearchengin size={40} />,
    title: "SEO & Google Ads",
    desc: "Dominate search rankings and drive high-intent traffic.",
    features: [
      "Comprehensive keyword research",
      "On-page & technical SEO",
      "Google Ads management",
      "Performance reporting"
    ]
  },
  {
    icon: <FaVideo size={40} />,
    title: "Content & Video Creation",
    desc: "Compelling storytelling that builds brand loyalty.",
    features: [
      "Professional video production",
      "YouTube channel growth",
      "Short-form content (Reels/Shorts)",
      "Engaging copywriting"
    ]
  }
]

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark min-h-screen pt-12 pb-24"
    >
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold font-montserrat mb-6"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted"
          >
            We provide end-to-end digital solutions that help businesses establish a strong online presence, engage their audience, and drive measurable growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-dark-card p-8 md:p-10 rounded-3xl border border-white/5 hover:border-gold/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-gold/10 relative overflow-hidden"
            >
              {/* Subtle radiant background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col sm:flex-row gap-6 mb-8 relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center text-gold group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300 relative"
                >
                  <span className="absolute inset-0 rounded-2xl bg-gold/10 animate-ping opacity-20 pointer-events-none" />
                  {service.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-3 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">{service.desc}</p>
                </div>
              </div>

              <div className="bg-dark/50 rounded-2xl p-6 mb-8 border border-white/5 group-hover:border-white/10 transition-colors relative z-10">
                <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider text-gold">What's Included</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-300 text-sm group/item">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        className="text-gold mt-0.5 shrink-0"
                      >
                        <FaCheckCircle className="text-xs" />
                      </motion.div>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-gold font-bold hover:text-white transition-colors text-base group/link relative z-10"
              >
                <span>Discuss Your Project</span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-2">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
      <CTABanner />
    </motion.div>
  )
}
