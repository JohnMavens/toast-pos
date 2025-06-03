import React, { useState } from 'react';
import { Plus, Minus, Info } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      quantity,
      menuType: item.menuType
    });
    
    // Reset quantity after adding
    setQuantity(1);
    
    // Show a brief success animation or feedback
    const el = document.getElementById(`menu-item-${item.id}`);
    if (el) {
      el.classList.add('bg-green-50');
      setTimeout(() => {
        el.classList.remove('bg-green-50');
      }, 300);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div 
      id={`menu-item-${item.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {item.popular && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="font-bold text-green-700">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mt-1 h-10 overflow-hidden">
          {item.description.length > 70 
            ? `${item.description.substring(0, 70)}...` 
            : item.description}
        </p>
        
        {item.dietaryInfo.length > 0 && (
          <div className="mt-2 space-x-1">
            {item.dietaryInfo.map(info => (
              <span 
                key={info} 
                className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {info}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <button 
            className="text-blue-600 text-sm flex items-center space-x-1"
            onClick={() => setShowDetails(!showDetails)}
          >
            <Info size={16} />
            <span>{showDetails ? 'Hide details' : 'View details'}</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={decreaseQuantity}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <Minus size={16} />
            </button>
            <span className="text-gray-800 font-medium">{quantity}</span>
            <button 
              onClick={increaseQuantity}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        {showDetails && (
          <div className="mt-3 border-t pt-3">
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        )}
        
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};