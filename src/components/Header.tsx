import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Twilight Park
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Услуги
            </Link>
            <Link to="/prices" className="text-foreground hover:text-primary transition-colors font-medium">
              Цены
            </Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+79216453821" className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
              <Icon name="Phone" size={18} />
              <span>8-921-645-38-21</span>
            </a>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Забронировать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
