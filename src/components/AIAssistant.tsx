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

  const toggleMaximize = () => {
    if (isMaximized) {
      setWindowSize({ width: 320, height: 480 });
    } else {
      setWindowSize({ width: Math.min(600, window.innerWidth - 48), height: Math.min(700, window.innerHeight - 48) });
    }
    setIsMaximized(!isMaximized);
  };

  // Обработчики изменения размера
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isMaximized) return;
    
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: windowSize.width,
      height: windowSize.height
    });
  }, [isMaximized, windowSize]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return;

    const deltaX = e.clientX - resizeStart.x;
    const deltaY = e.clientY - resizeStart.y;

    const newWidth = Math.max(280, Math.min(800, resizeStart.width + deltaX));
    const newHeight = Math.max(400, Math.min(900, resizeStart.height + deltaY));

    setWindowSize({ width: newWidth, height: newHeight });
  }, [isResizing, resizeStart]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  // Эффекты для обработки событий мыши
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  // Обработка изменения размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (isMaximized) {
        setWindowSize({ 
          width: Math.min(600, window.innerWidth - 48), 
          height: Math.min(700, window.innerHeight - 48) 
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized]);

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
    <div 
      ref={windowRef}
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out"
      style={{ 
        width: isMaximized ? 'calc(100vw - 48px)' : `${windowSize.width}px`,
        height: isMaximized ? 'calc(100vh - 48px)' : `${windowSize.height}px`,
        maxWidth: isMaximized ? 'none' : '800px',
        maxHeight: isMaximized ? 'none' : '900px',
        minWidth: isMaximized ? 'none' : '280px',
        minHeight: isMaximized ? 'none' : '400px'
      }}
    >
      <Card className="glass-card shadow-2xl border-accent/20 h-full flex flex-col">
        <CardHeader className="pb-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-accent to-accent/80 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <CardTitle className="text-sm sm:text-lg font-medium text-foreground truncate">
                  Shu Assistant
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-500 text-xs">
                    Онлайн
                  </Badge>
                  {!isMaximized && (
                    <Badge variant="outline" className="border-muted-foreground/30 text-xs hidden sm:inline-flex">
                      {windowSize.width}×{windowSize.height}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMinimize}
                className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-muted/50"
                title={isMinimized ? 'Развернуть' : 'Свернуть'}
              >
                {isMinimized ? <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMaximize}
                className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-muted/50"
                title={isMaximized ? 'Восстановить' : 'Развернуть на весь экран'}
              >
                {isMaximized ? <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-muted/50"
                title="Закрыть"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="space-y-4 flex-1 overflow-hidden flex flex-col">
              {/* Быстрые действия */}
              <div className="space-y-2 flex-shrink-0">
                <p className="text-sm text-muted-foreground font-medium">
                  Быстрые действия:
                </p>
                <div className={`grid gap-2 ${
                  windowSize.width > 400 ? 'grid-cols-2' : 'grid-cols-1'
                }`}>
                  {quickActions.map((action) => (
                    <Button
                      key={action.id}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="justify-start border-muted-foreground/30 hover:border-accent hover:text-accent h-auto py-2 px-3 text-xs sm:text-sm"
                    >
                      {action.icon}
                      <span className="ml-2 text-left truncate">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Диалог */}
              <div className="space-y-3 flex-1 flex flex-col min-h-0">
                <p className="text-sm text-muted-foreground font-medium flex-shrink-0">
                  Диалог:
                </p>
                <div className="flex-1 overflow-y-auto space-y-3 pr-2 min-h-0">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${
                          message.type === 'user'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted/50 text-foreground'
                        }`}
                      >
                        <div className="whitespace-pre-line break-words">{message.content}</div>
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
              <div className="text-center flex-shrink-0">
                <Badge variant="outline" className="border-muted-foreground/30 text-xs">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">ИИ помощник готов помочь</span>
                  <span className="sm:hidden">Готов помочь</span>
                </Badge>
              </div>
            </CardContent>
          </>
        )}
        
        {/* Ручка изменения размера */}
        {!isMinimized && !isMaximized && (
          <div
            ref={resizeHandleRef}
            className="absolute bottom-0 right-0 w-8 h-8 cursor-se-resize opacity-0 hover:opacity-100 transition-opacity duration-200 group"
            onMouseDown={handleMouseDown}
            title="Изменить размер (перетащите для изменения размера окна)"
          >
            <div className="w-full h-full flex items-end justify-end p-1">
              <div className="w-4 h-4 border-r-2 border-b-2 border-accent/50 rounded-br-sm group-hover:border-accent transition-colors duration-200"></div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AIAssistant; 