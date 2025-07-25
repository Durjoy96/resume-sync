import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Sync | Update your resume on Drive without any extra steps",
  keywords: ["resume", "sync"],
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-base-200`}
      >
        <header className="fixed right-0 left-0 top-0 z-50 bg-base-100 shadow-sm">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
