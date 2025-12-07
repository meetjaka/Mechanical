import DepartmentNavbar from "@/components/DepartmentNavbar";

export default function TestingFacilities() {
  return (
    <div className="bg-gray-50">
      <DepartmentNavbar />

      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="inline-block px-4 py-2 bg-[#0066A1] text-white rounded-md text-sm font-semibold tracking-wide mb-4">
              Facilities
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#004D83] mb-4">
              Testing <span className="text-[#0066A1]">Facilities</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Material Testing and Characterization
            </p>
          </div>
        </div>

        {/* Testing Facilities Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Testing Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Material Testing &{" "}
                <span className="text-[#0066A1]">Characterization</span>
              </h2>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#004D83] to-[#0066A1] text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Sr. No.
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Facility/ Instrument
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Location
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Faculty
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Day and Time for Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        1
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Wear and Fiction Monitor
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 425/A
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Kamlesh Chauhan
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        2
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        UTM Machine (Tinius Olsen)
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 425/A
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Sagar Choksi
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        3
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        3D Microscope (Machine Vision)
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 425/B
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Akash Vyas
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        4
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Surface Texture Measuring System
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 425/B
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Akash Vyas
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        5
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Tool Dynamometer (Kistler 9272; piezo based)
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 419
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Vijay Chaudhary
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        6
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Contact Angle Goniometer
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 423
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Kamlesh Chauhan
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Technology Section */}
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Manufacturing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Manufacturing <span className="text-[#0066A1]">Technology</span>
              </h2>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#004D83] to-[#0066A1] text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Sr. No.
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Facility/ Instrument
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Location
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Faculty
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Day and Time for Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        1
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Electrical discharge machine
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 419
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Akash Vyas
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        2
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CNC Vertical Machining Center
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 419
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Akash Vyas
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        3
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        DC/RF Magentron Sputtering Set–up
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 423
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Kamlesh Chauhan
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        4
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        3D Laser Scanner (Reverse Engineering)
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Room No: 425/B
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Akash Vyas
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Saturday 10.00 a.m. to 04.00 p.m.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Guidelines
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Usage <span className="text-[#0066A1]">Instructions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 hover:shadow-xl transition-all duration-300">
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="text-[#0066A1] font-bold text-2xl flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-8">
                    Prior request to use the instrument should be sent to Head
                    of the Department, Mechanical Engineering.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#0066A1] font-bold text-2xl flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-8">
                    Only on approval and given date, the person should come to
                    avail the service with the required sample (if applicable)
                    along–with the Requisition slip duly filled and signed.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#0066A1] font-bold text-2xl flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-8">
                    The payment for the same should be done in advance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
