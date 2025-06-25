export default function TypeSectionFallback() {
  return (
    <section className="w-full text-sm font-semibold flex justify-center flex-wrap gap-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-8 w-20 bg-zinc-200 dark:bg-zinc-700 rounded-3xl animate-pulse" />
      ))}
    </section>
  );
}
