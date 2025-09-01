import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AIAssistant from '@/components/AIAssistant';
import { 
  BookOpen, 
  FileText, 
  Upload, 
  Download, 
  CheckCircle, 
  Clock, 
  Star,
  User,
  Calendar,
  Target,
  Award,
  AlertCircle,
  Send,
  Eye,
  Edit3,
  Trash2
} from 'lucide-react';

const AssignmentDetail = () => {
  const { assignmentId } = useParams();
  const [submission, setSubmission] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock data for assignment
  const assignment = {
    id: assignmentId || '1',
    title: 'Создание простой 2D игры на Unity',
    description: 'Разработайте простую 2D игру с использованием Unity и C#. Игра должна включать в себя базовую механику движения, сбор предметов и простую систему очков.',
    course: 'Unity Game Development',
    lesson: 'Основы 2D разработки',
    instructor: 'Александр Петров',
    dueDate: '2024-02-15',
    timeLeft: '3 дня',
    maxScore: 100,
    currentScore: 0,
    status: 'active', // active, submitted, graded
    category: 'Практическое задание',
    difficulty: 'Средний',
    estimatedTime: '4-6 часов',
    requirements: [
      'Игра должна запускаться без ошибок',
      'Реализовать движение персонажа с помощью клавиатуры',
      'Добавить систему сбора предметов',
      'Создать простой UI для отображения очков',
      'Код должен быть хорошо структурирован и прокомментирован'
    ],
    criteria: [
      { name: 'Функциональность', weight: 30, description: 'Игра работает корректно' },
      { name: 'Качество кода', weight: 25, description: 'Чистый и структурированный код' },
      { name: 'Дизайн', weight: 20, description: 'Визуальное оформление' },
      { name: 'Документация', weight: 15, description: 'Комментарии и README' },
      { name: 'Креативность', weight: 10, description: 'Уникальные идеи и решения' }
    ],
    resources: [
      { id: 1, name: 'Шаблон проекта Unity', type: 'zip', size: '15.2 MB' },
      { id: 2, name: 'Руководство по выполнению', type: 'pdf', size: '2.1 MB' },
      { id: 3, name: 'Примеры кода', type: 'txt', size: '45 KB' }
    ],
    submissions: [
      {
        id: 1,
        student: 'Иван Сидоров',
        submittedAt: '2024-02-10 14:30',
        status: 'graded',
        score: 85,
        feedback: 'Отличная работа! Код хорошо структурирован, но можно улучшить UI.'
      }
    ]
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Здесь будет логика отправки задания
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-accent/20 text-accent';
      case 'submitted': return 'bg-yellow-500/20 text-yellow-500';
      case 'graded': return 'bg-success/20 text-success';
      default: return 'bg-muted-foreground/20 text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активно';
      case 'submitted': return 'Отправлено';
      case 'graded': return 'Оценено';
      default: return 'Неизвестно';
    }
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
            <Link to="/assignments" className="hover:text-accent transition-colors">
              Задания
            </Link>
            <span>/</span>
            <span className="text-foreground">{assignment.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Assignment Header */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-light text-foreground mb-2">
                      {assignment.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {assignment.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{assignment.course}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{assignment.lesson}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="secondary" className={getStatusColor(assignment.status)}>
                      {getStatusText(assignment.status)}
                    </Badge>
                    <Badge variant="outline" className="border-muted-foreground/30">
                      {assignment.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Separator />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-light text-accent mb-1">{assignment.maxScore}</div>
                    <div className="text-muted-foreground">Макс. баллов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-accent mb-1">{assignment.estimatedTime}</div>
                    <div className="text-muted-foreground">Время выполнения</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-accent mb-1">{assignment.timeLeft}</div>
                    <div className="text-muted-foreground">Осталось времени</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-accent mb-1">{assignment.instructor}</div>
                    <div className="text-muted-foreground">Инструктор</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Требования к заданию</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {assignment.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Grading Criteria */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Критерии оценки</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {assignment.criteria.map((criterion, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">{criterion.name}</p>
                          <p className="text-sm text-muted-foreground">{criterion.description}</p>
                        </div>
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {criterion.weight}%
                        </Badge>
                      </div>
                      <Progress value={criterion.weight} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Submission Form */}
            {!isSubmitted && assignment.status === 'active' && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl font-light text-foreground flex items-center space-x-2">
                    <Edit3 className="w-5 h-5" />
                    <span>Отправить задание</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="submission">Описание решения</Label>
                    <Textarea
                      id="submission"
                      placeholder="Опишите ваше решение, подход и любые важные детали..."
                      value={submission}
                      onChange={(e) => setSubmission(e.target.value)}
                      className="min-h-[120px] bg-muted/30 border-muted-foreground/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Прикрепить файлы</Label>
                    <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Перетащите файлы сюда или нажмите для выбора
                      </p>
                      <Input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Label htmlFor="file-upload">
                        <Button variant="outline" size="sm" className="border-muted-foreground/30">
                          Выбрать файлы
                        </Button>
                      </Label>
                    </div>
                  </div>
                  
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <Label>Прикрепленные файлы</Label>
                      <div className="space-y-2">
                        {attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-accent" />
                              <span className="text-sm font-medium">{file.name}</span>
                              <span className="text-xs text-muted-foreground">
                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAttachment(index)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleSubmit}
                    className="w-full"
                    disabled={!submission.trim()}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Отправить задание
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Submitted Status */}
            {isSubmitted && (
              <Card className="glass-card border-success/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-success" />
                    <h3 className="text-xl font-light text-foreground mb-2">
                      Задание отправлено!
                    </h3>
                    <p className="text-muted-foreground">
                      Ваше задание успешно отправлено на проверку. Ожидайте оценки от инструктора.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Due Date */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Срок сдачи</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-light text-foreground mb-2">
                    {assignment.dueDate}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Осталось: {assignment.timeLeft}
                  </div>
                </div>
                
                {assignment.status === 'active' && (
                  <div className="text-center p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <AlertCircle className="w-5 h-5 mx-auto mb-2 text-yellow-500" />
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Не забудьте отправить задание вовремя!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Материалы</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {assignment.resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{resource.name}</p>
                          <p className="text-sm text-muted-foreground">{resource.size}</p>
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

            {/* Previous Submissions */}
            {assignment.submissions.length > 0 && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg font-light text-foreground flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Предыдущие отправки</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {assignment.submissions.map((submission) => (
                      <div key={submission.id} className="p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {submission.student}
                          </span>
                          <Badge variant="secondary" className="bg-success/20 text-success">
                            {submission.score}/{assignment.maxScore}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {submission.submittedAt}
                        </p>
                        <p className="text-sm text-foreground">
                          {submission.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default AssignmentDetail; 