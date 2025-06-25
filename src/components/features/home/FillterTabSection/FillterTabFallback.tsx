export default function FillterTabFallback() {
  return (
    <section className="flex justify-end w-full px-4">
      <div className="w-full sm:w-[254px] h-10 flex gap-1 p-1 rounded-[100px] bg-zinc-950/5 my-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-full rounded-[100px] animate-pulse bg-zinc-300/40" />
        ))}
      </div>
    </section>
  );
}
