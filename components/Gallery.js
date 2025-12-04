"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/gallery/g1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/gallery/g2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/gallery/g3.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/gallery/g4.JPG", alt: "Gallery Image 4" },
  { id: 5, src: "/gallery/g5.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/gallery/g6.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/gallery/g7.jpg", alt: "Gallery Image 7" },
  { id: 8, src: "/gallery/g8.jpg", alt: "Gallery Image 8" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      // Prevent body scroll and hide navbar when lightbox is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Restore body scroll when lightbox is closed
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [selectedImage]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const closeLightbox = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsAnimating(false);
    }, 200);
  };

  const goToPrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const newIndex =
        currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
      setIsAnimating(false);
    }, 200);
  };

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const newIndex =
        currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
      setIsAnimating(false);
    }, 200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-4 py-2 bg-blue-50 text-[#0066A1] rounded-lg text-sm font-semibold mb-4">
            Campus Life
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0066A1] mb-4">
            GALLERY
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            Explore our vibrant campus life, state-of-the-art facilities, and student activities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#0066A1]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066A1]/90 via-[#0066A1]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">View Image</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0066A1] px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[10000] text-white hover:text-[#0066A1] transition-all duration-300 p-3 bg-white/10 hover:bg-white/20 rounded-full hover:rotate-90 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-[10000] text-white hover:text-[#0066A1] transition-all duration-300 p-3 bg-white/10 hover:bg-white/20 rounded-full hover:scale-110 hover:-translate-x-1 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-[10000] text-white hover:text-[#0066A1] transition-all duration-300 p-3 bg-white/10 hover:bg-white/20 rounded-full hover:scale-110 hover:translate-x-1 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image */}
            <div
              className={`relative max-w-7xl max-h-[90vh] flex items-center justify-center transition-all duration-500 ${
                isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl transform transition-transform duration-500 border-4 border-white/10"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066A1] to-orange-500 rounded-2xl opacity-20 blur-xl -z-10"></div>
              </div>
            </div>

            {/* Image Counter */}
            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base bg-[#0066A1]/80 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 font-semibold shadow-lg ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
