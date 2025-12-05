"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Play, Pause } from "lucide-react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      mainTitle: "Engineering",
      highlightTitle: "The Future",
      subtitle: "Department of Mechanical Engineering",
      description: "Pioneering innovation in mechanical engineering through cutting-edge research, advanced manufacturing, and sustainable technologies.",
      image: "/1.png",
      stats: [
        { value: "50+", label: "Faculty Members" },
        { value: "500+", label: "Students" },
        { value: "25+", label: "Research Projects" }
      ]
    },
    {
      id: 2,
      mainTitle: "Innovation",
      highlightTitle: "Hub",
      subtitle: "Bridging Academia and Industry",
      description: "Strategic partnerships with leading companies driving innovation and providing real-world engineering solutions.",
      image: "/2.png",
      stats: [
        { value: "50+", label: "Industry Partners" }
      ]
    },
    {
      id: 3,
      mainTitle: "Research",
      highlightTitle: "Excellence",
      subtitle: "Pushing Boundaries in Mechanical Science",
      description: "State-of-the-art facilities equipped with the latest technology for breakthrough discoveries and engineering excellence.",
      image: "/3.png",
      stats: [
        { value: "25+", label: "Modern Labs" }
      ]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - First in mobile, Right in desktop */}
            <div className="relative lg:order-2">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={`${slide.mainTitle} ${slide.highlightTitle}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content - Second in mobile, Left in desktop */}
            <div className="space-y-8 lg:order-1">
              {/* Subtitle Badge */}
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-[#0066A1] text-white rounded-md text-sm font-semibold tracking-wide">
                  {slides[currentSlide].subtitle}
                </span>
              </div>

              {/* Main Title */}
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a1a1a] leading-tight mb-2">
                  {slides[currentSlide].mainTitle}
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0066A1] leading-tight">
                  {slides[currentSlide].highlightTitle}
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/research-labs" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066A1] hover:bg-[#004D83] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link 
                  href="/research-labs" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#0066A1] border-2 border-[#0066A1] font-semibold rounded-lg transition-all duration-300 group"
                >
                  Research Labs
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {slides[currentSlide].stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg px-6 py-4 shadow-md">
                    <div className="text-3xl sm:text-4xl font-bold text-[#0066A1]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
          <button
            onClick={togglePlay}
            className="text-[#004D83] hover:text-[#0066A1] transition-colors duration-300 p-1"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#0066A1] w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
