import DepartmentNavbar from "@/components/DepartmentNavbar";

export default function TestingFacilities() {
  return (
    <div>
      <DepartmentNavbar />

      <main className="bg-white pt-16">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#004D83] to-[#0066A1] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Testing Facilities
            </h1>
            <p className="text-white/90 mt-2 text-lg">
              Material Testing and Characterization
            </p>
          </div>
        </div>

        {/* Testing Facilities Section */}
        <div className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                MATERIAL TESTING AND CHARACTERIZATION
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#004D83] text-white">
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
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                MANUFACTURING TECHNOLOGY
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#004D83] text-white">
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
        <div className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                INSTRUCTIONS
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#004D83] font-bold mr-3 mt-1">•</span>
                  <span className="text-base md:text-lg">
                    Prior request to use the instrument should be sent to Head
                    of the Department, Mechanical Engineering.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#004D83] font-bold mr-3 mt-1">•</span>
                  <span className="text-base md:text-lg">
                    Only on approval and given date, the person should come to
                    avail the service with the required sample (if applicable)
                    along–with the Requisition slip duly filled and signed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#004D83] font-bold mr-3 mt-1">•</span>
                  <span className="text-base md:text-lg">
                    The payment for the same should be done in advance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-12"></div>
      </main>
    </div>
  );
}
