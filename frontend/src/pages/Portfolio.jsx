import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTABanner from '../components/sections/CTABanner'

const categories = ["All", "Design", "Marketing", "SEO", "Video", "Tech"]

const portfolioData = [
  {
    id: 1,
    title: "Retail Brand Redesign",
    category: "Design",
    metric: "Increased brand recognition by 60%",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Tech",
    metric: "₹5L monthly online sales",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Meta Ads Campaign",
    category: "Marketing",
    metric: "3x ROI in 60 days",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "YouTube Channel Growth",
    category: "Video",
    metric: "10K subscribers in 6 months",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "SEO for Local Business",
    category: "SEO",
    metric: "Page 1 rankings for 20+ keywords",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "AI Chatbot Integration",
    category: "Tech",
    metric: "40% reduction in support queries",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000",
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = portfolioData.filter(
    project => activeCategory === "All" || project.category === activeCategory
  )

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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold font-montserrat mb-6"
          >
            Our <span className="text-gradient-gold">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted"
          >
            Explore our recent projects and see how we've helped businesses achieve digital excellence and measurable growth.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gradient-gold text-dark shadow-lg shadow-gold/20 scale-105' 
                  : 'bg-dark-secondary text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/5 hover:border-gold/40 transition-all duration-500 aspect-[4/3] cursor-pointer shadow-xl"
              >
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/85 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/30 text-gold text-xs font-bold rounded-full w-fit mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-2">{project.title}</h3>
                  <p className="text-gold-light text-sm mb-4 font-medium flex items-center gap-1.5">
                    <span className="text-gold text-xs animate-pulse">✨</span> {project.metric}
                  </p>
                  <Link to="/contact" className="text-gold font-bold text-sm inline-flex items-center gap-2 hover:text-white transition-colors group/link">
                    <span>Start Similar Project</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
      <CTABanner />
    </motion.div>
  )
}
