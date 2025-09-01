import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Graphic */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-accent/20 mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Error Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Страница не найдена
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Извините, но страница, которую вы ищете, не существует. 
            Возможно, она была перемещена или удалена.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/">
                Вернуться на главную
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="/courses">
                Посмотреть курсы
              </a>
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-12 glass-card p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Нужна помощь?
            </h2>
            <p className="text-sm text-muted-foreground">
              Если вы считаете, что это ошибка, свяжитесь с нашей службой поддержки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
