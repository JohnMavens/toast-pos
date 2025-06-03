import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Special } from '../types';
import { useCart } from '../context/CartContext';

interface SpecialsCarouselProps {
  specials: Special[];
}

export const SpecialsCarousel: React.FC<SpecialsCarouselProps> = ({ specials }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const handleAddSpecialToCart = (special: Special) => {
    addToCart({
      menuItemId: special.id,
      name: special.name,
      price: special.price,
      quantity: 1,
      menuType: special.menuType
    });
  };

  if (specials.length === 0) {
    return null;
  }

  return (
    <div className="relative py-6">
      <h2 className="text-2xl font-bold mb-4">Today's Specials</h2>
      
      {/* Navigation buttons */}
      <div className="absolute right-0 top-6 space-x-2">
        <button 
          onClick={scrollLeft}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={scrollRight}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Carousel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-4 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {specials.map(special => (
          <div 
            key={special.id}
            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-40">
              <img 
                src={special.image} 
                alt={special.name} 
                className="w-full h-full object-cover"
              />
              {special.dayOfWeek && (
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {special.dayOfWeek}
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold">{special.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{special.description}</p>
              
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-green-700 text-lg">${special.price.toFixed(2)}</span>
                  <span className="text-gray-400 text-sm line-through ml-2">${special.regularPrice.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={() => handleAddSpecialToCart(special)}
                  className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors duration-300 text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};