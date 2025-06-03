import React from 'react';
import { UtensilsCrossed, ShoppingBag, MapPin } from 'lucide-react';
import { OrderType } from '../types';
import { useCart } from '../context/CartContext';
import { restaurantInfo } from '../data/menuData';

interface OrderTypePickerProps {
  onChange?: (type: OrderType) => void;
}

export const OrderTypePicker: React.FC<OrderTypePickerProps> = ({ onChange }) => {
  const { orderType, setOrderType } = useCart();
  
  const handleChange = (type: OrderType) => {
    setOrderType(type);
    if (onChange) {
      onChange(type);
    }
  };
  
  const getEstimatedTime = (type: OrderType) => {
    return restaurantInfo.estimatedPrepTime[type];
  };

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">Select Order Type</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button
          onClick={() => handleChange('dine-in')}
          className={`flex items-center p-4 rounded-lg border transition-colors ${
            orderType === 'dine-in'
              ? 'border-green-600 bg-green-50'
              : 'border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className={`p-2 rounded-full mr-3 ${
            orderType === 'dine-in' ? 'bg-green-100' : 'bg-gray-100'
          }`}>
            <UtensilsCrossed size={20} className={orderType === 'dine-in' ? 'text-green-600' : 'text-gray-600'} />
          </div>
          <div className="text-left">
            <div className="font-medium">Dine-In</div>
            <div className="text-sm text-gray-500">
              Est. time: {getEstimatedTime('dine-in')}
            </div>
          </div>
        </button>
        
        <button
          onClick={() => handleChange('takeaway')}
          className={`flex items-center p-4 rounded-lg border transition-colors ${
            orderType === 'takeaway'
              ? 'border-green-600 bg-green-50'
              : 'border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className={`p-2 rounded-full mr-3 ${
            orderType === 'takeaway' ? 'bg-green-100' : 'bg-gray-100'
          }`}>
            <ShoppingBag size={20} className={orderType === 'takeaway' ? 'text-green-600' : 'text-gray-600'} />
          </div>
          <div className="text-left">
            <div className="font-medium">Takeaway</div>
            <div className="text-sm text-gray-500">
              Est. time: {getEstimatedTime('takeaway')}
            </div>
          </div>
        </button>
        
        <button
          onClick={() => handleChange('golf-course')}
          className={`flex items-center p-4 rounded-lg border transition-colors ${
            orderType === 'golf-course'
              ? 'border-green-600 bg-green-50'
              : 'border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className={`p-2 rounded-full mr-3 ${
            orderType === 'golf-course' ? 'bg-green-100' : 'bg-gray-100'
          }`}>
            <MapPin size={20} className={orderType === 'golf-course' ? 'text-green-600' : 'text-gray-600'} />
          </div>
          <div className="text-left">
            <div className="font-medium">Deliver to Golf Course</div>
            <div className="text-sm text-gray-500">
              Est. time: {getEstimatedTime('golf-course')}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};