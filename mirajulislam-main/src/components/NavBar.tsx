
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-sage shadow-lg' : 'py-6 bg-sage'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        <NavLink to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/ecc7da5d-32e0-49b0-a0c5-be10123eae8b.png" 
            alt="Signature" 
            className="h-10 invert"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover-underline text-base font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-white hover:text-white/80'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover-underline text-base font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-white hover:text-white/80'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover-underline text-base font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-white hover:text-white/80'
              }`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-sage border-t border-white/10 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-white/80 hover:text-white'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-base font-medium py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-white/80 hover:text-white'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-base font-medium py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-white/80 hover:text-white'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
