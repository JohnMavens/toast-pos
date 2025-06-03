export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietaryInfo: string[];
  popular?: boolean;
  menuType: 'restaurant' | 'bar';
}

export interface Special {
  id: string;
  name: string;
  description: string;
  price: number;
  regularPrice: number;
  image: string;
  dayOfWeek?: string;
  menuType: 'restaurant' | 'bar';
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions?: string;
  menuType: 'restaurant' | 'bar';
}

export type OrderType = 'dine-in' | 'takeaway' | 'golf-course';