export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1 pb-20">{children}</main>
      {/* BottomNav — T0.12 */}
    </div>
  );
}
