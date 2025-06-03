import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingBag } from 'lucide-react';
import { CartItemCard } from '../components/CartItemCard';
import { OrderTypePicker } from '../components/OrderTypePicker';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-6">
            <Link to="/menu/restaurant" className="text-gray-600 hover:text-gray-800">
              <ChevronLeft size={20} className="inline" />
              <span>Back to Menu</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious items from our menu to get started.</p>
            <Link
              to="/menu/restaurant"
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors inline-block"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/menu/restaurant" className="text-gray-600 hover:text-gray-800">
            <ChevronLeft size={20} className="inline" />
            <span>Continue Shopping</span>
          </Link>
          
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Clear Cart
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          
          {/* Cart Items */}
          <div className="mb-6">
            {cartItems.map(item => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        {/* Order Type Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <OrderTypePicker />
        </div>
        
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
            </div>
            {/* You could add additional fees here */}
          </div>
          
          <div className="border-t pt-3 mb-6">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
            </div>
          </div>
          
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};