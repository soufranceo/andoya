import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/90 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">İletişim</h3>
            <p className="text-sm font-light">
              Kumbahçe, Papatya Sk. No:15 iç kapı no 1,<br />
               48470 Bodrum/Muğla
            </p>
            <p className="text-sm font-light mt-4">
              Tel: +90542 316 52 80<br />
              Email: info@andoyapansiyon.com
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Hızlı Bağlantılar</h3>
            <ul className="text-sm space-y-3 font-light">
              <li><a href="/rooms" className="hover:text-primary-light transition-colors">Odalarımız</a></li>
              <li><a href="/about" className="hover:text-primary-light transition-colors">Hakkımızda</a></li>
              <li><a href="/guide" className="hover:text-primary-light transition-colors">Bodrum Rehberi</a></li>
              <li><a href="/contact" className="hover:text-primary-light transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Konum</h3>
            <p className="text-sm font-light space-y-2">
              Bodrum Barlar Sokağı'na 5 dakika<br />
              Bodrum Kalesi'ne 10 dakika<br />
              Bodrum Marina'ya 12 dakika<br />
              Zeki Müren Sanat Müzesi'ne 7 dakika<br />
              Kumbahçe Plajı'na 2 dakika
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm font-light">
            © {currentYear} ANDOYA BUTİK PANSİYON. Tüm hakları saklıdır.<br />
            <span className="flex items-center justify-center mt-3">
             Copy Write to 2030<Heart className="w-4 h-4 mx-1 text-primary-light fill-current" /> by Mehmet Akgül
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;