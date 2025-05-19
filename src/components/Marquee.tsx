
import React from 'react';
import { cn } from '@/lib/utils';

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

export default Marquee;
