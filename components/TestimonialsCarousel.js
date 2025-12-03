"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jaysukhbhai Panchal",
    role: "Parent of Abhishekh Panchal",
    image: "/testimonial_jaypan.png",
    quote:
      "Parents are very careful while searching a college which is very safe and appropriate for their child,they also search for college which is capable of providing safe environment,first rate academic as well as friendly environment in which their child can flourish in best possible way.The mechanical engineering department has provided my child all the facilities that I want to him as well as the faculties has also encouraged my child in every possible situation.",
  },
  {
    id: 2,
    name: "Kaushal B. Patel",
    role: "Design Engineer (TBEA (INDIA) PVT. LTD.) 2016-2018 (M.Tech) Mechanical Engineering",
    image: "/testimonial_kaupat.png",
    quote:
      "CHARUSAT is one of the best institutions, not only of its infrastructure but also of its coaching, seminars and other activities. The Institution has motivated and given me every chance to explore my talents. CHARUSAT has got the best management, which supports the students in academics as well as personal life. CHARUSAT help students to develop soft skills, cultural skills, entrepreneurial skills and nourish the talents in students. CHARUSAT is a place where you can build your carrier in the best way.",
  },
  {
    id: 3,
    name: "Karunya Pramanik",
    role: "2014-2018 Mechanical Engineering",
    image: "/testimonial_karupa.png",
    quote:
      "The college gave us the platform where we were able to showcase our technical abilities and also developed our personality. With all the moral support I gained from my faculties of CSPIT, I achieved an experience which I may not have had as a team leader. I'm very much proud to be an alumni of such a beautiful college and be a part of the CHARUSAT family.",
  },
  {
    id: 4,
    name: "Anand Trivedi",
    role: "2007-2011 Mechanical Engineering",
    image: "/testimonial_at.png",
    quote:
      "Just because of the immense support provided by CHARUSAT during my graduation I am able to become a successful entrepreneur and social reformer. The university gave me various opportunities to explore and develop my skills at very early age. I am proud to be a alumni of such an Institute.",
  },
  {
    id: 5,
    name: "Vandit Brahmbhatt",
    role: "STUDENT",
    image: "/testimonial_vandit.png",
    quote:
      "It gives me great pride to speak out to people that I am a student of mechanical department of CHARUSAT University. This is because in terms of knowledge and teaching the faculties of department are far beyond excellence. Also the support they give to students in terms of motivation, ideas, extra classes, and assignments are all very helpful for the students to learn and master the concepts easily. Furthermore the extra curricular activities and events like the Vrund, Cognizance, Spoural, Quill magazine and many more help students show their talent and also pursue there passion with studies and therefore students do not feel bored and fatigued due to classes. The overall management and resource facilities in terms of E-learning centres, libraries and playground add to the beauty of the University and positive atmosphere for students in campus.",
  },
  {
    id: 6,
    name: "Ravi Barot",
    role: "STUDENT",
    image: "/testimonial_ravibar.png",
    quote:
      "It gives me immense pleasure to share the experience to people about CHARUSAT University. For me, CHARUSAT University has not only added to my academic quotient but has also provided a platform for continuous development of my personality. Professors act as mentors to foster the knowledge, skills and creativity. They fortify that your energy is channelize in proper direction. Additionally, the technical works like OJASWAT, PRITHVI and many more help students to acquire the knowledge. The foliage environment produces a positive energy and helps to concentrate in learning. I am delighted that I am associated with CHARUSAT.",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
            Testimonials
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#004D83] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -ml-4 sm:-ml-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#004D83] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -mr-4 sm:-mr-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 sm:px-8 md:px-12"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
                    <div className="relative mb-6 sm:mb-8">
                      <img
                        src="/quote-sign-left.png"
                        alt="Quote"
                        className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 opacity-20"
                      />
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-6 sm:px-8 text-center italic">
                        {testimonial.quote}
                      </p>
                      <img
                        src="/quote-sign-right.png"
                        alt="Quote"
                        className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 opacity-20"
                      />
                    </div>
                    <div className="flex flex-col items-center text-center mt-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mb-4 object-cover border-4 border-gray-200"
                      />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h3>
                      <h4 className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#004D83] w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
