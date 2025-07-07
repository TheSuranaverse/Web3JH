'use client';

import { Calendar, Clock, MapPin, Users, ExternalLink, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useRef } from 'react';

interface PastEvent {
  title: string;
  description?: string;
  date: string;
  location: string;
  type: string;
  participants: number;
  rating: number;
  images: string[];
}

interface EventType {
  name: string;
  count: number;
  color: string;
}

interface ImageIndices {
  [key: number]: number;
}

export default function Events() {
  // const upcomingEvents = [
  //   {
  //     title: 'Web3 Developer Bootcamp',
  //     date: '2025-02-15',
  //     time: '10:00 AM - 6:00 PM',
  //     location: 'NIT Jamshedpur',
  //     type: 'Workshop',
  //     description: 'Intensive hands-on workshop covering smart contract development, DApp creation, and Web3 integration. Perfect for beginners and intermediate developers.',
  //     capacity: 50,
  //     registered: 35,
  //     price: 'Free',
  //     topics: ['Smart Contracts', 'Solidity', 'React', 'Web3.js'],
  //     speaker: 'Rahul Kumar, Senior Blockchain Developer'
  //   },
  //   {
  //     title: 'Blockchain for Beginners',
  //     date: '2025-02-28',
  //     time: '2:00 PM - 5:00 PM',
  //     location: 'BIT Mesra',
  //     type: 'Seminar',
  //     description: 'Introduction to blockchain technology, cryptocurrencies, and decentralized applications. No prior experience required.',
  //     capacity: 100,
  //     registered: 67,
  //     price: 'Free',
  //     topics: ['Blockchain Basics', 'Cryptocurrency', 'DeFi', 'NFTs'],
  //     speaker: 'Priya Singh, Education Director'
  //   },
  //   {
  //     title: 'DeFi Deep Dive',
  //     date: '2025-03-10',
  //     time: '11:00 AM - 4:00 PM',
  //     location: 'Online',
  //     type: 'Webinar',
  //     description: 'Exploring decentralized finance protocols, yield farming, liquidity mining, and building DeFi applications.',
  //     capacity: 200,
  //     registered: 145,
  //     price: 'Free',
  //     topics: ['DeFi Protocols', 'Yield Farming', 'AMM', 'Governance'],
  //     speaker: 'Amit Sharma, DeFi Specialist'
  //   },
  //   {
  //     title: 'NFT Marketplace Development',
  //     date: '2025-03-20',
  //     time: '9:00 AM - 5:00 PM',
  //     location: 'Ranchi University',
  //     type: 'Workshop',
  //     description: 'Build your own NFT marketplace from scratch using modern Web3 technologies and IPFS for decentralized storage.',
  //     capacity: 40,
  //     registered: 28,
  //     price: '₹500',
  //     topics: ['NFT Standards', 'IPFS', 'Marketplace Logic', 'Frontend Integration'],
  //     speaker: 'Sneha Patel, Full-stack Developer'
  //   },
  //   {
  //     title: 'Web3 Career Fair',
  //     date: '2025-04-05',
  //     time: '10:00 AM - 6:00 PM',
  //     location: 'IIIT Ranchi',
  //     type: 'Career Fair',
  //     description: 'Meet with top Web3 companies, explore job opportunities, and network with industry professionals.',
  //     capacity: 300,
  //     registered: 180,
  //     price: 'Free',
  //     topics: ['Job Opportunities', 'Networking', 'Career Guidance', 'Portfolio Review'],
  //     speaker: 'Multiple Industry Experts'
  //   },
  //   {
  //     title: 'Jharkhand Web3 Hackathon 2025',
  //     date: '2025-04-15',
  //     time: '48 Hours',
  //     location: 'Central University of Jharkhand',
  //     type: 'Hackathon',
  //     description: 'Build innovative blockchain solutions addressing local challenges. Prizes worth ₹2 lakhs and mentorship opportunities.',
  //     capacity: 150,
  //     registered: 89,
  //     price: 'Free',
  //     topics: ['Problem Solving', 'Team Building', 'Innovation', 'Pitching'],
  //     speaker: 'Panel of Industry Judges'
  //   }
  // ];

  const pastEvents = [
    {
      title: 'Avalanche Gaming Night - BloodLoop',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '12th July 2025',
      location: 'Dhanbad',
      type: 'Gaming Night',
      participants: 22,
      rating: 4.6,
      images: [
        'Avax_Gaming_Night_Dhanbad.jpg',
      ]
    },
    {
      title: 'Avalanche Gaming Night - BloodLoop',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '29th June 2025',
      location: 'Ranchi',
      type: 'Gaming Night',
      participants: 25,
      rating: 4.8,
      images: [
        'Avax_Gaming_Night_Ranchi.png',
        'avax_rnc1.JPG',
        'avax_rnc2.JPG',
        'avax_rnc5.png',
        'avax_rnc3.JPG',
        'avax_rnc4.png'
      ]
    },
    {
      title: 'Avalanche Gaming Night - BloodLoop',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '28th June 2025',
      location: 'Jamshedpur',
      type: 'Gaming Night',
      participants: 19,
      rating: 4.2,
      images: [
        'Avax_Gaming_Night_Jamshedpur.png',
        'avax_jsr1.png',
        'avax_jsr2.jpg',
        'avax_jsr.jpg'
      ]
    },
    {
      title: 'Vibe Coding Jam - AI x Web3',
      description: 'Build production-ready decentralized applications or smart contracts in Minutes using AI',
      date: '15th June 2025',
      location: 'Google Meet',
      type: 'Workshop',
      participants: 97,
      rating: 5,
      images: [
        'vibe-coding-jam.png'
      ]
    },
    {
      title: 'Bitcoin Pizza Day 🍕',
      description: 'Celebrate the legendary day with Bitcoin fam across Jharkhand when 2 pizzas made Bitcoin history!',
      date: '22nd May 2025',
      location: 'Ranchi',
      type: 'Meetup',
      participants: 25,
      rating: 4.8,
      images: [
        'btc-pizza-day-1.png',
        'btc-pizza-day-2.jpg',
        'btc-pizza-day-3.jpg'
      ]
    },
    {
      title: 'Avalanche Web3 Gaming Night',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '12th April 2025',
      location: 'Ranchi',
      type: 'Gaming Night',
      participants: 21,
      rating: 4.4,
      images: [
        'avalanche-gaming.jpg'
      ]
    },
    {
      title: 'Shardeum Road Show',
      date: '20th Oct 2024',
      location: 'BIT Mesra, Ranchi',
      type: 'Conference',
      participants: 210,
      rating: 4.7,
      images: [
        'shm-road-show-1.jpg',
        'shm-road-show-2.jpg',
        'shm-road-show-3.jpg'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 8th Edition',
      description: 'Connect, learn and grow your network in Web3 space!',
      date: '11th Feb 2024',
      location: 'Ranchi',
      type: 'Meetup',
      participants: 41,
      rating: 4.1,
      images: [
        'blockmeet_2024.png',
        'blockmeet_grow.jpg',
        'blockmeet_grow1.jpg',
        'blockmeet_grow2.jpg',
        'blockmeet_grow3.jpg',
        'blockmeet_grow4.jpg',
      ]
    },
    {
      title: 'Deploy Your First DApp @Shardeum',
      description: 'Learn basics of Web3, followed by hands-on programming on Solidity and deploy dApp on Sphinx!',
      date: '6th Nov 2023',
      location: 'NIAMT Ranchi (NIFFT)',
      type: 'Workshop',
      participants: 117,
      rating: 4.7,
      images: [
        'deploy_dapp_shardeum.png'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 7th Edition',
      description: 'Intro to DeFi and how Bitcoin is revolutionizing the finance industry!',
      date: '27th October 2023',
      location: 'BIT Mesra, Ranchi',
      type: 'Conference',
      participants: 133,
      rating: 4.6,
      images: [
        'blockmeet-bitm-new.jpg',
        'blockmeet-bitm-new1.jpg',
        'blockmeet-bitm-new2.jpg',
        'blockmeet-bitm-new3.jpg',
        'blockmeet-bitm-new4.jpg'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 6th Edition',
      description: 'Intro to Web3 and Career Opportunities in Blockchain space!',
      date: '26th August 2023',
      location: 'BIT Mesra, Ranchi',
      type: 'Seminar',
      participants: 327,
      rating: 4.9,
      images: [
        'blockmeet_bitm00.png',
        'blockmeet-bitm0.jpg',
        'blockmeet-bitm.jpg',
        'blockmeet-bitm1.jpg',
        'blockmeet-bitm2.jpg',
        'blockmeet-bitm3.jpg',
        'blockmeet-bitm4.png',
      ]
    },
    {
      title: 'Blockmeet Ranchi - 5th Edition',
      description: 'How to start your journey in Web3, learn about DAOs and claim your POAP!',
      date: '17th June 2023',
      location: 'BIT Mesra, Ranchi',
      type: 'Meetup',
      participants: 33,
      rating: 4.6,
      images: [
        'blockmeet_june.jpg',
        'blockmeet_june1.jpg',
      ]
    },
    {
      title: 'Shardeum Web3 Meetup',
      description: 'Intro to Blockchain followed by hand-on session to claim $SHM tokens & mint NFTs',
      date: '14th May 2023',
      location: 'NIAMT Ranchi',
      type: 'Meetup',
      participants: 170,
      rating: 4.5,
      images: [
        'shardeum_meetup_poster.png',
        'shardeum_meetup1.jpg',
        'shardeum_meetup2.jpg',
        'shardeum_meetup3.jpg',
        'shardeum_meetup4.jpg',
        'shardeum_meetup5.jpg',
        'shardeum_meetup6.jpg',
      ]
    },
    {
      title: 'Blockmeet Ranchi - 4th Edition',
      description: 'Intro to Web3 and Blockchain followed by a panel of founders and CxOs building in Web3 space!',
      date: '15th April 2023',
      location: 'IIIT Ranchi',
      type: 'Seminar',
      participants: 206,
      rating: 4.8,
      images: [
        'blockmeet_iiit_poster.jpeg',
        'blockmeet_iiit.jpg',
        'blockmeet_iiit2.jpg',
        'blockmeet_iiit2_5.jpg',
        'blockmeet_iiit3.jpg',
        'blockmeet_iiit4.jpg'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 3rd Edition',
      description: 'Intro to Web3, Blockchain and Crypto!',
      date: '18th March 2023',
      location: 'IIIT Ranchi',
      type: 'Workshop',
      participants: 48,
      rating: 5.0,
      images: [
        'blockmeet_mar_poster.jpeg',
        'blockmeet_mar.jpg',
        'blockmeet_mar1.jpg',
        'blockmeet_mar2.jpg',
        'blockmeet_mar3.jpg',
      ]
    },
    {
      title: 'Blockmeet Ranchi - 2nd Edition',
      description: 'Intro to Web3 and Community Building',
      date: '18th Feb 2023',
      location: 'Krishna Inn Hotel, Ranchi',
      type: 'Meetup',
      participants: 5,
      rating: 4.3,
      images: [
        'blockmeet_feb.png',
        'blockmeet_feb_1.jpg',
        'blockmeet_feb_2.jpg'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 1st Edition',
      description: 'What is Blockchain and how to start your career as a blockchain developer',
      date: '21st Jan 2023',
      location: 'Ranchi',
      type: 'Meetup',
      participants: 21,
      rating: 4.1,
      images: [
        'blockmeet_other.jpg',
        'blockmeet_other1.jpg',
        'blockmeet_other2.jpg',
        'blockmeet_other3.jpg',
      ]
    },
  ];

  const eventTypes = [
    { name: 'Webinar', count: 5, color: 'bg-blue-100 text-blue-800' },
    { name: 'Seminar', count: 2, color: 'bg-green-100 text-green-800' },
    { name: 'IRL Meetup', count: 6, color: 'bg-purple-100 text-purple-800' },
    { name: 'Gaming Night', count: 4, color: 'bg-red-100 text-red-800' },
    { name: 'Workshop', count: 3, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Conference', count: 2, color: 'bg-indigo-100 text-indigo-800' }
  ];

  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [imageIndices, setImageIndices] = useState<ImageIndices>({});
  const eventsPerLoad = 4;
  const pastEventsRef = useRef<HTMLElement>(null);
  
  const handleShowMore = () => {
    if (visibleCount >= pastEvents.length) {
      // Show less - collapse back to first 4 and scroll to past events heading
      setVisibleCount(4);
      // Smooth scroll to past events section
      pastEventsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Show more - add 4 more events
      setVisibleCount(prev => Math.min(prev + eventsPerLoad, pastEvents.length));
    }
  };

  const handleImageNavigation = (eventIndex: number, direction: 'next' | 'prev'): void => {
    setImageIndices(prev => {
      const currentIndex = prev[eventIndex] || 0;
      const event = visibleEvents[eventIndex];
      const maxIndex = event.images.length - 1;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }
      
      return {
        ...prev,
        [eventIndex]: newIndex
      };
    });
  };
  
  const visibleEvents = pastEvents.slice(0, visibleCount);
  const isShowingAll = visibleCount >= pastEvents.length;
  const hasMoreToShow = pastEvents.length > 4;

  // Animation variants for the photo gallery
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // const [showAll, setShowAll] = useState(false)
  // const eventsToShow = showAll ? pastEvents : pastEvents.slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600  to-pink-600 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our workshops, seminars, hackathons, and networking events to learn, build, and connect 
              with the Web3 community in Jharkhand.
            </p>
          </div>

          {/* Event Types Overview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center p-4">
                <Badge className={`${type.color} mb-2`}>{type.name}</Badge>
                <div className="text-2xl font-bold text-gray-900">{type.count}</div>
                <div className="text-sm text-gray-600">Events</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these exciting learning opportunities
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-4 md:p-6">
              <div className="w-full overflow-hidden rounded-2xl mb-4">
                <iframe
                  src="https://lu.ma/embed/calendar/cal-miOEXbAnTmizYMu/events"
                  className="w-full h-72 md:h-[360px]"
                  frameBorder="0"
                  style={{
                    border: 'none',
                    background: '#1a1a1a',
                  }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Lu.ma Events Calendar"
                />
              </div>
              
              <div className="flex justify-center text-center">
                <Link href="https://lu.ma/web3jh">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold border border-white/20 text-lg rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 no-underline text-center">
                    Register for Event {' '}
                    <span role="img" aria-label="check-mark-button" className="text-1xl">✅</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={
                      event.type === 'Workshop' ? 'default' :
                      event.type === 'Seminar' ? 'secondary' :
                      event.type === 'Webinar' ? 'outline' :
                      event.type === 'Hackathon' ? 'destructive' : 'default'
                    }>
                      {event.type}
                    </Badge>
                    <Badge variant="outline">{event.price}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</div>
                    <div className="flex flex-wrap gap-1">
                      {event.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Speaker:</strong> {event.speaker}
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" 
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>


      {/* Past Events */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">
              See what we've accomplished together
            </p>
          </div>
          
          <div className="space-y-6">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">{event.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {hasMoreToShow && (
              <div className="text-center mt-12">
                <button
                  onClick={handleShowMore}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {isShowingAll ? 'Show Less' : 'Show More'}
                  <span className="ml-2 text-sm text-blue-200">
                    {isShowingAll 
                      ? '' 
                      : `(${Math.min(eventsPerLoad, pastEvents.length - visibleCount)} more)`
                    }
                  </span>
                </button>
              </div>
            )}
          </div>
          
        </div>
      </section> */}

      <section ref={pastEventsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">
              See what we've accomplished together
            </p>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {visibleEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
                    {/* Event Image Carousel */}
                    <div className="relative overflow-hidden h-48 group">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${index}-${imageIndices[index] || 0}`}
                          src={event.images[imageIndices[index] || 0]}
                          alt={`${event.title} - Image ${(imageIndices[index] || 0) + 1}`}
                          className="w-full h-full object-cover"
                          variants={imageVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          whileHover="hover"
                        />
                      </AnimatePresence>
                      
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Event type badge */}
                      <motion.div 
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Badge variant="secondary" className="backdrop-blur-sm bg-white/90">
                          {event.type}
                        </Badge>
                      </motion.div>

                      {/* Image counter */}
                      {event.images.length > 1 && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="backdrop-blur-sm bg-black/20 text-white border-white/30">
                            {(imageIndices[index] || 0) + 1}/{event.images.length}
                          </Badge>
                        </div>
                      )}

                      {/* Navigation arrows */}
                      {event.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handleImageNavigation(index, 'prev')}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleImageNavigation(index, 'next')}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Image dots indicator */}
                      {event.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {event.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setImageIndices(prev => ({ ...prev, [index]: imgIndex }))}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                (imageIndices[index] || 0) === imgIndex 
                                  ? 'bg-white scale-125' 
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                              aria-label={`Go to image ${imgIndex + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium">{event.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 flex-shrink-0" />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {hasMoreToShow && (
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={handleShowMore}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isShowingAll ? 'Show Less' : 'Show More'}
                  {/* <span className="ml-2 text-sm text-blue-200">
                    {isShowingAll 
                      ? '' 
                      : `(${Math.min(eventsPerLoad, pastEvents.length - visibleCount)} more)`
                    }
                  </span> */}
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>


      {/* Event Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Miss an Event
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our Event Page and be the first to know about upcoming meetups, workshops, and hackathons.
          </p>
          <div className="flex text-center justify-center max-w-md mx-auto">
            {/* <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            /> */}
            <Link href="https://lu.ma/web3jh">
            <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
              Subscribe {' '}
              <span role="img" aria-label="rocket" className="text-1xl">🚀</span>
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}