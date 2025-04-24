import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const kidsEarrings: Product[] = [
  { id: 1, name: 'Zlaté naušnice "kytičky“',  price: 35, image: '/images/kyticky.jpg' },
  { id: 2, name: 'Stříbrné náušnice „kytičky“', price: 28, image: '/images/kyticky1.jpg' },
  { id: 3, name: 'Zlaté naušnice "kytičky“',       price: 22, image: '/images/kyticky2.jpg' },
];

const KidsEarringsPage: React.FC = () => (
  <main className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8 text-center">Dětské náušnice</h1>

    <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {kidsEarrings.map(({ id, name, price, image }) => (
        <article
          key={id}
          className="border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-48 rounded-xl mb-4"
          />

          <h2 className="text-lg font-semibold flex-1">{name}</h2>
          <p className="text-primary text-xl font-bold mt-2">
            {price.toFixed(2)}&nbsp;€
          </p>

          <button
            type="button"
            className="mt-4 bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition"
          >
            Přidat do košíku
          </button>
        </article>
      ))}
    </section>
  </main>
);

export default KidsEarringsPage;
