import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[75vh] flex-col items-center justify-center px-6 text-center sm:px-10">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-custom-gray">
        Error 404
      </p>
      <h1 className="custom-font-size font-bold leading-none text-custom-red">
        404
      </h1>
      <h2 className="mt-8 text-2xl sm:text-4xl">This page wandered off.</h2>
      <p className="mt-4 max-w-md text-base text-custom-gray sm:text-lg">
        The page you are looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-custom-red px-6 py-3 text-base text-custom-red transition-colors duration-300 hover:bg-custom-red hover:text-custom-light"
      >
        Back to home
      </Link>
    </main>
  );
}
