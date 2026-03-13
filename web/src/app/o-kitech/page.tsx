import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Kitech | Příběh prémiových kitů z Evropy",
  description: "Značka Kitech Kites se zrodila u Balatonu. Od roku 2002 šijeme a vyvíjíme komorové draky z těch nejlepších materiálů přímo v Evropě.",
  alternates: {
    canonical: "/o-kitech",
  },
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-gray-900">
      {/* 1. Hero — dark band with image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/general/ki.jpg"
            alt="Kitech Lifestyle"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-stone-50" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg animate-fade-in">
            Zrozeno z vášně k větru
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 animate-fade-in-delayed font-light">
            Jsme jedna z posledních nezávislých značek, která své kity vyvíjí i šije výhradně v Evropě.
          </p>
        </div>
      </section>

      {/* 2. Brand Story — LIGHT */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <Image
                src="/images/general/3365.jpg"
                alt="Výroba a testování kitů"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Made in Europe. Opravdu.</h2>
              <div className="w-16 h-1 bg-cyan-500 rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 font-light mb-6 leading-relaxed">
                Většina značek dnes zadává svou výrobu do asijských megatováren. My v Kitech na to jdeme jinak. Náš domov je u jezera Balaton v Maďarsku, kde od roku 2002 vyvíjíme, šijeme a testujeme každý jeden kite, který opustí naši dílnu.
              </p>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                Naším závazkem je nekompromisní kvalita. Používáme legendární francouzské materiály <strong className="text-gray-900 font-medium">Porcher Skytex</strong> a německé lajny <strong className="text-gray-900 font-medium">Dyneema od firmy Liros</strong>. Co to znamená pro tebe? Kite, který letí čistěji, vydrží déle a udrží si své vlastnosti i po letech agresivního ježdění.
              </p>
              <div className="bg-white border border-stone-200 rounded-xl p-6 flex items-start shadow-sm">
                <svg className="w-8 h-8 text-cyan-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Testováno v letu</h4>
                  <p className="text-gray-600 text-sm font-light">Každý jednotlivý drak je před odesláním vytažen na nebe naším týmem. K tobě domů dorazí perfektně vytrimovaný stroj.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline — WHITE */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">Naše cesta</h2>
          
          <div className="space-y-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-stone-200"></div>

            <div className="relative flex items-center justify-between z-10">
              <div className="w-5/12 text-right">
                <h3 className="text-2xl font-bold text-cyan-600">1998</h3>
                <p className="text-gray-600 font-light mt-2">První experimenty na poli tažných draků a komorových designů.</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-white mx-auto shadow-sm"></div>
              <div className="w-5/12"></div>
            </div>

            <div className="relative flex items-center justify-between z-10">
              <div className="w-5/12"></div>
              <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-white mx-auto shadow-sm"></div>
              <div className="w-5/12 text-left">
                <h3 className="text-2xl font-bold text-cyan-600">2002</h3>
                <p className="text-gray-600 font-light mt-2">Oficiální založení značky Kitech. Startujeme sériovou výrobu s naceněním ruční práce.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between z-10">
              <div className="w-5/12 text-right">
                <h3 className="text-2xl font-bold text-cyan-600">2018</h3>
                <p className="text-gray-600 font-light mt-2">Rozšiřujeme distribuci, optimalizujeme design a uvádíme nové bestsellery.</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-white mx-auto shadow-sm"></div>
              <div className="w-5/12"></div>
            </div>

            <div className="relative flex items-center justify-between z-10">
              <div className="w-5/12"></div>
              <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-white mx-auto shadow-md shadow-cyan-200"></div>
              <div className="w-5/12 text-left">
                <h3 className="text-2xl font-bold text-cyan-600">Dnes</h3>
                <p className="text-gray-600 font-light mt-2">S modely FRS V2 a Magus V1 posouváme limity freeride, hydrofoil a big-air ježdění.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturer Contact — LIGHT */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Centrála Kitech Kites</h2>
          <p className="text-gray-600 font-light mb-12 max-w-2xl mx-auto">
            Máš specifický dotaz na výrobu, vývoj nebo materiály? Naše dílna a centrála se nachází v Maďarsku, rádi se s tebou spojíme. Pro nákup a distribuci v ČR využij naši <Link href="/kontakt" className="text-cyan-600 hover:underline">českou podporu</Link>.
          </p>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm inline-block mx-auto text-left">
            <div className="space-y-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-cyan-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@kitechkites.com" className="text-gray-700 hover:text-cyan-600 transition-colors text-lg">info@kitechkites.com</a>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-cyan-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+36209467515" className="text-gray-700 hover:text-cyan-600 transition-colors text-lg">+36 20 9467 515</a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-stone-200 flex justify-center space-x-6">
              <a href="https://www.facebook.com/KitechKites" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.instagram.com/kitechkites/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.youtube.com/@kitechkites" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
