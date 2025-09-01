import { useState } from 'react';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { mockCourses, courseCategories } from '@/data/mockCourses';
import AIAssistant from '@/components/AIAssistant';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все программы');
  const [selectedLevel, setSelectedLevel] = useState('Все уровни');

  const levels = ['Все уровни', 'Начинающий', 'Средний', 'Продвинутый'];

  // Filter courses based on search and filters
  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Все программы' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Все уровни' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">Эксклюзивные программы</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Платформа для изучения разработки игр от ведущих экспертов индустрии
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск программ, экспертов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border/30 text-base py-3"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {courseCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? '' : 'border-muted-foreground/30 hover:border-accent hover:text-accent'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Level Filters */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className="text-sm"
                >
                  {level}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 text-base text-muted-foreground font-medium">
              <SlidersHorizontal className="w-5 h-5" />
              <span>{filteredCourses.length} программ найдено</span>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategory !== 'Все программы' || selectedLevel !== 'Все уровни' || searchQuery) && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Активные фильтры:</span>
            
            {searchQuery && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                Поиск: "{searchQuery}"
                <button 
                  onClick={() => setSearchQuery('')}
                  className="ml-2 hover:text-accent-foreground"
                >
                  ×
                </button>
              </Badge>
            )}
            
            {selectedCategory !== 'Все программы' && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory('Все программы')}
                  className="ml-2 hover:text-accent-foreground"
                >
                  ×
                </button>
              </Badge>
            )}
            
            {selectedLevel !== 'Все уровни' && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                {selectedLevel}
                <button 
                  onClick={() => setSelectedLevel('Все уровни')}
                  className="ml-2 hover:text-accent-foreground"
                >
                  ×
                </button>
              </Badge>
            )}
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Все программы');
                setSelectedLevel('Все уровни');
              }}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Сбросить все
            </Button>
          </div>
        )}

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-light text-foreground mb-2">
              Программы не найдены
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              Попробуйте изменить критерии поиска или свяжитесь с нашими консультантами
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Все программы');
                setSelectedLevel('Все уровни');
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Courses;