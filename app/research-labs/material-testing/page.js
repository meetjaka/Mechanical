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
    <div>
      <DepartmentNavbar />

      <main className="bg-white pt-16">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#004D83] to-[#0066A1] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Material Testing & Characterization Lab
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-700 leading-7 text-justify text-base md:text-lg mb-6">
              The material testing & characterization lab provides various
              testing facilities to carry the material characterization. This
              lab has the facilities of universal testing machine, wear and
              friction monitor, 3D Microscope, 3D Printer, Surface texture
              machine for the characterization of material. These equipments
              were purchased with partial funding under AICTE MODROB scheme,
              which provides following facilities to the users:
            </p>

            <div className="space-y-4 text-gray-700 leading-7 text-justify text-base md:text-lg">
              <div className="flex gap-3">
                <span className="text-[#004D83] font-bold flex-shrink-0">
                  •
                </span>
                <p>
                  The universal testing machine provides testing facilities like
                  tensile testing, compression testing and flexural testing for
                  metals, non-metals and composites with load carrying capacity
                  up to 50KN. It also provides the tensile testing facility for
                  the natural and synthetic fibers. It has an inbuilt software
                  facility to plot the graphs for various experimental results.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#004D83] font-bold flex-shrink-0">
                  •
                </span>
                <p>
                  Wear and friction setup measures wear and friction for metals,
                  non-metals and composites. It has an inbuilt software facility
                  to plot the graphs for various experimental results.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#004D83] font-bold flex-shrink-0">
                  •
                </span>
                <p>
                  Vision measuring machine "Quick Scope" (3D Microscope;
                  MITUTOYO/ QS-L2010ZB) for surface observation and to measure
                  dimensions.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#004D83] font-bold flex-shrink-0">
                  •
                </span>
                <p>
                  3D Laser Scanner with Reverse Engineering Software (ROLAND
                  SCANNER / LPX – 60) to get 3D CAD model from physical object.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#004D83] font-bold flex-shrink-0">
                  •
                </span>
                <p>
                  Surface texture measuring system (MITUTOYO / SURF TEST, SV –
                  2100) for measurement of surface roughness.
                </p>
              </div>
            </div>
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
