"use client";

import { useState } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#turnos", label: "Turnos" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileMenu({ whatsappUrl }: { whatsappUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--dra-teal)]/45 bg-[var(--dra-navy)]/80 text-white shadow-sm backdrop-blur transition hover:bg-[var(--dra-teal)]"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-lg border border-[var(--dra-teal)]/35 bg-[var(--dra-dark)]/96 shadow-2xl shadow-black/35 backdrop-blur-xl">
          <nav className="grid p-2 text-sm font-black text-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 transition hover:bg-[var(--dra-navy)] hover:text-[var(--dra-cream)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/55 bg-[var(--dra-cream)] px-4 py-3 font-black text-[var(--dra-dark)] transition hover:border-white/75 hover:bg-[var(--dra-gold)]"
            >
              <CalendarCheck size={17} />
              Reserva de turnos
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
