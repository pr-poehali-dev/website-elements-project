import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const menuItems = [
    { name: 'Латте', price: 200, icon: 'Coffee' },
    { name: 'Капучино', price: 180, icon: 'Coffee' },
    { name: 'Американо', price: 165, icon: 'Coffee' }
  ];

  const staff = [
    { 
      name: 'Звягинцева Алёна Алексеевна', 
      position: 'Управляющий',
      image: 'https://cdn.poehali.dev/projects/9c21caea-5874-4bc1-8069-dd423cc2e0c1/files/7dfdda8c-aee5-419f-8b6e-14bdc52ae761.jpg'
    },
    { 
      name: 'Неклюдова Анна Александровна', 
      position: 'Главный бариста',
      image: 'https://cdn.poehali.dev/projects/9c21caea-5874-4bc1-8069-dd423cc2e0c1/files/7dfdda8c-aee5-419f-8b6e-14bdc52ae761.jpg'
    },
    { 
      name: 'Кузьмичёва Варвара Евгеньевна', 
      position: 'Бариста',
      image: 'https://cdn.poehali.dev/projects/9c21caea-5874-4bc1-8069-dd423cc2e0c1/files/7dfdda8c-aee5-419f-8b6e-14bdc52ae761.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваше сообщение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="bg-card shadow-md sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/9c21caea-5874-4bc1-8069-dd423cc2e0c1/files/a6166647-107f-4cc6-946a-97767743ed43.jpg" 
              alt="Логотип" 
              className="w-12 h-12 rounded-full object-cover shadow-lg"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Кофейня</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#staff" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/9c21caea-5874-4bc1-8069-dd423cc2e0c1/files/6e699f31-cc8e-4449-bc04-0d4d8c4b5a5b.jpg"
            alt="Интерьер кофейни"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Добро пожаловать в нашу кофейню
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Уютная атмосфера, ароматный кофе и душевное общение
          </p>
          <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="#menu">
              <Icon name="Coffee" className="mr-2" size={20} />
              Посмотреть меню
            </a>
          </Button>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наше меню</h2>
            <p className="text-muted-foreground">Свежеобжаренный кофе от лучших бариста</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary mt-2">
                    {item.price} ₽
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="staff" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наша команда</h2>
            <p className="text-muted-foreground">Профессионалы своего дела</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {staff.map((person, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {person.position}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Связаться с нами</h2>
            <p className="text-muted-foreground">Мы всегда рады вашим вопросам и предложениям</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={24} className="text-primary" />
                  Форма обратной связи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ваше сообщение"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Наш адрес
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Home" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Время работы:</p>
                      <p className="text-muted-foreground">Пн-Вс: 08:00 - 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.622504,55.753215&z=12"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="w-full h-full"
                    title="Карта"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Кофейня. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
