"use client";

export default function AppError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-600">
      <h2 className="text-base font-semibold">Something went wrong</h2>
      <p className="mt-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600"
      >
        Try again
      </button>
    </div>
  );
}
