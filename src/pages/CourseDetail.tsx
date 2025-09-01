import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AIAssistant from '@/components/AIAssistant';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  Lock, 
  Book, 
  Video, 
  Users, 
  Star, 
  Award,
  Calendar,
  Target,
  Download,
  Share2,
  Bookmark,
  ArrowRight,
  Clock3,
  GraduationCap,
  Trophy,
  FileText,
  Code,
  Palette,
  Music,
  Gamepad2
} from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for course
  const course = {
    id: courseId || '1',
    title: 'Unity Game Development: От новичка до профессионала',
    subtitle: 'Полный курс по разработке игр на Unity с нуля до создания коммерческих проектов',
    description: `Этот курс предназначен для тех, кто хочет освоить разработку игр на Unity с самого начала. 
    Вы изучите все аспекты создания игр: от базовых концепций до продвинутых техник оптимизации и монетизации.
    
    Курс включает в себя:
    • 24 практических урока
    • 12 проектов разной сложности
    • Доступ к эксклюзивным ресурсам
    • Поддержку от опытных разработчиков
    • Сертификат по завершении`,
    instructor: {
      name: 'Александр Петров',
      avatar: '/avatars/alexander.jpg',
      title: 'Senior Game Developer',
      company: 'GameStudio Pro',
      experience: '8+ лет в разработке игр',
      rating: 4.9,
      students: 1247,
      courses: 15
    },
    category: 'Разработка игр',
    level: 'От начинающего до продвинутого',
    duration: '48 часов',
    lessons: 24,
    assignmentsCount: 12,
    price: 29900,
    originalPrice: 39900,
    rating: 4.8,
    studentsCount: 1247,
    lastUpdated: '2024-01-15',
    language: 'Русский',
    certificate: true,
    lifetimeAccess: true,
    mobileAccess: true,
    requirements: [
      'Базовые знания компьютера',
      'Желание изучать программирование',
      'Установленная Unity (бесплатная версия)',
      'Минимум 4 ГБ оперативной памяти'
    ],
    whatYouWillLearn: [
      'Создавать 2D и 3D игры с нуля',
      'Программировать на C# для Unity',
      'Работать с физикой и анимациями',
      'Оптимизировать производительность игр',
      'Публиковать игры в различных магазинах',
      'Монетизировать игровые проекты'
    ],
    curriculum: [
      {
        section: 'Основы Unity',
        lessons: [
          { id: '1', title: 'Введение в Unity', duration: '15 мин', type: 'video', completed: true, locked: false },
          { id: '2', title: 'Интерфейс и настройки', duration: '20 мин', type: 'video', completed: true, locked: false },
          { id: '3', title: 'Создание первой сцены', duration: '25 мин', type: 'video', completed: false, locked: false, current: true },
          { id: '4', title: 'Работа с объектами', duration: '30 мин', type: 'video', completed: false, locked: false }
        ]
      },
      {
        section: 'Программирование на C#',
        lessons: [
          { id: '5', title: 'Основы C#', duration: '45 мин', type: 'video', completed: false, locked: false },
          { id: '6', title: 'Переменные и типы данных', duration: '35 мин', type: 'video', completed: false, locked: false },
          { id: '7', title: 'Условные операторы', duration: '40 мин', type: 'video', completed: false, locked: false },
          { id: '8', title: 'Циклы и массивы', duration: '50 мин', type: 'video', completed: false, locked: false }
        ]
      },
      {
        section: 'Практические проекты',
        lessons: [
          { id: '9', title: '2D платформер', duration: '120 мин', type: 'project', completed: false, locked: false },
          { id: '10', title: '3D шутер от первого лица', duration: '180 мин', type: 'project', completed: false, locked: false },
          { id: '11', title: 'Мобильная игра', duration: '150 мин', type: 'project', completed: false, locked: false }
        ]
      }
    ],
    assignments: [
      { id: '1', title: 'Создание простой 2D сцены', type: 'practice', points: 50, dueDate: '2024-02-15' },
      { id: '2', title: 'Скрипт движения персонажа', type: 'coding', points: 75, dueDate: '2024-02-20' },
      { id: '3', title: 'Система сбора предметов', type: 'project', points: 100, dueDate: '2024-02-25' }
    ],
    reviews: [
      {
        id: '1',
        author: 'Михаил Козлов',
        avatar: 'МК',
        rating: 5,
        date: '2024-01-20',
        comment: 'Отличный курс! Александр объясняет все очень понятно. Уже создал свою первую игру и планирую продолжать обучение.',
        helpful: 12
      },
      {
        id: '2',
        author: 'Анна Смирнова',
        avatar: 'АС',
        rating: 5,
        date: '2024-01-18',
        comment: 'Курс превзошел все ожидания. Много практики, качественные материалы и отличная поддержка.',
        helpful: 8
      }
    ],
    relatedCourses: [
      { id: '2', title: 'Продвинутая Unity разработка', instructor: 'Александр Петров', price: 19900, rating: 4.7 },
      { id: '3', title: 'C# для геймдева', instructor: 'Елена Волкова', price: 15900, rating: 4.6 },
      { id: '4', title: '3D моделирование для игр', instructor: 'Дмитрий Иванов', price: 22900, rating: 4.5 }
    ]
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'project': return <Code className="w-4 h-4" />;
      case 'practice': return <Book className="w-4 h-4" />;
      case 'coding': return <FileText className="w-4 h-4" />;
      default: return <Play className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-accent/20 text-accent';
      case 'project': return 'bg-secondary/20 text-secondary-foreground';
      case 'practice': return 'bg-success/20 text-success';
      case 'coding': return 'bg-warning/20 text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'video': return 'Видео';
      case 'project': return 'Проект';
      case 'practice': return 'Практика';
      case 'coding': return 'Кодинг';
      default: return 'Урок';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    // Здесь будет логика записи на курс
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/courses" className="hover:text-accent transition-colors">
              Курсы
            </Link>
            <span>/</span>
            <span className="text-foreground">{course.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card className="glass-card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-accent/20 to-secondary/20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent">
                    {course.category}
                  </Badge>
                  <h1 className="text-3xl font-light text-foreground mb-2">
                    {course.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {course.subtitle}
                  </p>
                </div>
              </div>
            </Card>

            {/* Course Info */}
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {course.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="curriculum">Программа</TabsTrigger>
                <TabsTrigger value="assignments">Задания</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* What You Will Learn */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>Чему вы научитесь</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5" />
                      <span>Требования</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {course.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="text-foreground">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Related Courses */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-light text-foreground">
                      Похожие курсы
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {course.relatedCourses.map((relatedCourse) => (
                        <div key={relatedCourse.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div>
                            <h4 className="font-medium text-foreground">{relatedCourse.title}</h4>
                            <p className="text-sm text-muted-foreground">{relatedCourse.instructor}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm">{relatedCourse.rating}</span>
                            </div>
                            <span className="text-sm font-medium text-foreground">{relatedCourse.price} ₽</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="space-y-6">
                <div className="space-y-6">
                  {course.curriculum.map((section, sectionIndex) => (
                    <Card key={sectionIndex} className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-light text-foreground">
                          {section.section} ({section.lessons.length} уроков)
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lesson.id}
                              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                                lesson.current ? 'ring-2 ring-accent bg-accent/10' :
                                lesson.completed ? 'bg-success/10' :
                                lesson.locked ? 'bg-muted/30 opacity-60' :
                                'bg-muted/30 hover:bg-muted/50 cursor-pointer'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center relative">
                                  {lesson.completed ? (
                                    <CheckCircle className="w-5 h-5 text-success" />
                                  ) : lesson.locked ? (
                                    <Lock className="w-4 h-4 text-muted-foreground" />
                                  ) : lesson.current ? (
                                    <Play className="w-4 h-4 text-accent" />
                                  ) : (
                                    <span className="text-sm font-medium text-muted-foreground">
                                      {lessonIndex + 1}
                                    </span>
                                  )}
                                </div>
                                
                                <div>
                                  <p className={`font-medium ${
                                    lesson.completed ? 'text-success-foreground' :
                                    lesson.current ? 'text-accent' : 'text-foreground'
                                  }`}>
                                    {lesson.title}
                                  </p>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Badge variant="secondary" className={getTypeColor(lesson.type)}>
                                      {getTypeIcon(lesson.type)}
                                      <span className="ml-1">{getTypeText(lesson.type)}</span>
                                    </Badge>
                                    <div className="flex items-center">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {lesson.duration}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {!lesson.locked && (
                                <Link to={`/lesson/${lesson.id}`}>
                                  <Button variant="ghost" size="sm">
                                    {lesson.completed ? 'Повторить' : lesson.current ? 'Продолжить' : 'Начать'}
                                  </Button>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Assignments Tab */}
              <TabsContent value="assignments" className="space-y-6">
                <div className="space-y-4">
                  {course.assignments.map((assignment) => (
                    <Card key={assignment.id} className="glass-card">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-lg font-medium text-foreground">
                                {assignment.title}
                              </h4>
                              <Badge variant="secondary" className={getTypeColor(assignment.type)}>
                                {getTypeText(assignment.type)}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Award className="w-4 h-4 mr-1" />
                                {assignment.points} баллов
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                Срок: {formatDate(assignment.dueDate)}
                              </div>
                            </div>
                          </div>
                          
                          <Link to={`/assignment/${assignment.id}`}>
                            <Button>
                              Открыть задание
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-4">
                  {course.reviews.map((review) => (
                    <Card key={review.id} className="glass-card">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-accent/20 text-accent">
                              {review.avatar}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-medium text-foreground">{review.author}</h4>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {formatDate(review.date)}
                              </span>
                            </div>
                            
                            <p className="text-foreground mb-3">{review.comment}</p>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                Полезно: {review.helpful}
                              </span>
                              <Button variant="ghost" size="sm">
                                Полезно
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Card */}
            <Card className="glass-card sticky top-24">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-light text-foreground mb-2">
                    {course.price.toLocaleString()} ₽
                  </div>
                  {course.originalPrice > course.price && (
                    <div className="text-lg text-muted-foreground line-through mb-2">
                      {course.originalPrice.toLocaleString()} ₽
                    </div>
                  )}
                  <Badge variant="secondary" className="bg-success/20 text-success">
                    Скидка {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                  </Badge>
                </div>
                
                {!isEnrolled ? (
                  <Button onClick={handleEnroll} className="w-full mb-4">
                    Записаться на курс
                  </Button>
                ) : (
                  <Button className="w-full mb-4" disabled>
                    Вы уже записаны
                  </Button>
                )}
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Уроков:</span>
                    <span className="text-foreground">{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Заданий:</span>
                    <span className="text-foreground">{course.assignments.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Длительность:</span>
                    <span className="text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Уровень:</span>
                    <span className="text-foreground">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Язык:</span>
                    <span className="text-foreground">{course.language}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-foreground">Сертификат по завершении</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-foreground">Пожизненный доступ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-foreground">Доступ с мобильных</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground">
                  Инструктор
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback className="bg-accent/20 text-accent text-lg">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-medium text-foreground">{course.instructor.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor.company}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Опыт:</span>
                    <span className="text-foreground">{course.instructor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Рейтинг:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-foreground">{course.instructor.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Студентов:</span>
                    <span className="text-foreground">{course.instructor.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Курсов:</span>
                    <span className="text-foreground">{course.instructor.courses}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Stats */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground">
                  Статистика курса
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-light text-accent mb-2">{course.rating}</div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating) ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {course.studentsCount} студентов
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-light text-accent mb-1">{course.lessons}</div>
                    <div className="text-xs text-muted-foreground">Уроков</div>
                  </div>
                  <div>
                                      <div className="text-2xl font-light text-accent mb-1">{course.assignmentsCount}</div>
                  <div className="text-xs text-muted-foreground">Заданий</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default CourseDetail; 