import React from 'react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={property.imageUrl} 
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className={`inline-block px-2 py-1 text-sm rounded-full ${
          property.type === 'New Launch' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {property.type}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">{property.title}</h3>
        <div className="mt-2 flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-4 text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.size} sqft</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}