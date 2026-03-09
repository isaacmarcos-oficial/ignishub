import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/ignishub1.png"
              alt="IGNIS HUB"
              width={150}
              height={150}
            />
          </Link>

          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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