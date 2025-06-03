import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { MenuItem } from '../types';
import { menuItems, specials, getMenuCategories, getDietaryOptions } from '../data/menuData';
import { MenuItemCard } from '../components/MenuItemCard';
import { SpecialsCarousel } from '../components/SpecialsCarousel';
import { MenuFilters } from '../components/MenuFilters';
import { useCart } from '../context/CartContext';

export const MenuPage: React.FC = () => {
  const { type = 'restaurant' } = useParams<{ type: 'restaurant' | 'bar' }>();
  const { getItemCount } = useCart();
  
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  
  const menuType = type === 'bar' ? 'bar' : 'restaurant';
  const categories = getMenuCategories(menuType);
  const dietaryOptions = getDietaryOptions();
  
  const relevantSpecials = specials.filter(special => special.menuType === menuType);
  
  // Filter items based on selections
  useEffect(() => {
    let filtered = menuItems.filter(item => item.menuType === menuType);
    
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (selectedDietary.length > 0) {
      filtered = filtered.filter(item => 
        selectedDietary.every(diet => item.dietaryInfo.includes(diet))
      );
    }
    
    setFilteredItems(filtered);
  }, [menuType, selectedCategory, selectedDietary]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleDietaryChange = (diet: string) => {
    setSelectedDietary(prev => {
      if (prev.includes(diet)) {
        return prev.filter(d => d !== diet);
      } else {
        return [...prev, diet];
      }
    });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Menu Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white shadow-sm rounded-lg inline-flex p-1">
            <Link 
              to="/menu/restaurant"
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                menuType === 'restaurant' 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Restaurant
            </Link>
            <Link 
              to="/menu/bar"
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                menuType === 'bar' 
                  ? 'bg-amber-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Bar
            </Link>
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            {menuType === 'restaurant' ? 'Restaurant Menu' : 'Bar Menu'}
          </h1>
          <p className="text-gray-600">
            {menuType === 'restaurant' 
              ? 'Enjoy our delicious selection of meals prepared by our chefs' 
              : 'Choose from our selection of drinks and bar snacks'}
          </p>
        </div>
        
        {/* Specials */}
        {relevantSpecials.length > 0 && (
          <div className="mb-10">
            <SpecialsCarousel specials={relevantSpecials} />
          </div>
        )}
        
        {/* Filters and Menu */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
              {/* Filters */}
              <MenuFilters 
                categories={categories}
                dietaryOptions={dietaryOptions}
                selectedCategory={selectedCategory}
                selectedDietary={selectedDietary}
                onCategoryChange={handleCategoryChange}
                onDietaryChange={handleDietaryChange}
              />
              
              {/* Cart Link */}
              <div className="mt-6 border-t pt-6">
                <Link
                  to="/cart"
                  className="flex items-center justify-between bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  <span className="font-medium">View Cart</span>
                  <div className="flex items-center">
                    <ShoppingCart size={18} />
                    {getItemCount() > 0 && (
                      <span className="ml-2 bg-white text-green-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getItemCount()}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="flex-1">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600">No items match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedDietary([]);
                  }}
                  className="mt-3 text-green-600 hover:text-green-700"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};