import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CourseCarousel from '@/components/CourseCarousel';
import AIAssistant from '@/components/AIAssistant';
import { mockCourses, enrolledCourses, popularCourses, newCourses } from '@/data/mockCourses';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Course Carousels */}
        <div className="container mx-auto px-4 py-20 space-y-24">
          {/* Continue Learning (if user has enrolled courses) */}
          {enrolledCourses.length > 0 && (
            <CourseCarousel
              title="Ваши активные программы"
              subtitle="Продолжите изучение эксклюзивных курсов"
              courses={enrolledCourses}
            />
          )}
          
          {/* Popular Courses */}
          <CourseCarousel
            title="Образовательные программы"
            subtitle="Лучшие курсы от ведущих экспертов индустрии"
            courses={popularCourses}
          />
          
          {/* New Courses */}
          <CourseCarousel
            title="Новые программы"
            subtitle="Недавно запущенные эксклюзивные курсы"
            courses={newCourses}
          />
          
          {/* Unity Courses */}
          <CourseCarousel
            title="Мастерство Unity"
            subtitle="Глубокое изучение самого популярного игрового движка"
            courses={mockCourses.filter(course => course.category === 'Unity')}
          />
          
          {/* Programming Courses */}
          <CourseCarousel
            title="Программирование высокого уровня"
            subtitle="Продвинутые техники разработки игр"
            courses={mockCourses.filter(course => course.category === 'Программирование')}
          />
        </div>
        
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