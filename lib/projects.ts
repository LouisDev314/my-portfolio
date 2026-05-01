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
    demoUrl: 'https://youtu.be/3FmdrRM75Io',
    repoUrl: 'https://github.com/LouisDev314/paper-bridge',
  },
  {
    id: '2',
    name: 'PopBox Studio',
    description:
      'Full-stack e-commerce platform for anime collectibles with SSR storefront pages, Stripe payments, guest checkout, inventory reservations, admin workflows, and production-ready order management.',
    imgUrl: '/store-logo.jpeg',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'Vercel'],
    liveUrl: 'https://www.popboxstudio.com/',
    demoUrl: '',
    repoUrl: 'https://github.com/LouisDev314/popbox-studio-next',
  },
];
