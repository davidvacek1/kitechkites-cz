import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte oficiální zastoupení Kitech Kites pro Českou republiku. Jan Procházka - testovací jízdy, prodej a servis komorových kitů.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}