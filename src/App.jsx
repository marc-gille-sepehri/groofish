import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Calendar, Mail, Instagram, Facebook, Youtube, Menu, X } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setCurrentSection(sectionId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'music', 'shows', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>GROOFISH</h2>
          </motion.div>
          
          <div className="nav-links desktop-nav">
            {['home', 'about', 'music', 'shows', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${currentSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section === 'home' ? 'Start' : 
                 section === 'about' ? 'Über uns' :
                 section === 'music' ? 'Musik' :
                 section === 'shows' ? 'Konzerte' : 'Kontakt'}
              </button>
            ))}
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['home', 'about', 'music', 'shows', 'contact'].map((section) => (
                <button
                  key={section}
                  className={`mobile-nav-link ${currentSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === 'home' ? 'Start' : 
                   section === 'about' ? 'Über uns' :
                   section === 'music' ? 'Musik' :
                   section === 'shows' ? 'Konzerte' : 'Kontakt'}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text"
          >
            <h1>GROOFISH</h1>
            <p className="hero-subtitle">Pop • Funk • Jazz</p>
            <p className="hero-description">
              Eine frische Mischung aus zeitgenössischem Pop, 
              funky Grooves und jazzigen Improvisationen
            </p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('music')}
            >
              <Music size={20} />
              Musik hören
            </motion.button>
          </motion.div>
        </div>
        <div className="hero-background">
          <div className="floating-elements">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-element"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-content"
          >
            <h2>Über Groofish</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Groofish ist eine aufstrebende Band aus Deutschland, die die Grenzen 
                  zwischen Pop, Funk und Jazz sprengt. Mit ihrer einzigartigen Mischung 
                  aus catchy Melodien, funky Basslines und jazzigen Soli schaffen sie 
                  einen Sound, der sowohl Ohrwurm als auch musikalische Tiefe bietet.
                </p>
                <p>
                  Die Band besteht aus talentierten Musikern, die ihre Leidenschaft 
                  für verschiedene Musikstile vereinen und daraus etwas völlig Neues 
                  erschaffen. Ihre Live-Auftritte sind bekannt für ihre Energie und 
                  die Fähigkeit, das Publikum mitzureißen.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Konzerte</p>
                </div>
                <div className="stat">
                  <h3>3</h3>
                  <p>Alben</p>
                </div>
                <div className="stat">
                  <h3>10K+</h3>
                  <p>Fans</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="music">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-content"
          >
            <h2>Unsere Musik</h2>
            <div className="music-grid">
              <div className="album-card">
                <div className="album-cover">
                  <Music size={60} />
                </div>
                <h3>Neuestes Album</h3>
                <p>Coming Soon</p>
                <button className="album-button">Vorschau</button>
              </div>
              <div className="album-card">
                <div className="album-cover">
                  <Music size={60} />
                </div>
                <h3>Live Sessions</h3>
                <p>Live-Aufnahmen</p>
                <button className="album-button">Anhören</button>
              </div>
              <div className="album-card">
                <div className="album-cover">
                  <Music size={60} />
                </div>
                <h3>Singles</h3>
                <p>Neueste Tracks</p>
                <button className="album-button">Streamen</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="shows">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-content"
          >
            <h2>Nächste Konzerte</h2>
            <div className="shows-grid">
              <div className="show-card">
                <div className="show-date">
                  <Calendar size={20} />
                  <span>15. Dezember 2024</span>
                </div>
                <h3>Jazz Club Hamburg</h3>
                <p>Hamburg, Deutschland</p>
                <button className="show-button">Tickets</button>
              </div>
              <div className="show-card">
                <div className="show-date">
                  <Calendar size={20} />
                  <span>22. Dezember 2024</span>
                </div>
                <h3>Funk Factory Berlin</h3>
                <p>Berlin, Deutschland</p>
                <button className="show-button">Tickets</button>
              </div>
              <div className="show-card">
                <div className="show-date">
                  <Calendar size={20} />
                  <span>5. Januar 2025</span>
                </div>
                <h3>Pop Arena München</h3>
                <p>München, Deutschland</p>
                <button className="show-button">Tickets</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-content"
          >
            <h2>Kontakt</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Buchungen & Presse</h3>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>info@groofish.de</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>booking@groofish.de</span>
                </div>
              </div>
              <div className="social-links">
                <h3>Folge uns</h3>
                <div className="social-grid">
                  <a href="#" className="social-link">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="social-link">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="social-link">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Groofish. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
