import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { User, Calendar, Trophy, BookOpen, Target, Settings, Edit2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { enrolledCourses } from '@/data/mockCourses';

const Profile = () => {
  const user = {
    name: 'Александр Петров',
    email: 'alexander.petrov@example.com',
    avatar: 'АП',
    joinDate: '2023-08-15',
    level: 'Продвинутый разработчик',
    totalXP: 2450,
    nextLevelXP: 3000,
    streak: 15,
    completedCourses: 8,
    inProgressCourses: 3,
    totalHours: 156
  };

  const achievements = [
    {
      id: '1',
      title: 'Первые шаги',
      description: 'Завершите первый курс',
      icon: '🎯',
      earned: true,
      earnedDate: '2023-09-01'
    },
    {
      id: '2',
      title: 'Unity Мастер',
      description: 'Завершите 5 курсов по Unity',
      icon: '🎮',
      earned: true,
      earnedDate: '2023-11-15'
    },
    {
      id: '3',
      title: 'Марафонец',
      description: 'Учитесь 30 дней подряд',
      icon: '🏃‍♂️',
      earned: false,
      progress: 50
    },
    {
      id: '4',
      title: 'Помощник сообщества',
      description: 'Получите 50 лайков на ответы',
      icon: '🤝',
      earned: false,
      progress: 32
    }
  ];

  const learningStats = [
    {
      period: 'Эта неделя',
      hours: 12,
      lessons: 8,
      assignments: 2
    },
    {
      period: 'Этот месяц',
      hours: 48,
      lessons: 32,
      assignments: 7
    },
    {
      period: 'Всего',
      hours: 156,
      lessons: 124,
      assignments: 23
    }
  ];

  const recentActivity = [
    {
      type: 'course_completed',
      title: 'Завершен курс "Unity для начинающих"',
      date: '2024-01-12',
      icon: '✅'
    },
    {
      type: 'achievement',
      title: 'Получено достижение "Unity Мастер"',
      date: '2024-01-10', 
      icon: '🏆'
    },
    {
      type: 'assignment_submitted',
      title: 'Сдано задание "Создание 2D платформера"',
      date: '2024-01-08',
      icon: '📋'
    },
    {
      type: 'course_started',
      title: 'Начат курс "Продвинутая Unity разработка"',
      date: '2024-01-05',
      icon: '🚀'
    }
  ];

  const getLevelProgress = () => {
    return ((user.totalXP / user.nextLevelXP) * 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="glass-card p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-accent/20 text-accent text-2xl font-bold">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">{user.name}</h1>
                <p className="text-muted-foreground text-sm mb-2">{user.email}</p>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {user.level}
                </Badge>
              </div>
            </div>

            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">{user.totalXP}</div>
                <div className="text-xs text-muted-foreground">Опыт</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">{user.streak}</div>
                <div className="text-xs text-muted-foreground">Дней подряд</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">{user.completedCourses}</div>
                <div className="text-xs text-muted-foreground">Завершено</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">{user.totalHours}ч</div>
                <div className="text-xs text-muted-foreground">Всего времени</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button size="sm">
                <Edit2 className="w-4 h-4 mr-2" />
                Редактировать
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Настройки
              </Button>
            </div>
          </div>

          {/* Level Progress */}
          <div className="mt-6 pt-6 border-t border-border/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Прогресс до следующего уровня</span>
              <span className="text-sm text-muted-foreground">
                {user.totalXP} / {user.nextLevelXP} XP
              </span>
            </div>
            <Progress value={getLevelProgress()} className="h-2" />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Активные курсы ({user.inProgressCourses})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map(course => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Завершенные курсы ({user.completedCourses})
                </h2>
                <div className="text-center py-8">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Завершенные курсы появятся здесь
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map(achievement => (
                <div 
                  key={achievement.id}
                  className={`glass-card p-6 rounded-lg ${
                    achievement.earned ? 'ring-2 ring-accent/30' : 'opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      
                      {achievement.earned ? (
                        <div className="flex items-center text-sm text-accent">
                          <Trophy className="w-4 h-4 mr-2" />
                          Получено {formatDate(achievement.earnedDate!)}
                        </div>
                      ) : achievement.progress ? (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      ) : (
                        <Badge variant="outline">Заблокировано</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats">
            <div className="grid md:grid-cols-3 gap-6">
              {learningStats.map(stat => (
                <div key={stat.period} className="glass-card p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {stat.period}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-accent">{stat.hours}ч</div>
                      <div className="text-sm text-muted-foreground">Обучение</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-accent">{stat.lessons}</div>
                      <div className="text-sm text-muted-foreground">Уроков</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-accent">{stat.assignments}</div>
                      <div className="text-sm text-muted-foreground">Заданий</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Последняя активность
              </h2>
              
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="glass-card p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{activity.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(activity.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;