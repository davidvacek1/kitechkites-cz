# PRD: KitechKites.cz — Webová prezentace

## Metadata
- **Projekt:** kitechkites-cz
- **Klient:** Jan Procházka (kamarád Jáji, hlavní CZ distributor Kitech)
- **Zadavatel:** Jája Hrabalová
- **Datum:** 2026-03-11
- **Status:** DRAFT — čeká na schválení Jájou

## Cíl
Vytvořit prémiovou webovou prezentaci pro Kitech Kites Česko, která:
1. Budí touhu po produktu — návštěvník musí chtít kajta hned mít doma
2. Vypadá na úrovni světových značek (reference: ozonekites.com)
3. Je technicky čistá, rychlá, SEO-ready, responzivní
4. Slouží jako hlavní landing pro CZ trh

## Kontext
- **Aktuální stav:** webnode (kitechkites-cz6.webnode.cz) — neprofesionální, musí pryč
- **Cílová doména:** kitechkites.cz (přístup čeká od Honzy)
- **Dodavatel/výrobce:** wp.kitechkites.com (maďarská výroba, od 2002)
- **E-shop:** big-day.online (Upgates, zatím neaktivní) — tlačítko "Koupit" bude redirect sem
- **Jája vlastní FRS v1 i v2** — osobní zkušenost s produktem

## Produkty

### Kitech FRS V2 (hlavní produkt)
- Versatilní komorový kite, high performance + enjoyable
- Široký rozsah větru, jeden z největších ve třídě
- Extrémně snadný restart z vody
- Vysoké skoky, dlouhý hangtime, měkké doskoky
- Vynikající stoupavost proti větru
- Ultra stabilní — vhodný pro začátečníky i pokročilé
- Vyrobeno v Evropě (Maďarsko, u Balatonu), materiál Porcher Skytex 32g/27g
- UL materiály, Dyneema lajny Liros
- Každý kite testován letem před odesláním
- Barva na přání bez příplatku
- Balení: kite, High Tech Kite Bag, kompresní pás, 2 pytlíky s pískem, repair kit, klíčenka

### Kitech Magus V1 (sekundární produkt)
- High performance freeride–freestyle kite
- Pro pokročilé jezdce
- Vyladěnější než FRS — víc performance
- (Méně dat k dispozici — doplnit z wp.kitechkites.com/kitech-magus-v1/)

### Bar systém (příslušenství)
- Clean design, lehký, ergonomický, EVA grip
- Nerezový střed, Liros Dyneema depower lajny
- Nový Quick Release, rotující hlava
- 3 velikosti loop, dostupný i Rope Slider verze

## Design & UX požadavky

### Vizuální styl (reference: ozonekites.com)
- [ ] Fullscreen hero sekce s velkou fotkou/videem (akce na vodě)
- [ ] Tmavé pozadí (černá/tmavě šedá) s výraznými accent barvami
- [ ] Velká typografie — moderní sans-serif (Inter, Manrope, nebo podobný)
- [ ] Plynulé scroll animace (parallax, fade-in)
- [ ] Fotky/videa jako dominantní element — text doplňuje, netlačí se do popředí
- [ ] Mobilní design jako priorita (kiteři browsují na telefonu na pláži)

### Struktura stránek
- [ ] **Homepage** — hero video/foto, brand story, proč Kitech, CTA
- [ ] **FRS V2** — detailní produktová stránka (specifikace, galerie, video, features, CTA "Koupit")
- [ ] **Magus V1** — detailní produktová stránka (stejný layout)
- [ ] **O Kitechi** — příběh značky (od 2002, evropská výroba, kvalita)
- [ ] **Kontakt** — Jan Procházka, formulář, telefon, socials
- [ ] **Galerie/Video** — embedded YouTube, action fotky

### Obsah (copywriting)
- [ ] Texty v ČEŠTINĚ — ne překlad, ale originální copy psaná pro CZ trh
- [ ] Emocionální jazyk — "Když to zkusíš, nechceš lítat nic jiného"
- [ ] Jájin personal touch — osobní zkušenost jako testimonial
- [ ] Technické specifikace přesné dle výrobce
- [ ] SEO: title tags, meta descriptions, alt texty, H1-H3 struktura

