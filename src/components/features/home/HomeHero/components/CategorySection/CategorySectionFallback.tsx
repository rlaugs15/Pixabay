export default function CategorySectionFallback() {
  return (
    <section className="flex gap-1 flex-wrap">
      {Array.from({ length: 11 }).map((_, i) => (
        <div
          key={i}
          className="h-9 w-[72px] bg-zinc-200 dark:bg-zinc-700 rounded-md animate-pulse"
        />
      ))}
    </section>
  );
}
