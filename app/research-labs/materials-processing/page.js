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
    <div>
      <DepartmentNavbar />

      <main className="bg-white pt-16">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#004D83] to-[#0066A1] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Material Processing Lab
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-700 leading-7 text-justify text-base md:text-lg">
              Materials Processing Laboratory (MPL) provides a platform to UG,
              PG and PhD students to learn, explore and carryout research in the
              field of materials processing.
            </p>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 overflow-hidden"
                >
                  <div className="relative w-full h-64 md:h-72 bg-gray-100">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <p className="text-gray-800 text-sm md:text-base">
                      {facility.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                PROJECTS
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-[#004D83] p-6 md:p-8">
                <p className="text-gray-700 leading-7 text-justify">
                  Project titled "Time-varying Performance Evaluation of
                  Boundary Mould Elements (Feed-aids) for Effective Application
                  of CAD and Simulation Technologies in Indian Foundries" funded
                  under Research Promotion Scheme (RPS) of AICTE. Project
                  duration: September 2015- August 2018.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#004D83] p-6 md:p-8">
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

        <div className="h-12"></div>
      </main>
    </div>
  );
}
