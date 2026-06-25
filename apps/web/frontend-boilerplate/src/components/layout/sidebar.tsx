"use client";
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Inicio" },
  { href: "/dashboard/ventas", label: "Ventas" },
  { href: "/dashboard/productos", label: "Productos" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-[#172D4F]">
      {/* Logo */}
      <div className="h-16 flex items-center px-6">
        <span className="font-semibold text-lg text-white">Mi ERP</span>
      </div>

      {/* Nav links */}
      <nav className="flex-1">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-6 py-4 text-sm transition-colors",
              pathname === href
                ? "text-white bg-[#102037] border-l-3 border-[#49A1EB]"
                : "text-[#6E8CBB]  hover:bg-[#102037] hover:text-gray-300",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Usuario al fondo */}
      <div className="border-t p-4 hidden">
        <p>menu</p>
      </div>
    </aside>
  );
}
