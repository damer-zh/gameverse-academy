import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AIAssistant from '@/components/AIAssistant';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Call to Action */}
        <section className="py-24 border-y border-border/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Готовы начать обучение?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Присоединяйтесь к тысячам разработчиков, которые уже создают удивительные игры
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/catalog" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200"
              >
                Перейти в каталог
              </a>
              <a 
                href="/courses" 
                className="inline-flex items-center justify-center px-8 py-4 border border-border/30 text-foreground font-medium rounded-lg hover:bg-muted/50 transition-colors duration-200"
              >
                Все курсы
              </a>
            </div>
          </div>
        </section>
        
        {/* Premium Features Section */}
        <section className="py-24 border-y border-border/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
                Почему выбирают Shu School?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Эксклюзивная образовательная платформа с индивидуальным подходом к каждому студенту
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center glass-card p-8 rounded-2xl">
                <div className="text-4xl font-light text-accent mb-4">500+</div>
                <div className="text-base text-muted-foreground font-medium">Успешных выпускников</div>
              </div>
              <div className="text-center glass-card p-8 rounded-2xl">
                <div className="text-4xl font-light text-accent mb-4">15+</div>
                <div className="text-base text-muted-foreground font-medium">Эксклюзивных программ</div>
              </div>
              <div className="text-center glass-card p-8 rounded-2xl">
                <div className="text-4xl font-light text-accent mb-4">98%</div>
                <div className="text-base text-muted-foreground font-medium">Трудоустройство</div>
              </div>
              <div className="text-center glass-card p-8 rounded-2xl">
                <div className="text-4xl font-light text-accent mb-4">1:5</div>
                <div className="text-base text-muted-foreground font-medium">Наставник/студент</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Home;