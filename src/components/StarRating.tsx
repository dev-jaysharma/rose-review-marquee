
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
}

const StarRating = ({ rating, className, size = 20 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} fill="#f43f5e" stroke="#f43f5e" size={size} className="text-primary" />;
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} fill="#f43f5e" stroke="#f43f5e" size={size} className="text-primary" />;
        } else {
          return <Star key={i} size={size} className="text-muted-foreground" />;
        }
      })}
    </div>
  );
};

export default StarRating;
