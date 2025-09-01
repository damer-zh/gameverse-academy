import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Курсы', path: '/courses' },
    { name: 'Уроки', path: '/lessons' },
    { name: 'Задания', path: '/assignments' },
    { name: 'Сообщество', path: '/community' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-sm bg-gradient-accent flex items-center justify-center">
            <span className="text-background font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-semibold text-foreground tracking-wide">Shu School</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(item.path) ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center space-x-2 animate-slide-in-right">
                <Input
                  type="text"
                  placeholder="Поиск курсов..."
                  className="w-64 bg-muted/50 border-muted-foreground/20"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="hover:bg-muted/50"
              >
                <Search className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="hover:bg-muted/50">
            <Bell className="w-4 h-4" />
          </Button>

          {/* Profile */}
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="hover:bg-muted/50">
              <User className="w-4 h-4" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-muted/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border/20 glass-card animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? 'text-accent' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Search */}
            <div className="pt-3 border-t border-border/20">
              <Input
                type="text"
                placeholder="Поиск курсов..."
                className="w-full bg-muted/50 border-muted-foreground/20"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;