import DepartmentNavbar from "@/components/DepartmentNavbar";

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

        <div className="h-12"></div>
      </main>
    </div>
  );
}
