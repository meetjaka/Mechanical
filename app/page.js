"use client";

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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <DepartmentNavbar />
      <HeroCarousel />

      {/* Download Brochure Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <ProfessionalCard className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 rounded-xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                <Download size={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#004D83] group-hover:text-[#0066A1] transition-colors duration-300">
                  Department Brochure
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Download our comprehensive brochure with all program details
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/your-brochure-file-id/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex items-center gap-2 group-hover:shadow-lifted"
            >
              Download Now
              <ExternalLink size={18} />
            </a>
          </ProfessionalCard>
        </div>
      </div>

      <main className="bg-white relative z-10">
        {/* Best Practices, Vision, Mission & Program Objectives Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Best Practices */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D83] mb-4">
                  BEST PRACTICES
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-[#004D83] mx-auto rounded-full"></div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
                  Innovative approaches that drive excellence in mechanical
                  engineering education and research
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <FeatureCard
                icon={MessageSquare}
                title="Mini Project Evaluation"
                description="Comprehensive student assessment through hands-on mini projects"
                accent="blue"
              />

              <FeatureCard
                icon={BookOpen}
                title="Book World Initiative"
                description="Reading culture development to transform student perspectives"
                accent="electric"
              />

              <FeatureCard
                icon={Users}
                title="Staff Meditation Program"
                description="Wellness and mindfulness practices for faculty development"
                accent="orange"
              />

              <FeatureCard
                icon={UserCheck}
                title="Student Counseling"
                description="Personalized one-to-one guidance and mentoring support"
                accent="blue"
              />

              <FeatureCard
                icon={FileText}
                title="MOOC Integration"
                description="Academic enrichment through online course platforms"
                accent="electric"
              />

              <FeatureCard
                icon={Globe}
                title="Digital Presence"
                description="Department website and personal academic blogs"
                accent="orange"
              />

              <FeatureCard
                icon={Monitor}
                title="Google Classroom"
                description="Enhanced learning through digital classroom tools"
                accent="blue"
              />

              <FeatureCard
                icon={BarChart}
                title="Industry Collaboration"
                description="Faculty-industry partnerships for practical exposure"
                accent="blue"
              />

              <FeatureCard
                icon={Users}
                title="Expert Sessions"
                description="Industry expert talks for student knowledge enhancement"
                accent="orange"
              />
            </div>

            {/* Vision & Mission - Large Feature Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <VisionMissionCard
                type="vision"
                title="Vision"
                description="To be recognized as a center for outstanding education and research in field of mechanical engineering."
                icon={Eye}
              />

              <VisionMissionCard
                type="mission"
                title="Mission"
                description="To produce well qualified engineers, who are innovative, contributors to their profession by catering to diverse societal needs."
                icon={Target}
              />
            </div>

            {/* Program Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#004D83]">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-[#004D83]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#004D83] mb-3">
                    Program Educational Objectives
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Strategic goals defining the expected accomplishments of
                    graduates
                  </p>
                  <a
                    href="/files/peo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#004D83] to-[#0066A1] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Click Here
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#F5A623]">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-[#F5A623]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#004D83] mb-3">
                    Program Outcomes
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Skills and knowledge students acquire by graduation
                  </p>
                  <a
                    href="/files/po.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F5A623] to-[#FF8C00] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Click Here
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#1A2332]">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-[#1A2332]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#004D83] mb-3">
                    Program Specific Outcomes
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Specialized competencies unique to mechanical engineering
                  </p>
                  <a
                    href="/files/pso.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1A2332] to-[#2C3E50] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Click Here
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D83] mb-4">
                STUDENT CHAPTERS
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-[#004D83] mx-auto rounded-full"></div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
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
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Major Recruiters
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Our students are placed in leading companies across various
                industries
              </p>
            </div>

            {/* Auto-rotating Logo Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                <div className="flex gap-8 sm:gap-12 md:gap-16 items-center justify-center min-w-max px-4">
                  <img
                    src="/Industries logo/Asahi india.png"
                    alt="Asahi India"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/TCS.png"
                    alt="TCS"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/L&T.png"
                    alt="L&T"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Reliance Industries.png"
                    alt="Reliance Industries"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Tech mahindra.jpg"
                    alt="Tech Mahindra"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Polycab.png"
                    alt="Polycab"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Thermax.png"
                    alt="Thermax"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/torrent power.png"
                    alt="Torrent Power"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Elecon.png"
                    alt="Elecon"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/GSFC.jpg"
                    alt="GSFC"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Meditab.png"
                    alt="Meditab"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/emipro.png"
                    alt="Emipro"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Dosepacker.jpg"
                    alt="Dosepacker"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Sanmar.jpg"
                    alt="Sanmar"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Omega.png"
                    alt="Omega"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/MG.png"
                    alt="MG"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/SMS.png"
                    alt="SMS"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/TEV.png"
                    alt="TEV"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Mahrashi.png"
                    alt="Mahrashi"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Par heat techno.png"
                    alt="Par Heat Techno"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-8 sm:gap-12 md:gap-16 items-center justify-center min-w-max px-4">
                  <img
                    src="/Industries logo/Asahi india.png"
                    alt="Asahi India"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/TCS.png"
                    alt="TCS"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/L&T.png"
                    alt="L&T"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Reliance Industries.png"
                    alt="Reliance Industries"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Tech mahindra.jpg"
                    alt="Tech Mahindra"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Polycab.png"
                    alt="Polycab"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Thermax.png"
                    alt="Thermax"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/torrent power.png"
                    alt="Torrent Power"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Elecon.png"
                    alt="Elecon"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/GSFC.jpg"
                    alt="GSFC"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Meditab.png"
                    alt="Meditab"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/emipro.png"
                    alt="Emipro"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Dosepacker.jpg"
                    alt="Dosepacker"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Sanmar.jpg"
                    alt="Sanmar"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Omega.png"
                    alt="Omega"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/MG.png"
                    alt="MG"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/SMS.png"
                    alt="SMS"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/TEV.png"
                    alt="TEV"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Mahrashi.png"
                    alt="Mahrashi"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/Industries logo/Par heat techno.png"
                    alt="Par Heat Techno"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Softwares Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Major Softwares
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Industry-standard tools and technologies used in our curriculum
              </p>
            </div>

            {/* Auto-rotating Software Logo Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                <div className="flex gap-8 sm:gap-12 md:gap-16 items-center justify-center min-w-max px-4">
                  <img
                    src="/software/s1.jpg"
                    alt="Software 1"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s2.jpg"
                    alt="Software 2"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s3.jpg"
                    alt="Software 3"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s4.jpg"
                    alt="Software 4"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s5.jpg"
                    alt="Software 5"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s6.jpg"
                    alt="Software 6"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s7.jpg"
                    alt="Software 7"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s8.jpg"
                    alt="Software 8"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s9.jpg"
                    alt="Software 9"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s10.jpg"
                    alt="Software 10"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-8 sm:gap-12 md:gap-16 items-center justify-center min-w-max px-4">
                  <img
                    src="/software/s1.jpg"
                    alt="Software 1"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s2.jpg"
                    alt="Software 2"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s3.jpg"
                    alt="Software 3"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s4.jpg"
                    alt="Software 4"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s5.jpg"
                    alt="Software 5"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s6.jpg"
                    alt="Software 6"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s7.jpg"
                    alt="Software 7"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s8.jpg"
                    alt="Software 8"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s9.jpg"
                    alt="Software 9"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                  <img
                    src="/software/s10.jpg"
                    alt="Software 10"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Development & Placement Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Career Development & Placement
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
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
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Contact Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#004D83] rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h3 className="text-xl font-bold text-[#004D83] mb-3">
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
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#004D83] rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h3 className="text-xl font-bold text-[#004D83] mb-3">
                    Phone Number
                  </h3>
                  <a
                    href="tel:+912697265221"
                    className="text-gray-600 text-lg hover:text-[#004D83] transition-colors duration-300"
                  >
                    +91-2697-265221
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#004D83] rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h3 className="text-xl font-bold text-[#004D83] mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:hod.me@charusat.ac.in"
                    className="text-gray-600 text-lg hover:text-[#004D83] transition-colors duration-300 break-all"
                  >
                    hod.me@charusat.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4977684772726!2d72.8188!3d22.7567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4dfffffffff%3A0x1234567890!2sChaUSAT%20Campus%2C%20Changa!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CHARUSAT Campus Location"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}
