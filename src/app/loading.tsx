export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[75vh] flex-col items-center justify-center px-6">
      <div
        className="h-12 w-12 animate-spin rounded-full border-2 border-custom-gray/30 border-t-custom-red"
        role="status"
        aria-label="Loading"
      />
      <p className="mt-6 text-sm uppercase tracking-[0.3em] text-custom-gray">
        Loading
      </p>
    </main>
  );
}
