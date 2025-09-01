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
    title: 'Unity для начинающих: создание 2D игр',
    description: 'Изучите основы Unity и создайте свою первую 2D игру с анимациями, физикой и звуковыми эффектами.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop',
    instructor: 'Александр Петров',
    rating: 4.8,
    duration: '24 часа',
    students: 5420,
    level: 'Начинающий',
    price: '4,990₽',
    category: 'Unity'
  },
  {
    id: '2',
    title: 'Продвинутая 3D разработка в Unity',
    description: 'Освойте продвинутые техники 3D разработки: освещение, шейдеры, оптимизация производительности.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
    instructor: 'Мария Сидорова',
    rating: 4.9,
    duration: '40 часов',
    students: 3280,
    level: 'Продвинутый',
    price: '7,990₽',
    category: 'Unity'
  },
  {
    id: '3',
    title: 'C# для геймдева: полный курс',
    description: 'Изучите C# с нуля до продвинутого уровня специально для разработки игр.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop',
    instructor: 'Дмитрий Козлов',
    rating: 4.7,
    duration: '35 часов',
    students: 6750,
    level: 'Средний',
    price: '5,990₽',
    category: 'Программирование'
  },
  {
    id: '4',
    title: 'Unreal Engine 5: Blueprint и визуальное программирование',
    description: 'Создавайте игры без кода используя Blueprint в Unreal Engine 5.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=225&fit=crop',
    instructor: 'Игорь Волков',
    rating: 4.6,
    duration: '28 часов',
    students: 2190,
    level: 'Начинающий',
    price: '6,990₽',
    category: 'Unreal Engine'
  },
  {
    id: '5',
    title: 'Мобильная разработка игр: от идеи до Google Play',
    description: 'Полный цикл создания мобильной игры: разработка, монетизация, публикация.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop',
    instructor: 'Анна Кузнецова',
    rating: 4.5,
    duration: '32 часа',
    students: 4850,
    level: 'Средний',
    price: '8,990₽',
    category: 'Мобильная разработка'
  },
  {
    id: '6',
    title: 'Создание RPG игры: системы и механики',
    description: 'Изучите создание сложных игровых систем: инвентарь, прогрессия, квесты.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=225&fit=crop',
    instructor: 'Владимир Смирнов',
    rating: 4.8,
    duration: '45 часов',
    students: 1920,
    level: 'Продвинутый',
    price: '12,990₽',
    isEnrolled: true,
    progress: 65,
    category: 'Геймдизайн'
  }
];

export const enrolledCourses = mockCourses.filter(course => course.isEnrolled);

export const popularCourses = mockCourses.sort((a, b) => b.students - a.students).slice(0, 6);

export const newCourses = mockCourses.slice(-4);

export const courseCategories = [
  'Все курсы',
  'Unity',
  'Unreal Engine',
  'Программирование',
  'Геймдизайн',
  'Мобильная разработка',
  'VR/AR',
  'Арт и анимация'
];