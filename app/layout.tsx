import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Background3D from "./components/Background3D";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Чен Ын Гиль | Senior Full‑Stack Developer",
  description:
    "Senior Full‑Stack Developer с 10+ годами коммерческого опыта в JavaScript/TypeScript и Python. Разработка и сопровождение веб‑приложений, SaaS‑платформ и внутренних бизнес‑систем.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body
        className={`${jakarta.variable} font-sans bg-black text-slate-100`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <Background3D />
          <div className="noise" />
          <div className="relative z-20">{children}</div>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}

