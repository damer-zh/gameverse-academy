import Header from '@/components/Header';
import { Users, BookOpen, MessageSquare, BarChart3, Calendar, FileText, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeacherDashboard = () => {
  const teacherStats = {
    totalStudents: 1247,
    activeCourses: 5,
    totalRevenue: 89500,
    avgRating: 4.8,
    completionRate: 78,
    monthlyGrowth: 12
  };

  const courses = [
    {
      id: '1',
      title: 'Unity для начинающих: создание 2D игр',
      students: 542,
      rating: 4.8,
      revenue: 32500,
      completion: 85,
      status: 'active'
    },
    {
      id: '2',
      title: 'Продвинутая 3D разработка в Unity',
      students: 328,
      rating: 4.9,
      revenue: 28900,
      completion: 72,
      status: 'active'
    },
    {
      id: '3',
      title: 'Создание VR игр в Unity',
      students: 156,
      rating: 4.7,
      revenue: 18600,
      completion: 68,
      status: 'draft'
    }
  ];

  const recentActivity = [
    {
      type: 'new_student',
      message: 'Новый студент записался на "Unity для начинающих"',
      time: '2 часа назад'
    },
    {
      type: 'assignment_submitted',
      message: '15 заданий ожидают проверки',
      time: '4 часа назад'
    },
    {
      type: 'review',
      message: 'Новый отзыв (5 звезд) на курс "Продвинутая Unity"',
      time: '6 часов назад'
    },
    {
      type: 'message',
      message: '3 новых вопроса в форуме курса',
      time: '8 часов назад'
    }
  ];

  const pendingTasks = [
    {
      id: '1',
      title: 'Проверить задания по Unity (15 работ)',
      priority: 'high',
      dueDate: 'Сегодня'
    },
    {
      id: '2',
      title: 'Ответить на вопросы в форуме (8 сообщений)',
      priority: 'medium',
      dueDate: 'Завтра'
    },
    {
      id: '3',
      title: 'Записать новый урок для курса VR',
      priority: 'low',
      dueDate: '3 дня'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Панель преподавателя</h1>
            <p className="text-muted-foreground">
              Управляйте своими курсами и взаимодействуйте со студентами
            </p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Создать урок
            </Button>
            <Button>
              <BookOpen className="w-4 h-4 mr-2" />
              Новый курс
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">{teacherStats.totalStudents}</div>
            <div className="text-sm text-muted-foreground">Студентов</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">{teacherStats.activeCourses}</div>
            <div className="text-sm text-muted-foreground">Активных курсов</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">{teacherStats.totalRevenue.toLocaleString()}₽</div>
            <div className="text-sm text-muted-foreground">Доход</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">{teacherStats.avgRating}</div>
            <div className="text-sm text-muted-foreground">Рейтинг</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">{teacherStats.completionRate}%</div>
            <div className="text-sm text-muted-foreground">Завершаемость</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">+{teacherStats.monthlyGrowth}%</div>
            <div className="text-sm text-muted-foreground">Рост</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses Overview */}
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-accent" />
                Мои курсы
              </h2>
              
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {course.students} студентов
                          </span>
                          <span className="flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {course.rating} ★
                          </span>
                          <span>{course.revenue.toLocaleString()}₽</span>
                        </div>
                      </div>
                      
                      <Badge 
                        variant={course.status === 'active' ? 'default' : 'secondary'}
                        className={course.status === 'active' ? '' : 'bg-muted'}
                      >
                        {course.status === 'active' ? 'Активный' : 'Черновик'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Завершаемость</span>
                        <span className="font-medium">{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">Редактировать</Button>
                      <Button variant="outline" size="sm">Статистика</Button>
                      <Button variant="outline" size="sm">Студенты</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-accent" />
                Аналитика
              </h2>
              
              <div className="h-64 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">График продаж и активности студентов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Tasks */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-accent" />
                Задачи
              </h3>
              
              <div className="space-y-3">
                {pendingTasks.map(task => (
                  <div key={task.id} className="border border-border/20 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-foreground">{task.title}</h4>
                      <Badge 
                        variant={task.priority === 'high' ? 'destructive' : 
                                task.priority === 'medium' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {task.priority === 'high' ? 'Срочно' : 
                         task.priority === 'medium' ? 'Средний' : 'Низкий'}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-accent" />
                Активность
              </h3>
              
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-foreground mb-1">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Быстрые действия
              </h3>
              
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Проверить задания
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ответить на вопросы
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Посмотреть отчеты
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Управление студентами
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;