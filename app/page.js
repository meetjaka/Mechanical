"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import DepartmentNavbar from "@/components/DepartmentNavbar";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Gallery from "@/components/Gallery";
import {
  ProfessionalCard,
  FeatureCard,
  StatCard,
  VisionMissionCard,
} from "@/components/ModernCards";
// Removed animation imports for clean professional design

// Dynamic imports for performance optimization
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
  loading: () => null,
});
const Footer = dynamic(() => import("@/components/Footer"));
import {
  MessageSquare,
  BookOpen,
  Users,
  UserCheck,
  FileText,
  Globe,
  Monitor,
  BarChart,
  Award,
  Target,
  Eye,
  Download,
  ExternalLink,
  Zap,
  ChevronLeft,
  ChevronRight,
  Briefcase,
} from "lucide-react";

export default function Home() {
  const scrollContainerRef = useRef(null);
  const softwareScrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isSoftwareAutoScrolling, setIsSoftwareAutoScrolling] = useState(true);

  // Auto-scroll functionality for recruiters
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Auto-scroll functionality for software
  useEffect(() => {
    const scrollContainer = softwareScrollRef.current;
    if (!scrollContainer || !isSoftwareAutoScrolling) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isSoftwareAutoScrolling]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  const scrollSoftwareLeft = () => {
    if (softwareScrollRef.current) {
      softwareScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setIsSoftwareAutoScrolling(false);
      setTimeout(() => setIsSoftwareAutoScrolling(true), 3000);
    }
  };

  const scrollSoftwareRight = () => {
    if (softwareScrollRef.current) {
      softwareScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setIsSoftwareAutoScrolling(false);
      setTimeout(() => setIsSoftwareAutoScrolling(true), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <DepartmentNavbar />
      <HeroCarousel />

      {/* Download Brochure Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <ProfessionalCard className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                <Download size={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#004D83] group-hover:text-orange-500 transition-colors duration-300">
                  Department Brochure
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Download our comprehensive brochure with all program details
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1PQk4W6fplXv3uHDxsNMyET4rf1-IF3l6/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066A1] hover:bg-[#004D83] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Download Now
              <ExternalLink size={18} />
            </a>
          </ProfessionalCard>
        </div>
      </div>

      <main className="bg-white relative z-10">
        {/* Best Practices, Vision, Mission & Program Objectives Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Best Practices */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-10 sm:mb-14">
                <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                  Excellence in Education
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D83] mb-4">
                  BEST <span className="text-[#0066A1]">PRACTICES</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
                  Innovative approaches that drive excellence in mechanical
                  engineering education and research
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Mini Project Evaluation */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#0066A1]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare className="w-7 h-7 text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0066A1] mb-2">
                      Mini Project Evaluation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comprehensive student assessment through hands-on mini projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Book World Initiative */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#0066A1]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <BookOpen className="w-7 h-7 text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0066A1] mb-2">
                      Book World Initiative
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reading culture development to transform student perspectives
                    </p>
                  </div>
                </div>
              </div>

              {/* Staff Meditation Program */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-7 h-7 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-orange-500 mb-2">
                      Staff Meditation Program
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wellness and mindfulness practices for faculty development
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Counseling */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#0066A1]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <UserCheck className="w-7 h-7 text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0066A1] mb-2">
                      Student Counseling
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Personalized one-to-one guidance and mentoring support
                    </p>
                  </div>
                </div>
              </div>

              {/* MOOC Integration */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#0066A1]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <FileText className="w-7 h-7 text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0066A1] mb-2">
                      MOOC Integration
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Academic enrichment through online course platforms
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Presence */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-orange-500 mb-2">
                      Digital Presence
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Department website and personal academic blogs
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Classroom */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#0066A1]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Monitor className="w-7 h-7 text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0066A1] mb-2">
                      Google Classroom
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Enhanced learning through digital classroom tools
                    </p>
                  </div>
                </div>
              </div>

              {/* Industry Collaboration */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#0066A1]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <BarChart className="w-7 h-7 text-[#0066A1]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0066A1] mb-2">
                      Industry Collaboration
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Faculty-industry partnerships for practical exposure
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert Sessions */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-7 h-7 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-orange-500 mb-2">
                      Expert Sessions
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Industry expert talks for student knowledge enhancement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission - Large Feature Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Vision Card */}
              <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#0066A1]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-8 h-8 text-[#0066A1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0066A1] pt-3">Vision</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  To be recognized as a center for outstanding education and research in field of mechanical engineering.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-orange-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 pt-3">Mission</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  To produce well qualified engineers, who are innovative, contributors to their profession by catering to diverse societal needs.
                </p>
              </div>
            </div>

            {/* Program Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Program Educational Objectives */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#0066A1]">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                    <Target className="w-10 h-10 text-[#0066A1]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004D83] mb-3">
                    Program Educational Objectives
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    Strategic goals defining the expected accomplishments of
                    graduates
                  </p>
                  <a
                    href="/files/peo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0066A1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004D83] transition-colors duration-300 w-full justify-center"
                  >
                    Click Here
                    <FileText className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Program Outcomes */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-orange-500">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
                    <Award className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004D83] mb-3">
                    Program Outcomes
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    Skills and knowledge students acquire by graduation
                  </p>
                  <a
                    href="/files/po.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 w-full justify-center"
                  >
                    Click Here
                    <FileText className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Program Specific Outcomes */}
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#004D83]">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-5">
                    <Zap className="w-10 h-10 text-[#004D83]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004D83] mb-3">
                    Program Specific Outcomes
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    Specialized competencies unique to mechanical engineering
                  </p>
                  <a
                    href="/files/pso.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#004D83] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003366] transition-colors duration-300 w-full justify-center"
                  >
                    Click Here
                    <FileText className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student's Chapters Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 text-[#0066A1] rounded-lg text-sm font-semibold mb-4">
                Student Organizations
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0066A1] mb-4">
                STUDENT CHAPTERS
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
                Student-led organizations fostering technical excellence and
                professional development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SAE Club */}
              <ProfessionalCard className="group text-center">
                <div className="space-y-6">
                  {/* Logo Section */}
                  <div className="relative p-6 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                    <img
                      src="/SAECLUB.png"
                      alt="SAE Club"
                      className="h-24 w-auto mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#004D83] group-hover:text-[#0066A1] transition-colors duration-300">
                    SAE Student Chapter
                  </h3>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#004D83]">
                        42
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">
                        Members
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">
                        22
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">
                        Events
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Society of Automotive Engineers student chapter promoting
                    automotive engineering excellence and innovation.
                  </p>

                  {/* Action Button */}
                  <button className="w-full btn-secondary">Learn More</button>
                </div>
              </ProfessionalCard>
            </div>
          </div>
        </div>

        {/* Major Recruiters Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Industry Partners
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Major <span className="text-[#0066A1]">Recruiters</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Our students are placed in leading companies across various
                industries
              </p>
            </div>

            {/* Auto-rotating Logo Carousel */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#0066A1] text-[#0066A1] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Previous companies"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#0066A1] text-[#0066A1] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Next companies"
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={scrollContainerRef}
                className="relative overflow-x-auto scrollbar-hide py-8 px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex gap-12 sm:gap-16 md:gap-20 items-center min-w-max px-4">
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Asahi india.png"
                      alt="Asahi India"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/TCS.png"
                      alt="TCS"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/L&T.png"
                      alt="L&T"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Reliance Industries.png"
                      alt="Reliance Industries"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Tech mahindra.jpg"
                      alt="Tech Mahindra"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Polycab.png"
                      alt="Polycab"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Thermax.png"
                      alt="Thermax"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/torrent power.png"
                      alt="Torrent Power"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Elecon.png"
                      alt="Elecon"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/GSFC.jpg"
                      alt="GSFC"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Meditab.png"
                      alt="Meditab"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/emipro.png"
                      alt="Emipro"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Dosepacker.jpg"
                      alt="Dosepacker"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Sanmar.jpg"
                      alt="Sanmar"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Omega.png"
                      alt="Omega"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/MG.png"
                      alt="MG"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/SMS.png"
                      alt="SMS"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/TEV.png"
                      alt="TEV"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Mahrashi.png"
                      alt="Mahrashi"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Par heat techno.png"
                      alt="Par Heat Techno"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  {/* Duplicate set for seamless infinite scroll */}
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Asahi india.png"
                      alt="Asahi India"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/TCS.png"
                      alt="TCS"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/L&T.png"
                      alt="L&T"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Reliance Industries.png"
                      alt="Reliance Industries"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Tech mahindra.jpg"
                      alt="Tech Mahindra"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Polycab.png"
                      alt="Polycab"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Thermax.png"
                      alt="Thermax"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/torrent power.png"
                      alt="Torrent Power"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Elecon.png"
                      alt="Elecon"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/GSFC.jpg"
                      alt="GSFC"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Meditab.png"
                      alt="Meditab"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/emipro.png"
                      alt="Emipro"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Dosepacker.jpg"
                      alt="Dosepacker"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Sanmar.jpg"
                      alt="Sanmar"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Omega.png"
                      alt="Omega"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/MG.png"
                      alt="MG"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/SMS.png"
                      alt="SMS"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/TEV.png"
                      alt="TEV"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Mahrashi.png"
                      alt="Mahrashi"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/Industries logo/Par heat techno.png"
                      alt="Par Heat Techno"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Softwares Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Technology Stack
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Major <span className="text-[#0066A1]">Softwares</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Industry-standard tools and technologies used in our curriculum
              </p>
            </div>

            {/* Auto-rotating Software Logo Carousel */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={scrollSoftwareLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#0066A1] text-[#0066A1] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Previous software"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollSoftwareRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#0066A1] text-[#0066A1] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Next software"
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={softwareScrollRef}
                className="relative overflow-x-auto scrollbar-hide py-8 px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex gap-8 sm:gap-12 md:gap-16 items-center min-w-max px-4">
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s1.jpg"
                      alt="Software 1"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s2.jpg"
                      alt="Software 2"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s3.jpg"
                      alt="Software 3"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s4.jpg"
                      alt="Software 4"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s5.jpg"
                      alt="Software 5"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s6.jpg"
                      alt="Software 6"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s7.jpg"
                      alt="Software 7"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s8.jpg"
                      alt="Software 8"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s9.jpg"
                      alt="Software 9"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s10.jpg"
                      alt="Software 10"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  {/* Duplicate set for seamless infinite scroll */}
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s1.jpg"
                      alt="Software 1"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s2.jpg"
                      alt="Software 2"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s3.jpg"
                      alt="Software 3"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s4.jpg"
                      alt="Software 4"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s5.jpg"
                      alt="Software 5"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s6.jpg"
                      alt="Software 6"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s7.jpg"
                      alt="Software 7"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s8.jpg"
                      alt="Software 8"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s9.jpg"
                      alt="Software 9"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="/software/s10.jpg"
                      alt="Software 10"
                      className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Development & Placement Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-blue-50 text-[#0066A1] rounded-lg text-sm font-semibold mb-4">
                Career Success
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0066A1] mb-4">
                Career Development & Placement
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4 mt-4 sm:mt-6">
                Empowering students with industry-ready skills and career
                opportunities
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <img
                  src="/cdp.png"
                  alt="Career Development & Placement"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Us Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-blue-50 text-[#0066A1] rounded-lg text-sm font-semibold mb-4">
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0066A1] mb-4">
                CONTACT US
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
                We're here to answer your questions and provide information about our programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Address */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#0066A1]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0066A1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D83] mb-4 group-hover:text-[#0066A1] transition-colors">
                    Address
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Department of Mechanical Engineering
                    <br />
                    Charotar University of Science and Technology,
                    <br />
                    CHARUSAT Campus, Changa
                    <br />
                    Taluka: Petlad, Dist: Anand
                    <br />
                    Gujarat (India) 388 421
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-500">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D83] mb-4 group-hover:text-orange-500 transition-colors">
                    Phone Number
                  </h3>
                  <a
                    href="tel:+912697265221"
                    className="text-gray-600 text-lg hover:text-orange-500 transition-colors duration-300 font-medium"
                  >
                    +91-2697-265221
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#0066A1]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#0066A1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#004D83] mb-4 group-hover:text-[#0066A1] transition-colors">
                    Email
                  </h3>
                  <a
                    href="mailto:hod.me@charusat.ac.in"
                    className="text-gray-600 text-lg hover:text-[#0066A1] transition-colors duration-300 break-all font-medium"
                  >
                    hod.me@charusat.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#004D83] mb-3">
                  Find Us On Map
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Visit our campus and experience world-class facilities
                </p>
              </div>
              
              <div className="relative group">
                {/* Decorative gradient background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0066A1] to-orange-500 rounded-3xl opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
                
                {/* Map container */}
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-100 group-hover:border-[#0066A1] transition-all duration-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4977684772726!2d72.8188!3d22.7567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4dfffffffff%3A0x1234567890!2sChaUSAT%20Campus%2C%20Changa!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CHARUSAT Campus Location"
                    className="w-full"
                  ></iframe>
                  
                  {/* Get Directions Button Overlay */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <a
                      href="https://www.google.com/maps/dir//CHARUSAT+Campus,+Changa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0066A1] hover:bg-[#004D83] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
                
                {/* Location Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0066A1] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#004D83]">CHARUSAT Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}
