import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const attractions = [
    {
      title: 'Лабиринт',
      image: 'https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/b9d44cbb-091e-4ccd-8762-065512dad84b.jpg',
      icon: 'Puzzle'
    },
    {
      title: 'Батуты',
      image: 'https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/b829608b-a113-4725-8f01-70f2723b16b1.jpg',
      icon: 'Sparkles'
    },
    {
      title: 'Бассейн с шариками',
      image: 'https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/b9d44cbb-091e-4ccd-8762-065512dad84b.jpg',
      icon: 'CircleDot'
    },
    {
      title: 'Скалодром',
      image: 'https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/b829608b-a113-4725-8f01-70f2723b16b1.jpg',
      icon: 'Mountain'
    },
    {
      title: 'VR зона',
      image: 'https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/b9d44cbb-091e-4ccd-8762-065512dad84b.jpg',
      icon: 'Glasses'
    },
    {
      title: 'Творческая зона',
      image: 'https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/fc66b4e1-c5d1-426f-92df-c80351d0cc36.jpg',
      icon: 'Paintbrush'
    }
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Мягкое покрытие, профессиональные операторы и постоянный контроль'
    },
    {
      icon: 'Sparkles',
      title: 'Развитие',
      description: 'Лабиринты, батуты, творчество и VR для полноценного развития'
    },
    {
      icon: 'Heart',
      title: 'Комфорт',
      description: 'Зона отдыха с Wi-Fi для родителей, пока дети играют'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.4), rgba(14, 165, 233, 0.4)), url(https://cdn.poehali.dev/projects/b1801aa3-793c-4887-a92a-1799e384fc4c/files/b9d44cbb-091e-4ccd-8762-065512dad84b.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Первый детский развлекательный комплекс в Бежецке!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Современное пространство для игр, развития и веселья детей от 2 до 12 лет
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prices">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                Посмотреть цены
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg px-8 py-6 h-auto">
              Выбрать аттракционы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши аттракционы</h2>
            <p className="text-xl text-muted-foreground">Выберите развлечение на любой вкус</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={attraction.icon} size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{attraction.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Смотреть все
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы к приключениям?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Приходите в Twilight Park и подарите своим детям незабываемые эмоции!
          </p>
          <Link to="/prices">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 py-6 h-auto">
              Забронировать посещение
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
