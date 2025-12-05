import DepartmentNavbar from "@/components/DepartmentNavbar";

export default function GrantsConsultancy() {
  return (
    <div className="bg-gray-50">
      <DepartmentNavbar />

      <main className="pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="inline-block px-4 py-2 bg-[#0066A1] text-white rounded-md text-sm font-semibold tracking-wide mb-4">
              Research & Innovation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#004D83] mb-4">
              Research Grants &{" "}
              <span className="text-[#0066A1]">Consultancy</span>
            </h1>
          </div>
        </div>

        {/* Research Grants Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Funded Projects
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Research <span className="text-[#0066A1]">Grants</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive list of research grants secured from various
                national and international funding agencies
              </p>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#004D83] to-[#0066A1] text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Year
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Grant (in Rs.)
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Type of Grant
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Funding Agency
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        PI
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2020-2022
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        05.00 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Sagar Chokshi
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Development and characterization of biodegradable
                        composite material
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2020-2021
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        03.20 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Maulik Shah
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Design, Development and Testing of 3-stage translational
                        along with one rotational motorized system for optical
                        elements
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2019-2021
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        04.70 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Axat Patel, Mr. Rikin Nayak, Mr. Hardik Jaiswal
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Design and Development of Modular Multispectral Imaging
                        System with mounting attachment for Precision Farming
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2019-2022
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        03.51 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Kawaljit Singh Randhawa
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Tribological Studies of Hexagonal Boron Nitride (H-BN)
                        Reinforced Nylon 6 Composites for Rubbing Parts
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2019-2022
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        01.00 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Sujalkumar V. Dadhaniya
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Experimental Investigation to optimize the engine
                        parameters for reducing the emission and enhancing the
                        performance of single cylinder CI engine operated with
                        Emulsified Bio-diesel blends
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2019-2022
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        00.50 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Zankhan Sonara & Dr. Kamlesh Chauhan
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Experimental investigation and analysis of thermal
                        barrier coating for enhancing the performance of SI
                        engine
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2019-2020
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        01.20 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Seed Money
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        CHARUSAT
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Dipal Patel
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Experimental investigations on thrust force and
                        delamination factor in drilling of hybrid matrix
                        composites using magneto rheological dampers
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2018-2020
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        02.15 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        ISRO
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Dipal Patel & Dr. R. V. Upadhyay
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Design and development of prototype shock
                        absorber/Isolator using magnetorheological Dampers
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2017-2019
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        17.04 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        BRNS, DAE.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Mr. Maulik Shah, Mr. Axat Patel (CI)
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Design and Development of Calorimetric Dummy Load for
                        42GHz/200kW/3sec Gyrotron for start-up studies in
                        tokamak ADITYA
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2016-2020
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        61.05 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Network Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        DST
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Mayur Sutaria
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        SMART (Sustainable Metal casting using Advanced Research
                        and Technology) Foundry 2020. (Total Project Cost: 950
                        lakhs)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2016-2018
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        04.70 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        GUJCOST
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Dattatraya Subhedar
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Experimental Investigation of Nanofluid Thermal
                        Conductivity Enhancement
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2015-2018
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        15.18 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        RPS AICTE
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Mayur Sutaria
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Time-varying Performance Evaluation of Boundary Mould
                        Elements for Effective Application of CAD and Simulation
                        Technologies in Indian Foundries
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2013
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        22.79 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        RPS AICTE
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Sushant Rawal
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Tribological and wettability studies of nanostructured
                        thin films
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2012–2013
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        01.70 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Research Project
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        NKN, GOI
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Dr. Mayur Sutaria
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        E–foundry project in collaboration with IIT–Bombay
                        (Total Project Cost: 152 Lacs)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Laboratory Development Grants Section */}
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#0066A1]/10 text-[#0066A1] rounded-md text-sm font-semibold tracking-wide mb-3">
                Infrastructure Development
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Laboratory{" "}
                <span className="text-[#0066A1]">Development Grants</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Modernizing our laboratories with state-of-the-art equipment
                through AICTE funding
              </p>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#004D83] to-[#0066A1] text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Year
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Grant (in Rs.)
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Type of Grant
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Funding Agency
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2012 – 13
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        10.0 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        MODROB
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        AICTE
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Surface Texture Measuring System
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2011 – 12
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        9.0 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        MODROB
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        AICTE
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Machine Vision Lab
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2010 – 11
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        9.5 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        MODROB
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        AICTE
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Production & Automation Lab
                      </td>
                    </tr>
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2009 – 10
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        6.5 Lacs
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        MODROB
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        AICTE
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        Reverse Engineering Lab
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Consultancy Grant Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-md text-sm font-semibold tracking-wide mb-3">
                Industry Partnership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Consultancy <span className="text-[#0066A1]">Grant</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Collaborative projects with industry partners demonstrating our
                practical expertise
              </p>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#004D83] to-[#0066A1] text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Year
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Grant (in Rs.)
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Funding Agency
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-[#0066A1]/5 transition-colors duration-200">
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                        2017
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        4,05,240/-
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Nimisha International
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        F.C. Bus Project
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 bg-white"></div>
      </main>
    </div>
  );
}
