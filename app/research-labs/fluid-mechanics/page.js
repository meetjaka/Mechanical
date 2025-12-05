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
              Fluid Mechanics &{" "}
              <span className="text-[#0066A1]">Heat Transfer Lab</span>
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
                Lab <span className="text-[#0066A1]">Overview</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-8 text-center text-base md:text-lg">
                The Fluid Mechanics lab provides Nanofluid synthesis and
                characterization facility along with conventional set up. The
                Heat transfer Laboratory has the facility of KD2 Prob thermal
                analyser to determine the thermal properties of nanofluid.
                Facilities are developed with partial funding under research
                project titled "Experimental investigation of Nanofluid thermal
                conductivity enhancement" sponsored by Gujarat Council on
                Science and Technology (GUJCOST). Principal Investigator: Prof.
                Dattatraya Subhedar.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Equipment Gallery
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Our <span className="text-[#0066A1]">Facilities</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full h-80 md:h-96 bg-white">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
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
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Research
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Our <span className="text-[#0066A1]">Projects</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 leading-8 text-center text-base md:text-lg">
                  Project titled "Experimental investigation of Nanofluid
                  thermal conductivity enhancement" sponsored by Gujarat Council
                  on Science and Technology (GUJCOST). Principal Investigator:
                  Dr. Dattatraya Subhedar.
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
