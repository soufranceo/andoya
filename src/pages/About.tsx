import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Wifi, Coffee } from 'lucide-react';

const About = ({ language }: { language: 'tr' | 'en' }) => {
  const content = {
    tr: {
      title: 'Hakkımızda',
      description: 'Bodrum Merkez otelleri arasında yer alan, Andoya Butik Pansiyon Bodrum Merkez bölgesinde ve Barlar Sokağı\'na, Bodrum Kalesi\'ne ve sembol yapılara yakınlığı ile Bodrum\'da tercih edilen en uygun ve konforlu oteller arasında yer almaktadır.',
      details: 'Toplamda 8 odası ile hizmet sağlayan otel, uygun fiyata konforlu bir konaklama imkanı sunmaktadır. Oda kahvaltı ve kahvaltısız konaklama konseptinde hizmet veren harika ve huzur bir aile pansiyonudur.',
      features: [
        'Ücretsiz Wi-Fi',
        'Açık Büfe Kahvaltı',
        '8 Konforlu Oda',
        '24 Saat Resepsiyon'
      ],
      locations: [
        { name: 'Bodrum Barlar Sokağı', distance: '5 dakika' },
        { name: 'Bodrum Kalesi', distance: '10 dakika' },
        { name: 'Bodrum Marina', distance: '12 dakika' },
        { name: 'Zeki Müren Sanat Müzesi', distance: '7 dakika' },
        { name: 'Kumbahçe Plajı', distance: '2 dakika' }
      ]
    },
    en: {
      title: 'About Us',
      description: 'Located among the central hotels of Bodrum, Andoya Boutique Pension is one of the most preferred and comfortable hotels in Bodrum, situated in the Central region, close to Bar Street, Bodrum Castle, and symbolic structures.',
      details: 'The hotel provides comfortable accommodation at affordable prices with a total of 8 rooms. The facility serves in bed and breakfast concept, where breakfast service is offered as an open buffet.',
      features: [
        'Free Wi-Fi',
        'Open Buffet Breakfast',
        '8 Comfortable Rooms',
        '24/7 Reception'
      ],
      locations: [
        { name: 'Bodrum Bar Street', distance: '5 minutes' },
        { name: 'Bodrum Castle', distance: '10 minutes' },
        { name: 'Bodrum Marina', distance: '12 minutes' },
        { name: 'Zeki Müren Art Museum', distance: '7 minutes' },
        { name: 'Kumbahce Beach', distance: '2 minutes' }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          {content[language].title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[language].description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[language].details}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {content[language].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {index === 0 && <Wifi className="w-5 h-5 text-blue-900" />}
                  {index === 1 && <Coffee className="w-5 h-5 text-blue-900" />}
                  {index === 2 && <MapPin className="w-5 h-5 text-blue-900" />}
                  {index === 3 && <Clock className="w-5 h-5 text-blue-900" />}
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              {language === 'tr' ? 'Yakın Konumlar' : 'Nearby Locations'}
            </h2>
            <div className="space-y-4">
              {content[language].locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">{location.name}</span>
                  <span className="text-blue-900 font-medium">{location.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;