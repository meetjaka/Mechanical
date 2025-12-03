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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D83] mb-4">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black p-4 transition-opacity duration-300 ${
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
              className="absolute top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-all duration-300 p-2 hover:bg-white/20 rounded-full hover:rotate-90"
              aria-label="Close"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-[10000] text-white hover:text-gray-300 transition-all duration-300 p-2 sm:p-3 hover:bg-white/20 rounded-full hover:scale-110 hover:-translate-x-1"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-[10000] text-white hover:text-gray-300 transition-all duration-300 p-2 sm:p-3 hover:bg-white/20 rounded-full hover:scale-110 hover:translate-x-1"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Image */}
            <div
              className={`relative max-w-7xl max-h-[90vh] flex items-center justify-center transition-all duration-500 ${
                isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transform transition-transform duration-500"
              />
            </div>

            {/* Image Counter */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
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
