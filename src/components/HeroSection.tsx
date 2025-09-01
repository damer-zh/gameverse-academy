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
        <div className="mb-8 animate-fade-in">
          <Badge variant="secondary" className="px-6 py-3 text-sm glass-card text-accent border-accent/30 bg-accent/10 font-medium">
            Эксклюзивный курс по Unity 2024
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="mb-10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light text-foreground mb-6 leading-tight tracking-tight">
            Онлайн
            <span className="block text-accent font-normal">
              образование
            </span>
            в геймдеве
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Платформа для изучения разработки игр с ведущими экспертами индустрии. 
Индивидуальный подход, проверенные методики, гарантированный результат.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-10 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Star className="w-6 h-6 fill-accent text-accent" />
            <span className="text-base font-medium">4.9/5 рейтинг экспертов</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Users className="w-6 h-6" />
            <span className="text-base font-medium">500+ выпускников</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Play className="w-6 h-6" />
            <span className="text-base font-medium">Эксклюзивные программы</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide">
            Подать заявку
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          
          <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-foreground/20 hover:border-accent hover:text-accent font-medium tracking-wide">
            <Play className="w-5 h-5 mr-3" />
            Смотреть презентацию
          </Button>
        </div>

        {/* Featured Program Preview */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card max-w-5xl mx-auto p-10 rounded-3xl border border-accent/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent border-accent/30 px-4 py-2 font-medium">
                  Флагманская программа
                </Badge>
                <h3 className="text-3xl font-light mb-4 text-foreground tracking-tight">
                  Мастерство Unity разработки
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                  Комплексная программа изучения Unity с индивидуальным наставничеством от ведущих разработчиков игровой индустрии.
                </p>
                <div className="flex items-center space-x-6 text-base text-muted-foreground font-medium">
                  <span>📅 6 месяцев</span>
                  <span>👥 Макс. 12 студентов</span>
                  <span>⭐ Гарантия трудоустройства</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-gradient-surface border border-accent/30 flex items-center justify-center">
                  <Play className="w-20 h-20 text-accent opacity-90" />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="glass-card p-6 rounded-2xl border border-accent/30">
                    <Play className="w-12 h-12 text-accent" />
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