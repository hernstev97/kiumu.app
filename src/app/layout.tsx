import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit ({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kiumu",
  description: "Gamifizierter Habit-Tracker mit Punkte-Ökonomie",
  applicationName: "kiumu",
  appleWebApp: {
    capable: true,
    title: "kiumu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className={`${outfit.className} min-h-full flex flex-col font-sans`}>
        {children}
      </body>
    </html>
  );
}
