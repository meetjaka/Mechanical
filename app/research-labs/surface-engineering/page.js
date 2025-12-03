import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function SurfaceEngineering() {
  const facilities = [
    {
      image: "/sel1.jpg",
      title: "DCRF Magnetron Sputtering",
    },
    {
      image: "/sel2.jpg",
      title: "Automatic Goniometer",
    },
    {
      image: "/sel3.jpg",
      title: "Ultrasonic Probe Sonicator",
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
              Surface Engineering Lab
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-700 leading-7 text-justify text-base md:text-lg">
              The laboratory has facilities like RF/DC Magnetron Sputtering to
              develop the coating, Goniometer to study wettability of newly
              develop surface, which are developed with partial funding under
              following sanctioned project.
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
                Projects
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-[#004D83] p-6 md:p-8">
                <p className="text-gray-700 leading-7 text-justify">
                  A research project titled "Tribological and wettability
                  studies of nanostructured thin films synthesized by magnetron
                  sputtering" sponsored by AICTE in Research Promotional Scheme
                  (RPS). Principal Investigator: Dr. Shushant Rawal.
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
