import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold text-primary-300">404</p>
      <h1 className="text-xl font-semibold text-foreground">
        Página no encontrada
      </h1>
      <p className="text-foreground-muted text-sm">
        Esta ruta no existe. Vuelve al inicio y sigue entrenando.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-primary text-white px-6 py-2 text-sm font-semibold"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
