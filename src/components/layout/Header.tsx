import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Mission', path: '/mission' },
  { label: 'Causes', path: '/causes' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-primary rounded-full p-1.5">
              <Heart className="h-5 w-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-slate-900">HopeTrust</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-slate-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/donate">
              <Button variant="primary" size="sm">
                Donate Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white absolute w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary py-2",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-slate-600"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setIsOpen(false)} className="block pt-2">
              <Button className="w-full">Donate Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
