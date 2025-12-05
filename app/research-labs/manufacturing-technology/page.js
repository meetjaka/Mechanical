import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function ManufacturingTechnology() {
  const facilities = [
    {
      image: "/mt1.jpg",
      title: "CNC Vertical Machining Center",
    },
    {
      image: "/mt2.jpg",
      title: "Joemars Electrical Discharge Machining setup",
    },
    {
      image: "/mt3.jpg",
      title: "Kistler 9272 Piezoelectric Dynamometer",
    },
    {
      image: "/mt4.jpg",
      title:
        "Data Logging System from National Instruments equipped with LabVIEW software",
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
              Manufacturing{" "}
              <span className="text-[#0066A1]">Technology Lab</span>
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
              The Manufacturing Technology lab provides facility to perform
              machining of various metals at macro and micro level. The
              laboratory is capable to analyse accurate cutting force and torque
              in drilling/milling operations. The laboratory has facility like
              Jyoti make CNC Vertical Machining Center, High speed drilling, Hot
              press, Joemars Electrical Discharge Machining setup, Kistler 9272
              dynamometer, Data logging system from National Instruments
              equipped with LabVIEW software.
            </p>
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
                  A research project titled, "Development of high fiber volume
                  fraction –polymer matrix Composites (HFV– PMCs) using Vacuum
                  Assisted Resin Transfer Molding (VARTM)", Sponsored by
                  GUJCOST. CO-PI: Dr. Vijaykumar Chaudhary.
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
