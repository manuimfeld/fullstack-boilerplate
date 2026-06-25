"use client";

import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="h-16 flex items-center px-6 gap-4 shrink-0 bg-white">
      {/* Botón hamburguesa — solo mobile */}
      <h1 className="hidden">Mobile</h1> {/* ver abajo */}
      {/* Ícono + nombre de página actual */}
      <h2>{pathname}</h2>
      {/* Acciones a la derecha */}
      <div className="ml-auto flex items-center gap-2">
        <h3>admintest</h3>
      </div>
    </header>
  );
}
