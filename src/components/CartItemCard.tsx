import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemCardProps {
  item: CartItem;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart, updateSpecialInstructions } = useCart();
  const [instructions, setInstructions] = useState(item.specialInstructions || '');
  
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };
  
  const handleInstructionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(e.target.value);
  };
  
  const handleInstructionsBlur = () => {
    updateSpecialInstructions(item.id, instructions);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium">{item.name}</h3>
            <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
          
          <div className="text-sm text-gray-500 mt-1">
            ${item.price.toFixed(2)} each
          </div>
          
          <div className="mt-3 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleQuantityChange(item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
              >
                <Minus size={16} />
              </button>
              <span className="text-gray-800 font-medium">{item.quantity}</span>
              <button 
                onClick={() => handleQuantityChange(item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <button 
              onClick={handleRemove}
              className="text-red-500 hover:text-red-700 flex items-center space-x-1"
            >
              <Trash2 size={16} />
              <span className="text-sm">Remove</span>
            </button>
          </div>
          
          <div className="mt-3">
            <textarea
              placeholder="Special instructions..."
              value={instructions}
              onChange={handleInstructionsChange}
              onBlur={handleInstructionsBlur}
              className="w-full text-sm p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              rows={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};