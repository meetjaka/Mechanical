import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function CastingSimulation() {
  const facilities = [
    {
      image: "/csefc1.jpg",
      title: "Auto CAST",
    },
    {
      image: "/csefc2.jpg",
      title: "COMSOL",
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
              Casting Simulation & E-Foundry Cell
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-700 leading-7 text-justify text-base md:text-lg">
              E-Foundry empowers teachers in engineering and polytechnic
              institutes to enhance the interest and employability of students
              in metal casting, the mother industry in manufacturing sector.
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
                  <div className="relative w-full h-80 md:h-96 bg-white">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-contain"
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

        <div className="h-12"></div>
      </main>
    </div>
  );
}
