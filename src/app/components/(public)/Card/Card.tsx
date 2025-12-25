import Link from 'next/link';
import React from 'react'
import { Restaurant } from '@/app/types';
interface Props {
    restaurant: Restaurant;
    horizontal?: boolean;
  }
const Card = ({restaurant, horizontal }: Props) => {
    if (!horizontal) return null;
   
      return (
        <Link 
          href={`/restaurant/${restaurant.id}`}
          className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative h-40">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
              ⭐ {restaurant.rating}
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-900 line-clamp-1">{restaurant.name}</h3>
              <span className="text-xs font-semibold text-rose-600">{restaurant.priceLevel}</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">{restaurant.cuisine}</p>
            <p className="text-xs text-gray-400 line-clamp-1 italic">{restaurant.address}</p>
          </div>
        </Link>
      );
    
}

export default Card