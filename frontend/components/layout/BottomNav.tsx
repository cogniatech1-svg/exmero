"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Map, Target, BarChart2, User, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/",           icon: House,     label: "Inicio"     },
  { href: "/ruta",       icon: Map,       label: "Ruta"       },
  { href: "/simulacros", icon: Target,    label: "Simulacros" },
  { href: "/progreso",   icon: BarChart2, label: "Progreso"   },
  { href: "/perfil",     icon: User,      label: "Perfil"     },
];

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-md mx-auto flex items-end justify-around h-16 px-1">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
          <NavItem
            key={href}
            href={href}
            icon={Icon}
            label={label}
            active={isActive(href)}
          />
        ))}
      </div>
    </nav>
  );
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-0.5 pt-2 pb-1 px-2 min-w-[52px]"
    >
      <Icon
        size={22}
        strokeWidth={active ? 2.5 : 1.75}
        className={cn(active ? "text-primary" : "text-foreground-subtle")}
      />
      <span
        className={cn(
          "text-[10px] font-semibold leading-none",
          active ? "text-primary" : "text-foreground-subtle"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
