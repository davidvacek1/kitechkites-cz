import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-gray-900 items-center justify-center pt-20">
      <div className="text-center px-4">
        <div className="relative w-32 h-12 mx-auto mb-8 opacity-80">
          <Image src="/images/general/logo.png" alt="Kitech Logo" fill className="object-contain" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stránka nenalezena
        </h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          Zdá se, že vás vítr zavál mimo vyznačenou oblast. Tato stránka neexistuje nebo byla přesunuta.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Návrat na domovskou stránku
        </Link>
      </div>
    </div>
  );
}
