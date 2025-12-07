import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function FestoPage() {
  return (
    <div className="bg-gray-50">
      <DepartmentNavbar />

      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="inline-block px-4 py-2 bg-[#0066A1] text-white rounded-md text-sm font-semibold tracking-wide mb-4">
              Experience Centre
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#004D83] mb-4">
              FESTO-EXPERIENCE <span className="text-[#0066A1]">Centre</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Pneumatics, Hydraulics & Factory Automation
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Our Facility
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Experience <span className="text-[#0066A1]">Centre</span>
              </h2>
            </div>
            <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <Image
                src="/festo.jpg"
                alt="FESTO Centre of Excellence"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Introduction */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                  Centre <span className="text-[#0066A1]">Overview</span>
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 leading-8 text-center text-base md:text-lg">
                  Mechanical Engineering Department has established Experience
                  Center for Applied Industrial Mechatronics in year of 2018 in
                  collaboration with FESTO India Private Limited. Aim of this
                  center is to provide the international standard training on
                  Industrial automation. These learning facilities place
                  students in real life situations and enable them to quickly
                  improve practical experience of high tech components used in
                  factory and Industrial automation.
                </p>
              </div>
            </div>

            {/* Training Equipments for Pneumatics Lab */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D83] mb-2">
                  Training Equipments for{" "}
                  <span className="text-[#0066A1]">Pneumatics Lab</span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <ol className="space-y-4 list-decimal list-inside text-gray-700 text-base md:text-lg leading-8">
                  <li>
                    Mobile Workstation for Pneumatics with two drawer Unit
                    (Double Sided) - 1 set
                  </li>
                  <li>Basic Pneumatic Training Kit - 2 sets</li>
                  <li>Add-on Basic Electro Pneumatic Training Kit - 2 sets</li>
                  <li>Add-on PLC Training Kit - 2 sets</li>
                  <li>
                    Necessary Software consisting of:
                    <ul className="ml-8 mt-3 space-y-2 list-disc list-inside">
                      <li>
                        1 x Fluidsim 5 Pneumatic simulation Software, 6 Network
                        Licence
                      </li>
                      <li>1x Step 7 Programming software, six licence</li>
                      <li>1x Ciros Education, six licence</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            {/* Training Equipments for Hydraulics Lab */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D83] mb-2">
                  Training Equipments for{" "}
                  <span className="text-[#0066A1]">Hydraulics Lab</span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <ol className="space-y-4 list-decimal list-inside text-gray-700 text-base md:text-lg leading-8">
                  <li>
                    Mobile Workstation for Hydraulic with two Drawer unit 9
                    Double Sided) – 1 set
                  </li>
                  <li>Basic Hydraulic Training Kit - 2 sets</li>
                  <li>Add-on Basic Electro Hydraulic Training Kit - 2 Sets</li>
                  <li>
                    Fluidsim 5 Hydraulic Simulation Software, Six network
                    License - 1 No
                  </li>
                  <li>Necessary Books - 1 Set</li>
                </ol>
              </div>
            </div>

            {/* Certificate Courses Section */}
            <div className="mb-8">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                  Certifications
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#004D83] mb-2">
                  Certificate <span className="text-[#0066A1]">Courses</span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                <ol className="space-y-4 list-decimal list-inside text-gray-700 text-base md:text-lg leading-8">
                  <li>Basic Pneumatics & Electro Pneumatics</li>
                  <li>Hydraulics & Electro Hydraulics</li>
                  <li>Implementing Industry 4.0</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
