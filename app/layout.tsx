import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Voicebot Inondations",
  description: "Une information vocale claire avant, pendant et après une inondation.",
  icons: {
    icon: [
      { url: `${basePath}/favicon-64.png`, sizes: "64x64", type: "image/png" },
      { url: `${basePath}/favicon.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
