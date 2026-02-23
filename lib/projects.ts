export interface Project {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  techs: string[];
  liveUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'PopBox Studio (Upcoming)',
    description: 'Full-stack shopping platform with real-time inventory, Stripe payments, and an admin dashboard.',
    imgUrl: '/GT.webp',
    techs: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    demoUrl: 'https://youtube.com',
    repoUrl: 'https://github.com/louischan/ecommerce',
  },
  {
    id: '2',
    name: 'AI Project (Upcoming)',
    description: 'Collaborative task manager with real-time sync, team workspaces, and drag-and-drop boards.',
    imgUrl: '/GT.webp',
    techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/louischan/taskflow',
  },
  {
    id: '3',
    name: 'AI Project 2 (Upcoming)',
    description: 'Location-based weather app with interactive maps, hourly forecasts, and historical data charts.',
    imgUrl: '/GT.webp',
    techs: ['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    liveUrl: 'https://example.com',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/louischan/weather',
  },
];
