import DepartmentNavbar from "@/components/DepartmentNavbar";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div>
      <DepartmentNavbar />
      <HeroCarousel />

      {/* Download Brochure Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <span className="text-red-600 font-bold text-lg">
              To Download Brochure
            </span>
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M3 4a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm12 0H5v12h10V4z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href="https://drive.google.com/file/d/your-brochure-file-id/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
            >
              Click here
            </a>
          </div>
        </div>
      </div>

      <main className="bg-white">
        {/* Best Practices, Vision, Mission & Program Objectives Section */}
        <div className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Best Practices */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                BEST PRACTICES
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Evaluation of students through Mini project
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Book World to bring a change in student's life
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Meditation for staff members
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      One-to-One Student Counseling
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Academic Enrichment through MOOC Courses
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Department Website and Personal Academic Blog
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Google Classroom Utilization
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Faculty-Industry Interaction
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Expert talk for the students
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission - Large Feature Section */}
            <div className="bg-white border-2 border-[#004D83] p-8 md:p-12 rounded-lg shadow-md mb-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                {/* Vision */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#EBF5FB] rounded-full">
                      <svg
                        className="w-8 h-8 text-[#004D83]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#004D83]">
                      Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed pl-1">
                    "To be recognized as a center for outstanding education and
                    research in field of mechanical engineering. "
                  </p>
                </div>

                {/* Mission */}
                <div className="pt-8 md:pt-0 md:pl-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#EBF5FB] rounded-full">
                      <svg
                        className="w-8 h-8 text-[#004D83]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#004D83]">
                      Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed pl-1">
                    " To produce well qualified engineers, who are innovative,
                    contributors to their profession by catering to diverse
                    societal needs. "
                  </p>
                </div>
              </div>
            </div>

            {/* Program Objectives */}
            <div className="space-y-5">
              {/* PEOs */}
              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Program Educational Objectives (PEOs):
                    </h3>
                  </div>
                </div>
              </div>

              {/* POs */}
              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Program Outcomes(POs):
                    </h3>
                  </div>
                </div>
              </div>

              {/* PSOs */}
              <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EBF5FB] rounded">
                    <svg
                      className="w-7 h-7 text-[#004D83]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 leading-snug">
                      Program Specific Outcomes(PSOs):
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student's Chapters Section */}
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D83] mb-3">
                STUDENT'S CHAPTERS
              </h2>
              <div className="w-24 h-1 bg-[#004D83]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* SAE Club */}
              <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#004D83]">
                <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/SAECLUB.png"
                    alt="SAE Club"
                    className="h-32 object-contain"
                  />
                </div>
                <div className="space-y-2 border-t pt-4 border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">
                      Total Members
                    </span>
                    <span className="text-[#004D83] font-bold text-lg">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">
                      Total Events
                    </span>
                    <span className="text-[#004D83] font-bold text-lg">22</span>
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
