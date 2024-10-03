import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/header/header";
import FirebaseHeader from "./components/firebase_header/header";
import Footer from "./components/footer/footer";
import AuthProvider from "@/components/AuthProvider";
import { Session } from "next-auth";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
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
  session: Session | null;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.PNG" />
      <body className={inter.className}>
        <AuthProvider>
          <FirebaseHeader />
          {children}

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
