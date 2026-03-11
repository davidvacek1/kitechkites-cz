export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-center mb-8">
        Vítejte u Kitech Kites CZ/SK
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 text-center mb-12">
        Špičkové foil kity pro freeride, hydrofoil a snowkiting. Extrémní výkon, lehkost a ovladatelnost.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
          <h2 className="text-2xl font-bold mb-4">FRS V2</h2>
          <p className="text-gray-400 mb-4">Uzavřená komora pro univerzální použití - voda, sníh, land.</p>
          <a href="/frs-v2" className="text-blue-400 hover:text-blue-300 font-medium">Zjistit více &rarr;</a>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
          <h2 className="text-2xl font-bold mb-4">Magus V1</h2>
          <p className="text-gray-400 mb-4">Otevřená komora - ultimátní výkon pro snowkiting a landkiting.</p>
          <a href="/magus-v1" className="text-blue-400 hover:text-blue-300 font-medium">Zjistit více &rarr;</a>
        </div>
      </div>
    </div>
  );
}