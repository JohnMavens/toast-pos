import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderTypePicker } from '../components/OrderTypePicker';

export const CheckoutPage: React.FC = () => {
  const { cartItems, orderType, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tableNumber: '',
    holeNumber: '',
    additionalNotes: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (orderType === 'dine-in' && !formData.tableNumber.trim()) {
      newErrors.tableNumber = 'Table number is required';
    }
    
    if (orderType === 'golf-course' && !formData.holeNumber.trim()) {
      newErrors.holeNumber = 'Hole number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // In a real app, you would send the order to a backend
    console.log('Order submitted:', { 
      items: cartItems,
      orderType, 
      customer: formData,
      total: getCartTotal() * 1.08
    });
    
    // Clear the cart and navigate to confirmation page
    clearCart();
    navigate('/confirmation');
  };
  
  // Guard against empty cart
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center mb-6">
          <Link to="/cart" className="text-gray-600 hover:text-gray-800">
            <ChevronLeft size={20} className="inline" />
            <span>Back to Cart</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          
          {/* Order Type Selection */}
          <OrderTypePicker />
          
          {/* Checkout Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              
              {orderType === 'dine-in' && (
                <div>
                  <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Table Number*
                  </label>
                  <input
                    type="text"
                    id="tableNumber"
                    name="tableNumber"
                    value={formData.tableNumber}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                      errors.tableNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.tableNumber && <p className="text-red-500 text-sm mt-1">{errors.tableNumber}</p>}
                </div>
              )}
              
              {orderType === 'golf-course' && (
                <div>
                  <label htmlFor="holeNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Hole Number*
                  </label>
                  <input
                    type="text"
                    id="holeNumber"
                    name="holeNumber"
                    value={formData.holeNumber}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
                      errors.holeNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.holeNumber && <p className="text-red-500 text-sm mt-1">{errors.holeNumber}</p>}
                </div>
              )}
              
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="border-t pt-6 mb-6">
              <h2 className="text-lg font-bold mb-3">Order Summary</h2>
              <div className="space-y-2 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.quantity} x {item.name}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t pt-3 mb-6">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};