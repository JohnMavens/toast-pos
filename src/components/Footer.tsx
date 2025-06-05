import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tee Tours Club</h3>
            <div className="flex items-start space-x-2 mb-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p>123 Fairway Drive, Golfville, GF 12345</p>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Phone size={18} className="flex-shrink-0" />
              <p>(555) 123-4567</p>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Restaurant</p>
                  <p>Weekdays: {restaurantInfo.openingHours.restaurant.weekdays}</p>
                  <p>Weekends: {restaurantInfo.openingHours.restaurant.weekends}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-3">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bar</p>
                  <p>Weekdays: {restaurantInfo.openingHours.bar.weekdays}</p>
                  <p>Weekends: {restaurantInfo.openingHours.bar.weekends}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* QR Code Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Order</h3>
            <p className="mb-3">Scan the QR code at your table or around the course to place your order directly from your phone.</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Tee Tours Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};