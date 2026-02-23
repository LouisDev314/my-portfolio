import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Briefcase, MapPin } from 'lucide-react';
import Badge from '@/components/Badge';

function MetaPill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-neutral-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
      {icon}
      <span className="leading-none">{children}</span>
    </span>
  );
}

function CompanyHeader({
  company,
  role,
  location,
  workType,
}: {
  company: string;
  role: string;
  location: string;
  workType: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex flex-col gap-1">
        <p className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">{company}</p>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">{role}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <MetaPill icon={<MapPin className="size-3.5 opacity-80" />}>{location}</MetaPill>
        <MetaPill icon={<Briefcase className="size-3.5 opacity-80" />}>{workType}</MetaPill>
      </div>
    </div>
  );
}

export function WorkTimeline() {
  const data = [
    {
      title: 'September 2024 - Present',
      content: (
        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:p-7">
          <CompanyHeader
            company="PopBox Studio"
            location="Calgary, Canada"
            role="Co-Founder · AI Automation & Full Stack Engineer"
            workType="Remote"
          />

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            Built a scalable, containerized mobile e-commerce platform with secure backend services. Developed optimized
            React Native interfaces and integrated LLM-powered features using LangChain and RAG for product automation,
            support, and data extraction with production-ready validation and error handling.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            <Badge title="LLM APIs" hasAnim={false} />
            <Badge title="Node.js" hasAnim={false} />
            <Badge title="MongoDB" hasAnim={false} />
            <Badge title="Docker" hasAnim={false} />
            <Badge title="TypeScript" hasAnim={false} />
            <Badge title="Stripe" hasAnim={false} />
            <Badge title="Redis" hasAnim={false} />
            <Badge title="GitHub Actions (CI/CD)" hasAnim={false} />
            <Badge title="React Native" hasAnim={false} />
            <Badge title="TanStack Query" hasAnim={false} />
          </div>
        </div>
      ),
    },
    {
      title: 'August 2023 - September 2024',
      content: (
        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:p-7">
          <CompanyHeader
            company="Virtual Gaming Technology"
            location="Hong Kong"
            role="Full Stack Developer"
            workType="On-site"
          />

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            Designed and built microservices with event-driven processing to handle high-volume real-time data. Improved
            data efficiency by 50% and doubled global processing throughput. Revamped frontend architecture, achieving
            350% faster rendering and smoother user experiences. Optimized system performance and stability by 80%,
            supporting 100k+ concurrent users.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            <Badge title="Java Spring Boot" hasAnim={false} />
            <Badge title="RabbitMQ" hasAnim={false} />
            <Badge title="Apache Kafka" hasAnim={false} />
            <Badge title="SQL/NoSQL" hasAnim={false} />
            <Badge title="React.js" hasAnim={false} />
            <Badge title="Solid.js" hasAnim={false} />
            <Badge title="Tailwind CSS" hasAnim={false} />
            <Badge title="GitLab CI/CD" hasAnim={false} />
            <Badge title="Elasticsearch + Kibana" hasAnim={false} />
          </div>
        </div>
      ),
    },
    {
      title: 'September - December 2022',
      content: (
        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:p-7">
          <CompanyHeader
            company="Future Successors"
            location="Atlanta, United States"
            role="Software Engineer Intern"
            workType="Remote/On-site"
          />

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            Built backend services and integrated cloud-based workflows with automated CI/CD pipelines. Optimized data
            modeling to improve performance by 50% while ensuring strong data reliability through validation and error
            handling. Collaborated with cross-functional teams to deliver production-ready solutions aligned with
            business needs.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            <Badge title="Python FastAPI" hasAnim={false} />
            <Badge title="AWS Lambda" hasAnim={false} />
            <Badge title="Amazon S3" hasAnim={false} />
            <Badge title="GitHub Actions (CI/CD)" hasAnim={false} />
            <Badge title="Vue.js" hasAnim={false} />
          </div>
        </div>
      ),
    },
    {
      title: 'June - September 2022',
      content: (
        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:p-7">
          <CompanyHeader
            company="Microsoft"
            location="Atlanta, United States"
            role="Xbox Summer Camp Engineer"
            workType="Remote/On-site"
          />

          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            Developed real-time gameplay systems in Unreal Engine for state management, synchronization, and user
            interactions, ensuring low-latency performance under dynamic conditions. Leveraged Azure to deploy and scale
            backend services for stable online experiences. Led a team of engineers, establishing coding standards and
            workflows to improve code quality and delivery speed, while rapidly prototyping and iterating in an agile
            environment.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            <Badge title="Unreal Engine" hasAnim={false} />
            <Badge title="C++ Blueprint" hasAnim={false} />
            <Badge title="Git" hasAnim={false} />
            <Badge title="Microsoft Azure" hasAnim={false} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-clip">
      {/* Header */}
      <div className="mx-auto my-16 max-w-3xl px-4 text-center md:my-20">
        <p className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400">WORK EXPERIENCE</p>

        <h2 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-4xl">
          Building useful things—end to end.
        </h2>

        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
          A snapshot of the roles where I shipped products, scaled systems, and automated real workflows.
        </p>

        {/* subtle divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
      </div>

      <Timeline data={data} />
    </section>
  );
}
