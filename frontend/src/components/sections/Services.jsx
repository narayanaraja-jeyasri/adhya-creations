import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPalette, FaGlobe, FaBullhorn, FaRobot, FaSearch, FaVideo } from 'react-icons/fa'

const services = [
  {
    icon: <FaPalette size={32} />,
    title: "Design & Branding",
    desc: "Look Good. Feel Great.",
    details: "Crafting memorable identities that resonate with your audience."
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Websites & Apps",
    desc: "Your Business. Online.",
    details: "High-performance digital experiences built for scale."
  },
  {
    icon: <FaBullhorn size={32} />,
    title: "Digital Marketing & Meta Ads",
    desc: "Reach. Engage. Grow.",
    details: "Data-driven campaigns that maximize your ROI."
  },
  {
    icon: <FaRobot size={32} />,
    title: "AI Solutions",
    desc: "Smarter Tools. Bigger Possibilities.",
    details: "Automating workflows to keep you ahead of the curve."
  },
  {
    icon: <FaSearch size={32} />,
    title: "SEO & Google Ads",
    desc: "Be Found. Be Chosen.",
    details: "Dominate search rankings and drive high-intent traffic."
  },
  {
    icon: <FaVideo size={32} />,
    title: "Content & Video Creation",
    desc: "Be Found. Impact.",
    details: "Compelling storytelling that builds brand loyalty."
  }
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-24 bg-dark relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            <span className="brush-underline">Our Services</span>
          </h2>
          <p className="text-muted mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 hover-glow-gold group"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-2 text-white">{service.title}</h3>
              <p className="text-gold font-medium mb-4 font-dancing text-xl">{service.desc}</p>
              <p className="text-muted text-sm leading-relaxed">{service.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
