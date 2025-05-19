
import React from 'react';
import Marquee from '@/components/Marquee';
import TestimonialCard from '@/components/TestimonialCard';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Marketing Director",
    company: "Innovate Inc.",
    testimonial: "This product completely transformed our workflow. The team's efficiency increased by 40% and we've seen remarkable growth in just three months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "TechFlow",
    testimonial: "I was skeptical at first, but after implementing this solution, our development cycles are shorter and our team is happier. Couldn't ask for more.",
    rating: 4.5,
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "DesignHub",
    testimonial: "The customer support is exceptional. Any time we had questions, the team was quick to respond and provide helpful solutions.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "CEO",
    company: "StartupVision",
    testimonial: "We've tried many similar products, but this one stands out for its intuitive interface and powerful features. It's been a game-changer for our startup.",
    rating: 4.5,
  },
  {
    name: "Aisha Patel",
    role: "Operations Lead",
    company: "GlobalTech",
    testimonial: "The scalability of this solution has allowed us to grow without worrying about our infrastructure. Remarkable product and team!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Finance Director",
    company: "Capital Insights",
    testimonial: "The ROI we've seen from implementing this solution has exceeded our expectations. Our board is thrilled with the results.",
    rating: 4,
  },
  {
    name: "Lisa Wang",
    role: "UX Designer",
    company: "CreativeMinds",
    testimonial: "As a designer, I appreciate the attention to detail and user experience. It's rare to find a product that balances functionality and design so well.",
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "Sales Director",
    company: "GrowthMakers",
    testimonial: "Our sales team has been able to close deals faster thanks to the streamlined processes. The analytics are invaluable for our strategy.",
    rating: 4.5,
  }
];

const featuredTestimonial = {
  name: "Alexandra Rivera",
  role: "Chief Innovation Officer",
  company: "Future Forward",
  testimonial: "I can't emphasize enough how transformative this product has been for our organization. We've seen a dramatic increase in productivity, collaboration has improved significantly, and our team members regularly express how much they enjoy using it. The intuitive design combined with powerful features makes it accessible to everyone while still satisfying our power users' needs. The investment has paid for itself many times over.",
  rating: 5,
};

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Our Customers Love Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          See why thousands of businesses trust our products to power their critical operations
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
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </Marquee>
      </div>

      {/* Featured Testimonial */}
      <Section className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Testimonial</h2>
        <div className="max-w-4xl mx-auto">
          <FeaturedTestimonial
            name={featuredTestimonial.name}
            role={featuredTestimonial.role}
            company={featuredTestimonial.company}
            testimonial={featuredTestimonial.testimonial}
            rating={featuredTestimonial.rating}
          />
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary/5 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Trusted by Thousands</h2>
          <p className="text-muted-foreground">The numbers speak for themselves</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
            <p className="text-4xl font-bold text-primary mb-2">12,000+</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
            <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to join our satisfied customers?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Get started today and see why thousands of businesses choose our platform
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Start Your Free Trial
        </Button>
      </Section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 px-4 text-center text-muted-foreground text-sm">
        <p>© 2025 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
