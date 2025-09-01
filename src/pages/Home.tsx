import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CourseCarousel from '@/components/CourseCarousel';
import { mockCourses, enrolledCourses, popularCourses, newCourses } from '@/data/mockCourses';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Course Carousels */}
        <div className="container mx-auto px-4 py-16 space-y-16">
          {/* Continue Learning (if user has enrolled courses) */}
          {enrolledCourses.length > 0 && (
            <CourseCarousel
              title="Продолжить обучение"
              subtitle="Ваши активные курсы"
              courses={enrolledCourses}
            />
          )}
          
          {/* Popular Courses */}
          <CourseCarousel
            title="Популярные курсы"
            subtitle="Лучшие курсы по мнению студентов"
            courses={popularCourses}
          />
          
          {/* New Courses */}
          <CourseCarousel
            title="Новые курсы"
            subtitle="Недавно добавленные курсы"
            courses={newCourses}
          />
          
          {/* Unity Courses */}
          <CourseCarousel
            title="Курсы по Unity"
            subtitle="Освойте самый популярный игровой движок"
            courses={mockCourses.filter(course => course.category === 'Unity')}
          />
          
          {/* Programming Courses */}
          <CourseCarousel
            title="Программирование для игр"
            subtitle="Изучите языки программирования для геймдева"
            courses={mockCourses.filter(course => course.category === 'Программирование')}
          />
        </div>
        
        {/* Stats Section */}
        <section className="bg-muted/20 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Почему выбирают GameDev Academy?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к тысячам разработчиков, которые уже создают игры своей мечты
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15,000+</div>
                <div className="text-sm text-muted-foreground">Активных студентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Курсов и уроков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Экспертов-преподавателей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1,000+</div>
                <div className="text-sm text-muted-foreground">Опубликованных игр</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;