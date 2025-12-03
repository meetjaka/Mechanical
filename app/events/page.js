import DepartmentNavbar from "@/components/DepartmentNavbar";
import Image from "next/image";

export default function Events() {
  const events = [
    {
      id: 1,
      year: "2023-24",
      title:
        "Visit to Amul Chocolate Plant, Mogar during the First Year B. Tech. Commencement Celebration",
      type: "Industry visit for students",
      date: "18-Jul-23 to 19-Jul-23",
    },
    {
      id: 2,
      year: "2023-24",
      title: "Recent trends in Alternate fuels and Renewable energy",
      type: "Endowment Chair Activity",
      date: "04-Aug-23 to 05-Aug-23",
    },
    {
      id: 3,
      year: "2022-23",
      title: "Quantitative Aptitude and Logical Reasoning",
      type: "value added course",
      date: "25-Feb-23",
    },
    {
      id: 4,
      year: "2023-24",
      title: "A workshop on design thinking",
      type: "Workshop",
      date: "11-Aug-23",
    },
    {
      id: 5,
      year: "2023-24",
      title: "Industrial Tour at Pune",
      type: "Industry visit for students",
      date: "25-Aug-23 to 28-Aug-23",
    },
    {
      id: 6,
      year: "2023-24",
      title: "CSIC Awareness Seminar for ME Staff",
      type: "Seminar",
      date: "19-Aug-23",
    },
    {
      id: 7,
      year: "2023-24",
      title: "CSIC Awareness Seminar for Students",
      type: "Seminar",
      date: "14-Sep-23",
    },
    {
      id: 8,
      year: "2023-24",
      title: "How to read Industrial Drawing",
      type: "Seminar",
      date: "21-Sep-23",
    },
    {
      id: 9,
      year: "2022-23",
      title: "Expert Session on Meditation Reduces Discrimination",
      type: "Equal Opportunity Cell Event",
      date: "5-Sep-22",
    },
    {
      id: 10,
      year: "2022-23",
      title: "Computer aided drafting through SOLIDWORKS",
      type: "Seminar",
      date: "17-Sep-22",
    },
    {
      id: 11,
      year: "2022-23",
      title: "The Development and Fabrication of a Medical Pump",
      type: "Workshop",
      date: "26-Sep-22 to 28-Sep-22",
    },
    {
      id: 12,
      year: "2022-23",
      title: "Solidworks",
      type: "Value added course",
      date: "1-Oct-22 to 7-Oct-22",
    },
    {
      id: 13,
      year: "2022-23",
      title: "LaTeX- an academic writing tool",
      type: "Workshop",
      date: "21-Oct-22",
    },
    {
      id: 14,
      year: "2022-23",
      title:
        "One Week Faculty Development Program (FDP) on Curriculum Design for Outcome-Based Education",
      type: "FDP",
      date: "1-Nov-22 to 5-Nov-22",
    },
    {
      id: 15,
      year: "2022-23",
      title: "A Student Wellness Program on Career Counseling",
      type: "Student Wellness Program",
      date: "7-Dec-22",
    },
    {
      id: 16,
      year: "2022-23",
      title: "INDUSTRY INTERACTION AT PRECISION BEARINGS PVT. LTD., AHMEDABAD",
      type: "INDUSTRY INTERACTION",
      date: "21-Dec-22 to 21-Dec-22",
    },
    {
      id: 17,
      year: "2022-23",
      title: "how to read engineering drawing",
      type: "Seminar",
      date: "16-Dec-22",
    },
    {
      id: 18,
      year: "2022-23",
      title: "Drones: Current and Future trends",
      type: "Expert Lecture",
      date: "2-Jan-23",
    },
    {
      id: 19,
      year: "2022-23",
      title: "Li-ion Battery Design and Battery Management System",
      type: "Expert Lecture",
      date: "6-Jan-23",
    },
    {
      id: 20,
      year: "2022-23",
      title: "Visit to VCCI Expo 2023",
      type: "Visit to Industry Expo",
      date: "30-Jan-23",
    },
    {
      id: 21,
      year: "2022-23",
      title: "Alignment of university exam paper with competitive exam paper",
      type: "Workshop",
      date: "7-Feb-23",
    },
    {
      id: 22,
      year: "2022-23",
      title: "Short Film Competition on the Theme of Gender Equality",
      type: "Equal Opportunity Cell Event",
      date: "15-Mar-23",
    },
    {
      id: 23,
      year: "2022-23",
      title: "Industry visit at Precision Bearings Pvt. Ltd.",
      type: "Industry visit for students",
      date: "16-Mar-23",
    },
    {
      id: 24,
      year: "2022-23",
      title: "Chalk Graffiti Competition",
      type: "Drawing Competition (CHARUSAT Environment Club)",
      date: "21-Mar-23",
    },
    {
      id: 25,
      year: "2022-23",
      title:
        "Expert Talk on Application of CFD in Fluid Flow and Heat Transfer Problems by Dr. Lakdawala from Nirma University",
      type: "Expert Lecture",
      date: "28-Mar-23",
    },
    {
      id: 26,
      year: "2022-23",
      title:
        "An expert lecture on Scope of mechanical engineers in government sector and it's ways to get into it",
      type: "Expert Lecture",
      date: "1-Apr-23",
    },
    {
      id: 27,
      year: "2022-23",
      title:
        "Use of renewable solar energy in desiccant powered modern HVAC system",
      type: "Expert Lecture",
      date: "7-Apr-23",
    },
    {
      id: 28,
      year: "2022-23",
      title: "Fluid Mechanics Mini Project Exhibition-2023",
      type: "Project Exhibition",
      date: "8-Apr-23",
    },
    {
      id: 29,
      year: "2022-23",
      title: "Life Skill Training Programme",
      type: "Workshop",
      date: "8-May-23",
    },
    {
      id: 30,
      year: "2022-23",
      title: "INDUSTRIAL VISIT TO SARDAR SAROVAR DAM",
      type: "Industry visit for students",
      date: "24-Mar-23",
    },
    {
      id: 31,
      year: "2022-23",
      title: "Types of Bearings and it's Manufacturing Technology",
      type: "Expert Lecture",
      date: "14-Mar-23",
    },
    {
      id: 32,
      year: "2022-23",
      title: "Workshop on Fusion 360",
      type: "Workshop",
      date: "13-May-23",
    },
    {
      id: 33,
      year: "2022-23",
      title: "Workshop on Fusion 360",
      type: "Workshop",
      date: "9-Jan-23",
    },
    {
      id: 34,
      year: "2022-23",
      title: "Design Thinking",
      type: "FDP",
      date: "09-Jun-23 to 10-Jun-23",
    },
    {
      id: 35,
      year: "2022-23",
      title:
        "Industrial Visit at GSFC, Vadodara for participants of Certificate Course on INDUSTRIAL SAFETY",
      type: "Industry visit for students",
      date: "23-Jan-23 to 24-Jan-23",
    },
    {
      id: 36,
      year: "2022-23",
      title:
        "Industrial Visit at Elecon, V.U.Nagar for participants of Certificate Course on INDUSTRIAL SAFETY",
      type: "Industry visit for students",
      date: "13-Feb-23",
    },
    {
      id: 37,
      year: "2022-23",
      title: "Certificate Course on INDUSTRIAL SAFETY",
      type: "Certificate Course",
      date: "07-Jan-23 to 30-Apr-23",
    },
    {
      id: 38,
      year: "2022-23",
      title: "YOGA DAY - Pledge Taking",
      type: "NSS",
      date: "21-Jun-23",
    },
    {
      id: 39,
      year: "2021-22",
      title:
        "Azadi Ka Amrit Mahotsav: Drawing Competition on Theme of Equality in India",
      type: "EOC Activity",
      date: "28-Aug-21",
    },
    {
      id: 40,
      year: "2021-22",
      title: "ADVANCES IN MANUFACTURING USING 3 D PRINTING TECHNOLOGY",
      type: "Webinar",
      date: "4-Sep-21",
    },
    {
      id: 41,
      year: "2021-22",
      title: "Product design",
      type: "Webinar",
      date: "8-Oct-21",
    },
    {
      id: 42,
      year: "2021-22",
      title: "How to Crack CSWA-SolidWorks Exam",
      type: "Webinar",
      date: "25-Sep-21",
    },
    {
      id: 43,
      year: "2021-22",
      title: "Poster Presentation on Smart Solution for Farmer Distresses",
      type: "EOC Activity_Poster Presentation",
      date: "23-Dec-21",
    },
    {
      id: 44,
      year: "2021-22",
      title:
        "Certificate Course on Finite Element Modeling & Simulation with ANSYS Workbench",
      type: "Certificate Course",
      date: "24-Jul-21 to 25-Sep-21",
    },
    {
      id: 45,
      year: "2021-22",
      title: "Fusion 360",
      type: "Workshop",
      date: "1-Jan-22",
    },
    {
      id: 46,
      year: "2021-22",
      title: "RECENT TRENDS IN COATINGS AND THIN FILM",
      type: "1. Expert session on Nano technology. 2. Interactions with staffs and research scholars. 3. Review of Ph.D. students work 4. Review on Syllabus",
      date: "23-Apr-22",
    },
    {
      id: 47,
      year: "2021-22",
      title: "Document processing software-LyX",
      type: "Workshop",
      date: "30-Apr-22",
    },
    {
      id: 48,
      year: "2021-22",
      title: "Fluid Mechanics Mini Project Exhibition-2022",
      type: "Project Exhibition",
      date: "23-Mar-22",
    },
    {
      id: 49,
      year: "2021-22",
      title: "One day workshop on Fusion 360",
      type: "Workshop",
      date: "28-May-22",
    },
    {
      id: 50,
      year: "2021-22",
      title: "Certificate Course on Pneumatics and Electro-Pneumatics",
      type: "Certificate Course",
      date: "30-May-22 to 8-Jun-22",
    },
    {
      id: 51,
      year: "2021-22",
      title: "Industry Interaction at SUZLON Energy ltd.",
      type: "Industry Interaction",
      date: "13-May-22 to 13-May-22",
    },
    {
      id: 52,
      year: "2020-21",
      title: "CFD Simulations With Ansys Workbench",
      type: "FDP",
      date: "22-Mar-21 to 26-Mar-21",
    },
    {
      id: 53,
      year: "2020-21",
      title: "Ansys CFD Training",
      type: "STTP",
      date: "22-Mar-21 to 26-Mar-21",
    },
    {
      id: 54,
      year: "2020-21",
      title: "Certified course on Automation Technology",
      type: "Special e-Learning Certified course",
      date: "1-Jul-20 to 31-Jul-20",
    },
    {
      id: 55,
      year: "2020-21",
      title:
        "Poster Presentation Competition on Virtual Classroom strategies for Slow Learners",
      type: "Poster Presentation",
      date: "5-Sep-20",
    },
    {
      id: 56,
      year: "2020-21",
      title: "Virtual Fluid Mechanics Project Exhibition-2021",
      type: "Project Exhibition-2021",
      date: "23-Apr-21",
    },
    {
      id: 57,
      year: "2020-21",
      title: "Tactics To Secure Job In Core Sectors After B.Tech.(Mechanical)",
      type: "Webinar",
      date: "30-Aug-20",
    },
    {
      id: 58,
      year: "2020-21",
      title: "OVERVIEW OF SOLIDWORKS ADVANCE.",
      type: "Webinar",
      date: "8-Aug-20 to 8-Aug-20",
    },
    {
      id: 59,
      year: "2020-21",
      title: "Fusion 360",
      type: "Workshop",
      date: "29-May-21 to 29-May-21",
    },
    {
      id: 60,
      year: "2020-21",
      title: "Autocad 2D",
      type: "value added course for students",
      date: "9-Nov-20 to 25-Nov-20",
    },
    {
      id: 61,
      year: "2020-21",
      title: "Esprit CAM",
      type: "Workshop",
      date: "30-Oct-20 to 31-Oct-20",
    },
    {
      id: 62,
      year: "2020-21",
      title: "Foundry processes & DIE/Mold making",
      type: "Webinar",
      date: "9-Sep-20",
    },
    {
      id: 63,
      year: "2020-21",
      title: "Summer Internship opportunity",
      type: "Webinar",
      date: "7-Jun-21",
    },
    {
      id: 64,
      year: "2020-21",
      title: "Reinforce your design with solidworks",
      type: "Webinar",
      date: "12-Jun-21",
    },
    {
      id: 65,
      year: "2020-21",
      title: "One Week Mechanical Engineer Skill Development Program: Phase II",
      type: "FDP",
      date: "31-May-21 to 5-Jun-21",
    },
    {
      id: 66,
      year: "2020-21",
      title: "Hands-on Training on solidworks",
      type: "Hands on Training",
      date: "24-Jun-21 to 26-Jun-21",
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
              Events
            </h1>
            <p className="text-white/90 mt-2 text-lg">
              Department Activities, Workshops, Seminars & Industry Visits
            </p>
          </div>
        </div>

        {/* Events Section */}
        <div className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Table Container */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#004D83] text-white">
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        #
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Year
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Title
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold border-r border-white/20">
                        Type
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {events.map((event) => (
                      <tr
                        key={event.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                          {event.id}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                          {event.year}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                          {event.title}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200">
                          {event.type}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          {event.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                Featured Events
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="space-y-16">
              {/* Event 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Fusion 360 (Webinar)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 08/03/2021
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This webinar was carried out by the expert Mr. Vipul
                      Hingu, Khodiyar CAD Center Pvt. Ltd. for first year
                      mechanical and electrical students. Expert talk included
                      various topics viz. Introduction about Fusion 360
                      Software, Overview of other CAD Softwares, 2D Sketching
                      and 3D modeling, Drafting of the object, Assembly Drawing,
                      Rendering, etc. Total forty four students had participated
                      in webinar.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e1.png"
                      alt="Fusion 360 Webinar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e2.png"
                      alt="Research Trends in Advanced Materials Workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Research Trends in Advanced Materials (Workshop)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 06/11/2020 to 07/11/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      In this workshop research scholars, faculties from various
                      institutes of Gujarat had participated. The expert talks
                      during the workshop were organized to explore the various
                      methods of synthesis & characterization of nanomaterial
                      and applications of nanomaterial. Dr. Ajay M. Sidpara,
                      Indian Institute of Technology, Kharagpur, Dr. Anand
                      Joshi, GCET, V.V.Nagar, Dr. Vijay Chaudhary, Dr. Mayur
                      Sutaria, Dr. Kamlesh Chauhan, and Dr. Dattatraya Subhedar
                      from CHARUSAT had delivered the expert talk during the
                      workshop. The workshop became a grand success with an
                      active participation of 44 participants.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Manufacturing Processes & ESPRIT CAM software-by SOPAN
                      Institute (Workshop)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 30/10/2020 to 31/10/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      ESPIRIT CAM software is a global favorite for all types of
                      mechanical applications ranging from small hometown job
                      shops to multifunctional enterprises, client trust ESPRIT
                      to help them create the parts that drive aerospace,
                      medicine, energy, construction, and a host of other
                      industries. This workshop explained briefly the Esprit CAM
                      Interfaces, 2D Geometry, Machine set up, Simulation and
                      Garneting NC Codes. The expert talk was delivered by Mr.
                      Naimesh Shethiya, SOPAN Institute of Engineering & Design.
                      This workshop was attended by teaching and non-teaching
                      staff of mechanical engineering department.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e3.png"
                      alt="Manufacturing Processes & ESPRIT CAM Workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 4 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e4.png"
                      alt="Solidworks Webinar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Know how to make part modeling, assembly & drawing using
                      Solidworks- by SOPAN Institute (Webinar)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 05/09/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This webinar demonstrated the Modeling, Assembly and
                      Drawing for different components using SOLIDWORKS. Mr.
                      Naimesh Shethiya, SOPAN Institute of Engineering & Design
                      had given this expert talk. This webinar was organized for
                      second year mechanical students. Total 109 students had
                      participated in this webinar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 5 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      EV Mathematical Modeling on Sci-Lab (Workshop)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 22/08/2020 to 23/08/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      AutoLexi is an E-learning community to reinvent the world
                      of automotive vehicles to an easy to learn and implement
                      format, such as courses and master-classes. This platform
                      can make students fully equipped for learning and building
                      formula student and Supra-SAE India vehicles. This event
                      was for exploring the knowledge of Electric vehicle and
                      its components used to make EV. Students learns to apply
                      Mathematical modelling and how to simulate any parameters
                      with this mathematical modelling after attending the
                      workshop. Students also learn the factors affecting in the
                      performance of EV.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e5.png"
                      alt="EV Mathematical Modeling on Sci-Lab Workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 6 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e6.png"
                      alt="Think, Design and Visualize with Revit MEP Webinar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Think, Design and Visualize with Revit MEP (Webinar)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 01/08/2020 to 01/08/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This webinar was carried out by the expert Mr. Kaushal
                      Shahand, Khodiyar CAD Center Pvt. Ltd. and delivered a
                      talk on MEP REVIT including major areas of mechanical
                      engineering as mechanical Systems, HVAC design, Electrical
                      Systems, Piping Systems, etc. This webinar was organized
                      for second, third and final year of mechanical, civil and
                      electrical engineering students. Total sixty-eight
                      students had successfully participated in the webinar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 7 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Solid works: Introduction and Basic (Webinar)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 22/05/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This webinar was delivered by Mr. Yash Patel, Khodiyar CAD
                      Center Pvt Ltd. and explained "Solid works Introduction
                      and Basics" including Concepts, Terminology, User
                      Interface, Design Process, Design Intent, Design Method,
                      Sketches, Features, Assemblies, Drawings, Model Editing,
                      etc. This webinar was organized for second, third and
                      final year of mechanical, civil and electrical engineering
                      students. Total twenty-five students had successfully
                      participated in the webinar.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e7.png"
                      alt="Solid works: Introduction and Basic Webinar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 8 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e8.png"
                      alt="Formula Bharat 2020"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Formula Bharat 2020
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 22/01/2020 to 26/01/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Twenty-five Students from Mechanical and Electrical
                      Department from CSPIT, CHARUSAT are Participated in this
                      event and they completely fabricated the car from scratch
                      and cleared Technical Inspection. This event included the
                      learning of Team Building, Learning theory on real
                      practical knowledge, Sustain in any critical condition,
                      Management skills, Practical approach with reality, etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 9 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Fundamentals of Electric Vehicle and EV Projects
                      (Workshop)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 20/01/2020 to 21/01/2020
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Two-day workshop on "Fundamentals of Electrical Vehicles &
                      EV projects" was organized by Dr. Dattaraya Shubhedar &
                      Sujal Dadhaniya, Assistant Professor, Mechanical
                      engineering department, CSPIT, CHARUSAT for second & third
                      year mechanical students. Thirty students had participated
                      in the workshop. This workshop was successfully completed
                      with hands on session.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e9.png"
                      alt="Fundamentals of Electric Vehicle and EV Projects Workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 10 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e10.png"
                      alt="Certificate program on Basic Pneumatics and Electro-Pneumatics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Certificate program on Basic Pneumatics and
                      Electro-Pneumatics
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 25/11/2019 to 29/11/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This program was carried out by Dipal Patel, CSPIT,
                      CHARUSAT, Kundan Patel, CSPIT, CHARUSAT, and Viral Panara,
                      CSPIT, CHARUSAT under FESTO Center of Excellence-CHARUSAT.
                      This program elaborated the "BASIC PNEUMATICS and ELECTRO
                      PNEUMATICS" including the Pneumatic control systems,
                      Pneumatic valves, Compressed air preparation, Pneumatic
                      cylinders, Pneumatic compressors, Electro-pneumatics-I,
                      and Electro-pneumatics-II.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 11 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Solidworks Advanced (Workshop)
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 18/09/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Solidworks Authorized Training Center (SATC), Sayajigunj
                      is a Pioneer in Parametric modeling education in Vadodara
                      city since past 4 years. This workshop was organized for
                      third year mechanical students with 07 hours discussion
                      and covering major learning modules as Sketch, Part
                      Modeling, Assembly Design and Animation & Drafting. This
                      workshop was very useful for design engineering related
                      subjects and 59 students were enthusiastically
                      participated and got to know more advanced features of
                      software which they might use in their professional
                      studies or in career as well.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e11.png"
                      alt="Solidworks Advanced Workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 12 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e12.png"
                      alt="One day workshop on Fusion 360"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      One day workshop on Fusion 360
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 12/10/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This workshop is organized specifically for first-year
                      students to learn 2D and 3D drafting. Fusion 360 software
                      is selected due to it is a cloud-based 3D CAD, CAM, and
                      CAE platform for product development. The problems of
                      orthographic view and isometric view are solved during
                      this software. Hands-on practice of Fusion 360 software is
                      also carried out during this workshop. The tools in Fusion
                      360 enable fast and easy exploration of design ideas with
                      an integrated concept-to-production toolset. It combines
                      industrial and mechanical design, simulation,
                      collaboration, and machining in a single package. It gives
                      the best platform to the students to demonstrate their
                      ideas and innovation of their fieldwork of engineering in
                      the form of models using Fusion 360. Faculty Coordinators:
                      Sagar Chokshi & Nipun Gosai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 13 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Hands-on training on LaTeX
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 1/11/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      LaTeX is a document preparation system for high-quality
                      typesetting, which is preferably used for
                      technical/scientific papers writing for journals by
                      researchers, engineers, and mathematicians at large. The
                      typesetting system offers programmable writing features
                      and extensive facilities for automating most aspects of
                      typesetting. This training provided a comprehensive
                      theoretical and hands-on practical experience on LaTeX to
                      the beginners.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e13.png"
                      alt="Hands-on training on LaTeX"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 14 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e14.png"
                      alt="One day workshop on Fusion 360"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      One day workshop on Fusion 360
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 12/10/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      This workshop is organized specifically for first-year
                      students to learn 2D and 3D drafting. Fusion 360 software
                      is selected due to it is a cloud-based 3D CAD, CAM, and
                      CAE platform for product development. The problems of
                      orthographic view and isometric view are solved during
                      this software. Hands-on practice of Fusion 360 software is
                      also carried out during this workshop. The tools in Fusion
                      360 enable fast and easy exploration of design ideas with
                      an integrated concept-to-production toolset. It combines
                      industrial and mechanical design, simulation,
                      collaboration, and machining in a single package. It gives
                      the best platform to the students to demonstrate their
                      ideas and innovation of their fieldwork of engineering in
                      the form of models using Fusion 360. Faculty Coordinators:
                      Sagar Chokshi & Nipun Gosai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 15 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      seminar on "Aluminium-Silicon Cast Alloy: Processing and
                      Characterization"
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 9/10/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Al-Si alloys have been found most promising for production
                      of cast components and MMC development for various
                      industrial applications due to its lighter weight. There
                      is a wider scope of improvement in primary and secondary
                      processing of these alloys. This one day seminar will help
                      students, teachers and researchers to widen knowledge and
                      awareness on the research perspectives in the processing
                      of Al-Si alloys and importance of its characterization.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e15.png"
                      alt="Seminar on Aluminium-Silicon Cast Alloy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 16 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e16.png"
                      alt="Workshop on Solidworks"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Workshop on Solidworks
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 19/9/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      SOLIDWORKS is a software tool that is used right from the
                      conceptualization of the design until the final
                      manufacturing of the product. As the world's leading tool
                      in designing, it supports interactive learning of 3D
                      modeling. The implementation of such software can lend
                      several benefits to the users, such as shortened Design
                      Cycle, Increased Productivity of Engineers and Designer
                      and Faster Deliver Innovative Products. The workshop will
                      help students to use the software with confidence and
                      design/draft the next innovative things.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 17 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Workshop on Fusion 360
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 18/09/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Fusion 360 is a cloud-based 3D CAD, CAM, and CAE platform
                      for product development. It combines industrial and
                      mechanical design, simulation, collaboration, and
                      machining in a single package. The tools in Fusion 360
                      enable fast and easy exploration of design ideas with an
                      integrated concept-to-production toolset. The main
                      objective of this workshop is to provide exposure about
                      the various features of Autodesk Fusion 360 (Including:
                      SolidModeling, SurfaceModeling, Collaboration, Data &
                      Process Management, Conceptual Design, Machining,
                      Mechanical Design, Simulation, Visualization & Rendering)
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e17.png"
                      alt="Workshop on Fusion 360"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 18 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e18.png"
                      alt="Fluid Mechanics Mini Project Exhibition-2019"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Fluid Mechanics Mini Project Exhibition-2019
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 13/04/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify mb-4">
                      A mini project is one learning opportunity to develop
                      students in various aspects.
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      The objective of the event for B. Tech 2nd year student
                      was to:
                      <br />• Develop ability to apply the theory.
                      <br />• Develop students' technical skills.
                      <br />• Change the focus of student to look Lab work as a
                      research assignment.
                      <br />• Prepare students for open-ended investigative
                      work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 19 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Creative Model Exhibition 2019
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 13/04/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      The aim of this exhibition is to encourage students for
                      preparing and taking participation with innovative ideas
                      to solve basic problems of society. Students of mechanical
                      engineering department have participated in creative model
                      exhibition with creative models and try to solve basic
                      problems with innovative logics.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e19.png"
                      alt="Creative Model Exhibition 2019"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 20 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e20.png"
                      alt="Poster presentation on Effective Ways to Make Yourself More Employable"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Poster presentation on "Effective Ways to Make Yourself
                      More Employable"
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 13/04/2019
                    </p>
                    <p className="text-gray-700 leading-7 text-justify mb-4">
                      Day by Day here's a large pool of job seekers, and not
                      enough positions to go around. As a result, employers can
                      afford to be extremely picky. They're looking for
                      qualified applicants who bring more to the table.
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      The aim of the event was:
                      <br />• Participant can explore the major qualities any
                      employer looking in new candidate while the selection
                      process for their firm.
                      <br />• How to prepare the poster and manage the given
                      space effectively.
                      <br />• Presentation skill
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 21 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      workshop on "Research trends in renewable energy sources"
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 19-07-2018 to 20-07-2018
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      The workshop "Research trends in Renewable energy sources"
                      consisting two days including expert talk on the topic by
                      imminent experts from industry as well as academia to
                      throw light upon the need for the alternate energy
                      sources. Mr. Shreelal Jha who has worked since years in
                      the field of wind power generation, who is also inventor
                      of smallest wind power generator, has shared his
                      experience and his journey towards the implementation of
                      such system under the government sector. Dr. Dhaval
                      Vankhade, who has pursued his doctorate in the field of
                      solar thin film development, has shared views on the
                      equipment to produce thin film coating. On the second day
                      of the workshop, a visit to Seva Muni Ashram, Goraj,
                      Vadodara was arranged, where students and the participants
                      could see actual implementation of the renewable sources
                      like solar panels, solar cookers, bio gas plants, sewage
                      system, and all of them were running through the power
                      generated through solar. Furthermore, the interaction
                      between students and experts has helped the participants
                      to clear their thoughts and gave direction of the research
                      area to work upon for their betterment of the future. This
                      workshop did not only spread awareness about the need for
                      renewable sources but also helped to approach for the same
                      with broader view.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e21.png"
                      alt="Workshop on Research trends in renewable energy sources"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 22 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e22.png"
                      alt="Workshop on Know Your Vehicle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      workshop on "Know Your Vehicle"
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 05/04/2018 to 06/04/2018
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Theoretical hands on problem resolving techniques in
                      routine with many automobiles learning like engine system,
                      combustion system, and many more. Knowledge sharing about
                      automobile transmission system, brake and clutch and other
                      assemblies. Automobile part inspection and discussion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 23 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      Seminar on "Career Growth through Six Sigma"
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 17/07/2018
                    </p>
                    <p className="text-gray-700 leading-7 text-justify mb-4">
                      In this workshop research scholar, faculties and students
                      from our Universities were participated. Experts talk and
                      exercise session was organized to explore the various
                      aspects of Six Sigma & it's importance in current trend
                      for a mechanical engineer. During workshop following
                      topics were discussed:
                    </p>
                    <p className="text-gray-700 leading-7 text-justify mb-4">
                      • Why candidate should go for Six Sigma Certification?
                      <br />• Lean Six Sigma Program
                      <br />• Lean Tools
                      <br />• Six Sigma as Philosophy
                      <br />• DMAIC Approach
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      Mr. Hiren Kakkad and Tarun Gajjar Sr. Consultant- at M/S.
                      CONCEPT BUSINESS EXCELLENCE PVT. LTD. Were the Chief
                      Guests as well as Main speakers for the event.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e23.png"
                      alt="Seminar on Career Growth through Six Sigma"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 24 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto bg-white">
                    <Image
                      src="/event/e24.png"
                      alt="One week Mechanical Engineer Skill Development Program"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2 p-8">
                    <h3 className="text-2xl font-bold text-[#004D83] mb-2">
                      One week Mechanical Engineer Skill Development Program
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Date: 10/02/2018 to 31/03/2018
                    </p>
                    <p className="text-gray-700 leading-7 text-justify">
                      CHAMOS Matrusantha Department of Mechanical Engineering,
                      Chandubhai S. Patel Institute of Technology (CHARUSAT) had
                      organized a One Week Mechanical Engineer Skill Development
                      Program-Phase I on every working Saturday in between 17th
                      February to 31st March 2018. In this One week Faculty
                      Development Program, All teaching faculties of CHAMOS
                      Matrusanstha Department of Mechanical Engineering,
                      CHARUSAT had participated. Experts talk and Laboratory
                      session was organized to develop the skill in the various
                      areas like Metal Casting and Composites, Welding Practices
                      for Engineer, CNC Programming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-12"></div>
      </main>
    </div>
  );
}
