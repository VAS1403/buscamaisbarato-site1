
import Link from 'next/link';

export default function Home() {
  const produtos = [
    { nome: 'Fone de Ouvido Bluetooth', preco: 59.90, loja: 'Shopee' },
    { nome: 'Smartwatch Fitness', preco: 89.90, loja: 'Amazon' },
    { nome: 'Liquidificador Turbo', preco: 129.99, loja: 'Magalu' },
  ];

  const produtosOrdenados = produtos.sort((a, b) => a.preco - b.preco);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-600 mb-4">BuscaMaisBarato.com</h1>
      <p className="mb-4">Compare os menores preços nas principais lojas!</p>
      <div className="grid gap-4">
        {produtosOrdenados.map((produto, index) => (
          <div key={index} className="p-4 rounded border shadow">
            <p className="text-lg font-semibold">{produto.nome}</p>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
            <p>Loja: {produto.loja}</p>
          </div>
        ))}
      </div>
      <Link href="/ganhe" className="block mt-6 text-blue-600 underline">Ir para promoções</Link>
    </div>
  );
}
