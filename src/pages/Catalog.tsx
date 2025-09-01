import Header from '@/components/Header';
import CourseCarousel from '@/components/CourseCarousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Award, 
  Target, 
  TrendingUp, 
  Star,
  Users,
  Trophy,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { mockCourses, enrolledCourses, popularCourses, newCourses } from '@/data/mockCourses';
import AIAssistant from '@/components/AIAssistant';

const Catalog = () => {
  // Mock user statistics
  const userStats = {
    totalCourses: 3,
    completedLessons: 24,
    totalLessons: 48,
    currentStreak: 7,
    totalStudyTime: 32,
    achievements: 8,
    rank: 'Студент',
    level: 3,
    experience: 1250,
    nextLevel: 2000
  };

  const progress = (userStats.completedLessons / userStats.totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
            Каталог программ
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Изучайте, развивайтесь и достигайте новых высот в разработке игр
          </p>
        </div>

        {/* User Statistics Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">
              Ваша статистика обучения
            </h2>
            <p className="text-muted-foreground">
              Отслеживайте прогресс и достижения в обучении
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Overall Progress */}
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-light text-accent mb-2">{progress.toFixed(0)}%</div>
                <div className="text-sm text-muted-foreground mb-3">Общий прогресс</div>
                <Progress value={progress} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">
                  {userStats.completedLessons} из {userStats.totalLessons} уроков
                </div>
              </CardContent>
            </Card>

            {/* Study Time */}
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-2xl font-light text-green-500 mb-2">{userStats.totalStudyTime}ч</div>
                <div className="text-sm text-muted-foreground mb-3">Время обучения</div>
                <div className="text-xs text-muted-foreground">
                  Текущая серия: {userStats.currentStreak} дней
                </div>
              </CardContent>
            </Card>

            {/* Level & Experience */}
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
                <div className="text-2xl font-light text-purple-500 mb-2">Уровень {userStats.level}</div>
                <div className="text-sm text-muted-foreground mb-3">{userStats.rank}</div>
                <div className="text-xs text-muted-foreground">
                  {userStats.experience} / {userStats.nextLevel} XP
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-light text-yellow-500 mb-2">{userStats.achievements}</div>
                <div className="text-sm text-muted-foreground mb-3">Достижения</div>
                <div className="text-xs text-muted-foreground">
                  Разблокировано
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Stats */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Детальная статистика</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Активные курсы</h4>
                  <div className="space-y-2">
                    {enrolledCourses.slice(0, 3).map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{course.title}</p>
                            <p className="text-xs text-muted-foreground">{course.instructor}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          Активен
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Последние достижения</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-500/10">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Первые шаги</p>
                        <p className="text-xs text-muted-foreground">Завершили первый урок</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Неделя обучения</p>
                        <p className="text-xs text-muted-foreground">7 дней подряд</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-500/10">
                      <Star className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Отличник</p>
                        <p className="text-xs text-muted-foreground">95%+ на заданиях</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Цели на месяц</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">Завершить курс Unity</span>
                        <span className="text-xs text-muted-foreground">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">Изучить C#</span>
                        <span className="text-xs text-muted-foreground">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">Создать первую игру</span>
                        <span className="text-xs text-muted-foreground">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Course Catalog Section */}
        <section className="space-y-24">
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

          {/* 3D & Art Courses */}
          <CourseCarousel
            title="3D моделирование и арт"
            subtitle="Создание визуального контента для игр"
            courses={mockCourses.filter(course => course.category === '3D моделирование')}
          />

          {/* Mobile Development */}
          <CourseCarousel
            title="Мобильная разработка"
            subtitle="Создание игр для iOS и Android"
            courses={mockCourses.filter(course => course.category === 'Мобильная разработка')}
          />
        </section>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Catalog; 