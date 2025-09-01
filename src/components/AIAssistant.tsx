import { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  X, 
  MessageCircle, 
  BookOpen, 
  Lightbulb,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Maximize2,
  Minimize2
} from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 320, height: 480 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
  const windowRef = useRef<HTMLDivElement>(null);
  const resizeHandleRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'assistant', content: string, timestamp: Date }>>([
    {
      type: 'assistant',
      content: 'Привет! Я ваш ИИ помощник Shu School. Чем могу помочь?',
      timestamp: new Date()
    }
  ]);

  const quickActions = [
    {
      id: 'courses',
      title: 'Рекомендовать курс',
      icon: <BookOpen className="w-4 h-4" />,
      action: () => handleQuickAction('courses')
    },
    {
      id: 'help',
      title: 'Как учиться',
      icon: <Lightbulb className="w-4 h-4" />,
      action: () => handleQuickAction('help')
    },
    {
      id: 'motivation',
      title: 'Мотивация',
      icon: <Sparkles className="w-4 h-4" />,
      action: () => handleQuickAction('motivation')
    }
  ];

  const handleQuickAction = (action: string) => {
    let response = '';
    
    switch (action) {
      case 'courses':
        response = 'Отлично! Для начинающих рекомендую курс "Unity для начинающих" - он даст вам прочную основу. Если уже знакомы с Unity, попробуйте "Продвинутую Unity разработку". А для программистов - "C# для геймдева" будет идеальным выбором! 🎮';
        break;
      case 'help':
        response = 'Вот мой совет по эффективному обучению:\n\n1️⃣ Уделяйте практике минимум 1-2 часа в день\n2️⃣ Не пропускайте задания - они закрепляют знания\n3️⃣ Присоединяйтесь к сообществу для обмена опытом\n4️⃣ Создавайте собственные проекты параллельно с курсом\n5️⃣ Не бойтесь ошибок - они лучшие учителя! 💪';
        break;
      case 'motivation':
        response = 'Помните: каждый великий разработчик игр когда-то был новичком! 🚀\n\nВаши первые игры могут быть простыми, но каждая строчка кода приближает вас к мечте. Смотрите на Minecraft - он начинался с простых блоков, а стал легендой!\n\nГлавное - не останавливаться. Каждый день вы становитесь лучше! ⭐';
        break;
      default:
        response = 'Извините, я не понимаю эту команду. Попробуйте одну из предложенных кнопок!';
    }

    // Добавляем сообщение пользователя
    setMessages(prev => [...prev, {
      type: 'user',
      content: quickActions.find(qa => qa.id === action)?.title || 'Действие',
      timestamp: new Date()
    }]);

    // Добавляем ответ помощника
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: response,
        timestamp: new Date()
      }]);
    }, 500);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Bot className="w-8 h-8" />
        </Button>
        
        {/* Пульсирующий индикатор */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        
        {/* Подсказка */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-card text-card-foreground text-sm rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          ИИ помощник Shu School
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      <Card className="glass-card shadow-2xl border-accent/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent/80 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-medium text-foreground">
                  Shu Assistant
                </CardTitle>
                <Badge variant="secondary" className="bg-green-500/20 text-green-500 text-xs">
                  Онлайн
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMinimize}
                className="h-8 w-8 p-0 hover:bg-muted/50"
              >
                {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-muted/50"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="space-y-4">
              {/* Быстрые действия */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">
                  Быстрые действия:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.id}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="justify-start border-muted-foreground/30 hover:border-accent hover:text-accent h-auto py-2 px-3"
                    >
                      {action.icon}
                      <span className="ml-2 text-left">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Диалог */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">
                  Диалог:
                </p>
                <div className="max-h-48 overflow-y-auto space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.type === 'user'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted/50 text-foreground'
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.content}</div>
                        <div className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-accent-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString('ru-RU', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Статус */}
              <div className="text-center">
                <Badge variant="outline" className="border-muted-foreground/30 text-xs">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  ИИ помощник готов помочь
                </Badge>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default AIAssistant; 