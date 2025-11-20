import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-accent/10 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Twilight Park
            </h3>
            <p className="text-muted-foreground">
              Первый детский развлекательный комплекс в Бежецке
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" size={18} />
                <span>Бежецк, ул. Большая, 60</span>
              </div>
              <a href="tel:+79216453821" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                <span>8-921-645-38-21</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={18} />
                <span>10:00-22:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-white flex items-center justify-center transition-all">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Twilight Park. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
