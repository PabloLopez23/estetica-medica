import type { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";
import {
  AtSign,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { RevealOnView } from "./reveal-on-view";

const heroImage = "/hero-consulta.webp";
const whatsappDisplay = "+54 9 3794 02-0769";
const whatsappUrl = "https://wa.me/5493794020769";
const instagramUrl = "https://www.instagram.com/esteticamedicaszachraj";
const address =
  "Fray Jos\u00e9 de la Quintana 1272, W3400BGP Corrientes - Consultorio 3";
const schedule = "Lunes a s\u00e1bado de 9 a 18 hs";
const mapsQuery = encodeURIComponent(
  "Fray Jos\u00e9 de la Quintana 1272 W3400BGP Corrientes Consultorio 3",
);
const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://szachrajesteticamedica.netlify.app";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#turnos", label: "Turnos" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  {
    title: "Consulta y diagn\u00f3stico est\u00e9tico",
    text: "Evaluaci\u00f3n inicial para comprender la piel, conversar expectativas y definir un plan de cuidado realista.",
    icon: Stethoscope,
  },
  {
    title: "Tratamientos faciales",
    text: "Protocolos orientados a luminosidad, hidrataci\u00f3n, textura y bienestar cut\u00e1neo con resultados naturales.",
    icon: Sparkles,
  },
  {
    title: "Tecnolog\u00eda est\u00e9tica",
    text: "Procedimientos no invasivos seleccionados seg\u00fan cada objetivo, con acompa\u00f1amiento profesional.",
    icon: ShieldCheck,
  },
  {
    title: "Rejuvenecimiento facial",
    text: "Abordajes pensados para acompa\u00f1ar los cambios de la piel preservando frescura y armon\u00eda.",
    icon: Star,
  },
  {
    title: "Cuidado corporal",
    text: "Opciones corporales planificadas con criterio m\u00e9dico y seguimiento durante el proceso.",
    icon: CheckCircle2,
  },
  {
    title: "Orientaci\u00f3n post tratamiento",
    text: "Indicaciones claras para continuar el cuidado en casa y sostener mejor cada resultado.",
    icon: MessageCircle,
  },
];

const patientExperience = [
  "Escucha atenta antes de indicar un tratamiento",
  "Explicaciones simples, honestas y sin presiones",
  "Criterio profesional para cuidar resultados naturales",
  "Seguimiento cercano durante cada etapa",
];

