
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from './StarRating';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  className?: string;
  imageUrl?: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  className,
  imageUrl
}: TestimonialCardProps) => {
  return (
    <Card className={cn(
      "flex flex-col w-[300px] min-w-[300px] h-[250px] mx-4 border-border",
      className
    )}>
      <CardContent className="p-6 flex flex-col flex-grow">
        <StarRating rating={rating} className="mb-3" />
        <p className="text-sm mb-6 line-clamp-3 flex-grow text-muted-foreground">
          "{testimonial}"
        </p>
        <div className="flex items-center mt-auto">
          {imageUrl ? (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-border">
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3 border border-border">
              <span className="text-foreground font-medium text-sm">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
