'use client';
import React, { useState } from 'react';
import { ExternalLink, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'web3jh@gmail.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 78966 76119',
      description: 'Available Monday to Saturday, 10 AM to 8 PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Ranchi, Jharkhand',
      description: 'Our main Community Hub'
    },
    // {
    //   icon: Clock,
    //   title: 'Office Hours',
    //   details: 'Mon - Fri: 10 AM - 6 PM',
    //   description: 'Weekend events as per schedule'
    // }
  ];

  const socialLinks = [
    { 
      name: 'Twitter', 
      handle: '@Web3Jh', 
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      url: 'https://twitter.com/Web3Jh',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      handle: 'Web3JH',  
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      url: 'https://linkedin.com/company/web3jh',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      handle: '@Web3Jh', 
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'hover:from-pink-600 hover:to-rose-700',
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      url: 'https://instagram.com/web3jh',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'Telegram', 
      handle: '@Web3Jh', 
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      url: 'https://t.me/web3jh',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      handle: 'Web3JH', 
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      textColor: 'text-green-600',
      bgColor: 'bg-green-100',
      url: 'https://chat.whatsapp.com/D1sSYDN7Lxn7ZUvfxoBAUi',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      )
    },
  ];

  const faqs = [
    {
      question: 'How can I join the Web3JH community?',
      answer: 'You can join our Community on WhatsApp and Telegram, attend our Events, or reach out to the Chapter Lead at your college. All students and professionals interested in Web3 are welcome!'
    },
    {
      question: 'Are the events organized by Web3JH free to attend?',
      answer: 'Yes all our events, meetups and conferences are completely free. We have never charged the participants for any registration fees for our events.'
    },
    {
      question: 'Do I need prior blockchain experience to join Web3JH events?',
      answer: 'Not at all! We have events for all skill levels, from complete beginners to advanced developers.'
    },
    {
      question: 'Can I start a Web3JH Chapter at my college?',
      answer: 'Absolutely! We\'re always looking to expand. Contact us with details about your college and we\'ll help you set up a new chapter.'
    },
    {
      question: 'How can my company partner with Web3JH?',
      answer: 'We welcome partnerships with companies interested in supporting Web3 education or building products in Web3 space. Reach out to discuss collaboration opportunities, partnerships, guest speaking, or community programs.'
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenFAQ(openFAQ === index ? null : index);
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Web3 Jharkhand",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 78966 76119",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "email": "web3jh@gmail.com",
        "contactType": "customer service"
      }
    ]
  }
};
  // const teamContacts = [
  //   {
  //     name: 'Rahul Kumar',
  //     role: 'Founder & Community Lead',
  //     email: 'rahul@web3jh.org',
  //     specialization: 'Blockchain Development, Community Building'
  //   },
  //   {
  //     name: 'Priya Singh',
  //     role: 'Education Director',
  //     email: 'priya@web3jh.org',
  //     specialization: 'Curriculum Design, Workshop Planning'
  //   },
  //   {
  //     name: 'Amit Sharma',
  //     role: 'Technical Lead',
  //     email: 'amit@web3jh.org',
  //     specialization: 'Smart Contracts, DApp Development'
  //   },
  //   {
  //     name: 'Sneha Patel',
  //     role: 'Community Manager',
  //     email: 'sneha@web3jh.org',
  //     specialization: 'Events, Social Media, Partnerships'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-600  to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Want to collaborate? Looking to join our community? 
              We'd love to hear from you and help you get started with Web3.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <info.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-purple-600 font-medium mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          {/* <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>General Inquiry</option>
                    <option>Join Community</option>
                    <option>Start College Chapter</option>
                    <option>Partnership Opportunity</option>
                    <option>Event Collaboration</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div> */}
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of Web3 enthusiasts, developers, and innovators. Follow us for the latest updates, 
              event announcements, and exclusive content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {socialLinks.map((social, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6 lg:p-8 text-center">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon container */}
                  <div className={`relative w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6 ${social.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <div className={`${social.textColor} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-gray-800 transition-colors">
                      {social.name}
                    </h3>
                    <p className={`${social.textColor} font-semibold text-base lg:text-lg mb-1`}>
                      {social.handle}
                    </p>

                    {/* Follow button */}
                    <Button 
                      className={`w-full bg-gradient-to-r ${social.color} ${social.hoverColor} text-white border-0 rounded-xl font-semibold py-2 lg:py-3 text-sm lg:text-base transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <Users className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                      {social.name === 'Telegram' || social.name === 'WhatsApp' ? 'Join' : 'Follow'}
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our community
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4 md:p-6">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <p className="mt-3 text-gray-600 transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Visit our main hub at NIT Jamshedpur
            </p>
          </div>

          <Card className="p-8 text-center">
            <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Web3JH Community Hub</h3>
            <p className="text-gray-600 mb-4">
              National Institute of Technology Jamshedpur<br />
              Adityapur, Jamshedpur, Jharkhand 831014
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Directions
            </Button>
          </Card>
        </div>
      </section> */}
    </div>
  );
}