export default function Badge({ title }: { title: string }) {
  return (
    <span
      key={title}
      className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
      {title}
    </span>
  );
}