const gallery = [
  {
    title: "Orientaci\u00f3n profesional",
    src: "/gallery-orientacion.webp",
  },
  {
    title: "Cabina preparada",
    src: "/gallery-cabina.webp",
  },
  {
    title: "Tratamientos corporales",
    src: "/gallery-corporal.webp",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#consultorio`,
  name: "Dra. Szachraj Casco Mayra",
  description:
    "Consultorio de est\u00e9tica m\u00e9dica en Corrientes Capital con atenci\u00f3n personalizada, tratamientos faciales y corporales.",
  url: siteUrl,
  image: `${siteUrl}${heroImage}`,
  logo: `${siteUrl}/dra-logo.webp`,
  telephone: whatsappDisplay,
  sameAs: [instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fray Jos\u00e9 de la Quintana 1272, Consultorio 3",
    addressLocality: "Corrientes",
    addressRegion: "Corrientes",
    postalCode: "W3400BGP",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "City",
    name: "Corrientes Capital",
  },
  hasMap: mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  medicalSpecialty: "Est\u00e9tica m\u00e9dica",
  availableService: services.map((service) => ({
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.text,
  })),
};

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <section
        id="inicio"
        className="relative isolate overflow-hidden bg-[var(--dra-dark)] px-5 pb-16 pt-28 sm:px-8 lg:min-h-[88vh] lg:pb-20 lg:pt-32"
      >
        <div className="absolute bottom-0 right-0 top-24 hidden w-[58%] items-center justify-end pr-8 lg:flex">
          <div className="relative aspect-[1485/1208] w-full max-w-[760px] overflow-hidden">
            <Image
              src={heroImage}
              alt="Dra. Szachraj atendiendo a una paciente"
              fill
              sizes="58vw"
              className="object-contain"
              priority
            />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[58%] w-[42%] bg-gradient-to-tr from-[var(--dra-dark)]/72 via-[var(--dra-dark)]/24 to-transparent" />
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 hidden w-[57%] bg-gradient-to-r from-[var(--dra-dark)] via-[var(--dra-dark)]/96 to-[var(--dra-dark)]/18 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--dra-dark)] to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:min-h-[calc(88vh-8rem)] lg:justify-center">
          <figure className="overflow-hidden rounded-lg border border-[var(--dra-teal)]/35 bg-[var(--dra-navy)] shadow-2xl shadow-black/25 lg:hidden">
            <div className="relative aspect-[1485/1208] w-full">
              <Image
                src={heroImage}
                alt="Dra. Szachraj atendiendo a una paciente"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </figure>

          <div className="max-w-2xl lg:w-[47%]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--dra-teal)]/45 bg-[var(--dra-navy)]/80 px-4 py-2 text-sm font-black text-[var(--dra-cream)] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Salud, bienestar y est&eacute;tica m&eacute;dica
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl">
              Dra. Szachraj Casco Mayra
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/82 sm:text-xl sm:leading-8">
              Bienvenidos a un espacio de salud y bienestar donde cada consulta
              se piensa desde la escucha, la seguridad y el cuidado integral de
              cada paciente.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink
                href={whatsappUrl}
                icon={<CalendarCheck size={20} />}
                label="Reserva de turnos"
                tone="primary"
              />
              <ActionLink
                href={whatsappUrl}
                icon={<Phone size={20} />}
                label="WhatsApp"
                tone="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--dra-gold)] bg-[var(--dra-cream)] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 text-sm font-black text-[var(--dra-dark)] sm:grid-cols-3">
          <TrustItem text={"Atenci\u00f3n personalizada"} />
          <TrustItem text="Enfoque profesional y cercano" />
          <TrustItem text="Corrientes Capital" />
        </div>
      </section>

      <section className="bg-[var(--dra-dark)] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[var(--dra-cream)]">
              Bienvenida
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-white sm:text-5xl">
              Un lugar para consultar, cuidarte y decidir con tranquilidad
            </h2>
          </div>
          <p className="text-lg font-medium leading-8 text-white/76">
            La atenci&oacute;n est&aacute; pensada para que cada paciente entienda
            sus opciones antes de iniciar cualquier tratamiento. La prioridad
            es acompa&ntilde;ar procesos seguros, naturales y sostenibles, con
            indicaciones claras y una experiencia amable desde el primer
            contacto.
          </p>
        </div>
      </section>

      <section
        id="tratamientos"
        className="scroll-mt-28 bg-[var(--dra-navy)] px-5 py-20 sm:scroll-mt-32 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-[var(--dra-cream)]">
              Tratamientos
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl">
              Tratamientos
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-white/74">
              Una propuesta integral de medicina est&eacute;tica facial y
              corporal, con evaluaci&oacute;n previa y recomendaciones adaptadas
              a cada necesidad.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <RevealOnView
                  key={item.title}
                  delay={index * 80}
                  className="h-full"
                >
                  <article className="treatment-card group h-full rounded-lg border border-[var(--dra-teal)]/35 bg-[var(--dra-dark)] p-6 shadow-sm shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--dra-cream)]/65 hover:bg-[var(--dra-navy)] hover:shadow-xl hover:shadow-[var(--dra-teal)]/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dra-cream)] text-[var(--dra-dark)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-[var(--dra-teal)] group-hover:text-white">
                      <Icon size={23} />
                    </span>
                    <h3 className="mt-5 text-xl font-black tracking-normal text-[var(--dra-cream)] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-white/72 transition-colors duration-300 group-hover:text-white/82">
                      {item.text}
                    </p>
                  </article>
                </RevealOnView>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className="scroll-mt-28 bg-[var(--dra-teal)] px-5 py-20 text-[var(--dra-dark)] sm:scroll-mt-32 sm:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[var(--dra-cream)]">
              Experiencia del paciente
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-[var(--dra-ink)] sm:text-5xl">
              Atenci&oacute;n profesional con una mirada cercana
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[var(--dra-muted)]">
              Cada encuentro busca generar confianza: escuchar, orientar y
              acompa&ntilde;ar con informaci&oacute;n clara para que la decisi&oacute;n
              del paciente sea tranquila y consciente.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {patientExperience.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-lg border border-[var(--dra-dark)]/20 bg-[var(--dra-navy)] p-4 text-white"
                >
                  <CheckCircle2 className="text-[var(--dra-cream)]" size={20} />
                  <span className="font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {gallery.map((item, index) => (
              <RevealOnView
                key={item.title}
                delay={index * 110}
                className="h-full"
              >
                <figure className="experience-card group h-full overflow-hidden rounded-lg border border-[var(--dra-dark)]/20 bg-[var(--dra-navy)] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--dra-cream)]/60 hover:shadow-xl hover:shadow-[var(--dra-dark)]/25">
                  <div className="relative h-80 w-full sm:h-96">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="border-t border-[var(--dra-teal)]/40 px-4 py-3 text-sm font-black text-white transition-colors duration-300 group-hover:text-[var(--dra-cream)]">
                    {item.title}
                  </figcaption>
                </figure>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      <section
        id="turnos"
        className="scroll-mt-28 bg-[var(--dra-cream)] px-5 py-20 sm:scroll-mt-32 sm:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-[var(--dra-teal)]">
              Turnos
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-[var(--dra-ink)] sm:text-5xl">
              Reserva de turnos
            </h2>
            <p className="mt-4 text-lg font-medium leading-8 text-[var(--dra-muted)]">
              Escribinos por WhatsApp para coordinar tu consulta en el
              consultorio. Atendemos de lunes a s&aacute;bado de 9 a 18 hs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href={whatsappUrl}
              icon={<CalendarCheck size={20} />}
              label="Reserva de turnos"
              tone="primary"
            />
            <ActionLink
              href={whatsappUrl}
              icon={<MessageCircle size={20} />}
              label="WhatsApp"
              tone="secondary"
            />
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-28 bg-[var(--dra-teal)] px-5 py-20 text-[var(--dra-dark)] sm:scroll-mt-32 sm:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[var(--dra-cream)]">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Estamos cerca
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[var(--dra-dark)]/82">
              Escribinos para coordinar tu turno o acercarte al consultorio.
              Estamos en Corrientes Capital, en Fray Jos&eacute; de la Quintana
              1272, Consultorio 3.
            </p>

            <div className="mt-9 grid gap-3">
              <ContactLink
                href={whatsappUrl}
                icon={<Phone size={20} />}
                label="WhatsApp"
                value={whatsappDisplay}
              />
              <ContactLink
                href={instagramUrl}
                icon={<AtSign size={20} />}
                label="Instagram"
                value="@esteticamedicaszachraj"
              />
              <ContactLink
                href={mapsUrl}
                icon={<MapPin size={20} />}
                label={"Direcci\u00f3n"}
                value={address}
              />
              <InfoCard
                icon={<Clock size={20} />}
                label="Horario"
                value={schedule}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--dra-dark)]/25 bg-[var(--dra-navy)] shadow-2xl shadow-[var(--dra-dark)]/20">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--dra-teal)]/35 px-5 py-4 text-white">
              <div>
                <h3 className="text-xl font-black tracking-normal">
                  Mapa de ubicaci&oacute;n
                </h3>
                <p className="mt-1 text-sm text-white/70">{address}</p>
              </div>
              <MapPin className="hidden text-[var(--dra-cream)] sm:block" size={24} />
            </div>
            <div className="relative h-[420px] w-full sm:h-[500px]">
              <iframe
                title={"Mapa de ubicaci\u00f3n de Dra. Szachraj Casco Mayra"}
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/55 bg-[var(--dra-cream)] px-5 py-3 text-sm font-black text-[var(--dra-dark)] shadow-lg shadow-black/20 transition hover:border-white/75 hover:bg-[var(--dra-gold)]"
              >
                <MapPin size={18} />
                C&oacute;mo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--dra-teal)]/25 bg-[var(--dra-dark)]/84 shadow-md shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--dra-teal)]/25 bg-[var(--dra-ink)] p-1 shadow-sm">
            <Image
              src="/dra-logo.webp"
              alt="Logo Dra. Szachraj Casco Mayra"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-white">
              Dra. Szachraj
            </span>
            <span className="block text-xs font-bold text-[var(--dra-cream)]">
              Est&eacute;tica m&eacute;dica
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-white/78 lg:flex">
          {navItems.map((item) => (
            <a
              className="transition hover:text-[var(--dra-cream)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ActionLink
            href={whatsappUrl}
            icon={<CalendarCheck size={17} />}
            label="Reserva de turnos"
            tone="primary"
            compact
          />
        </div>
        <MobileMenu whatsappUrl={whatsappUrl} />
      </div>
    </header>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[var(--dra-gold)]/50 bg-[var(--dra-dark)] p-4 text-white">
      <CheckCircle2 className="shrink-0 text-[var(--dra-cream)]" size={20} />
      <span>{text}</span>
    </div>
  );
}

function ActionLink({
  href,
  icon,
  label,
  tone,
  compact = false,
  className = "",
}: {
  href: string;
  icon: ReactNode;
  label: string;
  tone: "primary" | "secondary";
  compact?: boolean;
  className?: string;
}) {
  const toneClass =
    tone === "primary"
      ? "border border-white/55 bg-[var(--dra-cream)] text-[var(--dra-dark)]"
      : "border border-[var(--dra-teal)]/65 bg-[var(--dra-navy)] text-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${toneClass} ${className} inline-flex items-center justify-center gap-2 rounded-full px-6 font-black shadow-sm transition hover:border-white/75 hover:bg-[var(--dra-gold)] ${compact ? "py-3 text-sm" : "py-4 text-base"}`}
    >
      {icon}
      {label}
    </a>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-center gap-3 rounded-lg border border-[var(--dra-dark)]/20 bg-[var(--dra-navy)] p-4 text-left text-white shadow-sm transition hover:bg-[var(--dra-dark)] sm:gap-4"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--dra-warm)] text-[var(--dra-ink)]">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-white/62">{label}</span>
        <span className="mt-1 block min-w-0 break-words font-black text-white [overflow-wrap:anywhere]">
          {value}
        </span>
      </span>
    </a>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-lg border border-[var(--dra-dark)]/20 bg-[var(--dra-navy)] p-4 text-left text-white shadow-sm sm:gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--dra-warm)] text-[var(--dra-ink)]">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-white/62">{label}</span>
        <span className="mt-1 block min-w-0 break-words font-black text-white [overflow-wrap:anywhere]">
          {value}
        </span>
      </span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--dra-navy)] bg-[var(--dra-dark)] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-[var(--dra-ink)] p-1">
              <Image
                src="/dra-logo.webp"
                alt="Logo Dra. Szachraj Casco Mayra"
                fill
                sizes="40px"
                className="object-contain"
              />
            </span>
            <span className="text-sm font-bold text-white/78">
              Dra. Szachraj Casco Mayra
            </span>
          </div>
          <p className="mt-3 text-xs font-semibold text-white/48">
            &copy; 2026 Dra. Szachraj Casco Mayra. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-black text-white/62">
          {navItems.map((item) => (
            <a
              className="hover:text-[var(--dra-cream)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar WhatsApp a Dra. Szachraj Casco Mayra"
      className="whatsapp-float group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-[80] inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-[#25d366] p-2 text-sm font-black text-white shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[var(--dra-cream)]/45 sm:bottom-7 sm:right-7 sm:w-auto sm:gap-3 sm:pr-4"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#25d366] shadow-sm">
        <MessageCircle size={28} strokeWidth={2.6} />
        <Image
          src="/whatsapp-floating.avif"
          alt=""
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
      <span className="hidden pr-1 sm:inline">WhatsApp</span>
    </a>
  );
}
