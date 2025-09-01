import Header from '@/components/Header';
import { Play, Clock, CheckCircle, Lock, Book, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import AIAssistant from '@/components/AIAssistant';

const Lessons = () => {
  const courseProgress = 65;
  
  const lessons = [
    {
      id: '1',
      title: 'Введение в Unity',
      description: 'Знакомство с интерфейсом Unity и основными концепциями',
      duration: '15 мин',
      type: 'video',
      completed: true,
      locked: false
    },
    {
      id: '2', 
      title: 'Создание первой сцены',
      description: 'Добавляем объекты и настраиваем базовую сцену',
      duration: '20 мин',
      type: 'video',
      completed: true,
      locked: false
    },
    {
      id: '3',
      title: 'Работа с компонентами',
      description: 'Изучаем систему компонентов Unity',
      duration: '25 мин', 
      type: 'video',
      completed: false,
      locked: false,
      current: true
    },
    {
      id: '4',
      title: 'Основы скриптинга на C#',
      description: 'Первые скрипты и их применение в Unity',
      duration: '30 мин',
      type: 'video',
      completed: false,
      locked: false
    },
    {
      id: '5',
      title: 'Практическое задание: Создание персонажа',
      description: 'Применяем полученные знания на практике',
      duration: '45 мин',
      type: 'assignment',
      completed: false,
      locked: false
    },
    {
      id: '6',
      title: 'Физика в Unity',
      description: 'Работа с Rigidbody и Collider компонентами',
      duration: '35 мин',
      type: 'video',
      completed: false,
      locked: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'assignment': return <Book className="w-4 h-4" />;
      default: return <Play className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-accent/20 text-accent';
      case 'assignment': return 'bg-secondary/20 text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8 glass-card p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent">
                Unity для начинающих
              </Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Создание 2D игр
              </h1>
              <p className="text-muted-foreground mb-4">
                Александр Петров • 24 часа • 6 из 12 уроков завершено
              </p>
              
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Прогресс курса</span>
                  <span className="font-medium">{courseProgress}%</span>
                </div>
                <Progress value={courseProgress} className="h-2" />
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <Button size="lg" className="w-full lg:w-auto">
                Продолжить обучение
              </Button>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Содержание курса
          </h2>
          
          {lessons.map((lesson, index) => (
            <div 
              key={lesson.id}
              className={`glass-card rounded-lg transition-all duration-200 ${
                lesson.current ? 'ring-2 ring-accent' : ''
              } ${lesson.locked ? 'opacity-60' : 'hover:shadow-elevated cursor-pointer'}`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Lesson Number & Status */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative">
                    {lesson.completed ? (
                      <CheckCircle className="w-6 h-6 text-accent" />
                    ) : lesson.locked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : lesson.current ? (
                      <Play className="w-5 h-5 text-accent" />
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  {/* Lesson Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className={`font-semibold ${
                        lesson.completed ? 'text-muted-foreground line-through' :
                        lesson.current ? 'text-accent' : 'text-foreground'
                      }`}>
                        {lesson.title}
                      </h3>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className={getTypeColor(lesson.type)}>
                          {getTypeIcon(lesson.type)}
                          <span className="ml-1 capitalize">{lesson.type === 'video' ? 'Видео' : 'Задание'}</span>
                        </Badge>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {lesson.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {lesson.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    {lesson.locked ? (
                      <Button variant="ghost" size="sm" disabled>
                        Заблокировано
                      </Button>
                    ) : lesson.completed ? (
                      <Link to={`/lesson/${lesson.id}`}>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          Повторить
                        </Button>
                      </Link>
                    ) : lesson.current ? (
                      <Link to={`/lesson/${lesson.id}`}>
                        <Button size="sm">
                          Продолжить
                        </Button>
                      </Link>
                    ) : (
                      <Link to={`/lesson/${lesson.id}`}>
                        <Button variant="outline" size="sm">
                          Начать
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">12</div>
            <div className="text-sm text-muted-foreground">Всего уроков</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">6</div>
            <div className="text-sm text-muted-foreground">Завершено</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">24ч</div>
            <div className="text-sm text-muted-foreground">Общая длительность</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">4.8</div>
            <div className="text-sm text-muted-foreground">Рейтинг курса</div>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Lessons;