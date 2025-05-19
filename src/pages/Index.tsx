
import React from 'react';
import Marquee from '@/components/Marquee';
import TestimonialCard from '@/components/TestimonialCard';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ReviewData {
  name: string;
  service: string;
  rating: number;
  review: string;
}

const reviewsData: ReviewData[] = [
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
const getAvatarUrl = (name: string): string => {
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

// Use the first review with 5-star rating as the featured testimonial
const featuredReview = reviewsData.find(review => review.rating === 5) || reviewsData[0];

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("py-16 px-4 md:px-6 container", className)}>
    {children}
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Our Customers Love Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          See why our clients trust us with their digital presence
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View Pricing
          </Button>
        </div>
      </Section>

      {/* Testimonial Marquee */}
      <div className="py-8 bg-gradient-to-r from-secondary/50 via-background to-secondary/50">
        <Marquee speed="slow">
          {reviewsData.map((review, index) => (
            <TestimonialCard
              key={index}
              name={review.name}
              service={review.service}
              testimonial={review.review}
              rating={review.rating}
              imageUrl={getAvatarUrl(review.name)}
            />
          ))}
        </Marquee>
      </div>

      {/* Featured Testimonial */}
      <Section className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Review</h2>
        <div className="max-w-4xl mx-auto">
          <FeaturedTestimonial
            name={featuredReview.name}
            role={featuredReview.service}
            testimonial={featuredReview.review}
            rating={featuredReview.rating}
            imageUrl={getAvatarUrl(featuredReview.name)}
          />
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary/5 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Trusted by Many</h2>
          <p className="text-muted-foreground">The results speak for themselves</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
            <p className="text-4xl font-bold text-primary mb-2">150+</p>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
            <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to join our satisfied clients?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today to discuss how we can help with your web development needs
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Start Your Project
        </Button>
      </Section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 px-4 text-center text-muted-foreground text-sm">
        <p>© 2025 Web Development Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
