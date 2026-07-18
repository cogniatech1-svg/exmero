import { BottomNav } from "@/components/layout/BottomNav";

export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-full max-w-md mx-auto w-full">
      {/* pb-20 reserva espacio para el BottomNav fijo */}
      <main className="flex-1 pb-20 px-4">{children}</main>
      <BottomNav />
    </div>
  );
}
