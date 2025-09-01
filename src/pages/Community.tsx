import Header from '@/components/Header';
import { MessageSquare, ThumbsUp, Share, Clock, Users, Trophy, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import AIAssistant from '@/components/AIAssistant';

const Community = () => {
  const discussions = [
    {
      id: '1',
      title: 'Как оптимизировать производительность в Unity?',
      author: 'Алексей Иванов',
      avatar: 'AI',
      category: 'Unity',
      replies: 12,
      likes: 24,
      timeAgo: '2 часа назад',
      tags: ['Unity', 'Оптимизация', 'Performance'],
      excerpt: 'Работаю над мобильной игрой и столкнулся с проблемами производительности. Какие есть лучшие практики для оптимизации?',
      isPopular: true
    },
    {
      id: '2',
      title: 'Лучшие ресурсы для изучения Blender',
      author: 'Мария Петрова',
      avatar: 'МП',
      category: 'Арт',
      replies: 8,
      likes: 15,
      timeAgo: '4 часа назад',
      tags: ['Blender', '3D', 'Моделирование'],
      excerpt: 'Собираю список качественных туториалов и курсов по Blender для начинающих 3D художников.',
      isPopular: false
    },
    {
      id: '3',
      title: 'Showcase: Моя первая законченная игра!',
      author: 'Дмитрий Козлов',
      avatar: 'ДК',
      category: 'Showcase',
      replies: 25,
      likes: 87,
      timeAgo: '6 часов назад',
      tags: ['Showcase', 'Indie', '2D'],
      excerpt: 'Наконец-то завершил свой первый проект! 2D платформер с пиксель-артом. Делюсь опытом и получившимся результатом.',
      isPopular: true,
      hasImage: true
    },
    {
      id: '4',
      title: 'Проблемы с анимациями персонажа в Unreal Engine',
      author: 'Анна Сидорова',
      avatar: 'АС',
      category: 'Unreal Engine',
      replies: 5,
      likes: 9,
      timeAgo: '1 день назад',
      tags: ['Unreal Engine', 'Animation', 'Blueprint'],
      excerpt: 'Не могу настроить плавные переходы между анимациями в Animation Blueprint. Подскажите, где искать проблему?',
      isPopular: false
    }
  ];

  const topContributors = [
    {
      name: 'Динара Абаевна',
      avatar: 'ДА',
      points: 2540,
      badge: 'Эксперт Unity',
      contributions: 156
    },
    {
      name: 'Тахмина Сардарян',
      avatar: 'ТС',
      points: 1890,
      badge: '3D Гуру',
      contributions: 124
    },
    {
      name: 'Владимир Кузнецов',
      avatar: 'ВК',
      points: 1650,
      badge: 'C# Мастер',
      contributions: 98
    }
  ];

  const categories = [
    { name: 'Все', count: 156, active: true },
    { name: 'Unity', count: 45, active: false },
    { name: 'Unreal Engine', count: 23, active: false },
    { name: 'Программирование', count: 38, active: false },
    { name: 'Арт и анимация', count: 28, active: false },
    { name: 'Showcase', count: 22, active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Сообщество</h1>
          <p className="text-muted-foreground">
            Общайтесь с другими разработчиками, делитесь опытом и получайте помощь
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="discussions" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="discussions">Обсуждения</TabsTrigger>
                  <TabsTrigger value="showcase">Showcase</TabsTrigger>
                  <TabsTrigger value="questions">Вопросы</TabsTrigger>
                </TabsList>
                
                <Button>Создать пост</Button>
              </div>

              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.name}
                    variant={category.active ? 'default' : 'outline'}
                    size="sm"
                    className={!category.active ? 'border-muted-foreground/30 hover:border-accent hover:text-accent' : ''}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              <TabsContent value="discussions" className="space-y-4">
                {discussions.map(discussion => (
                  <div key={discussion.id} className="glass-card p-6 rounded-lg hover:shadow-elevated transition-shadow cursor-pointer">
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarFallback className="bg-accent/20 text-accent text-sm font-medium">
                          {discussion.avatar}
                        </AvatarFallback>
                      </Avatar>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-2">
                          {discussion.isPopular && (
                            <Badge variant="secondary" className="bg-accent/20 text-accent">
                              🔥 Популярно
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {discussion.category}
                          </Badge>
                        </div>

                        {/* Title */}
                        <Link to={`/community/question/${discussion.id}`}>
                          <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-accent transition-colors">
                            {discussion.title}
                          </h3>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {discussion.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {discussion.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-muted/50">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span>от {discussion.author}</span>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {discussion.timeAgo}
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {discussion.likes}
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {discussion.replies}
                            </div>
                            <Button variant="ghost" size="sm">
                              <Share className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="showcase">
                <div className="text-center py-12">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Покажите свои проекты</h3>
                  <p className="text-muted-foreground mb-4">
                    Делитесь своими играми и получайте отзывы от сообщества
                  </p>
                  <Button>Добавить проект</Button>
                </div>
              </TabsContent>

              <TabsContent value="questions">
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Задайте вопрос</h3>
                  <p className="text-muted-foreground mb-4">
                    Получите помощь от опытных разработчиков
                  </p>
                  <Button>Задать вопрос</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-accent" />
                Топ участники
              </h3>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.name} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      {index + 1}
                    </div>
                    
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-muted text-xs">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-foreground">
                        {contributor.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {contributor.points} баллов
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="text-xs bg-accent/20 text-accent">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-accent" />
                Статистика
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Участников:</span>
                  <span className="font-medium">15,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Обсуждений:</span>
                  <span className="font-medium">1,892</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Проектов:</span>
                  <span className="font-medium">456</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Онлайн сейчас:</span>
                  <span className="font-medium text-accent">324</span>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Правила сообщества
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Будьте уважительны к другим участникам</li>
                <li>• Используйте поиск перед созданием темы</li>
                <li>• Добавляйте теги к своим постам</li>
                <li>• Делитесь конструктивной критикой</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Community;