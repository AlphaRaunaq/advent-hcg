"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "advent-meet",
    name: "Advent Meet",
    thumbnail: "/gallery/advent-meet/thumbnail.jpg",
    imageCount: 6,
  },
  {
    id: "advent-projects",
    name: "Advent Projects",
    thumbnail: "/gallery/advent-projects/thumbnail.jpg",
    imageCount: 11,
  },
  {
    id: "hyperbaric-service",
    name: "Hyperbaric Services",
    thumbnail: "/gallery/hyperbaric-service/thumbnail.jpg",
    imageCount: 10,
  },
  {
    id: "seminars",
    name: "Seminars",
    thumbnail: "/gallery/seminars/thumbnail.jpg",
    imageCount: 17,
  },
];

interface LightboxImage {
  src: string;
  alt: string;
}

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (category: string) => {
    const imageCount = categories.find((c) => c.id === category)!.imageCount;
    const images: LightboxImage[] = Array.from({ length: imageCount }, (_, i) => ({
      src: `/gallery/${category}/img-${i + 1}.jpg`,
      alt: `${category} - Image ${i + 1}`,
    }));
    setCurrentImages(images);
    setCurrentIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-forest py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A glimpse into our journey — events, projects, and milestones.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-pale"
                onClick={() => openLightbox(category.id)}
              >
                {/* Thumbnail Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={category.thumbnail}
                    alt={category.name}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {category.imageCount} photos
                  </p>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-forest"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 lg:left-8 text-white/70 hover:text-white p-4"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-[85vh] mx-auto">
            <Image
              src={currentImages[currentIndex].src}
              alt={currentImages[currentIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] object-contain"
              priority
            />
            <p className="text-center text-white/70 mt-4 text-sm">
              {currentIndex + 1} / {currentImages.length}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 lg:right-8 text-white/70 hover:text-white p-4"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Keyboard Navigation */}
          <KeyboardHandler
            onPrev={prevImage}
            onNext={nextImage}
            onClose={closeLightbox}
          />
        </div>
      )}
    </main>
  );
}

// Keyboard navigation helper
function KeyboardHandler({
  onPrev,
  onNext,
  onClose,
}: {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  if (typeof window === "undefined") return null;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") onPrev();
    else if (e.key === "ArrowRight") onNext();
    else if (e.key === "Escape") onClose();
  };

  window.addEventListener("keydown", handleKeyDown);
  return null;
}
