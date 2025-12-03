"use client";

import dynamic from "next/dynamic";
import DepartmentNavbar from "@/components/DepartmentNavbar";
import HeroCarousel from "@/components/HeroCarousel";
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
              <FeatureCard
                icon={Target}
                title="Program Educational Objectives"
                description="Strategic goals defining the expected accomplishments of graduates"
                accent="blue"
              />

              <FeatureCard
                icon={Award}
                title="Program Outcomes"
                description="Skills and knowledge students acquire by graduation"
                accent="orange"
              />

              <FeatureCard
                icon={Zap}
                title="Program Specific Outcomes"
                description="Specialized competencies unique to mechanical engineering"
                accent="navy"
              />
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

        {/* Statistics Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
                Department Statistics
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Numbers that reflect our commitment to excellence in education
                and research
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <StatCard value="466" label="Publications" icon={FileText} />
              <StatCard
                value="14:1"
                label="Student-Teacher Ratio"
                icon={Users}
              />
              <StatCard value="172" label="Students" icon={UserCheck} />
              <StatCard value="115" label="Workshops" icon={BarChart} />
              <StatCard value="31" label="Funded Projects" icon={Award} />
              <StatCard value="95%" label="Placement Rate" icon={Target} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
