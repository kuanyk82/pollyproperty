import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyList } from './components/PropertyList';
import { PropertySearch } from './components/PropertySearch';
import { ContactForm } from './components/ContactForm';
import { properties } from './data/properties';
import { filterProperties } from './utils/filters';
import { PropertyFilter } from './types';

function App() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = (filters: PropertyFilter) => {
    const filtered = filterProperties(properties, filters);
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero>
        <PropertySearch onSearch={handleSearch} />
      </Hero>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PropertyList
          title="Featured Properties"
          properties={filteredProperties}
        />

        <PropertyList
          title="New Launches"
          properties={properties.filter((p) => p.type === 'New Launch')}
        />

        <section id="contact" className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Our real estate experts are ready to help you find your perfect property.
              Contact us today to schedule a viewing or discuss your requirements.
            </p>
            <ContactForm />
          </div>
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose MetProperty?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">✓</span>
                Expert local knowledge and market insights
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">✓</span>
                Extensive portfolio of premium properties
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">✓</span>
                Personalized service tailored to your needs
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">✓</span>
                Transparent and professional approach
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Property</h4>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#properties" className="hover:text-white">Properties</a></li>
                <li><a href="#new-launches" className="hover:text-white">New Launches</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <address className="text-gray-400 not-italic">
                123 Real Estate Street<br />
                Business District<br />
               <br />
                
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;