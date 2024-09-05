import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymTalk",
  description:
    "Calisthenics community for athletes serious about levelling up their calisthenics skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
