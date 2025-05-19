
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import StarRating from './StarRating';

interface FeaturedTestimonialProps {
  name: string;
  role?: string;
  company?: string;
  testimonial: string;
  rating: number;
  className?: string;
  imageUrl?: string;
}

const FeaturedTestimonial = ({
  name,
  role,
  company,
  testimonial,
  rating,
  className,
  imageUrl
}: FeaturedTestimonialProps) => {
  const displayRole = role && company ? `${role}, ${company}` : role || '';
  
  return (
    <Card className={cn(
      "relative overflow-hidden border border-primary/20",
      "bg-gradient-to-br from-background to-secondary/30",
      className
    )}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
      <CardContent className="p-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {imageUrl ? (
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/20">
              <span className="text-primary font-bold text-xl">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1">
            <StarRating rating={rating} size={24} className="mb-4" />
            <p className="text-lg md:text-xl mb-6 italic">
              "{testimonial}"
            </p>
            <div>
              <p className="font-bold text-base">{name}</p>
              {displayRole && <p className="text-sm text-muted-foreground">{displayRole}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedTestimonial;
