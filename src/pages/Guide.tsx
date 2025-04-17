import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Guide = ({ language }: { language: 'tr' | 'en' }) => {
  const places = {
    tr: [
      {
        title: 'Bodrum Kalesi',
        description: 'Bodrum\'un simgesi olan kale, Sualtı Arkeoloji Müzesi olarak hizmet vermektedir. Muhteşem deniz manzarası ve tarihi atmosferi ile unutulmaz bir deneyim sunar.',
        location: 'https://maps.google.com/maps?q=Bodrum+Kalesi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bodrum_Castle_-_panoramio.jpg/1200px-Bodrum_Castle_-_panoramio.jpg'
      },
      {
        title: 'Zeki Müren Sanat Müzesi',
        description: 'Türk sanat müziğinin unutulmaz sesi Zeki Müren\'in yaşamını ve sanatını anlatan özel müze.',
        location: 'https://maps.google.com/maps?q=Zeki+Müren+Sanat+Müzesi+Bodrum',
        image: 'https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180319133721188_Zeki%20Muren%20Sanat%20Muzesi%20(2).jpg'
      },
      {
        title: 'Antik Tiyatro',
        description: 'M.Ö. 4. yüzyıldan kalma, 13.000 kişilik antik tiyatro. Günümüzde hala etkinlikler için kullanılmaktadır.',
        location: 'https://maps.google.com/maps?q=Bodrum+Antik+Tiyatro',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Ancient_Greek_theatre_in_Bodrum.jpg'
      },
      {
        title: 'Yel Değirmenleri',
        description: 'Bodrum\'un tepelerinde yer alan tarihi yel değirmenleri, muhteşem manzara ve fotoğraf çekim noktaları sunar.',
        location: 'https://maps.google.com/maps?q=Bodrum+Yel+Değirmenleri',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Windmills_in_Bodrum.jpg/1200px-Windmills_in_Bodrum.jpg'
      },
      {
        title: 'Barlar Sokağı',
        description: 'Bodrum\'un ünlü gece hayatının merkezi, canlı müzik ve eğlence mekanlarıyla dolu.',
        location: 'https://maps.google.com/maps?q=Bodrum+Barlar+Sokağı',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/79/10/8f/bar-street.jpg?w=1200&h=-1&s=1'
      },
      {
        title: 'Halikarnas Balıkçısı Müzesi',
        description: 'Cevat Şakir Kabaağaçlı\'nın yaşamını ve eserlerini sergileyen müze.',
        location: 'https://maps.google.com/maps?q=Halikarnas+Balıkçısı+Müzesi+Bodrum',
        image: 'https://www.kulturportali.gov.tr/repoKulturPortali/large/23022013/115233d1-2072-4f07-b814-27f98d205643.JPG'
      }
    ],
    en: [
      {
        title: 'Bodrum Castle',
        description: 'The iconic castle of Bodrum serves as the Museum of Underwater Archaeology. It offers an unforgettable experience with its magnificent sea view and historical atmosphere.',
        location: 'https://maps.google.com/maps?q=Bodrum+Castle',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bodrum_Castle_-_panoramio.jpg/1200px-Bodrum_Castle_-_panoramio.jpg'
      },
      {
        title: 'Zeki Müren Art Museum',
        description: 'A special museum dedicated to the life and art of Zeki Müren, the unforgettable voice of Turkish classical music.',
        location: 'https://maps.google.com/maps?q=Zeki+Müren+Art+Museum+Bodrum',
        image: 'https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180319133721188_Zeki%20Muren%20Sanat%20Muzesi%20(2).jpg'
      },
      {
        title: 'Ancient Theater',
        description: 'A 13,000-seat ancient theater from the 4th century BC. Still used for events today.',
        location: 'https://maps.google.com/maps?q=Bodrum+Ancient+Theater',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Ancient_Greek_theatre_in_Bodrum.jpg'
      },
      {
        title: 'Windmills',
        description: 'Historic windmills located on the hills of Bodrum, offering spectacular views and photo opportunities.',
        location: 'https://maps.google.com/maps?q=Bodrum+Windmills',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Windmills_in_Bodrum.jpg/1200px-Windmills_in_Bodrum.jpg'
      },
      {
        title: 'Bar Street',
        description: 'The center of Bodrum\'s famous nightlife, filled with live music venues and entertainment spots.',
        location: 'https://maps.google.com/maps?q=Bodrum+Bar+Street',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/79/10/8f/bar-street.jpg?w=1200&h=-1&s=1'
      },
      {
        title: 'Fisherman of Halicarnassus Museum',
        description: 'Museum exhibiting the life and works of Cevat Şakir Kabaağaçlı.',
        location: 'https://maps.google.com/maps?q=Fisherman+of+Halicarnassus+Museum+Bodrum',
        image: 'https://www.kulturportali.gov.tr/repoKulturPortali/large/23022013/115233d1-2072-4f07-b814-27f98d205643.JPG'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          {language === 'tr' ? 'Bodrum Rehberi' : 'Bodrum Guide'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places[language].map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {place.title}
                  </h3>
                  <div className="flex items-center text-white/90">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Bodrum, Turkey</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{place.description}</p>
                <a
                  href={place.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-primary hover:text-primary-light transition-colors"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">
                    {language === 'tr' ? 'Yol Tarifi Al' : 'Get Directions'}
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Guide;