import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ImagePreview from './ImagePreview';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSliderProps {
  images: { url: string; alt: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Reduced from 5000ms to 3000ms for 50% faster transitions
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative h-[600px] w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 cursor-pointer ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1 : 1.1,
              transition: { duration: 0.5 } // Reduced from 1s to 0.5s for 50% faster animations
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            onClick={() => setPreviewOpen(true)}
          >
            <motion.img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              layoutId={`image-${image.url}`}
            />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <Maximize2 className="w-5 h-5 text-blue-900" />
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <ImagePreview
        isOpen={previewOpen}
        imageUrl={images[current].url}
        onClose={() => setPreviewOpen(false)}
      />
    </div>
  );
};

export default ImageSlider;