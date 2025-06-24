
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-display text-xl font-bold text-primary">
              Isham K.M
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Software Engineer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/ishammansoor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/isham-mansoor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ishamkmansoor@gmail.com" 
              className="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Isham Kalappurackal Mansoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
