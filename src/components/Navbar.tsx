
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  // { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <NavLink 
          to="/" 
          className="font-display text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
        >
          Isham K.M
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                'text-sm font-medium transition-all duration-300 relative',
                'after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0',
                'after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300',
                'hover:after:scale-x-100 hover:after:origin-bottom-left',
                isActive 
                  ? 'text-primary font-semibold after:scale-x-100 after:origin-bottom-left' 
                  : 'text-foreground hover:text-primary'
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-lg p-6 absolute top-full left-0 w-full z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => cn(
                  'text-base font-medium py-2 px-4 rounded-md transition-colors duration-200',
                  isActive 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-foreground hover:bg-secondary hover:text-primary'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
