export interface Property {
  id: string;
  title: string;
  type: 'New Launch' | 'Sub Sale' | 'Commercial' | 'Residential';
  category: 'Sale' | 'Rent';
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  imageUrl: string;
  description: string;
  amenities: string[];
  nearbyPlaces?: {
    schools?: string[];
    shopping?: string[];
    transport?: string[];
  };
  floorPlan?: string;
  virtualTour?: string;
}

export interface Agent {
  id: string;
  name: string;
  phone: string;
  email: string;
  imageUrl: string;
  specialization: string;
  listings: number;
  experience: number;
}

export interface PropertyFilter {
  type?: Property['type'];
  category?: Property['category'];
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  location?: string;
}

export interface Appointment {
  id: string;
  propertyId: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}