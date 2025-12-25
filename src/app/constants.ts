import { Restaurant } from './types';

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'The Golden Truffle',
    cuisine: 'Modern French',
    rating: 4.9,
    priceLevel: '$$$$',
    address: '123 Gourmet Ave, Fine Dining District',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    description: 'Experience an avant-garde approach to traditional French cuisine with seasonal ingredients.',
    reviews: []
  },
  {
    id: '2',
    name: 'Sushi Zen-Tei',
    cuisine: 'Japanese Omakase',
    rating: 4.8,
    priceLevel: '$$$',
    address: '45 Sakura Lane, Little Tokyo',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    description: 'A minimalist sanctuary where every piece of sushi is a crafted masterpiece of flavor.',
    reviews: []
  },
  {
    id: '3',
    name: 'La Rustica',
    cuisine: 'Authentic Italian',
    rating: 4.7,
    priceLevel: '$$',
    address: '78 Tuscan Way, Old Town',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    description: 'Family recipes passed down through generations. The best wood-fired pizza in the city.',
    reviews: []
  },
  {
    id: '4',
    name: 'Spice Garden',
    cuisine: 'Northern Indian',
    rating: 4.6,
    priceLevel: '$$',
    address: '22 Masala Road, Downtown',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant spices and tandoori delights that will transport your senses to the heart of Delhi.',
    reviews: []
  },
  {
    id: '5',
    name: 'The Green Fork',
    cuisine: 'Vegan / Plant-Based',
    rating: 4.5,
    priceLevel: '$$',
    address: '10 Organic Blvd, Eco-Village',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    description: 'Innovative plant-based dishes that prove healthy eating can be incredibly indulgent.',
    reviews: []
  },
  {
    id: '6',
    name: 'Fire & Grill',
    cuisine: 'American Steakhouse',
    rating: 4.8,
    priceLevel: '$$$',
    address: '55 Prime Cut Ave, Westside',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80',
    description: 'Dry-aged steaks and artisanal cocktails in a sophisticated, rustic atmosphere.',
    reviews: []
  }
];

export const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "Discover Exquisite Flavors",
    subtitle: "Hand-picked recommendations based on your unique palate.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 2,
    title: "Hidden Gems Near You",
    subtitle: "Find the best local eateries just around the corner.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    title: "Fine Dining Redefined",
    subtitle: "Experience luxury gastronomy like never before.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
  }
];