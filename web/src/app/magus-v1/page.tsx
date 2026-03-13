import Image from "next/image";
import Link from "next/link";
import videosData from "../../../content/videos.json";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitech Magus V1 | High Performance Kite",
  description: "Magus V1 je otevřená komora navržená pro maximální freeride a freestyle výkon, agresivnější ovládání a nekonečný hangtime.",
  alternates: {
    canonical: "/magus-v1",
  },
};

export default function Magus() {
  const videos = videosData["magus-v1"];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Kitech Magus V1",
            "image": "https://kitechkites.cz/images/magus-v1/magus-hero.jpg",
            "description": "Magus V1 je otevřená komora navržená pro maximální freeride a freestyle výkon, agresivnější ovládání a nekonečný hangtime.",
            "brand": {
              "@type": "Brand",
              "name": "Kitech Kites"
            }
          })
        }}
      />
      {/* 1. Hero — stays dark */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/magus-v1/magus-hero.jpg"
            alt="Kitech Magus V1"
            fill
            priority
            className="object-cover object-[30%_20%] md:object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/40 to-stone-50 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="px-4 py-1.5 bg-orange-500 text-white text-sm font-bold uppercase tracking-widest rounded-sm">
              High Performance
            </span>
          </div>
          <div className="mb-6 animate-fade-in-delayed max-w-sm mx-auto">
            <Image
              src="/images/magus-v1/Magus-logo.png"
              alt="Magus Logo"
              width={300}
              height={100}
              className="object-contain w-full h-auto filter drop-shadow-2xl"
            />
          </div>
          <h1 className="sr-only">Kitech Magus V1</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl md:text-3xl text-gray-200 drop-shadow-md animate-fade-in-slow font-light">
            Freeride–Freestyle zbraň pro pokročilé
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-slow">
            <a 
              href="#objednat" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Zjistit cenu
            </a>
          </div>
        </div>
      </section>

      {/* 2. Features — LIGHT */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Vyladěný pro maximální výkon</h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 font-light mb-6">
                Zatímco FRS V2 je univerzální dříč pro každou situaci, Magus V1 je ostrejší nástroj navržený pro ty, kteří hledají hraniční výkony. 
                Tento kite je stvořený pro freeride plný adrenalinu, obrovské big-air skoky s nekompromisním liftem a nekonečný hangtime.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Freeride a freestyle monstrum v jednom.",
                  "Přímější a agresivnější odezva na řízení na baru.",
                  "Výbušný lift pro ty nejvyšší a nejagresivnější skoky.",
                  "Navrženo primárně pro pokročilé a expertní jezdce.",
                  "Evropská preciznost, vysoce kvalitní Porcher Skytex materiály.",
                  "Každý model testovaný přímo ve vzduchu výrobcem."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span className="text-gray-700 text-lg font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <Image
                src="/images/magus-v1/magus-action-1.jpg"
                alt="Kitech Magus V1 action"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech — WHITE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prémiová kvalita bez ústupků</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light mb-16">
            Magus V1 využívá stejný špičkový standard jako FRS V2, avšak s profilem křídla 
            optimalizovaným pro ostřejší letové charakteristiky a brutální hangtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Otevřená komora pro big air</h3>
              <p className="text-gray-600 font-light">
                Profil zaměřený na rychlost a přímý tah nahoru. Tvar, který rychle reaguje 
                a poskytne masivní podporu při přistání z obrovských výšek.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Evropské materiály</h3>
              <p className="text-gray-600 font-light">
                Šitý u Balatonu z legendárního francouzského materiálu Porcher Skytex. 
                Doplněno německými Dyneema lajnami Liros pro nezničitelnou pevnost.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-orange-500 mb-3">Nekompromisní řízení</h3>
              <p className="text-gray-600 font-light">
                Přesně cítíš, co kite dělá. Zpětná vazba do nového baru je okamžitá, 
                což tě udrží v naprosté kontrole i při těch nejnáročnějších tricích.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specifikace — LIGHT */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technické specifikace</h2>
            <p className="text-xl text-gray-500 font-light">Čísla, která mluví za sebe.</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl overflow-hidden max-w-4xl mx-auto shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-50 border-b border-stone-200">
                    <th className="px-6 py-4 text-orange-600 font-bold text-sm uppercase tracking-wider">Parametr</th>
                    <th className="px-6 py-4 text-orange-600 font-bold text-sm uppercase tracking-wider">Hodnota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">Typ</td>
                    <td className="px-6 py-4 text-gray-600">Otevřená komora (open cell)</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">Dostupné velikosti</td>
                    <td className="px-6 py-4 text-gray-600">7m, 9m, 12m</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">Materiál</td>
                    <td className="px-6 py-4 text-gray-600">Porcher Skytex</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">Lajny</td>
                    <td className="px-6 py-4 text-gray-600">Liros Dyneema</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">Použití</td>
                    <td className="px-6 py-4 text-gray-600">Freeride, Freestyle, Big Air</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">Barva</td>
                    <td className="px-6 py-4 text-gray-600">Na přání (bez příplatku)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-white border border-stone-200 rounded-xl overflow-hidden max-w-4xl mx-auto shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-50 border-b border-stone-200">
                    <th className="px-6 py-4 text-orange-600 font-bold text-sm uppercase tracking-wider">Velikost</th>
                    <th className="px-6 py-4 text-orange-600 font-bold text-sm uppercase tracking-wider">Doporučený vítr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">7 m²</td>
                    <td className="px-6 py-4 text-gray-600">18–30 kn</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">9 m²</td>
                    <td className="px-6 py-4 text-gray-600">14–24 kn</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">12 m²</td>
                    <td className="px-6 py-4 text-gray-600">10–20 kn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery — WHITE */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galerie Magus V1</h2>
            <p className="text-xl text-gray-500 font-light">Kitech Magus v jeho živlu.</p>
          </div>
          
          <div className="columns-1 md:columns-2 gap-6 space-y-6 max-w-5xl mx-auto">
            <div className="break-inside-avoid relative rounded-xl overflow-hidden group shadow-sm border border-stone-200">
              <Image
                src="/images/magus-v1/magus-action-2.jpg"
                alt="Magus V1 na sněhu"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="break-inside-avoid relative rounded-xl overflow-hidden group bg-stone-100 p-8 flex items-center justify-center border border-stone-200">
              <Image
                src="/images/magus-v1/Magus-logo.png"
                alt="Magus V1 logo"
                width={800}
                height={600}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {videos && videos.length > 0 && (
        <section id="videa" className="py-24 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Videa v akci</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((vid: { url: string; title: string }, idx: number) => (
                <div key={idx} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-stone-200">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`${vid.url}?rel=0&modestbranding=1`}
                    title={vid.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — premium section with background image */}
      <section id="objednat" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/magus-v1/magus-hero.jpg"
            alt="Kitech Magus V1"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-4 block">Objednávka</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Připraven(a) posunout<br />své limity?</h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Získej bestii, která tvůj freeride vystřelí do vesmíru. Zjisti dostupnost a ceny, nebo rovnou objednej na e-shopu.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link 
                href="/kontakt" 
                className="w-full px-8 py-5 bg-white text-gray-900 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                Napsat nám — cena na dotaz
              </Link>
              <a 
                href="https://big-day.online?product=magus-v1" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-5 bg-orange-500 hover:bg-orange-400 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Koupit na e-shopu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <p className="text-gray-400 text-sm text-center mt-2">Dodání do 2–4 týdnů · Barva na přání zdarma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
