function Home() {
  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <h1 className="text-5xl font-bold">
            Welcome to FakeStore
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-blue-100">
            Discover premium fashion, electronics, jewelry and much more at
            unbeatable prices.
          </p>

          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105">
            Shop Now
          </button>

        </div>
      </section>

      {/* Search */}
      <section className="mx-auto mt-10 max-w-7xl px-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Categories */}
      <section className="mx-auto mt-12 max-w-7xl px-6">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-xl bg-white p-8 text-center shadow transition hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* Featured Products */}
      <section className="mx-auto mt-16 max-w-7xl px-6 pb-20">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <button className="font-semibold text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-60 items-center justify-center bg-gray-100">
                <span className="text-gray-400">
                  Product Image
                </span>
              </div>

              <div className="space-y-3 p-5">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Category
                </span>

                <h3 className="line-clamp-2 text-lg font-semibold">
                  Product Title
                </h3>

                <p className="line-clamp-2 text-sm text-gray-500">
                  Product description goes here...
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    $99.99
                  </span>

                  <span>⭐ 4.8</span>
                </div>

                <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;