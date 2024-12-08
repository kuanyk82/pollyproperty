import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { PropertyFilter } from '../types';

interface PropertySearchProps {
  onSearch: (filters: PropertyFilter) => void;
}

export function PropertySearch({ onSearch }: PropertySearchProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<PropertyFilter>({});

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex bg-white rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Search by location..."
            className="flex-1 p-4 rounded-l-lg text-gray-900 focus:outline-none"
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 text-gray-600 hover:text-gray-900"
          >
            <Filter className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 flex items-center"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {showFilters && (
          <div className="bg-white rounded-lg shadow-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
              >
                <option value="">Any</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="New Launch">New Launch</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                onChange={(e) => setFilters({ ...filters, category: e.target.value as any })}
              >
                <option value="">Any</option>
                <option value="Sale">For Sale</option>
                <option value="Rent">For Rent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Min Bedrooms</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                onChange={(e) => setFilters({ ...filters, minBedrooms: Number(e.target.value) })}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}+
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}