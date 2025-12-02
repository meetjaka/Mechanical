import DepartmentNavbar from "@/components/DepartmentNavbar";

export default function AboutPage() {
  const stats = [
    { value: "466", label: "Publications" },
    { value: "14:1", label: "Student Teacher Ratio" },
    { value: "172", label: "Number of Students" },
    { value: "115", label: "Workshop Organized" },
    { value: "31", label: "Projects & Grant Received" },
    { value: "95%", label: "Placement - 2024" },
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
        <div className="bg-gradient-to-br from-[#004D83] to-[#003666] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Us
                </h1>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl">
                  CHAMOS Matrusanstha Department of Mechanical Engineering
                  (Estd. 2001) offers 60 seats in B. Tech. Our department is
                  committed to quality education, research and industry
                  collaboration.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[120px]">
                  <div className="text-3xl md:text-4xl font-bold text-[#F5A623]">
                    466
                  </div>
                  <div className="text-sm text-blue-100 mt-1">Publications</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[120px]">
                  <div className="text-3xl md:text-4xl font-bold text-[#F5A623]">
                    172
                  </div>
                  <div className="text-sm text-blue-100 mt-1">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004D83] mb-3">
                Department Achievements
              </h2>
              <div className="w-20 h-1 bg-[#F5A623] mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#F5A623] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004D83] to-[#F5A623] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#004D83] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              The Department of Mechanical Engineering offers following
              programmes:
            </h2>

            <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200">
              <ul className="space-y-6">
                <li className="text-gray-800">
                  <span className="font-semibold text-lg">
                    B.Tech. Mechanical Engineering
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-lg text-gray-800">
                    B. Tech. (Mechanical): Minor Specialization
                  </span>
                  <ol className="mt-3 ml-6 space-y-2 list-decimal marker:text-gray-600">
                    {btechMinors.map((minor, idx) => (
                      <li key={idx} className="text-gray-700 pl-2">
                        {minor}
                      </li>
                    ))}
                  </ol>
                </li>

                <li className="text-gray-800">
                  <span className="font-semibold text-lg">
                    M.Tech. Advanced Manufacturing Technology
                  </span>
                </li>

                <li className="text-gray-800">
                  <span className="font-semibold text-lg">M.Tech. Thermal</span>
                </li>

                <li className="text-gray-800">
                  <span className="font-semibold text-lg">
                    Ph.D. Mechanical Engineering
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
