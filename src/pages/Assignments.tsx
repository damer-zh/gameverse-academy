import Header from '@/components/Header';
import { Calendar, Clock, CheckCircle, AlertCircle, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import AIAssistant from '@/components/AIAssistant';

const Assignments = () => {
  const assignments = {
    active: [
      {
        id: '1',
        title: 'Создание 2D платформера',
        course: 'Unity для начинающих',
        description: 'Создайте простой 2D платформер с движением персонажа, прыжками и сбором предметов',
        dueDate: '2024-01-15',
        progress: 65,
        difficulty: 'Средний',
        points: 100,
        submitted: false
      },
      {
        id: '2', 
        title: 'Система инвентаря',
        course: 'Продвинутая Unity разработка',
        description: 'Реализуйте систему инвентаря с перетаскиванием предметов и их использованием',
        dueDate: '2024-01-20',
        progress: 20,
        difficulty: 'Сложный',
        points: 150,
        submitted: false
      }
    ],
    completed: [
      {
        id: '3',
        title: 'Первая Unity сцена',
        course: 'Unity для начинающих',
        description: 'Создайте базовую сцену с освещением, камерой и несколькими объектами',
        completedDate: '2024-01-10',
        score: 95,
        feedback: 'Отличная работа! Сцена выглядит профессионально.',
        difficulty: 'Легкий',
        points: 50
      },
      {
        id: '4',
        title: 'Скрипт движения персонажа',
        course: 'C# для геймдева',
        description: 'Напишите скрипт для управления персонажем с помощью клавиатуры',
        completedDate: '2024-01-08',
        score: 88,
        feedback: 'Хорошая работа, но можно оптимизировать код.',
        difficulty: 'Средний',
        points: 75
      }
    ],
    overdue: [
      {
        id: '5',
        title: 'Звуковая система',
        course: 'Unity Audio',
        description: 'Реализуйте систему воспроизведения звуков и музыки',
        dueDate: '2024-01-05',
        progress: 30,
        difficulty: 'Средний',
        points: 80
      }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легкий': return 'bg-secondary/20 text-secondary-foreground';
      case 'Средний': return 'bg-accent/20 text-accent';
      case 'Сложный': return 'bg-destructive/20 text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const daysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Задания</h1>
          <p className="text-muted-foreground">
            Практические задания для закрепления знаний
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">2</div>
            <div className="text-sm text-muted-foreground">Активные</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">2</div>
            <div className="text-sm text-muted-foreground">Завершенные</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-destructive mb-1">1</div>
            <div className="text-sm text-muted-foreground">Просроченные</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">455</div>
            <div className="text-sm text-muted-foreground">Баллы опыта</div>
          </div>
        </div>

        {/* Assignments Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit">
            <TabsTrigger value="active">Активные ({assignments.active.length})</TabsTrigger>
            <TabsTrigger value="completed">Завершенные ({assignments.completed.length})</TabsTrigger>
            <TabsTrigger value="overdue">Просроченные ({assignments.overdue.length})</TabsTrigger>
          </TabsList>

          {/* Active Assignments */}
          <TabsContent value="active" className="space-y-4">
            {assignments.active.map(assignment => (
              <div key={assignment.id} className="glass-card p-6 rounded-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {assignment.title}
                      </h3>
                      <Badge variant="secondary" className={getDifficultyColor(assignment.difficulty)}>
                        {assignment.difficulty}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      Курс: <span className="text-accent">{assignment.course}</span>
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {assignment.description}
                    </p>

                    {/* Progress */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className="font-medium">{assignment.progress}%</span>
                      </div>
                      <Progress value={assignment.progress} className="h-2" />
                    </div>

                    {/* Due Date */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Срок: {formatDate(assignment.dueDate)}
                      </div>
                      <div className={`flex items-center ${
                        daysUntilDue(assignment.dueDate) <= 3 ? 'text-destructive' : 'text-muted-foreground'
                      }`}>
                        <Clock className="w-4 h-4 mr-1" />
                        {daysUntilDue(assignment.dueDate) > 0 
                          ? `Осталось ${daysUntilDue(assignment.dueDate)} дн.`
                          : 'Просрочено'
                        }
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Star className="w-4 h-4 mr-1" />
                        {assignment.points} баллов
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link to={`/assignment/${assignment.id}`}>
                      <Button>Продолжить</Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Скачать материалы
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Completed Assignments */}
          <TabsContent value="completed" className="space-y-4">
            {assignments.completed.map(assignment => (
              <div key={assignment.id} className="glass-card p-6 rounded-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {assignment.title}
                      </h3>
                      <Badge variant="secondary" className={getDifficultyColor(assignment.difficulty)}>
                        {assignment.difficulty}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      Курс: <span className="text-accent">{assignment.course}</span>
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {assignment.description}
                    </p>

                    {/* Feedback */}
                    <div className="bg-muted/30 rounded-lg p-3 mb-4">
                      <p className="text-sm font-medium text-foreground mb-1">Отзыв преподавателя:</p>
                      <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
                    </div>

                    {/* Completion Info */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Завершено: {formatDate(assignment.completedDate)}
                      </div>
                      <div className="flex items-center text-accent">
                        <Star className="w-4 h-4 mr-1" />
                        Оценка: {assignment.score}/100
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Star className="w-4 h-4 mr-1" />
                        +{assignment.points} баллов опыта
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link to={`/assignment/${assignment.id}`}>
                      <Button variant="outline">Просмотреть работу</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Overdue Assignments */}
          <TabsContent value="overdue" className="space-y-4">
            {assignments.overdue.map(assignment => (
              <div key={assignment.id} className="glass-card p-6 rounded-lg border-destructive/30">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {assignment.title}
                      </h3>
                      <Badge variant="destructive">
                        Просрочено
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      Курс: <span className="text-accent">{assignment.course}</span>
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {assignment.description}
                    </p>

                    {/* Progress */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className="font-medium">{assignment.progress}%</span>
                      </div>
                      <Progress value={assignment.progress} className="h-2" />
                    </div>

                    {/* Due Date */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center text-destructive">
                        <Calendar className="w-4 h-4 mr-1" />
                        Срок был: {formatDate(assignment.dueDate)}
                      </div>
                      <div className="flex items-center text-destructive">
                        <Clock className="w-4 h-4 mr-1" />
                        Просрочено на {Math.abs(daysUntilDue(assignment.dueDate))} дн.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="destructive">Срочно завершить</Button>
                    <Button variant="outline" size="sm">
                      Связаться с преподавателем
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Assignments;