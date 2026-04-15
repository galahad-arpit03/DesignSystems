import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { 
  GeistPixelSquare, 
  GeistPixelGrid, 
  GeistPixelCircle, 
  GeistPixelTriangle, 
  GeistPixelLine 
} from "geist/font/pixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "getdesign — Design system inspirations",
  description: "Design system inspirations from popular websites. Drop one into your project and let coding agents build matching UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable} antialiased font-sans bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
