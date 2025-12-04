import DepartmentNavbar from "@/components/DepartmentNavbar";

export default function AboutPage() {
  const stats = [
    { value: "535+", label: "Publications" },
    { value: "16:1", label: "Student Teacher Ratio" },
    { value: "200+", label: "Number of Students" },
    { value: "144", label: "Workshop Organized" },
    { value: "31", label: "Projects & Grant Received" },
    { value: "93%", label: "Placement: 2024-25" },
  ];

  const btechMinors = [
    "Robotics & Artificial Intelligence",
    "Robotics & Internet of Things",
    "Electrical Vehicle Systems",
    "GIS & Remote Sensing",
    "Environmental Geotechnology",
    "Green Technology & Sustainability Engineering",
    "Smart Cities",
    "Artificial Intelligence & Machine Learning",
    "3D Printing",
  ];

  const programs = [
    {
      title: "B.Tech. Mechanical Engineering",
      hasMinors: true,
    },
    {
      title: "M.Tech. Advanced Manufacturing Technology",
      hasMinors: false,
    },
    {
      title: "M.Tech. Thermal",
      hasMinors: false,
    },
    {
      title: "Ph.D. Mechanical Engineering",
      hasMinors: false,
    },
  ];

  return (
    <div className="bg-gray-50">
      <DepartmentNavbar />

      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-[#0066A1] text-white rounded-md text-sm font-semibold tracking-wide mb-4">
                  Est. 2001
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#004D83] mb-4">
                  About <span className="text-[#0066A1]">Us</span>
                </h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                  CHAMOS Matrusanstha Department of Mechanical Engineering
                  (Estd. 2001) offers 60 seats in B. Tech. Our department is
                  committed to quality education, research and industry
                  collaboration.
                </p>
              </div>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="text-center bg-white rounded-xl shadow-md p-6 min-w-[120px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">
                    535+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Publications</div>
                </div>
                <div className="text-center bg-white rounded-xl shadow-md p-6 min-w-[120px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Our Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Department <span className="text-[#0066A1]">Achievements</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Showcasing our commitment to excellence in education, research, and industry collaboration
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-[#0066A1] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#0066A1] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center">
                    <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#0066A1] to-[#004D83] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Academic Programs
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D83] mb-3">
                Our <span className="text-[#0066A1]">Programs</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                The Department of Mechanical Engineering offers comprehensive programs across undergraduate, postgraduate, and doctoral levels
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* B.Tech Program - Large Featured Card */}
              <div className="lg:col-span-2 group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#0066A1] transform hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066A1] to-[#004D83]"></div>
                
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 border-2 border-[#0066A1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-8 h-8 text-[#0066A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#004D83] mb-3">
                        B.Tech. Mechanical Engineering
                      </h3>
                      <span className="inline-block text-[#0066A1] text-sm font-semibold bg-[#0066A1]/10 px-4 py-2 rounded-lg">
                        60 Seats Available
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                    Comprehensive 4-year undergraduate program designed to build strong fundamentals in mechanical engineering with hands-on practical experience and industry exposure.
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t-2 border-gray-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#004D83] mb-1">4</div>
                      <div className="text-xs text-gray-600 font-medium">Years Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#004D83] mb-1">60</div>
                      <div className="text-xs text-gray-600 font-medium">Total Seats</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#004D83] mb-1">9</div>
                      <div className="text-xs text-gray-600 font-medium">Minor Options</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#004D83] mb-1">93%</div>
                      <div className="text-xs text-gray-600 font-medium">Placement Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* M.Tech & PhD Stack */}
              <div className="space-y-6">
                {/* M.Tech Programs */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-2 border-gray-200 hover:border-[#0066A1] transform hover:-translate-y-1">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 border-2 border-[#0066A1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-7 h-7 text-[#0066A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#004D83] mb-4 group-hover:text-[#0066A1] transition-colors duration-300">
                          M.Tech. Programs
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#0066A1] hover:bg-[#0066A1]/5 transition-all duration-300">
                            <div className="w-1.5 h-1.5 bg-[#0066A1] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm font-medium text-gray-800">Advanced Manufacturing Technology</span>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#0066A1] hover:bg-[#0066A1]/5 transition-all duration-300">
                            <div className="w-1.5 h-1.5 bg-[#0066A1] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm font-medium text-gray-800">Thermal Engineering</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ph.D. Program */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-2 border-orange-500 transform hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                        <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#004D83] mb-2">
                          Ph.D. Mechanical Engineering
                        </h3>
                        <p className="text-gray-700 text-sm font-medium">Advanced research & innovation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* B.Tech Minor Specializations - Full Width */}
              <div className="lg:col-span-3 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-2 border-orange-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 border-2 border-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#004D83] mb-2">
                        B.Tech. Minor Specializations
                      </h3>
                      <p className="text-gray-600 font-medium">Choose your specialization path from 9 cutting-edge domains</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {btechMinors.map((minor, idx) => (
                      <div key={idx} className="group/item bg-white rounded-xl p-4 shadow-sm border-2 border-gray-200 hover:border-orange-500 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 border-2 border-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-500 font-bold text-sm">{idx + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-800 group-hover/item:text-orange-600 transition-colors duration-300 leading-tight">
                              {minor}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Watch & Learn
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Ph.D.: <span className="text-[#0066A1]">Mechanical Engineering</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the opportunities and research excellence in our doctoral program
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/skXI5gOeiM4?si=fDHjexY-mxn48zWT"
                  title="CHAMOS Matrusanstha Department of Mechanical Engineering"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
