export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-900 text-center py-32">
        <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">
          Welcome to My App
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Explore items, add your own, and manage everything easily!
        </p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-32 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Features
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Feature 1</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Feature 2</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Feature 3</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white dark:bg-gray-900 text-center py-32">
        <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
          How It Works
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Login, view items, add your own items if authenticated.
        </p>
      </section>

      {/* Popular Items */}
      <section className="bg-gray-50 dark:bg-gray-800 text-center py-32">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Popular Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Item 1</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Item 2</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Item 3</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white dark:bg-gray-900 text-center py-32">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Testimonials
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          "This app is amazing!" – Happy User
        </p>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 dark:bg-gray-800 text-center py-32">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Basic Plan</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Pro Plan</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Enterprise</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white dark:bg-gray-900 text-center py-32">
        <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
          Get Started Today
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Sign up or login to add your own items!
        </p>
        <a
          href="/login"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login / Sign Up
        </a>
      </section>
    </div>
  );
}
