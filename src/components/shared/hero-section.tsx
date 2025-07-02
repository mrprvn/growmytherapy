import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] flex items-center justify-center">
    {/* Background Video */}
    <div className="absolute inset-0 z-0">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/ocean-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="w-full h-full bg-gradient-to-br from-teal-400 via-blue-500 to-teal-600" />
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div className="space-y-6">
        {/* Main Heading */}
        <div className="space-y-2">
          <h2 className="text-5xl text-wrap md:text-4xl lg:text-5xl text-white font-serif leading-tight">
            Psychological Care for
          </h2>
          <h3 className="text-2xl md:text-5xl lg:text-6xl text-white font-bold font-serif leading-tight">
            Change, Insight, and Well-Being
          </h3>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 font-serif max-w-3xl mx-auto leading-relaxed">
          Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through
          PSYPACT participation
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            size="lg"
            className="bg-teal-600/80 hover:bg-teal-700/90 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection