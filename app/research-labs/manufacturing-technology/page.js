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
    <div>
      <DepartmentNavbar />

      <main className="bg-white pt-16">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#004D83] to-[#0066A1] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Manufacturing Technology Lab
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-700 leading-7 text-justify text-base md:text-lg">
              The Manufacturing Technology lab provides facility to perform
              machining of various metals at macro and micro level. The
              laboratory is capable to analyse accurate cutting force and torque
              in drilling/milling operations. The laboratory has facility like
              Jyoti make CNC Vertical Machining Center, High speed drilling, Hot
              press, Joemars Electrical Discharge Machining setup, Kistler 9272
              dynamometer, Data logging system from National Instruments
              equipped with LabVIEW software.
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
                  A research project titled, "Development of high fiber volume
                  fraction –polymer matrix Composites (HFV– PMCs) using Vacuum
                  Assisted Resin Transfer Molding (VARTM)", Sponsored by
                  GUJCOST. CO-PI: Dr. Vijaykumar Chaudhary.
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
