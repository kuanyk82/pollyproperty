import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000"
        alt="Luxury Home"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-xl text-center max-w-2xl">
          Discover the perfect property from our extensive collection of premium real estate listings
        </p>
        <div className="mt-8 w-full max-w-2xl px-4">
          <div className="flex bg-white rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Search by location, property type, or price range..."
              className="flex-1 p-4 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 flex items-center">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}