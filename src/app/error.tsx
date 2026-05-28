'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[75vh] flex-col items-center justify-center px-6 text-center sm:px-10">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-custom-gray">
        Something broke
      </p>
      <h1 className="custom-font-size font-bold leading-none text-custom-red">
        Oops
      </h1>
      <h2 className="mt-8 text-2xl sm:text-4xl">
        An unexpected error occurred.
      </h2>
      <p className="mt-4 max-w-md text-base text-custom-gray sm:text-lg">
        Something went wrong on our end. You can try again, or head back home.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-custom-red px-6 py-3 text-base text-custom-light transition-opacity duration-300 hover:opacity-80"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-custom-red px-6 py-3 text-base text-custom-red transition-colors duration-300 hover:bg-custom-red hover:text-custom-light"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
