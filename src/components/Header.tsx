import React from 'react';
import { Home } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Property</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-700 hover:text-blue-600">Properties</a>
            <a href="#new-launches" className="text-gray-700 hover:text-blue-600">New Launches</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Viewing
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}