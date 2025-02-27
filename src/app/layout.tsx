import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Oswald,
  Roboto,
  Playfair_Display,
  Italiana,
  Mrs_Saint_Delafield,
  Cormorant,
  Open_Sans,
  Lora,
  Birthstone,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Nova",
  description: "Nova",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const birthstone = Birthstone({
  subsets: ["latin"],
  variable: "--font-birthstone",
  weight: ["400"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const saint = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-saint",
  weight: ["400"],
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-forum flex min-h-screen antialiased",
          oswald.variable,
          roboto.variable,
          playfair.variable,
          italiana.variable,
          saint.variable,
          cormorant.variable,
          open_sans.variable,
          lora.variable,
          birthstone.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
