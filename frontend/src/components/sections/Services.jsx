import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaPalette, FaGlobe, FaBullhorn, FaRobot, FaSearchengin, FaVideo, FaArrowRight, FaWandMagicSparkles } from 'react-icons/fa6'

const categories = ["All", "Design & Branding", "Web & Apps", "Marketing & AI"]

const services = [
  {
    id: 1,
    category: "Design & Branding",
    icon: <FaPalette size={28} />,
    title: "Design & Branding",
    desc: "Look Good. Feel Great.",
    details: "Crafting memorable visual identities, logos, and UI/UX designs that resonate deeply with your target audience.",
    tags: ["Brand Identity", "UI/UX", "Logo Design"],
    badge: "Creative"
  },
  {
    id: 2,
    category: "Web & Apps",
    icon: <FaGlobe size={28} />,
    title: "Websites & Web Apps",
    desc: "Your Business. Online.",
    details: "High-performance, modern websites and custom web applications built for blazing speed, SEO, and conversion.",
    tags: ["React & Next.js", "Responsive", "SEO-First"],
    badge: "Popular"
  },
  {
    id: 3,
    category: "Marketing & AI",
    icon: <FaBullhorn size={28} />,
    title: "Digital Marketing & Meta Ads",
    desc: "Reach. Engage. Grow.",
    details: "High-converting ad campaigns across Facebook, Instagram, and Google to generate quality leads and skyrocket ROI.",
    tags: ["Meta Ads", "Lead Generation", "Analytics"],
    badge: "High ROI"
  },
  {
    id: 4,
    category: "Marketing & AI",
    icon: <FaRobot size={28} />,
    title: "AI Solutions & Automation",
    desc: "Smarter Tools. Bigger Results.",
    details: "Intelligent chatbots, automated customer workflows, and AI tools to save time and scale your operations effortlessly.",
    tags: ["AI Chatbots", "Automation", "Smart Workflows"],
    badge: "AI Powered"
  },
  {
    id: 5,
    category: "Marketing & AI",
    icon: <FaSearchengin size={28} />,
    title: "SEO & Google Ads",
    desc: "Be Found. Be Chosen.",
    details: "Dominate search engine rankings, attract high-intent local and global buyers, and maximize search visibility.",
    tags: ["Keyword Ranking", "Google Ads", "Local SEO"],
    badge: "Visibility"
  },
  {
    id: 6,
    category: "Design & Branding",
    icon: <FaVideo size={28} />,
    title: "Content & Video Creation",
    desc: "Capture Attention. Make Impact.",
    details: "Cinematic promotional videos, viral Reels/Shorts, and compelling copywriting that turns casual viewers into loyal clients.",
    tags: ["Video Editing", "Reels & Shorts", "Motion Graphics"],
    badge: "Engaging"
  }
]

export default function Services() {
  const [activeTab, setActiveTab] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredServices = activeTab === "All"
    ? services
    : services.filter(s => s.category === activeTab)

  return (
    <section className="py-24 bg-dark relative z-10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FaWandMagicSparkles className="animate-spin text-xs" style={{ animationDuration: '4s' }} />
            What We Excel At
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            <span className="brush-underline">Our Services</span>
          </h2>
          <p className="text-muted mt-6 max-w-2xl mx-auto text-base">
            Comprehensive digital solutions crafted with modern technology and relentless creativity to make your business thrive.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === category
                  ? 'text-dark bg-gradient-gold shadow-lg shadow-gold/20 scale-105'
                  : 'text-gray-400 bg-dark-secondary hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Cards Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-card p-8 rounded-3xl border border-white/5 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Card Glow Gradient on Hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-gold/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center text-gold shadow-md group-hover:border-gold group-hover:shadow-gold/30 transition-all duration-300"
                    >
                      {/* Pulsing ring around icon */}
                      <span className="absolute inset-0 rounded-2xl bg-gold/10 animate-ping opacity-20 pointer-events-none" />
                      {service.icon}
                    </motion.div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gold-light group-hover:border-gold/30 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Descriptions */}
                  <h3 className="text-2xl font-bold font-montserrat mb-2 text-white group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gold font-medium mb-4 font-dancing text-xl">
                    {service.desc}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.details}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 group-hover:border-gold/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Animated Arrow Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-sm font-bold text-gold flex items-center gap-2 group-hover:text-gold-light transition-colors"
                  >
                    <span>Explore Service</span>
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                  <span className="text-xs text-muted group-hover:text-gray-300 transition-colors">
                    0{service.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-gradient-gold text-dark px-8 py-4 rounded-full font-bold text-base hover:glow-gold transition-all duration-300 hover:scale-105"
          >
            <span>View All Detailed Services</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  )
}
