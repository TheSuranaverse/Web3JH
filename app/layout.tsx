import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3JH - Building the Future of Web3 in Jharkhand',
  description: 'Join Jharkhand\'s premier Web3 community. Connecting students, developers, and innovators to build decentralized solutions for tomorrow.',
  keywords: 'Web3, Blockchain, Jharkhand, Community, Education, Developers, DeFi, NFT, Smart Contracts',
  authors: [{ name: 'Web3JH Team' }],
  openGraph: {
    title: 'Web3JH - Building the Future of Web3 in Jharkhand',
    description: 'Join Jharkhand\'s premier Web3 community. Connecting students, developers, and innovators to build decentralized solutions for tomorrow.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3JH - Building the Future of Web3 in Jharkhand',
    description: 'Join Jharkhand\'s premier Web3 community. Connecting students, developers, and innovators to build decentralized solutions for tomorrow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">W3</span>
                  </div> */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="Web3JH_Logo_White-no-bg 2.png" alt="Web3JH Logo" />
                  </div>
                  
                  <span className="text-lg font-bold">Web3JH</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Connecting Jharkhand ₿UIDLers to Web3 Ecosystem 🚀
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                  <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                  <a href="/community" className="block text-gray-400 hover:text-white transition-colors">Community</a>
                  <a href="/events" className="block text-gray-400 hover:text-white transition-colors">Events</a>
                  <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Tutorials</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Newsletter</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Web3JH. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}