
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

// Star Rating Component
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

// Testimonial Card Component
interface TestimonialCardProps {
  name: string;
  service?: string;
  role?: string;
  company?: string;
  testimonial: string;
  review?: string;
  rating: number;
  className?: string;
  imageUrl?: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  service,
  testimonial,
  review,
  rating,
  className,
  imageUrl
}: TestimonialCardProps) => {
  // Use review text if provided, otherwise use testimonial
  const displayText = review || testimonial;
  // Use service if provided, otherwise use role + company
  const displayRole = service || (role && company ? `${role}, ${company}` : role || '');

  return (
    <Card className={cn(
      "flex flex-col w-[300px] min-w-[300px] h-[250px] mx-4 border-border",
      className
    )}>
      <CardContent className="p-6 flex flex-col flex-grow">
        <StarRating rating={rating} className="mb-3" />
        <p className="text-sm mb-6 line-clamp-3 flex-grow text-muted-foreground">
          "{displayText}"
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
            {displayRole && (
              <p className="text-xs text-muted-foreground">{displayRole}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Featured Testimonial Component
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

// Marquee Component
interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
}

const Marquee = ({
  children,
  className,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
}: MarqueeProps) => {
  const getSpeedClass = () => {
    switch (speed) {
      case 'slow':
        return 'animate-[marquee_40s_linear_infinite]';
      case 'fast':
        return 'animate-[marquee_15s_linear_infinite]';
      default:
        return 'animate-marquee';
    }
  };

  const content = React.Children.toArray(children);

  return (
    <div className={cn("marquee-container relative overflow-hidden", className)}>
      <div 
        className={cn(
          "flex flex-nowrap gap-4", 
          getSpeedClass(),
          direction === 'right' && 'flex-row-reverse',
          pauseOnHover && 'hover:animate-pause'
        )}
      >
        {content}
        {content}
      </div>
    </div>
  );
};

// Data Types and Utilities
export interface ReviewData {
  name: string;
  service: string;
  rating: number;
  review: string;
}

export const reviewsData: ReviewData[] = [
  {
    name: "Nina Sharma",
    service: "Business Website",
    rating: 5,
    review:
      "Flawless execution and on-time delivery. Highly recommend for any startup looking to go digital!",
  },
  {
    name: "Robert Ng",
    service: "SEO Optimization",
    rating: 5,
    review:
      "They really helped my site show up on Google. Traffic's steadily growing since we launched!",
  },
  {
    name: "Emily Hargrove",
    service: "Website Maintenance",
    rating: 4,
    review:
      "There were a few hiccups in the beginning but they responded fast and fixed everything right away.",
  },
  {
    name: "Dev Patel",
    service: "Custom Web App",
    rating: 5,
    review:
      "Built a custom solution for my event business and it's saving me tons of time.",
  },
  {
    name: "Sophie Turner",
    service: "E-commerce Development",
    rating: 5,
    review:
      "Absolutely thrilled with my new online store! Everything functions perfectly, and the design is just stunning. My customers have already complimented it.",
  },
  {
    name: "Jason Roy",
    service: "Website Redesign",
    rating: 4,
    review:
      "The redesign made a big difference. There was a delay in delivery but it was communicated properly and handled professionally.",
  },
  {
    name: "Chloe White",
    service: "E-commerce Development",
    rating: 5,
    review: "Managing products and orders is so easy now. Thanks!",
  },
];

// Generate a consistent avatar URL using DiceBear
export const getAvatarUrl = (name: string): string => {
  // DiceBear styles to use for avatar generation
  const styles = ["initials"];

  // Create a simple hash of the name to pick a consistent style
  const nameHash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const styleIndex = nameHash % styles.length;

  // Use the name as seed for consistent avatar generation
  const style = styles[styleIndex];
  const seed = encodeURIComponent(name);

  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
};

export { StarRating, TestimonialCard, FeaturedTestimonial, Marquee };
