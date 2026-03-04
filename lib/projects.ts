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
    name: 'Paper Bridge',
    description:
      'Full-stack AI document intelligence system with PDF ingestion, schema-enforced extraction, vector search (pgvector), and citation-grounded multi-document Q&A. Designed as a production-ready internal tool.',
    imgUrl: '/paper-bridge-logo.webp',
    techs: [
      'Python',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'Supabase',
      'OpenAI API',
      'Embeddings',
      'RAG',
    ],
    liveUrl: 'https://paper-bridge.vercel.app/dashboard',
    demoUrl: 'https://youtube.com', // replace if you have a walkthrough
    repoUrl: 'https://github.com/LouisDev314/paper-bridge',
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
