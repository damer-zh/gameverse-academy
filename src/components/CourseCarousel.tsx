import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  rating: number;
  duration: string;
  students: number;
  level: 'Начинающий' | 'Средний' | 'Продвинутый';
  price?: string;
  isEnrolled?: boolean;
  progress?: number;
}

interface CourseCarouselProps {
  title: string;
  subtitle?: string;
  courses: Course[];
}

const CourseCarousel = ({ title, subtitle, courses }: CourseCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScroll = scrollRef.current.scrollLeft;
      
      scrollRef.current.scrollTo({
        left: direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!courses.length) return null;

  return (
    <section className="mb-12 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-1">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scroll('left')}
            className="hover:bg-muted/50 text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scroll('right')}
            className="hover:bg-muted/50 text-muted-foreground hover:text-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="flex-none w-80 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Mobile Navigation Hint */}
      <div className="md:hidden mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Прокрутите горизонтально для просмотра всех курсов
        </p>
      </div>
    </section>
  );
};

export default CourseCarousel;