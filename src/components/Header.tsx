import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantInfo } from '../data/menuData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getItemCount } = useCart();
  const location = useLocation();
  
  // Check if the header should be transparent (only on homepage)
  const isHomePage = location.pathname === '/';
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Determine header style based on scroll and current page
  const headerClasses = `
    fixed w-full z-50 transition-all duration-300 
    ${isScrolled || !isHomePage 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'}
  `;
  
  const linkClasses = `
    font-medium transition-colors
    ${isScrolled || !isHomePage 
      ? 'text-gray-800 hover:text-green-600' 
      : 'text-white hover:text-green-200'}
  `;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">FC</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}>
              Fairway Club
            </span>
          </Link>
          
          {/* Status Indicator */}
          <div className={`hidden md:flex items-center space-x-2 ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white'}`}>
            <Clock size={18} />
            <span className="text-sm">
              {restaurantInfo.currentlyOpen ? 'Open Now' : 'Currently Closed'}
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/menu/restaurant" className={linkClasses}>Restaurant</Link>
            <Link to="/menu/bar" className={linkClasses}>Bar</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className={linkClasses} />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/menu/restaurant" 
              className="text-gray-800 font-medium hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Restaurant
            </Link>
            <Link 
              to="/menu/bar" 
              className="text-gray-800 font-medium hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bar
            </Link>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock size={18} />
              <span className="text-sm">
                {restaurantInfo.currentlyOpen ? 'Open Now' : 'Currently Closed'}
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};