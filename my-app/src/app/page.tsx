export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
        “Man is a mystery”
      </h1>
      <p className="text-md md:text-lg text-zinc-400 text-center max-w-2xl leading-relaxed">
        "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love."
      </p>
      <p className="mt-8 text-sm text-zinc-500 italic">
        — Fyodor Dostoevsky
      </p>
    </main>
  );
}
