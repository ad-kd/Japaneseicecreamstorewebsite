import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to Yukihana
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Experience the art of Japanese ice cream craftsmanship
          </p>
          <p className="text-lg text-gray-500">
            伝統的な味わいを現代に
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Flavors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-4">
        <div className="container mx-auto text-center text-gray-600">
          <p className="mb-2">🍦 Crafted with love and tradition</p>
          <p className="text-sm">© 2026 Yukihana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
