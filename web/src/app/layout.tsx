import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitech Kites CZ",
  description: "Oficiální stránky a e-shop Kitech Kites pro Česko a Slovensko.",
};

function Navigation() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider uppercase">
            <Link href="/">Kitech Kites CZ</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/frs-v2" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">FRS V2</Link>
              <Link href="/magus-v1" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Magus V1</Link>
              <Link href="/o-kitechi" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">O Kitechi</Link>
              <Link href="/kontakt" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Kontakt</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Kitech Kites CZ. Všechna práva vyhrazena.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/KitechKites" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          <a href="https://www.instagram.com/kitechkites/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <a href="https://www.youtube.com/@kitechkites" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="bg-gray-950">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-950 text-white`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}