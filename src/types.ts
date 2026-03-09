export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
  level: number; // 0-100
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
