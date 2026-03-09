import { Project, Skill, TimelineItem, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern E-commerce Platform',
    description: 'A high-performance online store built with React and Node.js.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'Leveraging Gemini API to generate creative content for marketers.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Gemini API', 'TypeScript', 'Motion'],
    link: '#'
  },
  {
    id: '3',
    title: 'Financial Dashboard',
    description: 'Real-time data visualization for personal finance management.',
    image: 'https://picsum.photos/seed/finance/800/600',
    tags: ['D3.js', 'React', 'Firebase'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 98 },
  { name: 'Java', category: 'Backend', level: 88 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'MySQL', category: 'Backend', level: 92 },
  { name: 'PostgreSQL', category: 'Backend', level: 80 },
  { name: 'Spring Boot', category: 'Backend', level: 82 },
  { name: 'Figma', category: 'Design', level: 88 },
  { name: 'Git', category: 'Tools', level: 92 },
  { name: 'Docker', category: 'Tools', level: 75 },
  { name: 'IntelliJ IDEA', category: 'Tools', level: 90 }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2025 - Present',
    title: 'Junior Full Stack Developer',
    company: 'Cypso Labs',
    description: 'Started My journey in full stack development'
  },
  {
    year: '2024 - Present',
    title: 'B.Eng(Hons) Software Engineering',
    company: 'Informatics Institute of Technology (IIT)',
    description: 'Started My Degree in Software Engineering.'
  },
  {
    year: '2021 - 2023',
    title: 'Diploma in GDSE',
    company: 'Institute of Java and Software Engineering (IJSE)',
    description: 'Started Foundation of Software Engineering Journey.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance websites using the latest technologies.',
    icon: 'Code'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide great experiences.',
    icon: 'Palette'
  },
  {
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone'
  }
];
