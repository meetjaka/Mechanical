import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function MaterialTesting() {
  const facilities = [
    {
      image: "/mtc1.jpg",
      title: "Universal Testing Machine",
    },
    {
      image: "/mtc2.jpg",
      title: "3D Printer",
    },
    {
      image: "/mtc3.jpg",
      title: "Wear & Friction Monitor",
    },
    {
      image: "/mtc4.jpg",
      title: "Surface Texture Machine",
    },
    {
      image: "/mtc5.jpg",
      title: "3D Microscope",
    },
    {
      image: "/mtc6.jpg",
      title: "3D Laser Scanner",
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
              Material Testing &{" "}
              <span className="text-[#0066A1]">Characterization Lab</span>
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
                Testing <span className="text-[#0066A1]">Capabilities</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-7 text-base md:text-lg mb-8">
                The material testing & characterization lab provides various
                testing facilities to carry the material characterization. This
                lab has the facilities of universal testing machine, wear and
                friction monitor, 3D Microscope, 3D Printer, Surface texture
                machine for the characterization of material. These equipments
                were purchased with partial funding under AICTE MODROB scheme,
                which provides following facilities to the users:
              </p>

              <ul className="space-y-4 text-gray-700 leading-7 text-base md:text-lg mb-12">
                <li className="flex gap-3">
                  <span className="text-[#0066A1] font-bold flex-shrink-0 text-xl">
                    •
                  </span>
                  <p>
                    The universal testing machine provides testing facilities
                    like tensile testing, compression testing and flexural
                    testing for metals, non-metals and composites with load
                    carrying capacity up to 50KN. It also provides the tensile
                    testing facility for the natural and synthetic fibers. It
                    has an inbuilt software facility to plot the graphs for
                    various experimental results.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0066A1] font-bold flex-shrink-0 text-xl">
                    •
                  </span>
                  <p>
                    Wear and friction setup measures wear and friction for
                    metals, non-metals and composites. It has an inbuilt
                    software facility to plot the graphs for various
                    experimental results.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0066A1] font-bold flex-shrink-0 text-xl">
                    •
                  </span>
                  <p>
                    Vision measuring machine "Quick Scope" (3D Microscope;
                    MITUTOYO/ QS-L2010ZB) for surface observation and to measure
                    dimensions.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0066A1] font-bold flex-shrink-0 text-xl">
                    •
                  </span>
                  <p>
                    3D Laser Scanner with Reverse Engineering Software (ROLAND
                    SCANNER / LPX – 60) to get 3D CAD model from physical
                    object.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0066A1] font-bold flex-shrink-0 text-xl">
                    •
                  </span>
                  <p>
                    Surface texture measuring system (MITUTOYO / SURF TEST, SV –
                    2100) for measurement of surface roughness.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Facilities Gallery Section */}
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

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
