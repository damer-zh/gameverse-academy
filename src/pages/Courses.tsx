import { useState } from 'react';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { mockCourses, courseCategories } from '@/data/mockCourses';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все курсы');
  const [selectedLevel, setSelectedLevel] = useState('Все уровни');

  const levels = ['Все уровни', 'Начинающий', 'Средний', 'Продвинутый'];

  // Filter courses based on search and filters
  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Все курсы' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Все уровни' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Все курсы</h1>
          <p className="text-muted-foreground">
            Найдите идеальный курс для изучения разработки игр
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск курсов, преподавателей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50"
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
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="w-4 h-4" />
              <span>{filteredCourses.length} курсов найдено</span>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategory !== 'Все курсы' || selectedLevel !== 'Все уровни' || searchQuery) && (
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
            
            {selectedCategory !== 'Все курсы' && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory('Все курсы')}
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
                setSelectedCategory('Все курсы');
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
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Курсы не найдены
            </h3>
            <p className="text-muted-foreground mb-4">
              Попробуйте изменить критерии поиска или фильтры
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Все курсы');
                setSelectedLevel('Все уровни');
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;