## Tech Stack
- [ ] **Framework:** Next.js 15 (App Router, SSG/ISR)
- [ ] **Styling:** Tailwind CSS 4 + CSS animations
- [ ] **Obsah:** MDX soubory (snadná editace textů)
- [ ] **Obrázky:** next/image s optimalizací, WebP/AVIF
- [ ] **Videa:** YouTube/Vimeo embeds (lazy load)
- [ ] **Deploy:** Dokploy na VPS (stejně jako seopohotovost.cz)
- [ ] **Repo:** GitHub (davidvacek1/kitechkites-cz)
- [ ] **Doména:** kitechkites.cz (pending — zatím dev na subdomain/localhost)
- [ ] **Analytics:** umami nebo plausible (self-hosted)

## Grafické zdroje
- [ ] Stáhnout VŠECHNY fotky z wp.kitechkites.com (produktové, action, detail)
- [ ] Stáhnout fotky z kitechkites-cz6.webnode.cz
- [ ] YouTube videa z kanálu @kitechkites (embed, ne stahovat)
- [ ] Nano Banana Pro POUZE pro hero bannery/backgrounds kde je potřeba custom grafika
- [ ] ⚠️ NIKDY nemodifikovat produktové fotky — musí odpovídat realitě

## E-shop integrace
- [ ] Tlačítko "Koupit" → redirect na big-day.online (parametr ?product=frs-v2 apod.)
- [ ] Ceník: placeholder "Cena na dotaz" + kontaktní formulář (ceník dodá Honza později)
- [ ] Až bude ceník: dynamicky zobrazit ceny

## SEO
- [ ] Sitemap.xml, robots.txt
- [ ] Structured data (Product, Organization, LocalBusiness)
- [ ] Open Graph + Twitter cards pro sdílení
- [ ] Core Web Vitals optimalizace (LCP < 2.5s, CLS < 0.1)
- [ ] Hreflang cs-CZ (primárně český web)

## Acceptance Criteria
- [ ] Web běží na Dokploy, HTTPS, < 3s load time
- [ ] Responzivní na mobilu, tabletu, desktopu
- [ ] Všechny produktové stránky mají fotogalerii, specifikace, CTA
- [ ] Homepage hero sekce s videem nebo velkou fotkou
- [ ] Texty v češtině, emocionální, SEO-optimalizované
- [ ] Tlačítko "Koupit" redirectuje na big-day.online
- [ ] Lighthouse score > 90 (Performance, SEO, Accessibility)
- [ ] Kontrolor schválí QA (žádné broken links, chybějící obrázky, layout bugy)

## Delegační řetězec

```
Jája → schválí PRD
David 🦞 → deleguje na Webmaster + dohlíží
Webmaster 🌐 (Opus) → orchestruje:
  ├── Codex (GPT-5.4) → kóduje Next.js, stahuje assets, implementuje design
  ├── Kimi K2.5 → píše české texty (copywriting)
  └── Nano Banana Pro → custom hero grafika (pokud potřeba)
Kontrolor 🔍 (GPT-5.4) → testuje výstup, reportuje bugy
David 🦞 → final review vs PRD
Jája → finální schválení
```

## Fáze

### Fáze 1: Scaffolding & Assets (den 1)
- [ ] Next.js projekt scaffold
- [ ] Stáhnout všechny grafické zdroje
- [ ] GitHub repo setup
- [ ] Základní layout + navigation

### Fáze 2: Design & Homepage (den 1-2)
- [ ] Hero sekce (video/foto)
- [ ] Navigace, footer
- [ ] Brand story sekce
- [ ] Responzivní design

### Fáze 3: Produktové stránky (den 2-3)
- [ ] FRS V2 kompletní stránka
- [ ] Magus V1 kompletní stránka
- [ ] Galerie/fotky integration
- [ ] Specifikace tabulky

### Fáze 4: Obsah & SEO (den 3)
- [ ] České texty (copywriting)
- [ ] SEO metadata
- [ ] Structured data
- [ ] Kontaktní stránka + formulář

### Fáze 5: Deploy & QA (den 3-4)
- [ ] Deploy na Dokploy
- [ ] Kontrolor QA pass
- [ ] Lighthouse audit
- [ ] Finální review David → Jája

## Blokátory
- ⏳ Doména kitechkites.cz — čeká na přístup od Honzy
- ⏳ Ceník — dodá Honza (placeholder "Cena na dotaz")
- ⏳ E-shop big-day.online — Upgates setup (separátní projekt)

## Rizika
- Ozone web používá Cloudflare (nešlo scrapnout) — design reference jen vizuální
- Magus V1 má minimum dat na webu — může být potřeba doplnit od Honzy
- Fotky z wp.kitechkites.com mohou být nízké rozlišení — ověřit
