import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ language }: { language: 'tr' | 'en' }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    tr: {
      title: 'İletişim',
      name: 'Ad Soyad',
      email: 'E-posta',
      message: 'Mesajınız',
      send: 'Gönder',
      success: 'Mesajınız başarıyla gönderildi!',
      error: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      address: 'Kumbahçe, Papatya Sk. No:15 iç kapı no 1, 48470 Bodrum/Muğla'
    },
    en: {
      title: 'Contact',
      name: 'Full Name',
      email: 'Email',
      message: 'Your Message',
      send: 'Send',
      success: 'Your message has been sent successfully!',
      error: 'An error occurred. Please try again.',
      address: 'Kumbahçe, Papatya Sk. No:15 iç kapı no 1, 48470 Bodrum/Muğla'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_andoya',
        'template_andoya',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          {content[language].title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="from_name">
                    {content[language].name}
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="reply_to">
                    {content[language].email}
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    {content[language].message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <input type="hidden" name="to_email" value="cesmelihotel16@hotmail.com" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {content[language].send}
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">
                    {content[language].success}
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    {content[language].error}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Adres' : 'Address'}
                    </h3>
                    <p className="text-gray-600">{content[language].address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-900" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Telefon' : 'Phone'}
                    </h3>
                    <p className="text-gray-600">+90 543 228 15 11</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-900" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'E-posta' : 'Email'}
                    </h3>
                    <p className="text-gray-600">andoya@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1744901149747!6m8!1m7!1sCAoSLEFGMVFpcE9GZW9veExEQ29FNld0WmduejUySV9WcGJFdmJ3ZzFGZ1NBZEFZ!2m2!1d37.03175112747551!2d27.43956170808691!3f31.94!4f1.7099999999999937!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
