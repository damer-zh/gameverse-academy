import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import AIAssistant from '@/components/AIAssistant';
import { 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Flag, 
  User, 
  Clock, 
  Eye,
  Tag,
  Award,
  CheckCircle,
  Edit3,
  Trash2,
  Reply,
  Heart
} from 'lucide-react';

const CommunityQuestion = () => {
  const { questionId } = useParams();
  const [newAnswer, setNewAnswer] = useState('');
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  // Mock data for question
  const question = {
    id: questionId || '1',
    title: 'Как оптимизировать производительность в Unity для мобильных устройств?',
    content: `Я разрабатываю 3D игру для мобильных устройств на Unity и столкнулся с проблемами производительности. FPS падает до 20-25 на средних настройках графики.

Основные проблемы:
- Высокое потребление памяти
- Низкий FPS в сложных сценах
- Долгая загрузка уровней

Использую:
- Unity 2022.3 LTS
- URP (Universal Render Pipeline)
- LOD системы
- Occlusion Culling

Какие техники оптимизации вы можете порекомендовать? Особенно интересуют:
1. Настройки качества URP
2. Оптимизация текстур и материалов
3. Управление памятью
4. Профилирование производительности

Заранее спасибо за помощь!`,
    author: {
      name: 'Михаил Козлов',
      avatar: '/avatars/mikhail.jpg',
      reputation: 1250,
      badges: ['Unity Expert', 'Mobile Developer']
    },
    createdAt: '2024-02-08 10:30',
    views: 847,
    votes: 23,
    tags: ['Unity', 'Оптимизация', 'Мобильная разработка', 'Производительность'],
    category: 'Разработка игр',
    status: 'open', // open, answered, solved
    answers: [
      {
        id: 1,
        author: {
          name: 'Анна Смирнова',
          avatar: '/avatars/anna.jpg',
          reputation: 2100,
          badges: ['Senior Developer', 'Performance Expert'],
          isInstructor: true
        },
        content: `Отличный вопрос! Вот основные техники оптимизации для мобильных устройств:

**1. Настройки URP:**
- Уменьшите Shadow Distance до 50-100
- Отключите Soft Shadows
- Используйте Forward Rendering для мобильных
- Ограничьте количество Light Sources

**2. Оптимизация текстур:**
- Используйте ASTC сжатие (6x6 для UI, 8x8 для 3D)
- Применяйте Texture Streaming
- Оптимизируйте размеры текстур (степени 2)

**3. Управление памятью:**
- Используйте Object Pooling
- Применяйте Asset Bundles
- Очищайте неиспользуемые ресурсы

**4. Профилирование:**
- Unity Profiler
- Frame Debugger
- Memory Profiler

Рекомендую начать с анализа через Profiler - это покажет узкие места.`,
        createdAt: '2024-02-08 14:15',
        votes: 15,
        isAccepted: false,
        comments: [
          {
            id: 1,
            author: 'Михаил Козлов',
            content: 'Спасибо за подробный ответ! А какие настройки Shadow Quality вы рекомендуете?',
            createdAt: '2024-02-08 15:00'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Дмитрий Волков',
          avatar: '/avatars/dmitry.jpg',
          reputation: 890,
          badges: ['Mobile Developer']
        },
        content: `Добавлю к предыдущему ответу:

**LOD настройки:**
- Уменьшите LOD Bias до 0.5-0.7
- Используйте LOD Groups для сложных объектов
- Применяйте Mesh Simplification

**Shader оптимизация:**
- Избегайте сложных шейдеров
- Используйте Mobile Shader Variants
- Ограничьте количество Pass в шейдерах

**Скрипты:**
- Кэшируйте GetComponent вызовы
- Используйте Coroutines вместо Update где возможно
- Применяйте Object Pooling для часто создаваемых объектов

Попробуйте эти техники - должны помочь с производительностью.`,
        createdAt: '2024-02-08 16:45',
        votes: 8,
        isAccepted: false,
        comments: []
      }
    ],
    comments: [
      {
        id: 1,
        author: 'Елена Петрова',
        content: 'Тоже интересуюсь этой темой. Буду следить за ответами!',
        createdAt: '2024-02-08 11:00'
      }
    ]
  };

  const handleVote = (type: 'up' | 'down', target: 'question' | 'answer', id?: number) => {
    // Логика голосования
    console.log(`${type} vote for ${target}`, id);
  };

  const handleSubmitAnswer = () => {
    // Логика отправки ответа
    console.log('Submitting answer:', newAnswer);
    setNewAnswer('');
    setShowAnswerForm(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/community" className="hover:text-accent transition-colors">
              Сообщество
            </Link>
            <span>/</span>
            <span className="text-foreground">{question.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Question */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        {question.category}
                      </Badge>
                      <Badge variant="outline" className="border-muted-foreground/30">
                        {question.status === 'open' ? 'Открыт' : 'Решен'}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl font-light text-foreground mb-4">
                      {question.title}
                    </CardTitle>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{formatDate(question.createdAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{question.views} просмотров</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="hover:bg-muted/50">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-muted/50">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-muted/50">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Question Content */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {question.content}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {question.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-muted-foreground/30 hover:border-accent">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Separator />
                
                {/* Question Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote('up', 'question')}
                        className="hover:bg-muted/50"
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <span className="text-foreground font-medium">{question.votes}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote('down', 'question')}
                        className="hover:bg-muted/50"
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="hover:bg-muted/50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Комментировать
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={question.author.avatar} />
                      <AvatarFallback className="bg-accent/20 text-accent">
                        {question.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{question.author.name}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">
                          {question.author.reputation} репутация
                        </span>
                        {question.author.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs bg-accent/20 text-accent">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Answers */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-light text-foreground">
                  {question.answers.length} ответов
                </h2>
                
                {!showAnswerForm && (
                  <Button onClick={() => setShowAnswerForm(true)}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ответить
                  </Button>
                )}
              </div>
              
              {question.answers.map((answer) => (
                <Card key={answer.id} className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex space-x-4">
                      {/* Vote Sidebar */}
                      <div className="flex flex-col items-center space-y-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleVote('up', 'answer', answer.id)}
                          className="hover:bg-muted/50"
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <span className="text-foreground font-medium">{answer.votes}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleVote('down', 'answer', answer.id)}
                          className="hover:bg-muted/50"
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                        
                        {answer.isAccepted && (
                          <div className="mt-2">
                            <CheckCircle className="w-6 h-6 text-success" />
                          </div>
                        )}
                      </div>
                      
                      {/* Answer Content */}
                      <div className="flex-1 space-y-4">
                        <div className="prose prose-invert max-w-none">
                          <p className="text-foreground leading-relaxed whitespace-pre-line">
                            {answer.content}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="hover:bg-muted/50">
                              <Reply className="w-4 h-4 mr-2" />
                              Ответить
                            </Button>
                            
                            <Button variant="ghost" size="sm" className="hover:bg-muted/50">
                              <Heart className="w-4 h-4 mr-2" />
                              Поблагодарить
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={answer.author.avatar} />
                              <AvatarFallback className="bg-accent/20 text-accent text-xs">
                                {answer.author.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-right">
                              <p className="text-sm font-medium text-foreground flex items-center space-x-2">
                                {answer.author.name}
                                {answer.author.isInstructor && (
                                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-500 text-xs">
                                    Инструктор
                                  </Badge>
                                )}
                              </p>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-muted-foreground">
                                  {answer.author.reputation} репутация
                                </span>
                                {answer.author.badges.map((badge) => (
                                  <Badge key={badge} variant="secondary" className="text-xs bg-accent/20 text-accent">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(answer.createdAt)}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Comments */}
                        {answer.comments.length > 0 && (
                          <div className="ml-8 space-y-3">
                            {answer.comments.map((comment) => (
                              <div key={comment.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                                <Avatar className="w-6 h-6">
                                  <AvatarFallback className="bg-accent/20 text-accent text-xs">
                                    {comment.author.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <p className="text-sm text-foreground">{comment.content}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {comment.author} • {formatDate(comment.createdAt)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Answer Form */}
            {showAnswerForm && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg font-light text-foreground">
                    Ваш ответ
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Напишите подробный ответ на вопрос..."
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    className="min-h-[200px] bg-muted/30 border-muted-foreground/30"
                  />
                  
                  <div className="flex items-center justify-end space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => setShowAnswerForm(false)}
                      className="border-muted-foreground/30"
                    >
                      Отмена
                    </Button>
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={!newAnswer.trim()}
                    >
                      Отправить ответ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Questions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground">
                  Похожие вопросы
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <Link to="/community/question/2" className="block hover:text-accent transition-colors">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Оптимизация шейдеров для мобильных устройств
                    </p>
                    <p className="text-xs text-muted-foreground">12 ответов • 2 дня назад</p>
                  </Link>
                  
                  <Link to="/community/question/3" className="block hover:text-accent transition-colors">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Как уменьшить размер сборки Unity для мобильных
                    </p>
                    <p className="text-xs text-muted-foreground">8 ответов • 5 дней назад</p>
                  </Link>
                  
                  <Link to="/community/question/4" className="block hover:text-accent transition-colors">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Лучшие практики для URP на мобильных
                    </p>
                    <p className="text-xs text-muted-foreground">15 ответов • неделю назад</p>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light text-foreground">
                  Статистика сообщества
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-light text-accent mb-2">2,847</div>
                  <div className="text-sm text-muted-foreground">Активных участников</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-light text-accent mb-2">15,234</div>
                  <div className="text-sm text-muted-foreground">Вопросов задано</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-light text-accent mb-2">89%</div>
                  <div className="text-sm text-muted-foreground">Вопросов решено</div>
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

export default CommunityQuestion; 