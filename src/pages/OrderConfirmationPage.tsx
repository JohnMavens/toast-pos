import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const OrderConfirmationPage: React.FC = () => {
  const { orderType } = useCart();
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = `FC-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Estimated time based on order type
  const estimatedTime = restaurantInfo.estimatedPrepTime[orderType];
  
  // Navigate away if user refreshes (in a real app, this would be handled differently)
  useEffect(() => {
    const handleBeforeUnload = () => {
      navigate('/');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We're preparing it now.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-left mb-4">
              <div className="text-sm text-gray-500">Order Number</div>
              <div className="text-xl font-bold">{orderNumber}</div>
            </div>
            
            <div className="flex items-start space-x-3 text-left">
              <Clock size={24} className="text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium">Estimated Time</div>
                <div className="text-gray-600">{estimatedTime}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {orderType === 'dine-in' && "We'll bring your order to your table."}
                  {orderType === 'takeaway' && 'Your order will be ready for pickup at the restaurant.'}
                  {orderType === 'golf-course' && "We'll deliver your order to you on the course."}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Back to Home
            </Link>
            
            <Link
              to="/menu/restaurant"
              className="block w-full text-green-600 py-3 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              <span>Browse More Items</span>
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};