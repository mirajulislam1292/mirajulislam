
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github, Mail, Linkedin, Send } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-sage to-sage/80 py-12 text-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/ecc7da5d-32e0-49b0-a0c5-be10123eae8b.png" 
                alt="Signature" 
                className="h-12 mb-4 filter brightness-0 invert opacity-80"
              />
            </Link>
            <p className="mt-4 text-cream/80 max-w-md">
              A personal blog sharing insights and experiences in design, 
              technology, and innovation. Join me on this journey of exploration and discovery.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://www.facebook.com/mahimmiraj.1292/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/m.mahimmiraj/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mahimmiraj1292/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/mirajulislam1292/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream transition-colors">
                <Github size={20} />
              </a>
              <a href="https://t.me/kevinfromirrinti" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-cream/70 hover:text-cream transition-colors">Home</Link>
              <Link to="/about" className="text-cream/70 hover:text-cream transition-colors">About</Link>
              <Link to="/blog" className="text-cream/70 hover:text-cream transition-colors">Blog</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:mahimmiraj@outlook.com" className="flex items-center text-cream/70 hover:text-cream transition-colors">
                <Mail size={16} className="mr-2" />
                mahimmiraj@outlook.com
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-cream/20" />
        
        <div className="text-center text-sm text-cream/70">
          <p>&copy; {new Date().getFullYear()} Mirajul Islam Mahim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
