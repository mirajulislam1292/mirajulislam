
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-sage pt-16" id="hero">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-cream">
              I'm Mirajul Islam
            </h1>
            <p className="text-lg text-cream/80 mb-8">
              A young innovator and knowledge-seeker from Bangladesh, passionate about technology, robotics, 
              and creating positive change through sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="border-cream/20 text-cream bg-cream/5 hover:bg-cream/10"
                asChild
              >
                <a href="mailto:mahimmiraj@outlook.com" className="flex items-center gap-2">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-cream/20">
              <img 
                src="/lovable-uploads/4d6ba27b-7cc7-450e-b89d-93fe55304b88.png" 
                alt="Mirajul Islam" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
