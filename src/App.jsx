import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTwitter, FaChartLine, FaCoins } from 'react-icons/fa'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-cemetery-dark via-cemetery-darker to-cemetery-dark">
      {/* Fog/Mist Overlay */}
      <FogOverlay />

      {/* Particle System */}
      <ParticleSystem />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <HowToBuySection />
        <Footer />
      </div>
    </div>
  )
}

// Fog Overlay Component
function FogOverlay() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cemetery-green/20 to-transparent animate-pulse" />
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-64 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="fog">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
              <feColorMatrix values="0 0 0 0 0.05
                                     0 0 0 0 0.16
                                     0 0 0 0 0.09
                                     0 0 0 0.3 0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#fog)" />
        </svg>
      </div>
    </>
  )
}

// Particle/Firefly System
function ParticleSystem() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-neon-green/40 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            opacity: [0.2, 0.8, 0.3, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Hero Section with Tombstone
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tombstone Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block"
          >
            {/* Cemetery Image */}
            <div className="relative">
              <img
                src="/image/600x600.avif"
                alt="James Wynn Memorial"
                className="w-full max-w-md mx-auto rounded-lg border-4 border-neon-green/50 shadow-2xl box-glow"
              />

              {/* Glow effect behind image */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-50 bg-neon-green/30 rounded-lg" />
            </div>
          </motion.div>
        </motion.div>

        {/* Token Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12"
        >
          <h1 className="text-6xl md:text-8xl font-tombstone text-neon-green text-glow mb-4">
            $WYNNRIP
          </h1>
          <p className="text-xl md:text-2xl text-neon-green/70 max-w-2xl mx-auto">
            A memorial to all the traders who got rekt by the Bitcoin bull run
          </p>
        </motion.div>

        {/* Grass at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cemetery-green to-transparent" />
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-tombstone text-neon-green text-glow mb-8">
            THE LEGEND
          </h2>

          <div className="bg-cemetery-green/40 border-2 border-neon-green/30 rounded-lg p-8 box-glow backdrop-blur-sm">
            <p className="text-lg md:text-xl text-neon-green/80 mb-6 leading-relaxed">
              In the dark year of 2026, James Wynn thought he could short the Bitcoin bull market.
              Armed with 100x leverage and unwavering confidence, he stood against the tide.
            </p>
            <p className="text-lg md:text-xl text-neon-green/80 mb-6 leading-relaxed">
              The market had other plans. What started as a modest position turned into a
              catastrophic liquidation as Bitcoin soared past all resistance levels.
            </p>
            <p className="text-lg md:text-xl text-neon-green/80 leading-relaxed">
              This token stands as a memorial to James and all the brave (or foolish) traders
              who dared to fight the bull. May their portfolios rest in peace.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Tokenomics Section
function TokenomicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tokenomicsData = [
    { title: "Total Supply", value: "1,000,000,000", icon: "💀" },
    { title: "Liquidity Burned", value: "100%", icon: "🔥" },
    { title: "Contract Renounced", value: "Yes", icon: "✅" },
    { title: "Tax", value: "0%", icon: "🎯" },
  ]

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-tombstone text-neon-green text-glow text-center mb-12">
            TOKENOMICS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-cemetery-green/40 border-2 border-neon-green/30 rounded-lg p-6 box-glow box-glow-hover transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-tombstone text-neon-green text-glow mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-neon-green/90 text-center">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// How to Buy Section
function HowToBuySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "1",
      title: "Get a Wallet",
      description: "Download Phantom or Solflare wallet for Solana"
    },
    {
      number: "2",
      title: "Buy SOL",
      description: "Purchase SOL from an exchange and send to your wallet"
    },
    {
      number: "3",
      title: "Go to Pump.fun",
      description: "Connect your wallet to Pump.fun"
    },
    {
      number: "4",
      title: "Swap for $WYNNRIP",
      description: "Swap your SOL for $WYNNRIP tokens and join the memorial"
    }
  ]

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-tombstone text-neon-green text-glow text-center mb-12">
            HOW TO BUY
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex items-start gap-4 bg-cemetery-green/40 border-2 border-neon-green/30 rounded-lg p-6 box-glow box-glow-hover transition-all duration-300 hover:translate-x-2 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center">
                  <span className="text-2xl font-tombstone text-neon-green text-glow">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-tombstone text-neon-green mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neon-green/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer with Social Links
function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "#",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "DEXScreener",
      icon: FaChartLine,
      url: "#",
      color: "hover:text-[#00D4AA]"
    },
    {
      name: "Pump.fun",
      icon: FaCoins,
      url: "#",
      color: "hover:text-neon-green"
    }
  ]

  return (
    <footer className="relative py-12 px-4 border-t border-neon-green/20">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-neon-green ${link.color} transition-colors duration-300`}
            >
              <link.icon className="w-10 h-10 box-glow-hover" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-neon-green/50 mb-2">
            In loving memory of all liquidated positions
          </p>
          <p className="text-neon-green/30 text-sm">
            $WYNNRIP is a meme coin with no intrinsic value or expectation of financial return.
            For entertainment purposes only.
          </p>
          <p className="text-neon-green/40 text-xs mt-4">
            © 2025 $WYNNRIP. All rights reserved. RIP James Wynn.
          </p>
        </motion.div>

        {/* Grass texture at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grass" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M10,40 L10,25 Q10,20 15,15" stroke="#00ff41" strokeWidth="2" fill="none" />
                <path d="M20,40 L20,20 Q20,15 25,10" stroke="#00ff41" strokeWidth="2" fill="none" />
                <path d="M30,40 L30,28 Q30,23 35,18" stroke="#00ff41" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grass)" />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default App
