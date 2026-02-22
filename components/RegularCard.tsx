import { JSX } from 'react';

export default function RegularCard({ content }: { content: JSX.Element }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
      {content}
    </div>
  );
}
