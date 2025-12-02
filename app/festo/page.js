import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function FestoPage() {
  return (
    <div className="min-h-screen bg-white">
      <DepartmentNavbar />

      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-[#004D83] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              FESTO Centre of Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              (Pneumatics, Hydraulics & Factory Automation)
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden border border-gray-200">
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
        <div className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-7 text-justify">
                Mechanical Engineering Department has established Experience
                Center for Applied Industrial Mechatronics in year of 2018 in
                collaboration with FESTO India Private Limited. Aim of this
                center is to provide the international standard training on
                Industrial automation. These learning facilities place students
                in real life situations and enable them to quickly improve
                practical experience of high tech components used in factory and
                Industrial automation.
              </p>
            </div>

            {/* Training Equipments for Pneumatics Lab */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#004D83] mb-4 border-b-2 border-[#004D83] pb-2 inline-block">
                TRAINING EQUIPMENTS FOR PNEUMATICS LAB:
              </h2>

              <div className="mt-6">
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>
                    Mobile Workstation for Pneumatics with two drawer Unit
                    (Double Sided) -1 set
                  </li>
                  <li>Basic Pneumatic Training Kit- 2 sets</li>
                  <li>Add-on Basic Electro Pneumatic Training Kit- 2 sets</li>
                  <li>Add-on PLC Training Kit- 2 sets</li>
                  <li>
                    Necessary Software consisting of:
                    <ul className="ml-8 mt-2 space-y-1 list-disc list-inside">
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
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#004D83] mb-4 border-b-2 border-[#004D83] pb-2 inline-block">
                TRAINING EQUIPMENTS FOR HYDRAULICS LAB:
              </h2>

              <div className="mt-6">
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>
                    Mobile Workstation for Hydraulic with two Drawer unit 9
                    Double Sided) – 1 set
                  </li>
                  <li>Basic Hydraulic Training Kit- 2 sets</li>
                  <li>Add-on Basic Electro Hydraulic Training Kit- 2 Sets</li>
                  <li>
                    Fluidsim 5 Hydraulic Simulation Software, Six network
                    License- 1 No
                  </li>
                  <li>Necessary Books- 1 Set</li>
                </ol>
              </div>
            </div>

            {/* Certificate Courses Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#004D83] mb-4 border-b-2 border-[#004D83] pb-2 inline-block">
                CERTIFICATE COURSES:
              </h2>

              <div className="mt-6">
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Basic Pneumatics & Electro Pneumatics</li>
                  <li>Hydraulics & Electro Hydraulics</li>
                  <li>Implementing Industry 4.0</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="h-12"></div>
      </main>
    </div>
  );
}
