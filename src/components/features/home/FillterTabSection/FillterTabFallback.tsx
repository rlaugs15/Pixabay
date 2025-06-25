export default function FillterTabFallback() {
  return (
    <section className="flex justify-end w-full px-4">
      <div className="w-full sm:w-[254px] h-10 p-1 rounded-[100px] bg-zinc-950/5 my-2 flex gap-1">
        <div className="h-full flex-1 rounded-[100px] bg-zinc-300 animate-pulse" />
        <div className="h-full flex-1 rounded-[100px] bg-zinc-300 animate-pulse" />
        <div className="h-full flex-1 rounded-[100px] bg-zinc-300 animate-pulse" />
      </div>
    </section>
  );
}
