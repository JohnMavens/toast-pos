import { MenuItem, Special } from '../types';

export const menuItems: MenuItem[] = [
  // Restaurant Items
  {
    id: 'r1',
    name: 'Classic Club Sandwich',
    description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Sandwiches',
    dietaryInfo: [],
    popular: true,
    menuType: 'restaurant'
  },
  {
    id: 'r2',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon, grilled and served with seasonal vegetables and lemon butter sauce',
    price: 22.99,
    image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Mains',
    dietaryInfo: ['Gluten-Free'],
    menuType: 'restaurant'
  },
  {
    id: 'r3',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Salads',
    dietaryInfo: ['Vegetarian'],
    menuType: 'restaurant'
  },
  {
    id: 'r4',
    name: 'Veggie Wrap',
    description: 'Grilled vegetables, hummus, and mixed greens in a spinach wrap',
    price: 12.99,
    image: 'https://images.pexels.com/photos/8510333/pexels-photo-8510333.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Sandwiches',
    dietaryInfo: ['Vegetarian', 'Vegan'],
    menuType: 'restaurant'
  },
  {
    id: 'r5',
    name: 'Angus Burger',
    description: '8oz Angus beef patty with lettuce, tomato, onion, and special sauce on a brioche bun',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Burgers',
    dietaryInfo: [],
    popular: true,
    menuType: 'restaurant'
  },
  {
    id: 'r6',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with assorted wild mushrooms, finished with parmesan',
    price: 18.99,
    image: 'https://images.pexels.com/photos/5485797/pexels-photo-5485797.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Mains',
    dietaryInfo: ['Vegetarian', 'Gluten-Free'],
    menuType: 'restaurant'
  },
  
  // Bar Items
  {
    id: 'b1',
    name: 'Craft IPA',
    description: 'Local brewery IPA with notes of citrus and pine',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Beer',
    dietaryInfo: [],
    popular: true,
    menuType: 'bar'
  },
  {
    id: 'b2',
    name: 'Classic Martini',
    description: 'Gin or vodka with dry vermouth and olive or lemon twist',
    price: 12.99,
    image: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Cocktails',
    dietaryInfo: [],
    menuType: 'bar'
  },
  {
    id: 'b3',
    name: 'House Red Wine',
    description: 'Medium-bodied Cabernet Sauvignon with notes of black cherry and oak',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1994630/pexels-photo-1994630.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Wine',
    dietaryInfo: [],
    menuType: 'bar'
  },
  {
    id: 'b4',
    name: 'Loaded Nachos',
    description: 'Tortilla chips topped with melted cheese, jalapeños, sour cream, guacamole, and salsa',
    price: 13.99,
    image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Bar Snacks',
    dietaryInfo: ['Vegetarian'],
    popular: true,
    menuType: 'bar'
  },
  {
    id: 'b5',
    name: 'Chicken Wings',
    description: 'Crispy chicken wings tossed in your choice of sauce: BBQ, Buffalo, or Honey Garlic',
    price: 14.99,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Bar Snacks',
    dietaryInfo: [],
    menuType: 'bar'
  },
  {
    id: 'b6',
    name: 'Mojito',
    description: 'Refreshing cocktail with white rum, mint, lime, sugar, and soda water',
    price: 11.99,
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Cocktails',
    dietaryInfo: [],
    menuType: 'bar'
  }
];

export const specials: Special[] = [
  {
    id: 's1',
    name: 'Monday Steak Special',
    description: '10oz Ribeye with mashed potatoes and seasonal vegetables',
    price: 19.99,
    regularPrice: 26.99,
    image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600',
    dayOfWeek: 'Monday',
    menuType: 'restaurant'
  },
  {
    id: 's2',
    name: 'Wine Wednesday',
    description: 'Half-price bottles of selected wines',
    price: 19.99,
    regularPrice: 39.99,
    image: 'https://images.pexels.com/photos/3171153/pexels-photo-3171153.jpeg?auto=compress&cs=tinysrgb&w=600',
    dayOfWeek: 'Wednesday',
    menuType: 'bar'
  },
  {
    id: 's3',
    name: 'Fish Friday',
    description: 'Beer-battered cod with fries, coleslaw, and tartar sauce',
    price: 15.99,
    regularPrice: 19.99,
    image: 'https://images.pexels.com/photos/4194635/pexels-photo-4194635.jpeg?auto=compress&cs=tinysrgb&w=600',
    dayOfWeek: 'Friday',
    menuType: 'restaurant'
  }
];

export const restaurantInfo = {
  name: "Tee Tours Club",
  openingHours: {
    restaurant: {
      weekdays: "11:00 AM - 9:00 PM",
      weekends: "10:00 AM - 10:00 PM"
    },
    bar: {
      weekdays: "11:00 AM - 11:00 PM",
      weekends: "10:00 AM - 12:00 AM"
    }
  },
  currentlyOpen: true, // This would be determined dynamically in a real app
  estimatedPrepTime: {
    'dine-in': '15-20 minutes',
    'takeaway': '20-25 minutes',
    'golf-course': '25-35 minutes'
  }
};

export const getMenuCategories = (menuType: 'restaurant' | 'bar'): string[] => {
  const categories = new Set<string>();
  
  menuItems
    .filter(item => item.menuType === menuType)
    .forEach(item => categories.add(item.category));
  
  return Array.from(categories);
};

export const getDietaryOptions = (): string[] => {
  const options = new Set<string>();
  
  menuItems.forEach(item => {
    item.dietaryInfo.forEach(option => options.add(option));
  });
  
  return Array.from(options);
};