import { ArrowRight, Play, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-surface opacity-40" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2 text-sm glass-card text-white border-white/30">
            🎮 Новый курс по Unity 2024 уже доступен
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Изучайте
            <span className="bg-gradient-accent bg-clip-text text-transparent mx-3">
              GameDev
            </span>
            <br />
            с лучшими
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Присоединяйтесь к сообществу разработчиков игр. Изучайте Unity, Unreal Engine, 
            C# и создавайте игры своей мечты с профессиональными наставниками.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.9/5 рейтинг</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="w-5 h-5" />
            <span className="text-sm">15,000+ студентов</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Play className="w-5 h-5" />
            <span className="text-sm">200+ курсов</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-opacity">
            Начать обучение
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-muted-foreground/30 hover:border-accent hover:text-accent">
            <Play className="w-5 h-5 mr-2" />
            Посмотреть демо
          </Button>
        </div>

        {/* Featured Course Preview */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card max-w-4xl mx-auto p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <Badge variant="secondary" className="mb-3 bg-accent/20 text-accent">
                  🔥 Популярный курс
                </Badge>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  Создание игры на Unity с нуля
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Полный курс по разработке 2D и 3D игр на Unity. От основ до публикации в Steam.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>⏱️ 40 часов</span>
                  <span>👥 5,200 студентов</span>
                  <span>⭐ 4.8/5</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg bg-gradient-accent flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="glass-card p-4 rounded-full">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;