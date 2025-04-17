import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePreview from './ImagePreview';

interface RoomImageSliderProps {
  images: string[];
}

const RoomImageSlider: React.FC<RoomImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative w-full h-full cursor-pointer"
          layoutId={`image-${images[currentIndex]}`}
          onClick={() => setPreviewOpen(true)}
        >
          <motion.img
            src={images[currentIndex]}
            alt={`Room image ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <Maximize2 className="w-5 h-5 text-blue-900" />
          </motion.button>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 text-blue-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 text-blue-900" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-900' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <ImagePreview
        isOpen={previewOpen}
        imageUrl={images[currentIndex]}
        onClose={() => setPreviewOpen(false)}
      />
    </div>
  );
};

export default RoomImageSlider;