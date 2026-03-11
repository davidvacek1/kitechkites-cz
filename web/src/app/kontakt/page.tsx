export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-6">
        Kontakt
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mb-12">
        Máte dotaz ohledně draků nebo barů? Napište nám. Poradíme s výběrem.
      </p>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Spojte se s námi</h2>
        <ul className="text-gray-400 space-y-4">
          <li><strong>Sociální sítě:</strong> Facebook, Instagram</li>
          <li><strong>Region:</strong> ČR / SK</li>
        </ul>
      </div>
    </div>
  );
}