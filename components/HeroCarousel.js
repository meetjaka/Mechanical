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
      title: "Advanced Manufacturing Excellence",
      subtitle: "Department of Mechanical Engineering",
      description: "Pioneering cutting-edge research in materials science, precision manufacturing, and sustainable engineering solutions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
      stats: { value: 150, label: "Research Projects" },
      ctaText: "Explore Research"
    },
    {
      id: 2,
      title: "Innovation Laboratory",
      subtitle: "Where Ideas Become Reality",
      description: "State-of-the-art facilities equipped with the latest technology for breakthrough discoveries and engineering excellence.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2026",
      stats: { value: 25, label: "Modern Labs" },
      ctaText: "View Facilities"
    },
    {
      id: 3,
      title: "Industry Collaboration",
      subtitle: "Bridging Academia and Industry",
      description: "Strategic partnerships with leading companies driving innovation and providing real-world engineering solutions.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      stats: { value: 50, label: "Industry Partners" },
      ctaText: "Learn More"
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
    <section className="relative h-screen overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        {/* Professional overlay */}
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Subtitle Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-primary text-white rounded-lg text-sm font-semibold tracking-wide">
                {slides[currentSlide].subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/research-labs" className="btn-primary inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-card group">
                {slides[currentSlide].ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center gap-2 transition-all duration-300 group">
                About Department
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Stats Card */}
            <div className="inline-block bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4 shadow-card">
              <div className="text-3xl font-bold text-navy">
                {slides[currentSlide].stats.value}+
              </div>
              <div className="text-gray-dark text-sm font-medium">
                {slides[currentSlide].stats.label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-card">
          <button
            onClick={togglePlay}
            className="text-navy hover:text-blue-primary transition-colors duration-300 p-1"
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
                  index === currentSlide ? 'bg-blue-primary w-8' : 'bg-gray-medium w-2 hover:bg-gray-dark'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2 font-medium">Scroll</span>
          <div className="w-px h-8 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronRight className="w-6 h-6 rotate-180 group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      <button
        onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </section>
  );
}
