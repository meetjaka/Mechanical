import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function MaterialsProcessing() {
  const facilities = [
    {
      image: "/mpf1.jpg",
      title: "Electric resistance melting furnace",
    },
    {
      image: "/mpf2.jpg",
      title: "Inverted metallurgical microscope",
    },
    {
      image: "/mpf3.jpg",
      title: "Thermal Imaging Camera (AICTE funded project under RPS)",
    },
    {
      image: "/mpf4.jpg",
      title: "Modular Melting Setup (Smart foundry 2020-DST funded project)",
    },
    {
      image: "/mpf5.jpg",
      title: "NI Data Acquisition System Temperature Module",
    },
    {
      image: "/mpf6.jpg",
      title: "Ultrasonic Melt Stirring Setup",
    },
    {
      image: "/mpf7.jpg",
      title: "Centrifugal Casting Machine",
    },
  ];

  return (
    <div className="bg-gray-50">
      <DepartmentNavbar />

      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="inline-block px-4 py-2 bg-[#0066A1] text-white rounded-md text-sm font-semibold tracking-wide mb-4">
              Research Lab
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#004D83] mb-4">
              Material <span className="text-[#0066A1]">Processing Lab</span>
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                About the Lab
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Our <span className="text-[#0066A1]">Facilities</span>
              </h2>
            </div>
            <p className="text-gray-700 leading-7 text-center text-base md:text-lg max-w-3xl mx-auto mb-12">
              Materials Processing Laboratory (MPL) provides a platform to UG,
              PG and PhD students to learn, explore and carryout research in the
              field of materials processing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full h-64 md:h-72 bg-gray-100">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <p className="text-gray-800 text-sm md:text-base font-medium">
                      {facility.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Research Initiatives
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Our <span className="text-[#0066A1]">Projects</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="group bg-white rounded-2xl shadow-lg border-l-4 border-[#0066A1] p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 leading-7 text-justify">
                  Project titled "Time-varying Performance Evaluation of
                  Boundary Mould Elements (Feed-aids) for Effective Application
                  of CAD and Simulation Technologies in Indian Foundries" funded
                  under Research Promotion Scheme (RPS) of AICTE. Project
                  duration: September 2015- August 2018.
                </p>
              </div>

              <div className="group bg-white rounded-2xl shadow-lg border-l-4 border-[#0066A1] p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 leading-7 text-justify">
                  Project titled "SMART (Sustainable Metalcasting using Advanced
                  Research and Technology) Foundry 2020" funded under Technology
                  System Development Program (TSDP) scheme of DST. Project
                  duration: September 2016-August 2019.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
