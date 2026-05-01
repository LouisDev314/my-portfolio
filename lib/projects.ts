export interface Project {
  id: string;
  name: string;
  description: string;
  highlights?: string[];
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
      'AI/RAG document intelligence platform for extracting, searching, and asking grounded questions across PDFs.',
    highlights: [
      'PDF ingestion with schema-enforced extraction',
      'pgvector retrieval and citation-grounded Q&A',
      'FastAPI backend architecture for production workflows',
    ],
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
      'Production anime collectibles commerce platform with a real storefront, checkout, inventory, and admin flow.',
    highlights: [
      'SSR storefront with Stripe checkout and guest checkout',
      'Inventory reservations backed by PostgreSQL/Supabase',
      'Admin workflows for production-ready order management',
    ],
    imgUrl: '/store-logo.jpeg',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe', 'Vercel'],
    liveUrl: 'https://www.popboxstudio.com/',
    repoUrl: 'https://github.com/LouisDev314/popbox-studio-next',
  },
];
