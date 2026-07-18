"use client";

import { useEffect } from "react";

export default function AppError({
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
    <div className="min-h-full flex flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-4xl">⚠️</p>
      <h1 className="text-lg font-semibold text-foreground">Algo salió mal</h1>
      <p className="text-sm text-foreground-muted">
        Mero está trabajando para resolverlo.
      </p>
      <button
        onClick={reset}
        className="mt-2 rounded-full bg-primary text-white px-6 py-2 text-sm font-semibold"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
