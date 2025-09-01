export interface Course {
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
  category: string;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Unity: Полное мастерство разработки',
    description: 'Эксклюзивная программа изучения Unity от основ до экспертного уровня с индивидуальным наставничеством.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop',
    instructor: 'Александр Петров',
    rating: 4.9,
    duration: '6 месяцев',
    students: 124,
    level: 'Продвинутый',
    price: '180,000₽',
    category: 'Unity'
  },
  {
    id: '2',
    title: 'Архитектура игровых систем',
    description: 'Глубокое изучение проектирования и реализации сложных игровых систем и архитектурных паттернов.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    instructor: 'Мария Сидорова',
    rating: 4.8,
    duration: '4 месяца',
    students: 89,
    level: 'Продвинутый',
    price: '150,000₽',
    category: 'Unity'
  },
  {
    id: '3',
    title: 'C# для профессиональной разработки игр',
    description: 'Продвинутые техники программирования на C# специально для высокопроизводительных игр.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop',
    instructor: 'Дмитрий Козлов',
    rating: 4.7,
    duration: '3 месяца',
    students: 156,
    level: 'Средний',
    price: '120,000₽',
    category: 'Программирование'
  },
  {
    id: '4',
    title: 'Unreal Engine: Визуальное программирование',
    description: 'Мастерское владение Blueprint-системой и создание AAA-игр без программирования.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=225&fit=crop',
    instructor: 'Динара Абаевна',
    rating: 4.6,
    duration: '5 месяцев',
    students: 67,
    level: 'Средний',
    price: '165,000₽',
    category: 'Unreal Engine'
  },
  {
    id: '5',
    title: 'Коммерческая разработка мобильных игр',
    description: 'Полный цикл создания и монетизации мобильных игр от концепции до миллионных загрузок.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop',
    instructor: 'Анна Кузнецова',
    rating: 4.5,
    duration: '4 месяца',
    students: 98,
    level: 'Продвинутый',
    price: '175,000₽',
    category: 'Мобильная разработка'
  },
  {
    id: '6',
    title: 'Системы RPG: от дизайна до реализации',
    description: 'Создание сложных RPG-систем: прогрессия персонажей, экономика, нарратив, баланс.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=225&fit=crop',
    instructor: 'Владимир Смирнов',
    rating: 4.8,
    duration: '7 месяцев',
    students: 45,
    level: 'Продвинутый',
    price: '220,000₽',
    isEnrolled: true,
    progress: 65,
    category: 'Геймдизайн'
  }
];

export const enrolledCourses = mockCourses.filter(course => course.isEnrolled);

export const popularCourses = mockCourses.sort((a, b) => b.students - a.students).slice(0, 6);

export const newCourses = mockCourses.slice(-4);

export const courseCategories = [
  'Все программы',
  'Unity',
  'Unreal Engine',
  'Программирование',
  'Геймдизайн',
  'Мобильная разработка',
  'VR/AR',
  'Техническое искусство'
];