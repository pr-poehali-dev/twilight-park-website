import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Prices = () => {
  const tariffs = [
    {
      name: 'Разовое посещение',
      price: '500 ₽',
      period: '2 часа',
      features: [
        'Доступ ко всем зонам',
        'Мягкое покрытие',
        'Контроль операторов',
        'Wi-Fi для родителей'
      ],
      popular: false,
      gradient: 'from-secondary to-secondary/80'
    },
    {
      name: 'Абонемент "Популярный"',
      price: '3 400 ₽',
      period: '8 посещений',
      features: [
        'Экономия 15%',
        'Срок действия 30 дней',
        'Доступ ко всем зонам',
        'Приоритетное бронирование'
      ],
      popular: true,
      gradient: 'from-primary to-accent'
    },
    {
      name: 'Абонемент "Безлимитный"',
      price: '5 000 ₽',
      period: '30 дней',
      features: [
        'Неограниченное посещение',
        'Максимальная выгода',
        'Доступ ко всем зонам',
        'VIP поддержка'
      ],
      popular: false,
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Цены и абонементы</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Выберите удобный тариф для вашей семьи
            </p>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Icon name="Info" size={20} className="text-primary" />
              <span className="font-medium">Вход для сопровождающих взрослых — бесплатный</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl animate-scale-in ${
                  tariff.popular ? 'border-4 border-primary scale-105' : 'border-2'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tariff.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}

                <div className={`bg-gradient-to-br ${tariff.gradient} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold">{tariff.price}</span>
                  </div>
                  <p className="text-white/90 text-lg">{tariff.period}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      tariff.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                        : 'bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90'
                    }`}
                    size="lg"
                  >
                    {tariff.name.includes('Разовое') ? 'Купить билет' : 'Купить абонемент'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 p-8 md:p-12 text-center animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Для детских садов и школ — специальные цены
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Организуем групповые посещения с индивидуальными условиями и программой
              </p>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Получить расчет
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем выбрать лучший вариант для вашей семьи
          </p>
          <a href="tel:+79216453821">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-xl px-12 py-7 h-auto"
            >
              <Icon name="Phone" size={24} className="mr-2" />
              Позвонить 8-921-645-38-21
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
