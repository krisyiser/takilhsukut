'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  title: string;
  photographer?: string;
  date?: string;
  category?: string;
  description?: string;
}

interface ImageGalleryProps {
  photos: Photo[];
  columns?: number;
  className?: string;
}

export default function ImageGallery({ photos, columns = 4, className = '' }: ImageGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-4 ${className}`}>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
            onClick={() => openLightbox(photo, index)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-semibold text-sm mb-1 truncate">{photo.title}</h4>
                {photo.photographer && (
                  <p className="text-xs text-gray-300 truncate">Por {photo.photographer}</p>
                )}
                {photo.category && (
                  <span className="inline-block text-xs bg-totonaca-oro-500 px-2 py-1 rounded-full mt-2">
                    {photo.category}
                  </span>
                )}
              </div>
            </div>

            {/* Zoom indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main content */}
            <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="max-w-6xl max-h-full flex flex-col lg:flex-row items-center gap-6">
                {/* Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex-1 max-h-[80vh]"
                >
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </motion.div>

                {/* Info panel */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="lg:w-80 bg-white/10 backdrop-blur-md rounded-lg p-6 text-white"
                >
                  <h3 className="text-xl font-serif font-bold mb-3">{selectedPhoto.title}</h3>

                  {selectedPhoto.description && (
                    <p className="text-white/90 mb-4 leading-relaxed">{selectedPhoto.description}</p>
                  )}

                  <div className="space-y-3 mb-6">
                    {selectedPhoto.photographer && (
                      <div>
                        <span className="text-totonaca-oro-400 text-sm font-medium">Fotógrafo:</span>
                        <p className="text-white/90">{selectedPhoto.photographer}</p>
                      </div>
                    )}

                    {selectedPhoto.date && (
                      <div>
                        <span className="text-totonaca-oro-400 text-sm font-medium">Fecha:</span>
                        <p className="text-white/90">{selectedPhoto.date}</p>
                      </div>
                    )}

                    {selectedPhoto.category && (
                      <div>
                        <span className="text-totonaca-oro-400 text-sm font-medium">Categoría:</span>
                        <p className="text-white/90">{selectedPhoto.category}</p>
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-totonaca-oro-500 text-totonaca-obsidiana-800 px-4 py-2 rounded-lg font-medium hover:bg-totonaca-oro-600 transition-colors flex items-center justify-center gap-2">
                      <Download size={16} />
                      Descargar
                    </button>
                    <button className="flex-1 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                      <Share2 size={16} />
                      Compartir
                    </button>
                  </div>

                  {/* Counter */}
                  {photos.length > 1 && (
                    <div className="mt-6 text-center text-white/70 text-sm">
                      {currentIndex + 1} de {photos.length}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Thumbnail strip for navigation */}
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-sm overflow-x-auto">
                {photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                      setSelectedPhoto(photo);
                    }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentIndex ? 'border-totonaca-oro-400' : 'border-white/20'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
