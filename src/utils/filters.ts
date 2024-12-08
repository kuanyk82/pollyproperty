import { Property, PropertyFilter } from '../types';

export const filterProperties = (
  properties: Property[],
  filters: PropertyFilter
): Property[] => {
  return properties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.category && property.category !== filters.category) return false;
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.minBedrooms && property.bedrooms < filters.minBedrooms) return false;
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;
    return true;
  });
};