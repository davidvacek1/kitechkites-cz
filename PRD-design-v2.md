# PRD: KitechKites.cz Design Polish V2

**Datum:** 2026-03-11
**Autor:** Webmaster (Opus 4.6)
**Stav:** Schváleno k implementaci

---

## Kontext
Web KitechKites.cz je funkční (všechny stránky, SEO, lightbox). Design potřebuje polish — od šablonového dojmu k prémiovému. Fotky ve vysokém rozlišení zatím nejsou k dispozici, proto řešíme vše kromě nich.

## Nová data od klienta
- **Firma:** Street Moto s.r.o.
- **IČO:** 27981819
- **DIČ:** CZ27981819
- **Tel:** +420 724 315 804
- **Role:** Oficiální importér Kitech Kites pro ČR a SR

---

## Kroky implementace

### KROK 1: Aktualizace firemních údajů ✅
- [x] Footer: přidat "Street Moto s.r.o., IČO: 27981819"
- [x] Kontakt page: aktualizovat telefon na +420 724 315 804, přidat IČO/DIČ, firma
- [x] Structured data (layout.tsx): aktualizovat telephone + přidat legalName
- [x] Homepage CTA: telefon +420 724 315 804
- [x] Sjednotit všude: Street Moto s.r.o. = importér, Jan Procházka = kontaktní osoba

### KROK 2: Homepage hero — jeden CTA ✅
- [x] Nahradit dva produktové buttony jedním: "Objevit naše kity" → scroll dolů na #produkty
- [x] Přidat `id="produkty"` na sekci Product Showcase
- [x] Ghost button: "Více o značce" → /o-kitech

### KROK 3: "Proč Kitech" — redukce na 3 karty ✅
- [x] Zredukovat z 6 na 3 hlavní výhody
- [x] Karty zvětšit, centrovat text, více dýchání

### KROK 4: Footer — plnohodnotný ✅
- [x] 4 sloupce: Brand/Socials | Produkty | O značce | Kontakt
- [x] Copyright řádek: "© 2026 Kitech Kites CZ — Street Moto s.r.o., IČO 27981819"
- [x] Zachován odkaz na SEO Pohotovost

### KROK 5: FRS V2 — statement break sekce ✅
- [x] Fullwidth fotka s tmavým overlayem mezi Tech a Bar sekcí
- [x] Statement: "Navrženo k dokonalosti. Vyrobeno s vášní."

### KROK 6: Specifikace — vizuální size chart ✅
- [x] 5 karet místo tabulky (5m, 7m, 9m, 12m, 15m)
- [x] Každá karta: číslo, styl, progress bar, wind range
- [x] Zachována obecná spec tabulka nad size chartem

### KROK 7: Scroll-triggered animace ✅
- [x] FadeIn component s IntersectionObserver
- [x] Aplikováno na homepage sekce (Products heading, Why Kitech heading)
- [x] Subtle 0.6s ease-out

---

## Mimo scope (čeká na podklady)
- Výměna fotek za high-res originály (čeká na Honzu)
- Ověření velikostí a větrných rozsahů (čeká na Honzu)
- Aktivace e-shopu big-day.online

## Pořadí
1 → 2 → 3 → 4 → 5 → 6 → 7 (každý krok = samostatný commit-worthy unit)
