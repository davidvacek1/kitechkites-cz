import Image from "next/image";
import Link from "next/link";
import videosData from "../../../content/videos.json";
import LightboxGallery from "@/components/Lightbox";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitech FRS V2 | Bezpečný výkon bez kompromisů",
  description: "Univerzální komorový kite Kitech FRS V2 s bezkonkurenčním rozsahem větru, extrémní stabilitou a plynulým výkonem.",
  alternates: {
    canonical: "/frs-v2",
  },
};

const images = [
  "gallery_1_tn.jpg",
  "gallery_2.jpg",
  "gallery_4_tn.jpg",
  "gallery_5_tn.jpg",
  "gallery_6_tn.jpg",
  "gallery_7_tn.jpg",
  "gallery_8_tn.jpg",
  "gallery_9_tn.jpg",
  "gallery_10_tn.jpg",
];

export default function FRS() {
  const videos = videosData["frs-v2"];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Kitech FRS V2",
            "image": "https://kitechkites.cz/images/frs-v2/gallery_2.jpg",
            "description": "Univerzální komorový kite Kitech FRS V2 s bezkonkurenčním rozsahem větru, extrémní stabilitou a plynulým výkonem.",
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
            src="/images/frs-v2/gallery_2.jpg"
            alt="Kitech FRS V2 v akci"
            fill
            priority
            className="object-cover object-top"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/50 to-stone-50 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <span className="px-4 py-1.5 bg-cyan-500 text-white text-sm font-bold uppercase tracking-widest rounded-sm mb-6 inline-block animate-fade-in">
            Bestseller
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg animate-fade-in-delayed">
            Kitech FRS V2
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl md:text-3xl text-gray-200 drop-shadow-md animate-fade-in-slow font-light">
            Bezpečný výkon bez kompromisů
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-slow">
            <a 
              href="#objednat" 
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Chci ho zkusit
            </a>
          </div>
        </div>
      </section>

      {/* 2. Features — LIGHT */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Svoboda bez kompromisů</h2>
              <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 font-light mb-6">
                FRS V2 je navržený tak, aby tě nikdy nenechal na holičkách. Ať už jezdíš na hydrofoilu ve slabém vánku, skáčeš vysoko na twintipu nebo objevuješ zasněžené pláně na lyžích, tento kite se přizpůsobí.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Širší rozsah větru než konkurence – jezdi víc dní v roce.",
                  "Extrémní skoky + dlouhý hangtime + měkké doskoky.",
                  "Bleskový a spolehlivý restart z vody.",
                  "Ultra stabilní – odpustí chyby začátečníkům, nadchne profíky.",
                  "Vyrobeno v Evropě s precizností, testováno letem.",
                  "Barva na přání bez příplatku – tvůj osobitý styl."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-lg font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <Image
                src="/images/frs-v2/features_4.jpg"
                alt="Kitech FRS V2 ve vzduchu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech — WHITE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologická špička</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Každý detail je navržený pro maximální výkon, odolnost a snadné použití.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Profil křídla nové generace</h3>
              <p className="text-gray-600 font-light">Optimalizovaná aerodynamika pro hladší let, obrovskou stoupavost proti větru a dokonalou kontrolu v poryvech.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">UL materiály</h3>
              <p className="text-gray-600 font-light">Kombinace prémiového materiálu Porcher Skytex 32g pro odolnost a 27g pro snížení váhy. Kite letí i v tom nejslabším větru.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Dyneema lajny Liros</h3>
              <p className="text-gray-600 font-light">Německá kvalita. Extrémně pevné, tenké a s nulovou průtažností pro okamžitou odezvu na baru.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Ronstan kladky</h3>
              <p className="text-gray-600 font-light">Prémiové kladky odolné proti písku a soli. Zajišťují naprosto hladký chod celého speed systému.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Rychlé vypuštění vzduchu</h3>
              <p className="text-gray-600 font-light">Speciální vnitřní ventily a odtokové otvory ti umožní sbalit kite během pár vteřin.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Nastavitelné brzdové šňůry</h3>
              <p className="text-gray-600 font-light">Mixer test a přesné naladění brzdy ti dává možnost upravit si chování kitu přesně podle tvých preferencí.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Break — fullwidth image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/frs-v2/gallery_1_tn.jpg"
            alt="FRS V2 v akci"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Navrženo k dokonalosti.<br />
            <span className="text-cyan-400">Vyrobeno s vášní.</span>
          </p>
        </div>
      </section>

      {/* 4. Bar + In the box — LIGHT */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 border border-stone-200 shadow-sm">
                <Image
                  src="/images/frs-v2/section_bar-768x768.jpg"
                  alt="Kitech Bar System"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nový Kitech Bar System</h3>
              <p className="text-gray-600 font-light mb-6">Čistý design, naprostá bezpečnost a ergonomie.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span> Komfortní a neklouzavý EVA grip</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span> Nerezový střed a Liros Dyneema depower lajny</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span> Moderní Quick Release systém s rotující hlavou proti zamotání</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span> 3 velikosti chicken loopu (včetně Rope Slider verze)</li>
              </ul>
            </div>

            <div>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-8 border border-stone-200 shadow-sm">
                <Image
                  src="/images/frs-v2/hatizsak-eleje-bartaskaval.jpg"
                  alt="Kitech High Tech Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Co dostaneš v balení?</h3>
              <p className="text-gray-600 font-light mb-6">Vše, co potřebuješ pro okamžitou akci, v prémiovém balení.</p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> Kite FRS V2</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> High Tech Kite Bag</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> Kompresní pás</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> 2 pytlíky s pískem</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> Repair kit</li>
                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> Klíčenka Kitech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Specifikace — WHITE */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technické specifikace</h2>
            <p className="text-xl text-gray-500 font-light">Přesná čísla pro přesné rozhodnutí.</p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl overflow-hidden max-w-4xl mx-auto shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-cyan-50 border-b border-stone-200">
                    <th className="px-6 py-4 text-cyan-700 font-bold text-sm uppercase tracking-wider">Parametr</th>
                    <th className="px-6 py-4 text-cyan-700 font-bold text-sm uppercase tracking-wider">Hodnota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">Typ</td>
                    <td className="px-6 py-4 text-gray-600">Uzavřená komora (closed cell)</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">Dostupné velikosti</td>
                    <td className="px-6 py-4 text-gray-600">5m, 7m, 9m, 12m, 15m</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">Materiál</td>
                    <td className="px-6 py-4 text-gray-600">Porcher Skytex 32g / 27g (UL)</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">Lajny</td>
                    <td className="px-6 py-4 text-gray-600">Liros Dyneema</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-800 font-medium">Použití</td>
                    <td className="px-6 py-4 text-gray-600">Freeride, Freestyle, Hydrofoil, Snowkite, Landkite</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-6 py-4 text-gray-800 font-medium">Barva</td>
                    <td className="px-6 py-4 text-gray-600">Na přání (bez příplatku)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { size: "5", wind: "20–35", pct: 90, style: "Big Air, Strong wind" },
              { size: "7", wind: "15–28", pct: 72, style: "Freestyle, Freeride" },
              { size: "9", wind: "12–22", pct: 55, style: "Allround, Hydrofoil" },
              { size: "12", wind: "8–18", pct: 38, style: "Light wind, Foil" },
              { size: "15", wind: "6–14", pct: 22, style: "Ultra light, Foil" },
            ].map((s) => (
              <div key={s.size} className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-cyan-600 mb-1">{s.size}<span className="text-lg font-bold text-gray-400">m²</span></div>
                <div className="text-sm text-gray-500 font-light mb-4">{s.style}</div>
                <div className="w-full bg-stone-200 rounded-full h-2 mb-2">
                  <div className="bg-cyan-500 h-2 rounded-full transition-all" style={{ width: `${s.pct}%` }}></div>
                </div>
                <div className="text-sm font-bold text-gray-700">{s.wind} kn</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery — LIGHT */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galerie FRS V2</h2>
            <p className="text-xl text-gray-500 font-light">Podívej se na kite v jeho přirozeném prostředí.</p>
          </div>
          
          <LightboxGallery
            images={images.map((img, idx) => ({
              src: `/images/frs-v2/${img}`,
              alt: `Kitech FRS V2 detail ${idx + 1}`,
            }))}
          />
        </div>
      </section>

      {/* 7. Videos — WHITE */}
      <section id="videa" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Videa v akci</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
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

      {/* 8. CTA — premium section with background image */}
      <section id="objednat" className="relative py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/frs-v2/features_4.jpg"
            alt="Kitech FRS V2 na vodě"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4 block">Objednávka</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Jsi připraven(a)<br />vzlétnout?</h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Cena se liší dle velikosti a specifikace. Napiš nám a my ti připravíme nabídku přímo na míru — nebo si kite rovnou objednej v e-shopu.
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
                href="https://big-day.online?product=frs-v2" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-5 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
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
