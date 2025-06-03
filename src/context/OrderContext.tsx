import React, { createContext, useContext, useState } from 'react';

interface Order {
  id: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  orderType: 'dine-in' | 'takeaway' | 'golf-course';
  createdAt: Date;
}

interface OrderContextType {
  currentOrder: Order | null;
  createOrder: (items: Order['items'], orderType: Order['orderType'], total: number) => string;
  getOrder: (id: string) => Order | null;
  updateOrderStatus: (id: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Record<string, Order>>({});

  const generateOrderId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 7);
    return `FC-${timestamp}${random}`.toUpperCase();
  };

  const createOrder = (items: Order['items'], orderType: Order['orderType'], total: number): string => {
    const orderId = generateOrderId();
    const newOrder: Order = {
      id: orderId,
      items,
      total,
      status: 'pending',
      orderType,
      createdAt: new Date(),
    };

    setOrders(prev => ({
      ...prev,
      [orderId]: newOrder
    }));

    return orderId;
  };

  const getOrder = (id: string): Order | null => {
    return orders[id] || null;
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        status
      }
    }));
  };

  return (
    <OrderContext.Provider value={{
      currentOrder: null,
      createOrder,
      getOrder,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};