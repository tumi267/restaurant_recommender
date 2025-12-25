export interface Restaurant {
    id: string;
    name: string;
    cuisine: string;
    rating: number;
    priceLevel: string;
    address: string;
    image: string;
    description: string;
    featured?: boolean;
    latitude?: number;
    longitude?: number;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    restaurantId: string;
    userName: string;
    userImage: string;
    rating: number;
    comment: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
  }
  
  export interface UserPreferences {
    favorites: string[]; // Restaurant IDs
    visited: {
      restaurantId: string;
      visitDate: string;
      notes: string;
    }[];
    searchHistory: string[];
  }
  
  export enum AppRoute {
    Home = '/',
    Restaurant = '/restaurant/:id',
    Profile = '/profile',
    Admin = '/admin'
  }