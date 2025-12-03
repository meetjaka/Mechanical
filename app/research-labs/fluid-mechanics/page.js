import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function FluidMechanics() {
  const facilities = [
    {
      image: "/fm1.jpg",
      title: "KD2 Prob Thermal Analyser",
    },
    {
      image: "/fm2.jpg",
      title: "Wind Tunnel",
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
              Fluid Mechanics and Heat Transfer Lab
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-700 leading-7 text-justify text-base md:text-lg">
              The Fluid Mechanics lab provides Nanofluid synthesis and
              characterization facility along with conventional set up. The Heat
              transfer Laboratory has the facility of KD2 Prob thermal analyser
              to determine the thermal properties of nanofluid. Facilities are
              developed with partial funding under research project titled
              "Experimental investigation of Nanofluid thermal conductivity
              enhancement" sponsored by Gujarat Council on Science and
              Technology (GUJCOST). Principal Investigator: Prof. Dattatraya
              Subhedar.
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

        {/* Projects Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Projects
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-[#004D83] p-6 md:p-8">
                <p className="text-gray-700 leading-7 text-justify">
                  Project titled "Experimental investigation of Nanofluid
                  thermal conductivity enhancement" sponsored by Gujarat Council
                  on Science and Technology (GUJCOST). Principal Investigator:
                  Dr. Dattatraya Subhedar.
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
