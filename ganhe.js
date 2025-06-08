
export default function Ganhe() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Ofertas com Cashback</h1>
      <ul className="space-y-4">
        <li><a href="#" className="text-blue-500 underline">Oferta Shopee</a></li>
        <li><a href="#" className="text-blue-500 underline">Oferta Amazon</a></li>
        <li><a href="#" className="text-blue-500 underline">Oferta Magalu</a></li>
      </ul>
      <a
        href="https://wa.me/5511987963858?text=Olá!%20Vi%20o%20site%20BuscaMaisBarato.com%20e%20quero%20saber%20mais%20sobre%20as%20promoções."
        target="_blank"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Fale conosco no WhatsApp
      </a>
    </div>
  );
}
