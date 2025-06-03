import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Beer, ShoppingCart } from 'lucide-react';
import { specials } from '../data/menuData';
import { SpecialsCarousel } from '../components/SpecialsCarousel';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2283402/pexels-photo-2283402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Fairway Club
            </h1>
            <p className="text-xl text-white mb-8">
              Exceptional dining experience with stunning views of the golf course
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/menu/restaurant"
                className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <UtensilsCrossed size={20} />
                <span>Restaurant Menu</span>
              </Link>
              <Link
                to="/menu/bar"
                className="bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Beer size={20} />
                <span>Bar Menu</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>
      
      {/* Specials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SpecialsCarousel specials={specials} />
        </div>
      </section>
      
      {/* Features/Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dining at Fairway Club</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy our delicious food and drinks at the clubhouse or have them delivered to you on the golf course.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
              <p className="text-gray-600">
                Enjoy our chef's special dishes with spectacular views of the golf course.
              </p>
              <Link
                to="/menu/restaurant"
                className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                View Menu
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beer className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bar</h3>
              <p className="text-gray-600">
                Relax with our selection of craft beers, cocktails, and premium spirits.
              </p>
              <Link
                to="/menu/bar"
                className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                View Menu
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Anywhere</h3>
              <p className="text-gray-600">
                Place your order from anywhere on the course and have it delivered to you.
              </p>
              <Link
                to="/cart"
                className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Start Order
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Scan the QR code at your table or anywhere on the course to place your order directly from your phone.
          </p>
          <Link
            to="/menu/restaurant"
            className="inline-block bg-white text-green-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    </div>
  );
};