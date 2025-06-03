import React from 'react';
import { Filter } from 'lucide-react';

interface MenuFiltersProps {
  categories: string[];
  dietaryOptions: string[];
  selectedCategory: string;
  selectedDietary: string[];
  onCategoryChange: (category: string) => void;
  onDietaryChange: (dietary: string) => void;
}

export const MenuFilters: React.FC<MenuFiltersProps> = ({
  categories,
  dietaryOptions,
  selectedCategory,
  selectedDietary,
  onCategoryChange,
  onDietaryChange
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Filter size={20} className="text-gray-700" />
        <h3 className="font-medium">Filters</h3>
      </div>
      
      {/* Categories */}
      <div className="mb-4">
        <h4 className="text-sm text-gray-500 mb-2">Categories</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === '' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Dietary Options */}
      {dietaryOptions.length > 0 && (
        <div>
          <h4 className="text-sm text-gray-500 mb-2">Dietary Preferences</h4>
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map(option => (
              <button
                key={option}
                onClick={() => onDietaryChange(option)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedDietary.includes(option) 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};