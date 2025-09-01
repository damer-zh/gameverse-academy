import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import AIAssistant from '@/components/AIAssistant';
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize, 
  BookOpen, 
  FileText, 
  Download, 
  CheckCircle, 
  Circle, 
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Star
} from 'lucide-react';

const LessonDetail = () => {
  const { lessonId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  // Mock data for lesson
  const lesson = {
    id: lessonId || '1',
    title: 'Основы программирования на C# для Unity',
    description: 'Изучите фундаментальные концепции программирования на C# и их применение в разработке игр на Unity.',
    duration: '45 минут',
    instructor: 'Александр Петров',
    rating: 4.8,
    studentsCount: 1247,
    category: 'Программирование',
    level: 'Начинающий',
    videoUrl: 'https://example.com/video.mp4',
    materials: [
      { id: 1, name: 'Презентация урока', type: 'pdf', size: '2.4 MB' },
      { id: 2, name: 'Исходный код примеров', type: 'zip', size: '1.8 MB' },
      { id: 3, name: 'Чек-лист для практики', type: 'docx', size: '156 KB' }
    ],
    chapters: [
      { id: 1, title: 'Введение в C#', duration: '8 мин', completed: true },
      { id: 2, title: 'Переменные и типы данных', duration: '12 мин', completed: true },
      { id: 3, title: 'Условные операторы', duration: '15 мин', completed: false },
      { id: 4, title: 'Циклы и массивы', duration: '10 мин', completed: false }
    ],
    nextLesson: { id: '2', title: 'Объектно-ориентированное программирование' },
    prevLesson: null
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
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
            <Link to="/lessons" className="hover:text-accent transition-colors">
              Уроки
            </Link>
            <span>/</span>
            <span className="text-foreground">{lesson.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Video and Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="glass-card overflow-hidden">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <p className="text-sm opacity-80">Нажмите для воспроизведения</p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayPause}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-4 h-4 text-white/80" />
                        <div className="w-20 h-1 bg-white/30 rounded-full">
                          <div className="w-16 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3">
                    <Progress value={progress} className="h-1" />
                    <div className="flex justify-between text-xs text-white/80 mt-1">
                      <span>12:34</span>
                      <span>45:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Lesson Info */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-light text-foreground mb-2">
                      {lesson.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {lesson.category}
                    </Badge>
                    <Badge variant="outline" className="border-muted-foreground/30">
                      {lesson.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{lesson.studentsCount} студентов</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">{lesson.rating}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>Инструктор:</span>
                  <span className="text-foreground font-medium">{lesson.instructor}</span>
                </div>
              </CardContent>
            </Card>

            {/* Materials */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Материалы урока</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {lesson.materials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{material.name}</p>
                          <p className="text-sm text-muted-foreground">{material.size}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="border-muted-foreground/30">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground">Прогресс</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-light text-accent mb-2">{progress}%</div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {lesson.chapters.filter(c => c.completed).length} из {lesson.chapters.length} глав завершено
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chapters */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Содержание</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {lesson.chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                        chapter.completed 
                          ? 'bg-success/20 text-success-foreground' 
                          : 'bg-muted/30 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {chapter.completed ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <div>
                          <p className={`font-medium ${chapter.completed ? 'text-success-foreground' : 'text-foreground'}`}>
                            {chapter.title}
                          </p>
                          <p className="text-sm text-muted-foreground">{chapter.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground">Навигация</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {lesson.prevLesson && (
                  <Link to={`/lesson/${lesson.prevLesson.id}`}>
                    <Button variant="outline" className="w-full justify-start border-muted-foreground/30">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {lesson.prevLesson.title}
                    </Button>
                  </Link>
                )}
                
                {lesson.nextLesson && (
                  <Link to={`/lesson/${lesson.nextLesson.id}`}>
                    <Button className="w-full justify-start">
                      {lesson.nextLesson.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default LessonDetail; 