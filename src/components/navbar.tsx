import React from 'react';
import { Flame } from 'lucide-react';
import Link from 'next/link';

export default function Navbar () {
  return (
    <nav className="bg-gray-950 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold">IGNIS HUB</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <a
              href="https://zap.ignishub.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#367f48] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
            >
              ItsZap
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}