import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section — stays dark/dramatic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/frs-v2/gallery_2.jpg"
            alt="Kitech FRS V2 v akci"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/40 to-stone-50 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20">
          <div className="mb-6 animate-fade-in">
            <Image
              src="/images/general/logo.png"
              alt="Kitech Kites Logo"
              width={180}
              height={60}
              className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg animate-fade-in-delayed leading-tight">
            Když to zkusíš, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              nechceš lítat nic jiného
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl md:text-2xl text-gray-200 drop-shadow-md animate-fade-in-slow font-light">
            Prémiové komorové kity vyráběné v Evropě od roku 2002.
            Zažij ultimátní výkon, stabilitu a svobodu na vodě, sněhu i souši.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow">
            <a 
              href="#produkty" 
              className="px-10 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-cyan-600 hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Objevit naše kity
            </a>
            <Link 
              href="/o-kitech" 
              className="px-8 py-4 border border-white/30 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Více o značce
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center text-gray-300">
          <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Objev více</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. Product Showcase — LIGHT */}
      <section id="produkty" className="py-24 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Vyber si svou zbraň</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Dva modely vyladěné k dokonalosti. Od univerzálního freeride all-roundera po high-performance mašinu.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* FRS V2 Card */}
            <Link href="/frs-v2" className="group block h-full">
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden group-hover-lift h-full flex flex-col shadow-sm">
                <div className="relative h-80 sm:h-96 w-full img-zoom-container">
                  <Image
                    src="/images/frs-v2/gallery_1_tn.jpg"
                    alt="Kitech FRS V2"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-3 inline-block">Bestseller</span>
                    <h3 className="text-3xl font-bold text-white mb-1">FRS V2</h3>
                    <p className="text-gray-200">Freeride / Freestyle / Hydrofoil</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 text-lg mb-6 flex-grow font-light">
                    Ultimátní uzavřená komora pro univerzální použití. Bezkonkurenční rozsah větru, extrémní stabilita a plynulý výkon. Tvůj spolehlivý parťák pro vodu, sníh i land.
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium group-hover:text-cyan-500 transition-colors">
                    <span className="mr-2">Detail produktu</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Magus V1 Card */}
            <Link href="/magus-v1" className="group block h-full">
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden group-hover-lift h-full flex flex-col shadow-sm">
                <div className="relative h-80 sm:h-96 w-full img-zoom-container">
                  <Image
                    src="/images/magus-v1/Kitech-Magus-12-snowkite-2.jpg"
                    alt="Kitech Magus V1"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-3 inline-block">High Performance</span>
                    <h3 className="text-3xl font-bold text-white mb-1">Magus V1</h3>
                    <p className="text-gray-200">Freeride / Big Air / Hangtime</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 text-lg mb-6 flex-grow font-light">
                    Otevřená komora navržená pro maximální výkon a obrovské skoky s nekonečným hangtimem. Agresivnější, rychlejší a hladovější po adrenalinu.
                  </p>
                  <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-400 transition-colors">
                    <span className="mr-2">Detail produktu</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Kitech Section — LIGHT alternate bg */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proč létat s Kitech?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Žádná masová výroba v Asii. Kitech je o preciznosti, prémiových materiálech a osobním přístupu.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 mx-auto">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Made in Europe</h3>
              <p className="text-gray-600 font-light leading-relaxed">Vyvíjeno a ručně šito v Maďarsku u jezera Balaton. Více než 20 let tradice, preciznosti a evropské kvality.</p>
            </div>

            <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 mx-auto">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Testováno v letu</h3>
              <p className="text-gray-600 font-light leading-relaxed">Každý jednotlivý kite je před odesláním reálně otestován na obloze naším týmem. Žádná překvapení na pláži.</p>
            </div>

            <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 mx-auto">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Barvy na přání zdarma</h3>
              <p className="text-gray-600 font-light leading-relaxed">Odliš se od davu. Nakombinuj si vlastní barevný design kitu zcela bez příplatku — tvůj styl, tvůj kite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Video Section — subtle warm bg */}
      <section className="relative py-32 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Čistá radost <br className="hidden md:block" />z letu</h2>
              <p className="text-xl text-gray-600 font-light mb-8">
                Podívej se na Kitech FRS v akci. Plynulý výkon na hydrofoilu, měkké dopady po obrovských skocích a kontrola, kterou musíš zažít.
              </p>
              <Link 
                href="/frs-v2#videa" 
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-500 text-lg transition-colors group"
              >
                <span>Další videa v galerii</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/3SyLTk6-nm4?rel=0&modestbranding=1" 
                  title="Kitech FRS 9m Hydrofoil" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonial Section — dramatic dark band */}
      <section className="relative py-24 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/general/ki.jpg"
            alt="Kitech Lifestyle Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/85"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-16 h-16 mx-auto text-cyan-500 mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white italic leading-relaxed mb-8">
            &quot;Kite, který mě nezklamal ani v nejslabším větru. Ultra stabilní, přesné řízení a skoky, které jsem nečekala.&quot;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-cyan-500 rounded-full mb-4"></div>
            <p className="text-xl font-bold text-white">Jája H.</p>
            <p className="text-gray-300">kitesurferka od roku 2018</p>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA — LIGHT */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Máš zájem? <br className="hidden sm:block" />Kontaktuj nás</h2>
          <p className="text-xl text-gray-500 mb-10 font-light max-w-2xl mx-auto">
            Poradíme s výběrem správné velikosti a modelu. Ozvi se Janu Procházkovi pro individuální nabídku.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="/kontakt" 
              className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold rounded-lg transition-colors shadow-lg"
            >
              Napsat zprávu
            </Link>
            <a 
              href="tel:+420724315804" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 hover:border-gray-400 text-gray-700 text-lg font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Zavolat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
