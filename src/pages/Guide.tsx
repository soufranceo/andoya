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
        image: 'https://ia.tmgrup.com.tr/77db65/0/0/0/0/864/486?u=https://i.tmgrup.com.tr/es/2022/01/21/yenilenen-bodrum-kalesini-165-bin-kisi-ziyaret-etti-1642769198738.jpg'
      },
      {
        title: 'Zeki Müren Sanat Müzesi',
        description: 'Türk sanat müziğinin unutulmaz sesi Zeki Müren\'in yaşamını ve sanatını anlatan özel müze.',
        location: 'https://maps.google.com/maps?q=Zeki+Müren+Sanat+Müzesi+Bodrum',
        image: 'https://www.muglayenigun.com//wp-content/uploads/2024/10/WhatsApp-Gorsel-2024-10-26-saat-16.43.35_7e1f7657.jpg'
      },
      {
        title: 'Antik Tiyatro',
        description: 'M.Ö. 4. yüzyıldan kalma, 13.000 kişilik antik tiyatro. Günümüzde hala etkinlikler için kullanılmaktadır.',
        location: 'https://maps.google.com/maps?q=Bodrum+Antik+Tiyatro',
        image: 'https://www.dengesende.com/images/haberler/2023/03/turkiye-deki-antik-tiyatrolar-4827.jpg'
      },
      {
        title: 'Yel Değirmenleri',
        description: 'Bodrum\'un tepelerinde yer alan tarihi yel değirmenleri, muhteşem manzara ve fotoğraf çekim noktaları sunar.',
        location: 'https://maps.google.com/maps?q=Bodrum+Yel+Değirmenleri',
        image: 'https://www.bodrumvillakiralama.com/uploads/images/bodrum-yel-degirmenleri-blog-min.jpg'
      },
      {
        title: 'Barlar Sokağı',
        description: 'Bodrum\'un ünlü gece hayatının merkezi, canlı müzik ve eğlence mekanlarıyla dolu.',
        location: 'https://maps.google.com/maps?q=Bodrum+Barlar+Sokağı',
        image: 'https://tatilcity.net/uploads/0000/1/2024/09/27/barlar-sokagi-bodrum.jpg'
      },
      {
        title: 'Halikarnas Balıkçısı Müzesi',
        description: 'Cevat Şakir Kabaağaçlı\'nın yaşamını ve eserlerini sergileyen müze.',
        location: 'https://maps.google.com/maps?q=Halikarnas+Balıkçısı+Müzesi+Bodrum',
        image: 'https://i.gazeteoksijen.com/storage/files/images/2024/05/29/orhan-velinin-misralari-ve-halikarnas-balikcisini-bulusturan-sergi-deniz-ulkesi-ddyd.png'
      }
    ],
    en: [
      {
        title: 'Bodrum Castle',
        description: 'The iconic castle of Bodrum serves as the Museum of Underwater Archaeology. It offers an unforgettable experience with its magnificent sea view and historical atmosphere.',
        location: 'https://maps.google.com/maps?q=Bodrum+Castle',
        image: 'https://ia.tmgrup.com.tr/77db65/0/0/0/0/864/486?u=https://i.tmgrup.com.tr/es/2022/01/21/yenilenen-bodrum-kalesini-165-bin-kisi-ziyaret-etti-1642769198738.jpg'
      },
      {
        title: 'Zeki Müren Art Museum',
        description: 'A special museum dedicated to the life and art of Zeki Müren, the unforgettable voice of Turkish classical music.',
        location: 'https://maps.google.com/maps?q=Zeki+Müren+Art+Museum+Bodrum',
        image: 'https://www.muglayenigun.com//wp-content/uploads/2024/10/WhatsApp-Gorsel-2024-10-26-saat-16.43.35_7e1f7657.jpg'
      },
      {
        title: 'Ancient Theater',
        description: 'A 13,000-seat ancient theater from the 4th century BC. Still used for events today.',
        location: 'https://maps.google.com/maps?q=Bodrum+Ancient+Theater',
        image: 'https://www.dengesende.com/images/haberler/2023/03/turkiye-deki-antik-tiyatrolar-4827.jpg'
      },
      {
        title: 'Windmills',
        description: 'Historic windmills located on the hills of Bodrum, offering spectacular views and photo opportunities.',
        location: 'https://maps.google.com/maps?q=Bodrum+Windmills',
        image: 'https://www.bodrumvillakiralama.com/uploads/images/bodrum-yel-degirmenleri-blog-min.jpg'
      },
      {
        title: 'Bar Street',
        description: 'The center of Bodrum\'s famous nightlife, filled with live music venues and entertainment spots.',
        location: 'https://maps.google.com/maps?q=Bodrum+Bar+Street',
        image: 'https://tatilcity.net/uploads/0000/1/2024/09/27/barlar-sokagi-bodrum.jpg'
      },
      {
        title: 'Fisherman of Halicarnassus Museum',
        description: 'Museum exhibiting the life and works of Cevat Şakir Kabaağaçlı.',
        location: 'https://maps.google.com/maps?q=Fisherman+of+Halicarnassus+Museum+Bodrum',
        image: 'https://i.gazeteoksijen.com/storage/files/images/2024/05/29/orhan-velinin-misralari-ve-halikarnas-balikcisini-bulusturan-sergi-deniz-ulkesi-ddyd.png'
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
