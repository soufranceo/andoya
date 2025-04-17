import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import ReviewCard from '../components/ReviewCard';
import WorldClock from '../components/WorldClock';

const Home = ({ language }: { language: 'tr' | 'en' }) => {
  const images = [
    {
      url: 'https://i.hizliresim.com/255z9ik.jpg',
      alt: 'andoya butik pansiyon bahçe'
    },
    {
      url: 'https://i.hizliresim.com/rki7zbp.jpg',
      alt: 'andoya butik pansiyon iç oda'
    },
    {
      url: 'https://i.hizliresim.com/5xe6ztw.jpg',
      alt: 'andoya butik pansiyon iç oda'
    }
  ];

  const reviews = {
    tr: [
      { name: 'Deniz Y.', rating: 9.8, comment: 'Minimalist tasarımı ve huzurlu atmosferi ile mükemmel bir deneyim.' },
      { name: 'Elif K.', rating: 9.5, comment: 'Modern ve şık. Personel çok ilgili ve yardımsever.' },
      { name: 'Can M.', rating: 9.7, comment: 'Butik pansiyonculuğun en güzel örneği. Her detay düşünülmüş.' },
      { name: 'Zeynep A.', rating: 9.6, comment: 'Sakin ve huzurlu bir ortam. Kahvaltısı harika.' },
      { name: 'Mert B.', rating: 9.4, comment: 'Tasarımı ve konforu ile öne çıkıyor.' }
    ],
    en: [
      { name: 'Sarah M.', rating: 9.8, comment: 'Perfect experience with minimalist design and peaceful atmosphere.' },
      { name: 'John D.', rating: 9.5, comment: 'Modern and stylish. Staff very attentive and helpful.' },
      { name: 'Emma L.', rating: 9.7, comment: 'Best example of boutique hospitality. Every detail considered.' },
      { name: 'Michael R.', rating: 9.6, comment: 'Quiet and peaceful environment. Breakfast is amazing.' },
      { name: 'Lisa K.', rating: 9.4, comment: 'Stands out with its design and comfort.' }
    ]
  };

  return (
    <div className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="h-[600px] mb-16">
          <ImageSlider images={images} />
        </div>

        <div className="px-4 mb-16">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl font-bold text-primary text-center mb-8 tracking-wide"
          >
            {language === 'tr' ? 'ANDOYA BUTİK PANSİYON' : 'ANDOYA BOUTIQUE PENSION'}
          </motion.h1>
          <p className="text-center text-primary-light max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Bodrum Merkez de yer alan Andoya Butik Pansiyonumuz, plaj ve sahil alanlarına 50 metre mesafededir. Aileniz ve sevdiklerinizle huzurlu ve güvenli konaklama adresiniz'
              : 'A unique accommodation experience with modern minimalist design and peaceful atmosphere.'}
          </p>
        </div>

        <div className="px-4 mb-16">
          <WorldClock />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-16 bg-gray-50"
      >
        <h2 className="text-2xl font-light text-center mb-12 text-primary tracking-wide">
          {language === 'tr' ? 'Misafir Yorumları' : 'Guest Reviews'}
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...reviews[language], ...reviews[language]].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % reviews[language].length) }}
                className="w-[300px] flex-shrink-0"
              >
                <ReviewCard {...review} language={language} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;