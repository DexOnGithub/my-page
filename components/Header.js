"use client"

import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-gray-500 px-2 py-3 rounded">DXB</div>
        
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="space-y-2">
            <li><Link href="/" className="block text-white hover:text-gray-500">Home</Link></li>
            <li><Link href="/about" className="block text-white hover:text-gray-500">About</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header
