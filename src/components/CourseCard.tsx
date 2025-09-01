import { Star, Clock, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
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

const CourseCard = ({ 
  id,
  title, 
  description, 
  image, 
  instructor, 
  rating, 
  duration, 
  students, 
  level, 
  price, 
  isEnrolled = false,
  progress = 0 
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий': return 'bg-secondary text-secondary-foreground';
      case 'Средний': return 'bg-accent text-accent-foreground';
      case 'Продвинутый': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="course-card group">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="lg" variant="premium" className="bg-accent/90 hover:bg-accent text-accent-foreground shadow-lg">
            <Play className="w-5 h-5 mr-2" />
            {isEnrolled ? 'Продолжить' : 'Подробнее'}
          </Button>
        </div>

        {/* Progress Bar (if enrolled) */}
        {isEnrolled && progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
            <div 
              className="h-full bg-accent transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary" className={getLevelColor(level)}>
            {level}
          </Badge>
          {price && !isEnrolled && (
            <span className="text-lg font-semibold text-accent">{price}</span>
          )}
        </div>

        {/* Title and Instructor */}
        <h3 className="text-xl font-light text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-base text-muted-foreground mb-4 font-medium">Эксперт: {instructor}</p>

        {/* Description */}
        <p className="text-base text-muted-foreground mb-6 line-clamp-3 leading-relaxed font-light">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6 font-medium">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-accent text-accent mr-2" />
            <span>{rating}/5</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>{students} студентов</span>
          </div>
        </div>

        {/* Action Button */}
        {isEnrolled ? (
          <Button className="w-full" variant="default" size="lg">
            Продолжить обучение {progress > 0 && `(${progress}%)`}
          </Button>
        ) : (
          <Button className="w-full" variant="luxury" size="lg">
            Подать заявку
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;