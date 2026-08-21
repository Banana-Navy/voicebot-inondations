import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voicebot Inondations | Annoncia",
  description: "Une information vocale claire avant, pendant et après une inondation.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
