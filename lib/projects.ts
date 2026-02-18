export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Full-stack shopping platform with real-time inventory, Stripe payments, and an admin dashboard.',
    image: '/projects/ecommerce.png',
    techs: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/louischan/ecommerce',
  },
  {
    id: '2',
    name: 'Task Flow',
    description: 'Collaborative task manager with real-time sync, team workspaces, and drag-and-drop boards.',
    image: '/projects/taskflow.png',
    techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/louischan/taskflow',
  },
  {
    id: '3',
    name: 'Weather Dashboard',
    description: 'Location-based weather app with interactive maps, hourly forecasts, and historical data charts.',
    image: '/projects/weather.png',
    techs: ['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/louischan/weather',
  },
];
