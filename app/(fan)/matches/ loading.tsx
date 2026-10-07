export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <div className="animate-pulse">
        <div className="h-12 w-2/3 rounded-xl bg-gray-200" />

        <div className="mt-4 h-5 w-1/2 rounded-lg bg-gray-200" />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-80 rounded-3xl bg-gray-200"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
