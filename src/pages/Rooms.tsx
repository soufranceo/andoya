import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Tv, Wind, Home, Bath, Coffee, Maximize } from 'lucide-react';
import RoomImageSlider from '../components/RoomImageSlider';

const Rooms = ({ language }: { language: 'tr' | 'en' }) => {
  const standardRoomImages = [
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon954a1bf0.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/bodrumdenizbutikpansiyon1415bc18.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon6f47d6f7.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/bodrumdenizbutikpansiyon7d22b70f.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/bodrumdenizbutikpansiyon83306bf9.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon01267ca0.jpg'
  ];

  const seaViewRoomImages = [
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon1e233e99.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon3bcaec56.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/bodrumdenizbutikpansiyon85231ce8.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon1b8146a8.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyone70394d8.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/bodrumdenizbutikpansiyonb766d9ca.jpg'
  ];

  const standardDoubleRoomImages = [
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyonada83c09.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyond90a5b45.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon69ab20cc.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyonc1934f02.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon16478c5c.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon429c7363.jpg'
  ];

  const twinRoomImages = [
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyonf85f5b68.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyon5f1f74cc.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyoned18dbea.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyonc5ea1d2b.jpg',
    'https://imgkit.otelz.com/turkey/mugla/bodrum/andoyabutikpansiyond00d1f01.jpg'
  ];

  const rooms = {
    tr: [
      {
        title: 'Standart Bahçe Manzaralı - Çift Kişilik',
        description: 'Bodrum merkezde plaja ve barlara yakın bu şahane pansiyon otel ile kendinizi evinizde hissedecek ve konfor ile konaklayacaksınız. Sezonda dahi en uygun fiyatlı Bodrum merkezi pansiyonumuzda sizi her zaman ağırlamaktan mutluluk duyacağız.',
        amenities: {
          room: [
            'Klima',
            'Düz Ekran TV',
            'Kablosuz İnternet',
            'Extra Uzun Yatak (>2 mt)',
            'Gardırop/Dolap',
            'Ses Yalıtımı',
            'Sivrisinek Teli',
            'Çalışma Masası',
            'Özel Giriş',
            'Makyaj Masası'
          ],
          bathroom: [
            'Duş',
            'Saç Kurutma Makinesi',
            'Terlik',
            'Ücretsiz Banyo Malzemesi',
            'Havlu Seti'
          ],
          view: [
            'Bahçe Manzarası',
            'Balkon',
            'Şehir Manzarası',
            'Aydınlık Manzara',
            'Fransız balkon'
          ],
          media: [
            'Düz Ekran TV',
            'Uydu Kanalları',
            'Kablosuz İnternet'
          ],
          food: [
            'Buzdolabı',
            'Elektrikli Su Isıtıcısı',
            'Mini Buzdolabı'
          ]
        },
        services: ['Uyandırma Servisi'],
        size: '15m²',
        bedType: 'Büyük Çift Kişilik',
        maxPeople: 2,
        images: standardRoomImages
      },
      {
        title: 'Standart Manzaralı Oda - Çift Kişilik',
        description: 'Bodrum merkezde plaja ve barlara yakın bu şahane pansiyon otel ile kendinizi evinizde hissedecek ve konfor ile konaklayacaksınız. Sezonda dahi en uygun fiyatlı Bodrum merkezi pansiyonumuzda sizi her zaman ağırlamaktan mutluluk duyacağız.',
        amenities: {
          room: [
            'Klima',
            'Düz Ekran TV',
            'Kablosuz İnternet',
            'Extra Uzun Yatak (>2 mt)',
            'Gardırop/Dolap',
            'Isıtma',
            'Kurutucu',
            'Ses Yalıtımı',
            'Sivrisinek Teli',
            'Çalışma Masası',
            'Özel Giriş',
            'Makyaj Masası'
          ],
          bathroom: [
            'Banyo',
            'Duş',
            'Saç Kurutma Makinesi',
            'Terlik',
            'Tuvalet',
            'Ücretsiz Banyo Malzemesi',
            'Havlu Seti'
          ],
          view: [
            'Bahçe Manzarası',
            'Deniz Manzarası',
            'Şehir Manzarası',
            'Kısmi Deniz Manzarası',
            'Aydınlık Manzara',
            'Küçük Pencere'
          ],
          media: [
            'Düz Ekran TV',
            'TV',
            'Uydu Kanalları',
            'İnternet',
            'Kablosuz İnternet'
          ],
          food: [
            'Buzdolabı',
            'Elektrikli Su Isıtıcısı',
            'Mini Buzdolabı'
          ]
        },
        services: ['Uyandırma Servisi'],
        size: '15m²',
        bedType: 'Büyük Çift Kişilik',
        maxPeople: 2,
        images: seaViewRoomImages
      },
      {
        title: 'Standart Oda - Çift Kişilik',
        description: 'Bodrum merkezde plaja ve barlara yakın bu şahane pansiyon otel ile kendinizi evinizde hissedecek ve konfor ile konaklayacaksınız. Sezonda dahi en uygun fiyatlı Bodrum merkezi pansiyonumuzda sizi her zaman ağırlamaktan mutluluk duyacağız.',
        amenities: {
          room: [
            'Klima',
            'Düz Ekran TV',
            'Kablosuz İnternet',
            'Gardırop/Dolap',
            'Isıtma',
            'Kurutucu',
            'Ses Yalıtımı',
            'Sivrisinek Teli',
            'Çalışma Masası',
            'Özel Giriş',
            'Makyaj Masası'
          ],
          bathroom: [
            'Banyo',
            'Duş',
            'Saç Kurutma Makinesi',
            'Terlik',
            'Tuvalet',
            'Ücretsiz Banyo Malzemesi',
            'Havlu Seti'
          ],
          view: [
            'Aydınlık Manzara',
            'Küçük Pencere'
          ],
          media: [
            'Düz Ekran TV',
            'TV',
            'Uydu Kanalları',
            'İnternet',
            'Kablosuz İnternet'
          ],
          food: [
            'Buzdolabı',
            'Elektrikli Su Isıtıcısı',
            'Mini Buzdolabı'
          ]
        },
        services: ['Uyandırma Servisi'],
        size: '15m²',
        bedType: 'Çift Kişilik ve Büyük Çift Kişilik',
        maxPeople: 2,
        images: standardDoubleRoomImages
      },
      {
        title: 'Standart Bahçe Katı Oda - İki Tek Yataklı',
        description: 'Bodrum merkezde plaja ve barlara yakın bu şahane pansiyon otel ile kendinizi evinizde hissedecek ve konfor ile konaklayacaksınız. Sezonda dahi en uygun fiyatlı Bodrum merkezi pansiyonumuzda sizi her zaman ağırlamaktan mutluluk duyacağız.',
        amenities: {
          room: [
            'Klima',
            'Düz Ekran TV',
            'Kablosuz İnternet',
            'Gardırop/Dolap',
            'Isıtma',
            'Kurutucu',
            'Ses Yalıtımı',
            'Sivrisinek Teli',
            'Çalışma Masası',
            'Özel Giriş',
            'Makyaj Masası'
          ],
          bathroom: [
            'Banyo',
            'Duş',
            'Saç Kurutma Makinesi',
            'Terlik',
            'Tuvalet',
            'Ücretsiz Banyo Malzemesi',
            'Havlu Seti'
          ],
          view: [
            'Aydınlık Manzara',
            'Küçük Pencere'
          ],
          media: [
            'Düz Ekran TV',
            'TV',
            'Uydu Kanalları',
            'İnternet',
            'Kablosuz İnternet'
          ],
          food: [
            'Buzdolabı',
            'Elektrikli Su Isıtıcısı',
            'Mini Buzdolabı'
          ]
        },
        services: ['Uyandırma Servisi'],
        size: '15m²',
        bedType: 'İki Tek Kişilik Yatak',
        maxPeople: 2,
        images: twinRoomImages
      }
    ],
    en: [
      {
        title: 'Standard Garden View - Double Room',
        description: 'Located close to the beach and bars in central Bodrum, you will feel at home and stay in comfort with this wonderful pension hotel. We will always be happy to host you in our Bodrum central pension, which has the most affordable prices even during the season.',
        amenities: {
          room: [
            'Air Conditioning',
            'Flat-screen TV',
            'Wireless Internet',
            'Extra Long Bed (>2m)',
            'Wardrobe/Closet',
            'Sound Insulation',
            'Mosquito Net',
            'Work Desk',
            'Private Entrance',
            'Vanity Desk'
          ],
          bathroom: [
            'Shower',
            'Hair Dryer',
            'Slippers',
            'Free Toiletries',
            'Towel Set'
          ],
          view: [
            'Garden View',
            'Balcony',
            'City View',
            'Bright View',
            'French Balcony'
          ],
          media: [
            'Flat-screen TV',
            'Satellite Channels',
            'Wireless Internet'
          ],
          food: [
            'Refrigerator',
            'Electric Kettle',
            'Mini Fridge'
          ]
        },
        services: ['Wake-up Service'],
        size: '15m²',
        bedType: 'Large Double Bed',
        maxPeople: 2,
        images: standardRoomImages
      },
      {
        title: 'Standard Sea View Room - Double Room',
        description: 'Located close to the beach and bars in central Bodrum, you will feel at home and stay in comfort with this wonderful pension hotel. We will always be happy to host you in our Bodrum central pension, which has the most affordable prices even during the season.',
        amenities: {
          room: [
            'Air Conditioning',
            'Flat-screen TV',
            'Wireless Internet',
            'Extra Long Bed (>2m)',
            'Wardrobe/Closet',
            'Heating',
            'Dryer',
            'Sound Insulation',
            'Mosquito Net',
            'Work Desk',
            'Private Entrance',
            'Vanity Desk'
          ],
          bathroom: [
            'Bathroom',
            'Shower',
            'Hair Dryer',
            'Slippers',
            'Toilet',
            'Free Toiletries',
            'Towel Set'
          ],
          view: [
            'Garden View',
            'Sea View',
            'City View',
            'Partial Sea View',
            'Bright View',
            'Small Window'
          ],
          media: [
            'Flat-screen TV',
            'TV',
            'Satellite Channels',
            'Internet',
            'Wireless Internet'
          ],
          food: [
            'Refrigerator',
            'Electric Kettle',
            'Mini Fridge'
          ]
        },
        services: ['Wake-up Service'],
        size: '15m²',
        bedType: 'Large Double Bed',
        maxPeople: 2,
        images: seaViewRoomImages
      },
      {
        title: 'Standard Room - Double Room',
        description: 'Located close to the beach and bars in central Bodrum, you will feel at home and stay in comfort with this wonderful pension hotel. We will always be happy to host you in our Bodrum central pension, which has the most affordable prices even during the season.',
        amenities: {
          room: [
            'Air Conditioning',
            'Flat-screen TV',
            'Wireless Internet',
            'Wardrobe/Closet',
            'Heating',
            'Dryer',
            'Sound Insulation',
            'Mosquito Net',
            'Work Desk',
            'Private Entrance',
            'Vanity Desk'
          ],
          bathroom: [
            'Bathroom',
            'Shower',
            'Hair Dryer',
            'Slippers',
            'Toilet',
            'Free Toiletries',
            'Towel Set'
          ],
          view: [
            'Bright View',
            'Small Window'
          ],
          media: [
            'Flat-screen TV',
            'TV',
            'Satellite Channels',
            'Internet',
            'Wireless Internet'
          ],
          food: [
            'Refrigerator',
            'Electric Kettle',
            'Mini Fridge'
          ]
        },
        services: ['Wake-up Service'],
        size: '15m²',
        bedType: 'Double Bed and Large Double Bed',
        maxPeople: 2,
        images: standardDoubleRoomImages
      },
      {
        title: 'Standard Garden Floor Room - Twin Beds',
        description: 'Located close to the beach and bars in central Bodrum, you will feel at home and stay in comfort with this wonderful pension hotel. We will always be happy to host you in our Bodrum central pension, which has the most affordable prices even during the season.',
        amenities: {
          room: [
            'Air Conditioning',
            'Flat-screen TV',
            'Wireless Internet',
            'Wardrobe/Closet',
            'Heating',
            'Dryer',
            'Sound Insulation',
            'Mosquito Net',
            'Work Desk',
            'Private Entrance',
            'Vanity Desk'
          ],
          bathroom: [
            'Bathroom',
            'Shower',
            'Hair Dryer',
            'Slippers',
            'Toilet',
            'Free Toiletries',
            'Towel Set'
          ],
          view: [
            'Bright View',
            'Small Window'
          ],
          media: [
            'Flat-screen TV',
            'TV',
            'Satellite Channels',
            'Internet',
            'Wireless Internet'
          ],
          food: [
            'Refrigerator',
            'Electric Kettle',
            'Mini Fridge'
          ]
        },
        services: ['Wake-up Service'],
        size: '15m²',
        bedType: 'Two Single Beds',
        maxPeople: 2,
        images: twinRoomImages
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
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          {language === 'tr' ? 'Odalarımız' : 'Our Rooms'}
        </h1>

        <div className="grid grid-cols-1 gap-12">
          {rooms[language].map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-[400px]">
                  <RoomImageSlider images={room.images} />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-blue-900">
                      {room.title}
                    </h3>
                    <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 text-blue-900 mr-1" />
                      <span className="text-sm font-medium text-blue-900">
                        {room.maxPeople} {language === 'tr' ? 'Kişi' : 'People'}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{room.description}</p>

                  <div className="flex items-center space-x-4 mb-6">
                    <Maximize className="w-5 h-5 text-blue-900" />
                    <span className="text-gray-700">{room.size}</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        {language === 'tr' ? 'Oda Özellikleri' : 'Room Features'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.room.map((amenity, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Wind className="w-4 h-4 text-blue-900" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        {language === 'tr' ? 'Banyo Özellikleri' : 'Bathroom Features'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.bathroom.map((amenity, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Bath className="w-4 h-4 text-blue-900" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        {language === 'tr' ? 'Manzara & Dış Mekan' : 'View & Outdoor'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.view.map((amenity, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Home className="w-4 h-4 text-blue-900" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        {language === 'tr' ? 'Medya Özellikleri' : 'Media Features'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.media.map((amenity, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Tv className="w-4 h-4 text-blue-900" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        {language === 'tr' ? 'Yeme/İçme Özellikleri' : 'Food & Beverage'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.food.map((amenity, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Coffee className="w-4 h-4 text-blue-900" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Rooms;